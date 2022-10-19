import React from "react";
import {
  Image,
  Flex,
  Portal,
} from "@chakra-ui/react";

export default function SmokeLeft() {
  return (
    <Flex
      width="100%"
      textAlign="left"
      alignItems="left"
      flexDirection="column"
      zIndex={"0"}
    >
      <Portal>
        <Image
          width="50%"
          top="0" left="0"
          zIndex={"0"}
          position="absolute"
          objectFit="contain"
          src="/media/smoke.svg"
        />
      </Portal>
    </Flex>
  );
}
