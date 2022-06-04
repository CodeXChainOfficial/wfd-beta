/* eslint-disable prettier/prettier */
import React, { FunctionComponent } from "react";
import { ChakraProvider, Flex, Box, Text } from "@chakra-ui/react";
import theme from "../theme";

interface Props {
  title: string;
  subTitle1: string;
  subTitle2: string;
}
const PageLayout: FunctionComponent<Props> = (props) => {
  return (
    <Flex
      color={"white"}
      width={"100%"}
      fontSize={{ base: "14px", md: "15px", lg: "16px" }}
      justify={"center"}
      fontWeight={"500"}
      alignItems={"center"}
      flexDirection={"column"}
      fontFamily={"Sk-Modernist-Regular"}
      background={"linear-gradient(90deg, #1F0021 0%, #120054 104.34%)"}
    >
      <Flex
        mb={"30px"}
        width={"100%"}
        height={"250px"}
        justify={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        boxShadow={"0px 5px 15px #000000A6"}
        backgroundImage={"url('/media/createproject_banner.svg')"}
      >
        <Flex pt="95px" justify="center">
          <Text
            fontSize="16px"
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
      </Flex>

      <Flex direction='column' w="100%" justify="center" align="center" color='white'>
        {props.children}
      </Flex>
    </Flex>
  );
};

export default PageLayout;
