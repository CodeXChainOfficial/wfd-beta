import React, { useState, useEffect, useRef } from "react";

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
} from "@chakra-ui/react";

import "react-multi-carousel/lib/styles.css";
import { useStore } from "../../contexts/store";
import { useProjectData } from "../../hook/FetchProject";
import Footer from "../../components/Footer";
import Hero from "../../components/User/Hero";
import { useMetamaskWallet } from "../../contexts/metamask";

export default function UserInfoDetail(data: any[]) {
  const { state } = useStore();
  const [prjShowDatas, setPrjShowDatas] = useState<any[]>([]);

  const projectData = useProjectData();
  const wallet = useMetamaskWallet();
  const address = wallet.account;

  async function fetchContractQuery() {
    try {
      const pShowDatas = [];

      for (let i = 0; i < projectData.length; i++) {
        const one = projectData[i];

        let one_backed = 0;
        for (let j = 0; j < one.backer_states.length; j++) {
          if (
            one.backer_states[j].addr.toLowerCase() == address.toLowerCase()
          ) {
            one_backed += one.backer_states[j].usdt_amount.toNumber();
            one_backed += one.backer_states[j].usdc_amount.toNumber();
            one_backed += one.backer_states[j].busd_amount.toNumber();
          }
        }
        one_backed /= 10 ** 6;

        const obj: any = {};
        obj.logo = projectData[i].project_logo;
        obj.title = projectData[i].project_title;
        obj.backed = one_backed;
        obj.description = projectData[i].project_description;
        obj.backedPercent = projectData[i].backer_backedPercent;
        pShowDatas.push(obj);
      }
      setPrjShowDatas(pShowDatas);
      console.log(pShowDatas);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchContractQuery();
  }, [state.address]);

  return (
    <>
      <Hero />
      <Box
        border="3px solid rgba(15, 177, 245, 0.28)"
        borderRadius="15px"
        m="128px"
        pb="128px"
      >
        {prjShowDatas.map((project, i) => (
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
                            src={project.logo}
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
                                {project.title}
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
                              $ {project.backed}
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
                        {project.description}
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
                          value={project.backedPercent}
                          width={"100%"}
                        />
                        <Text
                          fontSize={{ base: "12px", sm: "14px", lg: "16px" }}
                          fontWeight={200}
                          color="white"
                          py={"15px"}
                          width={{ base: "8px", sm: "100px", lg: "300px" }}
                        >
                          {project.backedPercent}% Progress
                        </Text>
                        <Text
                          fontSize={{ base: "12px", sm: "14px", lg: "16px" }}
                          fontWeight={200}
                          color="white"
                          py={"15px"}
                          width={{ base: "80px", sm: "100px", lg: "350px" }}
                        >
                          Last Backed {new Date().toISOString().slice(0, 10)}
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
