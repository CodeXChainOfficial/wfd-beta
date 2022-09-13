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
  HStack,
  IconButton,
} from "@chakra-ui/react";
import router from "next/router";
import { FaArrowRight } from "react-icons/fa";
import { ImageTransition } from "../ImageTransition";

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
  <Container minW={{ base: "60em", xl: "container.ld"}} display={{ base: "none", lg: "block" }}>
    <Stack
      alignItems="center"
      justifyContent="center"
      direction={"column"}
      my={{ base: "4em", md: "5em" }}
      width={{ base: "100%" }}
      px={{ base: "0", md: "10px" }}
    >
      
      <Flex direction={"row"} width={{ base: "75%", xl: "110%" }} gap={12}>
        <Box marginX={"50px"}>
          <Image
            width="250px"
            zIndex="3"
            objectFit="contain"
            src="/media/Home/wfd-logo-projection.png"
          />
        </Box>

        <Stack
          flex={1}
          flexDirection="column"
          spacing={"1em"}
        >
            <Text
        color="#FFFF"
        fontWeight="bold"
        fontFamily="PilatExtended-Bold"
        mb={{ base: ".5em", md: ".5em", lg: ".5em" }}
        fontSize={{ base: "16px", md: "28px", lg: "32px" }}
      >
        WHAT'S <chakra.span color="#0FB1F5">WEFUND</chakra.span>
      </Text>
          <Flex
            direction={"row"}
          >
            <Text
              flex={1}
              display="inline"
              fontSize={{ base: "16px", md: "20px", lg: "20px" }}
              fontFamily="Sk-Modernist-Regular"
            >
              <chakra.span color={"brand"}>
                <b>WeFund</b> WeFund is a multichain incubation and crowdfunding platform
              </chakra.span>{" "}
              for blockchain and real-world projects built on various
              blockchains. The mission is to incubate and deliver real world
              impact projects using blockchain technology
            </Text>
          </Flex>
          <HStack w="100%" pt={"6"}spacing="20px">
              <ImageTransition
                unitid={"applywhat"}
                border2="#23A4EC"
                background2="#06142D"
                border1="#06142D"
                background1="#23A4EC"
                border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
                background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
                selected={false}
                width={{ base: "150px", md: "150px", lg: "150px" }}
                height={{ base: "32px", md: "40px", lg: "40px" }}
                rounded={"33px"}
                onClick={() => router.push("/applyproject")}
              >
                <Text
                  w="100%"
                  fontSize={{
                    base: "14px",
                    sm: "15px",
                    md: "15px",
                    lg: "15px",
                  }}
                  textAlign="center"
                  fontFamily={"PilatExtended-Bold"}
                  fontWeight={"800"}
                  marginLeft={7}
                  color="#FFFFFF"
                  _hover={{ color: "#FFFFFF" }}
                  transition={"all 1s"}
                >
                  Apply
                  <IconButton
                    variant="unstyled"
                    marginLeft={7}
                    aria-label="Twitter"
                    width={{ lg: "14px", base: "12px" }}
                    icon={<FaArrowRight />}
                  />
                </Text>
              </ImageTransition>
            </HStack>
        </Stack>
      </Flex>
    </Stack>
  </Container>
);

export default function Whatis() {
  return (
    <Flex
      width="100%"
      mt={"50px"}
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
