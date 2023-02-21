import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";

const Container = (props: any) => {
  const { colorMode } = useColorMode();
  const color = { light: "white", dark: "white" };
  return (
    <Box
      // bg="linear-gradient(187deg,#540d56,#220925 9%,#080510)"
      bg="#220925"
      color={color[colorMode]}
      width="100%"
      {...props}
    />
  );
};

export default Container;
