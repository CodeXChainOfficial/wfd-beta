import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import ProgressIcon from "../../../ProgressIcon";
import { PROJECT_STATUS } from "../../../../types/ProjectStatus";
import {
  PROGRESS_STATUS,
  PROGRESS_TEXT,
} from "../../../../types/ProgreessStatus";
import { INCUBATION_GOAL_INFO, PROJECT_INFO } from "../../../../types/Project";

export default function ProjectApplyIncubation({
  data,
}: {
  data: PROJECT_INFO;
}) {
  
  return (
    <VStack
      color="white"
      w={"100%"}
      bg="#130A49"
      borderRadius="10px"
      px="4"
      py="8"
      mt="84px"
    >
      <Grid
        templateColumns="30% 15% 15% 20% 20%"
        w="100%"
        gap={{ base: "1px", md: "10px" }}
        fontSize={{ base: "12px", md: "16px" }}
        px={{ base: "0px", md: "15px" }}
      >
        <GridItem>Goal</GridItem>
        <GridItem>Start</GridItem>
        <GridItem>End</GridItem>
        <GridItem>Status</GridItem>
        <GridItem />
      </Grid>
      {data?.incubation_goals.map(
        (goal: INCUBATION_GOAL_INFO, index: number) => (
          <Goal data={data} goal={goal} index={index} key={index} />
        )
      )}
    </VStack>
  );
}

interface Props {
  data: PROJECT_INFO;
  goal: INCUBATION_GOAL_INFO;
  index: number;
}

const Goal = ({ data, goal, index }: Props) => {
  let progress = 0;
  if (
    data.project_status > PROJECT_STATUS.IncubationGoal ||
    (data.project_status == PROJECT_STATUS.IncubationGoal &&
      data.incubation_index > index)
  ) {
    progress = PROGRESS_STATUS.APPROVED;
  } else if (
    data.project_status == PROJECT_STATUS.IncubationGoal &&
    data.incubation_index == index
  ) {
    if (data.rejected) progress = PROGRESS_STATUS.REJECTED;
    else progress = PROGRESS_STATUS.VOTING;
  } else {
    progress = PROGRESS_STATUS.PENDING;
  }

  let approved = "";
  if (goal) {
    const date = new Date(goal.approved_date.toNumber()).toDateString();
    approved = goal.approved_date.gt(0)
      ? `approved at ${date}`
      : "Not approved yet";
  }

  return (
    <Accordion allowToggle key={index} w="100%">
      <AccordionItem
        rounded={"lg"}
        border="0px"
        borderColor="gray.200"
        w={"100%"}
      >
        <AccordionButton w="100%" px="0">
          <Grid
            templateColumns="30% 15% 15% 20% 20%"
            w="100%"
            gap="10px"
            fontSize={{ base: "10px", md: "14px" }}
            px={{ base: "0px", md: "15px" }}
          >
            <GridItem display="flex" alignItems="center">
              {goal.title}
            </GridItem>
            <GridItem display="flex" whiteSpace="nowrap" alignItems="center">
              {goal.start_date}
            </GridItem>
            <GridItem display="flex" whiteSpace="nowrap" alignItems="center">
              {goal.end_date}
            </GridItem>
            <GridItem display="flex" alignItems="center">
              <ProgressIcon progress={progress} />
              {PROGRESS_TEXT[progress]}
            </GridItem>
            <GridItem>
              <AccordionIcon />
            </GridItem>
          </Grid>
        </AccordionButton>
        <AccordionPanel pb={4} px="0" pt="0px">
          <Grid
            templateColumns="30% 15% 15% 20% 20%"
            gap="10px"
            fontSize={{ base: "8px", md: "12px" }}
          >
            <GridItem
              bg="rgba(0, 0, 0, 0.33)"
              minH="50px"
              p="5px"
              borderRadius="5px"
            >
              {goal.description}
            </GridItem>
            <GridItem
              display="flex"
              bg="rgba(0, 0, 0, 0.33)"
              h="100%"
              justifyContent="center"
              borderRadius="5px"
            >
              {goal.start_date}
            </GridItem>
            <GridItem
              display="flex"
              bg="rgba(0, 0, 0, 0.33)"
              h="100%"
              justifyContent="center"
              borderRadius="5px"
            >
              {goal.end_date}
            </GridItem>
            <GridItem
              display="flex"
              bg="rgba(0, 0, 0, 0.33)"
              h="100%"
              justifyContent="center"
              borderRadius="5px"
            >
              {approved}
            </GridItem>
            <GridItem />
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
