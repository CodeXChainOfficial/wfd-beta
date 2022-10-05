import React, { useEffect } from "react";
import { Box, chakra, ChakraProvider, Text } from "@chakra-ui/react";

import Container from "../components/Container";

import theme from "../theme";
import Footer from "../components/Footer";

import Hero from "../components/Launchpad/Hero";
import UpcomingProject from "../components/SeeProjects/UpcomingProject";
import HowWeDo from "../components/Launchpad/HowWeDo";
import AboutWeFund from "../components/Launchpad/About";
import CircularServiceDescription from "../components/Launchpad/CircularServiceDescription";
import KeyPartners from "../components/Launchpad/Partners";
import Team from "../components/Launchpad/Team";
import ServiceList from "../components/Launchpad/ServicesSmall";
import Incubation from "../components/Launchpad/Incubation";

export default function Launchpad() {
  return (
    <Container>
      <Hero />
      {/* <HowWeDo /> */}
      <Incubation />
      <AboutWeFund />
      <CircularServiceDescription />
      <Box
        visibility={{ lg: "collapse", md: "visible", base: "visible" }}
        maxH={{ lg: "0", md: "none", base: "none" }}
        maxW={{ lg: "0", md: "none", base: "none" }}
        overflow="hidden"
      >
        <ServiceList />
      </Box>
      <UpcomingProject
        header={
          <Text
            color="#FFFF"
            fontFamily="PilatExtended-Regular"
            fontSize={{ base: "18px", md: "25px", lg: "30px" }}
            fontWeight={"600"}
          >
            PROJECTS ON <chakra.span color={"#0FB1F5"}>WEFUND</chakra.span>
          </Text>
        }
      />
      <KeyPartners />
      <Team />
      <Footer />
    </Container>
  );
}
