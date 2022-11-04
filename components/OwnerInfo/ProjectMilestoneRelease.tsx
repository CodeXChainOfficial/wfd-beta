import React, { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  chakra,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useCommunityData } from "../../hook/FetchProject";
import ProgressIcon from "../ProgressIcon";
import { PROJECT_STATUS } from "../../types/ProjectStatus";
import { PROGRESS_STATUS, PROGRESS_TEXT } from "../../types/ProgreessStatus";
import { MILESTONE_INFO, PROJECT_INFO, VOTE_INFO } from "../../types/Project";
// import VoteButton from "../VoteButton";

export default function ProjectMilestoneRelease({
  data,
}: {
  data: PROJECT_INFO;
}) {
  return (
    <VStack
      color="white"
      w={"100%"}
      bg="#120D30"
      borderRadius="10px"
      p={{ base: "1", md: "10" }}
      fontSize={{ base: "12px", md: "16px" }}
      fontWeight={600}
    >
      <Grid
        templateColumns="3fr 2fr 2fr 1fr"
        gap={{ base: "1px", md: "20px" }}
        w="100%"
      >
        <GridItem>
          <Text>Milestone</Text>
        </GridItem>
        <GridItem>
          <Text>Progress</Text>
        </GridItem>
        <GridItem>
          <Text>Status</Text>
        </GridItem>
        <GridItem />
      </Grid>
      {data?.milestone_states.map(
        (milestone: MILESTONE_INFO, index: number) => (
          <Milestone
            data={data}
            milestone={milestone}
            index={index}
            key={index}
          />
        )
      )}
    </VStack>
  );
}

interface Props {
  data: PROJECT_INFO;
  milestone: MILESTONE_INFO;
  index: number;
}

const Milestone = ({ data, milestone, index }: Props) => {
  const [yesVotedCount, setYesVotedCount] = useState(0);
  const [votedCount, setVotedCount] = useState(0);
  const [communityCount, setCommunityCount] = useState(1);

  const communityData = useCommunityData();

  useEffect(() => {
    if (communityData.length > 0 && data) {
      setYesVotedCount(
        data.wefund_votes.filter((x: VOTE_INFO) => x.vote == true).length
      );
      setVotedCount(data.wefund_votes.length);
      setCommunityCount(communityData.length);
    }
  }, [communityData]);

  let progress = 0,
    yes = 0,
    no = 0,
    all = 0;
  if (
    data.project_status > PROJECT_STATUS.MilestoneRelease ||
    (data.project_status == PROJECT_STATUS.MilestoneRelease &&
      data.incubation_index > index)
  ) {
    progress = PROGRESS_STATUS.APPROVED;
    yes = communityCount;
    all = communityCount;
  } else if (
    data.project_status == PROJECT_STATUS.MilestoneRelease &&
    data.milestone_index == index
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
        <AccordionButton
          w="100%"
          py="2"
          px="0"
          fontSize={{ base: "12px", md: "16px" }}
          fontWeight={600}
        >
          <Grid
            templateColumns="3fr 2fr 2fr 1fr"
            gap={{ base: "1px", md: "20px" }}
            w="100%"
          >
            <GridItem display="flex">{milestone.name}</GridItem>
            <GridItem />
            <GridItem display="flex">
              <ProgressIcon progress={progress} />
              {PROGRESS_TEXT[progress]}
              {/* {(progress == PROGRESS_STATUS.VOTING ||
              progress == PROGRESS_STATUS.REJECTED) && <VoteButton />} */}
            </GridItem>
            <GridItem>
              <AccordionIcon />
            </GridItem>
          </Grid>
        </AccordionButton>
        <AccordionPanel pb={4} px="0">
          <Grid
            templateColumns="3fr 2fr 2fr 1fr"
            gap={{ base: "3px", md: "20px" }}
            w="100%"
            fontSize={{ base: "10px", md: "12px" }}
          >
            <GridItem
              display="flex"
              alignItems="left"
              bg="rgba(0, 0, 0, 0.33)"
              rounded="md"
              h="100%"
            >
              {milestone.description}
            </GridItem>
            <GridItem display="flex" flexDirection="column">
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
              justifyContent="space-between"
              background="rgba(0, 0, 0, 0.25)"
              alignItems="left"
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
              {/* <VoteButton /> */}
            </GridItem>
            <GridItem />
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
