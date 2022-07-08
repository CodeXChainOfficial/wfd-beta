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
} from "@chakra-ui/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { toast } from "react-toastify";
import { WEFUND_ID, SUCCESS_OPTION } from "../../config/constants";
import { checkNetwork } from "../../utils/utility";
import {
  useCommunityData,
  useProjectData,
  useStore,
} from "../../contexts/store";
import { IoDownloadOutline, IoWalletOutline } from "react-icons/io5";
import { RiUpload2Line } from "react-icons/ri";
import Footer from "../../components/Footer";

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
    <Box width={"100%"}>
      <Box color={"white"} padding={"5%"} mt="150px">
        <Stack
          color="white"
          maxW={"1440px"}
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
        >
          <Center w={{ base: "100%", sm: "100%", md: "40%", lg: "40%" }}>
            <VStack
              spacing={4}
              marginBottom={6}
              align="left"
              mx={[0, 0, 0]}
              w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
            >
              <Box _hover={{ shadow: "lg" }} position="relative" rounded="md">
                <Flex justifyContent="space-between">
                  <Box bg={"#430E82"} justifyContent={"center"} rounded={"md"}>
                    <Center w={"50px"} h={"50px"}>
                      <IoWalletOutline size={30} />
                    </Center>
                  </Box>
                  <Flex color={"white"}>
                    <Stack spacing={2} pl={3} align="left">
                      <Heading align="left" fontSize="xl">
                        [Username]
                      </Heading>
                      <Text align="left" fontSize="sm" color={"#69E4FF"}>
                        juno188qf4jyleh....yr89ejwss8u6ph
                      </Text>
                    </Stack>
                  </Flex>
                  <Stack display={["none", "none", "flex", "flex"]}>
                    <Text fontSize={14} color="gray.400">
                      Juno Wallet
                    </Text>
                  </Stack>
                </Flex>
              </Box>

              <Box
                px={4}
                py={5}
                _hover={{ shadow: "lg" }}
                bgGradient="linear(#430E82, #1D0551)"
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
                      <HStack pt={"3em"}>
                        <Button
                          w={{
                            base: "90px",
                            sm: "100px",
                            md: "140px",
                            lg: "150px",
                          }}
                          h={"45px"}
                          bgGradient="linear(#21CAFF, #1383D4)"
                          color={"#002E87"}
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
                          h={"45px"}
                          bgGradient="linear(#21CAFF, #1383D4)"
                          color={"#002E87"}
                          fontWeight={"600"}
                          fontSize={"16px"}
                        >
                          <RiUpload2Line size={30} />
                          <Text ml={"5px"}>Withdraw</Text>
                        </Button>
                      </HStack>
                    </Stack>
                  </Flex>
                </Flex>
              </Box>
            </VStack>
          </Center>
          <Box w={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}>
            <VStack
              spacing={4}
              marginBottom={6}
              align="left"
              mx={[0, 0, 6]}
              bgGradient="linear(#430E82, #1D0551)"
              rounded={"lg"}
              w={"100%"}
            >
              <Box px={4} py={5} _hover={{ shadow: "lg" }} position="relative">
                <Flex justifyContent="space-between">
                  <Flex color={"white"}>
                    <Stack pl={3} align="left" w={"100%"}>
                      <Text
                        align="left"
                        fontWeight="600"
                        lineHeight="107.69%"
                        fontSize={"18px"}
                        mb={"10px"}
                      >
                        My Account
                      </Text>
                      <HStack
                        w={{
                          base: "150px",
                          sm: "300px",
                          md: "500px",
                          lg: "500px",
                          xl: "700px",
                        }}
                      >
                        <VStack w={"50%"}>
                          <Box
                            bg={"black"}
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
                          <Text
                            fontWeight="750"
                            fontSize="21px"
                            lineHeight={"160%"}
                          >
                            Contribution
                          </Text>
                        </VStack>

                        <VStack w={"50%"}>
                          <Box
                            bg={"black"}
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
                          <Text
                            fontWeight="750"
                            fontSize="21px"
                            lineHeight={"160%"}
                          >
                            Project Backed
                          </Text>
                        </VStack>
                      </HStack>
                      <Center>
                        <Link href={"userinfo/details"}>
                          <Button
                            w={"150px"}
                            h={"45px"}
                            bgGradient="linear(#21CAFF, #1383D4)"
                            color={"#002E87"}
                            fontWeight={"600"}
                            fontSize={"16px"}
                          >
                            <Text ml={"5px"}>Details</Text>
                          </Button>
                        </Link>
                      </Center>
                    </Stack>
                  </Flex>
                </Flex>
              </Box>
            </VStack>
          </Box>
        </Stack>

        <Box width={{ base: "100%", md: "86vw", lg: "86vw" }}>
          <Text fontWeight="750" fontSize="28px" lineHeight={"160%"}>
            Project Invested Overview
          </Text>
          <Carousel
            autoPlay
            swipeable={true}
            showDots={false}
            // showThumbs={false}
            responsive={responsive}
          >
            <Flex justifyContent={"center"}>
              <Center py={6}>
                <Box
                  maxW={"450px"}
                  w={"full"}
                  bg={"white"}
                  boxShadow={"2xl"}
                  rounded={"md"}
                  bgGradient="linear(#430E82, #1D0551)"
                >
                  <Flex justify={"center"} p={"30px"}>
                    <Avatar
                      size={"xl"}
                      src={"/logolink"}
                      alt={"Logo"}
                      css={{
                        border: "2px solid white",
                      }}
                    />
                    <Center>
                      <Stack spacing={0} align={"center"} mb={5}>
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

                  <Box p={6}>
                    <Stack direction={"row"} justify={"center"} spacing={16}>
                      <Stack spacing={0} align={"center"}>
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
                      <Stack spacing={0} align={"center"}>
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

                    <Stack direction={"row"} justify={"center"} spacing={16}>
                      <Stack spacing={0} align={"center"}>
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
                      <Stack spacing={0} align={"center"}>
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

                    <Center pt={"2em"}>
                      <Button
                        w={"150px"}
                        h={"45px"}
                        bgGradient="linear(#21CAFF, #1383D4)"
                        color={"#002E87"}
                        fontWeight={"600"}
                        fontSize={"16px"}
                      >
                        <Text ml={"5px"}>Claim</Text>
                      </Button>
                    </Center>
                  </Box>
                </Box>
              </Center>
            </Flex>
            <Flex justifyContent={"center"}>
              <Center py={6}>
                <Box
                  maxW={"450px"}
                  w={"full"}
                  bg={"white"}
                  boxShadow={"2xl"}
                  rounded={"md"}
                  bgGradient="linear(#430E82, #1D0551)"
                >
                  <Flex justify={"center"} p={"30px"}>
                    <Avatar
                      size={"xl"}
                      src={"/logolink"}
                      alt={"Logo"}
                      css={{
                        border: "2px solid white",
                      }}
                    />
                    <Center>
                      <Stack spacing={0} align={"center"} mb={5}>
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

                  <Box p={6}>
                    <Stack direction={"row"} justify={"center"} spacing={16}>
                      <Stack spacing={0} align={"center"}>
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
                      <Stack spacing={0} align={"center"}>
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

                    <Stack direction={"row"} justify={"center"} spacing={16}>
                      <Stack spacing={0} align={"center"}>
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
                      <Stack spacing={0} align={"center"}>
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

                    <Center pt={"2em"}>
                      <Button
                        w={"150px"}
                        h={"45px"}
                        bgGradient="linear(#21CAFF, #1383D4)"
                        color={"#002E87"}
                        fontWeight={"600"}
                        fontSize={"16px"}
                      >
                        <Text ml={"5px"}>Claim</Text>
                      </Button>
                    </Center>
                  </Box>
                </Box>
              </Center>
            </Flex>
            <Flex justifyContent={"center"}>
              <Center py={6}>
                <Box
                  maxW={"450px"}
                  w={"full"}
                  bg={"white"}
                  boxShadow={"2xl"}
                  rounded={"md"}
                  bgGradient="linear(#430E82, #1D0551)"
                >
                  <Flex justify={"center"} p={"30px"}>
                    <Avatar
                      size={"xl"}
                      src={"/logolink"}
                      alt={"Logo"}
                      css={{
                        border: "2px solid white",
                      }}
                    />
                    <Center>
                      <Stack spacing={0} align={"center"} mb={5}>
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

                  <Box p={6}>
                    <Stack direction={"row"} justify={"center"} spacing={16}>
                      <Stack spacing={0} align={"center"}>
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
                      <Stack spacing={0} align={"center"}>
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

                    <Stack direction={"row"} justify={"center"} spacing={16}>
                      <Stack spacing={0} align={"center"}>
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
                      <Stack spacing={0} align={"center"}>
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

                    <Center pt={"2em"}>
                      <Button
                        w={"150px"}
                        h={"45px"}
                        bgGradient="linear(#21CAFF, #1383D4)"
                        color={"#002E87"}
                        fontWeight={"600"}
                        fontSize={"16px"}
                      >
                        <Text ml={"5px"}>Claim</Text>
                      </Button>
                    </Center>
                  </Box>
                </Box>
              </Center>
            </Flex>
            <Flex justifyContent={"center"}>
              <Center py={6}>
                <Box
                  maxW={"450px"}
                  w={"full"}
                  bg={"white"}
                  boxShadow={"2xl"}
                  rounded={"md"}
                  bgGradient="linear(#430E82, #1D0551)"
                >
                  <Flex justify={"center"} p={"30px"}>
                    <Avatar
                      size={"xl"}
                      src={"/logolink"}
                      alt={"Logo"}
                      css={{
                        border: "2px solid white",
                      }}
                    />
                    <Center>
                      <Stack spacing={0} align={"center"} mb={5}>
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

                  <Box p={6}>
                    <Stack direction={"row"} justify={"center"} spacing={16}>
                      <Stack spacing={0} align={"center"}>
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
                      <Stack spacing={0} align={"center"}>
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

                    <Stack direction={"row"} justify={"center"} spacing={16}>
                      <Stack spacing={0} align={"center"}>
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
                      <Stack spacing={0} align={"center"}>
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

                    <Center pt={"2em"}>
                      <Button
                        w={"150px"}
                        h={"45px"}
                        bgGradient="linear(#21CAFF, #1383D4)"
                        color={"#002E87"}
                        fontWeight={"600"}
                        fontSize={"16px"}
                      >
                        <Text ml={"5px"}>Claim</Text>
                      </Button>
                    </Center>
                  </Box>
                </Box>
              </Center>
            </Flex>
          </Carousel>
        </Box>

        <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]}>
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
                      bgGradient="linear(#430E82, #1D0551)"
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
                        bgGradient="linear(#430E82, #1D0551)"
                        py={"20px"}
                        rounded={"lg"}
                        minH={"136px"}
                        w={"100%"}
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
                            bgGradient="linear(#21CAFF, #1383D4)"
                            color={"#002E87"}
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
