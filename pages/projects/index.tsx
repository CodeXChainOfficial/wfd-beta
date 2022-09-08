import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import "react-multi-carousel/lib/styles.css";
import Container from "../../components/Container";

import theme from "../../theme";
import Footer from "../../components/Footer";

import Hero from "../../components/SeeProjects/Hero";
import UpcomingProject from "../../components/SeeProjects/UpcomingProject";
import ProjectAccelerate from "../../components/SeeProjects/ProjectAccelerated";
import ProjectActive from "../../components/SeeProjects/CompletedProject";
import SmokeLeft from "../../components/SmokeLeft";
import Smokeright from "../../components/SmokeRight";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container>
        <Hero />
        <UpcomingProject />
        <ProjectAccelerate />
        <ProjectActive />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}
