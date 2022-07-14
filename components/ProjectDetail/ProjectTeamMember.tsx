import React from "react";
import {
  Avatar,
  Box,
  Container,
  HStack,
  Text,
  Spacer,
  VStack,
  chakra,
} from "@chakra-ui/react";

export default function ProjectTeamMember({ data }: { data: any }) {
  return (
    <VStack minW="400px" w="full">
      <Text
        mb={"20px"}
        fontSize="28px"
        fontWeight={"900"}
        lineHeight={"36px"}
        fontFamily="PilatExtended-Heavy"
        textAlign={{ base: "center", lg: "left" }}
        color="white"
      >
        Team <span style={{ color: "#69E4FF" }}>Members</span>
      </Text>
      <Container
        bgGradient="linear(#430E82, #1D0551)"
        pl="12px"
        pr="12px"
        mb="52px"
        centerContent
      >
        <Box
          h="full"
          w="full"
          bgGradient="linear(#180331, #04021F)"
          m="12px"
          pl="24px"
          pr="24px"
          pb="12px"
        >
          <HStack pt="12px">
            <Avatar size="sm" name="Example" mr="8px" />
            <VStack spacing={0}>
              <Text fontFamily={"Gilroy"} fontWeight="800" fontSize="20px">
                Name
              </Text>
              <Text fontSize="12px" alignSelf="flex-start">
                Position
              </Text>
            </VStack>
            <Spacer />
            <Text fontSize="12px" alignSelf="flex-end">
              <chakra.span color="#48CCFF">@Example</chakra.span>
            </Text>
          </HStack>
        </Box>
      </Container>
    </VStack>
  );
}
