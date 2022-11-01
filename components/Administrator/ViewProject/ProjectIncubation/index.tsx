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
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useCommunityData } from "../../../../hook/FetchProject";
import { ProgressIcon } from "../../ProjectPanel/ProjectOnApproval";
import { PROJECT_STATUS } from "../../../../types/ProjectStatus";
import {
  PROGRESS_STATUS,
  PROGRESS_TEXT,
} from "../../../../types/ProgreessStatus";
import VoteButton from "../../VoteButton";

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
    <VStack
      color="white"
      w={"100%"}
      bg="#120D30"
      borderRadius="10px"
      px="4"
      py="8"
    >
      <Grid
        templateColumns="40% 25% 25% 10%"
        w="100%"
        gap={{ base: "1px", md: "10px" }}
        fontSize={{ base: "12px", md: "16px" }}
        px={{ base: "0px", md: "15px" }}
      >
        <GridItem>Goal</GridItem>
        <GridItem>Progress</GridItem>
        <GridItem>Status</GridItem>
        <GridItem />
      </Grid>
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
              <AccordionButton w="100%" p="0">
                <Grid
                  templateColumns="40% 25% 25% 10%"
                  w="100%"
                  gap={{ base: "1px", md: "10px" }}
                  color={"white"}
                  fontSize={{ base: "10px", md: "16px" }}
                  px={{ base: "0px", md: "15px" }}
                >
                  <GridItem display="flex" alignItems="center">
                    {goal.title}
                  </GridItem>
                  <GridItem />
                  <GridItem
                    display="flex"
                    alignItems="center"
                    gap={{ base: "1px", md: "10px" }}
                  >
                    <ProgressIcon progress={progress} />
                    {PROGRESS_TEXT[progress]}
                    {/* {(progress == PROGRESS_STATUS.VOTING ||
                      progress == PROGRESS_STATUS.REJECTED) && <VoteButton />} */}
                    <VoteButton />
                  </GridItem>
                  <GridItem>
                    <AccordionIcon />
                  </GridItem>
                </Grid>
              </AccordionButton>
              <AccordionPanel px="0" pb={4}>
                <Grid
                  templateColumns="40% 25% 25% 10%"
                  w="100%"
                  gap={{ base: "3px", md: "10px" }}
                  color={"white"}
                  fontSize={{ base: "10px", md: "12px" }}
                  px={{ base: "0px", md: "15px" }}
                >
                  <GridItem
                    display="flex"
                    bg="rgba(0, 0, 0, 0.33)"
                    rounded="md"
                    p="1"
                  >
                    {goal.description}
                  </GridItem>
                  <GridItem
                    display="flex"
                    flexDirection="column"
                    bg="rgba(0, 0, 0, 0.33)"
                    rounded="md"
                    p="1"
                  >
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
                        {label}
                      </Flex>
                    ))}
                  </GridItem>

                  <GridItem
                    display="flex"
                    flexDirection="column"
                    rounded="md"
                    background="rgba(0, 0, 0, 0.25)"
                    py="1"
                    px="2"
                  >
                    <Text>
                      {yes} <chakra.span fontWeight={200}> Yes</chakra.span>
                    </Text>
                    <Text>
                      {no} <chakra.span fontWeight={200}> No</chakra.span>
                    </Text>
                    <Text>
                      {yes}/{all} voted
                    </Text>
                  </GridItem>
                </Grid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      })}
    </VStack>
  );
}
