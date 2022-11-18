import React, { useState, useRef, useEffect } from "react";

import * as sapphire from "@oasisprotocol/sapphire-paratime";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";
import { ethers } from "ethers";
import WEFUND_ABI from "../config/WeFund.json";

import { ButtonTransition } from "../components/ImageTransition";
import { useStore, useWallet } from "../contexts/store";
import Footer from "../components/Footer";
import { checkNetwork, isNull, ParseParam_ProjectId } from "../utils/utility";
import {
  CHAINS_CONFIG,
  WEFUND_CONTRACT,
  SUCCESS_OPTION,
  ERROR_OPTION,
} from "../config/constants";
import { REQUEST_ENDPOINT } from "../config/constants";

import PageLayout from "../components/PageLayout";

import CustomInput from "../components/CreateProject/CustomInput";
import CustomTextarea from "../components/CreateProject/CustomTextarea";
import CustomCoinInput from "../components/CreateProject/CustomCoinInput";
import CustomSimpleNumberInput from "../components/CreateProject/CustomSimpleNumberInput";
import CustomSelect from "../components/CreateProject/CustomSelect";
import CustomEmailInput from "../components/CreateProject/CustomEmailInput";
import CustomUpload from "../components/CreateProject/CustomUpload";
import TeamMembers from "../components/CreateProject/TeamMember/TeamMembers";
import ApplyOpt from "../components/CreateProject/ApplyOption/ApplyOpt";
import { useMetamaskWallet } from "../contexts/metamask";
import { fetchProjectData } from "../hook/FetchProject";
import CustomTelegramInput from "../components/CreateProject/CustomTelegramInput";

export default function CreateProject() {
  const { state, dispatch } = useStore();
  const metamask = useMetamaskWallet();
  const router = useRouter();

  const [logo, setLogo] = useState("");
  const [whitepaper, setWhitepaper] = useState("");

  const [createDate, setCreateDate] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ecosystem, setEcosystem] = useState("Terra");
  const [fundraise, setFundraiseOption] = useState("Token");
  const [tokenName, setTokenName] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");

  const [opt, setOpt] = useState("Incubation");
  const [fundPhase, setFundPhase] = useState([""]);
  const [fundPrice, setFundPrice] = useState([""]);
  const [fundAmount, setFundAmount] = useState([""]);
  const [fundVesting, setFundVesting] = useState([""]);
  const [prjNeed, setPrjNeed] = useState([""]);
  const [IDOAmount, setIDOAmount] = useState("");
  const [IDOPrice, setIDOPrice] = useState("");
  const [IDOPercent, setIDOPercent] = useState("");
  const [IDOVesting, setIDOVesting] = useState("");

  const [collectedAmount, setCollectedAmount] = useState("");

  const [teammemberDescription, setTeammemberDescription] = useState([""]);
  const [teammemberLinkedin, setTeammemberLinkedin] = useState([""]);
  const [teammemberRole, setTeammemberRole] = useState([""]);
  const [teammemberName, setTeammemberName] = useState([""]);

  const [stageTitle, setStageTitle] = useState(["Seed"]);
  const [stagePrice, setStagePrice] = useState([""]);

  const [country, setCountry] = useState("");
  const [cofounderName, setCofounderName] = useState("");
  const [signature, setSignature] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [serviceWefund, setServiceWefund] = useState("5");
  const [serviceCharity, setServiceCharity] = useState("0");
  const [website, setWebsite] = useState("");
  const [professionallink, setProfessionalLink] = useState("");

  //---------------create project---------------------------------
  const checkInvalidation = () => {
    if (checkNetwork(state) == false) return false;

    if (title.length == 0) {
      toast("Please fill in project name!", ERROR_OPTION);
      return false;
    }

    return true;
  };

  const createDocxTemplate = async () => {
    const formData = new FormData();
    formData.append("tokenName", tokenName);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("ecosystem", ecosystem);
    formData.append("fundraise", fundraise);
    formData.append("priceSeed", stagePrice[0]);
    formData.append("pricePresale", stagePrice[1]);
    formData.append("priceIDO", stagePrice[2]);
    formData.append("email", email);
    formData.append("file", signature);

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    let realSAFT = "",
      err = false;
    await fetch(REQUEST_ENDPOINT + "/docxtemplatemake", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        realSAFT = data.data;
        toast(data.data + "SAFT Success", SUCCESS_OPTION);
      })
      .catch((e) => {
        console.log("Error:" + e);
        toast("SAFT failed", ERROR_OPTION);
        err = true;
      });

    if (err) return "";
    return realSAFT;
  };

  const uploadWhitepaper = async () => {
    let realWhitepaper = "";
    if (!isNull(whitepaper)) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("file", whitepaper);

      const requestOptions = {
        method: "POST",
        body: formData,
      };

      await fetch(REQUEST_ENDPOINT + "/uploadWhitepaper", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          realWhitepaper = data.data;
          toast("Whitepaper upload success", SUCCESS_OPTION);
        })
        .catch((e) => {
          console.log("Error:" + e);
          toast("Whitepaper upload failed", ERROR_OPTION);
        });
    }
    return realWhitepaper;
  };

  const uploadLogo = async () => {
    //---------upload logo-------------------------------------------------
    let realLogo = "";
    if (logo != "") {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("file", logo);

      const requestOptions = {
        method: "POST",
        body: formData,
      };

      await fetch(REQUEST_ENDPOINT + "/uploadLogo", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          realLogo = data.data;
          toast(data.data + "Logo upload success", SUCCESS_OPTION);
        })
        .catch((e) => {
          console.log("Error:" + e);
          toast("Logo upload failed", ERROR_OPTION);
        });
    }
    return realLogo;
  };

  async function createProject() {
    if (!checkInvalidation()) return false;

    toast("Please wait", SUCCESS_OPTION);

    const realSAFT = await createDocxTemplate();
    if (realSAFT == "") return false;

    const realWhitepaer = await uploadWhitepaper();
    // const realLogo = await uploadLogo();
    //---------------execute contract----------------------------------
    const project_teammembers = [];
    for (let i = 0; i < teammemberDescription.length; i++) {
      const teammember = {
        teammember_description: teammemberDescription[i],
        teammember_linkedin: teammemberLinkedin[i],
        teammember_role: teammemberRole[i],
        teammember_name: teammemberName[i],
      };
      project_teammembers.push(teammember);
    }

    let _createDate = createDate;
    if (_createDate == "") {
      const dt = new Date();
      const [month, day, year] = [
        dt.getMonth(),
        dt.getDate(),
        dt.getFullYear(),
      ];
      _createDate = `${year}-${month}-${day} 00-00-00`;
    }

    const address = metamask.account;
    const fundraiseJson = [fundraise];

    if (state.walletType != "metamask") {
      toast("Connect with metamsk", ERROR_OPTION);
      return;
    }
    try {
      let contract = new ethers.Contract(
        WEFUND_CONTRACT,
        WEFUND_ABI,
        sapphire.wrap(
          new ethers.providers.JsonRpcProvider(CHAINS_CONFIG["sapphire"].rpc)
        )
      );
      let res = await contract.getNumberOfProjects();

      const projectId = res.toNumber() + 1;
      const project = {
        creator_wallet: address,
        project_id: projectId.toString(),
        project_company: company,
        project_title: title,
        project_description: description,
        project_collected: collectedAmount.toString(),
        project_option: opt,
        project_ecosystem: ecosystem,
        project_fundtype: JSON.stringify(fundraiseJson),
        project_createddate: _createDate,
        project_saft: realSAFT,
        project_logo: logo,
        project_whitepaper: realWhitepaer,
        project_website: website,
        project_email: email,
        project_telegram: telegram,
        project_teammembers: JSON.stringify(project_teammembers),
        token_addr: tokenAddress,
  
        country: country,
        cofounder_name: cofounderName,
        service_wefund: serviceWefund,
        service_charity: serviceCharity,
        professional_link: professionallink,
      };
      toast("Please wait", { ...SUCCESS_OPTION, autoClose: false });

      const signer = metamask.signer;
      contract = new ethers.Contract(WEFUND_CONTRACT, WEFUND_ABI, signer);

      res = await contract.addProject(collectedAmount);
      await res.wait();

      res = await axios.post("/api/projects/addProject", project);
      if (res?.error) {
        throw "connection error";
      }
      toast.dismiss();

      await fetchProjectData(state, dispatch, true);
      toast("Successed Applying", SUCCESS_OPTION);
    } catch (e) {
      toast.dismiss();
      toast("Error", ERROR_OPTION);
      console.log(e);
    }
  }

  return (
    <PageLayout
      title="Project Apply"
      subTitle1=""
      subTitle2=" Apply  for your project"
      subTitle3={" "}
    >
      <Flex
        width="100%"
        justify="center"
        py={"4em"}
        backgroundImage="url('/media/Home/2.png')"
      >
        <Box w={{ base: "200px", md: "600px", lg: "800px" }}>
          <Flex width="100%" justify="center" mb={"150px"} zIndex={"1"}>
            <Box
              w={{ base: "xs", sm: "xs", md: "2xl", lg: "2xl", xl: "3xl" }}
              bg="#120D30"
              backdropBlur={"54px"}
              borderTopColor="transparent"
              fontFamily="Sk-Modernist-Regular"
              paddingLeft="30px"
              paddingRight="30px"
              zIndex="1"
              rounded={"3xl"}
            >
              <CustomInput
                typeText="Project Title"
                type={title}
                setType={setTitle}
                w="100%"
                mt="30px"
              />
              <CustomTextarea
                typeText="Project Description"
                type={description}
                setType={setDescription}
              />
              <TeamMembers
                description={teammemberDescription}
                setDescription={setTeammemberDescription}
                name={teammemberName}
                setName={setTeammemberName}
                role={teammemberRole}
                setRole={setTeammemberRole}
                linkedin={teammemberLinkedin}
                setLinkedin={setTeammemberLinkedin}
              />
              <ApplyOpt
                opt={opt}
                setOpt={setOpt}
                fundPhase={fundPhase}
                setFundPhase={setFundPhase}
                fundPrice={fundPrice}
                setFundPrice={setFundPrice}
                fundAmount={fundAmount}
                setFundAmount={setFundAmount}
                fundVesting={fundVesting}
                setFundVesting={setFundVesting}
                prjNeed={prjNeed}
                setPrjNeed={setPrjNeed}
                IDOAmount={IDOAmount}
                setIDOAmount={setIDOAmount}
                IDOPrice={IDOPrice}
                setIDOPrice={setIDOPrice}
                IDOPercent={IDOPercent}
                setIDOPercent={setIDOPercent}
                IDOVesting={IDOVesting}
                setIDOVesting={setIDOVesting}
              />
              <Stack
                mt="30px"
                direction={{ base: "column", md: "column", lg: "row" }}
                spacing="30px"
              >
                <CustomCoinInput
                  typeText="Amount Required"
                  type={collectedAmount}
                  setType={setCollectedAmount}
                  w={{ base: "100%", md: "50%", lg: "50%" }}
                />
                <CustomSelect
                  typeText="Blockchain"
                  type={ecosystem}
                  setType={setEcosystem}
                  options={[
                    "Juno",
                    "BSC",
                    "Tron",
                    "Near",
                    "Tgrade",
                    "Fantom",
                    "Polygon",
                    "OneLedger",
                  ]}
                  w={{ base: "100%", md: "50%", lg: "50%" }}
                />
                <CustomSelect
                  typeText="Fundraise Option"
                  type={fundraise}
                  setType={setFundraiseOption}
                  options={[
                    "Token",
                    "Equity",
                    "Token and Equity",
                    "NFT",
                    "Others",
                  ]}
                  w={{ base: "100%", md: "50%", lg: "50%" }}
                />
              </Stack>
              <Stack
                mt="30px"
                direction={{ base: "column", md: "row", lg: "row" }}
                spacing="30px"
              >
                <CustomEmailInput
                  typeText="Email"
                  type={email}
                  setType={setEmail}
                  w={{ base: "100%", lg: "50%" }}
                />
                <CustomTelegramInput
                  typeText="Telegram"
                  type={telegram}
                  setType={setTelegram}
                  w={{ base: "100%", lg: "50%" }}
                />
              </Stack>
              <Stack
                mt="30px"
                direction={{ base: "column", md: "row", lg: "row" }}
                spacing="30px"
              >
                <CustomSimpleNumberInput
                  typeText="% for WeFund Service"
                  type={serviceWefund}
                  setType={setServiceWefund}
                  w={{ base: "100%", md: "50%", lg: "50%" }}
                />
                <CustomSimpleNumberInput
                  typeText="% for Charity"
                  type={serviceCharity}
                  setType={setServiceCharity}
                  w={{ base: "100%", md: "50%", lg: "50%" }}
                />
              </Stack>
              <CustomUpload
                typeText="Whitepaper"
                type={whitepaper}
                setType={setWhitepaper}
                w="100%"
              />
              <Flex w="100%" mt="30px" justify="center" mb="30px">
                <ButtonTransition
                  unitid="submit"
                  selected={false}
                  width="400px"
                  height="50px"
                  rounded="33px"
                  onClick={() => createProject()}
                >
                  <Box color="white">Submit</Box>
                </ButtonTransition>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Footer />
    </PageLayout>
  );
}
