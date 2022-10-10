import React from "react";
import {
  Flex,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export default function MilestoneList() {
  return (
    <Flex
      w="100%"
      color="white"
      px={"45px"}
      py={"45px"}
      borderRadius="10px"
      justify="center"
      align="center"
      flexDirection="column"
      display={{ base: "none", md: "block", lg: "block" }}
    >
      <Flex
        justify="center"
        align="center"
        direction="column"
        display={{ base: "none", md: "block", lg: "block" }}
      >
        <Table variant="simple">
          <Thead
            bg={"#130A49"}
            borderRadius={"10px 10px 0px 0px"}
          >
            <Tr>
              <Th style={{ color: "#FFFFFF" }}>No.</Th>
              <Th style={{ color: "#FFFFFF" }}>Name</Th>
              <Th style={{ color: "#FFFFFF" }}>Proposed Start Date</Th>
              <Th style={{ color: "#FFFFFF" }}>Proposed End Date</Th>
              <Th style={{ color: "#FFFFFF" }}>Milestone Fund Amount</Th>
              <Th style={{ color: "#FFFFFF" }}>Status</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody
            bg={"#130A49"}
            borderRadius={"10px 10px 0px 0px"}
          >
            <Tr key={0}>
              <Td>1</Td>
              <Td>Prototype Making</Td>
              <Td>20 / 07 / 22</Td>
              <Td>15 / 08 / 22</Td>
              <Td>$ 20.000,-</Td>
              <Td>Not Started Yet</Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </Flex>
    </Flex>
  );
}
