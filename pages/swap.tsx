import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function RouterSwap() {
  return (
    <Flex w="100%" justify="center" mt="100px">
      <iframe
        id="widget__iframe"
        height="610px"
        width="420px"
        src="https://app.routerprotocol.com/swap?isWidget=true&widgetId=43&fromChain=56&toChain=137&fromToken=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&toToken=0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4"
        // style = {{ border: "none", border-radius: "11px", box-shadow: "3px 3px 10px 4px rgba(0, 0, 0, 0.05)" }}
      ></iframe>
    </Flex>
  );
}
