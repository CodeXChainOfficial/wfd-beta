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
  Button,
} from "@chakra-ui/react";
import { useCommunityData } from "../../../hook/FetchProject";
import ProgressIcon from "../../ProgressIcon";
import { PROJECT_STATUS } from "../../../types/ProjectStatus";
import { PROGRESS_STATUS, PROGRESS_TEXT } from "../../../types/ProgreessStatus";
import {
  MILESTONE_INFO,
  PROJECT_INFO,
  VOTE_INFO,
} from "../../../types/Project";

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

export default function ProjectMilestone({ data }: { data: PROJECT_INFO }) {
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
      bg="#120D30"
      borderRadius="10px"
      px="4"
      py="8"
      mt="30px"
    >
      <Grid
        templateColumns="2fr 1fr 1fr 1fr 1fr"
        w="100%"
        gap={{ base: "1px", md: "10px" }}
        fontSize={{ base: "12px", md: "16px" }}
        px={{ base: "0px", md: "15px" }}
      >
        <GridItem>Milestone</GridItem>
        <GridItem>Start to End</GridItem>
        <GridItem>Amount</GridItem>
        <GridItem>Status</GridItem>
        <GridItem />
      </Grid>
      {data?.milestone_states.map(
        (milestone: MILESTONE_INFO, index: number) => (
          <Milestone
            data={data}
            milestone={milestone}
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
  milestone: MILESTONE_INFO;
  index: number;
  onDelete: (index: number) => void;
}

const Milestone = ({ data, milestone, index, onDelete }: Props) => {
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
    data.project_status > PROJECT_STATUS.MilestoneSetup ||
    (data.project_status == PROJECT_STATUS.MilestoneSetup &&
      data.incubation_index > index)
  ) {
    progress = PROGRESS_STATUS.APPROVED;
    yes = communityCount;
    all = communityCount;
  } else if (
    data.project_status == PROJECT_STATUS.MilestoneSetup &&
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
        <AccordionButton w="100%" p="0">
          <Grid
            templateColumns="2fr 1fr 1fr 1fr 1fr"
            w="100%"
            gap={{ base: "1px", md: "10px" }}
            fontSize={{ base: "10px", md: "16px" }}
            px={{ base: "0px", md: "15px" }}
          >
            <GridItem display="flex" alignItems="center">
              {milestone.name}
            </GridItem>
            <GridItem display="flex" alignItems="center">
              {milestone.start_date} -
            </GridItem>
            <GridItem display="flex" alignItems="center">
              $ {milestone.amount.toNumber()}
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
        <AccordionPanel px="0" pb={4}>
          <Grid
            templateColumns="2fr 1fr 1fr 1fr 1fr"
            w="100%"
            gap={{ base: "1px", md: "10px" }}
            fontSize={{ base: "10px", md: "12px" }}
            px={{ base: "0px", md: "15px" }}
          >
            <GridItem
              display="flex"
              bg="rgba(0, 0, 0, 0.33)"
              rounded="md"
              p="1"
            >
              {milestone.description}
            </GridItem>
            <GridItem
              display="flex"
              bg="rgba(0, 0, 0, 0.33)"
              rounded="md"
              p="1"
            >
              {milestone.start_date} - {milestone.end_date}
            </GridItem>
            <GridItem
              display="flex"
              bg="rgba(0, 0, 0, 0.33)"
              rounded="md"
              p="1"
            >
              $ - {milestone.amount.toNumber()}
            </GridItem>
            <GridItem
              display="flex"
              flexDirection="column"
              rounded="md"
              background="rgba(0, 0, 0, 0.25)"
              py="1"
              px="2"
            >
              <Flex w="100%">
                <Text>
                  {yes}&nbsp;
                  <chakra.span fontWeight={200}>
                    &nbsp; Yes&nbsp;&nbsp;&nbsp;
                  </chakra.span>
                </Text>
                <Text>
                  {no} <chakra.span fontWeight={200}> No</chakra.span>
                </Text>
              </Flex>
              <Text>
                {yes}/{all} voted
              </Text>
            </GridItem>
            <GridItem>
              <Button
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
