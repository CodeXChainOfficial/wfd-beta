import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";

import Navbar from "./Navbar";
import Container from "./Container";
import { ParseParam } from "../utils/Util";
import { fetchData } from "../utils/fetch";
import { toast } from "react-toastify";
import { successOption } from "../config/Constants";
import { useStore, ActionKind, useJunoConnection } from "../contexts/store";
import { useNearWallet } from "../contexts/NearWallet";
import { useKeplrWallet } from "../contexts/keplrWallet";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
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

  async function confirmReferral() {
    const response = await fetch("/api/checkreferral");
    const res = await response.json();
    console.log(res);
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
  }

  useEffect(() => {
    // if (connectedWallet) {
    //     contactBalance();
    confirmReferral();
    // }

    //   // window.addEventListener('scroll', handleScroll)
  }, []);

  //------Juno connection-----------------------------
  const { state, dispatch } = useStore();
  const keplrWallet = useKeplrWallet();

  useEffect(() => {
    keplrWallet.connect();
  }, []);

  useEffect(() => {
    if (keplrWallet.initialized)
      dispatch({ type: ActionKind.setJunoConnection, payload: keplrWallet });
  }, [keplrWallet, keplrWallet.initialized]);

  const junoConnection = useJunoConnection();
  useEffect(() => {
    const fetch = async () => {
      fetchData(state, dispatch, true);
    };

    fetch();
  }, [junoConnection, junoConnection?.initialized]);

  //-------Near connection--------------------------------------------------
  const near = useNearWallet();
  const project_id = ParseParam();

  useEffect(() => {
    const initialize = () => {
      window.localStorage.removeItem("action");
    };

    const checkTransaction = async () => {
      const action = window.localStorage.getItem("action");
      if (action != "investing") return;

      initialize();
      near.connect();
      dispatch({ type: ActionKind.setWalletType, payload: "near" });
      dispatch({ type: ActionKind.setWallet, payload: near });

      toast("Invest Success", successOption);
      router.push("/invest/step4?project_id=" + project_id);
    };
    setTimeout(() => {
      checkTransaction();
    }, 500);
  }, []);

  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;
