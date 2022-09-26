import {
  Flex,
  chakra,
  Text,
  Link,
  Input,
  Image,
  IconButton,
  ButtonGroup,
  Spacer,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { SiGmail } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { ButtonBackTransition } from "./ImageTransition";
import {
  FaTelegram,
  FaMedium,
  FaTwitter,
  FaYoutube,
  FaDiscord,
  FaTelegramPlane,
} from "react-icons/fa";

const SocialMediaLinks = () => (
  <Flex
    gap={6}
    color="rgba(255, 255, 255, 0.5)"
    fontWeight={"500"}
    fontFamily="Poppins"
    fontSize={"14px"}
    letterSpacing={"-0.022em"}
    pr={12}
  >
    <ButtonGroup
      variant="solid"
      color="white"
      flexDirection="column"
      gap={4}
      size="xs"
    >
      <Text color={"#0FB1F5"} py={0}></Text>
      <IconButton
        as="a"
        aria-label="Medium"
        width={{ lg: "14px", base: "12px" }}
        borderRadius={"100px"}
        backgroundColor={"rgba(255, 255, 255, 0.05)"}
        href="https://medium.com/@wefundofficial"
        icon={<FaMedium className="footerIcon" />}
      />
      <IconButton
        as="a"
        aria-label="Youtube"
        width={{ lg: "14px", base: "12px" }}
        borderRadius={"100px"}
        backgroundColor={"rgba(255, 255, 255, 0.05)"}
        href="https://youtube.com/channel/UCjwo-9Yj7NQSmSqiY6FvEdw"
        icon={<FaYoutube className="footerIcon" />}
      />
      <IconButton
        as="a"
        aria-label="Twitter"
        width={{ lg: "14px", base: "12px" }}
        borderRadius={"100px"}
        backgroundColor={"rgba(255, 255, 255, 0.05)"}
        icon={<FaTwitter className="footerIcon" />}
        href="https://twitter.com/WeFund_Official"
      />
      <IconButton
        as="a"
        aria-label="Twitter"
        width={{ lg: "14px", base: "12px" }}
        borderRadius={"100px"}
        backgroundColor={"rgba(255, 255, 255, 0.05)"}
        icon={<FaTelegram className="footerIcon" />}
        href="https://t.me/wefundofficial"
      />
      <IconButton
        as="a"
        aria-label="Twitter"
        width={{ lg: "14px", base: "12px" }}
        borderRadius={"100px"}
        backgroundColor={"rgba(255, 255, 255, 0.05)"}
        icon={<FaDiscord className="footerIcon" />}
        href="https://discord.gg/JeggQGcJwF"
      />
      <IconButton
        width={{ lg: "14px", base: "12px" }}
        as="a"
        aria-label="SiGmail"
        href="mailto:info@wefund.app"
        borderRadius={"100px"}
        backgroundColor={"rgba(255, 255, 255, 0.05)"}
        icon={<SiGmail className="footerIcon" />}
      />
    </ButtonGroup>
    <Flex gap={5} flexDirection="column" pt={4}>
      <Text>Medium</Text>
      <Text>Youtube</Text>
      <Text>Twitter</Text>
      <Text>Telegram</Text>
      <Text>Discord</Text>
      <Text>Email</Text>
    </Flex>
  </Flex>
);

const PagesLinks = () => (
  <Flex
    fontSize={{ lg: "16px", base: "14px" }}
    fontFamily="Sk-Modernist-Regular"
    className="FlexViewMobile"
    flexDirection={"row"}
    width={{ md: "280px", base: "240px" }}
    gap="4"
  >
    <SimpleGrid columns={1} spacing={10} fontWeight={"700"}>
      <Link href="/" mr="20px">
        Home
      </Link>
      <Link href="/#Upcoming" mr="20px">
        Apply Project
      </Link>
      <Link href="/invest/step0" mr="20px">
        Launchpad
      </Link>
      <Link href="/blog" mr="20px">
        Incubation
      </Link>
    </SimpleGrid>
    <SimpleGrid
      columns={1}
      spacing={10}
      fontWeight={"700"}
      color={"rgba(255, 255, 255, 0.5)"}
    >
      <Link href="/" mr="20px">
        Dashboard
      </Link>
      <Link href="/#Upcoming" mr="20px">
        Projects
      </Link>
      <Link href="/invest/step0" mr="20px">
        Swap
      </Link>
      <Link href="/blog" mr="20px">
        Blog
      </Link>
    </SimpleGrid>
  </Flex>
);

export default function Footer() {
  return (
    <Center
    
      width={"100%"}
      background="#0A0131"
    >
      <Flex
        id="footerBottomStyle"
        color={"white"}
        maxW={"1440px"}
        gap="20"
        width={"100%"}
        px={8}
        direction={{ md: "row", base: "column-reverse" }}
      >
        <Flex
          direction={"column"}
          width={{ md: "20%", base: "100%" }}
          alignItems={"stretch"}
          justifyContent={"space-between"}
          pb={24}
          pt={20}
        >
          <Image
            width={{ lg: "150px", base: "200px" }}
            alignSelf={"center"}
            src="/media/WeFund-Logos-only.png"
          />
          <Flex direction={"column"} alignSelf={"center"}>
            <Text mt={{ base: 12, lg: 0 }}>
              &copy; {new Date().getFullYear()}
              <chakra.span color={"#0FB1F5"}> WeFund</chakra.span>
            </Text>
            <Text>All rights reserved.</Text>
          </Flex>
        </Flex>
        <Flex
          direction={{ md: "row", base: "column" }}
          width={{ md: "65%", base: "100%" }}
          gap={{ base: 16, sm: 0 }}
          pt={16}
          pb={20}
          justifyContent={"center"}
        >
          <Flex
            direction={{ base: "column", sm: "row" }}
            width={{ md: "70%", base: "100%" }}
            gap={{ base: 24, sm: 0 }} justifyContent={"center"}
          >
            <Flex
              direction={"column"}
              width={{ sm:"40%", md: "60%", base: "100%" }}
              gap={6}  
            >
              <Text
                fontSize={"16px"}
                color="#00A3FF"
                fontWeight={"bold"}
                fontFamily={"PilatExtended-Bold"}
                py={2}
              >
                Our Service Page
              </Text>
              <PagesLinks />
            </Flex>
            <Flex
              direction={"column"}
              borderRight={{
                md: "3px solid rgba(255, 255, 255, 0.14)",
                base: "none",
              }}
              maxH={"300px"}
              width={"40%"}
              gap={2}
            >
              <Text
                fontSize={"16px"}
                color="#00A3FF"
                fontWeight={"bold"}
                fontFamily={"PilatExtended-Bold"}
                py={2}
              >
                Community
              </Text>
              <SocialMediaLinks />
            </Flex>
          </Flex>

          <Flex
            flexDirection={"column"}
            gap={8}
            width={{ md: "50%", base: "100%" }}
            pl={12}
          >
            <Flex>
              <Text
                mr="5px"
                fontSize={"16px"}
                color="#00A3FF"
                fontWeight={"bold"}
                fontFamily={"PilatExtended-Bold"}
                mt={{ base: 12, lg: 0 }}
              >
                WANNA KNOW MORE ABOUT WEFUND?
              </Text>
              <Flex></Flex>
            </Flex>
            <Flex direction={"column"}>
              <Text mr="5px" mb="40px" color={"rgba(255, 255, 255, 0.5)"}>
                Subscribe to Our News
              </Text>
              
            <Flex>
              <Input
                type="text"
                color="#503E6D"
                background={"transparent"}
                rounded={"0px"}
                h={{ lg: "45px", base: "40px" }}
                fontFamily="Sk-Modernist-Regular"
                placeholder="Enter email address"
                w={{ xl: "200px", lg: "200px", md: "140px", base: "60%" }}
                fontSize={{ lg: "14px", base: "12px" }}
                style={{ border: "2px solid #503E6D" }}
              />
              <ButtonBackTransition
                selected={false}
                unitid="SubscribeButton"
                height={{ lg: "45px", base: "40px" }}
                width={{ md: "100px", base: "100px" }}
              >
                <Text
                  fontFamily="Sk-Modernist-Regular"
                  fontSize={{ lg: "14px", base: "12px" }}
                >
                  Subscribe
                </Text>
              </ButtonBackTransition>
            </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
}
