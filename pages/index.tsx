import React, { useEffect } from "react";
import { Box, chakra, ChakraProvider, Text } from "@chakra-ui/react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import "react-multi-carousel/lib/styles.css";
import Container from "../components/Container";

import theme from "../theme";
import Footer from "../components/Footer";

import Hero from "../components/Launchpad/Hero";
import UpcomingProject from "../components/SeeProjects/UpcomingProject";
import HowWeDo from "../components/Launchpad/HowWeDo";
import AboutWeFund from "../components/Launchpad/About";
import CircularServiceDescription from "../components/Launchpad/CircularServiceDescription";
import CircularServiceDescriptionMini from "../components/Launchpad/CircularServiceDescriptionMini";
import Partners from "../components/Launchpad/Partners";
import Team from "../components/Launchpad/Team";
import ServiceList from "../components/Launchpad/ServicesSmall";

export default function Launchpad() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container>
        <Hero />
        <HowWeDo />
        <AboutWeFund />
        <Box height="200px" />
        <Box
          visibility={{ lg: "visible", md: "collapse", base: "collapse" }}
          maxH={{ lg: "none", md: "0", base: "0" }}
          maxW={{ lg: "none", md: "0", base: "0" }}
          overflow="hidden"
        >
          <CircularServiceDescription circularSize={500} />
        </Box>
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
        <Box height="64px" />
        <Partners />
        <Team />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}
