import { Center, chakra, Text } from "@chakra-ui/react";
import React from "react";

export default function AboutWeFund() {
  return (
    <>
      <Center marginTop={"48px"}>
        <Text color="white" fontFamily="PilatExtended-Bold" fontSize={{base:"16", md:"24",lg:"42"}}>
          WHAT&apos;S{" "}
          <chakra.span color="#02A4FF" fontFamily="PilatExtended-Bold">
            WEFUND?
          </chakra.span>
        </Text>
      </Center>
      <Center my={"16px"}>
        <Text width="80%" textAlign="center" color="#ADB2DB" fontSize={{base:"14", md:"16",lg:"18"}}>
          WeFund is a multichain infrastructure and incubation crowdfunding launchpad that uses
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
