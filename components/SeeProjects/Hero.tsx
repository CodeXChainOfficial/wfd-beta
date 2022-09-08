/* eslint-disable @typescript-eslint/no-empty-function */
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
} from "@chakra-ui/react";
import { ImageTransition } from "../ImageTransition";
import { useStore } from "../../contexts/store";

export default function Hero() {
  const router = useRouter();
  const { state, dispatch } = useStore();
  return (
    <Flex
      width="100%"
      id="heroComponent"
      textAlign="center"
      position="relative"
      alignItems="center"
      flexDirection="column"
      height={{ base: "25em", md: "40vh", lg: "45vh" }}
    >
      <Image
        top="1em"
        width="100%"
        position="absolute"
        objectFit="contain"
        opacity={0.5}
        src="/media/Home/2.png"
      />
      
      <Container
        position={"relative"}
        mt={{ base: "10vh", md: "14vh", lg: "20vh" }}
        zIndex={"3"}
        maxW="container.lg"
      >
        <Stack>
          <Text
            fontFamily="PilatExtended-Bold"
            fontSize={{ base: "16px", md: "48px" }}
            lineHeight={{ base: "30px", md: "1em", lg: "1.1em" }}
            letterSpacing={{ base: "0.1em" }}
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
          >
            See Projects
          </Text>
          <Text
            fontFamily="PilatExtended-Black"
            fontSize={{ base: "20px", md: "48px" }}
            lineHeight={{ base: "30px", md: "1em", lg: "1.1em" }}
            letterSpacing={{ base: "0.1em" }}
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
            color={"#0FB1F5"}
          >
            in WeFund
          </Text>
        </Stack>
      </Container>
    </Flex>
  );
}
