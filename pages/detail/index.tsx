import { ChakraProvider, Container, HStack } from "@chakra-ui/react";
import { Box, Flex, Spacer, VStack, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useRouter } from "next/router";
import { useProjectData, useStore } from "../../contexts/store";
import Footer from "../../components/Footer";
import ProjectTitle from "../../components/ProjectDetail/ProjectTitle";
import ProjectStatusButtons from "../../components/ProjectDetail/ProjectStatusButtons";
import ProjectMainButtons from "../../components/ProjectDetail/ProjectMainButtons";
import ProjectInformations from "../../components/ProjectDetail/ProjectInformations";
import ProjectTeamMember from "../../components/ProjectDetail/ProjectTeamMember";
import ProjectMileStones from "../../components/ProjectDetail/ProjectMilestones";
import VoteModal from "../../components/ProjectDetail/VoteModal";

import { SUCCESS_OPTION, ERROR_OPTION } from "../../config/constants";
import {
  checkNetwork,
  GetOneProject,
  ParseParam_ProjectId,
} from "../../utils/utility";

export default function ProjectDetail() {
  // const { state, dispatch } = useStore();
  const router = useRouter();

  const [oneprojectData, setOneprojectData] = useState<any>({});
  const [totalBackedMoney, setTotalBackedMoney] = useState(0);
  const [totalBackedPercent, setTotalBackedPercent] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const projectData = useProjectData();
  const project_id = ParseParam_ProjectId();
  const [whitelisted, setWhitelisted] = useState(false);

  function onNext() {
    router.push("/backproject?project_id=" + oneprojectData.project_id); //-- Should be Back Project
  }
  function onWhite() {
    router.push("/whitelistproject?project_id=" + oneprojectData.project_id); //-- Should be Whitelist Project
  }

  //------------fectch project data------------------------------------
  useEffect(() => {
    async function fetch() {
      let _project_id = 1;
      if (project_id != null) _project_id = project_id;

      try {
        const oneprojectData = GetOneProject(projectData, _project_id);
        if (oneprojectData == "") {
          toast("Can't fetch Project Data", ERROR_OPTION);
          return;
        }

        for (let i = 0; i < oneprojectData.milestone_states.length; i++) {
          if (i < oneprojectData.project_milestonestep) {
            oneprojectData.milestone_states[i].milestone_statusmessage =
              "Released";
          } else if (i == oneprojectData.project_milestonestep) {
            if (oneprojectData.project_status == "3") {
              //releasing status
              oneprojectData.milestone_states[i].milestone_statusmessage =
                "Voting";
              oneprojectData.milestone_states[i].milestone_votingavailable =
                true;
            } else
              oneprojectData.milestone_states[i].milestone_statusmessage =
                "Not yet";
          } else
            oneprojectData.milestone_states[i].milestone_statusmessage =
              "Not yet";
        }
        setOneprojectData(oneprojectData);

        let totalBacked = parseInt(oneprojectData.backerbacked_amount);
        totalBacked /= 10 ** 6;

        const percent = Math.floor(
          (totalBacked / parseInt(oneprojectData.project_collected)) * 100
        );
        setTotalBackedPercent(percent);
        setTotalBackedMoney(totalBacked);
      } catch (e) {
        console.log(e);
      }
    }

    fetch();
  }, [projectData]);

  return (
    <VStack
      w="100%"
      justify="center"
      alignItems="center"
      // zIndex="1"
      mt="100px"
      mb="100px"
    >
      <VStack w={{ base: "90%", md: "80%", lg: "80%" }}>
        <Flex
          alignContent={"center"}
          direction={{ base: "column", md: "column", lg: "row" }}
        >
          <VStack>
            <ProjectTitle data={oneprojectData} />
            {/* <ProjectStatusButtons
              data={oneprojectData}
              WefundApprove={WefundApprove}
              onNext={onNext}
              MilestoneVote={MilestoneVote}
            /> */}
            <Flex alignContent="center">
              <ProjectMainButtons
                data={oneprojectData}
                onNext={onNext}
                onWhite={onWhite}
              />
            </Flex>
          </VStack>
        </Flex>
        <Flex
          w="full"
          pt={16}
          direction={{ base: "column", md: "column", lg: "row" }}
        >
          <Flex w="full" flex="1">
            <ProjectTeamMember data={oneprojectData} />
          </Flex>
          <Container w={48} />
          <Flex w="full" flex="1">
            <ProjectInformations
              data={oneprojectData}
              totalBackedMoney={totalBackedMoney}
              totalBackedPercent={totalBackedPercent}
            />
          </Flex>
        </Flex>
        <ProjectMileStones data={oneprojectData} onOpen={onOpen} />
        <Container pb="50px" />
      </VStack>
      <Footer />

      {/* <VoteModal
        data={oneprojectData}
        onClose={onClose}
        isOpen={isOpen}
        MilestoneVote={MilestoneVote}
      /> */}
    </VStack>
  );
}
