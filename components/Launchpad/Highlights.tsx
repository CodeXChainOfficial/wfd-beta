import React from "react";
import { Flex, Text, Image, Button, Link, Divider } from "@chakra-ui/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

export default function Highlights() {
  return (
    <Flex
      width="100%"
      position="relative"
      alignItems="center"
      flexDirection="column"
      justifyItems="center"
      my="16px"
      zIndex="20"
    >
      <Flex
        mt="28px"
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
          arrows={false}
          showDots={true}
        >
          {projects.map((item, index) => (
            <Flex
              zIndex={"20"}
              margin="0 auto"
              bg="rgba(0, 0, 19, 0.78)"
              border="3px solid rgba(15, 177, 245, 0.28)"
              borderRadius="20px"
              alignItems={"center"}
              position={"relative"}
              flexDirection={{ base: "column", md: "column", lg: "row" }}
              justifyContent={"left"}
              // width={{ base: '95%', md: '90%', lg: '65em' }}
              mx={{ base: "20px", md: "20px", lg: "120px" }}
              key={index}
            >
              <Flex
                display={{ base: "none", lg: "flex" }}
                rounded="20px"
                minW="407px"
                p="19px"
              >
                <Image src={item.img} />
              </Flex>
              <Flex
                display={{ sm: "flex", md: "flex", lg: "none" }}
                w="100%"
                p="6px"
              >
                <Image src={item.img} />
              </Flex>
              <Flex
                direction="column"
                px={{ base: "11px", md: "11px", lg: "60px" }}
                py={{ base: "19px", md: "19px", lg: "19px" }}
              >
                <Text
                  fontFamily="PilatExtended-Bold"
                  fontSize={{ sm: "18px", md: "15px", lg: "32px" }}
                  fontWeight="400"
                >
                  {item.title}
                </Text>
                <Flex direction="row" mt="16px">
                  <Image width="24px" height="24px" src="/media/clock.svg" />
                  <Text
                    color="rgba(255, 255, 255, 0.7)"
                    fontFamily={"Sk-Modernist-Regular"}
                    fontSize="16px"
                    textAlign="left"
                    ml="8px"
                  >
                    {item.date}
                  </Text>
                </Flex>
                <Divider mt="8px" />
                <Text
                  color="rgba(255, 255, 255, 0.7)"
                  fontFamily={"Sk-Modernist-Regular"}
                  fontSize={{ sm: "14px", md: "10px", lg: "20px" }}
                  textAlign="left"
                  mt="16px"
                >
                  {item.description}
                </Text>
                <Flex w="100%" justify={"end"}>
                  <Link href={item.link} target="_blank">
                    <Button
                      mt="48px"
                      mb={{ base: "20px", md: "5px" }}
                      w={{ sm: "139px", md: "139px", lg: "243px" }}
                      h={{ sm: "33px", md: "33px", lg: "50px" }}
                      bg={
                        "linear-gradient(180deg, rgba(0, 193, 255, 0.1) 0%, rgba(0, 193, 255, 0.1) 100%)"
                      }
                      border="1.5px solid #00A3FF"
                      rounded="33px"
                    >
                      <Text
                        fontFamily={"Gilroy"}
                        fontWeight="800"
                        fontSize="20px"
                      >
                        See More
                      </Text>
                      <Image ml="8px" src="/media/ArrowRight.png" />
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Carousel>
      </Flex>
    </Flex>
  );
}

const projects = [
  {
    title: "WeFund to Go Multichain",
    date: "Wed, Jun 8 2022",
    description:
      "WeFund will fulfill its mission to being multichain with Polygon Studios, entering Polygon ecosystem and subsequently Ethereum L1",
    img: "media/partners/WFD-Polygon.jpg",
    link: "https://medium.com/@wefundofficial/wefund-is-working-with-polygon-studios-to-foray-into-ethereum-368e0dd99212",
  },
  {
    title: "WeFund Teaming up with Tgrade",
    date: "Thu, July 14 2022",
    description:
      "WeFund is happy to announce a new partnership with Tgrade. Tgrade and WeFund have the same vision to take blockchain even further, bring effective impact to the real world, and have the impact reach the masses, not just a select privileged few.",
    img: "media/partners/Tgrade.png",
    link: "https://medium.com/@wefundofficial/wefund-to-partner-up-with-tgrade-7bea673e838f",
  },
  {
    title: "WeFund Opening Access with Oneledger",
    date: "Sun, July 14 2022",
    description:
      "Wefund is expanding its reach to deploy on OneLedger. OneLedger is an innovative blockchain that uses all of the benefits of blockchain technology to enable transnational compliant business operations .",
    img: "media/partners/Oneledger.png",
    link: "https://medium.com/@wefundofficial/wefund-to-add-oneledger-to-its-chain-migration-roadmap-4514c3cb9eb8",
  },
  {
    title: "WeFund Collaborating with Tron",
    date: "Tue, July 16 2022",
    description:
      " WeFund will be operating in the TRON ecosystem providing crowdsourced launchpad and incubator alternatives for the community. WeFund’s platform will be able to support a wide range of ecosystems and projects as it evolves into a multichain system..",
    img: "media/partners/Tron.png",
    link: "https://medium.com/@wefundofficial/tron-has-welcomed-wefund-to-collaborate-with-its-ecosystem-and-reach-a-larger-audience-in-the-742f041dc360",
  },
];
