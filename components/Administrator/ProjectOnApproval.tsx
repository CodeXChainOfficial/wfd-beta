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
  Image,
  Box,
  Link,
} from "@chakra-ui/react";

const projectsapproval = [
  {
    name: "project name",
    img: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    status: "Not Started",
    progress: "To Vote Documentation",
    link: "",
  },
  {
    name: "project name 2",
    img: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    status: "Rejected",
    progress: "To Vote Documentation",
    link: "",
  },
  {
    name: "project names 3",
    img: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    status: "Approved",
    progress: "To Vote Documentation",
    link: "/administrator/viewproject",
  },
];

export default function ProjectOnApproval() {
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
            {projectsapproval.map((item, index) => (
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
                      src={item.img}
                      borderRadius="50%"
                    />
                  </Flex>
                </Td>
                <Td minW={"200px"}>{item.name}</Td>
                <Td maxW={"300px"}>{item.desc}</Td>
                <Td>
                  <Flex minW={"120px"}>
                    {item.status == "Not Started" && <ProgressIcon />}
                    {item.status == "Rejected" && (
                      <ProgressIcon rejected={true} />
                    )}
                    {item.status == "Approved" && (
                      <ProgressIcon approved={true} />
                    )}
                    {item.status}
                  </Flex>
                </Td>
                <Td>{item.progress}</Td>
                <Td>
                  <Link href={item.link}>
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
interface FillProp {
  children?: React.ReactNode;
  going?: boolean;
  approved?: boolean;
  rejected?: boolean;
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
function ProgressIcon({
  children,
  approved = false,
  rejected = false,
  voting = false,
}: FillProp) {
  if (approved) {
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
  } else if (rejected) {
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
  } else if (voting) {
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
