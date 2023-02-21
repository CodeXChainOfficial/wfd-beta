import React, { useEffect } from "react";
import { Box, chakra, ChakraProvider, Text } from "@chakra-ui/react";

import Container from "../components/Container";
import Footer from "../components/Footer";
import InvestStep1 from "./invest/step1";

export default function Launchpad() {
  return (
    <Container>
      <InvestStep1 />
      <Footer />
    </Container>
  );
}
