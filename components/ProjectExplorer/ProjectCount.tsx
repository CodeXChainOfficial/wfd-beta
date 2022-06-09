import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useStore } from "../../contexts/store";

export default function ProjectCount() {
  const { state, dispatch } = useStore();
  return (
    <Flex
      w="100%"
      my={"26px"}
      justifyContent={"space-between"}
      borderBottom={{ base: "1px solid rgba(255, 255, 255, 0.1)", lg: "0px" }}
    >
      <Text fontSize={{ base: "15px", lg: "20px" }}>Projects Incubated</Text>

      <Text fontSize={{ base: "15px", lg: "20px" }}>
        {state.projectData.length} Project
        {state.projectData.length === 1 ? "" : "s"}
      </Text>
    </Flex>
  );
}
