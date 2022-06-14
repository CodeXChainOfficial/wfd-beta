import React, { ReactNode, useEffect } from "react";
import Head from "next/head";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Container from "./Container";
import { FetchData } from "../utils/Util";
import { useStore } from "../contexts/store";
type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
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
  //   dispatch({ type: "setReferralLink", payload: referralLink });

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
  //           payload: data.data,
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

  const { state, dispatch } = useStore();

  useEffect(() => {
    FetchData(state, dispatch);
  }, []);

  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;
