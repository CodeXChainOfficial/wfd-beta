import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Text,
  Th,
  Thead,
  Tr,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Progress,
  useDisclosure,
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import React from "react";
import { ProgressIcon } from "../ProjectPanel/ProjectOnApproval";

const projectsinfo = [
  {
    name: "project name",
    img: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    status: "Selected",
    document: "Voting",
    introduction: "Approved",
    discussion: "Rejected",
    goals: "Pending",
    link: "",
  },
];

export default function IfProjectApplication() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box p="40px" bg="#130A49" borderRadius="10px" mt="30px" w="600px">
      {projectsinfo.map((item, index) => (
        <Flex key={index}>
          <Flex direction="column">
            <Image alt="star" src="/media/OwnerInfo/star.svg" h="130px" />
            {item.status == "Selected" && (
              <Center flexDirection="column" mt="24px" bg="rgba(0, 0, 0, 0.6)">
                <Image
                  mt="30px"
                  alt="selected"
                  src="/media/OwnerInfo/rocket.svg"
                  h="48px"
                />
                <Text
                  pt="8px"
                  pb="16px"
                  as="span"
                  fontFamily="Montserrat"
                  fontSize="12px"
                  fontWeight={400}
                  textAlign="center"
                  w="98px"
                >
                  Congratulation! <br />
                  You’ve been selected by Wefund <br /> <br />
                  We will proceed you to Incubation
                </Text>
              </Center>
            )}
          </Flex>
          <Flex direction="column" pl="24px">
            <Text fontFamily="Montserrat" fontSize="20px" fontWeight={700}>
              {item.name}
            </Text>
            <Text
              mt="8px"
              fontFamily="Montserrat"
              fontSize="14px"
              fontWeight={400}
              textAlign="justify"
              w="350px"
            >
              {item.desc}
            </Text>
            <Box h="24px" />
            <Divider color="#FCFCFC33" />
            <Box h="24px" />
            <Text fontFamily="Montserrat" fontSize="16px" fontWeight={800}>
              Progress
            </Text>
            <Flex direction={"column"} mt="2" gap="2">
              <Flex>
                <Image
                  top="25%"
                  left="25%"
                  alt="registration icon"
                  src="/media/OwnerInfo/document.svg"
                  mr={4}
                />
                <Text w="145px">Document</Text>
                {item.document == "Pending" && <ProgressIcon />}
                {item.document == "Rejected" && (
                  <ProgressIcon rejected={true} />
                )}
                {item.document == "Voting" && <ProgressIcon voting={true} />}
                {item.document == "Approved" && (
                  <ProgressIcon approved={true} />
                )}
                <Text>{item.document}</Text>
                {item.document == "Voting" && (
                  <>
                    <Button
                      ml="12"
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
                          Your Choice for Project's Document
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Button variant="solid" colorScheme="teal">
                            Yes
                          </Button>
                          <Button variant="solid" colorScheme="red">
                            No
                          </Button>
                          <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                          </Button>
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                      </ModalContent>
                    </Modal>
                  </>
                )}
              </Flex>
              <Flex>
                <Image
                  top="25%"
                  left="25%"
                  alt="registration icon"
                  src="/media/OwnerInfo/introcall.svg"
                  mr={4}
                />
                <Text w="145px">Introduction Calls</Text>
                {item.introduction == "Pending" && <ProgressIcon />}
                {item.introduction == "Rejected" && (
                  <ProgressIcon rejected={true} />
                )}{" "}
                {item.introduction == "Voting" && (
                  <ProgressIcon voting={true} />
                )}
                {item.introduction == "Approved" && (
                  <ProgressIcon approved={true} />
                )}
                <Text>{item.introduction}</Text>
                {item.introduction == "Voting" && (
                  <>
                    <Button
                      ml="12"
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
                          Your Choice for Project's Introduction Calls
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Button variant="solid" colorScheme="teal">
                            Yes
                          </Button>
                          <Button variant="solid" colorScheme="red">
                            No
                          </Button>
                          <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                          </Button>
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                      </ModalContent>
                    </Modal>
                  </>
                )}
              </Flex>
              <Flex>
                <Image
                  top="25%"
                  left="25%"
                  alt="registration icon"
                  src="/media/OwnerInfo/discussion.svg"
                  mr={4}
                />
                <Text w="145px">Discussion Calls</Text>
                {item.discussion == "Pending" && <ProgressIcon />}
                {item.discussion == "Rejected" && (
                  <ProgressIcon rejected={true} />
                )}
                {item.discussion == "Voting" && <ProgressIcon voting={true} />}
                {item.discussion == "Approved" && (
                  <ProgressIcon approved={true} />
                )}
                <Text>{item.discussion}</Text>
                {item.discussion == "Voting" && (
                  <>
                    <Button
                      ml="12"
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
                          Your Choice for Project's Discussion Calls
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Button variant="solid" colorScheme="teal">
                            Yes
                          </Button>
                          <Button variant="solid" colorScheme="red">
                            No
                          </Button>
                          <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                          </Button>
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                      </ModalContent>
                    </Modal>
                  </>
                )}
              </Flex>
              <Flex>
                <Image
                  top="25%"
                  left="25%"
                  alt="registration icon"
                  src="/media/OwnerInfo/incugoal.svg"
                  mr={4}
                />
                <Text w="145px">Incubation Goal</Text>
                {item.goals == "Pending" && <ProgressIcon />}
                {item.goals == "Rejected" && <ProgressIcon rejected={true} />}
                {item.goals == "Voting" && <ProgressIcon voting={true} />}
                {item.goals == "Approved" && <ProgressIcon approved={true} />}
                <Text>{item.goals}</Text>
                {item.goals == "Voting" && (
                  <>
                    <Button
                      ml="12"
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
                          Your Choice for Project's Goals
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Button variant="solid" colorScheme="teal">
                            Yes
                          </Button>
                          <Button variant="solid" colorScheme="red">
                            No
                          </Button>
                          <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                          </Button>
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                      </ModalContent>
                    </Modal>
                  </>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
}
