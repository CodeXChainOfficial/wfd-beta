import {
  Box,
  Flex,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

import {
  ImageTransition,
  InputTransition,
} from "../../components/ImageTransition";
import { WEFUND_ID } from "../../config/Constants";
import { ActionKind, useProjectData, useStore } from "../../contexts/store";
import PageLayout from "../../components/PageLayout";
import { getAllocation, ParseParam } from "../../utils/Util";
import { errorOption } from "../../config/Constants";
import { useRouter } from "next/router";
import OtherChainWallet from "../../components/Invest/OtherChainWallet";

export default function InvestStep2() {
  const [chain, setChain] = useState("Juno");
  const [token, setToken] = useState("");
  const [backAmount, setBackAmount] = useState("");
  const [wfdAmount, setWfdamount] = useState(0.0);
  const [max, setMax] = useState(0);
  const [allocation, setAllocation] = useState(0);
  const { state, dispatch } = useStore();
  const router = useRouter();

  const projectId = ParseParam();

  useEffect(() => {
    const allocation = getAllocation(state, projectId);
    setAllocation(allocation);
    const max =
      projectId == WEFUND_ID
        ? allocation
        : allocation >= 100
        ? (allocation * 100) / 95
        : allocation + 5;
    setMax(Math.floor(max));
  }, [state.projectData]);

  function onChangeBackamount(val: string) {
    const amount = parseFloat(val);
    const wefundRate = state.presale ? 0.09 : 0.06;
    setWfdamount(amount / wefundRate);
    setBackAmount(val);
  }

  function onNext() {
    if (allocation == 0) {
      toast("Have no allocation any more!", errorOption);
      return;
    }
    if (parseInt(backAmount) > max) {
      toast("Exceed the allocation!", errorOption);
      return;
    }
    dispatch({
      type: ActionKind.setInvestChain,
      payload: chain,
    });
    dispatch({
      type: ActionKind.setInvestToken,
      payload: token,
    });
    dispatch({
      type: ActionKind.setInvestAmount,
      payload: backAmount,
    });
    dispatch({
      type: ActionKind.setInvestWFDAmount,
      payload: wfdAmount,
    });
    router.push({
      pathname: "/invest/step3",
      query: {
        project_id: projectId,
      },
    });
  }

  return (
    <PageLayout
      title="Back the Project"
      subTitle1="Invest"
      subTitle2="in WeFund"
    >
      <Box
        width={{ base: "100%", sm: "80%", md: "80%", lg: "80%", xl: "70%" }}
        px="50px"
        style={{ fontFamily: "Sk-Modernist-Regular" }}
      >
        <Flex
          mt="83px"
          justify="center"
          align="center"
          direction="column"
          style={{ fontFamily: "PilatExtended-Regular" }}
        >
          <HStack mt="150px" mb="50px" px="15px">
            <Box
              width={{ base: "50px", md: "40px" }}
              style={{
                paddingTop: "3px",
                paddingLeft: "3px",
                height: "24px",
                border: "3px solid #3BE489",
                backgroundColor: "#3BE489",
                borderRadius: "50%",
                display: "inline-block",
              }}
            >
              <CheckIcon color="#250E3F" w={3} h={3} marginBottom={"20px"} />
            </Box>
            <Text
              fontSize={{ base: "12px", sm: "16px", md: "22px", lg: "22px" }}
            >
              Step 1
            </Text>
            <Box
              style={{
                height: "4px",
                width: "30%",
                background:
                  "linear-gradient(90deg, #3BE489 0%, rgba(59, 228, 137, 0) 100%)",
              }}
            ></Box>
            <Box
              width={{ base: "50px", md: "40px" }}
              style={{
                height: "24px",
                border: "3px solid rgba(255, 255, 255, 0.3799999952316284)",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></Box>
            <Text
              fontSize={{ base: "12px", sm: "16px", md: "22px", lg: "22px" }}
            >
              Step 2
            </Text>
            <Box
              style={{
                height: "0px",
                width: "30%",
                border: "2px solid rgba(255, 255, 255, 0.3799999952316284)",
                background: " rgba(255, 255, 255, 0.3799999952316284)",
              }}
            ></Box>
            <Box
              width={{ base: "50px", md: "40px" }}
              style={{
                height: "24px",
                border: "3px solid rgba(255, 255, 255, 0.3799999952316284)",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></Box>
            <Text
              fontSize={{ base: "12px", sm: "16px", md: "22px", lg: "22px" }}
            >
              Final Step
            </Text>
          </HStack>
          <Text
            fontSize={{ base: "15px", md: "15px", lg: "22px" }}
            fontWeight={"300"}
          >
            Input your{" "}
            <span style={{ color: "#00A3FF" }}>Investment Amount</span>
          </Text>
          <Text
            fontSize={{ base: "12px", md: "12px", lg: "16x" }}
            maxW={"390px"}
            color="rgba(255, 255, 255, 0.54)"
            fontWeight={"normal"}
            mt={"20px"}
            textAlign={"center"}
          >
            Please select the chain and tokens, enter amount and we will convert
            the WFD amount for you
          </Text>
        </Flex>
        {/* --------amount to back----------- */}
        <OtherChainWallet
          token={token}
          setToken={setToken}
          chain={chain}
          setChain={setChain}
        />

        <Flex
          direction={{ base: "column", md: "column", lg: "column" }}
          ml={{ base: "0px", md: "0px", lg: "0px" }}
          mt="40px"
          justify="center"
          align="center"
        >
          <Flex>
            <Text mb="20px">Token amount you want to invest</Text>
          </Flex>
          <InputTransition
            unitid="backamount"
            selected={backAmount == "" ? false : true}
            width="300px"
            height="55px"
            rounded="md"
          >
            <InputGroup
              size={{ base: "200px", lg: "sm" }}
              bg="transparent"
              h="100%"
              alignItems="center"
            >
              <Input
                h="100%"
                pl="25px"
                border="solid 0px"
                rounded="md"
                _focusVisible={{ border: "solid 0px" }}
                value={backAmount}
                onChange={(e) => onChangeBackamount(e.target.value)}
              />
              <InputRightElement
                w={{ base: "40px", lg: "60px" }}
                h="55px"
                pr={{ base: "15px", lg: "5px" }}
                pointerEvents="none"
              >
                <Text>{token}</Text>
              </InputRightElement>
            </InputGroup>
          </InputTransition>

          <Text mb="42px">
            Max: {max}&nbsp;{token}
          </Text>
          <Flex>
            <Text mb="20px">WFD tokens you will receive</Text>
          </Flex>
          <InputTransition
            unitid="WFDamount"
            selected={backAmount == "" ? false : true}
            width="300px"
            height="55px"
            rounded="md"
          >
            <InputGroup
              size={{ base: "200px", lg: "sm" }}
              bg="transparent"
              h="100%"
              alignItems="center"
            >
              <Input
                h="100%"
                pl="25px"
                border="solid 0px"
                _focusVisible={{ border: "solid 0px" }}
                rounded="md"
                value={wfdAmount}
                readOnly
                // onChange={(e) => { }}
              />
              <InputRightElement
                w={{ base: "40px", lg: "60px" }}
                h="55px"
                pr={{ base: "15px", lg: "5px" }}
                pointerEvents="none"
              >
                <Text>WFD</Text>
              </InputRightElement>
            </InputGroup>
          </InputTransition>
        </Flex>
        {/* -----------------Back Project----------------- */}
        <Flex w="100%" mt="60px" justify="center" mb="170px">
          <ImageTransition
            unitid="Invest2invest"
            border1="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background1="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            border2="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background2="linear-gradient(180deg, #1A133E 0%, #1A133E 100%)"
            border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
            selected={false}
            width="200px"
            height="50px"
            rounded="33px"
            onClick={() => onNext()}
          >
            <Box color="white">Invest</Box>
          </ImageTransition>
        </Flex>
      </Box>
    </PageLayout>
  );
}
