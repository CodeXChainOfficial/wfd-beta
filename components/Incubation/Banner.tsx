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
  Center,
  chakra,
  IconButton,
} from "@chakra-ui/react";
import { ImageTransition } from "../ImageTransition";
import { FaArrowRight, FaTwitter } from "react-icons/fa";

export default function Banner() {
  const router = useRouter();
  return (
    <Flex
      width="100%"
      id="heroComponent"
      textAlign="center"
      position="relative"
      alignItems="center"
      flexDirection="column"
      height={{ base: "65vh", md: "60vh", lg: "70vh",xl:"80vh",'2xl':"110vh" }}
    >
      <Container
        position={"relative"}
        mt={{ base: "5vh", md: "12vh", lg: "16vh", '2xl': "26vh" }}
        zIndex={"3"}
        maxW="container.lg"
      >
        <Stack alignItems={"center"}>
          <Text
            fontFamily="PilatExtended-Regular"
            fontSize={{ base: "16px", md: "36px" }}
            lineHeight={{ base: "30px", md: "1em", lg: "1em" }}
            letterSpacing={{ base: "0.022em" }}
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
            color={"white"}
            mb={"50px"}
          >
            We Help Take Your Blockchain Project
            <chakra.span fontFamily="PilatExtended-Bold" color={"#00C1FF"}>
              {" "}
              to The Next Level
            </chakra.span>
          </Text>
          <Box
            background={" rgba(0, 0, 19, 0.78)"}
            border={"3px solid rgba(15, 177, 245, 0.28)"}
            width={{ base: "90%", md: "800px", lg: "1000px",'2xl': "1200px" }}
            height={"250px"}
            rounded="10px"
            paddingTop={"3%"}
          >
            <Text
              fontFamily="PilatExtended-Light"
              fontSize={{ base: "12px", md: "20px", '2xl': "24px"}}
              fontWeight={"500"}
              lineHeight={{ base: "35px", md: "1em", lg: "1.1em" }}
              letterSpacing={{ base: "0.022em" }}
              textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
            >
              Incubating the Best{" "}
              <chakra.span fontFamily="PilatExtended-Bold" color={"#00C1FF"}>
                WEB3{" "}
              </chakra.span>
              and{" "}
              <chakra.span fontFamily="PilatExtended-Bold" color={"#00C1FF"}>
                {" "}
                WEB2{" "}
              </chakra.span>
              Projects
            </Text>
            <Text mt={"16px"} pl={6}>
              WeFund is the leading Web3 and Web2 incubation and founder
              community. We accept and incubate Web3 and Web2 projects looking
              to adopt blockchain technology with real-world application and
              utility
            </Text>

            <HStack w="100%" justify={"center"} mt="48px" spacing="20px">
              <ImageTransition
                unitid={"applywhat"}
                border2="#23A4EC"
                background2="#06142D"
                border1="#06142D"
                background1="#23A4EC"
                border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
                background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
                selected={false}
                width={{ base: "350px", md: "400px", lg: "400px" }}
                height={{ base: "32px", md: "40px", lg: "40px" }}
                rounded={"33px"}
                onClick={() => router.push("/apply")}
              >
                <Text
                  w="100%"
                  fontSize={{
                    base: "14px",
                    sm: "15px",
                    md: "15px",
                    lg: "15px",
                  }}
                  textAlign="center"
                  fontFamily={"PilatExtended-Bold"}
                  fontWeight={"800"}
                  marginLeft={7}
                  color="#FFFFFF"
                  _hover={{ color: "#FFFFFF" }}
                  transition={"all 1s"}
                >
                  Apply Here
                  <IconButton
                    variant="unstyled"
                    marginLeft={4}
                    aria-label="Twitter"
                    width={{ lg: "14px", base: "12px" }}
                    icon={<FaArrowRight />}
                  />
                </Text>
              </ImageTransition>
            </HStack>
          </Box>
        </Stack>
      </Container>
      <Center position={"absolute"} top={{ base: "60", sm: "0", md:"40", lg: "-48", '2xl':"-60" }}>
        <video autoPlay muted loop>
          <source src="/media/starrybackground.webm" type="video/webm"></source>
        </video>
      </Center>
    </Flex>
  );
}
