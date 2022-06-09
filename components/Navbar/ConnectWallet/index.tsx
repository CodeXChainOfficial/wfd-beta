import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  VStack,
  Button,
  Text,
  Flex,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { useKeplrWallet } from "../../../contexts/keplrWallet";

// import { BigNumber, ethers } from "ethers";
// import WalletConnect from "@walletconnect/client";
// import QRCodeModal from "@walletconnect/qrcode-modal";

import {
  MdOutlineAccountBalanceWallet,
  MdCheck,
  MdOutlinePowerSettingsNew,
} from "react-icons/md";
import { BsCaretRight } from "react-icons/bs";

// import { useStore } from "../store";
import { ButtonOrangeBackTransition } from "../../ImageTransition";

export default function ConnectWallet() {
  const {
    connected,
    address,
    balance,
    connect,
    disconnect,
    initializing: isLoading,
    initialized: isReady,
  } = useKeplrWallet();
  // const connected = true;
  console.log(connected);
  // const [bank, setBank] = useState();
  // const [connected, setConnected] = useState(false);
  // const { state, dispatch } = useStore();
  const { onOpen, onClose, isOpen } = useDisclosure();

  async function connectTo(to: string) {
    if (to == "metamask") {
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const accounts = await provider.send("eth_requestAccounts", []);
      // const account = accounts[0];
      // const { chainId } = await provider.getNetwork();
      // let balance = await provider.getBalance(account);
      // dispatch({ type: ActionKind.setEthBalance, payload: balance });
      // dispatch({ type: ActionKind.setMetamaskConnected, payload: true });
    } else if (to == "trust") {
      // const connector = new WalletConnect({
      //   bridge: "https://bridge.walletconnect.org", // Required
      //   qrcodeModal: QRCodeModal,
      // });
      // Check if connection is already established
      // if (!connector.connected) {
      //   // create new session
      //   connector.createSession();
      // }
      // // Subscribe to connection events
      // connector.on("connect", (error, payload) => {
      //   if (error) {
      //     throw error;
      //   }
      //   // Get provided accounts and chainId
      //   const { accounts, chainId } = payload.params[0];
      // });
      // connector.on("session_update", (error, payload) => {
      //   if (error) {
      //     throw error;
      //   }
      //   // Get updated accounts and chainId
      //   const { accounts, chainId } = payload.params[0];
      // });
      // connector.on("disconnect", (error, payload) => {
      //   if (error) {
      //     throw error;
      //   }
      //   // Delete connector
      // });
      // const request = connector._formatRequest({
      //   method: "get_accounts",
      // });
      // connector
      //   ._sendCallRequest(request)
      //   .then((result) => {
      //     // Returns the accounts
      //     console.log(result);
      //   })
      //   .catch((error) => {
      //     // Error returned when rejected
      //     console.error(error);
      //   });
    } else if (to == "keplr") {
      connect();
    }
  }

  // const [scrolled, setScrolled] = useState(false)
  // const handleScroll = () => {
  //   const offset = window.scrollY
  //   if (offset > 25) {
  //     setScrolled(true)
  //   } else {
  //     setScrolled(false)
  //   }
  // }

  //--------------for referral-----------------------------
  // const crypto = require("crypto");

  // function encrypt3DES(data, key) {
  //   const md5Key = crypto
  //     .createHash("md5")
  //     .update(key)
  //     .digest("hex")
  //     .substr(0, 24);
  //   const cipher = crypto.createCipheriv("des-ede3", md5Key, "");

  //   let encrypted = cipher.update(data, "utf8", "base64");
  //   encrypted += cipher.final("base64");
  //   return encrypted;
  // }

  // function decrypt3DES(data, key) {
  //   const md5Key = crypto
  //     .createHash("md5")
  //     .update(key)
  //     .digest("hex")
  //     .substr(0, 24);
  //   const decipher = crypto.createDecipheriv("des-ede3", md5Key, "");

  //   let encrypted = decipher.update(data, "base64", "utf8");
  //   encrypted += decipher.final("utf8");
  //   return encrypted;
  // }

  // async function confirmReferral() {
  //   let referralLink =
  //     "https://wefund.app/?referral=" +
  //     encrypt3DES(address, "wefundkeyreferral");
  //   dispatch({ type: "setReferralLink", message: referralLink });

  //   let queryString, urlParams, referral_code;
  //   if (typeof window != "undefined") {
  //     queryString = window.location.search;
  //     urlParams = new URLSearchParams(queryString);
  //     referral_code = urlParams.get("referral");

  //     let base = "";
  //     if (referral_code != null) {
  //       referral_code = referral_code.split(" ").join("+");
  //       try {
  //         base = decrypt3DES(referral_code, "wefundkeyreferral");
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     }

  //     var formData = new FormData();
  //     formData.append("base", base);
  //     formData.append("referred", address);

  //     const requestOptions = {
  //       method: "POST",
  //       body: formData,
  //     };

  //     await fetch(state.request + "/checkreferral", requestOptions)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         dispatch({
  //           type: "setReferralCount",
  //           message: data.data,
  //         });
  //       })
  //       .catch((e) => {
  //         console.log("Error:" + e);
  //       });
  //   }
  // }

  // useEffect(() => {
  //   if (connectedWallet) {
  //     contactBalance();
  //     confirmReferral();
  //   }

  //   // window.addEventListener('scroll', handleScroll)
  // }, [connectedWallet]);

  function returnBank() {
    return (
      <Flex h="100%" align="center">
        <MdOutlineAccountBalanceWallet
          size={24}
          // color="#0F0038"
          color="white"
          style={{ display: "inline-block", marginTop: "-3px" }}
        />
        {isReady ? (
          <Flex h="100%" align="center">
            <MdCheck size={16} />
          </Flex>
        ) : (
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </Flex>
    );
  }

  const ConnectionItem = ({ label, link }: { label: string; link: string }) => {
    return (
      <Flex
        onClick={() => {
          connectTo(link);
          onClose();
        }}
        align="center"
        cursor="pointer"
        py="5px"
        rounded="10px"
        _hover={{ background: "black" }}
      >
        <BsCaretRight size={16} /> {label}
      </Flex>
    );
  };

  return (
    <>
      <VStack display={{ base: "none", md: "none", lg: "block" }}>
        {!connected && (
          <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            <ButtonOrangeBackTransition
              unitid={"connectButton"}
              selected={false}
              width="150px"
              height="45px"
              rounded="33px"
              onClick={() => onOpen()}
            >
              <PopoverTrigger>
                <Text fontSize={{ base: "14px", lg: "16px" }}>
                  Connect Wallet
                </Text>
              </PopoverTrigger>
            </ButtonOrangeBackTransition>
            <PopoverContent
              background="linear-gradient(328.75deg, #493c85 -5.49%, #0f0038 104.44%)"
              width="200px"
              border="0px"
              _focus={{ boxShadow: "none" }}
            >
              <PopoverArrow />
              <PopoverBody>
                {WalletList.map((item, index) => (
                  <ConnectionItem
                    label={item.name}
                    link={item.link}
                    key={index}
                  />
                ))}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
        {connected && (
          <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            <ButtonOrangeBackTransition
              unitid={"connected"}
              selected={false}
              width="150px"
              height="45px"
              rounded="33px"
              onClick={() => onOpen()}
            >
              <PopoverTrigger>
                {returnBank() ? returnBank() : "loading"}
              </PopoverTrigger>
            </ButtonOrangeBackTransition>
            <PopoverContent
              background="linear-gradient(328.75deg, #493c85 -5.49%, #0f0038 104.44%)"
              width="200px"
              border="0px"
              _focus={{ boxShadow: "none" }}
            >
              <PopoverArrow />
              <PopoverBody>
                {isReady && (
                  <div
                    className="wallet-info d-inline-block text-start px-3"
                    style={{ fontSize: "13px" }}
                  >
                    <span className="d-block">
                      <strong>YOUR WALLET:</strong>
                    </span>
                    <span className="d-block" style={{ marginBottom: "-5px" }}>
                      bank
                      <span className="text-sm">UST</span>
                    </span>
                  </div>
                )}
                <Flex onClick={() => connectTo("disconnect")}>
                  <MdOutlinePowerSettingsNew size={16} />
                  <span style={{ fontSize: "13px" }}>Disconnect</span>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
        {/* <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton2"
              style={{ top: "70px" }}
            >

            </ul> */}
      </VStack>
      <VStack display={{ base: "block", md: "block", lg: "none" }}>
        {!connected && (
          <div className="dropdown-content3">
            {WalletList.map((item, index) => (
              <button onClick={() => connectTo(item.link)} key={index}>
                <BsCaretRight size={16} /> {item.name}
              </button>
            ))}
          </div>
        )}
        {connected && (
          <div className="dropdown-content3">
            {isReady && (
              <div
                className="wallet-info d-inline-block text-start px-3"
                style={{ fontSize: "13px" }}
              >
                <span className="d-block">
                  <strong>YOUR WALLET:</strong>
                </span>
                <span className="d-block" style={{ marginBottom: "-5px" }}>
                  {/* {bank}  */}
                  <span className="text-sm">UST</span>
                </span>
              </div>
            )}
            <button onClick={() => connectTo("disconnect")}>
              <MdOutlinePowerSettingsNew size={16} />{" "}
              <span style={{ fontSize: "13px" }}>Disconnect</span>
            </button>
          </div>
        )}
      </VStack>
    </>
  );
}

const WalletList = [
  {
    name: "Metamask",
    link: "metamask",
  },
  {
    name: "TrustWallet",
    link: "trust",
  },
  {
    name: "Keplr",
    link: "keplr",
  },
];
