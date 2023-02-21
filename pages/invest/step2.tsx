import {
  Box,
  Flex,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Text,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

import { useRouter } from "next/router";
import OtherChainWallet from "../../components/Invest/OtherChainWallet";
import Footer from "../../components/Footer";
import PageLayout from "../../components/PageLayout";

export default function InvestStep2() {
  const [chain, setChain] = useState("BSC");
  const [token, setToken] = useState("");
  const [backAmount, setBackAmount] = useState("");
  const [wfdAmount, setWfdamount] = useState(0.0);
  const router = useRouter();

  function onChangeBackamount(val: string) {
    const amount = parseFloat(val);
    const wefundRate = 0.06;
    setWfdamount(amount / wefundRate);
    setBackAmount(val);
  }

  function onNext() {
    window.localStorage.setItem("invest_chain", chain);
    window.localStorage.setItem("invest_token", token);
    window.localStorage.setItem("invest_amount", backAmount);
    window.localStorage.setItem("invest_wfdamount", wfdAmount.toString());

    router.push("/invest/step3");
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
              width={{ base: "18px", md: "20px" }}
              height={{ base: "18px", md: "20px" }}
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
          px={1}
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
              Input your{" "}
              <span style={{ color: "#00A3FF" }}>Investment Amount</span>
            </Text>
            <Text
              fontSize={{ base: "12px", md: "12px", lg: "16x" }}
              maxW={"390px"}
              color="#FFFFF"
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
            mt="60px"
            justify="center"
            align={{ base: "center", lg: "baseline" }}
            spacing={8}
          >
            <Stack
              direction={{ base: "column", md: "column", lg: "column" }}
              spacing={2}
              padding={4}
              width={"300px"}
              backgroundColor={"rgba(0, 0, 0, 0.58)"}
            >
              <Flex direction="column" align={"center"} gap={4}>
                <Image src="/media/Home/tokentoinvest.svg"></Image>
                <Text>Token amount you want to invest</Text>
              </Flex>
              <InputGroup
                size={{ base: "200px", lg: "sm" }}
                alignItems="center"
                h="45px"
                style={{
                  border: "1.5px solid rgba(255, 255, 255, 0.2)",
                  background: "rgba(255, 255, 255, 0.05)",
                }}
                rounded="md"
              >
                <Input
                  style={{ border: "0", background: "transparent" }}
                  h="55px"
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
                  <Text mt={"-10px"}>{token}</Text>
                </InputRightElement>
              </InputGroup>
            </Stack>

            <Stack
              direction={{ base: "column", md: "column", lg: "column" }}
              spacing={2}
              padding={4}
              width={"300px"}
              backgroundColor={"rgba(0, 0, 0, 0.58)"}
            >
              <Flex direction="column" align={"center"} gap={4}>
                <Image src="/media/Home/wfdtoreceive.svg"></Image>
                <Text>WFD tokens you will receive</Text>
              </Flex>
              <InputGroup
                size={{ base: "200px", lg: "sm" }}
                bg="transparent"
                h="45px"
                alignItems="center"
                style={{
                  border: "1.5px solid rgba(255, 255, 255, 0.2)",
                  background: "rgba(255, 255, 255, 0.05)",
                }}
                rounded="md"
              >
                <Input
                  h="100%"
                  pl="25px"
                  style={{ border: "0", background: "transparent" }}
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
                  <Text mt={"-10px"}>WFD</Text>
                </InputRightElement>
              </InputGroup>
            </Stack>
          </Stack>
          <Flex w="100%" mt="60px" justify="center" mb="80px">
            <Button colorScheme="pink" w="200px" onClick={() => onNext()}>
              Next
            </Button>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </PageLayout>
  );
}
