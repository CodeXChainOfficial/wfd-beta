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
      bgGradient="Linear(#2a0a31,#4d188f,#058cd8)"
      height={{ base: "30em", md: "90vh", lg: "90vh" }}
    >
      <Image
        top="1em"
        width="100%"
        position="absolute"
        objectFit="contain"
        src="/media/Home/2.png"
      />
      <Container
        position={"relative"}
        mt={{ base: "10vh", md: "14vh", lg: "20vh" }}
        zIndex={"3"}
        maxW="container.lg"
      >
        <Stack>
          <Text
            fontFamily="PilatExtended-Bold"
            fontSize={{ base: "16px", md: "48px" }}
            lineHeight={{ base: "30px", md: "1em", lg: "1.1em" }}
            letterSpacing={{ base: "0.1em" }}
            textTransform={"uppercase"}
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
          >
            MULTICHAIN COMMUNITY
          </Text>
          <Text
            fontFamily="PilatExtended-Black"
            fontSize={{ base: "20px", md: "48px" }}
            lineHeight={{ base: "30px", md: "1em", lg: "1.1em" }}
            letterSpacing={{ base: "0.1em" }}
            textTransform={"uppercase"}
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
            color={"brand"}
          >
            CROWDFUNDING
          </Text>
          <Text
            fontFamily="PilatExtended-Black"
            fontSize={{ base: "20px", md: "48px" }}
            lineHeight={{ base: "30px", md: "1em", lg: "1.1em" }}
            letterSpacing={{ base: "0.1em" }}
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
            textTransform={"uppercase"}
          >
            INCUBATOR
          </Text>
        </Stack>
        <HStack w="100%" justify={"center"} mt="72px" spacing="21px">
          <ImageTransition
            unitid={"buywfd"}
            border1="linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 100%)"
            background1="linear-gradient(180deg, #000B47 0%, #350277 100%)"
            border2="linear-gradient(180deg, #EBF1FF 0%, #014063 100%)"
            background2="linear-gradient(180deg, #21C9FF 0%, #1383D5 100%)"
            border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
            selected={false}
            width={{ base: "148px", md: "148px", lg: "242px" }}
            height={{ base: "32px", md: "34px", lg: "35px" }}
            rounded={"33px"}
            onClick={() => router.push("/invest/step0")}
          >
            <Text
              w="100%"
              fontSize={{ base: "14px", sm: "15px", md: "15px", lg: "15px" }}
              fontFamily={"Gilroy"}
              fontWeight={"800"}
              color="#002E87"
              _hover={{ color: "#FFFFFF" }}
              transition={"all 1s"}
            >
              BUY $WFD
            </Text>
          </ImageTransition>
          <ImageTransition
            unitid={"connectwallet"}
            border1="linear-gradient(180deg, #EBF1FF 0%, #014063 100%)"
            background1="linear-gradient(180deg, #21C9FF 0%, #1383D5 100%)"
            border2="linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 100%)"
            background2="linear-gradient(180deg, #000B47 0%, #350277 100%)"
            border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
            selected={false}
            width={{ base: "148px", md: "148px", lg: "242px" }}
            height={{ base: "34px", md: "34px", lg: "35px" }}
            rounded={"33px"}
            onClick={() => state.openWalletModal()}
          >
            <Text
              w="100%"
              fontSize={{ base: "14px", sm: "15px", md: "15px", lg: "15px" }}
              fontFamily={"Gilroy"}
              fontWeight={"800"}
              color="#FFFFFF"
              _hover={{ color: "#002E87" }}
              transition={"all 1s"}
            >
              CONNECT WALLET
            </Text>
          </ImageTransition>
        </HStack>
      </Container>
      <Image
        bottom={"0"}
        width="100%"
        position="absolute"
        objectFit="contain"
        src="/media/Home/1.svg"
      />
      <Box
        position={"absolute"}
        bottom={"0"}
        width={"100%"}
        height={"121px"}
        background={
          "linear-gradient(180deg, rgba(30, 0, 39, 0) 0%, #1E0027 60.72%)"
        }
      />
    </Flex>
  );
}
