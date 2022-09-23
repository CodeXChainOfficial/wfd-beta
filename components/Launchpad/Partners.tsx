import React, { useState } from "react";
import { Box, Center, chakra, Flex, Image, Text } from "@chakra-ui/react";

const partners = [
  {
    img: "/media/Home/wefund_partner.png",
  },
  {
    img: "/media/Home/esol_partner.png",
  },
  {
    img: "/media/Home/vebank_partner.png",
  },
];

export default function Partners() {
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
        flexWrap={"wrap"}
        flexDirection="row"
        backgroundSize={"contain"}
        mt={{ base: "1em", md: "1em", lg: "1em" }}
        mb={{ base: "4em", md: "8em", lg: "10em" }}
        justifyContent={{ base: "center", md: "center", lg: "center" }}
      >
        {partners.map((e, i) => (
          <Flex
            key={i}
            textAlign="center"
            overflow={"hidden"}
            alignItems={"center"}
            flexDirection="column"
            justifyContent={"center"}
            m="1.8em"
            p={{ base: ".2em", md: ".5em 1em", lg: "1em" }}
            width={{ base: "65%", md: "18em", lg: "19em" }}
            height={{ base: "14em", md: "20em", lg: "18em" }}
            borderRadius={{ base: "10px", md: "15px", lg: "15px" }}
          >
            <div
              style={{
                position: "relative",
                zIndex: 10,
                width: 200,
                height: 200,
                backgroundImage:
                  "linear-gradient(180deg, rgba(0, 56.10, 255, 0.29), rgba(87.39, 123.10, 249.69, 0))",
                borderRadius: 9999,
              }}
            >
              <Image
                position="absolute"
                width="128px"
                height="128px"
                top="50%"
                left="50%"
                transform="translateX(-50%) translateY(-50%)"
                zIndex={100}
                src={e.img}
                objectFit="contain"
              />
            </div>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
