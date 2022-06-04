import React, { ReactNode } from "react";
import Head from "next/head";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Container from "./Container";
type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <Container>
    <Navbar />
    {children}
  </Container>
);

export default Layout;
