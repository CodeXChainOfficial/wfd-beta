import React from "react";
import { Box, Flex, Image, Container } from "@chakra-ui/react";
import SwapCard, { SwapType } from "../components/Swap/SwapCard";
import { ButtonTransition } from "../components/ImageTransition";
import Footer from "../components/Footer";
import InfoCard from "../components/Swap/InfoCard";

export default function RouterSwap() {
  return (
    <>
      <Flex
        h="100px"
        width="100%"
        justify="center"
        backgroundImage="url('/media/Home/2.png')"
      />
      <Box backgroundImage="url('/media/Home/2.png')">
        <Flex
          borderRadius="10px"
          direction={{ base: "column", lg: "row" }}
          p={{ base: "16px", md: "32px" }}
          ml="64px"
          mr="64px"
          justify="center"
          bgGradient="linear(#210B3C, #070334)"
        >
          <SwapCard type={SwapType.from} />
          <Flex
            minW="110px"
            justify="center"
            visibility={{ base: "collapse", lg: "visible" }}
          >
            <Image pt={40} pl="16px" pr="16px" src={"/media/swap.svg"} />
          </Flex>
          <Flex
            minW="45px"
            flex="1"
            justify="center"
            visibility={{ base: "visible", lg: "collapse" }}
          >
            <Image pt={12} pb={12} w="45px" src={"/media/swap_vert.svg"} />
          </Flex>
          <SwapCard type={SwapType.to} />
        </Flex>
      </Box>
      <Flex justify="center" backgroundImage="url('/media/Home/2.png')">
        <ButtonTransition
          unitid="swap"
          selected={false}
          width="200px"
          height="50px"
          rounded="15px"
          mt="50px"
        >
          Swap
        </ButtonTransition>
      </Flex>
      <Container h="32px" />
      <Flex ml={24} mr={24}>
        <InfoCard />
      </Flex>
      <Image width="100%" objectFit="contain" src="/media/Home/1.svg" />
      <Footer />
    </>
  );
}
