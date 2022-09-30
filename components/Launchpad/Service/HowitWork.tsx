import { Center, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function HowItWork() {
  return (
    <>
      <Flex direction="column" w="100%" align="center">
        <Text
          fontFamily="PilatExtended-Bold"
          fontWeight={400}
          fontSize={{ base: "24px", md: "32px" }}
          lineHeight={{ base: "36px", md: "48px" }}
          letterSpacing="-0.022em"
          color="white"
          textAlign="center"
        >
          HOW IT WORK
        </Text>
        <Text
          fontFamily="PilatExtended-Bold"
          fontWeight={900}
          fontSize={{ base: "30px", md: "40px" }}
          lineHeight={{ base: "45px", md: "60px" }}
          letterSpacing="-0.022em"
          color="#02A4FF"
          textAlign="center"
        >
          CROWDFUNDING LAUNCHPAD
        </Text>
      </Flex>
      <Center mt="20px" mb={{ base: "100px", md: "400px"}}>
        <Text
          fontWeight="400"
          fontSize={{ base: "15px", md: "20px" }}
          lineHeight={{ base: "21px", md: "28px" }}
          fontFamily="Montserrat"
          color="#ADB2DB"
          textAlign="center"
          w={{ base: "90%", md: "60%" }}
        >
          WeFund is a multichain incubation and crowdfunding platform that uses
          blockchain and smart contracts to make the process more transparent,
          hold project creators accountable, and minimize risk for project
          backers. WeFund is designed to be a platform for a large community of
          blockchain project investors and builders. WeFund primarily focuses on
          blockchain projects that have real-world applications and utility in
          the industries of healthcare, the environment, finance, education, and
          more.
        </Text>
      </Center>
    </>
  );
}
