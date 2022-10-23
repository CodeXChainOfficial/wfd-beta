import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Text,
  Input,
  HStack,
  VStack,
  Stack,
  Button,
  Image,
  Checkbox,
} from "@chakra-ui/react";
import { IoBan } from "react-icons/io5";

import CardBox from "../../components/Staking/CardBox";
import PageLayout from "../../components/PageLayout";
import Footer from "../../components/Footer";

import { useJunoConnection, useStore } from "../../contexts/store";
import {
  STAKING_CONTRACT,
  WFD_TOKEN,
  SUCCESS_OPTION,
} from "../../config/constants";
import { fetchProjectData } from "../../hook/FetchProject";
import { toast } from "react-toastify";

export default function Staking() {
  const { state, dispatch } = useStore();
  const [userInfo, setUserInfo] = useState({
    amount: "0",
    card_type: "Other",
    card_number: "0",
  });
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [pendingRewards, setPendingRewards] = useState("");
  const [decimals, setDecimals] = useState(1);

  const junoConnection = useJunoConnection();
  const client = junoConnection?.getClient();
  const address = junoConnection?.account;

  useEffect(() => {
    const fetch = async () => {
      // if (checkJunoConnection(state) == false) return;

      try {
        const tokenInfo = await client.queryContractSmart(WFD_TOKEN, {
          token_info: {},
        });
        setDecimals(tokenInfo.decimals);

        const res = await client.queryContractSmart(WFD_TOKEN, {
          balance: { address: address },
        });
        console.log(res);
        setBalance(parseInt(res.balance) / 10 ** parseInt(tokenInfo.decimals));

        const userInfo = await client.queryContractSmart(STAKING_CONTRACT, {
          get_user_info: { wallet: address },
        });
        userInfo.amount =
          parseInt(userInfo.amount) / 10 ** parseInt(tokenInfo.decimals);
        setUserInfo(userInfo);

        const pendingRewards = await client.queryContractSmart(
          STAKING_CONTRACT,
          {
            get_pending_rewards: {
              wallet: address,
            },
          }
        );
        setPendingRewards(pendingRewards);
      } catch (e) {
        console.log(e);
      }
    };

    fetch();
  }, [client]);

  function selectCard(cardType: string) {
    switch (cardType.toLowerCase()) {
      case "platium":
        setAmount(100000);
        break;
      case "gold":
        setAmount(40000);
        break;
      case "silver":
        setAmount(10000);
        break;
      case "bronze":
        setAmount(1000);
        break;
    }
  }
  async function staking() {
    const realAmount = amount * 10 ** decimals;
    try {
      let res = await client.execute(
        address,
        STAKING_CONTRACT,
        {
          deposit: {
            wallet: address,
            amount: `${realAmount}`,
          },
        },
        "auto"
      );

      res = await client.execute(
        address,
        WFD_TOKEN,
        {
          transfer: {
            recipient: STAKING_CONTRACT,
            amount: `${amount}`,
          },
        },
        "auto"
      );
      toast("WFD token staking success", SUCCESS_OPTION);
      fetchData(state, dispatch, true);
    } catch (e) {
      console.log(e);
    }
  }
  async function getRewards() {
    const res = await client.execute(
      address,
      STAKING_CONTRACT,
      {
        claim_rewards: {
          wallet: address,
        },
      },
      "auto"
    );
    toast("Claim rewards success", SUCCESS_OPTION);
    fetchData(state, dispatch, true);
  }
  function setMax() {
    setAmount(balance);
  }
  return (
    <PageLayout title="Staking" subTitle1="WFD" subTitle2="Staking">
      <VStack spacing="30px" fontFamily="PilatExtended-Bold">
        <Stack
          spacing="40px"
          rounded="15px"
          p="40px"
          direction={{ base: "column", md: "column", lg: "row" }}
        >
          <Flex
            alignContent={"center"}
            direction={{ base: "column", md: "column", lg: "row" }}
            pl={"35px"}
            pr={"35px"}
          >
            <Flex
              max-width={{ lg: "2xl" }}
              marginRight={{ lg: "25px" }}
              height={"490px"}
              pl={"20px"}
              pr={"20px"}
              bg="rgba(255, 255, 255, 0.05)"
              boxShadow={
                "0px 2px 10px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)"
              }
              border="2px solid rgba(255, 255, 255, 0.05)"
              borderRadius={"2xl"}
              justify={"center"}
              backdropBlur={"54px"}
              align="center"
            >
              <CardBox data={userInfo} />
            </Flex>
            <VStack
              mt={{ base: "20px", sm: "20px", md: "20px", lg: "0px" }}
              width={{ lg: "3xl" }}
              height={{ lg: "484px" }}
              backdropBlur={"54px"}
              style={{
                paddingTop: "65px",
                paddingBottom: "65px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "2px solid rgba(255, 255, 255, 0.05)",
                borderRadius: "25px",
              }}
            >
              <Flex
                alignSelf={{ base: "center", md: "center", lg: "center" }}
                paddingLeft={"10px"}
                paddingRight={"10px"}
              >
                <VStack spacing="20px" justify="center">
                  <Text fontSize="28px" fontWeight={"900"}>
                    Welcome
                  </Text>
                  <Text
                    fontSize={{
                      base: "8px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                    }}
                    fontWeight={"900"}
                  >
                    WALLET ADDRESS
                  </Text>
                  <Text fontSize="sm" textAlign={"center"}>
                    TOTAL STAKED AMOUNT BY THE USER
                  </Text>
                  <Text fontSize="5x1">{userInfo?.amount} WFD</Text>
                  <HStack spacing="5px">
                    <IoBan />
                    <Text fontSize="12px" textAlign="left">
                      PendingRewards: {pendingRewards}&nbsp;WFD
                    </Text>
                  </HStack>
                  <Button
                    w="200px"
                    h="50px"
                    fontSize="md"
                    color="grey.300"
                    //onClick={}
                    colorScheme="whiteAlpha"
                  >
                    Get Rewards
                  </Button>
                </VStack>
              </Flex>
            </VStack>
          </Flex>
        </Stack>
        <Box w={{ base: "100%", md: "80%", lg: "80%", xl: "50%" }} pb="10px">
          <Flex
            rounded="15px 15px 0 0"
            background="rgba(255, 255, 255, 0.09)"
            w="100%"
            h="60px"
            align="center"
          >
            <Text fontSize="14px" textAlign="left" pl="20px">
              Stake Now
            </Text>
          </Flex>
          <VStack
            spacing="20px"
            background="rgba(255, 255, 255, 0.05)"
            rounded="0 0 15px 15px"
            pb="20px"
          >
            <Stack
              spacing="10px"
              mt="10px"
              direction={{ base: "column", md: "column", lg: "row" }}
              //column={{ base: 1, sm: 2, md: 1 }}
            >
              <HStack spacing="10px">
                <Image
                  src="/media/Card/Platinum.png"
                  h="100px"
                  _hover={{ border: "1px solid red" }}
                  onClick={() => {
                    selectCard("platium");
                  }}
                />
                <Image
                  src="/media/Card/Gold.png"
                  h="100px"
                  _hover={{ border: "1px solid red" }}
                  onClick={() => {
                    selectCard("Gold");
                  }}
                />
              </HStack>
              <HStack spacing="10px">
                <Image
                  src="/media/Card/Silver.png"
                  h="100px"
                  _hover={{ border: "1px solid red" }}
                  onClick={() => {
                    selectCard("Silver");
                  }}
                />
                <Image
                  src="/media/Card/Bronze.png"
                  h="100px"
                  _hover={{ border: "1px solid red" }}
                  onClick={() => {
                    selectCard("bronze");
                  }}
                />
              </HStack>
            </Stack>
            <Text fontSize="16px" py="20px">
              HOW MUCH DO YOU WANT TO STAKE?
            </Text>
            <VStack
              background="rgba(255, 255, 255, 0.03)"
              mx="10px"
              spacing="20px"
              rounded="10px"
              w="70%"
              py="10px"
              px="10px"
            >
              <Flex direction="row" justify="space-between" w="100%">
                <Text fontSize="10px">Stake</Text>
                <Text fontSize="10px">BALANCE: {balance}</Text>
              </Flex>
              <HStack justify="space-between" align="flex-end" w="100%">
                <Input
                  fontSize="12px"
                  value={amount}
                  onChange={(e) => {
                    setAmount(parseInt(e.target.value));
                  }}
                />
                <HStack>
                  <Text
                    fontSize="10px"
                    color="gray.300"
                    cursor="pointer"
                    textStyle="underline"
                    onClick={setMax}
                  >
                    MAX
                  </Text>
                  <Text fontSize="12px">WFD</Text>
                </HStack>
              </HStack>
            </VStack>
            <Checkbox onChange={(e) => console.log(e)}>
              <Text fontSize="12px">I agree to WeFund Staking Terms</Text>
            </Checkbox>
            <Button color="white" onClick={staking} colorScheme="whiteAlpha">
              Approve
            </Button>
          </VStack>
        </Box>
      </VStack>

      <Footer />
    </PageLayout>
  );
}
