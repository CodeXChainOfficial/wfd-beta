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
      height={{ base: "30em", md: "40vh", lg: "90vh" }}
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
            letterSpacing="-0.022em"
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
          >
            
            

            
          </Text>
          <Text
            fontFamily="PilatExtended-Regular"
            fontWeight="900"
            fontSize={{ base: "16px", md: "36px" }}
            lineHeight="54px"
            letterSpacing="-0.022em"
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
          >
            Multichain{" "}
            <chakra.span fontFamily="PilatExtended-Bold" color={"#0FB1F5"}>
              crowdfunding, incubation, 
            </chakra.span>
            
          </Text>
          <Text
            fontFamily="PilatExtended-Regular"
            fontWeight="900"
            fontSize={{ base: "16px", md: "36px" }}
            lineHeight="54px"
            letterSpacing="-0.022em"
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
          >
            and{" "}
            <chakra.span fontFamily="PilatExtended-Bold" color={"#0FB1F5"}>
              launchpad 
            </chakra.span> for real-world 
          </Text>

          <Text
            fontFamily="PilatExtended-Regular"
            fontWeight="900"
            fontSize={{ base: "16px", md: "36px" }}
            lineHeight="54px"
            letterSpacing="-0.022em"
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
          >
            applications
          </Text>

          <Text
            fontFamily="PilatExtended-Regular"
            fontWeight="900"
            fontSize={{ base: "16px", md: "36px" }}
            lineHeight="54px"
            letterSpacing="-0.022em"
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
          >
            
            
            
            
          </Text>
        </Stack>
        <HStack w="100%" justify={"center"} mt="96px" spacing="64px">
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
            onClick={() => state.openWalletModal && state.openWalletModal()}
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
      <Flex
        position="absolute"
        top="56"
        pl="64px"
        pr="64px"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
      >
        <Image objectFit="contain" src="/media/Home/Coin_A.png" />
        <Image objectFit="contain" src="/media/Home/Coin_B.png" />
      </Flex>
    </Flex>
  );
}
