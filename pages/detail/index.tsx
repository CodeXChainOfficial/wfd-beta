import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { Box, Flex, VStack, useDisclosure } from "@chakra-ui/react";
import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { toast } from "react-toastify";

import { useRouter } from "next/router";
import { useStore } from "../../components/store";
import Footer from "../../components/Footer";
import PageLayout from "../../components/PageLayout";
import ProjectTitle from "../../components/ProjectDetail/ProjectTitle";
import ProjectStatusButtons from "../../components/ProjectDetail/ProjectStatusButtons";
import ProjectMainButtons from "../../components/ProjectDetail/ProjectMainButtons";
import ProjectInformations from "../../components/ProjectDetail/ProjectInformations";
import WeFundDescription from "../../components/ProjectDetail/WeFundDescription";
import ProjectTeamDescription from "../../components/ProjectDetail/ProjectTeamDescription";
import ProjectMileStones from "../../components/ProjectDetail/ProjectMilestones";
import VoteModal from "../../components/ProjectDetail/VoteModal";

import {
  EstimateSend,
  CheckNetwork,
  FetchData,
  GetOneProject,
  ParseParam,
  errorOption,
  successOption,
} from "../../components/Util";

export default function ProjectDetail() {
  const { state, dispatch } = useStore();
  const [oneprojectData, setOneprojectData] = useState<any>({});
  const [totalBackedMoney, setTotalBackedMoney] = useState(0);
  const [totalBackedPercent, setTotalBackedPercent] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  //------------parse URL for project id----------------------------
  const project_id = ParseParam();

  function onNext() {
    router.push("/invest_step1?project_id=" + oneprojectData.project_id);
  }
  //------------fectch project data------------------------------------
  async function fetchContractQuery() {
    let _project_id = 1;
    if (project_id != null) _project_id = project_id;

    try {
      const { projectData } = await FetchData(state, dispatch);

      const oneprojectData = GetOneProject(projectData, _project_id);
      if (oneprojectData == "") {
        toast("Can't fetch Project Data", errorOption);
        return;
      }

      for (let i = 0; i < oneprojectData.project_milestones.length; i++) {
        if (i < oneprojectData.project_milestonestep) {
          oneprojectData.project_milestones[i].milestone_statusmessage =
            "Released";
        } else if (i == oneprojectData.project_milestonestep) {
          if (oneprojectData.project_status == "3") {
            //releasing status
            oneprojectData.project_milestones[i].milestone_statusmessage =
              "Voting";
            oneprojectData.project_milestones[i].milestone_votingavailable =
              true;
          } else
            oneprojectData.project_milestones[i].milestone_statusmessage =
              "Not yet";
        } else
          oneprojectData.project_milestones[i].milestone_statusmessage =
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

  useEffect(() => {
    fetchContractQuery();
  }, []);

  //------------Wefund Approve-----------------
  function WefundApprove(project_id: number) {
    if (CheckNetwork(state) == false) return false;

    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 15; //for 15days
    const WefundApproveMsg = {
      wefund_approve: {
        project_id: project_id,
        deadline: deadline,
      },
    };
  }

  function MilestoneVote(project_id: number, voted: boolean) {
    if (CheckNetwork(state) == false) return false;
  }
  //--Pop Ups for Projects

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
            <ProjectStatusButtons
              data={oneprojectData}
              WefundApprove={WefundApprove}
              onNext={onNext}
              MilestoneVote={MilestoneVote}
            />
            <ProjectMainButtons data={oneprojectData} onNext={onNext} />
          </VStack>
          <ProjectInformations
            data={oneprojectData}
            totalBackedMoney={totalBackedMoney}
            totalBackedPercent={totalBackedPercent}
          />
        </Flex>
        <WeFundDescription data={oneprojectData} />
        <ProjectTeamDescription data={oneprojectData} />
        <ProjectMileStones data={oneprojectData} onOpen={onOpen} />
      </VStack>
      <Footer />

      <VoteModal
        data={oneprojectData}
        onClose={onClose}
        isOpen={isOpen}
        MilestoneVote={MilestoneVote}
      />
    </VStack>
  );
}
