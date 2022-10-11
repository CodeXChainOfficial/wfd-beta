import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";

import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Banner from "../../components/Incubation/Banner";
import Whatis from "../../components/Incubation/Whatis";
import RequirementList from "../../components/Incubation/Requirements";
import IncubatedCarousel from "../../components/Incubation/IncubatedCarousel";
import WhyIncubate from "../../components/Incubation/WhyIncubate";
import KeyPartners from "../../components/Landing/Partners";
import MentorPartners from "../../components/Incubation/MentorPartners";
import IncubationFaq from "../../components/Incubation/IncubationFaq";
import UpcomingProject from "../../components/SeeProjects/UpcomingProject";
import Whyjoin from "../../components/Incubation/Whyjoin";

export default function Launchpad() {
  return (
    <Container>
      <Banner />
      <Whatis />
      <Box height="100px" />
      <Whyjoin />
      <RequirementList />
      <WhyIncubate />
      <Box height="100px" />
      <UpcomingProject />
      <MentorPartners /> 
      <IncubationFaq />
      <Footer />
    </Container>
  );
}
