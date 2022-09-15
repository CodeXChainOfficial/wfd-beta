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
  HStack,
  ChakraProvider,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverHeader,
  ButtonGroup,
  IconButton,
  // Link,
} from "@chakra-ui/react";

import NavbarMobile from "./mobile";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { ButtonBackTransition } from "../ImageTransition";
import { useStore } from "../../contexts/store";
import {
  FaMedium,
  FaYoutube,
  FaTwitter,
  FaTelegram,
  FaDiscord,
  FaFlask,
  FaRocket,
  FaRedo,
  FaRetweet,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Navbar() {
  const { state, dispatch } = useStore();
  const { onOpen, onClose, isOpen } = useDisclosure();
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
            <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
              <PopoverTrigger>
                <Flex className="btn-group" cursor="pointer" align="center">
                  <Text
                    color="rgba(255, 255, 255, 0.84)"
                    fontSize="16px"
                    lineHeight="18px"
                  >
                    Services
                  </Text>
                </Flex>
              </PopoverTrigger>
              <PopoverContent
                background="#0E0129"
                width="200px"
                ml={28}
                border="0px"
                _focus={{ boxShadow: "none" }}
                marginTop={"25px"}
                padding={0}
              >
                <PopoverBody>
                  <Flex
                    color="rgba(255, 255, 255, 0.5)"
                    fontWeight={"500"}
                    fontFamily="Poppins"
                    fontSize={"18px"}
                    letterSpacing={"-0.022em"}
                    gap={6}
                    pb={2}
                    borderBottom={"3px solid rgba(255, 255, 255, 0.09)"}
                    
                    _hover={{ background: " rgba(255, 255, 255, 0.1)" }}
                  >
                    <ButtonGroup
                      variant="unstyled"
                      color="white"
                      flexDirection="column"
                      gap={5}
                      size="xs"
                    >
                      <Text color={"#0FB1F5"} py={0}></Text>
                      <IconButton
                        as="a"
                        aria-label="Incubation"
                        width={{ lg: "14px", base: "12px" }}
                        borderRadius={"100px"}
                        backgroundColor={"rgba(255, 255, 255, 0.05)"}
                        href="/incubation"
                        icon={<FaFlask size={"20px"} />}
                      />
                    </ButtonGroup>
                    <Flex gap={4} flexDirection="column" pt={4} as="a" href="/incubation">
                      <Text>Incubation</Text>
                    </Flex>
                  </Flex>
                  <Flex
                    color="rgba(255, 255, 255, 0.5)"
                    fontWeight={"500"}
                    fontFamily="Poppins"
                    fontSize={"18px"}
                    letterSpacing={"-0.022em"}
                    gap={6}
                    pb={2}
                    borderBottom={"3px solid rgba(255, 255, 255, 0.09)"}
                    _hover={{ background: " rgba(255, 255, 255, 0.1)" }}
                  >
                    <ButtonGroup
                      variant="unstyled"
                      color="white"
                      flexDirection="column"
                      gap={5}
                      size="xs"
                    >
                      <Text color={"#0FB1F5"} py={0}></Text>
                      <IconButton
                        as="a"
                        aria-label="Laucnhpad"
                        width={{ lg: "14px", base: "12px" }}
                        borderRadius={"100px"}
                        backgroundColor={"rgba(255, 255, 255, 0.05)"}
                        href="/launchpadservice"
                        icon={<FaRocket size={"20px"} />}
                      />
                    </ButtonGroup>
                    <Flex gap={4} flexDirection="column" pt={4} as="a" href="/launchpadservice">
                      <Text>Launchpad</Text>
                    </Flex>
                  </Flex>
                  <Flex
                    color="rgba(255, 255, 255, 0.5)"
                    fontWeight={"500"}
                    fontFamily="Poppins"
                    fontSize={"18px"}
                    letterSpacing={"-0.022em"}
                    gap={6}
                    pb={2}
                    borderBottom={"3px solid rgba(255, 255, 255, 0.09)"}
                    
                    _hover={{ background: " rgba(255, 255, 255, 0.1)" }}
                  >
                    <ButtonGroup
                      variant="unstyled"
                      color="white"
                      flexDirection="column"
                      gap={5}
                      size="xs"
                    >
                      <Text color={"#0FB1F5"} py={0}></Text>
                      <IconButton
                        as="a"
                        aria-label="Swap"
                        width={{ lg: "14px", base: "12px" }}
                        borderRadius={"100px"}
                        backgroundColor={"rgba(255, 255, 255, 0.05)"}
                        href="/swap"
                        icon={<FaRetweet size={"20px"} />}
                      />
                    </ButtonGroup>
                    <Flex gap={4} flexDirection="column" pt={4} as="a" href="/swap">
                      <Text>Swap</Text>
                    </Flex>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>

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
            <Link href="userinfo">
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
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Invest",
    href: "/invest/step0",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];
