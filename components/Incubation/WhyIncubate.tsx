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
  VStack,
  Center,
} from "@chakra-ui/react";
import { ImageTransition } from "../ImageTransition";
import { useStore } from "../../contexts/store";
import {
  FaArrowRight,
  FaBoxes,
  FaHandHolding,
  FaHandHoldingHeart,
  FaHandshake,
  FaTwitter,
  FaUsersCog,
} from "react-icons/fa";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { MdMoneyOff } from "react-icons/md";

export default function WhyIncubate() {
  return (
    <Center px={21}>
      <Flex
        width="90%"
        position="relative"
        alignItems="center"
        alignContent={"center"}
        flexDirection={{ base: "column", md: "row" }}
        minHeight={{ base: "35vh", md: "55vh", lg: "90vh" }}
      >
        <Flex width={"100%"} flexDirection="column" gap={24}>
          <Flex width={"80%"} flexDirection="column" gap={16}>
            <HStack alignItems={"left"}>
              <VStack align={"left"}>
                <Text
                  color={" #0FB1F5"}
                  fontFamily={"PilatExtended-Regular"}
                  fontSize={"24px"}
                >
                  Support Impactful Real-World Project
                </Text>
                <Text
                  fontWeight={500}
                  fontSize="20px"
                  lineHeight="30px"
                  letterSpacing="-2.2%"
                  fontFamily="Poppins-Bold"
                  color="#ADB2DB"
                  textAlign="justify"
                >
                  WeFund strive to work toward where blockchain provide good
                  impact to people. WeFund is a multichain incubation and
                  crowdfunding platform for blockchain and real-world projects.
                </Text>
              </VStack>
              <IconButton
                variant="unstyled"
                aria-label="Twitter"
                width={{ lg: "14px", base: "12px" }}
                icon={<FaHandshake size={"48px"} />}
              />
            </HStack>
            <HStack alignItems={"left"}>
              <VStack align={"left"}>
                <Text
                  color={" #0FB1F5"}
                  fontFamily={"PilatExtended-Regular"}
                  fontSize={"24px"}
                >
                  Network of Expertise
                </Text>
                <Text
                  fontWeight={500}
                  fontSize="20px"
                  lineHeight="30px"
                  letterSpacing="-2.2%"
                  fontFamily="Poppins-Bold"
                  color="#ADB2DB"
                  textAlign="justify"
                >
                  Our network of mentors, market makers, developers, legal
                  experts, and other service providers will help you navigate
                  the main challenges you'll face building Web3 technology.
                </Text>
              </VStack>
              <IconButton
                variant="unstyled"
                marginLeft={4}
                aria-label="Twitter"
                width={{ lg: "14px", base: "12px" }}
                icon={<FaUsersCog size={"48px"} />}
              />
            </HStack>
          </Flex>
        </Flex>
        <Flex width={"100%"} px={4}>
          <Image width="250px" src="/media/floatingmonitor.png" />
        </Flex>
        <Flex width={"100%"} flexDirection="column" gap={24}>
          <Flex width={"80%"} flexDirection="column" gap={16}>
            <HStack alignItems={"left"}>
              <IconButton
                variant="unstyled"
                marginRight={4}
                aria-label="Twitter"
                width={{ lg: "14px", base: "12px" }}
                icon={<MdMoneyOff size={"48px"} />}
              />
              <VStack align={"left"}>
                <Text
                  color={" #0FB1F5"}
                  fontFamily={"PilatExtended-Regular"}
                  fontSize={"24px"}
                >
                  Free of Charge
                </Text>
                <Text
                  fontWeight={500}
                  fontSize="20px"
                  lineHeight="30px"
                  letterSpacing="-2.2%"
                  fontFamily="Poppins-Bold"
                  color="#ADB2DB"
                  textAlign="justify"
                >
                  We do not charge any fee or commission to the projects. Unlike
                  other incubators, we do not require token or equity
                  allocation, or payment in advance. Teams only be asked for
                  their full commitment to adhere to our incubation journey
                  during the 12 week incubation period.
                </Text>
              </VStack>
            </HStack>
            <HStack alignItems={"left"}>
              <IconButton
                variant="unstyled"
                marginRight={4}
                aria-label="Twitter"
                width={{ lg: "14px", base: "12px" }}
                icon={<FaBoxes size={"48px"} />}
              />
              <VStack align={"left"}>
                <Text
                  color={" #0FB1F5"}
                  fontFamily={"PilatExtended-Regular"}
                  fontSize={"24px"}
                >
                  Resourceful
                </Text>
                <Text
                  fontWeight={500}
                  fontSize="20px"
                  lineHeight="30px"
                  letterSpacing="-2.2%"
                  fontFamily="Poppins-Bold"
                  color="#ADB2DB"
                  textAlign="justify"
                >
                  The WeFund team is dedicated to helping you in any way
                  possible. This inclhudes developer, marketing, documentation,
                  and other business-related support.
                </Text>
              </VStack>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
}
