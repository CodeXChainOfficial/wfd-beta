import React, { ReactNode } from "react";
import Head from "next/head";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <Navbar />
    {children}
  </div>
);

export default Layout;
