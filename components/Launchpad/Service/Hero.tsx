/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { useRouter } from "next/router";
import {
  Image,
  Flex,
  Text,
  Stack,
  Container,
  Button,
  chakra,
} from "@chakra-ui/react";
import { FaArrowRight, FaTwitter } from "react-icons/fa";

export default function Hero() {
  const router = useRouter();

  return (
    <Flex
      width="100%"
      id="heroComponent"
      textAlign="center"
      position="relative"
      alignItems="center"
      flexDirection="column"
      height="95vh"
    >
      <Container
        position={"relative"}
        mt={{ base: "10vh", md: "12vh", lg: "15vh" }}
        zIndex={"3"}
        maxW="container.lg"
      >
        <Stack>
          <Text
            fontFamily="PilatExtended-Bold"
            fontWeight="700"
            fontSize={{ base: "36px", md: "48px" }}
            lineHeight={{ base: "40px", md: "90px" }}
            letterSpacing="-0.022em"
            color={"rgba(15, 177, 245, 1)"}
          >
            <br />
            <br />
            WeFund <chakra.span color={"white"}>as</chakra.span> Multiservice
            Launchpad
            <br />
            <br />
          </Text>
          <Text
            fontWeight="500"
            fontSize={{ base: "21px", md: "28px" }}
            lineHeight={{ base: "30px", md: "42px" }}
            letterSpacing="-0.022em"
            fontFamily="Calibri"
            color="#ADB2DB"
            textAlign="center"
          >
            Multi-Service Launchpad, Your Success is Our Success <br />
            Crowdfunding: Token (Seed, and IDO), Equity, NFT
          </Text>
        </Stack>
        <Flex w="100%" justify={"center"} mt="72px">
          <Button
            variant="outline"
            colorScheme="blue"
            width={{ base: "300px", md: "402px" }}
            height={{ base: "32px", md: "40px" }}
            rounded={"33px"}
            onClick={() => router.push("/apply")}
            _hover={{}}
          >
            <Text
              w="100%"
              fontSize={{ base: "12px", md: "15px" }}
              fontFamily={"PilatExtended-Bold"}
              fontWeight={"800"}
              color="WHITE"
            >
              Apply to be Project on{" "}
              <chakra.span  color={"rgba(15, 177, 245, 1)"}>WeFund</chakra.span>
            </Text>
            <FaArrowRight size="14px" color="white" />
          </Button>
        </Flex>
      </Container>
      <Image
        bottom="0"
        width="110%"
        objectFit="contain"
        position="absolute"
        src="/media/Home/bg_coin.svg"
      />
    </Flex>
  );
}
