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
  IconButton,
} from "@chakra-ui/react";
import { ImageTransition } from "../../ImageTransition";
import { useStore } from "../../../contexts/store";
import { FaArrowRight, FaTwitter } from "react-icons/fa";

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
      height={{ base: "25em", md: "55vh", lg: "95vh" }}
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
            fontSize={{ base: "60px", md: "36px" }}
            lineHeight={{ base: "40px", md: "1em", lg: "1.1em" }}
            letterSpacing={{ base: "0.1em" }}
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
            color={"rgba(15, 177, 245, 1)"}
          >
            <br/><br/>
            WeFund <chakra.span color={"white"}>as</chakra.span> Multiservice Launchpad<br/><br/>
          </Text>
          <Text fontWeight={1000} fontSize="36px" lineHeight="24px" letterSpacing="-2.2%" fontFamily="Poppins-Bold" color="#ADB2DB" textAlign='center'>

            Multi-Service Launchpad, Your Success is Our Success <br/><br/>
            Crowdfunding: Token (Seed, and IDO), Equity, NFT
          </Text>
        </Stack>
        <HStack w="100%" justify={"center"} mt="72px" spacing="20px">
          <ImageTransition
            unitid={"buywfd"}
            border1="#23A4EC"
            background1="#06142D"
            border2="#06142D"
            background2="#23A4EC"
            border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
            selected={false}
            width={{ base: "188px", md: "248px", lg: "402px" }}
            height={{ base: "32px", md: "40px", lg: "40px" }}
            rounded={"33px"}
            onClick={() => router.push("/apply")}
          >
            <Text
              w="100%"
              fontSize={{ base: "14px", sm: "15px", md: "15px", lg: "15px" }}
              fontFamily={"PilatExtended-Bold"}
              fontWeight={"800"}
              
              marginLeft={7}
              color="#002E87"
              _hover={{ color: "#FFFFFF" }}
              transition={"all 1s"}
            >
              Apply to be Project on WeFund
              <IconButton
              variant="unstyled"
              marginLeft={4}
        aria-label="Twitter"
        width={{ lg: "14px", base: "12px" }}
        icon={<FaArrowRight />}
      />
            </Text>
          </ImageTransition>
        </HStack>
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
