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
  Box,
} from "@chakra-ui/react";
import MilestoneDetail from "./MilestoneDetail";

export default function MilestoneList() {
  return (
    <Flex
      w="100%"
      color="white"
      py={"25px"}
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
        <Table variant="simple" size="sm">
          <Thead bg={"#130A49"} borderRadius={"10px 10px 0px 0px"}>
            <Tr>
              <Th style={{ color: "#ADB2DB" }}>No.</Th>
              <Th style={{ color: "#ADB2DB" }}>Name</Th>
              <Th style={{ color: "#ADB2DB" }}>Proposed Start Date</Th>
              <Th style={{ color: "#ADB2DB" }}>Proposed End Date</Th>
              <Th style={{ color: "#ADB2DB" }}>Milestone Fund Amount</Th>
              <Th style={{ color: "#ADB2DB" }}>Status</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody bg={"#130A49"} borderRadius={"10px 10px 0px 0px"}>
            <Tr key={0}>
              <Td>1</Td>
              <Td>Prototype Making</Td>
              <Td>20 / 07 / 22</Td>
              <Td>15 / 08 / 22</Td>
              <Td>$ 20.000,-</Td>
              <Td>
                <Flex>
                  <StatusLight />
                  Not Started
                </Flex>
              </Td>
              <Td>
                <MilestoneDetail />
              </Td>
            </Tr>
            <Tr key={0}>
              <Td>1</Td>
              <Td>Prototype Making</Td>
              <Td>20 / 07 / 22</Td>
              <Td>15 / 08 / 22</Td>
              <Td>$ 20.000,-</Td>
              <Td>
                <Flex>
                  <StatusLight going={true} />
                  Ongoing
                </Flex>
              </Td>
              <Td>
                <MilestoneDetail />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Flex>
    </Flex>
  );
}
interface FillProp {
  children?: React.ReactNode;
  going?: boolean;
  ended?: boolean;
  voting?: boolean;
}

function StatusLight({
  children,
  going = false,
  ended = false,
  voting = false,
}: FillProp) {
  if (going) {
    return (
      <Box
        position="relative"
        width="11px"
        height="11px"
        bg="#53FD6E"
        mr="1"
        borderRadius="full"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="#53FD6E"
      >
        {children}
      </Box>
    );
  } else if (ended) {
    return (
      <Box
        position="relative"
        width="11px"
        height="11px"
        bg="#53C0FD"
        mr="1"
        borderRadius="full"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="#53C0FD"
      >
        {children}
      </Box>
    );
  } else if (voting) {
    return (
      <Box
        position="relative"
        width="11px"
        height="11px"
        bg="#53C0FD"
        mr="1"
        borderRadius="full"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="#53C0FD"
      >
        {children}
      </Box>
    );
  } else {
    return (
      <Box
        position="relative"
        width="11px"
        height="11px"
        bg="#FD9053"
        mr="1"
        borderRadius="full"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="#FD9053"
      >
        {children}
      </Box>
    );
  }
}
