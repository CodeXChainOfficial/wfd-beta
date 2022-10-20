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

import IfProjectApplication from "../../../components/Administrator/ViewProject/ProjectApplication";
import { useOneProjectData, useProjectData } from "../../../contexts/store";
import {
  GetProjectStatusText,
  ParseParam_ProjectId,
  ShortenAddress,
} from "../../../utils/utility";
import { useMetamaskWallet } from "../../../contexts/metamask";
import { WFD_TOKEN_INFO } from "../../../config/constants";

export default function ViewProjectApproval() {
  const [passedStatus, setPassedStatus] = useState(0);
  const [remainStatus, setRemainStatus] = useState(0);
  const projectID = ParseParam_ProjectId();
  const data = useOneProjectData(projectID);
  const wallet = useMetamaskWallet();
  const address = wallet.account;

  const baseStatus = 1;
  const startStatus = 0;
  const endStatus = 2;

  useEffect(() => {
    if (data) {
      setPassedStatus(data.project_status - startStatus);
      setRemainStatus(
        data.project_status > endStatus
          ? 0
          : endStatus - data.project_status + 1
      );
    }
  }, [data]);

  return (
    <PageLayout
      title=""
      subTitle1="Welcome Back Admin to "
      subTitle2=" "
      subTitle3={` Manage ${data?.project_title}`}
    >
      <Box width={"100%"}>
        <Box color={"white"} pb={"5%"} pt="64px">
          <Stack
            color="white"
            justifyContent="center"
            direction={{
              base: "column",
              lg: "row",
            }}
          >
            <VStack
              spacing={4}
              marginBottom={6}
              align={{
                base: "center",
                lg: "unset",
              }}
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
                    <Text
                      fontSize="sm"
                      color={"rgba(15, 177, 245, 1)"}
                      w={"full"}
                    >
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
              <SimpleGrid columns={1} spacing={6} p="24px" w="450px">
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
                    <Text
                      fontFamily={"Gilroy"}
                      fontWeight="800"
                      fontSize="20px"
                    >
                      Project Detail
                    </Text>
                    <Image ml="8px" src="/media/ArrowRight.png" />
                  </Button>
                </Box>
              </Link>
            </VStack>
            <Flex
              align={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "flex-start",
              }}
              direction="column"
              p="24px"
            >
              <Text fontFamily={"Montserrat"} fontWeight="800" fontSize="20px">
                Project Journey Status
              </Text>
              <Flex mt="36px">
                {Steps.map((step, index, data) => {
                  return (
                    <>
                      <Flex
                        direction="column"
                        key={index}
                        w="82px"
                        align="center"
                      >
                        <BoxContainer
                          filled={index < baseStatus + passedStatus}
                        >
                          <step.image
                            size="50%"
                            color={
                              index < baseStatus + passedStatus
                                ? "black"
                                : "#42E8E0"
                            }
                          />
                        </BoxContainer>
                        <Center mt="20px" w="130%">
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                            align="center"
                          >
                            {step.label}
                          </Text>
                        </Center>
                      </Flex>
                      {index < data.length - 1 && (
                        <Center h="82px">
                          <Dash
                            filled={index < baseStatus + passedStatus - 1}
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
              <IfProjectApplication data={data} />
            </Flex>
          </Stack>
        </Box>
      </Box>
      <Footer />
    </PageLayout>
  );
}

interface FillProp {
  children?: React.ReactNode;
  filled?: boolean;
}

function BoxContainer({ children, filled = false }: FillProp) {
  return (
    <Flex
      width="82px"
      height="82px"
      bg={filled ? "rgba(66, 232, 224, 1)" : "rgba(0, 163, 255, 0.09)"}
      borderRadius="20px"
      borderStyle="solid"
      borderWidth="2px"
      borderColor="rgba(66, 232, 224, 1)"
      justify="center"
      align="center"
    >
      {children}
    </Flex>
  );
}

function Dash({ children, filled = false }: FillProp) {
  if (filled) {
    return <Box width="72px" height="5px" bg="rgba(66, 232, 224, 1)" />;
  } else {
    return (
      <Flex>
        <Box
          ml="6px"
          mr="6px"
          width="17px"
          height="4px"
          bg="rgba(66, 232, 224, 1)"
        />
        <Box mr="6px" width="17px" height="4px" bg="rgba(66, 232, 224, 1)" />
        <Box mr="6px" width="17px" height="4px" bg="rgba(66, 232, 224, 1)" />
        {children}
      </Flex>
    );
  }
}

const Steps = [
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
