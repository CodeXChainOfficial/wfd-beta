import React, { useState } from "react";
import { Box, Center, chakra, Flex, Image, Link, Text } from "@chakra-ui/react";

//needs the images and links from media
const partners = [
  {
    img: "/media/partners/bnb.png",
    link: "",
  },
  {
    img: "/media/partners/Tron.png",
    link: "",
  },
  {
    img: "/media/partners/near.png",
    link: "",
  },
];

export default function Keypartners() {
  return (
    <Flex direction="column" width="100%" mt="64px">
      <Text
        textAlign="center"
        color="#FFFF"
        fontFamily="PilatExtended-Bold"
        fontSize={{ base: "18px", md: "25px", lg: "30px" }}
        fontWeight={"600"}
      >
        MEDIA<chakra.span color={"#0FB1F5"}>APPEARANCES</chakra.span>
      </Text>
      <Flex
        width="100%"
        align="center"
        flexWrap="wrap"
        direction="row"
        mt={{ base: "1em", md: "1em", lg: "1em" }}
        mb={{ base: "4em", md: "8em", lg: "10em" }}
        justify="center"
        px={{ base: "1em", md: "2em" }}
        gap="20px"
      >
        {partners.map((item, index) => (
          <Link href={item.link} pt={4} 
          key={index}>
            <Flex
              w={{ base: "80px", md: "80px" }}
              h={{ base: "80px", md: "80px" }}
              bg="white"
              // backgroundImage="linear-gradient(180deg, rgba(0, 56.10, 255, 0.29), rgba(87.39, 123.10, 249.69, 0))"
              borderRadius="50%"
              align="center"
              justify="center"
            >
              <Image
                width="80%"
                height="80%"
                src={item.img}
                borderRadius="50%"
                key={index}
              />
            </Flex>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
