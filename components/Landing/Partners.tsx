import React, { useState } from "react";
import { Box, Center, chakra, Flex, Image, Text } from "@chakra-ui/react";

const Partners = [
  {
    img: "/media/Partners/bnb.png",
  },
  {
    img: "/media/Partners/tron.png",
  },
  {
    img: "/media/Partners/near.png",
  },
  {
    img: "/media/Partners/router protocol.png",
  },
  {
    img: "/media/Partners/fantom.png",
  },
  {
    img: "/media/Partners/oneledger.png",
  },
  {
    img: "/media/Partners/polygon.png",
  },
  {
    img: "/media/Partners/Tgrade.png",
  },
  {
    img: "/media/Partners/CONSENSYS.png",
  },
  {
    img: "/media/Partners/ABC.png",
  },
  {
    img: "/media/Partners/Danxia capital.png",
  },
  {
    img: "/media/Partners/esol lab.png",
  },
  {
    img: "/media/Partners/octave.png",
  },
];

export default function KeyPartners() {
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
        flexWrap="wrap"
        direction="row"
        mt={{ base: "1em", md: "1em", lg: "1em" }}
        mb={{ base: "4em", md: "8em", lg: "10em" }}
        justify="center"
        px={{ base: "1em", md: "2em" }}
        gap="20px"
      >
        {Partners.map((item, index) => (
          <Flex
            w={{ base: "150px", md: "200px" }}
            h={{ base: "150px", md: "200px" }}
            bg="white"
            // backgroundImage="linear-gradient(180deg, rgba(0, 56.10, 255, 0.29), rgba(87.39, 123.10, 249.69, 0))"
            borderRadius="50%"
            align="center"
            justify="center"
            key={index}
          >
            <Image
              width="70%"
              height="70%"
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
