import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useDisclosure } from "@chakra-ui/react";
import { getElrondConfig } from "../config/elrondConfig";
import { CHAINS_CONFIG, ERROR_OPTION, NETWORK } from "../config/constants";

import Navbar from "./Navbar";
import Container from "./Container";
import {
  getInteger,
  ParseParam,
  ParseParam_Address,
  ParseParam_ProjectId,
} from "../utils/utility";
import { encrypt3DES, decrypt3DES } from "../utils/crypto";
import { toast } from "react-toastify";
import { SUCCESS_OPTION } from "../config/constants";
import { useStore, ActionKind } from "../contexts/store";
import { useNearWallet } from "../contexts/nearWallet";
import { useElrondWeb } from "../contexts/elrond";
import WalletModal from "./WalletModal";
import { useMetamaskWallet } from "../contexts/metamask";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const { state, dispatch } = useStore();

  const metamaskWallet = useMetamaskWallet();
  const address = metamaskWallet?.account;

  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    dispatch({ type: ActionKind.setWalletModal, payload: onOpen });
  }, []);

  useEffect(() => {
    async function confirmReferral() {
      if (address != null) {
        const referralLink =
          "https://wefund.app/?referral=" +
          encrypt3DES(address, "wefundkeyreferral");

        dispatch({ type: ActionKind.setReferralLink, payload: referralLink });

        let referral = ParseParam("referral");
        if (referral != null) {
          referral = referral.split(" ").join("+");
          let base;
          try {
            base = decrypt3DES(referral, "wefundkeyreferral");
          } catch (e) {
            console.log(e);
          }

          const formData = new FormData();
          formData.append("base", base);
          formData.append("referred", address);

          const requestOptions = {
            method: "POST",
            body: formData,
          };

          const result = await fetch("/api/checkreferral", requestOptions);
          const res = await result.json();
          dispatch({
            type: "setReferralCount",
            payload: res.data,
          });
        }
      }
    }
    confirmReferral();
  }, [address]);

  //------Metamask connection-----------------------------
  useEffect(() => {
    const connectToBSC = async () => {
      const ethereum = window.ethereum;
      const chains = CHAINS_CONFIG;
      const chain = NETWORK == "mainnet" ? "bsc" : "bsc_testnet";
      try {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: chains[chain].chainId }],
        });
      } catch (switchError: any) {
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: chains[chain].chainId,
                  chainName: chains[chain].chainName,
                  rpcUrls: [chains[chain].rpc] /* ... */,
                },
              ],
            });
          } catch (addError) {
            toast("Can't switch to BSC", ERROR_OPTION);
          }
        }
      }
      metamaskWallet.connect();
    };
    connectToBSC();
  }, []);

  useEffect(() => {
    if (metamaskWallet.initialized) {
      dispatch({ type: ActionKind.setWalletType, payload: "metamask" });
      dispatch({
        type: ActionKind.setWallet,
        payload: metamaskWallet,
      });
    }
  }, [metamaskWallet, metamaskWallet.initialized]);

  // useEffect(() => {
  // fetchProjectData(state, dispatch, true);
  // fetchCommunity(state, dispatch);
  // }, []);

  //-------Near connection--------------------------------------------------
  const near = useNearWallet();
  const elrond = useElrondWeb();

  useEffect(() => {
    const initialize = () => {
      window.localStorage.removeItem("action");
    };

    const checkFallback = async () => {
      const action = window.localStorage.getItem("action");
      // if (action != "investing") return;
      switch (action) {
        case "near_connection":
          near.connect();
          dispatch({ type: ActionKind.setWalletType, payload: "near" });
          dispatch({ type: ActionKind.setWallet, payload: near });
          break;
        case "near_investing":
          const project_id = ParseParam_ProjectId();
          initialize();
          near.connect();
          dispatch({ type: ActionKind.setWalletType, payload: "near" });
          dispatch({ type: ActionKind.setWallet, payload: near });

          toast("Invest Success", SUCCESS_OPTION);
          router.push("/invest/step4?project_id=" + project_id);
          break;
        case "elrond_connection":
          dispatch({ type: ActionKind.setWalletType, payload: "elrond" });
          dispatch({ type: ActionKind.setWallet, payload: elrond });

          const address = ParseParam_Address();
          if (!address) break;
          elrond.setAccount(address);
          break;
        case "elrond_investing":
          dispatch({ type: ActionKind.setWalletType, payload: "elrond" });
          dispatch({ type: ActionKind.setWallet, payload: elrond });
          const sender = ParseParam("sender[0]");
          if (!sender) break;
          elrond.setAccount(sender);
          const signed = ParseParam("walletProviderStatus");
          let data = ParseParam("data[0]");
          if (signed == "transactionsSigned" && data != null) {
            data = Buffer.from(data).toString("base64");
            console.log(data);
            const transaction = {
              toPlainObject: function () {
                return {
                  nonce: getInteger(ParseParam("nonce[0]")),
                  value: ParseParam("value[0]"),
                  receiver: ParseParam("receiver[0]"),
                  gasPrice: getInteger(ParseParam("gasPrice[0]")),
                  gasLimit: getInteger(ParseParam("gasLimit[0]")),
                  data: data,
                  chainID: ParseParam("chainID[0]"),
                  version: getInteger(ParseParam("version[0]")),
                  signature: ParseParam("signature[0]"),
                  sender: ParseParam("sender[0]"),
                };
              },
            };
            console.log(transaction.toPlainObject());
            const config = getElrondConfig(NETWORK);
            const res = await axios.post(
              `${config.apiAddress}/transactions`,
              transaction.toPlainObject(),
              { timeout: parseInt(config.apiTimeout) }
            );

            const elrond_address = window.localStorage.getItem("address");
            if (!elrond_address) break;
            elrond.setAccount(elrond_address);

            toast("Invest Success", SUCCESS_OPTION);
            router.push("/invest/step4?project_id=1");
          }
          break;
      }
      initialize();
    };
    setTimeout(() => {
      checkFallback();
    }, 500);
  }, []);

  return (
    <Container>
      <Navbar />
      {children}
      <WalletModal isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default Layout;
