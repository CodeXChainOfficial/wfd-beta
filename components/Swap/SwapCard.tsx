import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Container,
  HStack,
  Text,
  Flex,
  Select,
  Spacer,
  Image,
  NumberInput,
  NumberInputField,
  Spinner,
} from "@chakra-ui/react";
import { ethers } from "ethers";

import {
  CHAIN_TYPE,
  ROUTER_CHAIN,
  ROUTER_CHAIN_CONFIG,
  ROUTER_FEE_TOKENS,
} from "../../config/constants/swap";
import { ERC20_ABI } from "../../config/constants";
import { useMetamaskWallet } from "../../contexts/metamask";
import { useTokenList } from "../../hook/router_tokenlist";
import ChainSelector from "./ChainSelector";
import TokenSelector from "./TokenSelector";
import FeeTokenSelector from "./FeeTokenSelector";

export enum SwapType {
  from,
  to,
}

interface SwapProps {
  type: SwapType;
  chain: CHAIN_TYPE;
  setChain: Dispatch<SetStateAction<CHAIN_TYPE>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  value: number;
  setValue?: Dispatch<SetStateAction<number>>;
  feeToken?: string;
  setFeeToken?: Dispatch<SetStateAction<string>>;
  isLoading?: boolean;
}

export default function SwapCard({
  type,
  chain,
  setChain,
  token,
  setToken,
  value,
  setValue,
  feeToken,
  setFeeToken,
  isLoading,
}: SwapProps) {
  const [balance, setBalance] = useState("0");

  const metamask = useMetamaskWallet();
  const account = metamask.account;
  const chainInfo = ROUTER_CHAIN_CONFIG[chain];

  useEffect(() => {
    const getBalance = async () => {
      try {
        const provider = new ethers.providers.JsonRpcProvider(
          chainInfo.rpc,
          chainInfo.chain_id
        );
        const contract = new ethers.Contract(token, ERC20_ABI, provider);
        const balance = await contract.balanceOf(account);
        const decimals = await contract.decimals();
        setBalance(ethers.utils.formatUnits(balance, decimals).toString());
      } catch (e) {
        console.log(e);
      }
    };
    getBalance();
  }, [token]);

  return (
    <Container borderRadius="10px" bgGradient="linear(#430E82, #060049)">
      <Flex direction="column" m="8px" pt="32px">
        {type == SwapType.from ? (
          <Text fontFamily={"Montserrat"} fontWeight="800" fontSize="26px">
            From
          </Text>
        ) : (
          <Text fontFamily={"Montserrat"} fontWeight="800" fontSize="26px">
            To
          </Text>
        )}
        <Flex
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          mt="16px"
          gap="10px"
        >
          <ChainSelector chain={chain} setChain={setChain} />

          {type == SwapType.from &&
            feeToken != undefined &&
            setFeeToken != undefined && (
              <FeeTokenSelector
                chain={chain}
                feeToken={feeToken}
                setFeeToken={setFeeToken}
              />
            )}
        </Flex>
        <Container h="32px" />
        <Container
          pl="32px"
          pr="32px"
          pt="16px"
          pb="16px"
          bgGradient="linear(#000000, #160335)"
        >
          <Flex alignContent={"center"} direction="column">
            <HStack w="full">
              <Flex w="full">
                <NumberInput defaultValue="0.0" value={value} min={0}>
                  <NumberInputField
                    w="full"
                    color="#80869B"
                    fontFamily={"Montserrat"}
                    fontWeight="600"
                    fontSize="32px"
                    readOnly={type == SwapType.to}
                    border="none"
                    _focusVisible={{ border: "none" }}
                    onChange={(e) => {
                      if (setValue) {
                        const value = parseFloat(e.target.value);
                        setValue(value > 0 ? value : 0);
                      }
                    }}
                  />
                </NumberInput>
              </Flex>
              {type == SwapType.to && isLoading && <Spinner width="20px" />}
              <TokenSelector chain={chain} token={token} setToken={setToken} />
            </HStack>
            <HStack w="full">
              <Flex w="full">
                <Text
                  w="full"
                  color="#80869B"
                  fontFamily={"Montserrat"}
                  fontWeight="600"
                  fontSize="14px"
                >
                  -$0.0
                </Text>
              </Flex>
              {type == SwapType.from && (
                <Flex w="full">
                  <Text
                    w="full"
                    color="#80869B"
                    fontFamily={"Montserrat"}
                    fontWeight="600"
                    fontSize="14px"
                    textAlign="end"
                  >
                    Balance: {balance}
                  </Text>
                </Flex>
              )}
            </HStack>
          </Flex>
        </Container>
        <Container h="64px" />
      </Flex>
    </Container>
  );
}
