import React, { useMemo, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Text,
  HStack,
  chakra,
  Checkbox,
  Button,
} from "@chakra-ui/react";

import PageLayout from "../../components/PageLayout";
import SAFTTemplate from "../../components/Invest/SAFTTemplate";
import Footer from "../../components/Footer";

export default function InvestStep1() {
  const [condition, setCondition] = useState(false);
  const router = useRouter();

  const Document = useMemo(() => <SAFTTemplate />, []);

  function onNext() {
    console.log(condition);
    if (condition) router.push("/invest/step2");
  }
  return (
    <PageLayout
      title="Contribute"
      subTitle1=""
      subTitle2="Contribute"
      subTitle3="&nbsp;to WeFund"
    >
      <Flex
        width="100%"
        align="center"
        justify="center"
        py={"4em"}
        direction="column"
        backgroundSize={"contain"}
      >
        <Flex
          justify="center"
          align="center"
          direction="column"
          style={{ fontFamily: "PilatExtended-Regular" }}
        >
          <HStack mt="150px" mb="50px" w="400px" justifyContent={"center"}>
            <Flex direction={"column"} w="80px" align={"center"} gap={2}>
              <Box
                width={{ base: "18px", md: "20px" }}
                height={{ base: "18px", md: "20px" }}
                style={{
                  border: "3px solid #3BE489",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              />
              <Text fontSize={{ base: "12px", md: "14px" }}>Step 01</Text>
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
                  border: "3px solid rgba(255, 255, 255, 0.3799999952316284)",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              />
              <Text
                fontSize={{
                  base: "12px",
                  md: "14px",
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
            />
            <Flex direction={"column"} w="80px" align={"center"} gap={2}>
              <Box
                width={{ base: "18px", md: "20px" }}
                height={{ base: "18px", md: "20px" }}
                style={{
                  border: "3px solid rgba(255, 255, 255, 0.3799999952316284)",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              />
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
          <Flex align="center" direction="column">
            <Text
              fontSize="22px"
              fontWeight={"300"}
              fontFamily="PilatExtended-Bold"
            >
              <chakra.span color={"#00C1FF"}>SAFT</chakra.span> Form
            </Text>
            <Text
              fontSize="16px"
              color="#FFFFFF"
              fontWeight={"normal"}
              mt={"20px"}
              textAlign={"center"}
            >
              Please check and confirm the form and go next step
            </Text>
          </Flex>
          <Flex mt="83px" justify="center" align="center" direction="column">
            <Flex mt="25px" direction="row">
              <Checkbox
                colorScheme="pink"
                onChange={(e) => setCondition(e.target.checked)}
              />
              <Text ml="10px" fontSize="14px" fontWeight="400">
                I agree with all conditions of this Project and WeFund
              </Text>
            </Flex>
            <Flex w="100%" mt="60px" justify="center" mb="170px">
              <Button colorScheme="pink" w="200px" onClick={() => onNext()}>
                Next
              </Button>
            </Flex>
            <Flex>{Document}</Flex>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </PageLayout>
  );
}
