import {
  Flex,
  Text,
  Link,
  Input,
  Image,
  IconButton,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";
import { SiGmail } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { ButtonBackTransition } from "./ImageTransition";
import { FaTelegram, FaMedium, FaTwitter, FaYoutube, FaDiscord, FaTelegramPlane } from "react-icons/fa";

const SocialMediaLinks = () => (
  <ButtonGroup variant="ghost" color="white" spacing={2}>
    <IconButton
      as="a"
      aria-label="Medium"
      borderRadius={"100px"}
      className="footerButton"
      width={{ lg: "25px", base: "14px" }}
      backgroundColor={"rgba(255, 255, 255, 0.05)"}
      href="https://medium.com/@wefundofficial"
      icon={<FaMedium className="footerIcon" />}
    />
    <IconButton
      as="a"
      aria-label="Telegram"
      className="footerButton"
      width={{ lg: "25px", base: "14px" }}
      borderRadius={"100px"}
      backgroundColor={"rgba(255, 255, 255, 0.05)"}
      href="https://t.me/talkwithwefund"
      icon={<FaTelegram className="footerIcon" />}
    />
    <IconButton
      as="a"
      aria-label="Twitter"
      className="footerButton"
      width={{ lg: "25px", base: "14px" }}
      borderRadius={"100px"}
      backgroundColor={"rgba(255, 255, 255, 0.05)"}
      icon={<FaTwitter className="footerIcon" />}
      href="https://twitter.com/WeFund_Official"
    />
    <IconButton
      as="a"
      aria-label="Twitter"
      className="footerButton"
      width={{ lg: "25px", base: "14px" }}
      borderRadius={"100px"}
      backgroundColor={"rgba(255, 255, 255, 0.05)"}
      icon={<FaTelegramPlane className="footerIcon" />}
      href="https://t.me/wefundofficial"
    />
    <IconButton
      as="a"
      aria-label="Twitter"
      className="footerButton"
      width={{ lg: "25px", base: "14px" }}
      borderRadius={"100px"}
      backgroundColor={"rgba(255, 255, 255, 0.05)"}
      icon={<FaDiscord className="footerIcon" />}
      href="https://discord.gg/JeggQGcJwF"
    />
    <IconButton
      width={{ lg: "25px", base: "14px" }}
      as="a"
      aria-label="SiGmail"
      className="footerButton"
      href="mailto:info@wefund.app"
      borderRadius={"100px"}
      backgroundColor={"rgba(255, 255, 255, 0.05)"}
      icon={<SiGmail className="footerIcon" />}
    />
  </ButtonGroup>
  
);

const PagesLinks = () => (
  <Flex
    fontSize={{ lg: "16px", base: "14px" }}
    fontFamily="Sk-Modernist-Regular"
    className="FlexViewMobile"
  >
    <Link href="/" mr="20px">
      Home
    </Link>
    <Link href="/#Upcoming" mr="20px">
      Projects
    </Link>
    <Link href="/invest/step0" mr="20px">
      Invest In WeFund
    </Link>
    <Link href="/blog" mr="20px">
      Blog
    </Link>
    {/* <Link href="/cards" mr="20px">
      Card Holders
    </Link> */}
    {/* <Link href="faq" mr="20px">
      FAQ
    </Link> */}
  </Flex>
);

export default function Footer() {
  return (
    <Flex id="footerBottomStyle" color={"white"}>
      <Flex id="footerBottomInnerStyleBox">
        <Flex id="FooterTextWork">
          <Text mr="5px">Wanna know more about</Text>
          <Flex>
            <Text
              color="#00A3FF"
              fontWeight={"bold"}
              fontFamily={"PilatExtended-Bold"}
            >
              WeFund
            </Text>
            <Text>?</Text>
          </Flex>
        </Flex>
        <Flex className="SUbscriptInputFooter">
          <Input
            type="text"
            color="#503E6D"
            rounded="100px"
            background={"transparent"}
            mr={{ lg: "10px", base: "0px" }}
            h={{ lg: "45px", base: "40px" }}
            fontFamily="Sk-Modernist-Regular"
            placeholder="Enter email address"
            w={{ lg: "250px", base: "100%" }}
            fontSize={{ lg: "16px", base: "12px" }}
            style={{ border: "2px solid #503E6D" }}
          />
          <ButtonBackTransition
            rounded="100px"
            selected={false}
            unitid="SubscribeButton"
            height={{ lg: "45px", base: "40px" }}
            width={{ lg: "150px", base: "100%" }}
          >
            <Text
              fontFamily="Sk-Modernist-Regular"
              fontSize={{ lg: "16px", base: "12px" }}
            >
              Subscribe
            </Text>
          </ButtonBackTransition>
        </Flex>
      </Flex>
      <Flex id="footerBottomInnerStyleBox">
        <Flex fontSize={{ lg: "25px", base: "18px" }}>
          <Flex>
            <Image
              width={{ lg: "50px", base: "35px" }}
              src="/media/WeFund-Logos-only.png"
              objectFit={"contain"}
            />
            <Text fontFamily="Sk-Modernist-Regular" ml={"5px"}>
              We
            </Text>
            <Text fontFamily="Sk-Modernist-Bold" fontWeight={"bolder"}>
              Fund
            </Text>
          </Flex>
        </Flex>
        <PagesLinks />
      </Flex>
      <Flex id="footerBottomInnerStyleBox2">
        <Flex id="FooterTextWork2">
          <Text>&copy; {new Date().getFullYear()}</Text>
          <Text ml="5px" mr="5px" color="#00A3FF">
            WeFund.
          </Text>
          <Text>All rights reserved.</Text>
        </Flex>
        <SocialMediaLinks />
      </Flex>
    </Flex>
  );
}
