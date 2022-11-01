import React from "react";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";

const VoteButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme={"linkedin"}
        variant="outline"
        onClick={onOpen}
        fontSize={{ base: "10px", md: "12px" }}
        w="80px"
        h="30px"
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
          <ModalHeader>Your Choice for Project's Document</ModalHeader>
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
  );
};

export default VoteButton;
