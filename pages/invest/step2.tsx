import {
  Box,
  Flex,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Text,
  Stack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

import {
  ImageTransition,
  InputTransition,
} from "../../components/ImageTransition";
import { WEFUND_ID } from "../../config/constants";
import { ActionKind, useProjectData, useStore } from "../../contexts/store";
import PageLayout from "../../components/PageLayout";
import {
  getAllocation,
  ParseParam_ProjectId,
  GetOneProject,
} from "../../utils/utility";
import { ERROR_OPTION } from "../../config/constants";
import { useRouter } from "next/router";
import OtherChainWallet from "../../components/Invest/OtherChainWallet";
import Footer from "../../components/Footer";

export default function InvestStep2() {
  const [chain, setChain] = useState("Juno");
  const [token, setToken] = useState("");
  const [backAmount, setBackAmount] = useState("");
  const [wfdAmount, setWfdamount] = useState(0.0);
  const [max, setMax] = useState(0);
  const [allocation, setAllocation] = useState(0);
  const { state, dispatch } = useStore();
  const router = useRouter();

  const projectId = ParseParam_ProjectId();

  useEffect(() => {
    const allocation = getAllocation(state, projectId);
    setAllocation(allocation);

    const max = allocation;
    setMax(max);
  }, [state.projectData, state.address]);

  function onChangeBackamount(val: string) {
    const amount = parseFloat(val);
    const wefundRate = state.presale ? 0.09 : 0.06;
    setWfdamount(amount / wefundRate);
    setBackAmount(val);
  }

  function onNext() {
    // if (allocation == 0) {
    //   toast("Have no allocation any more!", ERROR_OPTION);
    //   return;
    // }
    if (parseInt(backAmount) > max) {
      toast("Exceed the allocation!", ERROR_OPTION);
      return;
    }
    window.localStorage.setItem("invest_chain", chain);
    window.localStorage.setItem("invest_token", token);
    window.localStorage.setItem("invest_amount", backAmount);
    window.localStorage.setItem("invest_wfdamount", wfdAmount.toString());

    router.push({
      pathname: "/invest/step3",
      query: {
        project_id: projectId,
      },
    });
  }

  return (
    <PageLayout
      title="Contribute"
      subTitle1="Invest"
      subTitle2="Contribute"
      subTitle3="&nbsp;in WeFund"
    >
      <Flex
        width="100%"
        justify="center"
        py={"4em"}
        backgroundImage="url('/media/Home/2.png')"
      >
        <Box
          w={{ base: "90%", md: "600px", lg: "800px" }}
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
            px={1}
          >
            <Flex
              justify="center"
              align="center"
              direction="column"
              style={{ fontFamily: "PilatExtended-Regular" }}
            >
              <HStack mt="150px" mb="50px">
                <Box
                  width={{ base: "35px", md: "40px" }}
                  height={{ base: "18px", md: "24px" }}
                  style={{
                    paddingTop: "3px",
                    paddingLeft: "3px",
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
                    md: "22px",
                    lg: "22px",
                  }}
                >
                  Step 1
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
                  width={{ base: "35px", md: "40px" }}
                  height={{ base: "18px", md: "24px" }}
                  style={{
                    border: "3px solid rgba(255, 255, 255, 0.3799999952316284)",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                ></Box>
                <Text
                  fontSize={{
                    base: "12px",
                    sm: "12px",
                    md: "22px",
                    lg: "22px",
                  }}
                >
                  Step 2
                </Text>
                <Box
                  style={{
                    height: "0px",
                    width: "30%",
                    border: "2px solid rgba(255, 255, 255, 0.3799999952316284)",
                    background: " rgba(255, 255, 255, 0.3799999952316284)",
                  }}
                ></Box>
                <Box
                  width={{ base: "35px", md: "40px" }}
                  height={{ base: "18px", md: "24px" }}
                  style={{
                    border: "3px solid rgba(255, 255, 255, 0.3799999952316284)",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                ></Box>
                <Text
                  fontSize={{
                    base: "12px",
                    sm: "12px",
                    md: "22px",
                    lg: "22px",
                  }}
                >
                  Final
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "15px", md: "15px", lg: "22px" }}
                fontWeight={"300"}
              >
                Input your{" "}
                <span style={{ color: "#00A3FF" }}>Investment Amount</span>
              </Text>
              <Text
                fontSize={{ base: "12px", md: "12px", lg: "16x" }}
                maxW={"390px"}
                color="rgba(255, 255, 255, 0.54)"
                fontWeight={"normal"}
                mt={"20px"}
                textAlign={"center"}
              >
                Please select the chain and tokens, enter amount and we will
                convert the WFD amount for you
              </Text>
            </Flex>
            {/* --------amount to back----------- */}
            <OtherChainWallet
              token={token}
              setToken={setToken}
              chain={chain}
              setChain={setChain}
            />

            <Stack
              direction={{ base: "column", md: "column", lg: "row" }}
              mt="40px"
              justify="center"
              align={{ base: "center", lg: "baseline" }}
              spacing={8}
            >
              <Stack
                direction={{ base: "column", md: "column", lg: "column" }}
                spacing={2}
              >
                <Flex>
                  <Text>Token amount you want to invest</Text>
                </Flex>
                <InputTransition
                  unitid="backamount"
                  selected={backAmount == "" ? false : true}
                  width="300px"
                  height="55px"
                  rounded="md"
                >
                  <InputGroup
                    size={{ base: "200px", lg: "sm" }}
                    bg="transparent"
                    h="100%"
                    alignItems="center"
                  >
                    <Input
                      h="100%"
                      border="solid 0px"
                      rounded="md"
                      _focusVisible={{ border: "solid 0px" }}
                      value={backAmount}
                      onChange={(e) => onChangeBackamount(e.target.value)}
                    />
                    <InputRightElement
                      w={{ base: "40px", lg: "60px" }}
                      h="55px"
                      pr={{ base: "15px", lg: "5px" }}
                      pointerEvents="none"
                    >
                      <Text>{token}</Text>
                    </InputRightElement>
                  </InputGroup>
                </InputTransition>

                <Text
                  align="center"
                  mb="42px"
                  onClick={() => setBackAmount(max.toString())}
                >
                  Max: {max}&nbsp;{token}
                </Text>
              </Stack>

              <Stack
                direction={{ base: "column", md: "column", lg: "column" }}
                spacing={2}
              >
                <Flex>
                  <Text>WFD tokens you will receive</Text>
                </Flex>
                <InputTransition
                  unitid="WFDamount"
                  selected={backAmount == "" ? false : true}
                  width="300px"
                  height="55px"
                  rounded="md"
                >
                  <InputGroup
                    size={{ base: "200px", lg: "sm" }}
                    bg="transparent"
                    h="100%"
                    alignItems="center"
                  >
                    <Input
                      h="100%"
                      pl="25px"
                      border="solid 0px"
                      _focusVisible={{ border: "solid 0px" }}
                      rounded="md"
                      value={wfdAmount}
                      readOnly
                      // onChange={(e) => { }}
                    />
                    <InputRightElement
                      w={{ base: "40px", lg: "60px" }}
                      h="55px"
                      pr={{ base: "15px", lg: "5px" }}
                      pointerEvents="none"
                    >
                      <Text>WFD</Text>
                    </InputRightElement>
                  </InputGroup>
                </InputTransition>
              </Stack>
            </Stack>
            <Flex w="100%" mt="60px" justify="center" mb="170px">
              <ImageTransition
                unitid="Invest2invest"
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
                <Box color="white">Invest</Box>
              </ImageTransition>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Footer />
    </PageLayout>
  );
}
