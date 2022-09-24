import React from "react";
import { Image, Flex, Text, Stack, Container, Box } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      width="100%"
      id="heroComponent"
      textAlign="center"
      position="relative"
      alignItems="center"
      flexDirection="column"
      bgGradient="Linear(#058cd8, #4d188f, #2a0a31)"
      height={{ base: "30em", md: "90vh", lg: "100vh" }}
    >
      <Image
        top="1em"
        width="100%"
        position="absolute"
        objectFit="contain"
        src="/media/Home/2.png"
      />
      <Container
        position={"relative"}
        mt={{ base: "15vh", lg: "20vh" }}
        zIndex={"3"}
        maxW="container.lg"
      >
        <Stack>
          <Text
            fontFamily="PilatExtended-Bold"
            fontSize={{ base: "20px", md: "64px" }}
            lineHeight={{ base: "30px", md: "1em", lg: "1.1em" }}
            letterSpacing={{ base: "0.1em" }}
            textTransform={"uppercase"}
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
          >
            Multichain Community
          </Text>
          <Text
            fontFamily="PilatExtended-Black"
            fontSize={{ base: "21px", md: "64px" }}
            lineHeight={{ base: "30px", md: "1em", lg: "1.1em" }}
            letterSpacing={{ base: "0.1em" }}
            textTransform={"uppercase"}
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
            color={"brand"}
          >
            Incubator
          </Text>
          <Text
            fontFamily="PilatExtended-Black"
            fontSize={{ base: "21px", md: "64px" }}
            lineHeight={{ base: "30px", md: "1em", lg: "1.1em" }}
            letterSpacing={{ base: "0.1em" }}
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
            textTransform={"uppercase"}
          >
            Launchpad
          </Text>
        </Stack>
      </Container>
      <Image
        bottom={"0"}
        width="100%"
        position="absolute"
        objectFit="contain"
        src="/media/Home/1.svg"
      />
      <Box
        position={"absolute"}
        bottom={"0"}
        width={"100%"}
        height={"121px"}
        background={
          "linear-gradient(180deg, rgba(30, 0, 39, 0) 0%, #1E0027 60.72%)"
        }
      />
    </Flex>
  );
}
