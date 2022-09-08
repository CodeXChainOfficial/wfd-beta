import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";

const Container = (props: any) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "purple.900", dark: "purple.900" };

  const color = { light: "white", dark: "white" };
  return <Box bg="#070016" color={color[colorMode]} width="100%" {...props} />;
};

export default Container;
