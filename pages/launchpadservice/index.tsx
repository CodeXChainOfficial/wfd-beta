import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import "react-multi-carousel/lib/styles.css";
import Container from "../../components/Container";

import theme from "../../theme";
import Footer from "../../components/Footer";

import Hero from "../../components/Launchpad/Service/Hero";
// import Whyjoin from "../../components/Launchpad/Service/Whyjoin";
import HowItWork from "../../components/Launchpad/Service/HowitWork";
import CircularOptions from "../../components/Launchpad/Service/CircularFundraiseOptions";

export default function Launchpad() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container>
      <Hero />
      <CircularOptions />
      {/* <Whyjoin /> */}
      <Footer />
    </Container>
  );
}
