/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useCallback,
} from "react";
import { Box, Flex, HStack, VStack, useDisclosure } from "@chakra-ui/react";
import {
  Sleep,
  FetchData,
  EstimateSend,
  CheckNetwork,
  GetProjectStatus,
  GetOneProject,
} from "../utils/Util";

import { useStore } from "../contexts/store";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";

import { useRouter } from "next/router";

import ProjectCount from "../components/ProjectExplorer/ProjectCount";
import Tabs from "../components/ProjectExplorer/Tabs";
import Logo from "../components/ProjectExplorer/Logo";
import StatusButtons from "../components/ProjectExplorer/StatusButtons";
import Title from "../components/ProjectExplorer/Title";
import Description from "../components/ProjectExplorer/Description";
import ExtraInfos from "../components/ProjectExplorer/ExtraInfos";
import Informations from "../components/ProjectExplorer/Informations";
import MainButtons from "../components/ProjectExplorer/MainButtons";
import ProjectPaginator from "../components/ProjectExplorer/ProjectPaginator";
import CircularProgresses from "../components/ProjectExplorer/CircularProgresses";
import Whitelist from "../components/ProjectExplorer/Whitelist";

import MobileLogo from "../components/ProjectExplorer/Mobile/Logo";
import MobileTitle from "../components/ProjectExplorer/Mobile/Title";
import MobileStatusButtons from "../components/ProjectExplorer/Mobile/StatusButtons";
import MobileInformations from "../components/ProjectExplorer/Mobile/Informations";
import MobileMainButtons from "../components/ProjectExplorer/Mobile/MainButtons";

import { toast } from "react-toastify";

export default function ExplorerProject() {
  const router = useRouter();
  const { state, dispatch } = useStore();
  const [postProjectData, setPostProjectData] = useState<any[] | null>(null);
  const {
    isOpen: isOpenCloseWhitelist,
    onOpen: onOpenCloseWhitelist,
    onClose: onCloseCloseWhitelist,
  } = useDisclosure();

  const [projectID, setProjectID] = useState(0);

  let activeTab = "WeFundApproval";
  //------------extract active mode----------------------------
  if (typeof window != "undefined") {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    activeTab = urlParams.get("activetab") ?? activeTab;
    // if (GetProjectStatus(activeTab) == 0) activeTab = "WeFundApproval";
  }

  //-----------Change mode---------------------
  function onChangeActivetab(mode: string) {
    setPostProjectData(null);
    router.push("/explorer?activetab=" + mode);
  }

  //-------------paginator-----------------------------------
  const [current, setCurrent] = useState(1);
  const pageSize = 3;

  function onChangePaginator(page: number) {
    if (state.activeProjectData == []) {
      setPostProjectData(null);
      return;
    }
    const offset = (page - 1) * pageSize;
    setPostProjectData(
      state.activeProjectData.slice(offset, offset + pageSize)
    );
  }

  //-----------fetch project data=-------------------------
  async function fetchContractQuery(force = false) {
    try {
      const { projectData } = await FetchData(state, dispatch, force);
      //-----------------initialize--------------------------
      console.log(projectData);

      const activeProjectData = projectData.filter(
        (project) => project.project_status == GetProjectStatus(activeTab)
      );

      dispatch({ type: "setActiveProjectData", payload: activeProjectData });
      setPostProjectData(activeProjectData.slice(0, pageSize));
      setCurrent(1);
    } catch (e) {
      console.log(e);
    }
  }

  //------------Wefund Approve-----------------
  async function WefundApprove(project_id: number) {}
  async function OpenWhitelist(project_id: number) {}
  async function CloseWhitelist(project_id: number) {}
  async function JoinWhitelist(project_id: number) {}
  async function MilestoneVote(project_id: number, voted: boolean) {}

  async function NextFundraisingStage(project_id: number, curStage: string) {}
  //---------initialize fetching---------------------
  useEffect(() => {
    fetchContractQuery();
  }, [activeTab, state.net]);

  function Modify(project_id: number) {
    router.push("/modify?project_id=" + project_id);
  }

  return (
    <PageLayout title="Projects" subTitle1="Explore" subTitle2="Projects">
      <Tabs activeTab={activeTab} onChangeActivetab={onChangeActivetab} />

      {/* Projects Incubated */}
      <Flex
        w={{ base: "90%", md: "98%", lg: "80%" }}
        justify="center"
        mt="50px"
      >
        <Box fontFamily={"Sk-Modernist-Regular"} w={"100%"}>
          <Flex w={"100%"} justify="center" zIndex={"1"}>
            <VStack w={"100%"} paddingBottom={"50px"}>
              <Flex
                w="100%"
                padding={"0 20px"}
                justify={"center"}
                borderTopColor={"transparent"}
                bg={"rgba(255, 255, 255, 0.05)"}
                fontFamily={"Sk-Modernist-Regular"}
              >
                {/* ------------------project desktop---------- */}
                <Flex
                  w="100%"
                  flexDirection={"column"}
                  display={{ base: "none", md: "flex", lg: "flex" }}
                >
                  <ProjectCount />
                  {postProjectData?.map((e, index) => (
                    <Box
                      w="100%"
                      key={index}
                      shadow="lg"
                      overflow="hidden"
                      boxSizing="border-box"
                      borderTop="1px solid rgba(255, 255, 255, 0.1)"
                    >
                      <HStack w="100%">
                        <Logo data={e} />
                        <Box py={4} px={2} w="100%">
                          <Flex
                            justify={"space-between"}
                            mb={"20px"}
                            alignItems="center"
                          >
                            <Title activeTab={activeTab} data={e} />
                            <StatusButtons
                              index={index}
                              data={e}
                              activeTab={activeTab}
                              WefundApprove={WefundApprove}
                              MilestoneVote={MilestoneVote}
                              NextFundraisingStage={NextFundraisingStage}
                              Modify={Modify}
                              OpenWhitelist={OpenWhitelist}
                              CloseWhitelist={CloseWhitelist}
                              JoinWhitelist={JoinWhitelist}
                            />
                          </Flex>

                          <Flex
                            align="self-start"
                            justifyContent={"space-between"}
                          >
                            <Description data={e} />
                            <CircularProgresses
                              activeTab={activeTab}
                              data={e}
                              sz="150px"
                            />
                          </Flex>
                          <ExtraInfos activeTab={activeTab} data={e} />
                          <HStack justify="space-between" mt={"10px"}>
                            <Informations data={e} />
                            <MainButtons index={index} data={e} />
                          </HStack>
                        </Box>
                      </HStack>
                    </Box>
                  ))}
                </Flex>

                {/* ------------------project mobile---------- */}
                <Flex
                  width={"100%"}
                  flexDirection="column"
                  display={{ base: "flex", md: "none", lg: "none" }}
                >
                  <ProjectCount />

                  <Flex
                    w={"100%"}
                    shadow="lg"
                    alignSelf={"center"}
                    direction={"column"}
                    boxSizing="border-box"
                  >
                    {postProjectData?.map((e, index) => (
                      <Flex
                        width={"100%"}
                        alignSelf={"center"}
                        direction={"column"}
                        mb="20px"
                        key={index}
                        align="center"
                      >
                        <Flex
                          width={"90%"}
                          justify={"center"}
                          direction={"column"}
                          alignSelf={"center"}
                        >
                          <MobileLogo data={e} />
                          <MobileTitle data={e} />
                          <Flex
                            py={2}
                            w="100%"
                            alignItems={"center"}
                            flexDirection={"column"}
                            justify={"space-between"}
                          >
                            <MobileInformations data={e} />
                            <MobileStatusButtons
                              index={index}
                              data={e}
                              activeTab={activeTab}
                              WefundApprove={WefundApprove}
                              MilestoneVote={MilestoneVote}
                              NextFundraisingStage={NextFundraisingStage}
                              Modify={Modify}
                              OpenWhitelist={OpenWhitelist}
                              CloseWhitelist={CloseWhitelist}
                              JoinWhitelist={JoinWhitelist}
                            />
                          </Flex>
                        </Flex>

                        <Flex alignSelf={"center"} marginTop={"20px"}>
                          <CircularProgresses
                            activeTab={activeTab}
                            data={e}
                            sz="120px"
                          />
                        </Flex>

                        <MobileMainButtons index={index} data={e} />
                      </Flex>
                    ))}
                  </Flex>
                </Flex>
              </Flex>
              <ProjectPaginator
                current={current}
                pageSize={pageSize}
                onChangePaginator={onChangePaginator}
              />
            </VStack>
          </Flex>
        </Box>
      </Flex>
      <Whitelist
        projectId={projectID}
        isOpen={isOpenCloseWhitelist}
        onClose={onCloseCloseWhitelist}
      />
      <Footer />
    </PageLayout>
  );
}
