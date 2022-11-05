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
  Button,
} from "@chakra-ui/react";
import ProgressIcon from "../../ProgressIcon";
import { PROJECT_STATUS } from "../../../types/ProjectStatus";
import { PROGRESS_STATUS, PROGRESS_TEXT } from "../../../types/ProgreessStatus";
import { INCUBATION_GOAL_INFO, PROJECT_INFO } from "../../../types/Project";
import { useMetamaskWallet } from "../../../contexts/metamask";
import { ethers } from "ethers";
import {
  ERROR_OPTION,
  SUCCESS_OPTION,
  WEFUND_CONTRACT,
} from "../../../config/constants";
import WEFUND_ABI from "../../../config/WeFund.json";
import { useStore } from "../../../contexts/store";
import { toast } from "react-toastify";
import { fetchProjectData } from "../../../hook/FetchProject";

export default function ProjectApplyIncubation({
  data,
}: {
  data: PROJECT_INFO;
}) {
  const metamask = useMetamaskWallet();
  const signer = metamask.signer;
  const contract = new ethers.Contract(WEFUND_CONTRACT, WEFUND_ABI, signer);
  const pid = data?.project_id;
  const { state, dispatch } = useStore();

  const onDelete = async (index: number) => {
    try {
      toast("Please wait", { ...SUCCESS_OPTION, autoClose: false });
      const res = await contract.removeIncubationGoal(pid, index);
      await res.wait();
      await fetchProjectData(state, dispatch, true);
      toast.dismiss();
      toast("Success", SUCCESS_OPTION);
    } catch (e) {
      toast.dismiss();
      toast("Failed", ERROR_OPTION);
      console.log(e);
    }
  };
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
        templateColumns="6fr 3fr 3fr 2fr 2fr"
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
          <IncubationGoal
            data={data}
            goal={goal}
            index={index}
            key={index}
            onDelete={onDelete}
          />
        )
      )}
    </VStack>
  );
}

interface Props {
  data: PROJECT_INFO;
  goal: INCUBATION_GOAL_INFO;
  index: number;
  onDelete: (index: number) => void;
}
const IncubationGoal = ({ data, goal, index, onDelete }: Props) => {
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
            templateColumns="6fr 3fr 3fr 2fr 2fr"
            w="100%"
            gap={{ base: "1px", md: "10px" }}
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
            templateColumns="6fr 3fr 3fr 2fr 2fr"
            w="100%"
            gap={{ base: "1px", md: "10px" }}
            fontSize={{ base: "8px", md: "12px" }}
          >
            <GridItem
              bg="rgba(0, 0, 0, 0.33)"
              minH="50px"
              p="5px"
              borderRadius="5px"
              maxWidth="500px"
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
            <GridItem>
              <Button
                colorScheme={"linkedin"}
                variant="outline"
                fontSize={{ base: "10px", md: "12px" }}
                w={{ base: "30px", md: "80px" }}
                h={{ base: "20px", md: "30px" }}
                onClick={() => onDelete(index)}
              >
                Delete
              </Button>
            </GridItem>
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
