import React from "react";
import {
  chakra,
  Box,
  Stack,
  Flex,
  Center,
  Text,
  Link,
} from "@chakra-ui/react";

export default function PTabs() {
  return (
    <Flex>
      <Flex
        justify="center"
        w="full"
      >
        <Box
          w={{ base: "full", md: "75%", lg: "50%" }}
          px={4}
          py={20}
          textAlign={{ base: "left", md: "center" }}
        > <Center marginTop={'48px'}>
        <Text
          color="#63CDFA"
          fontFamily="PilatExtended-Bold"
          fontSize={{ base: '18px', md: '25px', lg: '30px' }}>
          PROJECT<chakra.span color={'white'}> OVERVIEW</chakra.span> 
        </Text>
      </Center>
          <Stack
            justifyContent={{ base: "left", md: "center" }}
            direction={{ base: "column", sm: "row" }}
            spacing={2}
            mt={2}
          >
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link
                href="#Upcoming"
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                color="rgba(255, 255, 255, 0.84)"
                fontSize={{ base: '14px', md: '21px' }}
                bg="rgba(255, 255, 255, 0.05)"
                _hover={{
                  bg: "rgba(255, 255, 255, 0.5)"
                }}
              >
                Upcoming Project
              </Link>
            </Box>
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link
                href="#Ongoing"
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                color="rgba(255, 255, 255, 0.84)"
                fontSize={{ base: '14px', md: '21px' }}
                bg="rgba(255, 255, 255, 0.05)"
                _hover={{
                  bg:  "rgba(255, 255, 255, 0.5)",
                }}
              >
                Ongoing Project
              </Link>
            </Box>
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link
                href="#CompletedProject"
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                color="rgba(255, 255, 255, 0.84)"
                fontSize={{ base: '14px', md: '21px' }}
                bg="rgba(255, 255, 255, 0.05)"
                _hover={{
                  bg:  "rgba(255, 255, 255, 0.5)",
                }}
              >
                Completed Project
              </Link>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}