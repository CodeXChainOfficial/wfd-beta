import React, { useEffect, useMemo, useState } from "react";
import { Box, Flex, Image, Container, Text } from "@chakra-ui/react";
import SwapCard, { SwapType } from "../components/Swap/SwapCard";
import { ButtonTransition } from "../components/ImageTransition";
import Footer from "../components/Footer";
import InfoCard from "../components/Swap/InfoCard";

import { RouterProtocol } from "@routerprotocol/router-js-sdk";
import { ROUTER_CHAIN_CONFIG, CHAIN_TYPE } from "../config/constants/swap";
import { ethers } from "ethers";
import { useMetamaskWallet } from "../contexts/metamask";
import { ERC20_ABI, ERROR_OPTION, SUCCESS_OPTION } from "../config/constants";
import { toast } from "react-toastify";

export default function RouterSwap() {
  const [inChain, setInChain] = useState<CHAIN_TYPE>("Polygon");
  const [inToken, setInToken] = useState("");
  const [inValue, setInValue] = useState("0");

  const [feeToken, setFeeToken] = useState("");
  const [outChain, setOutChain] = useState<CHAIN_TYPE>("Ethereum");
  const [outToken, setOutToken] = useState("");
  const [outValue, setOutValue] = useState("0");

  const [isLoading, setIsLoading] = useState(false);

  const [routerProtocol, setRouterProcol] = useState<RouterProtocol>();
  const inChainInfo = ROUTER_CHAIN_CONFIG[inChain];
  const outChainInfo = ROUTER_CHAIN_CONFIG[outChain];

  const provider = new ethers.providers.JsonRpcProvider(
    inChainInfo.rpc,
    inChainInfo.chain_id
  );

  const Contract = new ethers.Contract(inToken, ERC20_ABI, provider);

  const metamask = useMetamaskWallet();
  const account = metamask.account;
  const signer = metamask.signer;

  useEffect(() => {
    const initialize = async () => {
      try {
        console.log("initializing");
        const router = new RouterProtocol(
          "43",
          inChainInfo.chain_id.toString(),
          provider
        );

        await router.initialize();
        setRouterProcol(router);
      } catch (e) {
        console.log("initializing error");
        console.log(e);
      }
    };
    initialize();
  }, [inChain]);

  useEffect(() => {
    const getBridgeFee = async () => {
      try {
        const fees = await routerProtocol?.getBridgeFee(
          outChainInfo.chain_id.toString()
        );
        console.log(fees);
      } catch (e) {
        console.log("get Fee error");
        console.log(e);
      }
    };
    getBridgeFee();
  }, [routerProtocol]);

  const getQuote = async () => {
    try {
      const decimals = await Contract.decimals();
      const args = {
        amount: ethers.utils.parseUnits(inValue, decimals).toString(), // 10 USDC
        dest_chain_id: outChainInfo.chain_id.toString(), // Fantom
        src_token_address: inToken, // USDC on Polygon
        dest_token_address: outToken, // USDC on Fantom
        user_address: "account",
        fee_token_address: feeToken, // ROUTE on Polygon
        slippage_tolerance: 2.0,
      };

      // let args = {
      //   amount: ethers.utils.parseUnits(inValue, decimals).toString(), // 10 USDC
      //   dest_chain_id: "250", // Fantom
      //   src_token_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC on Polygon
      //   dest_token_address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75", // USDC on Fantom
      //   user_address: "YOUR_WALLET_ADDRESS",
      //   fee_token_address: "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4", // ROUTE on Polygon
      //   slippage_tolerance: 2.0,
      // };
      console.log(args);

      const quote = await routerProtocol?.getQuote(
        args.amount,
        args.dest_chain_id,
        args.src_token_address,
        args.dest_token_address,
        args.user_address,
        args.fee_token_address,
        args.slippage_tolerance
      );
      return quote;
    } catch (e) {
      toast("Can't find path", ERROR_OPTION);
      console.log(e);
      return null;
    }
  };

  const approve = async () => {
    try {
      const src_token_allowance = await routerProtocol?.getSourceTokenAllowance(
        inToken,
        outChainInfo.chain_id.toString(),
        account
      );
      if (src_token_allowance.lt(ethers.constants.MaxUint256)) {
        await routerProtocol?.approveSourceToken(
          inToken,
          account,
          ethers.constants.MaxUint256.toString(),
          outChainInfo.chain_id.toString(),
          signer
        );
      }
      if (
        ethers.utils.getAddress(inToken) !== ethers.utils.getAddress(feeToken)
      ) {
        const fee_token_allowance = await routerProtocol?.getFeeTokenAllowance(
          feeToken,
          outChainInfo.chain_id.toString(),
          account
        );
        if (fee_token_allowance.lt(ethers.constants.MaxUint256)) {
          await routerProtocol?.approveFeeToken(
            feeToken,
            account,
            ethers.constants.MaxUint256.toString(),
            // outChainInfo.chain_id.toString(),
            signer
          );
        }
      }
      return true;
    } catch (e) {
      toast("Approve failed", ERROR_OPTION);
      console.log(e);
      return false;
    }
  };

  const swap = async () => {
    if (account == "") {
      toast("Please connect the metamask", ERROR_OPTION);
      return;
    }

    setIsLoading(true);
    const quote = await getQuote();
    setIsLoading(false);
    console.log(quote);
    if (quote) {
      const decimals = quote.destination.asset.decimals;
      const outAmount = ethers.utils.formatUnits(
        quote.destination.tokenAmount,
        decimals
      );
      setOutValue(outAmount);
    } else {
      return;
    }

    try {
      const inBalance = await Contract.balanceOf(account);
      if (inBalance.lt(quote?.source.tokenAmount)) {
        toast("Insufficient Balance!", ERROR_OPTION);
        console.log("Insufficient Balance!");
        return;
      }
    } catch (e) {
      console.log(e);
    }

    const res = await approve();
    if (!res) {
      toast("Approve Failed!", ERROR_OPTION);
      return;
    }

    try {
      const tx = await routerProtocol?.swap(quote, signer);
      console.log(`Transaction successfully completed. Tx hash: ${tx?.hash}`);
    } catch (e) {
      console.log(`Transaction failed with error ${e}`);
      return;
    }
  };

  const revert = () => {
    const tmpChain = inChain;
    const tmpToken = inToken;
    setInChain(outChain);
    setInToken(outToken);
    setOutChain(tmpChain);
    setOutToken(tmpToken);
  };
  return (
    <>
      <Flex
        h="100px"
        width="100%"
        justify="center"
        backgroundImage="url('/media/Home/2.png')"
      />
      <Box backgroundImage="url('/media/Home/2.png')">
        <Flex
          borderRadius="10px"
          direction={{ base: "column", lg: "row" }}
          p={{ base: "16px", md: "32px" }}
          mx={{ base: "10px", lg: "64px" }}
          justify="center"
          bgGradient="#FFFFFF"
        >
          <SwapCard
            type={SwapType.from}
            chain={inChain}
            setChain={setInChain}
            token={inToken}
            setToken={setInToken}
            feeToken={feeToken}
            setFeeToken={setFeeToken}
            value={inValue}
            setValue={setInValue}
          />
          <Flex
            minW="110px"
            justify="center"
            align="center"
            cursor="pointer"
            onClick={revert}
          >
            <Image
              p="16px"
              src={"/media/swap.svg"}
              transform={{ base: "rotate(90deg)", lg: "none" }}
            />
          </Flex>
          <SwapCard
            type={SwapType.to}
            chain={outChain}
            setChain={setOutChain}
            token={outToken}
            setToken={setOutToken}
            value={outValue}
            isLoading={isLoading}
          />
        </Flex>
      </Box>

      <Flex justify="center" backgroundImage="url('/media/Home/2.png')">
        <ButtonTransition
          unitid="swap"
          selected={false}
          width="200px"
          height="50px"
          rounded="15px"
          mt="50px"
          onClick={() => swap()}
        >
          Swap
        </ButtonTransition>
      </Flex>
      <Container h="32px" />
      <Flex ml={24} mr={24}>
        <InfoCard />
      </Flex>
      <Image width="100%" objectFit="contain" src="/media/Home/1.svg" />
      <Footer />
    </>
  );
}
