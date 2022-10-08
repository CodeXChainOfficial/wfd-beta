/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { useRouter } from "next/router";
import {
  HStack,
  Image,
  Flex,
  Text,
  Stack,
  Container,
  Box,
  Portal,
} from "@chakra-ui/react";
import { useStore } from "../contexts/store";

export default function SmokeLeft() {
  const router = useRouter();
  const { state, dispatch } = useStore();
  return (
    <Flex
      width="100%"
      textAlign="left"
      alignItems="left"
      flexDirection="column"
      zIndex={"0"}
    ><Portal>

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
