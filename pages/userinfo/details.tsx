import React, { useState, useEffect, useRef } from "react";

import {
  Box,
  Flex,
  Text,
  Center,
  VStack,
  Stack,
  Heading,
  Image,
  Avatar,
  Accordion,
  Progress,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import axios from "axios";

import "react-multi-carousel/lib/styles.css";
import { WEFUND_ID } from "../../config/constants";
import { useProjectData } from "../../hook/FetchProject";
import Footer from "../../components/Footer";
import Hero from "../../components/User/Hero";
import { useWallet } from "../../contexts/store";

export default function UserInfoDetail() {
  const [prjShowDatas, setPrjShowDatas] = useState<any[]>([]);

  const projectData = useProjectData();
  const wallet = useWallet();
  const address = wallet?.account;
  async function fetchContractQuery() {
    try {
      const pShowDatas = [];

      for (let i = 0; i < projectData.length; i++) {
        if (projectData[i].project_id == WEFUND_ID) {
          if (address) {
            const { data } = await axios.post("/api/investors/fetch", {
              wallet: address,
            });
            console.log(data);
            if (!data.error) {
              const obj: any = {};
              obj.logo = projectData[i].project_logo;
              obj.title = projectData[i].project_title;
              obj.description = projectData[i].project_description;
              obj.backed = data.amount;
              obj.wfd = data.wfd_amount;
              obj.backedPercent = projectData[i].backer_backedPercent;
              obj.lastBackedDate = new Date(data.date * 1000).toDateString();
              pShowDatas.push(obj);
            }
          }
        } else {
          const one = projectData[i];

          let one_backed = 0;
          let one_wfd = 0;
          for (let j = 0; j < one.backer_states.length; j++) {
            if (
              one.backer_states[j].addr.toLowerCase() == address.toLowerCase()
            ) {
              one_backed += one.backer_states[j].usdt_amount.toNumber();
              one_backed += one.backer_states[j].usdc_amount.toNumber();
              one_backed += one.backer_states[j].busd_amount.toNumber();
              one_wfd += one.backer_states[j].wfd_amount.toNumber();
            }
          }
          one_backed /= 10 ** 6;

          const obj: any = {};
          obj.logo = projectData[i].project_logo;
          obj.title = projectData[i].project_title;
          obj.description = projectData[i].project_description;
          obj.backed = one_backed;
          obj.wfd = one_wfd;
          obj.backedPercent = projectData[i].backer_backedPercent;
          pShowDatas.push(obj);
        }
      }
      setPrjShowDatas(pShowDatas);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchContractQuery();
  }, [address]);

  return (
    <>
      <Hero />
      <Box
        border="3px solid rgba(15, 177, 245, 0.28)"
        borderRadius="15px"
        m={{ base: "1", md: "128px" }}
        pb="128px"
      >
        {prjShowDatas.map((project, i) => (
          <VStack key={i} color="white" pt={"3em"} w={"100%"}>
            <Accordion allowToggle w="100%">
              <AccordionItem
                bg="#120D30"
                rounded={"lg"}
                border="0px"
                borderColor="gray.200"
                mt={"2em"}
                w={"100%"}
              >
                <AccordionButton>
                  <Stack
                    direction={{ base: "column", md: "row", lg: "row" }}
                    justify="space-between"
                    spacing={{ base: 0, sm: 2, md: 36, lg: 48 }}
                    w={"100%"}
                    p={{ base: "1", md: "3" }}
                  >
                    <Flex justify="center" align="center">
                      <Avatar
                        size={"lg"}
                        src={project.logo}
                        border="2px solid white"
                      />
                      <Heading
                        fontSize={"2xl"}
                        fontWeight={500}
                        fontFamily={"body"}
                        color="white"
                        px={"30px"}
                      >
                        {project.title}
                      </Heading>
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
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} bg="rgba(0, 0, 0, 0.33)" w="100%">
                  <Stack w="100%">
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
                      pb={{ base: "30px", md: "128px" }}
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
                      align="center"
                      spacing={{ base: "3", md: "12" }}
                      width={"100%"}
                      px={{ base: "1", md: "8" }}
                      pt="16px"
                    >
                      <Progress
                        borderRadius="18px"
                        colorScheme="purple"
                        height="32px"
                        my={"12px"}
                        value={project.backedPercent}
                        w="100%"
                      />
                      <Text
                        fontSize={{ base: "12px", sm: "14px", lg: "16px" }}
                        fontWeight={200}
                        color="white"
                        whiteSpace="nowrap"
                      >
                        {project.backedPercent}% Progress
                      </Text>
                      <Text
                        fontSize={{ base: "12px", sm: "14px", lg: "16px" }}
                        fontWeight={200}
                        color="white"
                        whiteSpace="nowrap"
                      >
                        Last Backed <br />
                        {project.lastBackedDate ?? "__________"}
                      </Text>
                    </Stack>
                  </Stack>
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
