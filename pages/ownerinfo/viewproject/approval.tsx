import React, { useState, useEffect } from "react";
import PageLayout from "../../../components/PageLayout";
import Footer from "../../../components/Footer";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoWalletOutline, IoFileTrayFull, IoCallSharp } from "react-icons/io5";
import { IoMdThumbsUp } from "react-icons/io";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { IconType } from "react-icons/lib";

import { useOneProjectData } from "../../../hook/FetchProject";
import {
  GetProjectStatusText,
  ParseParam_ProjectId,
  ShortenAddress,
} from "../../../utils/utility";
import { useMetamaskWallet } from "../../../contexts/metamask";
import { WFD_TOKEN_INFO } from "../../../config/constants";
import { PROJECT_STATUS } from "../../../types/ProjectStatus";
import ProjectApplication from "../../../components/OwnerInfo/ProjectApplication";
import ProjectApplyIncubation from "../../../components/OwnerInfo/ProjectApplication/Incubation";
import SetIncubation from "../../../components/OwnerInfo/ProjectApplication/SetIncubation";

export const APPLICATION_BASE_STATUS = 1;

export const APPLICATION_STEPS = [
  {
    image: IoFileTrayFull,
    label: "Registration",
  },
  {
    image: BsFillCalendar2CheckFill,
    label: "Document Check",
  },
  {
    image: IoCallSharp,
    label: "Set Calls",
  },
  {
    image: IoMdThumbsUp,
    label: "Approved to Incubation / Fundraise",
  },
];

export default function ViewProjectApproval() {
  const [passedStatus, setPassedStatus] = useState(0);
  const [remainStatus, setRemainStatus] = useState(0);
  const projectID = ParseParam_ProjectId();
  const data = useOneProjectData(projectID);
  const wallet = useMetamaskWallet();
  const address = wallet.account;

  useEffect(() => {
    if (data) {
      setPassedStatus(data.project_status - PROJECT_STATUS.DocumentValuation);
      setRemainStatus(
        data.project_status > PROJECT_STATUS.IncubationGoalSetup
          ? 0
          : PROJECT_STATUS.IncubationGoalSetup - data.project_status + 1
      );
    }
  }, [data]);

  return (
    <PageLayout
      title=""
      subTitle1="Welcome Back Admin to "
      subTitle2=" "
      subTitle3={` Project Applicant!`}
    >
      <Stack
        color="white"
        direction={{ base: "column", lg: "row" }}
        pb={"5%"}
        pt="64px"
        px={{ base: "0px", md: "64px" }}
        w="100%"
      >
        <VStack
          spacing={4}
          marginBottom={6}
          align={{ base: "center", lg: "unset" }}
          w={{ base: "100%", lg: "450px" }}
          mx={[0, 0, 0]}
        >
          <Box
            p="24px"
            _hover={{ shadow: "lg" }}
            position="relative"
            rounded="md"
          >
            <Flex>
              <Box
                bg="#120D30"
                w={"50px"}
                h={"50px"}
                justifyContent={"center"}
                rounded={"md"}
              >
                <Center w={"50px"} h={"50px"}>
                  <IoWalletOutline size={40} />
                </Center>
              </Box>
              <Flex
                direction="column"
                alignContent="start"
                justifyContent="start"
                pl={3}
              >
                <Text
                  fontFamily="Montserrat"
                  fontSize="24px"
                  color="white"
                  w="full"
                >
                  WFD Wallet
                </Text>
                <Text fontSize="sm" color={"rgba(15, 177, 245, 1)"} w={"full"}>
                  {ShortenAddress(address)}
                </Text>
              </Flex>
            </Flex>
            <Flex mt="16px">
              <Text
                lineHeight="72px"
                fontFamily="Pilat Extended"
                fontSize="45px"
                fontWeight="950"
                w={"full"}
              >
                {WFD_TOKEN_INFO.pool}
              </Text>
              <Text
                pl="8px"
                mt="24px"
                fontFamily="Pilat Extended"
                fontSize="20px"
                fontWeight="950"
                w={"full"}
              >
                $
              </Text>
            </Flex>
            <Flex justify="space-between">
              <Flex>
                <Image alt="wefund" src="/media/wf.svg" mt="2px" h="12px" />
                <Text
                  color={"rgba(15, 177, 245, 1)"}
                  ml="8px"
                  fontFamily="Montserrat"
                  fontSize="14px"
                  fontWeight="600"
                  w={"full"}
                >
                  {WFD_TOKEN_INFO.price}
                </Text>
              </Flex>
              <Flex>
                <Text
                  color={"rgba(15, 177, 245, 1)"}
                  ml="8px"
                  fontFamily="Montserrat"
                  fontSize="14px"
                  fontWeight="600"
                  w={"full"}
                >
                  24H :{" "}
                  {WFD_TOKEN_INFO.up > 0
                    ? `+${WFD_TOKEN_INFO.up}%`
                    : `-${-1 * WFD_TOKEN_INFO.up}%`}
                </Text>
              </Flex>
            </Flex>
          </Box>
          <SimpleGrid
            columns={1}
            spacing={6}
            p="24px"
            w={{ base: "100%", md: "450px" }}
          >
            <Box bg="#120D30" borderRadius="20px">
              <Flex p="24px">
                <Image
                  alt="voting power"
                  src="/media/OwnerInfo/voting_power.svg"
                  h="64px"
                />
                <Flex direction="column" ml="16px">
                  <Text
                    color={"rgba(15, 177, 245, 1)"}
                    fontFamily="Montserrat"
                    fontSize="14px"
                    fontWeight="600"
                    w={"full"}
                  >
                    Project Type
                  </Text>
                  <Text
                    mt="14px"
                    fontFamily="Pilat Extended"
                    fontSize="20px"
                    fontWeight="950"
                    w={"full"}
                  >
                    Incubation
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Box bg="#120D30" borderRadius="20px">
              <Flex p="24px">
                <Image
                  alt="backer"
                  src="/media/OwnerInfo/backer.svg"
                  h="64px"
                />
                <Flex direction="column" ml="16px">
                  <Text
                    color={"rgba(15, 177, 245, 1)"}
                    fontFamily="Montserrat"
                    fontSize="14px"
                    fontWeight="600"
                    w={"full"}
                  >
                    Remaining Step to Pass
                  </Text>
                  <Text
                    mt="14px"
                    fontFamily="Pilat Extended"
                    fontSize="20px"
                    fontWeight="950"
                    w={"full"}
                  >
                    {remainStatus} Goals
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Box bg="#120D30" borderRadius="20px">
              <Flex p="24px">
                <Box
                  height="64px"
                  width="46px"
                  bg="rgba(22.31, 115.39, 255, 0.42)"
                  borderRadius="10"
                  borderWidth="2"
                  borderStyle="solid"
                  borderColor="rgba(105.19, 120.17, 255, 0.51)"
                />
                <Flex direction="column" ml="16px">
                  <Text
                    color={"rgba(15, 177, 245, 1)"}
                    fontFamily="Montserrat"
                    fontSize="14px"
                    fontWeight="600"
                    w={"full"}
                  >
                    Status
                  </Text>
                  <Text
                    mt="14px"
                    fontFamily="Pilat Extended"
                    fontSize="20px"
                    fontWeight="950"
                    w={"full"}
                  >
                    {GetProjectStatusText(data?.project_status)}
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </SimpleGrid>
          <Link href="/" target="_blank">
            <Box px="24px">
              <Button
                mt="24px"
                mb={{ base: "20px", md: "5px" }}
                w="full"
                h="76px"
                bg={
                  "linear-gradient(180deg, rgba(0, 193, 255, 0.1) 0%, rgba(0, 193, 255, 0.1) 100%)"
                }
                border="1.5px solid #00A3FF"
                rounded="33px"
              >
                <Text fontFamily={"Gilroy"} fontWeight="800" fontSize="20px">
                  Project Detail
                </Text>
                <Image ml="8px" src="/media/ArrowRight.png" />
              </Button>
            </Box>
          </Link>
        </VStack>
        <Flex
          align={{ base: "center", lg: "flex-start" }}
          direction="column"
          p="24px"
        >
          <Text fontFamily={"Montserrat"} fontWeight="800" fontSize="20px">
            Project Journey Status
          </Text>
          <Flex mt="36px" w="100%">
            {APPLICATION_STEPS.map((step, index, data) => {
              return (
                <>
                  <Flex
                    direction="column"
                    key={index}
                    align="center"
                    w={{ base: "50px", md: "82px" }}
                  >
                    <BoxContainer
                      filled={index < APPLICATION_BASE_STATUS + passedStatus}
                      image={step.image}
                    />
                    <Center mt="20px" w="130%">
                      <Text
                        color={"rgba(15, 177, 245, 1)"}
                        fontFamily={"Montserrat"}
                        fontWeight="600"
                        fontSize={{ base: "12px", md: "16px" }}
                        align="center"
                      >
                        {step.label}
                      </Text>
                    </Center>
                  </Flex>
                  {index < data.length - 1 && (
                    <Center h={{ base: "50px", md: "82px" }}>
                      <Dash
                        filled={
                          index < APPLICATION_BASE_STATUS + passedStatus - 1
                        }
                      />
                    </Center>
                  )}
                </>
              );
            })}
          </Flex>
          <Text
            mt="16px"
            fontFamily={"Montserrat"}
            fontWeight="800"
            fontSize="20px"
          >
            Project Information
          </Text>
          <ProjectApplication data={data} />

          <Text
            mt="43px"
            fontFamily={"Montserrat"}
            fontWeight="800"
            fontSize="20px"
          >
            Set Project Incubation Goal
          </Text>
          <SetIncubation data={data} />
          <ProjectApplyIncubation data={data} />
        </Flex>
      </Stack>
      <Footer />
    </PageLayout>
  );
}

interface FillProp {
  filled?: boolean;
  image: IconType;
}

export function BoxContainer(props: FillProp) {
  return (
    <Flex
      w="100%"
      h={{ base: "50px", md: "82px" }}
      bg={props.filled ? "rgba(66, 232, 224, 1)" : "rgba(0, 163, 255, 0.09)"}
      borderRadius="20px"
      borderStyle="solid"
      borderWidth="2px"
      borderColor="rgba(66, 232, 224, 1)"
      justify="center"
      align="center"
    >
      <props.image size="50%" color={props.filled ? "black" : "#42E8E0"} />
    </Flex>
  );
}

export function Dash({ filled = false }: { filled: boolean }) {
  return (
    <Box
      width={{ base: "25px", md: "72px" }}
      border={
        filled
          ? "2px solid rgba(66, 232, 224, 1)"
          : "2px dashed rgba(66, 232, 224, 1)"
      }
    />
  );
}
