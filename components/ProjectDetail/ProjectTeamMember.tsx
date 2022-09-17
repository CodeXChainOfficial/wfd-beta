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
  Flex, Divider,
} from "@chakra-ui/react";

export default function ProjectTeamMember({ data }: { data: any }) {
  return (
    <VStack mb="64px" minW="300px" w="full">
      <Text
        mb={"64px"}
        fontSize="28px"
        fontWeight={"900"}
        lineHeight={"36px"}
        fontFamily="PilatExtended-Heavy"
        textAlign={{ base: "center", lg: "left" }}
        color="white"
      >
        Team <span style={{ color: "#69E4FF" }}>Members</span>
      </Text>
      <Container pl="12px" pr="12px" mb="52px" centerContent>
        <Box
          id="transparent-scrollbar"
          maxH="300px"
          overflowY="auto"
          w="full"
          backgroundColor="#140453"
          borderRadius="10px"
          position="relative"
          m="12px"
          pl="36px"
          pr="36px"
          pb="12px"
        >
          {data?.teammember_states?.map((member, index, row) => (
            <>
              <HStack pt="16px" pb={index + 1 !== row.length ? "16px" : "0px"} key={index}>
                <Avatar size="md" name={member.teammember_name} mr="16px" />
                <Flex direction="column">
                  <Text fontFamily={"Gilroy"} fontWeight="800" fontSize="24px">
                    {member.teammember_name}
                  </Text>
                  <Text fontSize="16px" alignSelf="flex-start">
                    {member.teammember_role}
                  </Text>
                </Flex>
                {/* <Spacer />
              <Text fontSize="12px" alignSelf="flex-end">
                <chakra.span color="#48CCFF">{member.teammember_description.slice(0,100)}</chakra.span>
              </Text> */}
              </HStack>
              {index + 1 !== row.length ? <Divider /> : null}
            </>
          ))}
        </Box>
      </Container>
    </VStack>
  );
}
