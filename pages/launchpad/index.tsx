import React, { useEffect } from "react";

import Container from "../../components/Container";

import Footer from "../../components/Footer";

import Hero from "../../components/Landing/Hero";
import Highlights from "../../components/Launchpad/Highlights";
import UpcomingProject from "../../components/Launchpad/UpcomingProject";
import OngoingProject from "../../components/Launchpad/OngoingProject";
import CompletedProject from "../../components/Launchpad/CompletedProject";
import KYCBanner from "../../components/Launchpad/KYCBanner";
import CompletedSales from "../../components/Launchpad/CompletedSales";
import PTabs from "../../components/Launchpad/ProjectTabs";

const Launchpad = () => {
  return (
    <Container>
      <Hero />
      <Highlights />
      <PTabs />
      <UpcomingProject />
      <OngoingProject />
      <CompletedProject />
      <KYCBanner />
      <CompletedSales />
      {/* <Staking /> */}
      <Footer />
    </Container>
  );
};

export default Launchpad;
