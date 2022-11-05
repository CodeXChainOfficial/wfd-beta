<<<<<<< HEAD
import PageLayout from "../../components/PageLayout";
import Footer from "../../components/Footer";
import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { IoWalletOutline } from "react-icons/io5";
import MilestoneList from "../../components/OwnerInfo/MilestoneList";
import MilestoneDetail from "../../components/OwnerInfo/MilestoneDetail";
import GoalList from "../../components/OwnerInfo/OwnerIncubationGoal";
import ProjectApplication from "../../components/OwnerInfo/ProjectApplication";
import MilestoneForIncubation from "../../components/OwnerInfo/OwnerMilestone";
import { InputTransition } from "../../components/ImageTransition";

// {
//   project: "project name",
//   goal: "Goal name",
//   goaldetail:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
//   status: if project on selection/creation phase of goal or milestone then it is "Pending/Voting/Rejected/Approved" else "Pending/Done/On Progress/Rejected",
//   statusdetailed: "Approved at 10/12/22 12:25 PM",
//   statusapproval: "Pending/Voting/Rejected/Approved",
//   vote: "0",
//   yesvote: "0",
//   novote: "0",
//   start: "20 / 07 / 22",
//   end: "15 / 08 / 22",
// },
const projectsdata = [
  {
    project: "project name", //name
    projecttype: "Incubation", //project type, is it fundraising, token, icnubation, fundraiseing and incubation
    status: "Pending", //
    remainingstep: "4", //if its fundraise this become fundraise status
    steptype: "Incubation", //show what type is this project in, fundraise, milestone, registration/approval or incubation
    stepdetail: "Last Goal 12/10/22", //show detail of step, like nr of backer, milestone status, goal or approval status
    stepmetric: "Goal",
    projectprogress: "aaaa",
    projectlink: "", //Link to project detail page. /project
  },
];

export default function index() {
  return <ProjectView projectsteps="incubation" />;
}

interface FillProp {
  children?: React.ReactNode;
  filled?: boolean;
  projectsteps?: string;
}
function ProjectView({ projectsteps }: FillProp) {
  if (projectsteps == "incubation") {
    return (
      <>
        {projectsdata.map((item, index) => (
          <PageLayout
            title=""
            subTitle1="Welcome Back"
            subTitle2=""
            subTitle3="&nbsp; Owner"
            key={index}

          >
            <Box width={"100%"}>
              <Box color={"white"} pb={"5%"} pt="64px">
                <Stack
                  color="white"
                  justifyContent="center"
                  direction={{
                    base: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                  }}
                >
                  <VStack
                    spacing={4}
                    marginBottom={6}
                    align={{
                      base: "center",
                      sm: "center",
                      md: "center",
                      lg: "unset",
                    }}
                    mx={[0, 0, 0]}
                    w={{ base: "100%", sm: "100%", md: "100%", lg: "450px" }}
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
                            Wallet Code xxxx
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
                          0
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
                          <Image
                            alt="wefund"
                            src="/media/wf.svg"
                            mt="2px"
                            h="12px"
                          />
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            ml="8px"
                            fontFamily="Montserrat"
                            fontSize="14px"
                            fontWeight="600"
                            w={"full"}
                          >
                            0.2498488
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
                            24H : +5.74
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
                              {item.projecttype}
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
                              Remaining to Pass
                            </Text>
                            <Text
                              mt="14px"
                              fontFamily="Pilat Extended"
                              fontSize="20px"
                              fontWeight="950"
                              w={"full"}
                            >
                              {item.remainingstep} {item.stepmetric}
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
                              {item.steptype}
                            </Text>
                            <Text
                              mt="14px"
                              fontFamily="Pilat Extended"
                              fontSize="20px"
                              fontWeight="950"
                              w={"full"}
                            >
                              {item.stepdetail}
                            </Text>
                          </Flex>
                        </Flex>
                      </Box>
                    </SimpleGrid>
                    <Link href={item.projectlink} target="_blank">
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
                    <Text
                      fontFamily={"Montserrat"}
                      fontWeight="800"
                      fontSize="20px"
                    >
                      Project {item.steptype} Status
                    </Text>
                    <Flex mt="36px" visibility={{ base: "collapse", md: "visible" }}
                W={{ base: "0px", md: "400px" }}>
                      <Flex direction="column">
                        <BoxContainer filled={true}>
                          <Image
                            position="absolute"
                            top="25%"
                            left="25%"
                            alt="registration icon"
                            src="/media/OwnerInfo/registration_filled.svg"
                          />
                        </BoxContainer>
                        <Center mt="20px">
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Milestone Set
                          </Text>
                        </Center>
                      </Flex>
                      <Center h="82px">
                        <Dash filled={true} />
                      </Center>
                      <Flex direction="column">
                        <BoxContainer>
                          <Image
                            position="absolute"
                            top="25%"
                            left="25%"
                            alt="selection icon"
                            src="/media/OwnerInfo/selection.svg"
                          />
                        </BoxContainer>
                        <Center mt="20px">
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Fundraising
                          </Text>
                        </Center>
                      </Flex>
                      <Center h="82px">
                        <Dash />
                      </Center>
                      <Flex direction="column">
                        <BoxContainer>
                          <Image
                            position="absolute"
                            top="25%"
                            left="25%"
                            alt="goal icon"
                            src="/media/OwnerInfo/goal.svg"
                          />
                        </BoxContainer>
                        <Center mt="20px">
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Milestone
                          </Text>
                        </Center>
                        <Center>
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Begins
                          </Text>
                        </Center>
                      </Flex>
                      <Center h="82px">
                        <Dash />
                      </Center>
                      <Flex direction="column">
                        <BoxContainer>
                          <Image
                            position="absolute"
                            top="25%"
                            left="25%"
                            alt="publish icon"
                            src="/media/OwnerInfo/publish.svg"
                          />
                        </BoxContainer>
                        <Center mt="20px">
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Milestone
                          </Text>
                        </Center>
                        <Center>
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Completed
                          </Text>
                        </Center>
                      </Flex>
                    </Flex>
                    <Flex
                      w="full"
                      direction={"column"}
                      py={"45px"}
                      justifyContent={{
                        base: "center",
                        sm: "center",
                        md: "center",
                        lg: "flex-start",
                      }}
                    >
                      <Text
                        mt="16px"
                        fontFamily={"Montserrat"}
                        fontWeight="800"
                        fontSize="20px"
                      >
                        Project Owner Incubation Goal
                      </Text>
                      <Flex mt="26px">
                        <Box
                          bg="rgba(18, 13, 48, 1)"
                          borderRadius="10px"
                          w="650px"
                        >
                          <Flex direction="column" px="12px" py="8px">
                            <GoalList incubation={true} />
                          </Flex>
                        </Box>
                      </Flex>
                      <Text
                        mt="16px"
                        fontFamily={"Montserrat"}
                        fontWeight="800"
                        fontSize="20px"
                      >
                        Set Fundraising Milestones
                      </Text>
                      <Flex mt="26px">
                        <Box
                          bg="rgba(18, 13, 48, 1)"
                          borderRadius="10px"
                          w="650px"
                        >
                          <Flex direction="column" px="64px" py="16px">
                            <Flex>
                              <Center>
                                <Text
                                  fontFamily={"Montserrat"}
                                  fontWeight="600"
                                  fontSize="16px"
                                  whiteSpace="nowrap"
                                >
                                  Milestone Name
                                </Text>
                              </Center>
                              <InputGroup
                                ml="32px"
                                style={{ background: "rgba(0, 0, 0, 0.25)" }}
                                size="sm"
                                border="0px"
                              >
                                <Input
                                  style={{
                                    border:
                                      " 1.5px solid rgba(255, 255, 255, 0.2)",
                                    background: "transparent",
                                  }}
                                  type="text"
                                  h="42px"
                                  rounded="md"
                                  placeholder="Type Name"
                                />
                              </InputGroup>
                            </Flex>
                            <Flex
                              justifyContent="space-between"
                              w="full"
                              mt="24px"
                            >
                              <Flex direction="column" w="50%">
                                <Text
                                  fontFamily={"Montserrat"}
                                  fontWeight="600"
                                  fontSize="16px"
                                  whiteSpace="nowrap"
                                >
                                  Start Date
                                </Text>
                                <Box mt="16px" w="full">
                                  <InputTransition height="55px" rounded="md">
                                    <InputGroup
                                      size="xs"
                                      style={{
                                        background: "rgba(0, 0, 0, 0.25)",
                                      }}
                                    >
                                      <InputLeftElement
                                        pointerEvents="none"
                                        fontSize="1.2em"
                                      />
                                      <Input
                                        style={{
                                          background: "rgba(0, 0, 0, 0.25)",
                                          border:
                                            " 1.5px solid rgba(255, 255, 255, 0.2)",
                                        }}
                                        type="date"
                                        h="55px"
                                        focusBorderColor="purple.800"
                                        rounded="md"
                                      />
                                    </InputGroup>
                                  </InputTransition>
                                </Box>
                              </Flex>
                              <Flex direction="column" ml="48px" w="50%">
                                <Text
                                  fontFamily={"Montserrat"}
                                  fontWeight="600"
                                  fontSize="16px"
                                  whiteSpace="nowrap"
                                >
                                  End Date
                                </Text>
                                <Box mt="16px" w="full">
                                  <InputTransition height="55px" rounded="md">
                                    <InputGroup
                                      size="xs"
                                      style={{
                                        background: "rgba(0, 0, 0, 0.25)",
                                      }}
                                    >
                                      <InputLeftElement
                                        pointerEvents="none"
                                        fontSize="1.2em"
                                      />
                                      <Input
                                        style={{
                                          background: "rgba(0, 0, 0, 0.25)",
                                          border:
                                            " 1.5px solid rgba(255, 255, 255, 0.2)",
                                        }}
                                        type="date"
                                        h="55px"
                                        focusBorderColor="purple.800"
                                        rounded="md"
                                      />
                                    </InputGroup>
                                  </InputTransition>
                                </Box>
                              </Flex>
                            </Flex>
                            <Flex mt="24px">
                              <Center>
                                <Text
                                  fontFamily={"Montserrat"}
                                  fontWeight="600"
                                  fontSize="16px"
                                  whiteSpace="nowrap"
                                >
                                  Milestone Details
                                </Text>
                              </Center>
                              <InputGroup
                                ml="32px"
                                style={{ background: "rgba(0, 0, 0, 0.25)" }}
                                size="sm"
                                border="0px"
                              >
                                <Textarea
                                  style={{
                                    border:
                                      " 1.5px solid rgba(255, 255, 255, 0.2)",
                                    background: "transparent",
                                  }}
                                  h="42px"
                                  height="110px"
                                  rounded="md"
                                  placeholder="Details of Goal"
                                />
                              </InputGroup>
                            </Flex>
                            <Flex mt="24px">
                              <Center>
                                <Text
                                  fontFamily={"Montserrat"}
                                  fontWeight="600"
                                  fontSize="16px"
                                  whiteSpace="nowrap"
                                >
                                  Milestone Amount
                                </Text>
                              </Center>
                              <InputGroup
                                ml="32px"
                                style={{ background: "rgba(0, 0, 0, 0.25)" }}
                                size="sm"
                                border="0px"
                              >
                                <Input
                                  style={{
                                    border:
                                      " 1.5px solid rgba(255, 255, 255, 0.2)",
                                    background: "transparent",
                                  }}
                                  type="number"
                                  h="42px"
                                  rounded="md"
                                  placeholder="0"
                                />
                              </InputGroup>
                            </Flex>
                          </Flex>
                        </Box>
                      </Flex>
                      <Flex
                        w="full"
                        justifyContent={{
                          base: "center",
                          sm: "center",
                          md: "center",
                          lg: "flex-end",
                        }}
                        direction="column"
                      >
                        <Box px="24px">
                          <Button
                            mt="24px"
                            mb={{ base: "20px", md: "5px" }}
                            w="120px"
                            h="50px"
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
                              Add +
                            </Text>
                          </Button>
                        </Box>
                        <Text
                          mt="16px"
                          fontFamily={"Montserrat"}
                          fontWeight="800"
                          fontSize="20px"
                        >
                          Set Project Milestone Creation
                        </Text>
                        <MilestoneForIncubation />
                      </Flex>
                    </Flex>
                  </Flex>
                </Stack>
              </Box>
            </Box>
            <Footer />
          </PageLayout>
        ))}
      </>
    );
  } else if (projectsteps == "fundraise") {
    return (
      <>
        {projectsdata.map((item, index) => (
          <PageLayout
            title=""
            subTitle1="Welcome Back"
            subTitle2=""
            subTitle3="&nbsp; Owner"
            key={index}
          >
            <Box width={"100%"}>
              <Box color={"white"} pb={"5%"} pt="64px">
                <Stack
                  color="white"
                  justifyContent="center"
                  direction={{
                    base: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                  }}
                >
                  <Center
                    w={{ base: "100%", sm: "100%", md: "100%", lg: "450px" }}
                  >
                    <VStack
                      spacing={4}
                      marginBottom={6}
                      align={{
                        base: "center",
                        sm: "center",
                        md: "center",
                        lg: "unset",
                      }}
                      mx={[0, 0, 0]}
                      w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
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
                              Wallet Code xxxx
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
                            0
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
                            <Image
                              alt="wefund"
                              src="/media/wf.svg"
                              mt="2px"
                              h="12px"
                            />
                            <Text
                              color={"rgba(15, 177, 245, 1)"}
                              ml="8px"
                              fontFamily="Montserrat"
                              fontSize="14px"
                              fontWeight="600"
                              w={"full"}
                            >
                              0.2498488
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
                              24H : +5.74
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
                                {item.projecttype}
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
                                Remaining to Raise
                              </Text>
                              <Text
                                mt="14px"
                                fontFamily="Pilat Extended"
                                fontSize="20px"
                                fontWeight="950"
                                w={"full"}
                              >
                                {item.remainingstep} {item.stepmetric}
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
                                {item.steptype}
                              </Text>
                              <Text
                                mt="14px"
                                fontFamily="Pilat Extended"
                                fontSize="20px"
                                fontWeight="950"
                                w={"full"}
                              >
                                {item.stepdetail}
                              </Text>
                            </Flex>
                          </Flex>
                        </Box>
                      </SimpleGrid>
                      <Link href={item.projectlink} target="_blank">
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
                  </Center>
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
                    <Text
                      fontFamily={"Montserrat"}
                      fontWeight="800"
                      fontSize="20px"
                    >
                      Project {item.steptype} Status
                    </Text>
                    <Flex mt="36px" visibility={{ base: "collapse", md: "visible" }}
                W={{ base: "0px", md: "400px" }}>
                      <Flex direction="column">
                        <BoxContainer filled={true}>
                          <Image
                            position="absolute"
                            top="25%"
                            left="25%"
                            alt="registration icon"
                            src="/media/OwnerInfo/registration_filled.svg"
                          />
                        </BoxContainer>
                        <Center mt="20px">
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Milestone Set
                          </Text>
                        </Center>
                      </Flex>
                      <Center h="82px">
                        <Dash filled={true} />
                      </Center>
                      <Flex direction="column">
                        <BoxContainer>
                          <Image
                            position="absolute"
                            top="25%"
                            left="25%"
                            alt="selection icon"
                            src="/media/OwnerInfo/selection.svg"
                          />
                        </BoxContainer>
                        <Center mt="20px">
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Fundraising
                          </Text>
                        </Center>
                      </Flex>
                      <Center h="82px">
                        <Dash />
                      </Center>
                      <Flex direction="column">
                        <BoxContainer>
                          <Image
                            position="absolute"
                            top="25%"
                            left="25%"
                            alt="goal icon"
                            src="/media/OwnerInfo/goal.svg"
                          />
                        </BoxContainer>
                        <Center mt="20px">
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Milestone
                          </Text>
                        </Center>
                        <Center>
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Begins
                          </Text>
                        </Center>
                      </Flex>
                      <Center h="82px">
                        <Dash />
                      </Center>
                      <Flex direction="column">
                        <BoxContainer>
                          <Image
                            position="absolute"
                            top="25%"
                            left="25%"
                            alt="publish icon"
                            src="/media/OwnerInfo/publish.svg"
                          />
                        </BoxContainer>
                        <Center mt="20px">
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Milestone
                          </Text>
                        </Center>
                        <Center>
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Completed
                          </Text>
                        </Center>
                      </Flex>
                    </Flex>
                    <Flex
                      w="full"
                      direction={"column"}
                      py={"45px"}
                      justifyContent={{
                        base: "center",
                        sm: "center",
                        md: "center",
                        lg: "flex-start",
                      }}
                    >
                      <Text fontWeight={"600"}>Milestone List</Text>
                      <MilestoneList />
                    </Flex>
                  </Flex>
                </Stack>
              </Box>
            </Box>
            <Footer />
          </PageLayout>
        ))}
      </>
    );
  } else if (projectsteps == "registration") {
    return (
      <>
        {projectsdata.map((item, index) => (
          <PageLayout
            title=""
            subTitle1="Welcome Back"
            subTitle2=""
            subTitle3="&nbsp; Owner"
            key={index}
          >
            <Box width={"100%"}>
              <Box color={"white"} pb={"5%"} pt="64px">
                <Stack
                  color="white"
                  justifyContent="center"
                  direction={{
                    base: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                  }}
                >
                  <VStack
                    spacing={4}
                    marginBottom={6}
                    align={{
                      base: "center",
                      sm: "center",
                      md: "center",
                      lg: "unset",
                    }}
                    mx={[0, 0, 0]}
                    w={{ base: "100%", sm: "100%", md: "100%", lg: "450px" }}
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
                            Wallet Code xxxx
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
                          0
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
                          <Image
                            alt="wefund"
                            src="/media/wf.svg"
                            mt="2px"
                            h="12px"
                          />
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            ml="8px"
                            fontFamily="Montserrat"
                            fontSize="14px"
                            fontWeight="600"
                            w={"full"}
                          >
                            0.2498488
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
                            24H : +5.74
                          </Text>
                        </Flex>
                      </Flex>
                    </Box>
                    <SimpleGrid columns={1} spacing={6} p="24px" w="400px">
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
                              {item.projecttype}
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
                              Remaining to Pass
                            </Text>
                            <Text
                              mt="14px"
                              fontFamily="Pilat Extended"
                              fontSize="20px"
                              fontWeight="950"
                              w={"full"}
                            >
                              {item.remainingstep} {item.stepmetric}
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
                              {item.steptype}
                            </Text>
                            <Text
                              mt="14px"
                              fontFamily="Pilat Extended"
                              fontSize="20px"
                              fontWeight="950"
                              w={"full"}
                            >
                              {item.stepdetail}
                            </Text>
                          </Flex>
                        </Flex>
                      </Box>
                    </SimpleGrid>
                    <Link href={item.projectlink} target="_blank">
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
                    <Text
                      fontFamily={"Montserrat"}
                      fontWeight="800"
                      fontSize="20px"
                    >
                      Project {item.steptype} Status
                    </Text>
                    <Flex mt="36px" visibility={{ base: "collapse", md: "visible" }}
                W={{ base: "0px", md: "400px" }}>
                      <Flex direction="column">
                        <BoxContainer filled={true}>
                          <Image
                            position="absolute"
                            top="25%"
                            left="25%"
                            alt="registration icon"
                            src="/media/OwnerInfo/registration_filled.svg"
                          />
                        </BoxContainer>
                        <Center mt="20px">
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Milestone Set
                          </Text>
                        </Center>
                      </Flex>
                      <Center h="82px">
                        <Dash filled={true} />
                      </Center>
                      <Flex direction="column">
                        <BoxContainer>
                          <Image
                            position="absolute"
                            top="25%"
                            left="25%"
                            alt="selection icon"
                            src="/media/OwnerInfo/selection.svg"
                          />
                        </BoxContainer>
                        <Center mt="20px">
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Fundraising
                          </Text>
                        </Center>
                      </Flex>
                      <Center h="82px">
                        <Dash />
                      </Center>
                      <Flex direction="column">
                        <BoxContainer>
                          <Image
                            position="absolute"
                            top="25%"
                            left="25%"
                            alt="goal icon"
                            src="/media/OwnerInfo/goal.svg"
                          />
                        </BoxContainer>
                        <Center mt="20px">
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Milestone
                          </Text>
                        </Center>
                        <Center>
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Begins
                          </Text>
                        </Center>
                      </Flex>
                      <Center h="82px">
                        <Dash />
                      </Center>
                      <Flex direction="column">
                        <BoxContainer>
                          <Image
                            position="absolute"
                            top="25%"
                            left="25%"
                            alt="publish icon"
                            src="/media/OwnerInfo/publish.svg"
                          />
                        </BoxContainer>
                        <Center mt="20px">
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Milestone
                          </Text>
                        </Center>
                        <Center>
                          <Text
                            color={"rgba(15, 177, 245, 1)"}
                            fontFamily={"Montserrat"}
                            fontWeight="600"
                            fontSize="16px"
                          >
                            Completed
                          </Text>
                        </Center>
                      </Flex>
                    </Flex>
                    <Flex
                      w="full"
                      direction={"column"}
                      py={"45px"}
                      justifyContent={{
                        base: "center",
                        sm: "center",
                        md: "center",
                        lg: "flex-start",
                      }}
                    >
                      <Text
                        mt="16px"
                        fontFamily={"Montserrat"}
                        fontWeight="800"
                        fontSize="20px"
                      >
                        Project Application
                      </Text>
                      <ProjectApplication />
                      <Flex mt="36px" direction={"column"}>
                        <Text
                          mt="16px"
                          fontFamily={"Montserrat"}
                          fontWeight="800"
                          fontSize="20px"
                        >
                          Set Project Incubation Goal
                        </Text>
                        <Box
                          bg="#130A49"
                          borderRadius="10px"
                          mt="25px"
                          w="600px"
                        >
                          <Flex direction="column" px="64px" py="16px">
                            <Flex>
                              <Center>
                                <Text
                                  fontFamily={"Montserrat"}
                                  fontWeight="600"
                                  fontSize="16px"
                                  whiteSpace="nowrap"
                                >
                                  Goal Name
                                </Text>
                              </Center>
                              <InputGroup
                                ml="32px"
                                style={{ background: "rgba(0, 0, 0, 0.25)" }}
                                size="sm"
                                border="0px"
                              >
                                <Input
                                  style={{
                                    border:
                                      " 1.5px solid rgba(255, 255, 255, 0.2)",
                                    background: "transparent",
                                  }}
                                  type="text"
                                  h="42px"
                                  rounded="md"
                                  placeholder="Type Name"
                                />
                              </InputGroup>
                            </Flex>
                            <Flex
                              justifyContent="space-between"
                              w="full"
                              mt="24px"
                            >
                              <Flex direction="column" w="50%">
                                <Text
                                  fontFamily={"Montserrat"}
                                  fontWeight="600"
                                  fontSize="16px"
                                  whiteSpace="nowrap"
                                >
                                  Start Date
                                </Text>
                                <Box mt="16px" w="full">
                                  <InputTransition height="55px" rounded="md">
                                    <InputGroup
                                      size="xs"
                                      style={{
                                        background: "rgba(0, 0, 0, 0.25)",
                                      }}
                                    >
                                      <InputLeftElement
                                        pointerEvents="none"
                                        fontSize="1.2em"
                                      />
                                      <Input
                                        style={{
                                          background: "rgba(0, 0, 0, 0.25)",
                                          border:
                                            " 1.5px solid rgba(255, 255, 255, 0.2)",
                                        }}
                                        type="date"
                                        h="55px"
                                        focusBorderColor="purple.800"
                                        rounded="md"
                                      />
                                    </InputGroup>
                                  </InputTransition>
                                </Box>
                              </Flex>
                              <Flex direction="column" ml="48px" w="50%">
                                <Text
                                  fontFamily={"Montserrat"}
                                  fontWeight="600"
                                  fontSize="16px"
                                  whiteSpace="nowrap"
                                >
                                  End Date
                                </Text>
                                <Box mt="16px" w="full">
                                  <InputTransition height="55px" rounded="md">
                                    <InputGroup
                                      size="xs"
                                      style={{
                                        background: "rgba(0, 0, 0, 0.25)",
                                      }}
                                    >
                                      <InputLeftElement
                                        pointerEvents="none"
                                        fontSize="1.2em"
                                      />
                                      <Input
                                        style={{
                                          background: "rgba(0, 0, 0, 0.25)",
                                          border:
                                            " 1.5px solid rgba(255, 255, 255, 0.2)",
                                        }}
                                        type="date"
                                        h="55px"
                                        focusBorderColor="purple.800"
                                        rounded="md"
                                      />
                                    </InputGroup>
                                  </InputTransition>
                                </Box>
                              </Flex>
                            </Flex>
                            <Flex mt="24px">
                              <Center>
                                <Text
                                  fontFamily={"Montserrat"}
                                  fontWeight="600"
                                  fontSize="16px"
                                  whiteSpace="nowrap"
                                >
                                  Goal Details
                                </Text>
                              </Center>
                              <InputGroup
                                ml="32px"
                                style={{ background: "rgba(0, 0, 0, 0.25)" }}
                                size="sm"
                                border="0px"
                              >
                                <Input
                                  style={{
                                    border:
                                      " 1.5px solid rgba(255, 255, 255, 0.2)",
                                    background: "transparent",
                                  }}
                                  type="text"
                                  h="42px"
                                  rounded="md"
                                  placeholder="Details of Goal"
                                />
                              </InputGroup>
                            </Flex>
                          </Flex>
                        </Box>
                      </Flex>
                      <Flex
                        w="full"
                        justifyContent={{
                          base: "center",
                          sm: "center",
                          md: "center",
                          lg: "flex-end",
                        }}
                      >
                        <Box px="24px">
                          <Button
                            mt="24px"
                            mb={{ base: "20px", md: "5px" }}
                            w="120px"
                            h="50px"
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
                              Add +
                            </Text>
                          </Button>
                        </Box>
                      </Flex>
                      <Text
                        mt="16px"
                        fontFamily={"Montserrat"}
                        fontWeight="800"
                        fontSize="20px"
                      >
                        Set Project Goal Creation
                      </Text>
                      <GoalList />
                    </Flex>
                  </Flex>
                </Stack>
              </Box>
            </Box>
            <Footer />
          </PageLayout>
        ))}
      </>
    );
  } else {
    return (
      <PageLayout title="" subTitle1="" subTitle2="" subTitle3="Unauthorized">
        <Footer />
      </PageLayout>
    );
  }
}
function BoxContainer({ children, filled = false }: FillProp) {
  if (filled) {
    return (
      <Box
        position="relative"
        width="82px"
        height="82px"
        bg="rgba(66, 232, 224, 1)"
        borderRadius="20px"
        borderStyle="solid"
        borderWidth="2px"
        borderColor="rgba(66, 232, 224, 1)"
      >
        {children}
      </Box>
    );
  } else {
    return (
      <Box
        position="relative"
        width="82px"
        height="82px"
        bg="rgba(0, 163, 255, 0.09)"
        borderRadius="20px"
        borderStyle="solid"
        borderWidth="2px"
        borderColor="rgba(66, 232, 224, 1)"
      >
        {children}
      </Box>
    );
  }
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
=======
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMetamaskWallet } from "../../contexts/metamask";
import { useOneProjectData } from "../../hook/FetchProject";
import { PROJECT_STATUS } from "../../types/ProjectStatus";
import { ParseParam_ProjectId } from "../../utils/utility";

const OwnerInfo = () => {
  const projectID = ParseParam_ProjectId();
  const data = useOneProjectData(projectID);
  const wallet = useMetamaskWallet();
  const address = wallet.account;
  const router = useRouter();

  useEffect(() => {
    if (data) {
      if (data.project_status >= PROJECT_STATUS.CrowdFundraising)
        router.push(`/ownerinfo/viewproject/milestone?project_id=${projectID}`);
      else if (data.project_status >= PROJECT_STATUS.IncubationGoal)
        router.push(
          `/ownerinfo/viewproject/incubation?project_id=${projectID}`
        );
      else
        router.push(`/ownerinfo/viewproject/approval?project_id=${projectID}`);
    }
  }, [data]);
};

export default OwnerInfo;
>>>>>>> ec01e489cc02bbb51978d4d30314b372a9f26306
