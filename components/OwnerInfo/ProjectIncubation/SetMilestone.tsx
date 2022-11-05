import React, { useState } from "react";
import { Button, Flex, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { ethers } from "ethers";

import { PROJECT_INFO } from "../../../types/Project";
import { useMetamaskWallet } from "../../../contexts/metamask";
import {
  ERROR_OPTION,
  SUCCESS_OPTION,
  WEFUND_CONTRACT,
} from "../../../config/constants";
import WEFUND_ABI from "../../../config/WeFund.json";
import { useStore } from "../../../contexts/store";
import { toast } from "react-toastify";
import { fetchProjectData } from "../../../hook/FetchProject";

interface Props {
  data: PROJECT_INFO;
}
export default function SetMilestone({ data }: Props) {
  const metamask = useMetamaskWallet();
  const signer = metamask.signer;
  const contract = new ethers.Contract(WEFUND_CONTRACT, WEFUND_ABI, signer);
  const pid = data?.project_id;
  const { state, dispatch } = useStore();

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const onAdd = async () => {
    try {
      toast("Please wait", { ...SUCCESS_OPTION, autoClose: false });
      const res = await contract.addMilestone(pid, [
        0,
        name,
        description,
        startDate,
        endDate,
        amount,
      ]);
      await res.wait();
      await fetchProjectData(state, dispatch, true);
      toast.dismiss();
      toast("Success", SUCCESS_OPTION);
    } catch (e) {
      toast.dismiss();
      toast("Failed", ERROR_OPTION);
      console.log(e);
    }
  };

  return (
    <VStack
      spacing="20px"
      w="100%"
      color="white"
      mt="10px"
      fontSize={{ base: "12px", md: "16px" }}
    >
      <VStack
        w="100%"
        bg="#130A49"
        px={{ base: "2", md: "8" }}
        py="8"
        borderRadius="10px"
        spacing="30px"
      >
        <Flex gap="30px" w="100%" align="center">
          <Text whiteSpace="nowrap">Milestone Name</Text>
          <Input
            w="100%"
            placeholder="Type Name"
            fontSize="12px"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Flex>
        <Flex gap={{ base: "10px", md: "96px" }} w="100%">
          <Flex w="50%" direction="column" gap="23px">
            <Text whiteSpace="nowrap">Start Date</Text>
            <Input
              type="date"
              placeholder="DD/MM/YY"
              fontSize="12px"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Flex>
          <Flex w="50%" direction="column" gap="23px">
            <Text whiteSpace="nowrap">End Date</Text>
            <Input
              type="date"
              placeholder="DD/MM/YY"
              fontSize="12px"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Flex>
        </Flex>
        <Flex gap="30px" w="100%">
          <Text pt="10px">Description</Text>
          <Textarea
            w="100%"
            placeholder="Description of Milestone"
            fontSize="12px"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Flex>
        <Flex gap="40px" w="100%" align="center">
          <Text whiteSpace="nowrap">Amount</Text>
          <Flex w="100px" align="center" gap="5px">
            <Text>$</Text>
            <Input
              w="100%"
              placeholder="0"
              fontSize="12px"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Flex>
        </Flex>
      </VStack>
      <Button
        w={{ base: "80px", md: "113px" }}
        h={{ base: "30px", md: "49px" }}
        variant="outline"
        alignSelf="flex-end"
        borderColor="#00A3FF"
        borderRadius="30px"
        fontSize={{ base: "8px", md: "12px" }}
        onClick={onAdd}
      >
        ADD+
      </Button>
    </VStack>
  );
}
