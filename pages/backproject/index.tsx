import React, { useEffect, useState, useRef } from "react";
import { ethers } from "ethers";
import { Stack, Box, Flex, Text, Image } from "@chakra-ui/react";
import { IoCheckmark } from "react-icons/io5";
import { toast } from "react-toastify";

import {
  SUCCESS_OPTION,
  ERROR_OPTION,
  WEFUND_CONTRACT,
  ERC20_ABI,
} from "../../config/constants";
// import WEFUND_ABI from "../../config/constants/WeFund.json";
import {
  checkBscConnection,
  GetOneProject,
  LookForTokenInfo,
  ParseParam_ProjectId,
} from "../../utils/utility";
import {
  ButtonBackTransition,
  InputTransition,
} from "../../components/ImageTransition";
import Footer from "../../components/Footer";
import CustomCoinInput from "../../components/BackProject/CustomCoinInput";
import { useProjectData, useStore, useWallet } from "../../contexts/store";
import { fetchData } from "../../utils/fetch";
import PageLayout from "../../components/PageLayout";

export default function BackProject() {
  const { state, dispatch } = useStore();
  const [condition, setCondition] = useState(false);
  const [backAmount, setBackAmount] = useState("");
  const [feeAmount, setFeeAmount] = useState("");
  const [coin, setCoin] = useState("USDT");

  const wallet = useWallet();
  const project_id = ParseParam_ProjectId();
  const projectData = useProjectData();
  const oneprojectData = GetOneProject(projectData, project_id);

  const onChangeBackAmount = (value: string) => {
    setBackAmount(value);
    const fee = parseFloat(value) * 0.05;
    setFeeAmount(fee.toString());
  };

  function checkValication() {
    const investAmount = backAmount;

    if (checkBscConnection(state) == false) return false;

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

  async function invest() {
    const investChain = "bsc";
    const investAmount = backAmount;
    const investToken = coin;
    //----------verify connection--------------------------------
    if (checkValication() == false) return false;
    const tokenInfo = LookForTokenInfo(investChain, investToken);
    const amount = tokenInfo?.decimals
      ? Math.floor(parseFloat(investAmount) * 10 ** tokenInfo?.decimals)
      : 0;

    if (!checkBscConnection(state) || !tokenInfo?.address) return;

    const overrides = {
      gasLimit: 9999999,
    };
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const token = new ethers.Contract(tokenInfo?.address, ERC20_ABI, signer);
      let res = await token.approve(WEFUND_CONTRACT, amount);
      toast("Please wait...", SUCCESS_OPTION);
      await res.wait();
      console.log("approve done");

      const contract = new ethers.Contract(
        WEFUND_CONTRACT,
        WEFUND_ABI,
        signer
      );

      let tokenType = 0;
      switch (tokenInfo?.name.toLowerCase()) {
        case "usdc":
          tokenType = 0;
          break;
        case "usdt":
          tokenType = 1;
          break;
        case "busd":
          tokenType = 2;
          break;
      }
      res = await contract.back(project_id, tokenType, amount);
      await res.wait();
      toast("Back success!", SUCCESS_OPTION);
      fetchData(state, dispatch, true);
    } catch (e) {
      toast("Failed", ERROR_OPTION);
      console.log(e);
    }
  }

  return (
    <PageLayout
      title="Contribute"
      subTitle1="Invest"
      subTitle2="Back and Contribute to"
      subTitle3="&nbsp;Project Name "
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
        <Box
          w={{ base: "90%", md: "600px", lg: "800px" }}
          background="#120037"
          backdropBlur={"54px"}
          pt="40px"
          style={{ fontFamily: "Sk-Modernist" }}
          rounded={"3xl"}
        >
          {/* --------amount to back----------- */}
          <Flex
            mt="20px"
            textAlign={"left"}
            justify="space-between"
            align="center"
            direction="column"
          >
            <Image src="/media/Launchpad/secret-partner.png"></Image>
            <Text
              my="20px"
              mt="20px"
              textAlign={"center"}
              justifyContent={"center"}
              fontWeight="400"
              fontSize={{ base: "14px", sm: "14px", md: "16px", lg: "16px" }}
            >
              Select tokens and enter amount to back
            </Text>
            <Stack
              align="center"
              w={{ base: "100%", md: "100%", lg: "100%" }}
              spacing={12}
            >
              <CustomCoinInput
                typeText="Amount to Contribute to Project"
                type={backAmount}
                setType={onChangeBackAmount}
                coin={coin}
                setCoin={setCoin}
                w={{ base: "70%", md: "60%", lg: "50%" }}
              />
              <CustomCoinInput
                typeText="Fees on Backing Contribution"
                type={feeAmount}
                setType={setFeeAmount}
                coin={coin}
                w={{ base: "70%", md: "60%", lg: "50%" }}
                readOnly={true}
              />
            </Stack>

            <Flex mt="25px" direction="row">
              <InputTransition
                unitid="conditioncheck"
                selected={false}
                width="24px"
                height="24px"
                rounded="md"
                onClick={() => setCondition(!condition)}
              >
                {condition && (
                  <IoCheckmark
                    width="24px"
                    height="24px"
                    color="#FE8600"
                  ></IoCheckmark>
                )}
              </InputTransition>
              <Text
                ml="10px"
                fontSize={{
                  base: "12px",
                  sm: "14px",
                  md: "16px",
                  lg: "16px",
                }}
                fontWeight="400"
              >
                I agree with all conditions of this project and WeFund
              </Text>
            </Flex>
          </Flex>
          {/* -----------------Back Project----------------- */}
          <Flex w="100%" mt="60px" justify="center" mb="170px">
            <ButtonBackTransition
              unitid="Back Project"
              selected={false}
              width="250px"
              height="45px"
              rounded="33px"
              onClick={() => invest()}
            >
              <Box
                color="white"
                justifyContent="center"
                alignSelf="center"
                fontSize={{
                  base: "14px",
                  sm: "14px",
                  md: "16px",
                  lg: "16px",
                }}
              >
                Back The Project
              </Box>
            </ButtonBackTransition>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </PageLayout>
  );
}
