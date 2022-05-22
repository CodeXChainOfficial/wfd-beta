import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  ChakraProvider,
  Image,
  Flex,
  Box,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";

// import { LCDClient, WasmAPI } from "@terra-money/terra.js";
// import { useWallet, useConnectedWallet } from "@terra-money/wallet-provider";
// import { BigNumber, ethers } from "ethers";
// import WalletConnect from "@walletconnect/client";
// import QRCodeModal from "@walletconnect/qrcode-modal";

import { Wallet, CaretRight, Power, Check } from "phosphor-react";
import numeral from "numeral";
// import { useStore } from "../store";

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

export default function ConnectWallet() {
  // let connectedWallet = "";
  const [bank, setBank] = useState();
  const [connected, setConnected] = useState(false);
  // const { state, dispatch } = useStore();

  // let wallet = "";
  // if (typeof document !== "undefined") {
  //   wallet = useWallet();
  //   connectedWallet = useConnectedWallet();
  // }

  // const lcd = useMemo(() => {
  //   if (!connectedWallet) {
  //     setConnected(false);
  //     dispatch({
  //       type: "setConnectedWallet",
  //       message: "",
  //     });

  //     return null;
  //   }
  //   setConnected(true);

  //   dispatch({
  //     type: "setConnectedWallet",
  //     message: connectedWallet,
  //   });

  //   return new LCDClient({
  //     URL: connectedWallet.network.lcd,
  //     chainID: connectedWallet.network.chainID,
  //   });
  // }, [connectedWallet]);

  async function connectTo(to: string) {
    // if (to == "extension") {
    //   wallet.connect(wallet.availableConnectTypes[1]);
    // } else if (to == "mobile") {
    //   wallet.connect(wallet.availableConnectTypes[2]);
    // } else if (to == "disconnect") {
    //   wallet.disconnect();
    //   dispatch({ type: "setWallet", message: {} });
    // } else if (to == "metamask") {
    //   const provider = new ethers.providers.Web3Provider(window.ethereum);
    //   const accounts = await provider.send("eth_requestAccounts", []);
    //   const account = accounts[0];
    //   const { chainId } = await provider.getNetwork();
    //   let balance = await provider.getBalance(account);
    //   // dispatch({ type: ActionKind.setEthBalance, payload: balance });
    //   // dispatch({ type: ActionKind.setMetamaskConnected, payload: true });
    // } else if (to == "trust") {
    //   const request = connector._formatRequest({
    //     method: "get_accounts",
    //   });
    //   connector
    //     ._sendCallRequest(request)
    //     .then((result) => {
    //       // Returns the accounts
    //       console.log(result);
    //     })
    //     .catch((error) => {
    //       // Error returned when rejected
    //       console.error(error);
    //     });
    // }
  }

  // async function contactBalance() {
  //   if (connectedWallet?.walletAddress && lcd) {
  //     dispatch({ type: "setWallet", message: connectedWallet });

  //     let coins;
  //     try {
  //       const api = new WasmAPI(lcd.apiRequester);
  //       coins = await lcd.bank.balance(connectedWallet.walletAddress);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     dispatch({ type: "setAllNativeCoins", message: coins });

  //     let uusd;
  //     if (
  //       typeof coins[0]._coins === "undefined" ||
  //       typeof coins[0]._coins.uusd == "undefined"
  //     )
  //       uusd = 0;
  //     else uusd = coins[0]._coins.uusd.amount;

  //     let ust = parseInt(uusd) / 1000000;
  //     setBank(numeral(ust).format("0,0.00"));
  //     dispatch({ type: "setUstBalance", message: ust });
  //   } else {
  //     setBank(null);
  //     dispatch({ type: "setWallet", message: {} });
  //   }
  // }

  function returnBank() {
    return (
      <>
        <Wallet
          size={24}
          // color="#0F0038"
          color="white"
          style={{ display: "inline-block", marginTop: "-3px" }}
        />
        {bank ? (
          <>
            &nbsp;&nbsp;
            <Check
              size={16}
              // color="#0F0038"
              color="white"
              weight="bold"
              style={{
                display: "inline-block",
                marginTop: "-8px",
                marginLeft: "-5px",
              }}
            />
            &nbsp;&nbsp;
          </>
        ) : (
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </>
    );
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
  //     encrypt3DES(connectedWallet.walletAddress, "wefundkeyreferral");
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
  //     formData.append("referred", connectedWallet.walletAddress);

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

  const ConnectionItem = ({ label, link }: { label: string; link: string }) => {
    return (
      <button
        onClick={() => connectTo(link)}
        className="dropdown-item"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <CaretRight size={16} /> {label}
      </button>
    );
  };

  return (
    <>
      <VStack display={{ base: "none", md: "none", lg: "block" }}>
        <div
          className="navbar-nav"
          style={{ flexDirection: "row", width: "100%" }}
        >
          {!connected && (
            <div className="dropdown">
              <button className="dropbtn" type="button">
                Connect Wallet +&nbsp;
              </button>
              <ul
                className="dropdown_content"
                aria-labelledby="dropdownMenuButton1"
              >
                <ConnectionItem
                  label="Terra Station (Browser)"
                  link="extension"
                />
                <ConnectionItem label="Terra Station (QR Code)" link="mobile" />
                <ConnectionItem label="Metamask" link="metamask" />
                <ConnectionItem label="TrustWallet" link="trust" />
              </ul>
            </div>
          )}
          {connected && (
            <>
              <button
                className="btn btn-orange nav-item dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                type="button"
                id="dropdownMenuButton1"
                style={{
                  color: "white",
                  backgroundColor: "red",
                  width: "100%",
                  background:
                    "linear-gradient(180deg, rgba(254, 134, 0, 0.2) 0%, rgba(254, 134, 0, 0) 100%)",
                  backdropFilter: "blur(54px)",
                  borderRadius: "30px",
                }}
              >
                &nbsp;&nbsp;{returnBank() ? returnBank() : "loading"}
                &nbsp;&nbsp;
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton2"
                style={{ top: "70px" }}
              >
                {bank && (
                  <div
                    className="wallet-info d-inline-block text-start px-3"
                    style={{ fontSize: "13px" }}
                  >
                    <span className="d-block">
                      <strong>YOUR WALLET:</strong>
                    </span>
                    <span className="d-block" style={{ marginBottom: "-5px" }}>
                      {bank} <span className="text-sm">UST</span>
                    </span>
                  </div>
                )}
                <button
                  onClick={() => connectTo("disconnect")}
                  className="dropdown-item"
                >
                  <Power size={16} style={{ marginTop: "-2px" }} />{" "}
                  <span style={{ fontSize: "13px" }}>Disconnect</span>
                </button>
              </ul>
            </>
          )}
        </div>
      </VStack>
      <VStack display={{ base: "block", md: "block", lg: "none" }}>
        {!connected && (
          <div className="dropdown-content3">
            <button onClick={() => connectTo("extension")}>
              <CaretRight size={16} /> Terra Station (Browser)
            </button>
            <button onClick={() => connectTo("mobile")}>
              <CaretRight size={16} /> Terra Station (QR Code)
            </button>
          </div>
        )}
        {connected && (
          <div className="dropdown-content3">
            {bank && (
              <div
                className="wallet-info d-inline-block text-start px-3"
                style={{ fontSize: "13px" }}
              >
                <span className="d-block">
                  <strong>YOUR WALLET:</strong>
                </span>
                <span className="d-block" style={{ marginBottom: "-5px" }}>
                  {bank} <span className="text-sm">UST</span>
                </span>
              </div>
            )}
            <button onClick={() => connectTo("disconnect")}>
              <Power size={16} style={{ marginTop: "-2px" }} />{" "}
              <span style={{ fontSize: "13px" }}>Disconnect</span>
            </button>
          </div>
        )}
      </VStack>
    </>
  );
}
