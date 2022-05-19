import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";

export default function Eco() {
  return (
    <Flex
      width="100%"
      position="relative"
      alignItems="center"
      flexDirection="column"
      backgroundSize={"contain"}
      padding={{ base: "1em", md: "8em", lg: "10em" }}
      my={"4em"}
    >
      <Box boxSize="full">
        <Image src="/media/partners/eco.jpg" />
      </Box>
    </Flex>
  );
}
