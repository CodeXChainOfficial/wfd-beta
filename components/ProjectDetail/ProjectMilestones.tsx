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

export default function ProjectMileStones({
  data,
  onOpen,
}: {
  data: any;
  onOpen: any;
}) {
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
      backgroundColor="#002E87"
      display={{ base: "none", md: "block", lg: "block" }}
    >
      <Flex
        justify="center"
        align="center"
        direction="column"
        display={{ base: "none", md: "block", lg: "block" }}
      >
        <Text align="center" fontSize="20px" fontWeight={"300"} mb={"20px"}>
          Project Milestones List
        </Text>
        <Table variant="simple">
          <Thead
            bgGradient={"linear(#000000, #0A062E)"}
            borderRadius={"10px 10px 0px 0px"}
          >
            <Tr>
              <Th style={{ color: "#FFFFFF" }}>No.</Th>
              <Th style={{ color: "#FFFFFF" }}>Name</Th>
              <Th style={{ color: "#FFFFFF" }}>Proposed Start Date</Th>
              <Th style={{ color: "#FFFFFF" }}>Proposed End Date</Th>
              <Th style={{ color: "#FFFFFF" }}>Milestone Fund Amount</Th>
              <Th style={{ color: "#FFFFFF" }}>Milestone Voting</Th>
              <Th style={{ color: "#FFFFFF" }}>Status</Th>
              <Th style={{ color: "#FFFFFF" }}>External Data</Th>
            </Tr>
          </Thead>
          <Tbody
            bgGradient={"linear(#000000, #0A062E)"}
            borderRadius={"10px 10px 0px 0px"}
          >
            {data?.milestone_states?.map((milestone: any, index: number) => (
              <Tr key={index}>
                <Td>{milestone.milestone_step}</Td>
                <Td>{milestone.milestone_name} </Td>
                <Td>{milestone.milestone_startdate}</Td>
                <Td>{milestone.milestone_enddate}</Td>
                <Td>{milestone.milestone_amount}</Td>
                <Td>
                  {milestone.milestone_votingavailable && (
                    <Button
                      onClick={onOpen}
                      bgGradient={"linear(#21C9FF, #1383D4)"}
                    >
                      Vote &amp; Details
                    </Button>
                  )}
                </Td>
                <Td>{milestone.milestone_statusmessage}</Td>
                <Td color="#69E4FF">{}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
    </Flex>
  );
}
