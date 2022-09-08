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
} from "@chakra-ui/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { toast } from "react-toastify";
import { WEFUND_ID, SUCCESS_OPTION } from "../../config/constants";
import { checkNetwork, ShortenAddress } from "../../utils/utility";

import { useMetamaskWallet } from "../../contexts/metamask";
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
  const [investedCount, setInvestedCount] = useState(0);
  const [whitelistedCount, setWhitelistedCount] = useState(0);
  const [prjShowDatas, setPrjShowDatas] = useState<any[]>([]);

  const projectData = useProjectData();
  const communityData = useCommunityData();
  const wallet = useMetamaskWallet();
  const address = wallet.account;

  async function fetchContractQuery() {
    try {
      let invested_count = 0;
      let whitelisted_count = 0;

      let total_backed = 0;
      let pShowDatas = [];

      for (let i = 0; i < projectData.length; i++) {
        const one = projectData[i];

        let one_backed = 0;
        for (let j = 0; j < one.backer_states.length; j++) {
          if (one.backer_states[j].addr.toLowerCase() == address.toLowerCase()) {
            invested_count++;

            one_backed += one.backer_states[j].usdt_amount.toNumber();
            one_backed += one.backer_states[j].usdc_amount.toNumber();
            one_backed += one.backer_states[j].busd_amount.toNumber();
          }
        }
        one_backed /= 10 ** 6;
        total_backed += one_backed;

        for (let j = 0; j < one.whitelist.length; j++) {
          if (one.whitelist[j].addr.toLowerCase() == address.toLowerCase()) {
            whitelisted_count++;
          }
        }

        var obj: any = {};
        obj.logo = projectData[i].project_logo;
        obj.title = projectData[i].project_title;
        obj.backed = one_backed;
        pShowDatas.push(obj);
      }
      setInvestedCount(invested_count);
      setWhitelistedCount(whitelisted_count);
      setContributes(total_backed);
      setPrjShowDatas(pShowDatas)
      console.log(pShowDatas)
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchContractQuery();
  }, [state.address]);

  async function addCommunityMember() {
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
                        {wallet ? ShortenAddress(address) : "[UserName]"}
                      </Heading>
                      <Text align="left" fontSize="sm" color={"#69E4FF"}>
                        {ShortenAddress(address)}
                      </Text>
                    </Stack>
                  </Flex>
                  {/* <Stack display={["none", "none", "flex", "flex"]}>
                    <Text fontSize={14} color="gray.400">
                      {wallet && wallet.config.chainName} Wallet
                    </Text>
                  </Stack> */}
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
                        {contributes} USD
                      </Text>
                      <Text align="left" fontWeight="500" fontSize="18px">
                        $ {contributes}
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
              <Box px={4} py={6} _hover={{ shadow: "lg" }} position="relative">
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
                      <Stack
                        w={{
                          base: "150px",
                          sm: "235px",
                          md: "480px",
                          lg: "520px",
                          xl: "700px",
                        }}
                        direction={{
                          base: "column",
                          lg: "row",
                        }}
                        px={2}
                        py={2}
                        pb={6}
                        align="stretch"
                        justify="center"
                      >
                        <VStack w={"full"}>
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
                        <VStack w={"full"}>
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
                              {whitelistedCount}
                            </Text>
                          </Box>
                          <Text
                            fontWeight="750"
                            fontSize="21px"
                            lineHeight={"160%"}
                          >
                            Whitelisted
                          </Text>
                        </VStack>
                        <VStack w={"full"}>
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
                              {investedCount}
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
                      </Stack>
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
            {prjShowDatas.map((item, index) => {
              return (
                <Flex justifyContent={"center"}>
                  <Center py={6}>
                    <Box
                      maxW={"350px"}
                      minW={"350px"}
                      w={"full"}
                      bg={"white"}
                      boxShadow={"2xl"}
                      rounded={"md"}
                      bgGradient="linear(#430E82, #1D0551)"
                    >
                      <Flex justify={"center"} p={"30px"}>
                        <Avatar
                          size={"xl"}
                          src={item.logo}
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
                              {item.title}
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
                              $ {item.backed}
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
              )
            })}

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
                        <Text mt="10px" align={"center"} overflowWrap="anywhere">
                          {state.referralLink}
                        </Text>
                      </Box>
                    </Box>
                  </VStack>

                  <VStack w={{ base: "100%", md: "50%" }}>
                    <Center>
                      <Box
                        bgGradient="linear(#430E82, #1D0551)"
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
