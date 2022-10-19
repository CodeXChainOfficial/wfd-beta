import { Center, chakra, ChakraProvider, Container, HStack, Image, Img, Text } from "@chakra-ui/react";
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

import { ERROR_OPTION } from "../../config/constants";
import {
  GetOneProject,
  ParseParam_ProjectId,
} from "../../utils/utility";
import SmokeLeft from "../../components/SmokeLeft";

export default function ProjectDetail() {
  const router = useRouter();

  const [oneprojectData, setOneprojectData] = useState<any>({});
  const [totalBackedMoney, setTotalBackedMoney] = useState(0);
  const [totalBackedPercent, setTotalBackedPercent] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const projectData = useProjectData();
  const project_id = ParseParam_ProjectId();

  function onNext() {
    router.push("/backproject?project_id=" + oneprojectData.project_id); //-- Should be Back Project
  }

  //------------fectch project data------------------------------------
  useEffect(() => {
    async function fetch() {
      let _project_id = 1;
      if (project_id != null) _project_id = project_id;

      try {
        let oneprojectData = GetOneProject(projectData, _project_id);
        if (oneprojectData == "") {
          toast("Can't fetch Project Data", ERROR_OPTION);
          return;
        }
        
        console.log(oneprojectData)
        setOneprojectData(oneprojectData);

        let totalBacked = parseInt(oneprojectData.backerbacked_amount);
        totalBacked /= 10 ** 6;

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
      mt="100px"
      mb="100px"
    >
      <Image
        zIndex="0"
        top="0"
        width="100%"
        objectFit="contain"
        position="absolute"
        src="/media/Home/bg_coin_2.svg"
      />

      <Center zIndex="10">
        <Text
          color="#00A3FF"
          fontFamily="PilatExtended-Bold"
          fontSize={{ base: "36px", lg: "46px" }}
        >
          Project <chakra.span color={"white"}>Details</chakra.span>
        </Text>
      </Center>
      <VStack zIndex="10" paddingTop="128px" w={{ base: "90%", md: "80%", lg: "80%" }}>
        <Flex
          alignContent={"center"}
          direction={{ base: "column", md: "column", lg: "row" }}
        >
          <VStack>
            <ProjectTitle data={oneprojectData} />
            <Flex alignContent="center">
              <ProjectMainButtons
                data={oneprojectData}
                onNext={onNext}
              />
            </Flex>
          </VStack>
        </Flex>
        <SmokeLeft />
        <Flex
          w="full"
          pt={16}
          direction={{ base: "column", md: "column", lg: "row" }}
        >
          <Flex w="full" flex="1">
            <ProjectTeamMember data={oneprojectData} />
          </Flex>
          <Container w={24} />
          <Flex w="full" flex="1">
            <ProjectInformations
              data={oneprojectData}
              totalBackedMoney={totalBackedMoney}
              totalBackedPercent={totalBackedPercent}
            />
          </Flex>
        </Flex>
        <Container pt="64px" />
        <ProjectMileStones data={oneprojectData} onOpen={onOpen} />
        <Container pb="128px" />
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
