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

import { RiAccountPinBoxFill } from "react-icons/ri";
import Container from "../Container";
import { ButtonBackTransition } from "../ImageTransition";
// import { useStore } from "../store";

export default function Navbar() {
  // const { state, dispatch } = useStore();

  return (
    <Container>
      <VStack display={{ base: "none", md: "none", lg: "block" }} >
        <Flex
          position={{ base: "relative", md: "relative", lg: "fixed" }}
          direction="row"
          justify="space-between"
          h="80px"
          zIndex="99"
          w="100%"
          backdropFilter="blur(100px)"
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
              <Flex ml="10px" border="1px solid rgba(255,255,255, 0.2)" />
            </Flex>
            <DesktopNav />
          </Flex>
          <Flex mr="20px" align="center" justify="center" w="40%" h="100%">
            <Link href="/create">
              <ButtonBackTransition
                unitid="CreateYourProject"
                selected={false}
                width="197px"
                height="40px"
                rounded="33px"
              >
                <Flex color="white" justify="center" align="center">
                  Create Your Project
                </Flex>
              </ButtonBackTransition>
            </Link>
            <Flex w="197px" ml="20px" mr={"10px"}>
              <ConnectWallet />
            </Flex>
            <Link href="walletInfo">
              <Icon
                as={RiAccountPinBoxFill}
                fontSize={"45px"}
                cursor="pointer"
              />
            </Link>
          </Flex>
        </Flex>
      </VStack>
      <VStack display={{ base: "block", md: "block", lg: "none" }}>
        <Flex
          h="60px"
          w="100%"
          zIndex="99"
          direction="row"
          position="relative"
          justify="space-between"
          backdropFilter="blur(54px)"
          borderBottom="2px solid rgba(255, 255, 255, 0.103)"
        >
          <Flex ml="30px" align="center" cursor="pointer">
            <Link className="navbar-brand" href="/">
              <Image alt="WeFund" src="/media/WeFund-Logos-only.png" h="25px" />
            </Link>
          </Flex>
          <HStack>
            <Flex mr="10px" className="dropdown2">
              <Flex className="dropbtn">
                <Image alt="menu1" src="/media/menuButton1.svg" h="20px" />
              </Flex>
              <div className="dropdown-content2">
                <ConnectWallet />
              </div>
            </Flex>
            <Flex pr="30px" className="dropdown">
              <Flex className="dropbtn" mr={"20px"}>
                <Image alt="menu2" src="/media/menuButton2.svg" h="20px" />
              </Flex>
              <Link href="walletInfo">
                <Icon
                  as={RiAccountPinBoxFill}
                  fontSize={"30px"}
                  cursor="pointer"
                />
              </Link>
              <div className="dropdown-content">
                {NAV_ITEMS.map((navItem, index) => (
                  <Link href={navItem.href} key={index}>
                    {navItem.label}
                  </Link>
                ))}
                <Link href="/create">Create Project</Link>
              </div>
            </Flex>
          </HStack>
        </Flex>
      </VStack>
      {/* {state.net == "testnet" && (
        <Flex
          w="100%"
          h="30px"
          background="yellow"
          justify="center"
          color="red"
        >
          Testnet
        </Flex>
      )} */}
    </Container>
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

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/explorer",
  },
  {
    label: "Invest in WeFund",
    href: "/invest/step0",
  },
  // {
  //   label: 'Dashboard',
  //   href: 'dashboard',
  // },
  //  {
  //    label: 'Career',
  //    href: '#',
  //  },
  //  {
  //    label: 'Contact',
  //    href: '#',
  //  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Staking",
    href: "/staking",
  },
  {
    label: "Card Holders",
    href: "/cards",
  },
  // {
  //   label: 'FAQ',
  //   href: 'faq',
  // },
];
