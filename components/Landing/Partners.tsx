import React, { useState } from "react";
import { Box, Center, chakra, Flex, Image, Text } from "@chakra-ui/react";

const partners = [
  {
    img: "/media/partners/bnb.png",
  },
  {
    img: "/media/partners/Tron.png",
  },
  {
    img: "/media/partners/near.png",
  },
  {
    img: "/media/partners/router protocol.png",
  },
  {
    img: "/media/partners/fantom.png",
  },
  {
    img: "/media/partners/Oneledger.png",
  },
  {
    img: "/media/partners/polygon.png",
  },
  {
    img: "/media/partners/Tgrade.png",
  },
  {
    img: "/media/partners/CONSENSYS.png",
  },
  {
    img: "/media/partners/ABC.png",
  },
  {
    img: "/media/partners/Danxia capital.png",
  },
  {
    img: "/media/partners/esol lab.png",
  },
  {
    img: "/media/partners/octave.png",
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
        KEY <chakra.span color={"#0FB1F5"}>PARTNERS</chakra.span>
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
          <Flex
            w={{ base: "80px", md: "80px" }}
            h={{ base: "80px", md: "80px" }}
            bg="white"
            // backgroundImage="linear-gradient(180deg, rgba(0, 56.10, 255, 0.29), rgba(87.39, 123.10, 249.69, 0))"
            borderRadius="50%"
            align="center"
            justify="center"
            key={index}
          >
            <Image
              width="80%"
              height="80%"
              src={item.img}
              borderRadius="50%"
              key={index}
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
