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
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FaRegHeart } from "react-icons/fa";
import { ImageTransition, InputTransition } from "../ImageTransition";

interface FillProp {
  children?: React.ReactNode;
  approved?: boolean;
  rejected?: boolean;
  voting?: boolean;
  incubation?: boolean;
}
export default function ProjectInfoListMilestone({
  children,
  incubation = false,
}: FillProp) {
  if (incubation) {
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
        <GoalType incubation={true} />
      </Flex>
    );
  } else {
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
        <GoalType />
      </Flex>
    );
  }
}
function GoalType({ children, incubation = false }: FillProp) {
  const { isOpen, onOpen, onClose } = useDisclosure();
    // {
  //   project: "project name",
  //   goal: "Goal name",
  //   goaldetail:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  //   status: if project on selection/creation phase of goal or milestone then it is "Pending/Voting/Rejected/Approved" else "Pending/Done/On Progress/Rejected",
  //   statusdetailed: "Approved at 10/12/22 12:25 PM",
  //   statusapproval: "Pending/Voting/Rejected/Approved",
  //   vote: "0",
  //   yesvote: "0",
  //   novote: "0",
  //   start: "20 / 07 / 22",
  //   end: "15 / 08 / 22",
  // },
  const projectsinfomilestonelist = [
    {
      project: "project name",
      milestone: "milestone 1",
      milestonedetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
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
  if (incubation) {
    return (
      <VStack color="white" w={"100%"}>
        {projectsinfomilestonelist.map((item, index) => (
          <Accordion allowToggle key={index}>
            <AccordionItem
              bg="#120D30"
              rounded={"lg"}
              border="0px"
              borderColor="gray.200"
              w={"100%"}
            >
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Box p={6}>
                      <Stack
                        direction={{
                          base: "column",
                          md: "row",
                          lg: "row",
                        }}
                        justify={"center"}
                        w={"100%"}
                      >
                        <Flex justify={"center"}></Flex>
                        <Stack
                          direction={"row"}
                          justify={"center"}
                          spacing={16}
                        >
                          <Stack spacing={0} align={"left"} w="140px" pl="4">
                            <Text
                              fontSize={"16px"}
                              fontWeight={600}
                              color={"gray.500"}
                            >
                              {item.milestone}
                            </Text>
                          </Stack>
                          <Stack spacing={0} align={"left"} w="150px" pl="4">
                            <Text
                              fontSize={"16px"}
                              fontWeight={600}
                              color={"gray.500"}
                            >
                              Status: {item.status}
                            </Text>
                          </Stack>
                          <Stack
                            spacing={0}
                            align={"left"}
                            direction="row"
                            w="130px"
                            pl="4"
                          >
                            <Box
                              width={{ base: "18px", md: "20px" }}
                              height={{
                                base: "18px",
                                md: "20px",
                              }}
                              style={{
                                marginRight: "5px",
                                paddingTop: "1px",
                                paddingLeft: "2px",
                                borderRadius: "50%",
                                display: "inline-block",
                              }}
                            >
                              {item.statusapproval == "Pending" && (
                                <ProgressIcon />
                              )}
                              {item.statusapproval == "Rejected" && (
                                <ProgressIcon rejected={true} />
                              )}
                              {item.statusapproval == "Voting" && (
                                <ProgressIcon voting={true} />
                              )}
                              {item.statusapproval == "Approved" && (
                                <ProgressIcon approved={true} />
                              )}
                            </Box>
                            <Text
                              fontSize={"16px"}
                              fontWeight={600}
                              color={"gray.500"}
                            >
                              {item.statusapproval}
                            </Text>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Box>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex
                  gap={{
                    base: 2,
                    sm: 2,
                    md: 8,
                    lg: 8,
                  }}
                  background="rgba(0, 0, 0, 0.5)"
                  p="4"
                >
                  <Stack
                    direction={"row"}
                    align={"left"}
                    w="240px"
                    pl="4"
                    bg="rgba(0, 0, 0, 0.33)"
                    rounded="md"
                  >
                    <Text fontSize={"14px"} fontWeight={200} color="white">
                      {item.milestonedetail}
                    </Text>
                  </Stack>
                  <Stack>
                    <Flex
                      direction={{
                        base: "column",
                        sm: "row",
                        lg: "row",
                      }}
                      justify={"left"}
                      background={
                        item.status == "Pending"
                          ? "#4E0588"
                          : "rgba(0, 0, 0, 0.25)"
                      }
                      height={"25px"}
                      rounded="md"
                      pt="2"
                      pb="6"
                      pl="2"
                      align={"left"}
                      w="130px"
                    >
                      <Text
                        fontSize={{
                          base: "12px",
                          sm: "14px",
                          lg: "16px",
                        }}
                        fontWeight={200}
                        color="white"
                      >
                        Pending
                      </Text>
                    </Flex>
                    <Flex
                      direction={{
                        base: "column",
                        sm: "row",
                        lg: "row",
                      }}
                      justify={"left"}
                      background={
                        item.status == "On Progress"
                          ? "#4E0588"
                          : "rgba(0, 0, 0, 0.25)"
                      }
                      height={"25px"}
                      rounded="md"
                      pt="2"
                      pl="2"
                      pb="6"
                      align={"center"}
                      w="130px"
                    >
                      <Text
                        fontSize={{
                          base: "12px",
                          sm: "14px",
                          lg: "16px",
                        }}
                        fontWeight={200}
                        color="white"
                        alignContent={"center"}
                      >
                        On Progress
                      </Text>
                    </Flex>
                    <Flex
                      direction={{
                        base: "column",
                        sm: "row",
                        lg: "row",
                      }}
                      background={
                        item.status == "Done"
                          ? "#4E0588"
                          : "rgba(0, 0, 0, 0.25)"
                      }
                      justify={"left"}
                      height={"25px"}
                      rounded="md"
                      py="2"
                      pl="2"
                      pb="6"
                      align={"center"}
                      w="130px"
                    >
                      <Text
                        fontSize={{
                          base: "12px",
                          sm: "14px",
                          lg: "16px",
                        }}
                        fontWeight={200}
                        color="white"
                        alignContent={"center"}
                      >
                        Done
                      </Text>
                    </Flex>
                    <Flex
                      direction={{
                        base: "column",
                        sm: "row",
                        lg: "row",
                      }}
                      justify={"left"}
                      background={
                        item.status == "Rejected"
                          ? "#4E0588"
                          : "rgba(0, 0, 0, 0.25)"
                      }
                      height={"25px"}
                      rounded="md"
                      pt="2"
                      pb="6"
                      align={"left"}
                      w="130px"
                      pl="2"
                    >
                      <Text
                        fontSize={{
                          base: "12px",
                          sm: "14px",
                          lg: "16px",
                        }}
                        fontWeight={200}
                        color="white"
                        alignContent={"center"}
                      >
                        Rejected
                      </Text>
                    </Flex>
                  </Stack>

                  <Stack>
                    <Flex
                      direction={{
                        base: "column",
                        sm: "column",
                        lg: "column",
                      }}
                      rounded="md"
                      justify={"center"}
                      background="rgba(0, 0, 0, 0.25)"
                      pt="16px"
                      spacing={0}
                      align={"left"}
                      w="130px"
                      pl="4"
                    >
                      <Text
                        fontSize={{
                          base: "12px",
                          sm: "14px",
                          lg: "16px",
                        }}
                        fontWeight={600}
                        color="white"
                        width={{
                          base: "8px",
                          sm: "100px",
                          lg: "300px",
                        }}
                      >
                        {item.yesvote}{" "}
                        <chakra.span fontWeight={200}> Yes</chakra.span>
                      </Text>
                      <Text
                        fontSize={{
                          base: "12px",
                          sm: "14px",
                          lg: "16px",
                        }}
                        fontWeight={600}
                        color="white"
                        width={{
                          base: "8px",
                          sm: "100px",
                          lg: "300px",
                        }}
                      >
                        {item.novote}{" "}
                        <chakra.span fontWeight={200}> No</chakra.span>
                      </Text>
                      <Text
                        fontSize={{
                          base: "12px",
                          sm: "14px",
                          lg: "16px",
                        }}
                        fontWeight={600}
                        color="white"
                        width={{
                          base: "8px",
                          sm: "100px",
                          lg: "300px",
                        }}
                      >
                        {item.vote}{" "}
                        <chakra.span fontWeight={200}>
                          {" "}
                          Voted out of
                        </chakra.span>{" "}
                        7
                      </Text>
                      {item.statusapproval == "Voting" && (
                        <>
                          <Button
                            colorScheme={"linkedin"}
                            variant="outline"
                            onClick={onOpen}
                          >
                            Vote
                          </Button>
                          <Modal
                            isCentered
                            onClose={onClose}
                            isOpen={isOpen}
                            motionPreset="slideInBottom"
                          >
                            <ModalOverlay />
                            <ModalContent>
                              <ModalHeader>
                                Your Choice for Project's {item.milestone}
                              </ModalHeader>
                              <ModalCloseButton />
                              <ModalBody>
                                <Text>Milestone Detail</Text>
                                <Text>{item.milestonedetail}</Text>
                                <Button variant="solid" colorScheme="teal">
                                  Yes
                                </Button>
                                <Button variant="solid" colorScheme="red">
                                  No
                                </Button>
                                <Button
                                  colorScheme="blue"
                                  mr={3}
                                  onClick={onClose}
                                >
                                  Close
                                </Button>
                              </ModalBody>
                              <ModalFooter></ModalFooter>
                            </ModalContent>
                          </Modal>
                        </>
                      )}
                    </Flex>
                  </Stack>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </VStack>
    );
  } else {
    return (
      <>
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
                    <Td>
                      <Flex>
                        {item.status == "Pending" && <ProgressIcon />}
                        {item.status == "Rejected" && (
                          <ProgressIcon rejected={true} />
                        )}
                        {item.status == "Voting" && (
                          <ProgressIcon voting={true} />
                        )}
                        {item.status == "Approved" && (
                          <ProgressIcon approved={true} />
                        )}{" "}
                        <Text>{item.status}</Text>
                      </Flex>
                    </Td>
                    <Td>
                      {item.status == "Voting" && (
                        <>
                          <Button
                            colorScheme={"linkedin"}
                            variant="outline"
                            onClick={onOpen}
                          >
                            Vote
                          </Button>
                          <Modal
                            isCentered
                            onClose={onClose}
                            isOpen={isOpen}
                            motionPreset="slideInBottom"
                          >
                            <ModalOverlay />
                            <ModalContent>
                              <ModalHeader>
                                Your Choice for Project's {item.milestone}
                              </ModalHeader>
                              <ModalCloseButton />
                              <ModalBody>
                                <Text>Milestone Detail</Text>
                                <Text>{item.milestonedetail}</Text>
                                <Button variant="solid" colorScheme="teal">
                                  Yes
                                </Button>
                                <Button variant="solid" colorScheme="red">
                                  No
                                </Button>
                                <Button
                                  colorScheme="blue"
                                  mr={3}
                                  onClick={onClose}
                                >
                                  Close
                                </Button>
                              </ModalBody>
                              <ModalFooter></ModalFooter>
                            </ModalContent>
                          </Modal>
                        </>
                      )}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Flex>
        </Flex>
      </>
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
      <Box position="relative" mr="2" pt="1">
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
