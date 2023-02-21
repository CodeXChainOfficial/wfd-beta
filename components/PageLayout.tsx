import React, { FunctionComponent } from "react";
import { Flex, Text } from "@chakra-ui/react";

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
      style={{ fontFamily: "Sans-Serif" }}
      align="center"
    >
      <Flex px={{ base: "40px", md: "80px", lg: "120px" }}>
        <Text
          as={"span"}
          fontFamily="Sans-Serif"
          fontSize={{ base: "12px", sm: "16px", md: "25px", lg: "36px" }}
          fontWeight={"900"}
        >
          {props.subTitle1}&nbsp;
        </Text>
        <Text
          fontFamily="Sans-Serif"
          fontSize={{ base: "12px", sm: "16px", md: "25px", lg: "36px" }}
          color="#00A3FF"
          fontWeight={"900"}
        >
          {props.subTitle2}
        </Text>
        <Text
          as={"span"}
          fontFamily="Sans-Serif"
          fontSize={{ base: "12px", sm: "16px", md: "25px", lg: "36px" }}
          fontWeight={"900"}
        >
          {props.subTitle3}
        </Text>
      </Flex>
      <Flex
        direction="column"
        w="100%"
        justify="center"
        align="center"
        color="white"
      >
        {props.children}
      </Flex>
    </Flex>
  );
};

export default PageLayout;
