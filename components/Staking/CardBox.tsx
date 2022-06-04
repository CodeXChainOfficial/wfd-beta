import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  HStack,
  VStack,
  Stack,
  Button,
  Image,
  Checkbox,
} from "@chakra-ui/react";

export default function CardBox({ data }: { data: any }) {
  let url = "/media/Card/Other.png";
  switch (data?.card_type?.toLowerCase()) {
    case "platium":
      url = "/media/Card/Platinum.png";
      break;
    case "gold":
      url = "/media/Card/Gold.png";
      break;
    case "silver":
      url = "/media/Card/Silver.png";
      break;
    case "bronze":
      url = "/media/Card/Bronze.png";
      break;
  }
  return (
    <VStack spacing="10px" justify="center">
      <Image src={url} h="200px" />
      <Text fontSize="30px">{data.card_type}&nbsp;Card</Text>
      <Text fontSize="12px">Validated staked amount</Text>
      <Text fontSize="24px">{data.amount}&nbsp;WFD</Text>
    </VStack>
  );
}
