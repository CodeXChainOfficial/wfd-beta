import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";

const Container = (props: any) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "purple.900", dark: "purple.900" };

  const color = { light: "white", dark: "white" };
  return (
    <Box
      bg="linear-gradient(90deg, #1F0021 0%, #120054 104.34%)"
      color={color[colorMode]}
      width="100%"
      {...props}
    />
  );
};

export default Container;
