import React, { useEffect } from "react";
import { Box, chakra, ChakraProvider, Text } from "@chakra-ui/react";

import Container from "../components/Container";

import Footer from "../components/Footer";

import Hero from "../components/Landing/Hero";
import UpcomingProject from "../components/SeeProjects/UpcomingProject";
import AboutWeFund from "../components/Landing/About";
import CircularServiceDescription from "../components/Landing/CircularServiceDescription";
import KeyPartners from "../components/Landing/Partners";
import Team from "../components/Landing/Team";
import ServiceList from "../components/Landing/ServicesSmall";
import Incubation from "../components/Landing/Incubation";

export default function Launchpad() {
  return (
    <Container>
      <Hero />
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
      <Box height={{ base: "0px",'2xl':"300px" }} />
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
