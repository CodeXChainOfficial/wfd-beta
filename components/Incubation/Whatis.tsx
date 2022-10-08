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

export default function Whatis() {
  return (
    <Flex width="100%" mt="50px" align="center" justify="center">
      <Flex
        width="80%"
        justify="space-between"
        align="center"
        position="relative"
        gap={{ base: "10px", md: "219px" }}
        direction={{ base: "column", md: "row" }}
      >
        <Image
          width="278px"
          zIndex="3"
          objectFit="contain"
          src="/media/Home/IC11.png"
        />

        <Stack flex={1} flexDirection="column" spacing={"1em"}>
          <Text
            color="#FFFF"
            fontWeight="bold"
            fontFamily="PilatExtended-Bold"
            align="left"
            mb={{ base: ".5em", md: ".5em", lg: ".5em" }}
            fontSize={{ base: "25px", md: "28px", lg: "32px" }}
          >
            WHAT'S <chakra.span color="#0FB1F5">WEFUND?</chakra.span>
          </Text>
          <Flex direction={"row"}>
            <Text
              fontWeight={500}
              fontSize="20px"
              lineHeight="30px"
              letterSpacing="-2.2%"
              fontFamily="Calibri"
              color="#ADB2DB"
              textAlign="justify"
            >
              WeFund is a multichain incubation and crowdfunding platform for
              blockchain and real-world projects built on various blockchains.
              The mission is to incubate and deliver real world impact projects
              using blockchain technology
            </Text>
          </Flex>
          <HStack w="100%" pt={"6"} spacing="20px">
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
              onClick={() => router.push("/apply")}
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
    </Flex>
  );
}
