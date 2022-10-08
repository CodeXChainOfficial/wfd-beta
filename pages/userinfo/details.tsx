import React, { useState, useEffect, useRef } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  Center,
  Square,
  VStack,
  Stack,
  Heading,
  Tag,
  Image,
  Avatar,
  Accordion,
  Progress,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
} from "@chakra-ui/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { toast } from "react-toastify";
import { WEFUND_ID } from "../../config/constants";

import { checkNetwork } from "../../utils/utility";
import { SUCCESS_OPTION } from "../../config/constants";
import {
  useCommunityData,
  useProjectData,
  useStore,
} from "../../contexts/store";
import { IoDownloadOutline, IoWalletOutline } from "react-icons/io5";
import { RiUpload2Line } from "react-icons/ri";
import Footer from "../../components/Footer";
import Hero from "../../components/User/Hero";

export default function UserSideSnippet() {
  const { state, dispatch } = useStore();
  const [contributes, setContributes] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [activeTab, setActiveTab] = useState("Account");
  const [tokens, setTokens] = useState<any[]>([]);
  const projectData = useProjectData();
  const communityData = useCommunityData();

  async function fetchContractQuery() {
    try {
      let projectCount = 0;
      let totalbacked = 0;
      const tokens: any[] = [];

      for (let i = 0; i < projectData.length; i++) {
        const one = projectData[i];
        for (let j = 0; j < one.backer_states.length; j++) {
          if (one.backer_states[j].backer_wallet == state.address) {
            projectCount++;
            totalbacked += one.backer_states[j].ust_amount.amount;
          }
        }

        if (one.project_id != WEFUND_ID && one.token_addr != "") {
          const userInfo: any = {};
          const pending: any = {};
          const tokenInfo: any = {};

          tokens.push({
            project_id: one.project_id,
            symbol: tokenInfo.symbol,
            amount: userInfo.total_amount - userInfo.released_amount,
            pendingAmount: pending,
          });
        }
      }
      setProjectCount(projectCount);
      setContributes(totalbacked / 10 ** 6);
      setTokens(tokens);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchContractQuery();
  }, [state.address]);

  async function addCommunityMember() {
    if (checkNetwork(state) == false) return SUCCESS_OPTION;
    for (let i = 0; i < communityData.length; i++) {
      if (communityData[i] == state.address) {
        toast("Already Registered", SUCCESS_OPTION);
        return;
      }
    }
  }

  function removeCommunityMember() {
    if (checkNetwork(state) == false) return false;
  }

  function claim(project_id: number) {
    if (checkNetwork(state) == false) return false;
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Hero />
      <Box
        border="3px solid rgba(15, 177, 245, 0.28)"
        borderRadius="15px"
        m="128px"
        pb="128px"
      >
        {[...Array(2)].map((_, i) => (
          <VStack key={i} color="white" pt={"3em"} w={"100%"}>
            <Accordion allowToggle>
              <AccordionItem
                bg="#120D30"
                rounded={"lg"}
                border="0px"
                borderColor="gray.200"
                mt={"2em"}
                w={"100%"}
              >
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Box p={6}>
                        <Stack
                          direction={{ base: "column", md: "row", lg: "row" }}
                          justify={"center"}
                          spacing={{ base: 0, sm: 2, md: 36, lg: 48 }}
                          w={"100%"}
                        >
                          <Flex justify={"center"}>
                            <Avatar
                              size={"lg"}
                              src={"/logolink"}
                              border="2px solid white"
                            />
                            <Center>
                              <Stack
                                spacing={0}
                                align={"center"}
                                mb={5}
                                w={"100%"}
                              >
                                <Heading
                                  fontSize={"2xl"}
                                  fontWeight={500}
                                  fontFamily={"body"}
                                  color="white"
                                  px={"30px"}
                                >
                                  WFD/Fantom
                                </Heading>
                              </Stack>
                            </Center>
                          </Flex>
                          <Stack
                            direction={"row"}
                            justify={"center"}
                            spacing={{ base: 8, sm: 8, md: 24, lg: 32 }}
                          >
                            <Stack spacing={0} align={"center"}>
                              <Text
                                fontSize={"16px"}
                                fontWeight={600}
                                color={"gray.500"}
                              >
                                Investing
                              </Text>
                              <Text fontWeight={600} fontSize={"20px"}>
                                $100
                              </Text>
                            </Stack>
                            <Stack spacing={0} align={"center"}>
                              <Text
                                fontSize={"16px"}
                                fontWeight={600}
                                color={"gray.500"}
                              >
                                Earnings
                              </Text>
                              <Text fontWeight={600} fontSize={"20px"}>
                                $ 0
                              </Text>
                            </Stack>
                          </Stack>
                        </Stack>
                      </Box>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg="rgba(0, 0, 0, 0.33)">
                  <Flex maxW={"250px"}>
                    <Stack>
                      <Text
                        fontSize={"xl"}
                        fontWeight={500}
                        color="white"
                        px={"30px"}
                      >
                        Descriptions
                      </Text>
                      <Text
                        fontSize={"14px"}
                        fontWeight={200}
                        color="white"
                        px={"30px"}
                        py={"15px"}
                        pb="128px"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Text>
                      <Center>
                        <Box
                          width="92%"
                          border="1px solid rgba(255, 255, 255, 0.5)"
                          height="0px"
                        />
                      </Center>
                      <Stack
                        direction={{ base: "column", sm: "row", lg: "row" }}
                        justify={"center"}
                        spacing={12}
                        width={"100%"}
                        px={8}
                        pt="16px"
                      >
                        <Progress
                          borderRadius="18px"
                          colorScheme="purple"
                          height="32px"
                          my={"12px"}
                          value={20}
                          width={"100%"}
                        />
                        <Text
                          fontSize={{ base: "12px", sm: "14px", lg: "16px" }}
                          fontWeight={200}
                          color="white"
                          py={"15px"}
                          width={{ base: "8px", sm: "100px", lg: "300px" }}
                        >
                          20% Progress
                        </Text>
                        <Text
                          fontSize={{ base: "12px", sm: "14px", lg: "16px" }}
                          fontWeight={200}
                          color="white"
                          py={"15px"}
                          width={{ base: "80px", sm: "100px", lg: "350px" }}
                        >
                          Backed 2022-06-23
                        </Text>
                      </Stack>
                    </Stack>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </VStack>
        ))}
      </Box>

      <Image
        width="100%"
        objectFit="contain"
        src="/media/background_non_streak.svg"
      />
      <Footer />
    </>
  );
}
