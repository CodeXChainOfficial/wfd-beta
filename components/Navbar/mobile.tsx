import React from "react";
import Link from "next/link";
import ConnectWallet from "./ConnectWallet";
import {
  Box,
  Text,
  Icon,
  Flex,
  Image,
  VStack,
  HStack,
  ChakraProvider,
} from "@chakra-ui/react";

import { NAV_ITEMS } from ".";
import { RiAccountPinBoxFill } from "react-icons/ri";

export default function NavbarMobile() {
  return (
    <VStack display={{ base: "block", md: "none", lg: "none" }}>
      <Flex
        h="60px"
        w="100%"
        zIndex="99"
        direction="row"
        position="relative"
        justify="space-between"
        backdropFilter="blur(54px)"
        bg="linear-gradient(90deg, #1F0021 0%, #120054 104.34%)"
        borderBottom="2px solid rgba(255, 255, 255, 0.103)"
      >
        <Flex ml="30px" align="center" cursor="pointer">
          <Link className="navbar-brand" href="/">
            <Image alt="WeFund" src="/media/WeFund-Logos-only.png" h="25px" />
          </Link>
        </Flex>
        <HStack>
          <Flex mr="10px">
            <ConnectWallet />
          </Flex>
          <Flex pr="10px" className="dropdown2">
            <Flex className="dropbtn" mr={"20px"}>
              <Image alt="menu2" src="/media/menuButton2.svg" h="20px" />
            </Flex>
            <div className="dropdown-content2">
              {NAV_ITEMS.map((navItem, index) => (
                <Link href={navItem.href} key={index}>
                  {navItem.label}
                </Link>
              ))}
              <Link href="/create">Create Project</Link>
            </div>
          </Flex>
          <Flex pr="30px" className="dropdown2">
            <Link href="walletInfo">
              <Icon
                as={RiAccountPinBoxFill}
                fontSize={"30px"}
                cursor="pointer"
                color="white"
              />
            </Link>
          </Flex>
        </HStack>
      </Flex>
    </VStack>
  );
}
