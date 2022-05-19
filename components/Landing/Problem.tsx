import React from "react";
import { Flex, Text, Image, Button } from "@chakra-ui/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 2000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Problem() {
  return (
    <Flex
      width="100%"
      position="relative"
      alignItems="center"
      flexDirection="column"
      my={{ base: "5em", md: "8em", lg: "10em" }}
    >
      <Flex
        pb="2em"
        width="100%"
        position="relative"
        bgRepeat="no-repeat"
        flexDirection="column"
        backgroundSize="cover"
        justifyContent="flex-start"
      >
        <Carousel
          infinite
          autoPlay={false}
          swipeable={true}
          draggable={true}
          // showThumbs={false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          responsive={responsive}
          transitionDuration={500}
          customLeftArrow={
            <Flex
              w="80px"
              position="absolute"
              left="calc(4% + 1px)"
              color="#63CDFA"
            >
              <MdArrowLeft size="80" />
            </Flex>
          }
          customRightArrow={
            <Flex
              w="80px"
              position="absolute"
              right="calc(4% + 1px)"
              color="#63CDFA"
            >
              <MdArrowRight size="80px" />
            </Flex>
          }
        >
          <Flex
            zIndex={"4"}
            margin="0 auto"
            borderRadius="20px"
            alignItems={"center"}
            position={"relative"}
            flexDirection={"column"}
            justifyContent={"center"}
            bgGradient={"Linear(#430E82, #1D0551)"}
            width={{ base: "95%", md: "90%", lg: "65em" }}
            p={{ base: "1em", md: "2em 1em", lg: "2em 1em" }}
          >
            <Text
              color="#63CDFA"
              fontFamily="PilatExtended-Bold"
              fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            >
              PROBLEM
            </Text>
            <Flex
              width={"100%"}
              alignItems="center"
              justifyContent="center"
              flexWrap={{ md: "wrap", lg: "wrap" }}
              flexDirection={{ base: "column", md: "row", lg: "row" }}
            >
              {problems.map((e, i) => (
                <Flex
                  key={i}
                  mt={{ base: "1em", md: "2em", lg: "2em" }}
                  w={{ base: "98%", md: e.mdWidth, lg: e.width }}
                  alignItems={{ base: "center", md: "center", lg: "center" }}
                >
                  <Flex
                    alignItems="center"
                    position={"relative"}
                    borderRadius={"200px"}
                    justifyContent="center"
                    bgGradient={"Linear(#F8A5FF, #FFE2FF)"}
                    width={{ base: "3em", md: "5em", lg: "7em" }}
                    height={{ base: "3em", md: "5em", lg: "7em" }}
                  >
                    <Image
                      src={e.img}
                      position={"absolute"}
                      width={{ base: "100%", md: "100%", lg: "100%" }}
                      height={{ base: "100%", md: "100%", lg: "100%" }}
                      // objectFit={{ base: "contain", md: "auto", lg: "auto" }}
                    />
                  </Flex>
                  <Text
                    ml="0.5em"
                    width={"100%"}
                    textAlign={"left"}
                    fontWeight={"bold"}
                    fontFamily="Sk-Modernist-Regular"
                    w={{ base: "80%", md: e.md, lg: e.lg }}
                    fontSize={{ base: "14px", md: "14px", lg: "18px" }}
                    lineHeight={{ base: "16px", md: "16px", lg: "20px" }}
                  >
                    {e.lable}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>

          <Flex
            zIndex={"4"}
            height="100%"
            margin="auto"
            borderRadius="20px"
            alignItems={"center"}
            position={"relative"}
            flexDirection={"column"}
            justifyContent={"center"}
            bgGradient={"Linear(#430E82, #1D0551)"}
            p={{ base: "1em", md: "1em", lg: "2em" }}
            width={{ base: "95%", md: "90%", lg: "65em" }}
          >
            <Text
              fontFamily="PilatExtended-Bold"
              fontSize={{ lg: "30px" }}
              color="#63CDFA"
            >
              SOLUTION
            </Text>
            <Flex
              width={"100%"}
              alignItems="flex-start"
              justifyContent="space-around"
              flexWrap={{ md: "wrap", lg: "wrap" }}
              flexDirection={{ base: "column", md: "row", lg: "row" }}
            >
              {solutions.map((e, i) => (
                <Flex
                  key={i}
                  mt={"2em"}
                  alignItems={"center"}
                  justifyContent="center"
                  w={{ base: "98%", md: "30%", lg: "12em", xl: "14em" }}
                  flexDirection={{ base: "row", md: "column", lg: "column" }}
                >
                  <Flex
                    align="center"
                    justify="center"
                    alignItems="center"
                    position={"relative"}
                    borderRadius={"100px"}
                    justifyContent="center"
                    mr={{ base: ".5em", md: "0", lg: "0" }}
                    bgGradient={"Linear(#F8A5FF, #FFE2FF)"}
                    width={{ base: "4em", md: "7em", lg: "8em" }}
                    height={{ base: "4em", md: "7em", lg: "8em" }}
                  >
                    <Image
                      src={e.img}
                      position="absolute"
                      objectFit="contain"
                      bottom={{ md: "0", lg: "-2em" }}
                      height={{ base: "100%", md: "100%", lg: "120%" }}
                    />
                  </Flex>
                  <Text
                    fontWeight={"bold"}
                    mt={{ md: "1em", lg: "3em" }}
                    fontFamily="Sk-Modernist-Regular"
                    width={{ base: "80%", md: "100%", lg: "100%" }}
                    fontSize={{ base: "14px", md: "14px", lg: "18px" }}
                    lineHeight={{ base: "16px", md: "16px", lg: "20px" }}
                    textAlign={{ base: "left", md: "center", lg: "center" }}
                  >
                    {e.lable}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Carousel>
      </Flex>
    </Flex>
  );
}

const problems = [
  {
    md: "5em",
    lg: "5em",
    width: "20em",
    mdWidth: "30%",
    img: "/media/Home/5.png",
    lable: "Pump and dump schemes",
  },
  {
    md: "8em",
    lg: "8em",
    width: "20em",
    mdWidth: "30%",
    img: "/media/Home/6.svg",
    lable: "Non-refundable investment",
  },
  {
    md: "6em",
    lg: "6em",
    mdWidth: "30%",
    width: "20em",
    img: "/media/Home/7.svg",
    lable: "Undelivered achievement",
  },
  {
    md: "10em",
    lg: "12em",
    width: "24em",
    mdWidth: "35%",
    img: "/media/Home/8.svg",
    lable: "Failed projects unable to return any resources to investors",
  },
  {
    lg: "17em",
    md: "17em",
    width: "30em",
    mdWidth: "40%",
    img: "/media/Home/9.svg",
    lable:
      "An early-stage crypto project could have a high barrier of entry such as minimum investment amounts",
  },
];

const solutions = [
  {
    img: "/media/Home/37.svg",
    lable:
      "All projects will have a dedicated smart contract to deposit all funds in the Anchor protocol for security. WeFund does not touch the funds raised.",
  },
  {
    img: "/media/Home/38.png",
    lable:
      "Milestones will be approved by the project backers for the next set of funds to be released from Anchor to the project.",
  },
  {
    img: "/media/Home/39.png",
    lable:
      "If the project does not get approved by the backers, then the remaining funds will be returned to the backers.",
  },
];
