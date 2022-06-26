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
import Pagination from "@choc-ui/paginator";

import { useStore, useCommunityData } from "../contexts/store";
import {
  InputTransition,
  ButtonTransition,
} from "../components/ImageTransition";

import PageLayout from "../components/PageLayout";
import Footer from "../components/Footer";
import { Set2Mainnet, Set2Testnet } from "../utils/Util";

export default function Dashboard() {
  const { state, dispatch } = useStore();
  const [wallet, setWallet] = useState("");
  //-------------paginator------------------------------
  const [current, setCurrent] = useState(1);
  const pageSize = 10;

  const [postCommunityData, setPostCommunityData] = useState<any[]>([]);
  const [nextNetwork, setNextNetwork] = useState("Test");

  const Prev = forwardRef((props, ref) => (
    <Button ref={ref} {...props}>
      Prev
    </Button>
  ));
  const Next = forwardRef((props, ref) => (
    <Button ref={ref} {...props}>
      Next
    </Button>
  ));

  const itemRender = (_, type) => {
    if (type === "prev") {
      return Prev;
    }
    if (type === "next") {
      return Next;
    }
  };
  function onChangePaginator(page: number) {
    if (state.communityData == []) {
      setPostCommunityData([]);
      return;
    }
    const offset = (page - 1) * pageSize;
    setPostCommunityData(state.communityData.slice(offset, offset + pageSize));
  }

  //------------Add/remove community member-----------------
  function addCommunityMember() {
    const CommunityMsg = {
      add_communitymember: {
        wallet: wallet,
      },
    };
  }

  function removeCommunityMember(wallet: any) {
    const CommunityMsg = {
      remove_communitymember: {
        wallet: wallet.member,
      },
    };
  }

  const communityData = useCommunityData();
  //---------initialize fetching---------------------
  useEffect(() => {
    async function fetchContractQuery() {
      try {
        setCurrent(1);
        setPostCommunityData(communityData.slice(0, pageSize));
      } catch (e) {
        console.log(e);
      }
    }
    fetchContractQuery();
  }, [nextNetwork]);

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
        <SwitchButton />
        {postCommunityData?.map((member, index) => (
          <Stack
            w="100%"
            mt="10px"
            key={index}
            justify="space-between"
            align="center"
            direction={{ base: "column", md: "column", lg: "row" }}
            spacing="10px"
          >
            <Text>{member}</Text>
            <ButtonTransition
              unitid={"Removemember" + index}
              selected={false}
              width="140px"
              height="35px"
              rounded="33px"
              onClick={() => removeCommunityMember({ member })}
            >
              Remove
            </ButtonTransition>
          </Stack>
        ))}
        <Stack
          w="100%"
          mt="10px"
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
        <Flex w="100%" p={50} alignItems="center" justifyContent="center">
          <Pagination
            // bg={"linear-gradient(180deg, #FE8600 21.43%, #F83E00 147.62%)"}
            current={current}
            onChange={(page: any) => onChangePaginator(page)}
            pageSize={pageSize}
            total={communityData == [] ? 0 : state.communityData.length}
            itemRender={itemRender}
            paginationProps={{ display: "flex" }}
          />
        </Flex>
      </Flex>
      <Footer />
    </PageLayout>
  );
}