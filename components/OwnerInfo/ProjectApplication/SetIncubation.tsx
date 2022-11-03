import React, { useState, useEffect } from "react";
import { Button, Flex, Input, Text, Textarea, VStack } from "@chakra-ui/react";

export default function SetIncubation({ data }: { data: any }) {
  return (
    <VStack
      spacing="20px"
      w="100%"
      color="white"
      mt="10px"
      fontSize={{ base: "12px", md: "16px" }}
    >
      <VStack
        w="100%"
        bg="#130A49"
        px={{ base: "2", md: "8" }}
        py="8"
        borderRadius="10px"
        spacing="30px"
      >
        <Flex gap="30px" w="100%" align="center">
          <Text whiteSpace="nowrap">Goal Name</Text>
          <Input w="100%" placeholder="Type Name" fontSize="12px" />
        </Flex>
        <Flex gap={{ base: "10px", md: "96px" }} w="100%">
          <Flex w="50%" direction="column" gap="23px">
            <Text whiteSpace="nowrap">Start Date</Text>
            <Input type="date" placeholder="DD/MM/YY" fontSize="12px" />
          </Flex>
          <Flex w="50%" direction="column" gap="23px">
            <Text whiteSpace="nowrap">End Date</Text>
            <Input type="date" placeholder="DD/MM/YY" fontSize="12px" />
          </Flex>
        </Flex>
        <Flex gap="30px" w="100%">
          <Text whiteSpace="nowrap" pt="10px">
            Goal Details
          </Text>
          <Textarea w="100%" placeholder="Goal Details" fontSize="12px" />
        </Flex>
      </VStack>
      <Button
        w={{ base: "80px", md: "113px" }}
        h={{ base: "30px", md: "49px" }}
        variant="outline"
        alignSelf="flex-end"
        borderColor="#00A3FF"
        borderRadius="30px"
        fontSize={{ base: "8px", md: "12px" }}
      >
        ADD+
      </Button>
    </VStack>
  );
}
