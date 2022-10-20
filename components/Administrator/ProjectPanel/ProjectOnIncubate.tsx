import React from "react";
import {
  Flex,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Box,
  Link,
} from "@chakra-ui/react";
import { useProjectData } from "../../../hook/FetchProject";
import { GetProjectStatusText } from "../../../utils/utility";
import { ProgressIcon } from "./ProjectOnApproval";

export default function ProjectOnIncubate() {
  const projectData = useProjectData();

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
        <Table variant="unstyled" size="lg">
          <Thead bg={"#130A49"} borderRadius={"10px 10px 0px 0px"}>
            <Tr>
              <Th style={{ color: "#ADB2DB" }}></Th>
              <Th style={{ color: "#ADB2DB" }}>Project Name</Th>
              <Th style={{ color: "#ADB2DB" }}>Description</Th>
              <Th style={{ color: "#ADB2DB" }}>Status</Th>
              <Th style={{ color: "#ADB2DB" }}>Last Progress</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody bg={"#130A49"} borderRadius={"10px 10px 0px 0px"}>
            {projectData.map((item, index) => (
              <Tr key={index}>
                <Td>
                  <Flex
                    w={{ base: "45px", md: "45px" }}
                    h={{ base: "45px", md: "45px" }}
                    bg="white"
                    // backgroundImage="linear-gradient(180deg, rgba(0, 56.10, 255, 0.29), rgba(87.39, 123.10, 249.69, 0))"
                    borderRadius="50%"
                    align="center"
                    justify="center"
                  >
                    <Image
                      width="80%"
                      height="80%"
                      src={item.project_logo}
                      borderRadius="50%"
                    />
                  </Flex>
                </Td>
                <Td minW={"200px"}>{item.project_title}</Td>
                <Td maxW={"300px"}>
                  {item.project_description.slice(0, 100)}...
                </Td>
                <Td>
                  <Flex minW={"120px"}>
                    {item.project_status < 3 && (
                      <>
                        <ProgressIcon />
                        Not Started
                      </>
                    )}
                    {item.project_status >= 3 &&
                      item.project_status < 5 &&
                      item.rejected == true && (
                        <>
                          <ProgressIcon rejected={true} />
                          Rejected
                        </>
                      )}
                    {item.project_status >= 3 &&
                      item.project_status < 5 &&
                      item.rejected == false && (
                        <>
                          <ProgressIcon voting={true} />
                          Voting
                        </>
                      )}
                    {item.project_status >= 5 && (
                      <>
                        <ProgressIcon approved={true} />
                        Approved
                      </>
                    )}
                  </Flex>
                </Td>
                <Td>{GetProjectStatusText(item.project_status)}</Td>
                <Td>
                  <Link
                    href={`/administrator/viewproject/incubation?project_id=${item.project_id}`}
                  >
                    <Button
                      colorScheme="cyan"
                      color="blue.200"
                      variant="outline"
                    >
                      View
                    </Button>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
    </Flex>
  );
}
