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
      <Text>info@wefund.app</Text>
    </Flex>
  </Flex>
);

const PagesLinks = () => (
  <Flex
    fontSize={{ lg: "16px", base: "14px" }}
    fontFamily="Sk-Modernist-Regular"
    className="FlexViewMobile"
    flexDirection={"row"}
    width="300px"
    gap="16"
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
    <Flex
      id="footerBottomStyle"
      color={"white"}
      gap="20"
      width={"100%"}
      direction={{lg:"row", base:"column-reverse"}} 
    >
      <Flex direction={"column"} width={"20%"} alignItems={"center"}>
        <Image
          width={{ lg: "150px", base: "80px" }}
          src="/media/WeFund-Logos-only.png"
        />
        <Flex direction={"column"} paddingTop={"45%"}>
          <Text>
            &copy; {new Date().getFullYear()}
            <chakra.span color={"#0FB1F5"}> WeFund</chakra.span>
          </Text>
          <Text>All rights reserved.</Text>
        </Flex>
      </Flex>
      <Flex direction={"column"} width={"20%"} gap={6}>
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
        borderRight={"3px solid rgba(255, 255, 255, 0.14)"}
        maxH={"300px"}
        width={"15%"}
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
      <Flex flexDirection={"column"} gap={8}>
        <Flex>
          <Text
            mr="5px"
            fontSize={"16px"}
            color="#00A3FF"
            fontWeight={"bold"}
            fontFamily={"PilatExtended-Bold"}
          >
            WANNA KNOW MORE ABOUT WEFUND?
          </Text>
          <Flex></Flex>
        </Flex>
        <Flex>
          <Text mr="5px" mt="40px" color={"rgba(255, 255, 255, 0.5)"}>
            Subscribe to Our News
          </Text>
        </Flex>
        <Flex>
          <Input
            type="text"
            color="#503E6D"
            background={"transparent"}
            rounded={"0px"}
            h={{ lg: "45px", base: "40px" }}
            fontFamily="Sk-Modernist-Regular"
            placeholder="Enter email address"
            w={{ xl: "200px", lg: "200px", base: "100%" }}
            fontSize={{ lg: "14px", base: "12px" }}
            style={{ border: "2px solid #503E6D" }}
          />
          <ButtonBackTransition
            selected={false}
            unitid="SubscribeButton"
            height={{ lg: "45px", base: "40px" }}
            width={{ lg: "100px", base: "100%" }}
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
  );
}
