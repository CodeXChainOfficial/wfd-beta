import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { IoCheckmark } from "react-icons/io5";
import { Box, Flex, Text, HStack } from "@chakra-ui/react";

import {
  ImageTransition,
  InputTransition,
} from "../../components/ImageTransition";
import { useStore } from "../../contexts/store";
import PageLayout from "../../components/PageLayout";
import SAFTTemplate from "../../components/Invest/SAFTTemplate";
import { ParseParam } from "../../utils/Util";

export default function InvestStep1() {
  const { state, dispatch } = useStore();
  const [condition, setCondition] = useState(false);
  const router = useRouter();

  const projectId = ParseParam();

  function onNext() {
    if (condition)
      router.push({
        pathname: "/invest/step2",
        query: {
          project_id: projectId,
        },
      });
  }
  return (
    <PageLayout
      title="Back the Project"
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
                height: "24px",
                border: "3px solid #3BE489",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></Box>
            <Text
              fontSize={{ base: "12px", sm: "16px", md: "22px", lg: "22px" }}
            >
              Step 1
            </Text>
            <Box
              style={{
                height: "0x",
                width: "30%",
                border: "2px solid rgba(255, 255, 255, 0.3799999952316284)",
                background: " rgba(255, 255, 255, 0.3799999952316284)",
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
          <Text fontSize="22px" fontWeight={"300"}>
            SAFT Form
          </Text>
          <Text
            fontSize="16px"
            color="rgba(255, 255, 255, 0.54)"
            fontWeight={"normal"}
            mt={"20px"}
            textAlign={"center"}
          >
            Please check and confirm the form and go next step
          </Text>
        </Flex>
        <Flex mt="83px" justify="center" align="center" direction="column">
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
            <Text ml="10px" fontSize="14px" fontWeight="400">
              I agree with all conditions of this Project and WeFund
            </Text>
          </Flex>
          <Flex w="100%" mt="60px" justify="center" mb="170px">
            <ImageTransition
              unitid="investnext"
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
              <Box color="white">Next</Box>
            </ImageTransition>
          </Flex>
          <Flex>
            <SAFTTemplate presale={state.presale} project_id={projectId} />
          </Flex>
        </Flex>
      </Box>
    </PageLayout>
  );
}
