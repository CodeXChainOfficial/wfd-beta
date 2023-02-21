import { CheckIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Input, HStack, Button } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { toast } from "react-toastify";
import { BigNumber } from "bignumber.js";

import { REQUEST_ENDPOINT } from "../../config/constants";
import PageLayout from "../../components/PageLayout";
import { checkNetwork, LookForTokenInfo } from "../../utils/utility";
import { ERROR_OPTION, SUCCESS_OPTION } from "../../config/constants";
import { useStore, useWallet } from "../../contexts/store";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import axios from "axios";

export default function InvestStep3() {
  const [_, setSignature] = useState("");
  const [investTitle, setInsTitle] = useState("");
  const [investName, setInsName] = useState("");
  const [investEmail, setInsEmail] = useState("");

  const { state } = useStore();
  const canvasRef = useRef({});
  const router = useRouter();
  const wallet = useWallet();
  const address = wallet?.account;

  function openUpload() {
    if (typeof document !== "undefined") {
      const fileSelector = document.getElementById("fileSelector");
      fileSelector?.click();
    }
  }

  function onChangeSignature(e: any) {
    if (typeof document !== "undefined") {
      const fileName = e.target.value;
      setSignature(
        fileName.substr(fileName.lastIndexOf("\\") + 1, fileName.length - 1)
      );

      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function () {
        (canvasRef.current as any).fromDataURL(reader.result);
      };
    }
  }

  function checkValication() {
    const investChain = window.localStorage.getItem("invest_chain") ?? "";
    const investAmount = window.localStorage.getItem("invest_amount") ?? "";

    if (checkNetwork(state) == false) return false;
    let proper = false;
    if (investChain.toLowerCase() == "juno" && state.walletType == "keplr") {
      proper = true;
    }

    if (
      (investChain.toLowerCase() == "bsc" ||
        investChain.toLowerCase() == "polygon" ||
        investChain.toLowerCase() == "oneledger" ||
        investChain.toLowerCase() == "fantom" ||
        investChain.toLowerCase() == "telos") &&
      (state.walletType == "metamask" || state.walletType == "trust")
    ) {
      proper = true;
    }
    if (investChain.toLowerCase() == "tron" && state.walletType == "tron") {
      proper = true;
    }
    if (investChain.toLowerCase() == "near" && state.walletType == "near") {
      proper = true;
    }
    if (investChain.toLowerCase() == "elrond" && state.walletType == "elrond") {
      proper = true;
    }
    if (!proper) {
      toast("Please use the proper wallet", ERROR_OPTION);
      return false;
    }

    if (parseFloat(investAmount) <= 0) {
      toast("Please input amount", ERROR_OPTION);
      return false;
    }

    return true;
  }

  async function createSAFTPdf(date: string) {
    const investAmount = window.localStorage.getItem("invest_amount") ?? "";

    const formData = new FormData();
    formData.append("investName", investName);
    formData.append("investTitle", investTitle);
    formData.append("investEmail", investEmail);
    formData.append("investAmount", investAmount);
    formData.append("investDate", date);
    formData.append("investSignature", (canvasRef.current as any).toDataURL());
    formData.append("presale", "presale");

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    toast("Uploading", SUCCESS_OPTION);

    await fetch(REQUEST_ENDPOINT + "/pdfmake", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        toast.dismiss();

        window.localStorage.setItem("pdf_file", data.data);
        console.log(data);
      })
      .catch((e) => {
        console.log("Error:" + e);
      });
  }

  async function onNext() {
    const investChain = window.localStorage.getItem("invest_chain") ?? "";
    const investAmount = window.localStorage.getItem("invest_amount") ?? "";
    const investToken = window.localStorage.getItem("invest_token") ?? "";
    const investWfdAmount =
      window.localStorage.getItem("invest_wfdamount") ?? "";
    //----------verify connection--------------------------------
    if (checkValication() == false) return false;
    window.localStorage.setItem("invest_name", investName);
    window.localStorage.setItem("invest_email", investEmail);
    window.localStorage.setItem("invest_title", investTitle);

    const currentDate = new Date();
    const date = currentDate.getDate() + "/" + (currentDate.getMonth() + 1);

    window.localStorage.setItem("invest_date", date);

    await createSAFTPdf(date);

    const tokenInfo = LookForTokenInfo(investChain, investToken);
    let amount = new BigNumber(parseFloat(investAmount));
    amount = amount
      .multipliedBy(
        new BigNumber(10).pow(tokenInfo?.decimals ? tokenInfo?.decimals : 0)
      )
      .decimalPlaces(0, 1);

    try {
      toast("Please wait", { ...SUCCESS_OPTION, autoClose: false });

      await wallet.sendTokens(
        amount.toFixed(),
        tokenInfo?.denom,
        tokenInfo?.address,
        tokenInfo?.native
      );

      await axios.post("/api/investors/invest", {
        wallet: address,
        amount: investAmount,
        wfd_amount: investWfdAmount,
        date: Date.now() / 1000,
      });
      toast.dismiss();
      toast("Success", SUCCESS_OPTION);

      router.push("/invest/step4");
    } catch (e) {
      toast.dismiss();
      window.localStorage.removeItem("action");
      toast("Failed", ERROR_OPTION);
      console.log(e);
    }
  }

  return (
    <PageLayout
      title="Contribute"
      subTitle1=""
      subTitle2="Contribute"
      subTitle3="&nbsp;to WeFund"
    >
      <Flex
        justify="center"
        align="center"
        direction="column"
        style={{ fontFamily: "PilatExtended-Regular" }}
      >
        <HStack mt="50px" mb="50px" w="400px" justifyContent={"center"}>
          <Flex direction={"column"} w="80px" align={"center"} gap={2}>
            <Box
              width={{ base: "18px", md: "20px" }}
              height={{ base: "18px", md: "20px" }}
              style={{
                paddingTop: "1px",
                paddingLeft: "2px",
                border: "3px solid #3BE489",
                backgroundColor: "#3BE489",
                borderRadius: "50%",
                display: "inline-block",
              }}
            >
              <CheckIcon
                color="#250E3F"
                w={{ base: 2, md: 3 }}
                h={{ base: 2, md: 3 }}
                marginBottom={{ base: "30px", md: "20px" }}
              />
            </Box>
            <Text
              fontSize={{
                base: "12px",
                sm: "12px",
                md: "14px",
                lg: "14px",
              }}
            >
              Step 01
            </Text>
          </Flex>
          <Box
            style={{
              height: "0x",
              width: "15%",
              border: "2px solid rgba(255, 255, 255, 0.3799999952316284)",
              background: " rgba(255, 255, 255, 0.3799999952316284)",
            }}
          />
          <Flex direction={"column"} w="80px" align={"center"} gap={2}>
            <Box
              width={{ base: "18px", md: "20px" }}
              height={{ base: "18px", md: "20px" }}
              style={{
                paddingTop: "1px",
                paddingLeft: "2px",
                border: "3px solid #3BE489",
                backgroundColor: "#3BE489",
                borderRadius: "50%",
                display: "inline-block",
              }}
            >
              <CheckIcon
                color="#250E3F"
                w={{ base: 2, md: 3 }}
                h={{ base: 2, md: 3 }}
                marginBottom={{ base: "30px", md: "20px" }}
              />
            </Box>
            <Text
              fontSize={{
                base: "12px",
                sm: "12px",
                md: "14px",
                lg: "14px",
              }}
            >
              Step 02
            </Text>
          </Flex>
          <Box
            style={{
              height: "0px",
              width: "15%",
              border: "2px solid rgba(255, 255, 255, 0.3799999952316284)",
              background: " rgba(255, 255, 255, 0.3799999952316284)",
            }}
          ></Box>
          <Flex direction={"column"} w="80px" align={"center"} gap={2}>
            <Box
              width={{ base: "30px", md: "20px" }}
              height={{ base: "18px", md: "20px" }}
              style={{
                border: "3px solid #3BE489",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></Box>
            <Text
              fontSize={{
                base: "12px",
                sm: "12px",
                md: "14px",
                lg: "14px",
              }}
            >
              Confirm
            </Text>
          </Flex>
        </HStack>
      </Flex>
      <Box
        w={{ base: "90%", md: "600px", lg: "800px" }}
        background="#540d56"
        backdropBlur={"54px"}
        pt="40px"
        style={{ fontFamily: "Sk-Modernist" }}
        rounded={"3xl"}
      >
        <Box
          width={"100%"}
          style={{ fontFamily: "Sk-Modernist-Regular" }}
          px="10px"
        >
          <Flex
            justify="center"
            align="center"
            direction="column"
            style={{ fontFamily: "PilatExtended-Regular" }}
          >
            <Text
              fontSize={{ base: "15px", md: "15px", lg: "22px" }}
              fontWeight={"300"}
              fontFamily={"PilatExtended-Bold"}
            >
              Please <span style={{ color: "#00A3FF" }}>share with us</span>{" "}
              this information
            </Text>
            <Text
              fontSize={{ base: "14px", md: "14px", lg: "16px" }}
              color="rgba(255, 255, 255, 0.54)"
              fontWeight={"normal"}
              mt={"20px"}
              textAlign={"center"}
            >
              Please fill in all fields to finalize the SAFT process
            </Text>
          </Flex>

          {/* -----------------Name and Title----------------- */}
          <Flex
            direction={{ base: "column", md: "column", lg: "column" }}
            ml="0px"
            mt="40px"
            justify="center"
            align="center"
            gap={4}
          >
            <Box>
              <Flex ml={{ base: "0px", md: "0px", lg: "0px" }} justify="center">
                <Text mb="20px">Name</Text>
              </Flex>

              <Input
                w="300px"
                h="45px"
                style={{
                  border: "1.5px solid rgba(255, 255, 255, 0.2)",
                  background: " rgba(0, 0, 0, 0.25)",
                }}
                _focusVisible={{ border: "solid 0px" }}
                rounded="md"
                placeholder="Type Name"
                value={investName}
                onChange={(e) => setInsName(e.target.value)}
              />
            </Box>
            <Box ml={{ base: "0px", md: "0px", lg: "0px" }}>
              <Flex
                ml={{ base: "0px", md: "0px", lg: "0px" }}
                mt={{ base: "40px", md: "40px", lg: "0px" }}
                justify="center"
              >
                <Text mb="20px">Title</Text>
              </Flex>
              <Input
                w="300px"
                h="45px"
                style={{
                  border: "1.5px solid rgba(255, 255, 255, 0.2)",
                  background: " rgba(0, 0, 0, 0.25)",
                }}
                _focusVisible={{ border: "solid 0px" }}
                rounded="md"
                placeholder="Your title"
                value={investName}
                onChange={(e) => setInsTitle(e.target.value)}
              />
            </Box>
          </Flex>

          <Flex
            direction={{ base: "column", md: "column", lg: "column" }}
            mt="20px"
            justify="center"
            align="center"
            gap={4}
          >
            <Box
              ml={{ base: "0px", md: "0px", lg: "0px" }}
              mt={{ base: "0px", md: "0px", lg: "0px" }}
            >
              <Flex justify="center">
                <Text mb="20px">Email</Text>
              </Flex>

              <Input
                w="300px"
                h="45px"
                style={{
                  border: "1.5px solid rgba(255, 255, 255, 0.2)",
                  background: " rgba(0, 0, 0, 0.25)",
                }}
                _focusVisible={{ border: "solid 0px" }}
                rounded="md"
                placeholder="example@email.com"
                value={investEmail}
                onChange={(e) => setInsEmail(e.target.value)}
              />
            </Box>
            <Box ml={{ base: "0px", md: "0px", lg: "0px" }}>
              <Flex
                mt={{ base: "40px", md: "40px", lg: "0px" }}
                justify="center"
              >
                <Text mb="20px">Signature</Text>
              </Flex>
              <Box>
                <Flex justify="center" w="300px" rounded="md" bg="white">
                  <SignatureCanvas
                    ref={canvasRef as any}
                    penColor="black"
                    canvasProps={{ width: 300, height: 100 }}
                  />
                </Flex>
                <Flex
                  style={{ cursor: "pointer" }}
                  mt="20px"
                  justify="left"
                  fontSize="14px"
                >
                  <Button
                    colorScheme="pink"
                    width="100px"
                    height="40px"
                    rounded="20px"
                    onClick={() => {
                      if (canvasRef.current) (canvasRef.current as any).clear();
                    }}
                  >
                    Clear
                  </Button>
                  <Button
                    colorScheme="pink"
                    width="150px"
                    height="40px"
                    rounded="20px"
                    ml="40px"
                    onClick={() => openUpload()}
                  >
                    Open Signature
                  </Button>
                </Flex>
              </Box>
              <input
                type="file"
                id="fileSelector"
                name="userFile"
                style={{ display: "none" }}
                onChange={(e) => onChangeSignature(e)}
              />
            </Box>
          </Flex>

          <Flex w="100%" mt="60px" justify="center" mb="170px">
            <Button colorScheme="pink" w="200px" onClick={() => onNext()}>
              Confirm
            </Button>
          </Flex>
          {/* <Faq /> */}
        </Box>
      </Box>

      <Footer />
    </PageLayout>
  );
}
