/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { useRouter } from "next/router";
import {
  HStack,
  Image,
  Flex,
  Text,
  Stack,
  Container,
  Box,
  chakra,
} from "@chakra-ui/react";
import { useStore } from "../../contexts/store";

export default function Hero() {
  const router = useRouter();
  const { state } = useStore();
  return (
    <Flex
      width="100%"
      id="heroComponent"
      textAlign="center"
      position="relative"
      alignItems="center"
      flexDirection="column"
      background="#000118"
      h="60vh"
      mb="8em"
    >
      <Flex
        position={"relative"}
        mt={{ base: "140px", md: "200px" }}
        zIndex={"3"}
        maxW="container.2xl"
        align="center"
        direction="column"
      >
        <Stack width={{ base: "90%", md: "850px" }}>
          <Text
            fontFamily="PilatExtended-Regular"
            fontWeight="900"
            fontSize={{ base: "20px", md: "36px" }}
            lineHeight={{ base: "30px", md: "54px" }}
            letterSpacing="-0.022em"
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
          >
            Multichain{" "}
            <chakra.span fontFamily="PilatExtended-Bold" color={"#0FB1F5"}>
              crowdfunding, incubation,
            </chakra.span>{" "}
            and{" "}
            <chakra.span fontFamily="PilatExtended-Bold" color={"#0FB1F5"}>
              launchpad
            </chakra.span>{" "}
            for real-world applications
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          w="100%"
          justify="center"
          align="center"
          mt="86px"
          spacing={{ base: "30px", md: "90px" }}
        >
          <Flex
            backgroundColor="#006699"
            width={{ base: "198px", md: "248px" }}
            height={{ base: "50px", md: "46px" }}
            rounded={"33px"}
            align="center"
            cursor="pointer"
            _hover={{ background: "#2288bb" }}
            onClick={() => router.push("/invest/step0")}
          >
            <Text
              w="100%"
              fontSize="16px"
              fontFamily="Calibri"
              fontWeight="500"
              color="white"
            >
              GET WFD
            </Text>
          </Flex>
          <Flex
            backgroundColor="#18075B"
            backdropFilter="blur(54px)"
            width={{ base: "198px", md: "248px" }}
            height={{ base: "50px", md: "46px" }}
            rounded="33px"
            align="center"
            cursor="pointer"
            _hover={{ background: "#3A297D" }}
            onClick={() => state.openWalletModal && state.openWalletModal()}
          >
            <Text
              w="100%"
              fontSize="16px"
              fontFamily="Calibri"
              fontWeight="500"
              color="white"
            >
              CONNECT WALLET
            </Text>
          </Flex>
        </Stack>
      </Flex>
      <Flex
        position="absolute"
        top="40"
        pl="64px"
        pr="64px"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
      >
        <Image objectFit="contain" src="/media/Home/Coin_A.png" />
        <Image
          objectFit="contain"
          src="/media/Home/Coin_B.png"
          display={{ base: "none", md: "block" }}
        />
      </Flex>
    </Flex>
  );
}
