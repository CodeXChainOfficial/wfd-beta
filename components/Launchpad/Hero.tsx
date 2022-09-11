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
import { ImageTransition } from "../ImageTransition";
import { useStore } from "../../contexts/store";

export default function Hero() {
  const router = useRouter();
  const { state, dispatch } = useStore();
  return (
    <Flex
      width="100%"
      id="heroComponent"
      textAlign="center"
      position="relative"
      alignItems="center"
      flexDirection="column"
      height={{ base: "30em", md: "90vh", lg: "90vh" }}
    >
      <Container
        position={"relative"}
        mt={{ base: "10vh", md: "14vh", lg: "20vh" }}
        zIndex={"3"}
        maxW="container.2xl"
      >
        <Stack>
          <Text
            fontFamily="PilatExtended-Regular"
            fontWeight="900"
            fontSize={{ base: "16px", md: "36px" }}
            lineHeight="54px"
            letterSpacing={{ base: "0.1em" }}
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
          >
            Multichain <chakra.span fontFamily="PilatExtended-Bold"  color={"#0FB1F5"}>crowdfunding, incubation</chakra.span>, and <chakra.span fontFamily="PilatExtended-Bold" color={"#0FB1F5"}>launchpad</chakra.span>
          </Text>
          <Text
            fontFamily="PilatExtended-Regular"
            fontWeight="900"
            fontSize={{ base: "16px", md: "36px" }}
            lineHeight="54px"
            letterSpacing={{ base: "0.1em" }}
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
          >
            for real-world applications
          </Text>
        </Stack>
        <HStack w="100%" justify={"center"} mt="72px" spacing="21px">
          <Box
            backgroundColor="#006699"
            width={{ base: "148px", md: "148px", lg: "242px" }}
            height={{ base: "32px", md: "34px", lg: "35px" }}
            rounded={"33px"}
            p="8px"
            onClick={() => router.push("/invest/step0")}
          >
            <Text
              w="100%"
              fontSize={{ base: "14px", sm: "15px", md: "15px", lg: "15px" }}
              fontFamily={"Gilroy"}
              fontWeight={"800"}
              color="#FFFFFF"
            >
              GET WFD
            </Text>
          </Box>
          <Box
            backgroundColor="#18075B"
            backdropFilter="blur(54px)"
            width={{ base: "148px", md: "148px", lg: "242px" }}
            height={{ base: "34px", md: "34px", lg: "35px" }}
            p="8px"
            rounded={"33px"}
            onClick={() => state.openWalletModal()}
          >
            <Text
              w="100%"
              fontSize={{ base: "14px", sm: "15px", md: "15px", lg: "15px" }}
              fontFamily={"Gilroy"}
              fontWeight={"800"}
              color="#FFFFFF"
            >
              CONNECT WALLET
            </Text>
          </Box>
        </HStack>
      </Container>
      <Image
        bottom="0"
        width="100%"
        objectFit="contain"
        position="absolute"
        src="/media/Home/bg_coin.svg"
      />
    </Flex>
  );
}
