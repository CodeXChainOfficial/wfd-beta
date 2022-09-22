import React, { useState, useEffect, useRef } from "react";
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
  Spacer,
} from "@chakra-ui/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { toast } from "react-toastify";
import { WEFUND_ID, SUCCESS_OPTION } from "../../config/constants";
import { checkNetwork } from "../../utils/utility";

import { useKeplrWallet } from "../../contexts/keplrWallet";
import {
  useCommunityData,
  useProjectData,
  useStore,
} from "../../contexts/store";
import { IoDownloadOutline, IoWalletOutline } from "react-icons/io5";
import { RiUpload2Line } from "react-icons/ri";
import Footer from "../../components/Footer";
import { useContainerDimensions } from "../../utils/dimension";

export default function UserSideSnippet() {
  const { state, dispatch } = useStore();
  const [contributes, setContributes] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [activeTab, setActiveTab] = useState("Account");
  const [tokens, setTokens] = useState<any[]>([]);

  const projectData = useProjectData();
  const communityData = useCommunityData();
  const wallet = useKeplrWallet();
  const account = wallet.account;

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
    // if (checkNetwork(state) == false) return false;
    // for (let i = 0; i < communityData.length; i++) {
    //   if (communityData[i] == state.address) {
    //     toast("Already Registered", SUCCESS_OPTION);
    //     return;
    //   }
    // }
  }

  function removeCommunityMember() {
    // if (checkNetwork(state) == false) return false;
  }

  function claim(project_id: number) {
    // if (checkNetwork(state) == false) return false;
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1440 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1440, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box width={"100%"}>
      <Box color={"white"} padding={"5%"} mt="150px">
        <Stack
          color="white"
          justifyContent="center"
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
        >
          <Center w={{ base: "100%", sm: "100%", md: "14%", lg: "14%" }}>
            <VStack
              spacing={4}
              marginBottom={6}
              align="left"
              mx={[0, 0, 0]}
              w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
            >
              <Box _hover={{ shadow: "lg" }} position="relative" rounded="md">
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
                  <VStack alignContent="start" justifyContent="start" pl={3}>
                    <Text
                      fontFamily="Montserrat"
                      fontSize="24px"
                      color="white"
                      w="full"
                    >
                      {wallet && wallet.config.chainName} Wallet
                    </Text>
                    <Text fontSize="sm" color={"#69E4FF"} w={"full"}>
                      {wallet && wallet.account.substr(0, 14)}
                      {wallet && "...."}
                      {wallet && wallet.account.substr(-14, 14)}
                    </Text>
                  </VStack>
                </Flex>
              </Box>
              <Box
                px={4}
                py={5}
                _hover={{ shadow: "lg" }}
                bg="#120D30"
                position="relative"
                rounded="md"
              >
                <Flex justifyContent="space-between">
                  <Flex color={"white"}>
                    <Stack spacing={2} pl={3} align="left">
                      <Text
                        align="left"
                        fontWeight="600"
                        lineHeight="107.69%"
                        fontSize={"18px"}
                      >
                        My Contribution
                      </Text>
                      <Text
                        align="left"
                        fontWeight="950"
                        fontSize="26px"
                        pt={"30px"}
                      >
                        [0.00] Juno
                      </Text>
                      <Text align="left" fontWeight="500" fontSize="18px">
                        $ 0.00
                      </Text>
                    </Stack>
                  </Flex>
                </Flex>
              </Box>
              <HStack mt="16px" justifyContent="space-between">
                <Button
                  w={{
                    base: "90px",
                    sm: "100px",
                    md: "140px",
                    lg: "150px",
                  }}
                  h={"50px"}
                  bg="rgba(0, 163, 255, 0.14)"
                  border="1.5px solid #00A3FF"
                  color={"#FFFFFF"}
                  fontWeight={"600"}
                  fontSize={"16px"}
                >
                  <IoDownloadOutline size={30} />
                  <Text ml={"5px"}>Deposit</Text>
                </Button>
                <Button
                  w={{
                    base: "90px",
                    sm: "100px",
                    md: "140px",
                    lg: "150px",
                  }}
                  h={"50px"}
                  bg="rgba(0, 163, 255, 0.14)"
                  border="1.5px solid #00A3FF"
                  color={"#FFFFFF"}
                  fontWeight={"600"}
                  fontSize={"16px"}
                >
                  <RiUpload2Line size={30} />
                  <Text ml={"5px"}>Withdraw</Text>
                </Button>
              </HStack>
            </VStack>
          </Center>
          <Flex pt="76px" justifyContent="space-between">
            <Flex color={"white"}>
              <Stack pl={3} align="left" w={"100%"}>
                <Stack
                  w="700px"
                  direction={{
                    base: "column",
                    lg: "row",
                  }}
                  px={2}
                  py={2}
                  pb="14px"
                  align="stretch"
                  justify="center"
                >
                  <VStack w={"full"}>
                    <Box
                      bg={"rgba(0, 102, 153, 0.14)"}
                      w={"100%"}
                      py={"20px"}
                      rounded={"lg"}
                    >
                      <Text
                        mt="10px"
                        fontWeight="950"
                        fontSize="48px"
                        lineHeight={"160%"}
                        align={"center"}
                      >
                        $ {contributes}
                      </Text>
                    </Box>
                    <Text fontWeight="750" fontSize="21px" lineHeight={"160%"}>
                      Contribution
                    </Text>
                  </VStack>
                  <VStack w={"full"}>
                    <Box
                      bg={"rgba(0, 102, 153, 0.14)"}
                      w={"100%"}
                      py={"20px"}
                      rounded={"lg"}
                    >
                      <Text
                        mt="10px"
                        fontWeight="950"
                        fontSize="48px"
                        lineHeight={"160%"}
                        align={"center"}
                      >
                        {projectCount}
                      </Text>
                    </Box>
                    <Text fontWeight="750" fontSize="21px" lineHeight={"160%"}>
                      Whitelisted
                    </Text>
                  </VStack>
                  <VStack w={"full"}>
                    <Box
                      bg={"rgba(0, 102, 153, 0.14)"}
                      w={"100%"}
                      py={"20px"}
                      rounded={"lg"}
                    >
                      <Text
                        mt="10px"
                        fontWeight="950"
                        fontSize="48px"
                        lineHeight={"160%"}
                        align={"center"}
                      >
                        {projectCount}
                      </Text>
                    </Box>
                    <Text fontWeight="750" fontSize="21px" lineHeight={"160%"}>
                      Project Backed
                    </Text>
                  </VStack>
                </Stack>
                <Box alignSelf="end" paddingEnd="16px">
                  <Link href={"userinfo/details"}>
                    <Button
                      w={"150px"}
                      h={"50px"}
                      bg="rgba(0, 163, 255, 0.14)"
                      border="1.5px solid #00A3FF"
                      color={"#FFFFFF"}
                      fontWeight={"600"}
                      fontSize={"16px"}
                    >
                      <Text ml={"5px"}>Details</Text>
                    </Button>
                  </Link>
                </Box>
              </Stack>
            </Flex>
          </Flex>
        </Stack>
        <Center>
          <Box pt="64px" width={{ base: "100%", lg: "80%" }}>
            <Center>
              <Text
                fontFamily="Montserrat"
                fontWeight="600"
                fontSize="22px"
                lineHeight={"24px"}
              >
                Project Overview
              </Text>
            </Center>
            <Carousel
              autoPlay
              swipeable={true}
              showDots={false}
              responsive={responsive}
            >
              {[...Array(6)].map((_, i) => (
                <Flex key={i} justifyContent={"center"}>
                  <Center py={6}>
                    <Box
                      maxW="500px"
                      w="full"
                      bg={"white"}
                      boxShadow={"2xl"}
                      rounded={"md"}
                      bg="#120D30"
                    >
                      <Flex direction="row">
                        <Box
                          width="180px"
                          height="260px"
                          bg="rgba(0, 0, 0, 0.49)"
                          borderRadius="15"
                          m="16px"
                        />
                        <Box>
                          <Flex pt="64px" pb={"16px"}>
                            <Center>
                              <Stack spacing={0} align={"center"}>
                                <Heading
                                  fontSize={"2xl"}
                                  fontWeight={500}
                                  fontFamily={"body"}
                                  color="white"
                                  px={"16px"}
                                >
                                  WFD/Fantom
                                </Heading>
                              </Stack>
                            </Center>
                          </Flex>
                          <Box pt="16px" pl="16px" pr="32px">
                            <Stack
                              direction={"row"}
                              justify={"center"}
                              spacing={24}
                            >
                              <Stack spacing={2} align={"center"}>
                                <Text
                                  fontSize={"16px"}
                                  fontWeight={600}
                                  color={"gray.500"}
                                >
                                  Rewards
                                </Text>
                                <Text fontWeight={600} fontSize={"20px"}>
                                  -
                                </Text>
                              </Stack>
                              <Stack spacing={2} align={"center"}>
                                <Text
                                  fontSize={"16px"}
                                  fontWeight={600}
                                  color={"gray.500"}
                                >
                                  Invested
                                </Text>
                                <Text fontWeight={600} fontSize={"20px"}>
                                  $ 0
                                </Text>
                              </Stack>
                            </Stack>

                            <Stack
                              pt="8px"
                              direction={"row"}
                              justify={"center"}
                              spacing={24}
                            >
                              <Stack spacing={2} align={"center"}>
                                <Text
                                  fontSize={"16px"}
                                  fontWeight={600}
                                  color={"gray.500"}
                                >
                                  Earnings
                                </Text>
                                <Text fontWeight={600} fontSize={"20px"}>
                                  $0
                                </Text>
                              </Stack>
                              <Stack spacing={2} align={"center"}>
                                <Text
                                  fontSize={"16px"}
                                  fontWeight={600}
                                  color={"gray.500"}
                                >
                                  Vesting
                                </Text>
                                <Text fontWeight={600} fontSize={"20px"}>
                                  -
                                </Text>
                              </Stack>
                            </Stack>
                          </Box>
                        </Box>
                      </Flex>
                    </Box>
                  </Center>
                </Flex>
              ))}
            </Carousel>
          </Box>
        </Center>
        <VStack pt="64px" spacing={4} marginBottom={6} align="center" mx={[0, 0, 6]}>
          <Box px={4} py={5} _hover={{ shadow: "lg" }} position="relative">
            <Flex justifyContent="space-between">
              <Flex color={"white"}>
                <Stack
                  spacing={2}
                  pl={3}
                  align="center"
                  direction={{ base: "column", md: "row", lg: "row" }}
                >
                  <VStack w={{ base: "100%", md: "50%" }}>
                    <Box
                      bg="#120D30"
                      py={"20px"}
                      rounded={"lg"}
                      minH={"136px"}
                      fontSize={{ base: "14px", md: "18px", lg: "21px" }}
                    >
                      <Text
                        mt="10px"
                        fontWeight="500"
                        lineHeight={"160%"}
                        align={"center"}
                        fontSize={"22px"}
                      >
                        Invite Backers
                      </Text>
                      <Text mt="10px" lineHeight={"160%"} align={"center"}>
                        Earn WFD and other bonuses for referring project
                        backers.
                      </Text>
                      <Box bg={"black"} px={"20px"} py={"5px"} rounded={"lg"}>
                        <Text mt="10px" align={"center"}>
                          wfd1rj8wkx2ze4639r........aa55
                        </Text>
                      </Box>
                    </Box>
                  </VStack>

                  <VStack w={{ base: "100%", md: "50%" }}>
                    <Center>
                      <Box
                        bg="#120D30"
                        py={"20px"}
                        px={"20px"}
                        rounded={"lg"}
                        minH={"200px"}
                        w={"100%"}
                        alignContent={"center"}
                      >
                        <Text
                          mt="10px"
                          fontWeight="500"
                          lineHeight={"160%"}
                          align={"center"}
                          fontSize={{ base: "14px", md: "18px", lg: "21px" }}
                        >
                          Register to Become Community Member
                        </Text>
                        <Center pt={"25px"}>
                          <Button
                            w={"150px"}
                            h={"45px"}
                            bg="rgba(0, 163, 255, 0.14)"
                            border="1.5px solid #00A3FF"
                            color={"#FFFFFF"}
                            fontWeight={"600"}
                            fontSize={"16px"}
                          >
                            <Text ml={"5px"}>Claim</Text>
                          </Button>
                        </Center>
                      </Box>
                    </Center>
                  </VStack>
                </Stack>
              </Flex>
            </Flex>
          </Box>
        </VStack>
      </Box>
      <Footer />
    </Box>
  );
}
