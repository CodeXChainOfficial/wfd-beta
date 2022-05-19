import React, { useState } from "react";

import {
  Container,
  Flex,
  Text,
  Image,
  Stack,
  useBreakpointValue,
  chakra,
  Box,
} from "@chakra-ui/react";

const newLocal = "column";
const AboutMobile = () => (
  <Flex
    display={{ base: "flex", lg: "none" }}
    alignItems="center"
    justifyContent="center"
    my={{ base: "5em" }}
    width={{ base: "98%" }}
    flexDirection={{ base: newLocal }}
    paddingLeft={{ base: "0" }}
    paddingRight={{ base: "0" }}
  >
    <Image
      zIndex="3"
      objectFit="contain"
      position="relative"
      src="/media/Home/3.svg"
      mr={{ base: "0" }}
      mb={{ base: "-5em" }}
      width={{ base: "12em" }}
    />
    <Flex
      flexDirection="column"
      bgGradient="Linear(#340B6E, transparent)"
      p={{ base: "1em" }}
      pl={{ base: "1em" }}
      pt={{ base: "7em" }}
      width={{ base: "95%" }}
      borderRadius={{ base: "10px" }}
    >
      <Text
        color="#63CDFA"
        fontWeight="bold"
        fontFamily="PilatExtended-Bold"
        mb={{ base: ".5em" }}
        fontSize={{ base: "16px" }}
      >
        ABOUT WeFund
      </Text>
      <Text
        display="inline"
        fontSize={{ base: "16px" }}
        fontFamily="Sk-Modernist-Regular"
      >
        <b>WeFund</b> is a crowdfunding incubator and launchpad for blockchain
        and real-world projects built on various blockchains.
        <br />
        <br />
        The mission is to incubate and deliver real world impact projects using
        blockchain technology
        <br />
        <br /> To increase transparency, minimize risk, and hold projects
        accountable for the funds raised, WeFund has a unique milestone system.
      </Text>
    </Flex>
  </Flex>
);

const AboutDesktop = () => (
  <Container minW={"container.xl"} display={{ base: "none", lg: "block" }}>
    <Stack
      alignItems="center"
      justifyContent="center"
      direction={"column"}
      my={{ base: "4em", md: "5em" }}
      width={{ base: "100%" }}
      px={{ base: "0", md: "10px" }}
    >
      <Text
        color="#63CDFA"
        fontWeight="bold"
        fontFamily="PilatExtended-Bold"
        mb={{ base: ".5em", md: ".5em", lg: ".5em" }}
        fontSize={{ base: "16px", md: "28px", lg: "32px" }}
      >
        ABOUT <chakra.span color="#FCFCFC">WeFund</chakra.span>
      </Text>
      <Flex direction={"row"}>
        <Box marginX={"80px"}>
          <Image
            zIndex="3"
            objectFit="contain"
            src="/media/Home/wfd-logo-projection.png"
          />
        </Box>

        <Stack
          flex={1}
          flexDirection="column"
          width={{ base: "95%", md: "85%", lg: "70%" }}
          spacing={"3em"}
        >
          <Flex
            direction={"row"}
            bgGradient="linear-gradient(90deg, #5201C5 0%, rgba(52, 11, 110, 0) 100%)"
            borderRadius={{ base: "10px", md: "15px", lg: "15px" }}
            p={"32px"}
          >
            <Image objectFit="contain" src="/media/Home/about-icon-2.png" />
            <Text
              flex={1}
              display="inline"
              fontSize={{ base: "16px", md: "20px", lg: "20px" }}
              fontFamily="Sk-Modernist-Regular"
              marginLeft={"32px"}
            >
              <chakra.span color={"brand"}>
                <b>WeFund</b> is a crowdfunding incubator and launchpad
              </chakra.span>{" "}
              for blockchain and real-world projects built on various
              blockchains. The mission is to incubate and deliver real world
              impact projects using blockchain technology
            </Text>
          </Flex>
          <Flex
            direction={"row"}
            bgGradient="linear-gradient(90deg, #5201C5 0%, rgba(52, 11, 110, 0) 100%)"
            borderRadius={{ base: "10px", md: "15px", lg: "15px" }}
            p={"32px"}
          >
            <Image objectFit="contain" src="/media/Home/about-icon-1.png" />
            <Text
              flex={1}
              display="inline"
              fontSize={{ base: "16px", md: "20px", lg: "20px" }}
              fontFamily="Sk-Modernist-Regular"
              marginLeft={"32px"}
            >
              To increase transparency, minimize risk, and hold projects
              accountable for the funds raised,
              <chakra.span color={"brand"}>
                WeFund has a milestone system.
              </chakra.span>
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  </Container>
);

export default function Aboutone() {
  return (
    <Flex
      width="100%"
      position="relative"
      alignItems="center"
      flexDirection="column"
      pb={{ base: "5em", md: "5em", lg: "10em" }}
      paddingLeft={"35px"}
      paddingRight={"35px"}
    >
      <AboutMobile />
      <AboutDesktop />
    </Flex>
  );
}
