import React from "react";
import { useRouter } from "next/router";
import {
  HStack,
  Image,
  Flex,
  Text,
  Stack,
  Container,
  Box,
  chakra,
} from "@chakra-ui/react";
import { useStore } from "../../contexts/store";

export default function Hero() {
  return (
    <Flex
      width="100%"
      id="heroComponent"
      textAlign="left"
      position="relative"
      alignItems="left"
      flexDirection="column"
      height="40vh"
    >
      <Container
        position={"relative"}
        mt="14vh"
        zIndex={"3"}
        maxW="container.2xl"
      >
        <Stack ml="128px">
          <Text
            fontFamily="PilatExtended-Regular"
            fontWeight="900"
            fontSize={{ base: "16px", md: "36px" }}
            lineHeight="54px"
            letterSpacing={{ base: "0.1em" }}
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
          >
            Dashboard{" "}
            <chakra.span fontFamily="PilatExtended-Bold" color={"#0FB1F5"}>
              WEFUND
            </chakra.span>
          </Text>
          <Text
            fontFamily="PilatExtended-Regular"
            fontWeight="900"
            fontSize={{ base: "16px", md: "36px" }}
            lineHeight="54px"
            letterSpacing={{ base: "0.1em" }}
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
          >
            SWAP
          </Text>
        </Stack>
      </Container>
      <Image
        top="-150"
        width="100%"
        objectFit="contain"
        position="absolute"
        src="/media/Home/bg_coin_2.svg"
      />
    </Flex>
  );
}
