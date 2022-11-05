import React, { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Button,
  Box,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  chakra,
  Stack,
  VStack,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import { useCommunityData } from "../../../hook/FetchProject";
import { ProgressIcon } from "../ProjectPanel/ProjectOnApproval";
import { PROJECT_STATUS } from "../../../types/ProjectStatus";
import { PROGRESS_STATUS, PROGRESS_TEXT } from "../../../types/ProgreessStatus";

export default function ProjectIncubation({ data }: { data: any }) {
  const [yesVotedCount, setYesVotedCount] = useState(0);
  const [votedCount, setVotedCount] = useState(0);
  const [communityCount, setCommunityCount] = useState(1);

  const communityData = useCommunityData();

  useEffect(() => {
    if (communityData.length > 0 && data) {
      setYesVotedCount(
        data.wefund_votes.filter((x: any) => x.voted == true).length
      );
      setVotedCount(data.wefund_votes.length);
      setCommunityCount(communityData.length);
    }
  }, [communityData]);

  return (
    <VStack color="white" w={"100%"} bg="#120D30" borderRadius="10px" p="10">
      {data?.incubation_goals.map((goal: any, index: number) => {
        let progress = 0,
          yes = 0,
          no = 0,
          all = 0;
        if (
          data.project_status > PROJECT_STATUS.IncubationGoalSetup ||
          (data.project_status == PROJECT_STATUS.IncubationGoalSetup &&
            data.incubation_index > index)
        ) {
          progress = PROGRESS_STATUS.APPROVED;
          yes = communityCount;
          all = communityCount;
        } else if (
          data.project_status == PROJECT_STATUS.IncubationGoalSetup &&
          data.incubation_index == index
        ) {
          if (data.rejected) progress = PROGRESS_STATUS.REJECTED;
          else progress = PROGRESS_STATUS.VOTING;
          yes = yesVotedCount;
          no = votedCount - yes;
          all = votedCount;
        } else {
          progress = PROGRESS_STATUS.PENDING;
        }

        return (
          <Accordion allowToggle key={index} w="100%">
            <AccordionItem
              rounded={"lg"}
              border="0px"
              borderColor="gray.200"
              w={"100%"}
            >
              <AccordionButton w="100%" p="4" justifyContent="space-between">
                <Text fontSize={"16px"} fontWeight={600} color={"white"}>
                  {goal.title}
                </Text>

                <Flex gap="10px">
                  <ProgressIcon progress={progress} />
                  {PROGRESS_TEXT[progress]}
                  {(progress == PROGRESS_STATUS.VOTING ||
                    progress == PROGRESS_STATUS.REJECTED) && <VoteButton />}
                  <AccordionIcon />
                </Flex>
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Flex gap={{ base: 2, sm: 2, md: 8 }}>
                  <Flex
                    direction="row"
                    align="left"
                    bg="rgba(0, 0, 0, 0.33)"
                    rounded="md"
                    p="1"
                    w="50%"
                  >
                    <Text fontSize={"14px"} fontWeight={200} color="white">
                      {goal.description}
                    </Text>
                  </Flex>
                  <Flex direction="column" w="20%">
                    {PROGRESS_TEXT.map((label, index) => (
                      <Flex
                        direction={{ base: "column", sm: "row", lg: "row" }}
                        justify="left"
                        background={
                          progress == index ? "#4E0588" : "rgba(0, 0, 0, 0.25)"
                        }
                        rounded="md"
                        p="1"
                        key={index}
                      >
                        <Text
                          fontSize={{ base: "12px", sm: "14px", lg: "16px" }}
                          fontWeight={200}
                          color="white"
                        >
                          {label}
                        </Text>
                      </Flex>
                    ))}
                  </Flex>
                  <Flex
                    direction="column"
                    rounded="md"
                    justify="space-between"
                    background="rgba(0, 0, 0, 0.25)"
                    align="left"
                    w="30%"
                    py="1"
                    px="2"
                  >
                    <Text
                      fontSize={{ base: "12px", sm: "14px", lg: "16px" }}
                      fontWeight="600"
                      color="white"
                      width={{ base: "8px", sm: "100px", lg: "300px" }}
                    >
                      {yes} <chakra.span fontWeight={200}> Yes</chakra.span>
                    </Text>
                    <Text
                      fontSize={{ base: "12px", sm: "14px", lg: "16px" }}
                      fontWeight="600"
                      color="white"
                      width={{ base: "8px", sm: "100px", lg: "300px" }}
                    >
                      {no} <chakra.span fontWeight={200}> No</chakra.span>
                    </Text>
                    <Text
                      fontSize={{ base: "12px", sm: "14px", lg: "16px" }}
                      fontWeight="600"
                      color="white"
                      width={{ base: "8px", sm: "100px", lg: "300px" }}
                    >
                      {yes}/{all} voted
                    </Text>
                  </Flex>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      })}
    </VStack>
  );
}

const VoteButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        ml="12px"
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
