import React from "react";
import ConnectWallet from "./ConnectWallet";
import { Flex, Box } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex w="100%" justifyContent={"end"}>
      <Box padding={4}>
        <ConnectWallet />
      </Box>
    </Flex>
  );
}
