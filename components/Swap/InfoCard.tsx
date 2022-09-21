import { Box, Flex, Text } from "@chakra-ui/react";

export default function InfoCard() {
  return (
    <Box
      borderRadius="10px"
      p={{ base: "12px", lg: "70px" }}
      w="full"
      bgGradient="linear(#210B3C, #070334)"
    >
      <Flex justify="center" direction={{ base: "column", lg: "row" }}>
        <Flex flex="1" justify="center">
          <Text>Fee : 3.3685 MATIC = $3.1</Text>
        </Flex>
        <Flex flex="1" justify="center">
          <Text>Price Impact : -%</Text>
        </Flex>
        <Flex flex="1" justify="center">
          <Text>Minimum Received : -</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
