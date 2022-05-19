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

export default function UpcomingProject() {
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
        background={
          "linear-gradient(90deg, rgba(42, 246, 255, 0) 20%, #63CDFA 48.75%, rgba(42, 246, 255, 0) 80%)"
        }
        width={"100%"}
        justifyContent={"center"}
      >
        <Text color="#cbe3ff">UPCOMING PROJECTS</Text>
      </Flex>
      <Box width={{ base: "100%", md: "86vw", lg: "86vw" }}>
        <Carousel
          autoPlay
          swipeable={true}
          showDots={false}
          // showThumbs={false}
          responsive={responsive}
        >
          <Flex justifyContent={"center"}>
            <Link href="https://kosu.space/" isExternal>
              <Center
                width={{ base: "220px", md: "375px" }}
                height={{ base: "220px", md: "375px" }}
                bgGradient="linear(#430E82, #1D0551)"
                borderRadius={{ base: "10px", md: "15px", lg: "15px" }}
              >
                <Image
                  cursor="pointer"
                  data-aos="fade-down"
                  objectFit="contain"
                  src="/media/partners/Kosu.png"
                  width={{ base: "20em" }}
                  height={{ base: "15em" }}
                />
              </Center>
            </Link>
          </Flex>

          <Flex justifyContent={"center"}>
            <Link href="https://portalkripto.com/" isExternal>
              <Center
                width={{ base: "220px", md: "375px" }}
                height={{ base: "220px", md: "375px" }}
                bgGradient="linear(#430E82, #1D0551)"
                borderRadius={{ base: "10px", md: "15px", lg: "15px" }}
              >
                <Image
                  cursor="pointer"
                  data-aos="fade-down"
                  objectFit="contain"
                  src="/media/partners/Portalkripto.png"
                  width={{ base: "20em" }}
                  height={{ base: "6em" }}
                />
              </Center>
            </Link>
          </Flex>

          <Flex justifyContent={"center"}>
            <Link href="https://lynxverse.io/" isExternal>
              <Center
                width={{ base: "220px", md: "375px" }}
                height={{ base: "220px", md: "375px" }}
                bgGradient="linear(#430E82, #1D0551)"
                borderRadius={{ base: "10px", md: "15px", lg: "15px" }}
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
                width={{ base: "220px", md: "375px" }}
                height={{ base: "220px", md: "375px" }}
                bgGradient="linear(#430E82, #1D0551)"
                borderRadius={{ base: "10px", md: "15px", lg: "15px" }}
              >
                <Image
                  cursor="pointer"
                  data-aos="fade-down"
                  objectFit="contain"
                  src="/media/partners/Africred.jpeg"
                  width={{ base: "20em" }}
                  height={{ base: "15em" }}
                />
              </Center>
            </Link>
          </Flex>

          <Flex justifyContent={"center"}>
            <Link href="https://luna-miners.com/" isExternal>
              <Center
                width={{ base: "220px", md: "375px" }}
                height={{ base: "220px", md: "375px" }}
                bgGradient="linear(#430E82, #1D0551)"
                borderRadius={{ base: "10px", md: "15px", lg: "15px" }}
              >
                <Image
                  cursor="pointer"
                  data-aos="fade-down"
                  objectFit="contain"
                  src="/media/partners/Lunaminers.png"
                  width={{ base: "20em" }}
                  height={{ base: "15em" }}
                />
              </Center>
            </Link>
          </Flex>

          <Flex justifyContent={"center"}>
            <Link href="https://data-lake.co/" isExternal>
              <Center
                width={{ base: "220px", md: "375px" }}
                height={{ base: "220px", md: "375px" }}
                bgGradient="linear(#430E82, #1D0551)"
                borderRadius={{ base: "10px", md: "15px", lg: "15px" }}
              >
                <Image
                  cursor="pointer"
                  data-aos="fade-down"
                  objectFit="contain"
                  src="/media/partners/Datalake.png"
                  width={{ base: "20em" }}
                  height={{ base: "15em" }}
                />
              </Center>
            </Link>
          </Flex>

          <Flex justifyContent={"center"}>
            <Link href="#" isExternal>
              <Center
                width={{ base: "220px", md: "375px" }}
                height={{ base: "220px", md: "375px" }}
                bgGradient="linear(#430E82, #1D0551)"
                borderRadius={{ base: "10px", md: "15px", lg: "15px" }}
              >
                <Image
                  cursor="pointer"
                  data-aos="fade-down"
                  objectFit="contain"
                  src="/media/partners/Scamscanner.png"
                  width={{ base: "20em" }}
                  height={{ base: "15em" }}
                />
              </Center>
            </Link>
          </Flex>

          <Flex justifyContent={"center"}>
            <Link href="#" isExternal>
              <Center
                width={{ base: "220px", md: "375px" }}
                height={{ base: "220px", md: "375px" }}
                bgGradient="linear(#430E82, #1D0551)"
                borderRadius={{ base: "10px", md: "15px", lg: "15px" }}
              >
                <Image
                  cursor="pointer"
                  data-aos="fade-down"
                  objectFit="contain"
                  src="/media/partners/Greenprotocol.png"
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
