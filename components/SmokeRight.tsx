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
} from "@chakra-ui/react";
import { useStore } from "../contexts/store";

export default function Smokeright() {
  const router = useRouter();
  const { state, dispatch } = useStore();
  return (
    <Flex
      width="50%"
      position="relative"
      alignItems="flex-end"
      flexDirection="column"
    >
      <Image
      width="100%"
      position="absolute"
      objectFit="contain"
      src="/media/smoke.svg"
    />
    </Flex>
  );
}
