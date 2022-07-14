import React from "react";
import {Avatar, Flex, VStack, Text, Box, Spacer} from "@chakra-ui/react";

export default function ProjectTitle({data}: { data: any }) {
  return (
    <>
      <Flex
        alignSelf={{
          base: "center",
          md: "center",
          lg: "flex-start",
        }}
        color="white"
      >
        <Avatar
          size="2xl"
          name="Example"
          mt={1}
        />
        <VStack align="flex-start" paddingStart={8}>
          <Text
            fontSize="40px"
            fontWeight={"900"}
            textAlign={{base: "center", lg: "left"}}
          >
            WeFund
          </Text>
          <Text
            textAlign="left"
            fontWeight="400"
            fontSize={{base: "16px", md: "16px", lg: "18px"}}
          >
            WeFund is a community crowdfunding incubator for blockchain and
            real-world projects. WeFund's mission is to host high-quality projects
            projects projects that align with WeFund's investor community.
            Community-driven decisions on the platform for 100% transparency.
            Project funds managed exclusively on Terra's Anchor protocol using
            smart contracts and following project milestones.
          </Text>
        </VStack>
      </Flex>
    </>
  );
}
