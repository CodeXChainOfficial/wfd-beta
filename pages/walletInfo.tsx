import React, { useState, useEffect, useRef } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { Box, Flex, Text, Button, HStack } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { WEFUND_ID } from "../config/Constants";

import { CheckNetwork } from "../utils/Util";
import { successOption } from "../config/Constants";
import { useCommunityData, useProjectData, useStore } from "../contexts/store";

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
  return (
    <Box color={"white"} padding={"5%"} mt="150px">
      <Flex
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
      </Flex>
    </Box>
  );
}
