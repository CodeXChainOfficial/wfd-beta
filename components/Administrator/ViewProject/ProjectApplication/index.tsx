import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Text,
  chakra,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ProgressIcon } from "../../ProjectPanel/ProjectOnApproval";
import {
  APPLICATION_BASE_STATUS,
  APPLICATION_STEPS,
} from "../../../../pages/administrator/viewproject/approval";
import { useCommunityData } from "../../../../hook/FetchProject";
import { PROJECT_STATUS } from "../../../../types/ProjectStatus";
import {
  PROGRESS_STATUS,
  PROGRESS_TEXT,
} from "../../../../types/ProgreessStatus";
import VoteButton from "../../VoteButton";

export default function ProjectApplication({ data }: { data: any }) {
  const [yesVotedCount, setYesVotedCount] = useState(0);
  const [votedCount, setVotedCount] = useState(0);
  const [communityCount, setCommunityCount] = useState(1);

  const communityData = useCommunityData();

  useEffect(() => {
    if (communityData.length > 0 && data) {
      setYesVotedCount(
        data.wefund_votes.filter((x: any) => x.voted == true).length
      );
      setVotedCount(data.wefund_votes.length);
      setCommunityCount(communityData.length);
    }
  }, [communityData]);

  return (
    <Flex
      p={{ base: "10px", md: "40px" }}
      bg="#130A49"
      borderRadius="10px"
      mt="30px"
      w="100%"
    >
      <Flex direction="column" display={{ base: "none", md: "flex" }}>
        <Image alt="star" src={data?.project_logo} h="130px" />
        <Center flexDirection="column" mt="24px" bg="rgba(0, 0, 0, 0.6)">
          <Image
            mt="30px"
            alt={data?.project_title}
            src="/media/OwnerInfo/rocket.svg"
            h="48px"
          />
          <Text
            pt="8px"
            pb="16px"
            as="span"
            fontFamily="Montserrat"
            fontSize="12px"
            fontWeight={400}
            textAlign="center"
            w="98px"
          >
            Congratulation! <br />
            You’ve been selected by Wefund <br /> <br />
            We will proceed you to Incubation
          </Text>
        </Center>
      </Flex>
      <Flex direction="column" pl={{ base: "5px", md: "24px" }}>
        <Text
          fontFamily="Montserrat"
          fontSize={{ base: "16px", md: "20px" }}
          fontWeight={700}
        >
          {data?.project_title}
        </Text>
        <Text
          mt="8px"
          fontFamily="Montserrat"
          fontSize={{ base: "10px", md: "14px" }}
          fontWeight={400}
          textAlign="justify"
          w="100%"
        >
          {data?.project_description}
        </Text>
        <Box h="24px" />
        <Divider color="#FCFCFC33" />
        <Box h="24px" />
        <Text
          fontFamily="Montserrat"
          fontSize={{ base: "12px", md: "16px" }}
          fontWeight={800}
        >
          Progress
        </Text>
        <Flex direction={"column"} mt="2" gap="2">
          {APPLICATION_STEPS.map((step, index) => {
            const cStatus =
              PROJECT_STATUS.DocumentValuation +
              index -
              APPLICATION_BASE_STATUS;
            let progress = PROGRESS_STATUS.PENDING,
              lR,
              rR;
            if (data) {
              if (data.project_status > cStatus) {
                progress = PROGRESS_STATUS.APPROVED;
                lR = communityCount;
                rR = communityCount;
              } else if (data.project_status == cStatus) {
                if (data.rejected) progress = PROGRESS_STATUS.REJECTED;
                else progress = PROGRESS_STATUS.VOTING;
                lR = yesVotedCount;
                rR = votedCount;
              } else progress = PROGRESS_STATUS.PENDING;
            }
            return (
              <Grid
                templateColumns="10% 30% 20% 40%"
                key={index}
                fontSize={{ base: "10px", md: "16px" }}
                gap="10px"
              >
                <GridItem>
                  <step.image size="16px" color="#BFBFBF" />
                </GridItem>
                <GridItem>{step.label}</GridItem>
                <GridItem display="flex">
                  <ProgressIcon progress={progress} />
                  {PROGRESS_TEXT[progress]}
                </GridItem>
                <GridItem
                  display="flex"
                  flexDirection={{ base: "column", md: "row" }}
                  gap={{ base: "1px", md: "10px" }}
                >
                  {progress != PROGRESS_STATUS.PENDING && (
                    <chakra.span ml="20px" whiteSpace="nowrap">
                      {lR}/{rR} Voted
                    </chakra.span>
                  )}
                  {(progress == PROGRESS_STATUS.VOTING ||
                    progress == PROGRESS_STATUS.REJECTED) && <VoteButton />}
                </GridItem>
              </Grid>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}
