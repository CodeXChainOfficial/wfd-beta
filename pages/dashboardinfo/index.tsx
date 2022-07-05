import React, { useState, useEffect, useRef } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { Box, Flex, Text, Button, HStack, Center, Square, VStack, Stack, Heading, Tag, Image, Avatar } from "@chakra-ui/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { toast } from "react-toastify";
import { WEFUND_ID } from "../../config/Constants";

import { CheckNetwork } from "../../utils/Util";
import { successOption } from "../../config/Constants";
import { useCommunityData, useProjectData, useStore } from "../../contexts/store";
import { IoDownloadOutline, IoWalletOutline} from "react-icons/io5";
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
    if (CheckNetwork(state) == false) return false;

    for (let i = 0; i < communityData.length; i++) {
      if (communityData[i] == state.address) {
        toast("Already Registered", successOption);
        return;
      }
    }
  }

  function removeCommunityMember() {
    if (CheckNetwork(state) == false) return false;
  }

  function claim(project_id: number) {
    if (CheckNetwork(state) == false) return false;
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
    <Box>
    <Box color={"white"} padding={"5%"} mt="150px">
      <Flex color="white">
        <Center w="400px">
        <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 0]}>
          <Box
            _hover={{ shadow: 'lg' }}
            position="relative"
            rounded="md"
          >
            <Flex justifyContent="space-between">
              <Box 
                bg={"#430E82"}
                justifyContent={"center"}
                rounded={'md'}
                >
                  <Center w={'50px'} h={'50px'}>
                    <IoWalletOutline size={30}/>
                  </Center>
              </Box>
              <Flex 
              color={'white'}
              >
                <Stack spacing={2} pl={3} align="left">
                
                  <Heading align="left" fontSize="xl">
                    [Username]
                  </Heading>
                  <Text align="left" fontSize="sm" color={'#69E4FF'}>
                  juno188qf4jyleh....yr89ejwss8u6ph
                  </Text>
                </Stack>
              </Flex>
              <Stack display={['none', 'none', 'flex', 'flex']}>
                <Text fontSize={14} color="gray.400">
                  Juno Wallet
                </Text>
              </Stack>
            </Flex>

           
          </Box>

          <Box
            px={4}
            py={5}
            _hover={{ shadow: 'lg' }}
            bgGradient="linear(#430E82, #1D0551)"
            position="relative"
            rounded="md"
          >
            <Flex justifyContent="space-between">
              <Flex 
              color={'white'}
              >
                <Stack spacing={2} pl={3} align="left">
                  <Text 
                  align="left" 
                  fontWeight= "600"
                  lineHeight= "107.69%"
                  fontSize={'18px'}
                  >
                   My Contribution
                  </Text>
                  <Text 
                  align="left" 
                  fontWeight= "950"
                  fontSize= "26px"
                  pt={'30px'}
                  >
                    [0.00] Juno
                  </Text>
                  <Text 
                  align="left" 
                  fontWeight= "500"
                  fontSize= "18px"
                  >
                    $ 0.00
                  </Text>
                  <HStack pt={'3em'}>
                    <Button
                      w={'150px'}
                      h={'45px'}
                      bgGradient="linear(#21CAFF, #1383D4)"
                      color={'#002E87'}
                      fontWeight={'600'}
                      fontSize={'16px'}
                    >
                      <IoDownloadOutline size={30} />
                      <Text
                        ml={'5px'}
                      >
                        Deposit
                      </Text>
                    </Button>
                    <Button
                      w={'150px'}
                      h={'45px'}
                      bgGradient="linear(#21CAFF, #1383D4)"
                      color={'#002E87'}
                      fontWeight={'600'}
                      fontSize={'16px'}
                    >
                      <RiUpload2Line size={30} />
                      <Text
                        ml={'5px'}
                      >
                        Withdraw
                      </Text>
                    </Button>
                </HStack>
                </Stack>
              </Flex>
             
            </Flex>
          </Box>
        </VStack>
        </Center>
        <Box 
        flex="1" 
        >
        <VStack 
        spacing={4} 
        marginBottom={6} 
        align="left" 
        mx={[0, 0, 6]}
        bgGradient="linear(#430E82, #1D0551)"
        rounded={'lg'}
        >
          
        <Box
            px={4}
            py={5}
            _hover={{ shadow: 'lg' }}
            position="relative"
          >
            <Flex justifyContent="space-between">
              <Flex 
              color={'white'}
              >
                <Stack spacing={2} pl={3} align="left">
                  <Text 
                  align="left" 
                  fontWeight= "600"
                  lineHeight= "107.69%"
                  fontSize={'18px'}
                  mb={'10px'}
                  >
                   My Account
                  </Text>
                  <HStack>
                    <VStack>
                    <Box 
                    bg={'black'}
                    px={'150px'}
                    py={'20px'}
                    rounded={'lg'}
                    >
                    <Text 
                    mt="10px"
                    fontWeight= '950'
                    fontSize= '65px'
                    lineHeight={'160%'}
                    align={'center'}
                    >$ {contributes}</Text>
                    </Box>
                    <Text
                      fontWeight= '750'
                      fontSize= '28px'
                      lineHeight={'160%'}
                    >Amount Contributed</Text>
                    </VStack>
                    
                    <VStack>
                    <Box 
                    bg={'black'}
                    px={'170px'}
                    py={'20px'}
                    rounded={'lg'}
                    >
                    <Text 
                    mt="10px"
                    fontWeight= '950'
                    fontSize= '65px'
                    lineHeight={'160%'}
                    align={'center'}
                    >{projectCount}</Text>
                    </Box>
                    <Text
                      fontWeight= '750'
                      fontSize= '28px'
                      lineHeight={'160%'}
                    >Project Backed</Text>
                    </VStack>
                  </HStack>
                  <Center>
                    <Link href={"dashboardinfo/details"}>
                    <Button
                    w={'150px'}
                    h={'45px'}
                    bgGradient="linear(#21CAFF, #1383D4)"
                    color={'#002E87'}
                    fontWeight={'600'}
                    fontSize={'16px'}
                  >
                      <Text
                        ml={'5px'}
                      >
                        Details
                      </Text>
                    </Button></Link>
                    
                  </Center>
               
                </Stack>
              </Flex>
             
            </Flex>
          </Box>
        </VStack>
        </Box>
      </Flex>
      
      <Box width={{ base: "100%", md: "86vw", lg: "86vw" }}>
        <Text
           fontWeight= '750'
           fontSize= '28px'
           lineHeight={'160%'}
        >
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
                maxW={'450px'}
                w={'full'}
                bg={'white'}
                boxShadow={'2xl'}
                rounded={'md'}
                bgGradient="linear(#430E82, #1D0551)"
                >
                <Flex 
                justify={'center'} 
                p={'30px'}
                >
                  <Avatar
                    size={'xl'}
                    src={
                      '/logolink'
                    }
                    alt={'Logo'}
                    css={{
                      border: '2px solid white',
                    }}
                  />
                  <Center>
                  <Stack spacing={0} align={'center'} mb={5}>
                    <Heading 
                    fontSize={'2xl'} 
                    fontWeight={500} 
                    fontFamily={'body'} 
                    color="white"
                    px={'30px'}
                    >
                      WFD/Fantom
                    </Heading>
                  </Stack>
                  </Center>
                </Flex>

                <Box 
                p={6}
                >
                  

                  <Stack 
                  direction={'row'} 
                  justify={'center'} 
                  spacing={16}
                  >
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Rewards
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        -
                      </Text>
                      
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Invested
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        $ 0
                      </Text>
                      
                    </Stack>
                    
                  </Stack>
                  
                  <Stack 
                  direction={'row'} 
                  justify={'center'} 
                  spacing={16}
                  >
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Earnings
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        $0
                      </Text>
                      
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Vesting
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        -
                      </Text>
                      
                    </Stack>
                    
                  </Stack>
                  
                  
                    <Center 
                    pt={'2em'}
                    >
                      <Button
                            w={'150px'}
                            h={'45px'}
                            bgGradient="linear(#21CAFF, #1383D4)"
                            color={'#002E87'}
                            fontWeight={'600'}
                            fontSize={'16px'}
                            
                          >
                              <Text
                                ml={'5px'}
                              >
                                Claim
                              </Text>
                        </Button>
                    </Center>
                  
                </Box>
              </Box>
              
            </Center>
          </Flex>
          <Flex justifyContent={"center"}>
            <Center py={6}>
              
              <Box
                maxW={'450px'}
                w={'full'}
                bg={'white'}
                boxShadow={'2xl'}
                rounded={'md'}
                bgGradient="linear(#430E82, #1D0551)"
                >
                <Flex 
                justify={'center'} 
                p={'30px'}
                >
                  <Avatar
                    size={'xl'}
                    src={
                      '/logolink'
                    }
                    alt={'Logo'}
                    css={{
                      border: '2px solid white',
                    }}
                  />
                  <Center>
                  <Stack spacing={0} align={'center'} mb={5}>
                    <Heading 
                    fontSize={'2xl'} 
                    fontWeight={500} 
                    fontFamily={'body'} 
                    color="white"
                    px={'30px'}
                    >
                      WFD/Fantom
                    </Heading>
                  </Stack>
                  </Center>
                </Flex>

                <Box 
                p={6}
                >
                  

                  <Stack 
                  direction={'row'} 
                  justify={'center'} 
                  spacing={16}
                  >
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Rewards
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        -
                      </Text>
                      
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Invested
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        $ 0
                      </Text>
                      
                    </Stack>
                    
                  </Stack>
                  
                  <Stack 
                  direction={'row'} 
                  justify={'center'} 
                  spacing={16}
                  >
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Earnings
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        $0
                      </Text>
                      
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Vesting
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        -
                      </Text>
                      
                    </Stack>
                    
                  </Stack>
                  
                  
                    <Center 
                    pt={'2em'}
                    >
                      <Button
                            w={'150px'}
                            h={'45px'}
                            bgGradient="linear(#21CAFF, #1383D4)"
                            color={'#002E87'}
                            fontWeight={'600'}
                            fontSize={'16px'}
                            
                          >
                              <Text
                                ml={'5px'}
                              >
                                Claim
                              </Text>
                        </Button>
                    </Center>
                  
                </Box>
              </Box>
              
            </Center>
          </Flex>
          <Flex justifyContent={"center"}>
            <Center py={6}>
              
              <Box
                maxW={'450px'}
                w={'full'}
                bg={'white'}
                boxShadow={'2xl'}
                rounded={'md'}
                bgGradient="linear(#430E82, #1D0551)"
                >
                <Flex 
                justify={'center'} 
                p={'30px'}
                >
                  <Avatar
                    size={'xl'}
                    src={
                      '/logolink'
                    }
                    alt={'Logo'}
                    css={{
                      border: '2px solid white',
                    }}
                  />
                  <Center>
                  <Stack spacing={0} align={'center'} mb={5}>
                    <Heading 
                    fontSize={'2xl'} 
                    fontWeight={500} 
                    fontFamily={'body'} 
                    color="white"
                    px={'30px'}
                    >
                      WFD/Fantom
                    </Heading>
                  </Stack>
                  </Center>
                </Flex>

                <Box 
                p={6}
                >
                  

                  <Stack 
                  direction={'row'} 
                  justify={'center'} 
                  spacing={16}
                  >
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Rewards
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        -
                      </Text>
                      
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Invested
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        $ 0
                      </Text>
                      
                    </Stack>
                    
                  </Stack>
                  
                  <Stack 
                  direction={'row'} 
                  justify={'center'} 
                  spacing={16}
                  >
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Earnings
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        $0
                      </Text>
                      
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Vesting
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        -
                      </Text>
                      
                    </Stack>
                    
                  </Stack>
                  
                  
                    <Center 
                    pt={'2em'}
                    >
                      <Button
                            w={'150px'}
                            h={'45px'}
                            bgGradient="linear(#21CAFF, #1383D4)"
                            color={'#002E87'}
                            fontWeight={'600'}
                            fontSize={'16px'}
                            
                          >
                              <Text
                                ml={'5px'}
                              >
                                Claim
                              </Text>
                        </Button>
                    </Center>
                  
                </Box>
              </Box>
              
            </Center>
          </Flex>
          <Flex justifyContent={"center"}>
            <Center py={6}>
              
              <Box
                maxW={'450px'}
                w={'full'}
                bg={'white'}
                boxShadow={'2xl'}
                rounded={'md'}
                bgGradient="linear(#430E82, #1D0551)"
                >
                <Flex 
                justify={'center'} 
                p={'30px'}
                >
                  <Avatar
                    size={'xl'}
                    src={
                      '/logolink'
                    }
                    alt={'Logo'}
                    css={{
                      border: '2px solid white',
                    }}
                  />
                  <Center>
                  <Stack spacing={0} align={'center'} mb={5}>
                    <Heading 
                    fontSize={'2xl'} 
                    fontWeight={500} 
                    fontFamily={'body'} 
                    color="white"
                    px={'30px'}
                    >
                      WFD/Fantom
                    </Heading>
                  </Stack>
                  </Center>
                </Flex>

                <Box 
                p={6}
                >
                  

                  <Stack 
                  direction={'row'} 
                  justify={'center'} 
                  spacing={16}
                  >
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Rewards
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        -
                      </Text>
                      
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Invested
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        $ 0
                      </Text>
                      
                    </Stack>
                    
                  </Stack>
                  
                  <Stack 
                  direction={'row'} 
                  justify={'center'} 
                  spacing={16}
                  >
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Earnings
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        $0
                      </Text>
                      
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Vesting
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        -
                      </Text>
                      
                    </Stack>
                    
                  </Stack>
                  
                  
                    <Center 
                    pt={'2em'}
                    >
                      <Button
                            w={'150px'}
                            h={'45px'}
                            bgGradient="linear(#21CAFF, #1383D4)"
                            color={'#002E87'}
                            fontWeight={'600'}
                            fontSize={'16px'}
                            
                          >
                              <Text
                                ml={'5px'}
                              >
                                Claim
                              </Text>
                        </Button>
                    </Center>
                  
                </Box>
              </Box>
              
            </Center>
          </Flex>

        </Carousel>
      </Box>
      
      <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]}
        
        >
          
        <Box
            px={4}
            py={5}
            _hover={{ shadow: 'lg' }}
            position="relative"
          >
            <Flex justifyContent="space-between">
              <Flex 
              color={'white'}
              >
                <Stack spacing={2} pl={3} align="left">
                 
                  <HStack>
                    <VStack>
                    <Box 
                    bgGradient="linear(#430E82, #1D0551)"
                    px={'150px'}
                    py={'20px'}
                    rounded={'lg'}
                    minH={'136px'}
                    >
                    <Text 
                    mt="10px"
                    fontWeight= '500'
                    lineHeight={'160%'}
                    align={'center'}
                    fontSize={'22px'}
                    >Invite Backers</Text>
                    <Text 
                    mt="10px"
                    lineHeight={'160%'}
                    align={'center'}
                    >Earn WFD and other bonuses for referring project backers.</Text>
                    <Box 
                    bg={'black'}
                    px={'20px'}
                    py={'5px'}
                    rounded={'lg'}
                    >
                    <Text 
                    mt="10px"
                    align={'center'}
                    >wfd1rj8wkx2ze4639r........aa55</Text>
                    </Box>
                    </Box>
                    </VStack>
                    
                    <VStack>
                      <Center>
                      <Box 
                    bgGradient="linear(#430E82, #1D0551)"
                    px={'170px'}
                    py={'20px'}
                    rounded={'lg'}
                    minH={'136px'}
                    >
                    <Text 
                    mt="10px"
                    fontWeight= '500'
                    lineHeight={'160%'}
                    align={'center'}
                    fontSize={'22px'}
                    >Register to Become Community Member</Text>
                    <Center
                    pt={'25px'}
                    >
                        <Button
                          w={'150px'}
                          h={'45px'}
                          bgGradient="linear(#21CAFF, #1383D4)"
                          color={'#002E87'}
                          fontWeight={'600'}
                          fontSize={'16px'}
                        >
                            <Text
                              ml={'5px'}
                            >
                              Claim
                            </Text>
                        </Button>
                </Center>
                   
                    </Box>
                      </Center>
                    
                    </VStack>
                  </HStack>
               
                </Stack>
              </Flex>
             
            </Flex>
          </Box>
        </VStack>
      {/* <Flex
        mb="20px"
        fontSize={"18px"}
        fontWeight={"bold"}
        justify={{ base: "space-between", lg: "flex-start" }}
      >
        <Text
          cursor={"pointer"}
          textAlign={"center"}
          mr={{ base: "5px", lg: "10px" }}
          p={{ base: "5px", lg: "10px 20px" }}
          fontSize={{ base: "12px", lg: "20" }}
          onClick={() => setActiveTab("Account")}
          borderRadius={{ base: "5px", lg: "10px" }}
          color={activeTab === "Account" ? "#4299E1" : "white"}
          border={{
            base:
              activeTab === "Account" ? "1px solid #4299E1" : "1px solid white",
            lg:
              activeTab === "Account" ? "3px solid #4299E1" : "3px solid white",
          }}
        >
          MY ACCOUNT
        </Text>
        <Text
          cursor={"pointer"}
          textAlign={"center"}
          mr={{ base: "5px", lg: "10px" }}
          p={{ base: "5px", lg: "10px 20px" }}
          fontSize={{ base: "12px", lg: "20" }}
          onClick={() => setActiveTab("Prefund")}
          borderRadius={{ base: "5px", lg: "10px" }}
          color={activeTab === "Prefund" ? "#4299E1" : "white"}
          border={{
            base:
              activeTab === "Prefund" ? "1px solid #4299E1" : "1px solid white",
            lg:
              activeTab === "Prefund" ? "3px solid #4299E1" : "3px solid white",
          }}
        >
          MY PREFUND
        </Text>
        <Text
          cursor={"pointer"}
          textAlign={"center"}
          mr={{ base: "5px", lg: "10px" }}
          p={{ base: "5px", lg: "10px 20px" }}
          fontSize={{ base: "12px", lg: "20" }}
          onClick={() => setActiveTab("Invite")}
          borderRadius={{ base: "5px", lg: "10px" }}
          color={activeTab === "Invite" ? "#4299E1" : "white"}
          border={{
            base:
              activeTab === "Invite" ? "1px solid #4299E1" : "1px solid white",
            lg:
              activeTab === "Invite" ? "3px solid #4299E1" : "3px solid white",
          }}
        >
          INVITE BACKER
        </Text>
        <Text
          cursor={"pointer"}
          textAlign={"center"}
          mr={{ base: "5px", lg: "10px" }}
          p={{ base: "5px", lg: "10px 20px" }}
          fontSize={{ base: "12px", lg: "20" }}
          onClick={() => setActiveTab("Wallet")}
          borderRadius={{ base: "5px", lg: "10px" }}
          color={activeTab === "Wallet" ? "#4299E1" : "white"}
          border={{
            base:
              activeTab === "Wallet" ? "1px solid #4299E1" : "1px solid white",
            lg:
              activeTab === "Wallet" ? "3px solid #4299E1" : "3px solid white",
          }}
        >
          WALLET ADDRESS
        </Text>
      </Flex>

      {activeTab === "Wallet" && (
        <>
          <Text fontWeight={"bold"}>Wallet address</Text>
          <Text>{state.address}</Text>
        </>
      )}

      {activeTab === "Account" && (
        <>
          <Text mt="10px">Projects backed: {projectCount}</Text>
          <Text mt="10px">Amount contributed: {contributes}</Text>
          {tokens.map((item, index) => {
            return (
              <HStack spacing="10px" mt="10px" key={index}>
                <Text mt="10px">
                  {item.pendingAmount} of {item.amount}&nbsp;{item.symbol}{" "}
                  tokens{" "}
                </Text>
                <Button color="red" onClick={() => claim(item.project_id)}>
                  Claim
                </Button>
              </HStack>
            );
          })}
        </>
      )}

      {activeTab === "Prefund" && (
        <Flex mt="10px">
          <Text>You have earned:</Text>
          <Text ml={"5px"} color={"#4299E1"}>
            {state.referralCount * 50}WFD
          </Text>
        </Flex>
      )}

      {activeTab === "Invite" && (
        <>
          <Text my={"10px"}>
            Earn WFD and other bonuses for referring project backers. Your
            referral link is:
          </Text>
          <Link href={state.referralLink}>
            <Text color={"#4299E1"}>{state.referralLink}</Text>
          </Link>
        </>
      )}

      <Text
        mt="50px"
        fontWeight={"bold"}
        fontSize={{ base: "15px", lg: "25px" }}
      >
        Register to become a community member
      </Text>

      <Flex mt={"20px"}>
        <Button colorScheme="blue" width={"200px"} onClick={addCommunityMember}>
          Register
        </Button>
        <Button
          variant="outline"
          width={"200px"}
          ml={3}
          onClick={removeCommunityMember}
        >
          Cancel
        </Button>
      </Flex> */}
      
    </Box>
    
    <Footer />
    </Box>
  );
}
