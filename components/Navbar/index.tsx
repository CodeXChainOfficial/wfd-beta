import React, { FunctionComponent, useEffect } from "react";
import Link from "next/link";
import ConnectWallet from "./ConnectWallet";
import {
  Box,
  Text,
  Icon,
  Flex,
  Image,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import NavbarMobile from "./mobile";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { ButtonBackTransition } from "../ImageTransition";
import { useStore } from "../../contexts/store";

export default function Navbar() {
  const { state } = useStore();
  return (
    <Flex w="100%" direction="column">
      <VStack display={{ base: "none", md: "block", lg: "block" }}>
        <Flex
          position="relative"
          direction="row"
          justify="space-between"
          h="80px"
          zIndex="99"
          w="100%"
          backdropFilter="blur(100px)"
          bg="rgba(13, 21, 84, 0.5)"
          borderBottom="2px solid rgba(255, 255, 255, 0.103)"
        >
          <Flex w="50%" h="100%" align="center" justify="space-between">
            <Flex ml="90px" cursor="pointer">
              <Link className="navbar-brand" href="/">
                <Image
                  alt="WeFund"
                  src="/media/WeFund-Logos-only.png"
                  h="30px"
                />
              </Link>
            </Flex>
            <DesktopNav />
          </Flex>
          <Flex mr="20px" align="center" justify="center" w="40%" h="100%">
            <Link href="/apply">
              <ButtonBackTransition
                unitid="ApplyYourProject"
                selected={false}
                width="197px"
                height="35px"
                rounded="33px"
              >
                <Flex color="white" justify="center" align="center">
                  Apply Project
                </Flex>
              </ButtonBackTransition>
            </Link>
            <Flex w="197px" ml="20px" mr={"10px"}>
              <ConnectWallet />
            </Flex>
            <Link href="/userinfo">
              <Icon
                as={RiAccountPinBoxFill}
                fontSize={"45px"}
                cursor="pointer"
                color="white"
              />
            </Link>
          </Flex>
        </Flex>
      </VStack>
      <NavbarMobile />
      {state.net == "testnet" && (
        <Flex w="100%" h="30x" background="yellow" justify="center" color="red">
          Testnet
        </Flex>
      )}
    </Flex>
  );
}
const DesktopNav = () => {
  return (
    <>
      {NAV_ITEMS.map((navItem, index) => (
        <Flex key={index} className="btn-group" cursor="pointer" align="center">
          <Link href={navItem.href} className="btn btn-danger">
            <Text
              color="rgba(255, 255, 255, 0.84)"
              fontSize="16px"
              lineHeight="18px"
            >
              {navItem.label}
            </Text>
          </Link>
        </Flex>
      ))}
    </>
  );
};

export const NAV_ITEMS = [
  {
    label: "Incubation",
    href: "/incubation",
  },
  {
    label: "Launchpad",
    href: "/projects",
  },
  {
    label: "Invest",
    href: "/invest",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Swap",
    href: "/swap",
  },
];
