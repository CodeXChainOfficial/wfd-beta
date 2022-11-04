import {
  Box,
  Button,
  Center,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  chakra,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LaunchTabs from "./LaunchTabs";
import FundraiseType from "./FundraiseType";
import { useProjectData } from "../../hook/FetchProject";
import { WEFUND_ID } from "../../config/constants";
import { PROJECT_STATUS } from "../../types/ProjectStatus";

interface Props {
  data: any;
  index: number;
  selectedIndex?: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}
function ProjectItem({ data, index, selectedIndex, setSelected }: Props) {
  const router = useRouter();
  const selected = selectedIndex == index;

  return (
    <Box>
      <Box
        zIndex={"10"}
        width={{ base: "145px", md: "300px" }}
        bg={
          selected
            ? "linear-gradient(180deg, rgba(0, 151, 199, 0.45) 0%, #2ABFFF 95.52%);"
            : "none"
        }
        borderRadius={"20px"}
        cursor="pointer"
        onClick={() => router.push(`/detail?project_id=${data.project_id}`)}
        onMouseMove={() => setSelected(index)}
      >
        <Stack
          textAlign={"center"}
          height={{ base: "350px", md: "480px" }}
          zIndex={"10"}
          justify="center"
          align="center"
        >
          <Center
            background={
              selected
                ? "rgba(15, 177, 245, 1);"
                : "radial-gradient(50% 50% at 50% 50%, #AF63FA 0%, #19117A 100%);"
            }
            width={{ base: "100px", md: "160px" }}
            height={{ base: "100px", md: "160px" }}
            border={selected ? "5px solid #300FF5" : "5px solid #0FB1F5;"}
            borderRadius={"full"}
            margin={{ base: "10px", md: "48px auto" }}
          >
            <Image
              borderRadius={"full"}
              boxSize={{ base: "90px", md: "150px" }}
              src={data.project_logo}
              backgroundColor={"rgba(255, 255, 255, 0.5)"}
            />
          </Center>

          <Text
            minHeight={"50px"}
            color={selected ? "#170E82" : "white"}
            fontSize={{ base: "16px", md: "20px" }}
            fontFamily={"PilatExtended-Regular"}
            fontWeight={500}
          >
            {data.project_title}
          </Text>
          <Text
            color={selected ? "#170E82" : "white"}
            fontSize={{ base: "14px", md: "16px" }}
            fontFamily={"PilatExtended-Regular"}
            fontWeight={500}
          >
            {data.project_launch.toUpperCase()}
          </Text>

          <SimpleGrid
            templateColumns={"1fr 40px"}
            padding={{ base: "10px", md: "48px" }}
            paddingTop={"12px"}
            textColor={selected ? "#170E82" : "white"}
          >
            <Text textAlign={"left"} fontSize={{ base: "12px", md: "16px" }}>
              Registration Start
            </Text>
            <Text fontWeight={"medium"} fontSize={{ base: "12px", md: "16px" }}>
              {"TBA"}
            </Text>
            <Text textAlign={"left"} fontSize={{ base: "12px", md: "16px" }}>
              Platform Raise
            </Text>
            <Text fontWeight={"medium"} fontSize={{ base: "12px", md: "16px" }}>
              {"TBA"}
            </Text>
          </SimpleGrid>
        </Stack>
      </Box>
      <Center width={{ base: "145px", md: "300px" }}></Center>
    </Box>
  );
}

interface UpcomingProjectProp {
  header?: React.ReactNode;
}

export default function UpcomingProject(prop: UpcomingProjectProp) {
  const [selected, setSelected] = useState(0);
  const projectData = useProjectData();
  const [projects, setProjects] = useState<any[]>([]);
  const [launchStage, setLaunchStage] = useState("PRELAUNCH");
  const [fundraiseToken, setFundraiseToken] = useState("ALL");

  useEffect(() => {
    const projects = projectData;
    const res = projects.filter(
      (x) =>
        x.project_id != WEFUND_ID &&
        x.project_status > PROJECT_STATUS.IncubationGoalSetup &&
        x.project_launch.toLowerCase() == launchStage.toLocaleLowerCase() &&
        (fundraiseToken.toLowerCase() == "all" ||
          x.fund_type.findIndex(
            (token: string) => token == fundraiseToken.toLowerCase()
          ) != -1)
    );
    console.log(res)
    setProjects(res);
  }, [projectData, launchStage, fundraiseToken]);

  return (
    <Box id="Upcoming">
      <Center marginTop={"12px"}>
        {prop.header != null ? (
          prop.header
        ) : (
          <Text
            color="#FFFF"
            fontFamily="PilatExtended-Regular"
            fontSize={{ base: "18px", md: "25px", lg: "30px" }}
            fontWeight={"600"}
          >
            PROJECT <chakra.span color={"#0FB1F5"}>ON WeFund</chakra.span>
          </Text>
        )}
      </Center>
      <Container maxWidth={"container.xl"} marginY={"84px"}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
        >
          <LaunchTabs
            launchStage={launchStage}
            setLaunchStage={setLaunchStage}
          />
          <FundraiseType
            fundraiseToken={fundraiseToken}
            setFundraiseToken={setFundraiseToken}
          />
        </Flex>
        <Box
          borderRadius="16px"
          background="rgba(123, 126, 136, 0.1)"
          mt="20px"
        >
          <SimpleGrid
            minChildWidth={{ base: "140px", md: "300px" }}
            justifyItems={"center"}
          >
            {projects.map((project, i) => (
              <ProjectItem
                data={project}
                index={i}
                selectedIndex={selected}
                setSelected={setSelected}
                key={i}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
