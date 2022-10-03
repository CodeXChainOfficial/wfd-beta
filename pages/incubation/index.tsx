import React, { useEffect } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import "react-multi-carousel/lib/styles.css";
import Container from "../../components/Container";

import theme from "../../theme";
import Footer from "../../components/Footer";

import Banner from "../../components/Incubation/Banner";
import Whatis from "../../components/Incubation/Whatis";
import RequirementList from "../../components/Incubation/Requirements";
import IncubatedCarousel from "../../components/Incubation/IncubatedCarousel";
import WhyIncubate from "../../components/Incubation/WhyIncubate";
import Partners from "../../components/Launchpad/Partners";
import MentorPartners from "../../components/Incubation/MentorPartners";
import IncubationFaq from "../../components/Incubation/IncubationFaq";

export default function Launchpad() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container>
        <Banner />
        <Box height="100px" />
        <Whatis />
        <RequirementList />

        <Box height="100px" />
        <WhyIncubate />

        <Box height="100px" />
        <IncubatedCarousel />
        <MentorPartners />
     
        <IncubationFaq />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}
