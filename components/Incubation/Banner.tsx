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
      height={{ base: "25em", md: "55vh", lg: "90vh" }}
    >
      <Container
        position={"relative"}
        mt={{ base: "10vh", md: "12vh", lg: "15vh" }}
        zIndex={"3"}
        maxW="container.lg"
      >
        <Stack alignItems={"center"}>
          <Text
            fontFamily="PilatExtended-Regular"
            fontSize={{ base: "16px", md: "36px" }}
            lineHeight={{ base: "30px", md: "1em", lg: "1.1em" }}
            letterSpacing={{ base: "0.022em" }}
            textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
            color={"white"}
            mb={"50px"}
          >
           We Help Take Your Inspiring Projects <chakra.span fontFamily="PilatExtended-Bold" color={"#00C1FF"}>     to The Next Level</chakra.span>
          </Text>
          <Box
            background={" rgba(0, 0, 19, 0.78)"}
            border={"3px solid rgba(15, 177, 245, 0.28)"}
            width={"1100px"}
            height={"250px"}
            rounded="10px"
            paddingTop={"3%"}
          >
            <Text
              fontFamily="PilatExtended-Light"
              fontSize={{ base: "12px", md: "20px" }}
              fontWeight={"500"}
              lineHeight={{ base: "30px", md: "1em", lg: "1.1em" }}
              letterSpacing={{ base: "0.022em" }}
              textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
            >
              Incubating the Best Web3 and Web2 Projects
            </Text>
            <Text mt={"12px"}>
              WeFund is the leading Web3 and Web2 incubator and founder
              community. We accept and incubate Web2 projects looking to bridge <br/>
              blockchain or existing Web3 technologies with real-world
              application and utility.
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
                  Apply to be Project on WeFund
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
      <Center position={"absolute"} top="52">
        <Image src="/media/Home/Circular_BG.svg" />
      </Center>
    </Flex>
  );
}
