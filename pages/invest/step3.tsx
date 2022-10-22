import { CheckIcon } from "@chakra-ui/icons";
import {
  chakra,
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  Select,
  InputLeftElement,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { toast } from "react-toastify";
import { BigNumber } from "bignumber.js";

import { getJunoConfig } from "../../config";
import {
  REQUEST_ENDPOINT,
  WEFUND_CONTRACT,
  WEFUND_ID,
  NETWORK,
} from "../../config/constants";
import {
  ImageTransition,
  ButtonTransition,
  InputTransition,
} from "../../components/ImageTransition";
import PageLayout from "../../components/PageLayout";
import {
  ParseParam_ProjectId,
  GetOneProject,
  checkNetwork,
  LookForTokenInfo,
  checkBscConnection,
} from "../../utils/utility";
import { ERROR_OPTION, SUCCESS_OPTION } from "../../config/constants";
import { useProjectData, useStore, useWallet } from "../../contexts/store";
import { useRouter } from "next/router";
import { fetchData } from "../../utils/fetch";
import Footer from "../../components/Footer";
import { useOneProjectData } from "../../hook/FetchProject";

export default function InvestStep3() {
  const [signature, setSignature] = useState("");
  const [investTitle, setInsTitle] = useState("");
  const [investName, setInsName] = useState("");
  const [investEmail, setInsEmail] = useState("");

  const { state, dispatch } = useStore();
  const canvasRef = useRef({});
  const router = useRouter();
  const wallet = useWallet();

  //------------parse URL for project id----------------------------
  const project_id = ParseParam_ProjectId();
  const oneprojectData = useOneProjectData(project_id);

  //----------------upload signature----------------------------
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
  //---------------on next------------------------------------
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
    // if (state.presale == false && parseFloat(investAmount) < 20000) {
    //   toast("Input amount for private sale of at least 20,000", ERROR_OPTION);
    //   return false;
    // }
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
    formData.append("presale", state.presale.toString());

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
  async function createSAFTDocx(date: string) {
    const investAmount = window.localStorage.getItem("invest_amount") ?? "";

    const formData = new FormData();
    formData.append("docxTemplate", oneprojectData?.project_saft);
    formData.append("purchaserName", investName);
    formData.append("purchaserTitle", investTitle);
    formData.append("purchaserEmail", investEmail);
    formData.append("purchaserAmount", investAmount);
    formData.append("purchaserDate", date);
    const canvas: any = canvasRef.current;
    formData.append("purchaserSignature", canvas.toDataURL());

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    toast("Uploading", SUCCESS_OPTION);

    await fetch(REQUEST_ENDPOINT + "/docxmake", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        toast.dismiss();

        window.localStorage.setItem("docx_file", data.data);
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
    //----------verify connection--------------------------------
    if (checkValication() == false) return false;
    window.localStorage.setItem("invest_name", investName);
    window.localStorage.setItem("invest_email", investEmail);
    window.localStorage.setItem("invest_title", investTitle);

    const currentDate = new Date();
    const date =
      currentDate.getDate() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getFullYear();

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
      toast("Please wait", SUCCESS_OPTION);
      await wallet.sendTokens(
        amount.toFixed(),
        tokenInfo?.denom,
        tokenInfo?.address,
        tokenInfo?.native
      );
      toast("Success", SUCCESS_OPTION);

      router.push({
        pathname: "/invest/step4",
        query: {
          project_id: project_id,
        },
      });
    } catch (e) {
      window.localStorage.removeItem("action");
      toast("Failed", ERROR_OPTION);
      console.log(e);
    }
    // } else {
    //   await createSAFTDocx(date);
    //   const res = await backProject();
    //   if (res) router.push("/invest/step4?project_id=" + project_id);
    // }
  }

  async function backProject() {
    if (!checkBscConnection(state)) return false;

    const investChain = window.localStorage.getItem("invest_chain") ?? "";
    const investAmount = window.localStorage.getItem("invest_amount") ?? "";
    const investWFDAmount =
      window.localStorage.getItem("invest_wfdamount") ?? "";

    const targetAmount = parseInt(oneprojectData.project_collected) * 10 ** 6;
    const leftAmount = targetAmount - oneprojectData.backerbacked_amount;

    if (leftAmount <= 0) {
      toast(
        "Backer allocation has already been collected! You can't back this project.",
        ERROR_OPTION
      );
      return false;
    }

    const amount = Math.ceil(parseFloat(investAmount) * 10 ** 6);
    const maxAmount = (leftAmount * 100) / 95;

    if (amount > maxAmount) {
      toast(
        "Investment amount should be less than " +
          (maxAmount / 10 ** 6).toString() +
          " JUNO",
        ERROR_OPTION
      );
      return false;
    }

    const backProjectMsg = {
      back2_project: {
        project_id: `${project_id}`,
        backer_wallet: address,
        fundraising_stage: oneprojectData.fundraising_stage,
        token_amount: `${investWFDAmount}`,
        otherchain: investChain,
        otherchain_wallet: "walletAddress",
      },
    };

    try {
      const denom = getJunoConfig(NETWORK).stakingToken;
      const res = await client.execute(
        address,
        WEFUND_CONTRACT,
        backProjectMsg,
        "auto",
        "deposit",
        [{ denom: denom, amount: amount.toString() }]
      );
      toast("Deposit success", SUCCESS_OPTION);

      fetchData(state, dispatch, true);
      return true;
    } catch (e) {
      console.log(e);
    }
    return false;
  }

  return (
    <PageLayout
      title="Contribute"
      subTitle1="Invest"
      subTitle2="Contribute"
      subTitle3="&nbsp;to WeFund"
    >
      <Flex
        width="100%"
        justify="center"
        align="center"
        py={"4em"}
        direction="column"
        backgroundImage="url('/media/Home/smoke-bg.png')"
        backgroundSize={"contain"}
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
          background="#120037"
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
                <Flex
                  ml={{ base: "0px", md: "0px", lg: "0px" }}
                  justify="center"
                >
                  <Text mb="20px">Name</Text>
                </Flex>

                <InputGroup
                  size={{ base: "200px", lg: "sm" }}
                  bg="transparent"
                  h="45px"
                  width="300px"
                  alignItems="center"
                  style={{
                    border: "1.5px solid rgba(255, 255, 255, 0.2)",
                    background: " rgba(0, 0, 0, 0.25)",
                  }}
                  rounded="md"
                >
                  <InputLeftElement
                    style={{ background: "transparent" }}
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    // children=" "
                  />
                  <Input
                    h="100%"
                    pl="25px"
                    style={{ border: "0", background: "transparent" }}
                    border="solid 0px"
                    _focusVisible={{ border: "solid 0px" }}
                    rounded="md"
                    placeholder="Type Name"
                    value={investName}
                    onChange={(e) => {
                      setInsName(e.target.value);
                    }}
                  />
                </InputGroup>
              </Box>
              <Box ml={{ base: "0px", md: "0px", lg: "0px" }}>
                <Flex
                  ml={{ base: "0px", md: "0px", lg: "0px" }}
                  mt={{ base: "40px", md: "40px", lg: "0px" }}
                  justify="center"
                >
                  <Text mb="20px">Title</Text>
                </Flex>
                <InputGroup
                  size={{ base: "200px", lg: "sm" }}
                  bg="transparent"
                  h="45px"
                  width="300px"
                  alignItems="center"
                  style={{
                    border: "1.5px solid rgba(255, 255, 255, 0.2)",
                    background: " rgba(0, 0, 0, 0.25)",
                  }}
                  rounded="md"
                >
                  <InputLeftElement
                    style={{ background: "transparent" }}
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    // children=" "
                  />
                  <Input
                    h="100%"
                    pl="25px"
                    style={{ border: "0", background: "transparent" }}
                    border="solid 0px"
                    _focusVisible={{ border: "solid 0px" }}
                    rounded="md"
                    placeholder="Your title"
                    value={investTitle}
                    onChange={(e) => {
                      setInsTitle(e.target.value);
                    }}
                  />
                </InputGroup>
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

                <InputGroup
                  size={{ base: "200px", lg: "sm" }}
                  bg="transparent"
                  h="45px"
                  width="300px"
                  alignItems="center"
                  style={{
                    border: "1.5px solid rgba(255, 255, 255, 0.2)",
                    background: " rgba(0, 0, 0, 0.25)",
                  }}
                  rounded="md"
                >
                  <InputLeftElement
                    style={{ background: "transparent" }}
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    // children=" "
                  />
                  <Input
                    h="100%"
                    pl="25px"
                    style={{ border: "0", background: "transparent" }}
                    border="solid 0px"
                    _focusVisible={{ border: "solid 0px" }}
                    rounded="md"
                    type="email"
                    placeholder="example@email.com"
                    value={investEmail}
                    onChange={(e) => {
                      setInsEmail(e.target.value);
                    }}
                  />
                </InputGroup>
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
                    <ButtonTransition
                      unitid="clear"
                      selected={false}
                      width="100px"
                      height="40px"
                      rounded="20px"
                      onClick={() => {
                        if (canvasRef.current)
                          (canvasRef.current as any).clear();
                      }}
                    >
                      <Box>Clear</Box>
                    </ButtonTransition>
                    <ButtonTransition
                      unitid="Open Signature"
                      selected={false}
                      width="150px"
                      height="40px"
                      rounded="20px"
                      ml="40px"
                      onClick={() => openUpload()}
                    >
                      <Box>Open Signature</Box>
                    </ButtonTransition>
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
              <ImageTransition
                unitid="submit"
                border1="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
                background1="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
                border2="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
                background2="#10144B"
                border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
                background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
                selected={false}
                width="200px"
                height="50px"
                rounded="33px"
                onClick={() => onNext()}
              >
                <Box color="white">Confirm</Box>
              </ImageTransition>
            </Flex>
            {/* <Faq /> */}
          </Box>
        </Box>
      </Flex>
      <Footer />
    </PageLayout>
  );
}
