import { Center, chakra, Container, Image, Text } from "@chakra-ui/react";
import { Box, Flex, Spacer, VStack, useDisclosure } from "@chakra-ui/react";
import React from "react";

import { useRouter } from "next/router";
import { useOneProjectData } from "../../hook/FetchProject";
import Footer from "../../components/Footer";
import ProjectTitle from "../../components/ProjectDetail/ProjectTitle";
import ProjectMainButtons from "../../components/ProjectDetail/ProjectMainButtons";
import ProjectInformations from "../../components/ProjectDetail/ProjectInformations";
import ProjectTeamMember from "../../components/ProjectDetail/ProjectTeamMember";
import ProjectMileStones from "../../components/ProjectDetail/ProjectMilestones";

import { ParseParam_ProjectId } from "../../utils/utility";
import SmokeLeft from "../../components/SmokeLeft";

export default function ProjectDetail() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const project_id = ParseParam_ProjectId();
  const data = useOneProjectData(project_id);

  function onNext() {
    router.push("/backproject?project_id=" + project_id);
  }
  function onManage() {
    router.push("/ownerinfo?project_id=" + project_id);
  }

  return (
    <VStack w="100%" justify="center" alignItems="center" mt="100px" mb="100px">
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
      <VStack
        zIndex="10"
        paddingTop="128px"
        w={{ base: "90%", md: "80%", lg: "80%" }}
      >
        <Flex
          alignContent={"center"}
          direction={{ base: "column", md: "column", lg: "row" }}
        >
          <VStack>
            <ProjectTitle data={data} />
            <Flex alignContent="center">
              <ProjectMainButtons
                data={data}
                onNext={onNext}
                onManage={onManage}
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
            <ProjectTeamMember data={data} />
          </Flex>
          <Container w={24} />
          <Flex w="full" flex="1">
            <ProjectInformations data={data} />
          </Flex>
        </Flex>
        <Container pt="64px" />
        <ProjectMileStones data={data} onOpen={onOpen} />
        <Container pb="128px" />
      </VStack>
      <Footer />
    </VStack>
  );
}
