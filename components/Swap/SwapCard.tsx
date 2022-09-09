import React from "react";
import {
  Container,
  HStack,
  Text,
  Flex,
  Select,
  Spacer,
} from "@chakra-ui/react";

export enum SwapType {
  from,
  to,
}

interface SwapProps {
  type: SwapType;
}

export default function SwapCard(props: SwapProps) {
  return (
    <Container borderRadius="10px" bgGradient="linear(#430E82, #060049)">
      <Flex direction="column" m="8px" pt="32px">
        {props.type == SwapType.from ? (
          <Text fontFamily={"Montserrat"} fontWeight="800" fontSize="26px">
            From
          </Text>
        ) : (
          <Text fontFamily={"Montserrat"} fontWeight="800" fontSize="26px">
            To
          </Text>
        )}
        <Container h="16px" />
        <Flex alignContent={"center"} direction={{ base: "column", md: "row" }}>
          <Flex flex="1">
            <Select bg="#3F147F" borderColor="#3F147F" color="white">
              <option value="polygon">Polygon</option>
              <option value="ethereum">Ethereum</option>
              <option value="binance">Binance Coin</option>
            </Select>
          </Flex>
          <Container
            h={{ base: props.type == SwapType.from ? 8 : 0, md: 0 }}
            w={{ base: 8, lg: 24 }}
          />
          {props.type == SwapType.from ? (
            <Flex flex="1">
              <Select
                bgGradient="linear(#000000, #160335)"
                borderColor="#000000"
                color="white"
              >
                <option value="fee">Fee Token:</option>
              </Select>
            </Flex>
          ) : (
            <Spacer />
          )}
        </Flex>
        <Container h="32px" />
        <Container
          pl="32px"
          pr="32px"
          pt="16px"
          pb="16px"
          bgGradient="linear(#000000, #160335)"
        >
          <Flex alignContent={"center"} direction="column">
            <HStack w="full">
              <Flex w="full">
                <Text
                  w="full"
                  color="#80869B"
                  fontFamily={"Montserrat"}
                  fontWeight="600"
                  fontSize="32px"
                >
                  0.0
                </Text>
              </Flex>
              <Flex w="150px" alignItems="flex-end" pb={2}>
                <Select color="#69E4FF" variant="unstyled">
                  <option value="usdt">USDT</option>
                </Select>
              </Flex>
            </HStack>
            <HStack w="full">
              <Flex w="full">
                <Text
                  w="full"
                  color="#80869B"
                  fontFamily={"Montserrat"}
                  fontWeight="600"
                  fontSize="14px"
                >
                  -$0.0
                </Text>
              </Flex>
              <Flex w="full">
                <Text
                  w="full"
                  color="#80869B"
                  fontFamily={"Montserrat"}
                  fontWeight="600"
                  fontSize="14px"
                  textAlign="end"
                >
                  Balance: -
                </Text>
              </Flex>
            </HStack>
          </Flex>
        </Container>
        <Container h="64px" />
      </Flex>
    </Container>
  );
}
