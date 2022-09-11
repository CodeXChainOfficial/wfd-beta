import { Box, Center, chakra, Container, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";

export default function HowItWork() {
  return (
    <>
      <Center>
        <Text
          color="white"
          fontFamily="PilatExtended-Bold"
          fontSize={{ base: "16px", md: "18px", lg: "24px" }}
          textAlign={"center"}
        >
          HOW IT WORK <br />
          <chakra.span
            color={"#02A4FF"}
            fontSize={{ base: "18px", md: "24px", lg: "32px" }}
          >
            CROWDFUNDING LAUNCHPAD
          </chakra.span>
        </Text>
      </Center>
      <Center marginTop={"16px"} marginBottom={{ base: "50px", md: "200px", lg: "250px" }}>
        <Text width="70%" textAlign="center" color= "#ADB2DB">
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
