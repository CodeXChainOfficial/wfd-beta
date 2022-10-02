import {
  Box,
  Center,
  chakra,
  Container,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function HowItWork() {
  return (
    <>
      <Center>
        <Text
          fontWeight="1000"
          fontSize="32px"
          lineHeight="30px"
          letterSpacing="-1.2%"
          fontFamily="PilatExtended-Bold"
          color="#ADB2DB"
          textAlign="center"
        >
          HOW IT WORK <br /> <br />
          <chakra.span fontSize="40px" color={"#02A4FF"}>
            CROWDFUNDING LAUNCHPAD
            <br />
            <br />
          </chakra.span>
        </Text>
      </Center>
      <Center
        marginTop={"10px"}
        marginBottom={{ base: "20px", md: "100px", lg: "100px" }}
      >
        <Text
          fontWeight="400"
          fontSize="20px"
          lineHeight="24px"
          letterSpacing="0"
          fontFamily="Montserrat"
          color="#ADB2DB"
          textAlign="center"
          w="70%"
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
