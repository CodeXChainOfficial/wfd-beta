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
} from "@chakra-ui/react";
import { ImageTransition } from "../../ImageTransition";
import { useStore } from "../../../contexts/store";
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

export default function Whyjoin() {
  const router = useRouter();
  const { state, dispatch } = useStore();
  return (
    <Flex
      width="100%"
      position="relative"
      alignItems="center"
      flexDirection="row"
      minHeight={{ base: "95vh", md: "95vh", lg: "95vh" }}
    >
      <Flex width={"50%"} paddingLeft="10%">
        <Image width="400px" src="/media/whyjoin.png" />
      </Flex>
      <Flex width={"50%"} flexDirection="column" gap={24}>
        <Text
          fontFamily={"PilatExtended-Regular"}
          fontWeight={"500"}
          lineHeight={"150%"}
          fontSize={"28px"}
        >
          WHY JOIN OUR
          <br />
          <chakra.span
            color={"#02A4FF"}
            fontSize={"38px"}
            fontFamily={"PilatExtended-Bold"}
          >
            {" "}
            Incubation Program?
          </chakra.span>
        </Text>
        <Flex width={"80%"} flexDirection="column" gap={16}>
          <HStack alignItems={"left"}>
            <IconButton
              variant="unstyled"
              marginRight={4}
              aria-label="Twitter"
              width={{ lg: "14px", base: "12px" }}
              icon={<FaHandshake size={"48px"} />}
            />
            <VStack align={"left"}>
              <Text
                color={" #0FB1F5"}
                fontFamily={"PilatExtended-Regular"}
                fontSize={"22px"}
              >
                Support Impactful Real-World Project
              </Text>
              <Text>
                WeFund's mission is to host high-quality projects that align
                with WeFund's investor community and have real-world
                applications by leveraging blockchain technology
              </Text>
            </VStack>
          </HStack>
          <HStack alignItems={"left"}>
            <IconButton
              variant="unstyled"
              marginRight={4}
              aria-label="Twitter"
              width={{ lg: "14px", base: "12px" }}
              icon={<FaUsersCog size={"38px"} />}
            />
            <VStack align={"left"}>
              <Text
                color={" #0FB1F5"}
                fontFamily={"PilatExtended-Regular"}
                fontSize={"22px"}
              >
                Network of Expertise
              </Text>
              <Text>
                Our network of mentors, market makers, developers, legal
                experts, and other service providers will help you navigate the
                main challenges you'll face building Web3 technology.
              </Text>
            </VStack>
          </HStack>
          <HStack alignItems={"left"}>
            <IconButton
              variant="unstyled"
              marginRight={4}
              aria-label="Twitter"
              width={{ lg: "14px", base: "12px" }}
              icon={<MdMoneyOff size={"38px"} />}
            />
            <VStack align={"left"}>
              <Text
                color={" #0FB1F5"}
                fontFamily={"PilatExtended-Regular"}
                fontSize={"22px"}
              >
                Free
              </Text>
              <Text>
                We do not charge any fee or commission to the projects. Unlike
                other incubators, we do not require token allocation, equity
                allocation, or payment in advance. The founders’ only obligation
                is to ensure their full commitment to attend the required
                sessions with the WeFund team and its advisors during the 12
                week incubation period.
              </Text>
            </VStack>
          </HStack>
          <HStack alignItems={"left"}>
            <IconButton
              variant="unstyled"
              marginRight={4}
              aria-label="Twitter"
              width={{ lg: "14px", base: "12px" }}
              icon={<FaBoxes size={"38px"} />}
            />
            <VStack align={"left"}>
              <Text
                color={" #0FB1F5"}
                fontFamily={"PilatExtended-Regular"}
                fontSize={"22px"}
              >
                Resourceful
              </Text>
              <Text>
                The WeFund team is dedicated to helping you in any way possible.
                This inclhudes developer, marketing, documentation, and other
                business-related support.
              </Text>
            </VStack>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
}
