/* eslint-disable react/display-name */
import React, { useEffect, useState, useMemo, useRef, forwardRef } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  HStack,
  VStack,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { useStore, useJunoConnection } from "../contexts/store";
import { useCommunityData } from "../hook/FetchProject";
import {
  InputTransition,
  ButtonTransition,
} from "../components/ImageTransition";

import PageLayout from "../components/PageLayout";
import Footer from "../components/Footer";
import { Set2Mainnet, Set2Testnet } from "../utils/utility";
import { WEFUND_CONTRACT } from "../config/constants";

export default function Dashboard() {
  const { state, dispatch } = useStore();
  const [wallet, setWallet] = useState("");
  const router = useRouter();

  const [postCommunityData, setPostCommunityData] = useState<any[]>([]);
  const [nextNetwork, setNextNetwork] = useState("Test");

  const junoConnection = useJunoConnection();
  const client = junoConnection?.getClient();
  const address = junoConnection?.account;

  const communityData = useCommunityData();
  useEffect(() => {
    async function fetch() {
      try {
        setPostCommunityData(communityData);
      } catch (e) {
        console.log(e);
      }
    }
    fetch();
  }, [communityData, nextNetwork]);

  //------------Add/remove community member-----------------
  async function addCommunityMember() {
    try {
      await client.execute(
        address,
        WEFUND_CONTRACT,
        {
          add_communitymember: {
            wallet: wallet,
          },
        },
        "auto"
      );
    } catch (e) {
      console.log(e);
    }
  }

  async function removeCommunityMember(wallet: any) {
    try {
      await client.execute(
        address,
        WEFUND_CONTRACT,
        {
          remove_communitymember: {
            wallet: wallet,
          },
        },
        "auto"
      );
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (state.net == "testnet") setNextNetwork("mainnet");
    else setNextNetwork("testnet");
  }, [state.net]);

  function switchNetwork() {
    if (state.net == "testnet") {
      Set2Mainnet(dispatch);
      setNextNetwork("testnet");
    } else {
      Set2Testnet(dispatch);
      setNextNetwork("mainnet");
    }
    dispatch({
      type: "setProjectData",
      payload: "",
    });
    dispatch({
      type: "setConfigData",
      payload: "",
    });
    dispatch({
      type: "setCommunityData",
      payload: "",
    });
    dispatch({
      type: "setActiveProjectData",
      payload: "",
    });
    // navigate("/");
  }
  const SwitchButton = () => {
    return (
      <div
        onClick={switchNetwork}
        style={{ cursor: "pointer", border: "1px solid red", padding: "1px" }}
      >
        Switch to {nextNetwork}
      </div>
    );
  };

  return (
    <PageLayout title="Dashboard" subTitle1="Admin" subTitle2="Dashboard">
      <Flex
        direction="column"
        justify="center"
        mt="50px"
        width={{ base: "90%", md: "70%", lg: "50%" }}
      >
        {/* <SwitchButton /> */}
        <Flex
          w="100%"
          h="50px"
          my="20px"
          background="blue.700"
          justify="center"
          align="center"
          rounded="10px"
          cursor="pointer"
          _hover={{ background: "blue.300" }}
          onClick={() => router.push("/explorer")}
        >
          <Text color="white">Go to Explorer page</Text>
        </Flex>
        {postCommunityData?.map((member: string, index) => (
          <Stack
            w="100%"
            mt="10px"
            key={index}
            justify="space-between"
            align="center"
            direction={{ base: "column", md: "column", lg: "row" }}
            spacing="10px"
          >
            <Text fontSize={{ base: "8px", md: "12px" }}>{member}</Text>
            <ButtonTransition
              unitid={"Removemember" + index}
              selected={false}
              width="140px"
              height="35px"
              rounded="33px"
              onClick={() => removeCommunityMember(member)}
            >
              Remove
            </ButtonTransition>
          </Stack>
        ))}
        <Stack
          w="100%"
          my="10px"
          spacing="10px"
          justify="space-between"
          align="center"
          direction={{ base: "column", md: "column", lg: "row" }}
        >
          <InputTransition
            unitid="wallet"
            selected={wallet == "" ? false : true}
            width="100%"
            height="45px"
            rounded="md"
          >
            <Input
              style={{ border: "0", background: "transparent" }}
              type="text"
              h="45px"
              rounded="md"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
            />
          </InputTransition>
          <Box w="140px">
            <ButtonTransition
              unitid="addmember"
              selected={false}
              width="140px"
              height="35px"
              rounded="33px"
              onClick={() => addCommunityMember()}
            >
              Add
            </ButtonTransition>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </PageLayout>
  );
}
