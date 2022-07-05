import React, { useState, useEffect, useRef } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { Box, Flex, Text, Button, HStack, Center, Square, VStack, Stack, Heading, Tag, Image, Avatar,  Accordion, Progress,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from "@chakra-ui/react";

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
    <Box color={"white"} mt="150px">
      <VStack 
      color="white"
      py={'3em'}
      mb={'21em'}
      >
        <Flex
         fontWeight= '750'
         fontSize= '28px'
         lineHeight={'160%'}
         justify={'left'}
        >
            <Text>Project Backed</Text>
        </Flex>
        <Accordion 
        allowToggle
        
        >
            <AccordionItem 
                    bgGradient="linear(#430E82, #1D0551)"
                    py={'0px'}
                    rounded={'lg'}
                    border='0px' borderColor='gray.200'
                    mt={'2em'}>
                    
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    
                <Box 
                p={6}
                >
                  <Stack 
                  direction={'row'} 
                  justify={'center'} 
                  spacing={48}
                  >
                      <Flex 
                justify={'center'} 
                >
                  <Avatar
                    size={'lg'}
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
                    <Stack
                    direction={'row'}
                    justify={'center'}
                    spacing={36}
                    pr={'80px'}>
                        
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Investing
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        $100
                      </Text>
                      
                    </Stack>
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
                        $ 0
                      </Text>
                      
                    </Stack>
                        
                    </Stack>
                    
                  </Stack>
                </Box>
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
                </h2>
                <AccordionPanel 
                pb={4}
                bgGradient={'linear(180deg, rgba(2, 38, 168, 0.2312) 0%, rgba(22, 6, 201, 0.085) 100%)'}
                >
                    <Flex
                    
                    maxW={'850px'}>
                        <Stack>
                            <Text
                            fontSize={'xl'} 
                            fontWeight={500} 
                            color="white"
                            px={'30px'}
                            >
                                Descriptions
                            </Text>
                            <Text
                            fontSize={'14px'} 
                            fontWeight={200} 
                            color="white"
                            px={'30px'}
                            py={'15px'}
                            >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            </Text>
                            <Stack 
                            direction={'row'}
                            justify={'center'}
                            spacing={56}
                            >
                                
                            <Progress colorScheme='pink' height='32px' value={20} />
                                <Text
                                fontSize={'12px'} 
                                fontWeight={200} 
                                color="white"
                                px={'30px'}
                                py={'15px'}
                                >
                                    20%  On Progress
                                </Text>
                                <Text
                                fontSize={'12px'} 
                                fontWeight={200} 
                                color="white"
                                px={'30px'}
                                py={'15px'}
                                >
                                    Backing Time  2022-06-23 20:20 UTC
                                </Text>
                            </Stack>
                        </Stack>
                    </Flex>
                   
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem 
                    bgGradient="linear(#430E82, #1D0551)"
                    py={'0px'}
                    rounded={'lg'}
                    border='0px' borderColor='gray.200'
                    mt={'2em'}>
                    
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    
                <Box 
                p={6}
                >
                  <Stack 
                  direction={'row'} 
                  justify={'center'} 
                  spacing={48}
                  >
                      <Flex 
                justify={'center'} 
                >
                  <Avatar
                    size={'lg'}
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
                    <Stack
                    direction={'row'}
                    justify={'center'}
                    spacing={36}
                    pr={'80px'}>
                        
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Investing
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        $100
                      </Text>
                      
                    </Stack>
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
                        $ 0
                      </Text>
                      
                    </Stack>
                        
                    </Stack>
                    
                  </Stack>
                </Box>
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
                </h2>
                <AccordionPanel 
                pb={4}
                bgGradient={'linear(180deg, rgba(2, 38, 168, 0.2312) 0%, rgba(22, 6, 201, 0.085) 100%)'}
                >
                    <Flex
                    
                    maxW={'850px'}>
                        <Stack>
                            <Text
                            fontSize={'xl'} 
                            fontWeight={500} 
                            color="white"
                            px={'30px'}
                            >
                                Descriptions
                            </Text>
                            <Text
                            fontSize={'14px'} 
                            fontWeight={200} 
                            color="white"
                            px={'30px'}
                            py={'15px'}
                            >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            </Text>
                            <Stack 
                            direction={'row'}
                            justify={'center'}
                            spacing={56}
                            >
                                
                            <Progress colorScheme='pink' height='32px' value={20} />
                                <Text
                                fontSize={'12px'} 
                                fontWeight={200} 
                                color="white"
                                px={'30px'}
                                py={'15px'}
                                >
                                    20%  On Progress
                                </Text>
                                <Text
                                fontSize={'12px'} 
                                fontWeight={200} 
                                color="white"
                                px={'30px'}
                                py={'15px'}
                                >
                                    Backing Time  2022-06-23 20:20 UTC
                                </Text>
                            </Stack>
                        </Stack>
                    </Flex>
                   
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem 
                    bgGradient="linear(#430E82, #1D0551)"
                    py={'0px'}
                    rounded={'lg'}
                    border='0px' borderColor='gray.200'
                    mt={'2em'}>
                    
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    
                <Box 
                p={6}
                >
                  <Stack 
                  direction={'row'} 
                  justify={'center'} 
                  spacing={48}
                  >
                      <Flex 
                justify={'center'} 
                >
                  <Avatar
                    size={'lg'}
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
                    <Stack
                    direction={'row'}
                    justify={'center'}
                    spacing={36}
                    pr={'80px'}>
                        
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Investing
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        $100
                      </Text>
                      
                    </Stack>
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
                        $ 0
                      </Text>
                      
                    </Stack>
                        
                    </Stack>
                    
                  </Stack>
                </Box>
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
                </h2>
                <AccordionPanel 
                pb={4}
                bgGradient={'linear(180deg, rgba(2, 38, 168, 0.2312) 0%, rgba(22, 6, 201, 0.085) 100%)'}
                >
                    <Flex
                    
                    maxW={'850px'}>
                        <Stack>
                            <Text
                            fontSize={'xl'} 
                            fontWeight={500} 
                            color="white"
                            px={'30px'}
                            >
                                Descriptions
                            </Text>
                            <Text
                            fontSize={'14px'} 
                            fontWeight={200} 
                            color="white"
                            px={'30px'}
                            py={'15px'}
                            >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            </Text>
                            <Stack 
                            direction={'row'}
                            justify={'center'}
                            spacing={56}
                            >
                                
                            <Progress colorScheme='pink' height='32px' value={20} />
                                <Text
                                fontSize={'12px'} 
                                fontWeight={200} 
                                color="white"
                                px={'30px'}
                                py={'15px'}
                                >
                                    20%  On Progress
                                </Text>
                                <Text
                                fontSize={'12px'} 
                                fontWeight={200} 
                                color="white"
                                px={'30px'}
                                py={'15px'}
                                >
                                    Backing Time  2022-06-23 20:20 UTC
                                </Text>
                            </Stack>
                        </Stack>
                    </Flex>
                   
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem 
                    bgGradient="linear(#430E82, #1D0551)"
                    py={'0px'}
                    rounded={'lg'}
                    border='0px' borderColor='gray.200'
                    mt={'2em'}>
                    
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    
                <Box 
                p={6}
                >
                  <Stack 
                  direction={'row'} 
                  justify={'center'} 
                  spacing={48}
                  >
                      <Flex 
                justify={'center'} 
                >
                  <Avatar
                    size={'lg'}
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
                    <Stack
                    direction={'row'}
                    justify={'center'}
                    spacing={36}
                    pr={'80px'}>
                        
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Investing
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        $100
                      </Text>
                      
                    </Stack>
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
                        $ 0
                      </Text>
                      
                    </Stack>
                        
                    </Stack>
                    
                  </Stack>
                </Box>
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
                </h2>
                <AccordionPanel 
                pb={4}
                bgGradient={'linear(180deg, rgba(2, 38, 168, 0.2312) 0%, rgba(22, 6, 201, 0.085) 100%)'}
                >
                    <Flex
                    
                    maxW={'850px'}>
                        <Stack>
                            <Text
                            fontSize={'xl'} 
                            fontWeight={500} 
                            color="white"
                            px={'30px'}
                            >
                                Descriptions
                            </Text>
                            <Text
                            fontSize={'14px'} 
                            fontWeight={200} 
                            color="white"
                            px={'30px'}
                            py={'15px'}
                            >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            </Text>
                            <Stack 
                            direction={'row'}
                            justify={'center'}
                            spacing={56}
                            >
                                
                            <Progress colorScheme='pink' height='32px' value={20} />
                                <Text
                                fontSize={'12px'} 
                                fontWeight={200} 
                                color="white"
                                px={'30px'}
                                py={'15px'}
                                >
                                    20%  On Progress
                                </Text>
                                <Text
                                fontSize={'12px'} 
                                fontWeight={200} 
                                color="white"
                                px={'30px'}
                                py={'15px'}
                                >
                                    Backing Time  2022-06-23 20:20 UTC
                                </Text>
                            </Stack>
                        </Stack>
                    </Flex>
                   
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem 
                    bgGradient="linear(#430E82, #1D0551)"
                    py={'0px'}
                    rounded={'lg'}
                    border='0px' borderColor='gray.200'
                    mt={'2em'}>
                    
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    
                <Box 
                p={6}
                >
                  <Stack 
                  direction={'row'} 
                  justify={'center'} 
                  spacing={48}
                  >
                      <Flex 
                justify={'center'} 
                >
                  <Avatar
                    size={'lg'}
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
                    <Stack
                    direction={'row'}
                    justify={'center'}
                    spacing={36}
                    pr={'80px'}>
                        
                    <Stack spacing={0} align={'center'}>
                    <Text 
                    fontSize={'16px'} 
                    fontWeight={600}
                    color={'gray.500'}
                    >
                        Investing
                      </Text>
                      <Text 
                      fontWeight={600}
                      fontSize={'20px'}
                      >
                        $100
                      </Text>
                      
                    </Stack>
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
                        $ 0
                      </Text>
                      
                    </Stack>
                        
                    </Stack>
                    
                  </Stack>
                </Box>
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
                </h2>
                <AccordionPanel 
                pb={4}
                bgGradient={'linear(180deg, rgba(2, 38, 168, 0.2312) 0%, rgba(22, 6, 201, 0.085) 100%)'}
                >
                    <Flex
                    
                    maxW={'850px'}>
                        <Stack>
                            <Text
                            fontSize={'xl'} 
                            fontWeight={500} 
                            color="white"
                            px={'30px'}
                            >
                                Descriptions
                            </Text>
                            <Text
                            fontSize={'14px'} 
                            fontWeight={200} 
                            color="white"
                            px={'30px'}
                            py={'15px'}
                            >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            </Text>
                            <Stack 
                            direction={'row'}
                            justify={'center'}
                            spacing={56}
                            >
                                
                            <Progress colorScheme='pink' height='32px' value={20} />
                                <Text
                                fontSize={'12px'} 
                                fontWeight={200} 
                                color="white"
                                px={'30px'}
                                py={'15px'}
                                >
                                    20%  On Progress
                                </Text>
                                <Text
                                fontSize={'12px'} 
                                fontWeight={200} 
                                color="white"
                                px={'30px'}
                                py={'15px'}
                                >
                                    Backing Time  2022-06-23 20:20 UTC
                                </Text>
                            </Stack>
                        </Stack>
                    </Flex>
                   
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
      </VStack>
      
      <Footer />
      
      
    </Box>
  );
}
