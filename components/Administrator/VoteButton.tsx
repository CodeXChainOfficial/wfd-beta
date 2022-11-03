import React from "react";
import {
  Text,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { useMetamaskWallet } from "../../contexts/metamask";
import { ethers } from "ethers";
import {
  ERROR_OPTION,
  SUCCESS_OPTION,
  WEFUND_CONTRACT,
} from "../../config/constants";
import WEFUND_ABI from "../../config/WeFund.json";
import { PROJECT_STATUS } from "../../types/ProjectStatus";
import { fetchProjectData } from "../../hook/FetchProject";
import { useStore } from "../../contexts/store";
import { toast } from "react-toastify";

const VoteButton = ({ data }: { data: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const metamask = useMetamaskWallet();
  const signer = metamask.signer;
  const contract = new ethers.Contract(WEFUND_CONTRACT, WEFUND_ABI, signer);
  const pid = data?.project_id;
  const { state, dispatch } = useStore();

  const vote = async (yesno: boolean) => {
    onClose();

    try {
      toast("Please wait", { ...SUCCESS_OPTION, autoClose: false });
      let res;
      switch (data.project_status) {
        case PROJECT_STATUS.DocumentValuation:
          res = await contract.documentValuationVote(pid, yesno);
          break;
        case PROJECT_STATUS.IntroCall:
          res = await contract.introCallVote(pid, yesno);
          break;
        case PROJECT_STATUS.DocumentValuation:
          res = await contract.documentValuationVote(pid, yesno);
          break;
        case PROJECT_STATUS.IncubationGoalSetup:
          res = await contract.incubationGoalSetupVote(pid, yesno);
          break;
        case PROJECT_STATUS.IncubationGoal:
          res = await contract.incubationGoalVote(pid, yesno);
          break;
        case PROJECT_STATUS.MilestoneSetup:
          res = await contract.milestoneSetupVote(pid, yesno);
          break;
        case PROJECT_STATUS.MilestoneRelease:
          res = await contract.milestoneReleaseVote(pid, yesno);
          break;
      }
      await res.wait();
      fetchProjectData(state, dispatch, true);
      toast.dismiss();
      toast("Success", SUCCESS_OPTION);
    } catch (e) {
      toast.dismiss();
      toast("Failed", ERROR_OPTION);
      console.log(e);
    }
  };

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button
            colorScheme={"linkedin"}
            variant="outline"
            fontSize={{ base: "10px", md: "12px" }}
            w="80px"
            h="30px"
          >
            Vote
          </Button>
        </PopoverTrigger>
        <PopoverContent border="solid 0px" w="150px">
          <PopoverBody bg="black" display="flex" flexDirection="column">
            <Text>Pick your choice!</Text>
            <Flex gap="10px">
              <Button
                variant="solid"
                colorScheme="teal"
                onClick={() => vote(true)}
              >
                Yes
              </Button>
              <Button
                variant="solid"
                colorScheme="red"
                onClick={() => vote(false)}
              >
                No
              </Button>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      {/* 
      <Button
        colorScheme={"linkedin"}
        variant="outline"
        onClick={onOpen}
        fontSize={{ base: "10px", md: "12px" }}
        w="80px"
        h="30px"
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
          <ModalHeader>Pick your choice</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" gap="10px">
            <Button
              variant="solid"
              colorScheme="teal"
              onClick={() => vote(true)}
            >
              Yes
            </Button>
            <Button
              variant="solid"
              colorScheme="red"
              onClick={() => vote(false)}
            >
              No
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  );
};

export default VoteButton;
