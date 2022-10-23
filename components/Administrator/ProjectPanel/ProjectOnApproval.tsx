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
import { PROGRESS_STATUS, PROGRESS_TEXT } from "../../../types/ProgreessStatus";
import { PROJECT_STATUS } from "../../../types/ProjectStatus";

export default function ProjectOnApproval() {
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
            {projectData.map((item, index) => {
              let progress;
              if (
                item.project_status <= PROJECT_STATUS.IncubationGoalSetup &&
                item.rejected == true
              )
                progress = PROGRESS_STATUS.REJECTED;
              else if (
                item.project_status <= PROJECT_STATUS.IncubationGoalSetup &&
                item.rejected == false
              )
                progress = PROGRESS_STATUS.VOTING;
              else if (item.project_status > PROJECT_STATUS.IncubationGoalSetup)
                progress = PROGRESS_STATUS.APPROVED;
              else progress = PROGRESS_STATUS.PENDING;
              return (
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
                      <>
                        <ProgressIcon progress={progress} />
                        {PROGRESS_TEXT[progress]}
                      </>
                    </Flex>
                  </Td>
                  <Td>{GetProjectStatusText(item.project_status)}</Td>
                  <Td>
                    <Link
                      href={`/administrator/viewproject/approval?project_id=${item.project_id}`}
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
              );
            })}
          </Tbody>
        </Table>
      </Flex>
    </Flex>
  );
}
interface FillProp {
  children?: React.ReactNode;
  progress: PROGRESS_STATUS;
}

export function StatusLight({
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
export function ProgressIcon({ children, progress }: FillProp) {
  if (progress == PROGRESS_STATUS.APPROVED) {
    return (
      <Box position="relative" mr="2" pt="1">
        <Image
          w="15px"
          alt="registration icon"
          src="/media/OwnerInfo/checkgreen.svg"
        />
        {children}
      </Box>
    );
  } else if (progress == PROGRESS_STATUS.REJECTED) {
    return (
      <Box position="relative" mr="2" pt="1">
        <Image
          w="15px"
          alt="registration icon"
          src="/media/OwnerInfo/checkred.svg"
        />
        {children}
      </Box>
    );
  } else if (progress == PROGRESS_STATUS.VOTING) {
    return (
      <Box position="relative" mr="2" ml="8" pt="1">
        <Image
          w="15px"
          alt="registration icon"
          src="/media/OwnerInfo/voting.svg"
        />
        {children}
      </Box>
    );
  } else {
    return (
      <Box position="relative" mr="2" pt="1">
        <Image
          w="15px"
          alt="registration icon"
          src="/media/OwnerInfo/hourglass.svg"
        />
        {children}
      </Box>
    );
  }
}
