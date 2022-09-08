import React from "react";
import { chakra, Box, Stack, Flex, Center, Text, Link } from "@chakra-ui/react";

export default function PTabs() {
  return (
    <Flex>
      <Flex justify="left" w="full">
        <Box
          w={{ base: "full", md: "75%", lg: "50%" }}
          textAlign={{ base: "left", md: "center" }}
        >
          {" "}
          <Center>
          </Center>
          <Stack
            justifyContent={{ base: "left", md: "left" }}
            direction={{ base: "row", sm: "row" }}
            spacing={6}
            mt={2}
          >
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link
                w={{ base: "100px", md: "200px" }}
                h={{ base: "30px", md: "40px" }}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={2}
                py={2}
                border="solid transparent"
                fontWeight="regular"
                rounded="full"
                color="rgba(255, 255, 255, 0.84)"
                fontSize={{ base: "12px", md: "18px" }}
                bg=" rgba(255, 255, 255, 0.2)"
                _hover={{
                  bg: "rgba(0, 151, 199, 0.85)",
                }}
                _selected={{
                  bg: "rgba(0, 151, 199, 0.85)",
                }}
              >
                PRE LAUNCH
              </Link>
            </Box>
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link
                w={{ base: "100px", md: "200px" }}
                h={{ base: "30px", md: "40px" }}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={2}
                py={2}
                border="solid transparent"
                fontWeight="regular"
                rounded="full"
                color="rgba(255, 255, 255, 0.84)"
                fontSize={{ base: "12px", md: "18px" }}
                bg=" rgba(255, 255, 255, 0.2)"
                _hover={{
                  bg: "rgba(0, 151, 199, 0.85)",
                }}
                _selected={{
                  bg: "rgba(0, 151, 199, 0.85)",
                }}
              >
                LAUNCHED
              </Link>
            </Box>
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link
                w={{ base: "100px", md: "200px" }}
                h={{ base: "30px", md: "40px" }}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={2}
                py={2}
                border="solid transparent"
                fontWeight="regular"
                rounded="full"
                color="rgba(255, 255, 255, 0.84)"
                fontSize={{ base: "12px", md: "18px" }}
                bg=" rgba(255, 255, 255, 0.2)"
                _hover={{
                  bg: "rgba(0, 151, 199, 0.85)",
                }}
                _selected={{
                  bg: "rgba(0, 151, 199, 0.85)",
                }}
              >
                COMPLETED
              </Link>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
