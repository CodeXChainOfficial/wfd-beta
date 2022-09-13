import React, { useState } from "react";
import { Image, Flex, Box, Text, Link, Center } from "@chakra-ui/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 2000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function IncubatedCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <Flex
      mt={{ base: "1em", md: "3em" }}
      mb={{ base: "5em", md: "3em" }}
      width="100%"
      alignItems="center"
      flexDirection="column"
      pb={{ md: "5em", lg: "10em" }}
    >
      <Flex
        fontFamily="PilatExtended-Bold"
        fontSize={{ md: "25px", lg: "30px" }}
        mb="1em"
        width={"100%"}
        justifyContent={"center"}
      >
        <Text color="#02A4FF">INCUBATED PROJECT</Text>
      </Flex>
      <Box width={{ base: "100%", md: "80%", lg: "70%" }}>
        <Carousel
          autoPlay
          swipeable={true}
          showDots={true}
          // showThumbs={false}
          responsive={responsive}
        >
          <Flex justifyContent={"center"}>
            <Link href="#" isExternal>
              <Center
                width={{ base: "140px", md: "220px" }}
                height={{ base: "140px", md: "220px" }}
                bgGradient="#050010"
                borderRadius={"full"}
                border={"3px solid #0FB1F5"}
              >
                <Image
                  cursor="pointer"
                  data-aos="fade-down"
                  objectFit="contain"
                  src="/media/partners/lynx-dark.png"
                  width={{ base: "20em" }}
                  height={{ base: "15em" }}
                />
              </Center>
            </Link>
          </Flex>
          <Flex justifyContent={"center"}>
            <Link href="#" isExternal>
              <Center
                width={{ base: "140px", md: "220px" }}
                height={{ base: "140px", md: "220px" }}
                bgGradient="#050010"
                borderRadius={"full"}
                border={"3px solid #0FB1F5"}
              >
                <Image
                  cursor="pointer"
                  data-aos="fade-down"
                  objectFit="contain"
                  src="/media/partners/lynx-dark.png"
                  width={{ base: "20em" }}
                  height={{ base: "15em" }}
                />
              </Center>
            </Link>
          </Flex>
          <Flex justifyContent={"center"}>
            <Link href="#" isExternal>
              <Center
                width={{ base: "140px", md: "220px" }}
                height={{ base: "140px", md: "220px" }}
                bgGradient="#050010"
                borderRadius={"full"}
                border={"3px solid #0FB1F5"}
              >
                <Image
                  cursor="pointer"
                  data-aos="fade-down"
                  objectFit="contain"
                  src="/media/partners/lynx-dark.png"
                  width={{ base: "20em" }}
                  height={{ base: "15em" }}
                />
              </Center>
            </Link>
          </Flex>
          <Flex justifyContent={"center"}>
            <Link href="#" isExternal>
              <Center
                width={{ base: "140px", md: "220px" }}
                height={{ base: "140px", md: "220px" }}
                bgGradient="#050010"
                borderRadius={"full"}
                border={"3px solid #0FB1F5"}
              >
                <Image
                  cursor="pointer"
                  data-aos="fade-down"
                  objectFit="contain"
                  src="/media/partners/lynx-dark.png"
                  width={{ base: "20em" }}
                  height={{ base: "15em" }}
                />
              </Center>
            </Link>
          </Flex>

        </Carousel>
      </Box>
    </Flex>
  );
}
