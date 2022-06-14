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

import { REQUEST_ENDPOINT, WEFUND_ID } from "../../config/Constants";
import {
  ImageTransition,
  ButtonTransition,
  InputTransition,
} from "../../components/ImageTransition";
import Faq from "../../components/Faq";
import PageLayout from "../../components/PageLayout";
import { ParseParam, GetOneProject, CheckNetwork } from "../../utils/Util";
import { errorOption, successOption } from "../../config/Constants";
import { ActionKind, useProjectData, useStore } from "../../contexts/store";
import { useRouter } from "next/router";

export default function Invest_step3() {
  const [signature, setSignature] = useState("");
  const [InsTitle, setInsTitle] = useState("");
  const [InsName, setInsName] = useState("");
  const [InsEmail, setInsEmail] = useState("");
  const [chain, setChain] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [oneprojectData, setOneprojectData] = useState<any>(null);

  const { state, dispatch } = useStore();
  const canvasRef = useRef({});
  const router = useRouter();

  //------------parse URL for project id----------------------------
  const project_id = ParseParam();
  const projectData = useProjectData();

  useEffect(() => {
    async function fetchData() {
      const oneprojectData = GetOneProject(projectData, project_id);
      if (oneprojectData == null) {
        toast("Can't fetch project data", errorOption);
        console.log("can't fetch project data");
        return "";
      }
      setOneprojectData(oneprojectData);
      setChain(oneprojectData.project_ecosystem);
    }
    fetchData();
  }, [state.projectData, project_id]);

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
    if (CheckNetwork(state) == false) return false;

    if (state.investAmount <= 0) {
      toast("Please input amount", errorOption);
      return false;
    }
    if (state.presale == false && state.investAmount < 20000) {
      toast("Input amount for private sale of at least 20,000", errorOption);
      return false;
    }
    return true;
  }

  async function createSAFTPdf(date: string) {
    const formData = new FormData();
    formData.append("investName", InsName);
    formData.append("investTitle", InsTitle);
    formData.append("investEmail", InsEmail);
    formData.append("investAmount", state.investAmount.toString());
    formData.append("investDate", date);
    formData.append("investSignature", (canvasRef.current as any).toDataURL());
    formData.append("presale", state.presale.toString());

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    toast("Uploading", successOption);

    await fetch(REQUEST_ENDPOINT + "/pdfmake", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        toast.dismiss();
        dispatch({
          type: ActionKind.setPdfFile,
          payload: data.data,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log("Error:" + e);
      });
  }
  async function createSAFTDocx(date: string) {
    const formData = new FormData();
    formData.append("docxTemplate", oneprojectData?.project_saft);
    formData.append("purchaserName", InsName);
    formData.append("purchaserTitle", InsTitle);
    formData.append("purchaserEmail", InsEmail);
    formData.append("purchaserAmount", state.investAmount.toString());
    formData.append("purchaserDate", date);
    const canvas: any = canvasRef.current;
    formData.append("purchaserSignature", canvas.toDataURL());

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    toast("Uploading", successOption);

    await fetch(REQUEST_ENDPOINT + "/docxmake", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        toast.dismiss();
        dispatch({
          type: "setDocxfile",
          message: data.data,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log("Error:" + e);
      });
  }
  async function onNext() {
    //----------verify connection--------------------------------
    if (checkValication() == false) return false;

    dispatch({
      type: ActionKind.setInvestName,
      payload: InsName,
    });
    dispatch({
      type: ActionKind.setInvestEmail,
      payload: InsEmail,
    });
    dispatch({
      type: ActionKind.setInvestTitle,
      payload: InsTitle,
    });

    const currentDate = new Date();
    const date =
      currentDate.getDate() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getFullYear();

    dispatch({
      type: ActionKind.setInvestDate,
      payload: date,
    });

    if (project_id == WEFUND_ID) {
      await createSAFTPdf(date);

      const amount = state.investAmount * 10 ** 6;
      //   const msg = new MsgSend(
      //     state.connectedWallet.walletAddress,
      //     "terra1zjwrdt4rm69d84m9s9hqsrfuchnaazhxf2ywpc",
      //     { uusd: amount }
      //   );
      //   let memo = state.presale ? "Presale" : "Private sale";
      const res = true;
      //   let res = await EstimateSend(
      //     state.connectedWallet,
      //     state.lcd_client,
      //     [msg],
      //     "Invest success ",
      //     memo
      //   );
      if (res == true) router.push("/invest/step4?project_id=" + project_id);
    } else {
      //   await createSAFTDocx(date);
      //   let res = await backProject();
      //   if (res == true) navigate("/invest_step4?project_id=" + project_id);
    }
  }

  async function backProject() {
    const targetAmount = parseInt(oneprojectData.project_collected) * 10 ** 6;

    const leftAmount = targetAmount - oneprojectData.backerbacked_amount;

    if (leftAmount <= 0) {
      toast(
        "Backer allocation has already been collected! You can't back this project.",
        errorOption
      );
      return false;
    }

    const amount = state.investAmount * 10 ** 6;
    // let maxAmount;
    // if(leftAmount >= 100_000_000)
    //   maxAmount = leftAmount * 100 / 95 + 1_000_000;
    // else
    //   maxAmount = leftAmount + 5_000_000;

    if (amount < 6_000_000) {
      toast("Investment amount should be at least 6 UST.", errorOption);
      return false;
    }
    // if (amount > maxAmount) {
    //   toast("Investment amount should be less than " + (maxAmount/10**6).toString() + " UST", errorOption);
    //   return false;
    // }

    // let wefundContractAddress = state.WEFundContractAddress;
    // let BackProjectMsg = {
    //   back2_project: {
    //     project_id: `${project_id}`,
    //     backer_wallet: state.connectedWallet.walletAddress,
    //     fundraising_stage: oneprojectData.fundraising_stage,
    //     token_amount: `${state.investWfdamount}`,
    //     otherchain: chain,
    //     otherchain_wallet: walletAddress,
    //   },
    // };

    // let msg = new MsgExecuteContract(
    //   state.connectedWallet.walletAddress,
    //   wefundContractAddress,
    //   BackProjectMsg,
    //   { uusd: amount }
    // );

    // return await EstimateSend(
    //   state.connectedWallet,
    //   state.lcd_client,
    //   [msg],
    //   "Back to Project Success"
    // );
  }

  const OtherChainWallet = () => {
    return (
      <Flex
        direction={{ base: "column", md: "column", lg: "row" }}
        mt="40px"
        justify="center"
        align="center"
      >
        <Box ml={{ base: "0px", md: "0px", lg: "0px" }}>
          <Flex>
            <Text mb="20px">Select Chain</Text>
          </Flex>
          <InputTransition
            unitid="chaintransition"
            selected={false}
            width="300px"
            height="45px"
            rounded="md"
          >
            <Select
              id="chainselect"
              style={{ background: "transparent", border: "0" }}
              h="45px"
              shadow="sm"
              size="sm"
              w="100%"
              value={chain}
              rounded="md"
              onChange={(e) => {
                setChain(e.target.value);
              }}
            >
              <option style={{ backgroundColor: "#1B0645" }}>Ethereum</option>
              <option style={{ backgroundColor: "#1B0645" }}>BSC</option>
              <option style={{ backgroundColor: "#1B0645" }}>Solana</option>
              <option style={{ backgroundColor: "#1B0645" }}>Harmony</option>
              <option style={{ backgroundColor: "#1B0645" }}>Osmis</option>
              <option style={{ backgroundColor: "#1B0645" }}>Algorand</option>
              <option style={{ backgroundColor: "#1B0645" }}>Terra</option>
              <option style={{ backgroundColor: "#1B0645" }}>Avalanche</option>
            </Select>
          </InputTransition>
        </Box>
        <Box ml={{ base: "0px", md: "0px", lg: "30px" }}>
          <Flex mt={{ base: "40px", md: "40px", lg: "0px" }}>
            <Text mb="20px">Wallet Address</Text>
          </Flex>
          <Box>
            <InputTransition
              unitid="inputwallet"
              selected={false}
              width="300px"
              height="45px"
              rounded="md"
            >
              <Input
                background={"transparent"}
                border="0px"
                h="45px"
                type="text"
                placeholder="Paste wallet address here"
                boxShadow={""}
                rounded="md"
                value={walletAddress}
                onChange={(e) => {
                  setWalletAddress(e.target.value);
                }}
              />
            </InputTransition>
          </Box>
        </Box>
      </Flex>
    );
  };

  return (
    <PageLayout
      title="Back the project"
      subTitle1="Invest"
      subTitle2="in WeFund"
    >
      <Box
        width={{ base: "100%", sm: "80%", md: "80%", lg: "80%", xl: "70%" }}
        px="50px"
        style={{ fontFamily: "Sk-Modernist-Regular" }}
      >
        <Flex
          mt="83px"
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
              <CheckIcon color="#250E3F" w={3} h={3} marginBottom={"20px"} />
            </Box>
            <Text
              fontSize={{ base: "12px", sm: "16px", md: "22px", lg: "22px" }}
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
              <CheckIcon color="#250E3F" w={3} h={3} marginBottom={"20px"} />
            </Box>
            <Text
              fontSize={{ base: "12px", sm: "16px", md: "22px", lg: "22px" }}
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
              fontSize={{ base: "12px", sm: "16px", md: "22px", lg: "22px" }}
            >
              Final Step
            </Text>
          </HStack>
          <Text
            fontSize={{ base: "16px", md: "16px", lg: "22px" }}
            fontWeight={"300"}
          >
            Please <span style={{ color: "#00A3FF" }}>share with us</span> this
            information
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
              selected={InsName == "" ? false : true}
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
                  value={InsName}
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
              selected={InsTitle == "" ? false : true}
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
                  value={InsTitle}
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
              selected={InsEmail == "" ? false : true}
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
                  value={InsEmail}
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
                    if (canvasRef.current) (canvasRef.current as any).clear();
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
        {WEFUND_ID != project_id && <OtherChainWallet />}

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
    </PageLayout>
  );
}
