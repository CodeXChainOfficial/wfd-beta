import Footer from "../../components/Footer";
import React from "react";
import { chakra, Container, Flex, Stack, Text } from "@chakra-ui/react";
import ProjectPanel from "../../components/Administrator/ProjectPanel";

export default function index() {
  return (
    <>
      <Flex
        width="100%"
        id="heroComponent"
        textAlign="left"
        position="relative"
        alignItems="left"
        flexDirection="column"
        height="20vh"
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
              Welcome $Administrator <br />
              <chakra.span fontFamily="PilatExtended-Bold" color={"#0FB1F5"}>
                WEFUND Dashboard
              </chakra.span>
            </Text>
          </Stack>
        </Container>
      </Flex>
      <ProjectPanel />
      <Footer />
    </>
  );
}
