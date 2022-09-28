/* eslint-disable prettier/prettier */
import React, { FunctionComponent } from "react";
import { ChakraProvider, Flex, Box, Text } from "@chakra-ui/react";
import theme from "../theme";

interface Props {
  title: string;
  subTitle1: string;
  subTitle2: string;
  subTitle3?: string;
}
const PageLayout: FunctionComponent<Props> = (props) => {
  return (
    <Flex
      color={"white"}
      width={"100%"}
      pt={"120px"}
          direction="column"
          style={{ fontFamily: "PilatExtended-Bold" }}
          align="center"
    >
      {/* <Flex
          px={{ base: "40px", md: "80px", lg: "120px" }} align="center">
            <Text
              fontSize={{ base: "10px", sm: "12px", md: "16px", lg: "16px" }}
              fontWeight="normal"
              color={"rgba(255, 255, 255, 0.54)"}
            >
              Home &gt;&nbsp;
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "12px", md: "16px", lg: "16px" }}
              fontWeight="normal"
              color={"rgba(255, 255, 255, 0.54)"}
            >
              {props.subTitle1} &gt;&nbsp;
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "12px", md: "16px", lg: "16px" }}
              color={"rgba(255, 255, 255, 0.84)"}
            >
              {props.title}
            </Text>
          </Flex> */}
          <Flex
          px={{ base: "40px", md: "80px", lg: "120px" }}>
            <Text
              fontSize={{ base: "12px", sm: "16px", md: "25px", lg: "36px" }}
              color="#00A3FF"
              fontWeight={"900"}
            >
              {props.subTitle2}
            </Text>
            <Text
              as={"span"}
              fontSize={{ base: "12px", sm: "16px", md: "25px", lg: "36px" }}
              fontWeight={"900"}
            >
              {props.subTitle3}
            </Text>
          </Flex>
      {/* <Flex
        mb={"30px"}
        width={"100%"}
      >
        <Flex pt="95px" justify="center">
          <Text
              fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "16px" }}
              fontWeight="normal"
              color={"rgba(255, 255, 255, 0.54)"}
          >
            Home &gt;&nbsp;
          </Text>
          <Text fontSize="16px" color={"rgba(255, 255, 255, 0.84)"}>
            {props.title}
          </Text>
        </Flex>
        <Flex
          mt="11px"
          pb="55px"
          mb="20px"
          justify="center"
          style={{ fontFamily: "PilatExtended-Bold" }}
        >
          <Text
            fontSize={{ base: "20px", md: "25px", lg: "40px" }}
            color="#4790f5"
          >
            {props.subTitle1}
          </Text>
          <Text fontSize={{ base: "20px", md: "25px", lg: "40px" }}>
            &nbsp;{props.subTitle2}
          </Text>
        </Flex>
      </Flex> */}

      <Flex direction='column' w="100%" justify="center" align="center" color='white'>
        {props.children}
      </Flex>

    </Flex>
  );
};

export default PageLayout;
