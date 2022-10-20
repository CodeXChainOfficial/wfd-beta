import PageLayout from "../PageLayout";
import Footer from "../Footer";
import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { IoWalletOutline } from "react-icons/io5";
import { InputTransition } from "../ImageTransition";
import { CheckIcon } from "@chakra-ui/icons";
import ProjectApplication from "../OwnerInfo/ProjectApplication";
import GoalList from "../OwnerInfo/OwnerIncubationGoal";
import IfProjectApplication from "../../components/Administrator/ViewProject/IfProjectApplication";
import ProjectInfoListGoal from "../../components/Administrator/ViewProject/Projectlistgoal";
import ProjectInfoListMilestone from "../../components/Administrator/ViewProject/Projectlistmilesone";
import { useOneProjectData, useProjectData } from "../../contexts/store";
import { ParseParam_ProjectId } from "../../utils/utility";

export default function viewproject() {
  const projectID = ParseParam_ProjectId();
  const data = useOneProjectData(projectID);

  return (
    <PageLayout
      title=""
      subTitle1="Welcome Back Admin to"
      subTitle2=""
      subTitle3="&nbsp;Manage $Project"
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
              w={{ base: "100%", sm: "100%", md: "100%", lg: "450px" }}
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
                      wfdvs1r.....5jzx
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
                    890.09778
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
                        2 Goals
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
                        Goal Set
                      </Text>
                      <Text
                        mt="14px"
                        fontFamily="Pilat Extended"
                        fontSize="20px"
                        fontWeight="950"
                        w={"full"}
                      >
                        4 Goals
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
                      Registration
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
                      Selection
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
                      Set Goal
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
                      Approved
                    </Text>
                  </Center>
                  <Center>
                    <Text
                      color={"rgba(15, 177, 245, 1)"}
                      fontFamily={"Montserrat"}
                      fontWeight="600"
                      fontSize="16px"
                    >
                      Publish
                    </Text>
                  </Center>
                </Flex>
              </Flex>

              <Text
                mt="16px"
                fontFamily={"Montserrat"}
                fontWeight="800"
                fontSize="20px"
              >
                Project Milestone - Creation
              </Text>
              <ProjectInfoListMilestone />
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
