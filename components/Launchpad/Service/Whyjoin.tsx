/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import {
  HStack,
  Image,
  Flex,
  Text,
  chakra,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { FaBoxes, FaHandshake, FaUsersCog } from "react-icons/fa";
import { MdMoneyOff } from "react-icons/md";

export default function Whyjoin() {
  return (
    <Flex
      width="100%"
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      px={{ base: "5%", md: "10%" }}
      mb="100px"
      gap={{ base: "50px", md: "0px" }}
    >
      <Flex width={"100%"}>
        <Image width="400px" src="/media/whyjoin.png" />
      </Flex>
      <Flex width={"100%"} flexDirection="column" gap={24}>
        <Flex width="100%" direction="column">
          <Text
            fontFamily={"PilatExtended-Regular"}
            fontWeight={"400"}
            lineHeight={"150%"}
            fontSize={{ base: "24px", md: "32px" }}
            letterSpacing="-0.022em"
          >
            WHY JOIN OUR
          </Text>
          <Text
            fontFamily={"PilatExtended-Regular"}
            fontWeight={"900"}
            lineHeight={"150%"}
            fontSize={{ base: "26px", md: "40px" }}
            letterSpacing="-0.022em"
            color={"#02A4FF"}
          >
            Incubation Program?
          </Text>
        </Flex>
        <Flex width={"100%"} flexDirection="column" gap={16}>
          {datas.map((data, index) => (
            <HStack alignItems={"left"} key={index} spacing="6">
              <IconButton
                variant="unstyled"
                aria-label="Twitter"
                width={{ lg: "14px", base: "12px" }}
                icon={<data.icon size={"48px"} />}
              />
              <VStack align={"left"}>
                <Text
                  color={"#0FB1F5"}
                  fontFamily={"PilatExtended-Regular"}
                  fontSize={{ base: "24px", lg: "32px" }}
                  letterSpacing="-0.022em"
                >
                  {data.title}
                </Text>
                <Text
                  fontFamily="Poppins"
                  fontWeight="500"
                  fontSize={{ base: "15px", md: "20px" }}
                  letterSpacing="-0.022em"
                  color="#ADB2DB"
                >
                  {data.description}
                </Text>
              </VStack>
            </HStack>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

const datas = [
  {
    icon: FaHandshake,
    title: "Support Impactful Real-World Project",
    description:
      "WeFund's mission is to host high-quality projects that align with WeFund's investor community and have real-world applications by leveraging blockchain technology",
  },
  {
    icon: FaUsersCog,
    title: "Network of Expertise",
    description:
      "Our network of mentors, market makers, developers, legal experts, and other service providers will help you navigate the main challenges you'll face building Web3 technology.",
  },
  {
    icon: MdMoneyOff,
    title: "Free",
    description:
      "We do not charge any fee or commission to the projects. Unlike other incubators, we do not require token allocation, equity allocation, or payment in advance. The founders’ only obligation is to ensure their full commitment to attend the required sessions with the WeFund team and its advisors during the 12 week incubation period.",
  },
  {
    icon: FaBoxes,
    title: "Resourceful",
    description:
      "The WeFund team is dedicated to helping you in any way possible. This inclhudes developer, marketing, documentation, and other business-related support.",
  },
];
