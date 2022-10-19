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
            <Tbody bg={"rgba(18, 13, 48, 1)"} borderRadius={"10px 10px 0px 0px"}>
              <Tr key={0}>
                <Td>Prototype Making</Td>
                <Td>20 / 07 / 22</Td>
                <Td>15 / 08 / 22</Td>
                <Td>$ xxxx</Td>
                <Td>
                  <Flex>
                    <ProgressIcon />
                    Not Started
                  </Flex>
                </Td>
                <Td>
                  <Button
                    onClick={onOpen}
                    colorScheme="telegram"
                    variant="outline"
                  >
                    Edit
                  </Button>
                </Td>
              </Tr>
              <Tr key={0} border="none">
                <Td>Prototype Making</Td>
                <Td>20 / 07 / 22</Td>
                <Td>15 / 08 / 22</Td>
                <Td>$ xxxx</Td>
                <Td>
                  <Flex>
                    <ProgressIcon rejected={true} />
                    Ongoing
                  </Flex>
                </Td>
                <Td>
                  <Button
                    onClick={onOpen}
                    colorScheme="telegram"
                    variant="outline"
                  >
                    Edit
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="none">
          <ModalCloseButton />
          <Box>
            <Flex direction="column" px="64px" py="16px">
              <Table variant="unstyled" size="sm">
                <Thead bg={"rgba(18, 13, 48, 1)"} borderRadius={"10px 10px 0px 0px"}>
                  <Tr>
                    <Th style={{ color: "#ADB2DB" }}>Goal Details</Th>
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
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ex ea commodo consequat|"
                        size="md"
                        w="200px"
                        bgColor={"#ADB2DB"}
                      />
                    </Td>
                    <Td>
                      <Flex mt="-10">
                        <Input
                          placeholder=""
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
                          placeholder=""
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
                          placeholder="2000"
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
                        w="150px"
                      >
                        Approved at 10/12/22 12:25 PM
                      </Flex>
                    </Td>
                    <Td>
                      <Button colorScheme="telegram" variant="outline">
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
