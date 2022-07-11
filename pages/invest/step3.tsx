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
import Faq from "../../components/Faq";
import PageLayout from "../../components/PageLayout";
import {
  ParseParam_ProjectId,
  GetOneProject,
  checkNetwork,
  LookForTokenInfo,
  checkJunoConnection,
} from "../../utils/utility";
import { ERROR_OPTION, SUCCESS_OPTION } from "../../config/constants";
import {
  ActionKind,
  useJunoConnection,
  useProjectData,
  useStore,
  useWallet,
} from "../../contexts/store";
import { useRouter } from "next/router";
import { fetchData } from "../../utils/fetch";
import Footer from "../../components/Footer";

export default function InvestStep3() {
  const [signature, setSignature] = useState("");
  const [investTitle, setInsTitle] = useState("");
  const [investName, setInsName] = useState("");
  const [investEmail, setInsEmail] = useState("");

  const [oneprojectData, setOneprojectData] = useState<any>(null);

  const { state, dispatch } = useStore();
  const canvasRef = useRef({});
  const router = useRouter();
  const wallet = useWallet();

  const junoConnection = useJunoConnection();
  const client = junoConnection?.getClient();
  const address = junoConnection?.account;

  //------------parse URL for project id----------------------------
  const project_id = ParseParam_ProjectId();
  const projectData = useProjectData();

  useEffect(() => {
    async function fetchData() {
      const oneprojectData = GetOneProject(projectData, project_id);
      if (oneprojectData == null) {
        // toast("Can't fetch project data", ERROR_OPTION);
        // console.log("can't fetch project data");
        return;
      }
      setOneprojectData(oneprojectData);
    }
    fetchData();
  }, [projectData, project_id]);

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
      investChain.toLowerCase() == "bsc" &&
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
    if (state.presale == false && parseFloat(investAmount) < 20000) {
      toast("Input amount for private sale of at least 20,000", ERROR_OPTION);
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

    if (project_id == WEFUND_ID) {
      await createSAFTPdf(date);

      const tokenInfo = LookForTokenInfo(investChain, investToken);
      const amount = tokenInfo?.decimals
        ? Math.floor(parseFloat(investAmount) * 10 ** tokenInfo?.decimals)
        : 0;

      try {
        await wallet.sendTokens(
          amount,
          tokenInfo?.denom,
          tokenInfo?.address,
          tokenInfo?.native
        );
      } catch (e) {
        window.localStorage.removeItem("action");
        toast("Failed", ERROR_OPTION);
        console.log(e);
      }
    } else {
      await createSAFTDocx(date);
      const res = await backProject();
      if (res) router.push("/invest/step4?project_id=" + project_id);
    }
  }

  async function backProject() {
    if (!checkJunoConnection(state)) return false;

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
      title="Back the Project"
      subTitle1="Invest"
      subTitle2="Contribute"
      subTitle3="in WeFund"
    >
      <Flex
        width="100%"
        justify="center"
        py={"4em"}
        backgroundImage="url('/media/Home/2.png')"
      >
        <Box
          w={{ base: "300px", md: "600px", lg: "800px" }}
          bgGradient={
            "linear(180deg, #501992 0%, #300F71 18.84%, #09044B 75.22%)"
          }
          backdropBlur={"54px"}
          pt="30px"
          style={{ fontFamily: "Sk-Modernist" }}
          rounded={"3xl"}
        >
          <Box
            width={"100%"}
            style={{ fontFamily: "Sk-Modernist-Regular" }}
            align="center"
          >
            <Flex
              mt="30px"
              justify="center"
              align="center"
              direction="column"
              style={{ fontFamily: "PilatExtended-Regular" }}
            >
              <HStack mt="150px" mb="50px">
                <Box
                  width={{ base: "50px", md: "40px" }}
                  style={{
                    paddingTop: "3px",
                    paddingLeft: "3px",
                    height: "24px",
                    border: "3px solid #3BE489",
                    backgroundColor: "#3BE489",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                >
                  <CheckIcon
                    color="#250E3F"
                    w={3}
                    h={3}
                    marginBottom={"20px"}
                  />
                </Box>
                <Text
                  fontSize={{
                    base: "12px",
                    sm: "16px",
                    md: "22px",
                    lg: "22px",
                  }}
                >
                  Step 1
                </Text>
                <Box
                  style={{
                    height: "0x",
                    width: "30%",
                    border: "2px solid #3BE489",
                    background: " #3BE489",
                  }}
                ></Box>
                <Box
                  width={{ base: "50px", md: "40px" }}
                  style={{
                    paddingTop: "3px",
                    paddingLeft: "3px",
                    height: "24px",
                    border: "3px solid #3BE489",
                    backgroundColor: "#3BE489",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                >
                  <CheckIcon
                    color="#250E3F"
                    w={3}
                    h={3}
                    marginBottom={"20px"}
                  />
                </Box>
                <Text
                  fontSize={{
                    base: "12px",
                    sm: "16px",
                    md: "22px",
                    lg: "22px",
                  }}
                >
                  Step 2
                </Text>
                <Box
                  style={{
                    height: "4px",
                    width: "30%",
                    background:
                      "linear-gradient(90deg, #3BE489 0%, rgba(59, 228, 137, 0) 100%)",
                  }}
                ></Box>
                <Box
                  width={{ base: "50px", md: "40px" }}
                  style={{
                    height: "24px",
                    border: "3px solid rgba(255, 255, 255, 0.3799999952316284)",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                ></Box>
                <Text
                  fontSize={{
                    base: "12px",
                    sm: "16px",
                    md: "22px",
                    lg: "22px",
                  }}
                >
                  Final Step
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "16px", md: "16px", lg: "22px" }}
                fontWeight={"300"}
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
              direction={{ base: "column", md: "column", lg: "row" }}
              ml="0px"
              mt="40px"
              justify="center"
              align="center"
            >
              <Box>
                <Flex ml={{ base: "0px", md: "0px", lg: "0px" }}>
                  <Text mb="20px">Name</Text>
                </Flex>
                <InputTransition
                  unitid="investorname"
                  selected={investName == "" ? false : true}
                  height="55px"
                  rounded="md"
                  width="290px"
                >
                  <InputGroup
                    size="sm"
                    style={{ background: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <InputLeftElement
                      style={{ background: "transparent" }}
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      // children=" "
                    />
                    <Input
                      style={{}}
                      type="text"
                      h="55px"
                      placeholder="Type Name"
                      rounded="md"
                      value={investName}
                      onChange={(e) => {
                        setInsName(e.target.value);
                      }}
                    />
                  </InputGroup>
                </InputTransition>
              </Box>
              <Box ml={{ base: "0px", md: "0px", lg: "30px" }}>
                <Flex
                  ml={{ base: "0px", md: "0px", lg: "0px" }}
                  mt={{ base: "40px", md: "40px", lg: "0px" }}
                >
                  <Text mb="20px">Title</Text>
                </Flex>
                <InputTransition
                  unitid="investortitle"
                  selected={investTitle == "" ? false : true}
                  height="55px"
                  rounded="md"
                  width="290px"
                >
                  <InputGroup
                    size="sm"
                    style={{ background: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <InputLeftElement
                      style={{ background: "transparent" }}
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      // children=" "
                    />
                    <Input
                      style={{}}
                      type="text"
                      h="55px"
                      placeholder="Your title"
                      rounded="md"
                      value={investTitle}
                      onChange={(e) => {
                        setInsTitle(e.target.value);
                      }}
                    />
                  </InputGroup>
                </InputTransition>
              </Box>
            </Flex>

            <Flex
              direction={{ base: "column", md: "column", lg: "row" }}
              mt="40px"
              justify="center"
              align="center"
            >
              <Box
                ml={{ base: "0px", md: "0px", lg: "0px" }}
                mt={{ base: "0px", md: "0px", lg: "-100px" }}
              >
                <Flex>
                  <Text mb="20px">Email</Text>
                </Flex>
                <InputTransition
                  unitid="investoremail"
                  selected={investEmail == "" ? false : true}
                  height="55px"
                  rounded="md"
                  width="290px"
                >
                  <InputGroup
                    size="sm"
                    style={{ background: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <InputLeftElement
                      style={{ background: "transparent" }}
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      // children=" "
                    />
                    <Input
                      style={{}}
                      type="email"
                      h="55px"
                      placeholder="example@email.com"
                      rounded="md"
                      value={investEmail}
                      onChange={(e) => {
                        setInsEmail(e.target.value);
                      }}
                    />
                  </InputGroup>
                </InputTransition>
              </Box>
              <Box ml={{ base: "0px", md: "0px", lg: "30px" }}>
                <Flex mt={{ base: "40px", md: "40px", lg: "0px" }}>
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
                background2="linear-gradient(180deg, #1A133E 0%, #1A133E 100%)"
                border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
                background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
                selected={false}
                width="200px"
                height="50px"
                rounded="33px"
                onClick={() => onNext()}
              >
                <Box color="white">Submit</Box>
              </ImageTransition>
            </Flex>
            <Faq />
          </Box>
        </Box>
      </Flex>
      <Footer />
    </PageLayout>
  );
}
