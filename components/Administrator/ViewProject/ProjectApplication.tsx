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

export default function IfProjectApplication({ data }: { data: any }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(data);
  return (
    <Box p="40px" bg="#130A49" borderRadius="10px" mt="30px" w="600px">
      <Flex w="100%">
        <Flex direction="column">
          <Image alt="star" src={data?.project_logo} h="130px" />
          <Center flexDirection="column" mt="24px" bg="rgba(0, 0, 0, 0.6)">
            <Image
              mt="30px"
              alt={data?.project_title}
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
        </Flex>
        <Flex direction="column" pl="24px">
          <Text fontFamily="Montserrat" fontSize="20px" fontWeight={700}>
            {data?.project_title}
          </Text>
          <Text
            mt="8px"
            fontFamily="Montserrat"
            fontSize="14px"
            fontWeight={400}
            textAlign="justify"
            w="350px"
          >
            {data?.project_description}
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
              {data?.document == "Pending" && <ProgressIcon />}
              {data?.document == "Rejected" && <ProgressIcon rejected={true} />}
              {data?.document == "Voting" && <ProgressIcon voting={true} />}
              {data?.document == "Approved" && <ProgressIcon approved={true} />}
              <Text>{data?.document}</Text>
              {data?.document == "Voting" && (
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
              {data?.introduction == "Pending" && <ProgressIcon />}
              {data?.introduction == "Rejected" && (
                <ProgressIcon rejected={true} />
              )}{" "}
              {data?.introduction == "Voting" && <ProgressIcon voting={true} />}
              {data?.introduction == "Approved" && (
                <ProgressIcon approved={true} />
              )}
              <Text>{data?.introduction}</Text>
              {data?.introduction == "Voting" && (
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
              {data?.discussion == "Pending" && <ProgressIcon />}
              {data?.discussion == "Rejected" && (
                <ProgressIcon rejected={true} />
              )}
              {data?.discussion == "Voting" && <ProgressIcon voting={true} />}
              {data?.discussion == "Approved" && (
                <ProgressIcon approved={true} />
              )}
              <Text>{data?.discussion}</Text>
              {data?.discussion == "Voting" && (
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
              {data?.goals == "Pending" && <ProgressIcon />}
              {data?.goals == "Rejected" && <ProgressIcon rejected={true} />}
              {data?.goals == "Voting" && <ProgressIcon voting={true} />}
              {data?.goals == "Approved" && <ProgressIcon approved={true} />}
              <Text>{data?.goals}</Text>
              {data?.goals == "Voting" && (
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
                      <ModalHeader>Your Choice for Project's Goals</ModalHeader>
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
    </Box>
  );
}
