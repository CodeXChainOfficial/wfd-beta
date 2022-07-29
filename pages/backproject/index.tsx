import { ChakraProvider, Stack } from "@chakra-ui/react";

import {
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";
import { IoCheckmark } from "react-icons/io5";
import { toast } from "react-toastify";

import { SUCCESS_OPTION, ERROR_OPTION } from "../../config/constants";
import { checkNetwork, LookForTokenInfo } from "../../utils/utility";
import {
  ButtonBackTransition,
  InputTransition,
} from "../../components/ImageTransition";
import Footer from "../../components/Footer";
import CustomCoinInput from "../../components/BackProject/CustomCoinInput";
import { useStore, useWallet } from "../../contexts/store";

export default function BackProject() {
  const { state, dispatch } = useStore();
  const [condition, setCondition] = useState(false);
  const [backAmount, setBackAmount] = useState("");
  const [feeAmount, setFeeAmount] = useState("");
  const [coin, setCoin] = useState("USDT");
  const [oneprojectData, setOneprojectData] = useState("");
  const wallet = useWallet();

  const onChangeBackAmount = (value: string) => {
    setBackAmount(value);
    const fee = parseFloat(value) * 0.05;
    setFeeAmount(fee.toString());
  };

  function checkValication() {
    const investChain = "juno";
    const investAmount = backAmount;

    if (checkNetwork(state) == false) return false;
    let proper = false;
    if (investChain.toLowerCase() == "juno" && state.walletType == "keplr") {
      proper = true;
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

  async function invest() {
    const investChain = "juno";
    const investAmount = backAmount;
    const investToken = coin;
    //----------verify connection--------------------------------
    if (checkValication() == false) return false;
console.log(investAmount)
console.log(investToken);
    const tokenInfo = LookForTokenInfo(investChain, investToken);
    const amount = tokenInfo?.decimals
      ? Math.floor(parseFloat(investAmount) * 10 ** tokenInfo?.decimals)
      : 0;
console.log(tokenInfo)
    try {
      await wallet.sendTokens(
        amount,
        tokenInfo?.denom,
        tokenInfo?.address,
        tokenInfo?.native
      );
    } catch (e) {
      toast("Failed", ERROR_OPTION);
      console.log(e);
    }
  }

  return (
    <Box width="100%">
      <Flex
        pt={"120px"}
        pb={"25px"}
        px={{ base: "40px", md: "80px", lg: "120px" }}
        direction="column"
        style={{ fontFamily: "PilatExtended-Regular" }}
      >
        <Flex>
          <Text
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "16px" }}
            fontWeight="normal"
            color={"rgba(255, 255, 255, 0.54)"}
          >
            Home &gt;&nbsp;
          </Text>
          <Text
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "16px" }}
            fontWeight="normal"
            color={"rgba(255, 255, 255, 0.54)"}
          >
            Project Detail &gt;&nbsp;
          </Text>
          <Text
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "16px" }}
            color={"rgba(255, 255, 255, 0.84)"}
          >
            Back the project
          </Text>
        </Flex>
        <Flex>
          <Text
            fontSize={{ base: "12px", sm: "16px", md: "25px", lg: "28px" }}
            color="#4790f5"
            fontWeight={"900"}
          >
            Contribute to &nbsp;
          </Text>
          <Text
            as={"span"}
            fontSize={{ base: "12px", sm: "16px", md: "25px", lg: "28px" }}
            fontWeight={"900"}
          >
            Project Name
          </Text>
        </Flex>
      </Flex>
      <Flex
        width="100%"
        justify="center"
        pb={"8em"}
        backgroundImage="url('/media/Home/2.png')"
      >
        <Box
          w={{ base: "300px", md: "600px", lg: "800px" }}
          bgGradient={
            "linear(180deg, #501992 0%, #300F71 18.84%, #09044B 75.22%)"
          }
          px="0px"
          style={{ fontFamily: "Sk-Modernist" }}
          rounded={"3xl"}
        >
          {/* --------amount to back----------- */}
          <Flex
            mt="83px"
            textAlign={"left"}
            justify="space-between"
            align="center"
            direction="column"
          >
            <Image src="/media/Launchpad/secret-partner.png"></Image>
            <Text
              my="20px"
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
                typeText="Amount Required"
                type={backAmount}
                setType={onChangeBackAmount}
                coin={coin}
                setCoin={setCoin}
                w={{ base: "70%", md: "60%", lg: "50%" }}
              />
              <CustomCoinInput
                typeText="Fees"
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
      <Image
        mt={"-9em"}
        width="100%"
        objectFit="contain"
        src="/media/Home/1.svg"
      />
      <Footer />
    </Box>
  );
}
