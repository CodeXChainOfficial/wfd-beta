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
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  chakra,
  Stack,
  VStack,
  Divider,
  Input,
  InputGroup,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Progress,
  useDisclosure,
  Center,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FaRegHeart } from "react-icons/fa";
import { ImageTransition, InputTransition } from "../ImageTransition";
const projectsinfomilestonelist = [
  {
    project: "project name",
    milestone: "milestone 1",
    milestonedetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      milestoneamount:"200",
    status: "Pending",
    statusdetailed: "Approved at 10/12/22 12:25 PM",
    statusapproval: "Approved",
    vote: "0",
    yesvote: "0",
    novote: "0",
    start: "20 / 07 / 22",
    end: "15 / 08 / 22",
  },
  {
    project: "project name",
    milestone: "milestone 1",
    milestonedetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      milestoneamount: "200",
    status: "Pending",
    statusdetailed: "Approved at 10/12/22 12:25 PM",
    statusapproval: "Voting",
    vote: "0",
    yesvote: "0",
    novote: "0",
    start: "20 / 07 / 22",
    end: "15 / 08 / 22",
  },
];
interface FillProp {
  children?: React.ReactNode;
  approved?: boolean;
  rejected?: boolean;
  voting?: boolean;
}
export default function MilestoneForIncubation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <Table variant="unstyled" size="sm">
          <Thead bg={"#2E607C"} borderRadius={"10px 10px 0px 0px"}>
            <Tr>
              <Th style={{ color: "#ADB2DB" }}>Goal</Th>
              <Th style={{ color: "#ADB2DB" }}>Start</Th>
              <Th style={{ color: "#ADB2DB" }}>End</Th>
              <Th style={{ color: "#ADB2DB" }}>Amount</Th>
              <Th style={{ color: "#ADB2DB" }}>Status</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody bg={"#130A49"} borderRadius={"10px 10px 0px 0px"}>
            {projectsinfomilestonelist.map((item, index) => (
              <Tr key={index}>
                <Td>{item.milestone}</Td>
                <Td>{item.start}</Td>
                <Td>{item.end}</Td>
                <Td>{item.milestoneamount}</Td>
                <Td>
                  <Flex>
                    {item.status == "Pending" && <ProgressIcon />}
                    {item.status == "Rejected" && (
                      <ProgressIcon rejected={true} />
                    )}
                    {item.status == "Voting" && <ProgressIcon voting={true} />}
                    {item.status == "Approved" && (
                      <ProgressIcon approved={true} />
                    )}{" "}
                    <Text>{item.status}</Text>
                  </Flex>
                </Td>
                <Td>
                <>
                      <Button
                        colorScheme={"linkedin"}
                        variant="outline"
                        onClick={onOpen}
                      >
                        Edit
                      </Button>

                      <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent bg="none">
                          <ModalCloseButton />
                          <Box>
                            <Flex direction="column" px="64px" py="16px">
                              <Table variant="unstyled" size="sm">
                                <Thead
                                  bg={"rgba(18, 13, 48, 1)"}
                                  borderRadius={"10px 10px 0px 0px"}
                                >
                                  <Tr>
                                    <Th style={{ color: "#ADB2DB" }}>
                                      Goal Details
                                    </Th>
                                    <Th style={{ color: "#ADB2DB" }}>Start</Th>
                                    <Th style={{ color: "#ADB2DB" }}>End</Th>
                                    <Th style={{ color: "#ADB2DB" }}>Amount</Th>
                                    <Th style={{ color: "#ADB2DB" }}>Status</Th>
                                    <Th></Th>
                                  </Tr>
                                </Thead>
                                <Tbody
                                  bg={"rgba(18, 13, 48, 1)"}
                                  color="#130A49"
                                  borderRadius={"10px 10px 0px 0px"}
                                >
                                  <Tr key={0}>
                                    <Td>
                                      <Textarea
                                        color="#130A49"
                                        placeholder={item.milestonedetail}
                                        size="md"
                                        w="200px"
                                        bgColor={"#ADB2DB"}
                                      />
                                    </Td>
                                    <Td>
                                      <Flex mt="-10">
                                        <Input
                                          placeholder={item.end}
                                          size="md"
                                          w="150px"
                                          type="date"
                                          bgColor={"#ADB2DB"}
                                        />
                                      </Flex>
                                    </Td>
                                    <Td>
                                      <Flex mt="-10">
                                        <Input
                                          placeholder={item.start}
                                          size="md"
                                          w="150px"
                                          type="date"
                                          bgColor={"#ADB2DB"}
                                        />
                                      </Flex>
                                    </Td>
                                    <Td>
                                      <Flex mt="-10">
                                        <Input
                                          placeholder={item.milestoneamount}
                                          size="md"
                                          w="150px"
                                          type="number"
                                          bgColor={"#ADB2DB"}
                                        />
                                      </Flex>
                                    </Td>
                                    <Td>
                                      <Flex
                                        textAlign={"center"}
                                        w="100px"
                                        color="white"
                                        bgColor={"rgba(0, 0, 0, 0.3)"}
                                        p="5"
                                      >
                                        {item.statusdetailed}
                                      </Flex>
                                    </Td>
                                    <Td>
                                      <Button
                                        colorScheme="telegram"
                                        variant="outline"
                                      >
                                        Save
                                      </Button>
                                    </Td>
                                  </Tr>
                                </Tbody>
                              </Table>
                            </Flex>
                          </Box>
                        </ModalContent>
                      </Modal>
                    </>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
    </Flex>
  );
}
function ProgressIcon({
  children,
  approved = false,
  rejected = false,
  voting = false,
}: FillProp) {
  if (approved) {
    return (
      <Box position="relative" pt="1">
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
