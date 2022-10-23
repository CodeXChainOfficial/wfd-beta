import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Text,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  chakra,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ProgressIcon } from "../ProjectPanel/ProjectOnApproval";
import {
  APPLICATION_BASE_STATUS,
  APPLICATION_STEPS,
} from "../../../pages/administrator/viewproject/approval";
import { useCommunityData } from "../../../hook/FetchProject";
import { PROJECT_STATUS } from "../../../types/ProjectStatus";
import { PROGRESS_STATUS, PROGRESS_TEXT } from "../../../types/ProgreessStatus";

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
    <Box p="40px" bg="#130A49" borderRadius="10px" mt="30px" w="600px">
      <Flex w="100%">
        <Flex direction="column">
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
        <Flex direction="column" pl="24px">
          <Text fontFamily="Montserrat" fontSize="20px" fontWeight={700}>
            {data?.project_title}
          </Text>
          <Text
            mt="8px"
            fontFamily="Montserrat"
            fontSize="14px"
            fontWeight={400}
            textAlign="justify"
            w="350px"
          >
            {data?.project_description}
          </Text>
          <Box h="24px" />
          <Divider color="#FCFCFC33" />
          <Box h="24px" />
          <Text fontFamily="Montserrat" fontSize="16px" fontWeight={800}>
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
                <Flex key={index}>
                  <step.image size="16px" color="#BFBFBF" />
                  <Text w="145px" ml="12px">
                    {step.label}
                  </Text>
                  <ProgressIcon progress={progress} />
                  {PROGRESS_TEXT[progress]}
                  {progress != PROGRESS_STATUS.PENDING && (
                    <chakra.span ml="20px" whiteSpace="nowrap">
                      {lR}/{rR} Voted
                    </chakra.span>
                  )}
                  {(progress == PROGRESS_STATUS.VOTING ||
                    progress == PROGRESS_STATUS.REJECTED) && <VoteButton />}
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

const VoteButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        ml="12px"
        colorScheme={"linkedin"}
        variant="outline"
        onClick={onOpen}
      >
        Vote
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Choice for Project's Document</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button variant="solid" colorScheme="teal">
              Yes
            </Button>
            <Button variant="solid" colorScheme="red">
              No
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
