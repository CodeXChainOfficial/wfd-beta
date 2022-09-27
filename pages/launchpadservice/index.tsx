import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import "react-multi-carousel/lib/styles.css";
import Container from "../../components/Container";

import theme from "../../theme";
import Footer from "../../components/Footer";

import Hero from "../../components/Launchpad/Service/Hero";
import Highlights from "../../components/Launchpad/Highlights";
import UpcomingProject from "../../components/Launchpad/UpcomingProject";
import OngoingProject from "../../components/Launchpad/OngoingProject";
import CompletedProject from "../../components/Launchpad/CompletedProject";
import KYCBanner from "../../components/Launchpad/KYCBanner";
import Staking from "../../components/Launchpad/Staking";
import CompletedSales from "../../components/Launchpad/CompletedSales";
import ProjectStories from "../../components/Launchpad/ProjectStories";
import PTabs from "../../components/Launchpad/ProjectTabs";
import Whyjoin from "../../components/Launchpad/Service/Whyjoin";
import HowItWork from "../../components/Launchpad/Service/HowitWork";
import CircularOptions from "../../components/Launchpad/Service/CircularFundraiseOptions";

export default function Launchpad() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container>
        <Hero />
        <HowItWork />
        <CircularOptions circularSize={500} />
        <Whyjoin />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}
