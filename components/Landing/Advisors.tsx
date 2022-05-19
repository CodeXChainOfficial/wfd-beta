import React from "react";
import { Image, Flex, Text, Link, Spacer } from "@chakra-ui/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export default function Advisors() {
  return (
    <Flex
      width="100%"
      justify="center"
      position="relative"
      alignItems="center"
      flexDirection="column"
      fontFamily="Sk-Modernist-Regular"
      mb={{ base: "3em", md: "5em", lg: "8em" }}
    >
      <Flex
        fontFamily="PilatExtended-Bold"
        fontSize={{ md: "25px", lg: "30px" }}
      >
        <Text color="#63CDFA">WeFund</Text>
        <Text color="white" ml={"10px"}>
          Advisors
        </Text>
      </Flex>
      <Flex
        mt={"2em"}
        pb={"2em"}
        position={"relative"}
        flexDirection="column"
        justifyContent={"flex-start"}
        pl={{ base: "0", md: "1em", lg: "1em" }}
        width={{ base: "100%", md: "80vw", lg: "66vw" }}
      >
        <Carousel
          infinite
          autoPlay={true}
          swipeable={true}
          draggable={true}
          // showThumbs={false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          responsive={responsive}
          transitionDuration={500}
        >
          {team.map((e, index) => (
            <Flex
              key={index}
              zIndex={"5"}
              height="100%"
              borderRadius="10px"
              position="relative"
              className="teamCard"
              data-aos="zoom-in-up"
              flexDirection={"column"}
              bgGradient={"linear(#360847, #18075b)"}
              py={{ base: "2vw", md: "2vw", lg: "1vw" }}
              mx={{ base: "2vw", md: "2vw", lg: "1vw" }}
              width={{ base: "48vw", md: "37vw", lg: "19vw" }}
            >
              <Image
                src={e.imgsrc}
                mx={{ base: "2vw", md: "2vw", lg: "1vw" }}
                mb={{ base: "1vw", md: "1vw", lg: ".5vw" }}
                width={{ base: "44vw", md: "33vw", lg: "17vw" }}
              />
              <Flex
                flexWrap={"wrap"}
                mx={{ base: "1vw", md: "1vw", lg: ".5vw" }}
              >
                {e.logos?.map((e, i) => (
                  <Image
                    src={e}
                    key={i}
                    height={"40px"}
                    background="white"
                    borderRadius="3px"
                    objectFit="contain"
                    m={{ base: ".5vw", md: ".5vw", lg: ".5vw" }}
                    width={{ base: "10vw", md: "7.5vw", lg: "3.5vw" }}
                  />
                ))}
              </Flex>
              <Flex w="100%" px={{ base: "2vw", md: "2vw", lg: "1vw" }}>
                <div>
                  <Text
                    fontSize={{ base: "12px", md: "18px", lg: "18px" }}
                    fontFamily={"PilatExtended-Bold"}
                  >
                    {e.name}
                  </Text>
                  <Text
                    fontSize={{ base: "10px", md: "13px", lg: "13px" }}
                    fontFamily={"PilatExtended-Regular"}
                  >
                    {e.role}
                  </Text>
                </div>
                <Spacer />
                <Link href={e.link} mt="5px" isExternal>
                  <Image
                    border="0"
                    cursor="pointer"
                    background="white"
                    borderRadius="6px"
                    src="/media/linkedin.png"
                    width={{ base: "25px", md: "40px", lg: "40px" }}
                    height={{ base: "25px", md: "40px", lg: "40px" }}
                  />
                </Link>
              </Flex>
            </Flex>
          ))}
        </Carousel>
      </Flex>
    </Flex>
  );
}

const team = [
  {
    name: "John McLean",
    role: "Legal",
    logos: ["/media/Home/44.png", "/media/Home/59.png", "/media/Home/45.png"],
    imgsrc: "/media/Home/john.jpg",
  },
  /*
  {
    name: 'Trevor.UST',
    role: 'Terra Ecosystem',
    imgsrc: '/media/Home/46.jpeg',
    logos: [
      '/media/Home/49.png',
      '/media/Home/50.png',
      '/media/Home/51.png',
      '/media/Home/58.png',
      '/media/Home/57.png',
      '/media/Home/56.png',
    ],
  },*/
  {
    name: "Jason Galvin",
    role: "Co-CTO Advisor",
    link: "https://linkedin.com/in/jasongalvin/",
    imgsrc: "/media/Team/wfd-jason.jpg",
    logos: [
      "/media/Team_Companies/GoPro.jpeg",
      "/media/Team_Companies/GeneralThings.png",
      "/media/Team_Companies/ProvidentFunding.jpg",
      "/media/Team_Companies/BearingPoint.jpg",
    ],
  },
];
