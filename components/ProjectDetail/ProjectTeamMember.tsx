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
  Flex,
} from "@chakra-ui/react";

export default function ProjectTeamMember({ data }: { data: any }) {
  return (
    <VStack minW="300px" w="full">
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
          {data?.teammember_states?.map((member, index) => (
            <HStack pt="12px" key={index}>
              <Avatar size="sm" name={member.teammember_name} mr="8px" />
              <Flex direction="column">
                <Text fontFamily={"Gilroy"} fontWeight="800" fontSize="20px">
                  {member.teammember_name}
                </Text>
                <Text fontSize="12px" alignSelf="flex-start">
                  {member.teammember_role}
                </Text>
              </Flex>
              {/* <Spacer />
              <Text fontSize="12px" alignSelf="flex-end">
                <chakra.span color="#48CCFF">{member.teammember_description.slice(0,100)}</chakra.span>
              </Text> */}
            </HStack>
          ))}
        </Box>
      </Container>
    </VStack>
  );
}
