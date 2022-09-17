import React from "react";
import {
  Box,
  Flex,
  Image,
  Container,
  Center,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import SwapCard, { SwapType } from "../components/Swap/SwapCard";
import { ButtonTransition } from "../components/ImageTransition";
import Footer from "../components/Footer";
import Hero from "../components/Swap/Hero";
import InfoCard from "../components/Swap/InfoCard";
import { IoWalletOutline } from "react-icons/io5";

export default function RouterSwap() {
  return (
    <>
      <Hero />
      <Box
        border="3px solid rgba(15, 177, 245, 0.28)"
        borderRadius="15px"
        m="128px"
        pb="128px"
      >
        <Flex ml="19px" pt="32px" pb="32px" width="460px" justifyContent="space-between">
          <Box justifyContent={"center"} rounded={"md"}>
            <Center w={"50px"} h={"50px"}>
              <IoWalletOutline size={30} />
            </Center>
          </Box>
          <Flex color={"white"}>
            <Stack spacing={2} pl={3} align="left">
              <Heading align="left" fontSize="xl">
                [UserName]
              </Heading>
              <Text align="left" fontSize="sm" color={"#69E4FF"}>
                ....
              </Text>
            </Stack>
          </Flex>
          <Stack display={["none", "none", "flex", "flex"]}>
            <Text fontSize={14} color="gray.400">
              WeFund Wallet
            </Text>
          </Stack>
        </Flex>
        <Flex
          borderRadius="10px"
          direction={{ base: "column", lg: "row" }}
          p={{ base: "16px", md: "32px" }}
          ml="32px"
          mr="32px"
          justify="center"
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
        <Flex justify="center">
          <ButtonTransition
            unitid="swap"
            selected={false}
            width="200px"
            height="50px"
            rounded="15px"
            mt="50px"
            mb="50px"
          >
            Swap
          </ButtonTransition>
        </Flex>
        <Container h="32px" />
        <Flex ml="32px" mr="32px">
          <InfoCard />
        </Flex>
      </Box>
      <Image
        width="100%"
        objectFit="contain"
        src="/media/background_non_streak.svg"
      />
      <Footer />
    </>
  );
}
