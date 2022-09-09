import { Box, Center, chakra, Container, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";

export default function AboutWeFund() {
  return (
    <>
      <Center marginTop={"48px"}>
        <Text
          color="#63CDFA"
          fontFamily="PilatExtended-Bold"
          fontSize={{ base: "18px", md: "25px", lg: "30px" }}
        >
          WHAT&apos;S <chakra.span color={"white"}>WEFUND?</chakra.span>
        </Text>
      </Center>
      <Center marginTop={"16px"}>
        <Text width="80%" textAlign="center">
          WeFund is a multichain incubation and crowdfunding platform that uses blockchain and smart contracts to make the process more transparent, hold project creators accountable, and minimize risk for project backers. WeFund is designed to be a platform for a large community of blockchain project investors and builders. WeFund primarily focuses on blockchain projects that have real-world applications and utility in the industries of healthcare, the environment, finance, education, and more.
        </Text>
      </Center>
    </>
  );
}
