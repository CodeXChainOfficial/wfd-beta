import { ChakraProvider, Stack } from "@chakra-ui/react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { BigNumber, ethers } from "ethers";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { IoCheckmark } from "react-icons/io5";
import { toast } from "react-toastify";
import {
  ButtonBackTransition,
  InputTransition,
} from "../../components/ImageTransition";
import theme from "../../theme";
import Footer from "../../components/Footer";
import CustomSelect from "../../components/WhitelistProject/CustomSelect";
import CustomInput from "../../components/WhitelistProject/CustomInput";
import CustomEmailInput from "../../components/WhitelistProject/CustomEmailInput";
import { checkBscConnection, Sleep } from "../../utils/utility";
import { useStore } from "../../contexts/store";
import { SUCCESS_OPTION, WEFUND_CONTRACT } from "../../config/constants";
import { fetchData } from "../../utils/fetch";
import { useMetamaskWallet } from "../../contexts/metamask";
import WEFUND_ABI from "../../config/constants/WeFund.json";

export default function WhitelistProject() {
  const { query } = useRouter();
  const { project_id } = query;
  const { state, dispatch } = useStore();
  const metamaskWallet = useMetamaskWallet();
  const address = metamaskWallet?.account;

  //----------Declaring State used---
  const [condition, setCondition] = useState(false);
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [invest, setInvestOption] = useState("");

  async function JoinWhitelist(project_id: string) {
    if (!checkBscConnection(state)) return;

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        WEFUND_CONTRACT,
        WEFUND_ABI,
        signer
      );

      const res = await contract.addWhitelist(project_id, 1);
      await res.wait();
      // contract.on("WhitelistAdded", (message, idnum) => {
        // console.log("Creation Event Data: ", message, idnum);
      // });
      toast("Register on whitelist success", SUCCESS_OPTION);
      fetchData(state, dispatch, true);
  } catch (e) {
      console.log(e);
    }
  }

  return (
    <ChakraProvider resetCSS theme={theme}>
      <div
        style={{
          width: "100%",
          color: "white",
          fontSize: "18px",
          fontFamily: "Sk-Modernist",
          fontWeight: "700",
        }}
      >
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
              Whitelist
            </Text>
          </Flex>
          <Flex>
            <Text
              fontSize={{ base: "12px", sm: "16px", md: "25px", lg: "28px" }}
              color="#4790f5"
              fontWeight={"900"}
            >
              Join Whitelist for &nbsp;
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
                Enter your information
              </Text>
              <Stack
                align="center"
                w={{ base: "90%", md: "50%", lg: "80%" }}
                spacing={12}
              >
                <CustomEmailInput
                  typeText="Email"
                  type={email}
                  setType={setEmail}
                  w={{ base: "100%", md: "80%", lg: "80%" }}
                />
                <CustomInput
                  typeText="Telegram"
                  type={telegram}
                  setType={setTelegram}
                  w={{ base: "100%", md: "80%", lg: "80%" }}
                  mt="30px"
                />
                <CustomSelect
                  typeText="Fundraise Option"
                  type={invest}
                  setType={setInvestOption}
                  options={[
                    "< $10.000",
                    "$10.000-$50.000",
                    "$10.000-$50.000",
                    "$50.000-$100.000",
                    "> $100.000",
                  ]}
                  w={{ base: "100%", md: "80%", lg: "80%" }}
                />
              </Stack>

              <Flex mt="25px" direction="row">
                <InputTransition
                  unitid="conditioncheck"
                  selected={false}
                  width="24px"
                  height="24px"
                  rounded="md"
                  onClick={() => {
                    setCondition(!condition);
                  }}
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
                  I agree to be included on Whitelist of the Project
                </Text>
              </Flex>
            </Flex>
            {/* -----------------Whitelist Project----------------- */}
            <Flex w="100%" mt="60px" justify="center" mb="170px">
              <ButtonBackTransition
                unitid="Whitelist Project"
                selected={false}
                width="250px"
                height="45px"
                rounded="33px"
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
                  onClick={() => JoinWhitelist(project_id)}
                >
                  Join Whitelist
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
      </div>
    </ChakraProvider>
  );
}
