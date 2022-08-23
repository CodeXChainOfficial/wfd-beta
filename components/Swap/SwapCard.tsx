import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Container,
  HStack,
  Text,
  Flex,
  Select,
  Spacer,
  Image,
  NumberInput,
  NumberInputField,
  Spinner,
} from "@chakra-ui/react";
import { ethers } from "ethers";

import {
  CHAIN_TYPE,
  ROUTER_CHAIN,
  ROUTER_CHAIN_CONFIG,
  ROUTER_FEE_TOKENS,
} from "../../config/constants/swap";
import { ERC20_ABI } from "../../config/constants";
import { useMetamaskWallet } from "../../contexts/metamask";
import { useTokenList } from "../../hook/router_tokenlist";

export enum SwapType {
  from,
  to,
}

interface SwapProps {
  type: SwapType;
  chain: CHAIN_TYPE;
  setChain: Dispatch<SetStateAction<CHAIN_TYPE>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  value: number;
  setValue?: Dispatch<SetStateAction<number>>;
  feeToken?: string;
  setFeeToken?: Dispatch<SetStateAction<string>>;
  isLoading?: boolean;
}

export default function SwapCard({
  type,
  chain,
  setChain,
  token,
  setToken,
  value,
  setValue,
  feeToken,
  setFeeToken,
  isLoading,
}: SwapProps) {
  // const [tokenList, setTokenList] = useState<any[]>([]);
  const [balance, setBalance] = useState("0");

  const metamask = useMetamaskWallet();
  const account = metamask.account;
  const chainInfo = ROUTER_CHAIN_CONFIG[chain];
  const tokenList = useTokenList(chain);

  useEffect(() => {
    if (tokenList.length > 0) setToken(tokenList[0].address);
  }, [tokenList]);

  useEffect(() => {
    const getBalance = async () => {
      try {
        console.log(chainInfo);
        const provider = new ethers.providers.JsonRpcProvider(
          chainInfo.rpc,
          chainInfo.chain_id
        );
        const contract = new ethers.Contract(token, ERC20_ABI, provider);
        const balance = await contract.balanceOf(account);
        const decimals = await contract.decimals();
        setBalance(ethers.utils.formatUnits(balance, decimals).toString());
      } catch (e) {
        console.log(e);
      }
    };
    getBalance();
  }, [token]);

  return (
    <Container borderRadius="10px" bgGradient="linear(#430E82, #060049)">
      <Flex direction="column" m="8px" pt="32px">
        {type == SwapType.from ? (
          <Text fontFamily={"Montserrat"} fontWeight="800" fontSize="26px">
            From
          </Text>
        ) : (
          <Text fontFamily={"Montserrat"} fontWeight="800" fontSize="26px">
            To
          </Text>
        )}
        <Container h="16px" />
        <Flex alignContent={"center"} direction={{ base: "column", md: "row" }}>
          <Flex flex="1">
            <Select
              bg="#3F147F"
              borderColor="#3F147F"
              color="white"
              value={chain}
              onChange={(e) => setChain(e.target.value as CHAIN_TYPE)}
            >
              {ROUTER_CHAIN.map((item, index) => (
                <option
                  value={item}
                  key={index}
                  style={{
                    color: "black",
                  }}
                >
                  {item}
                </option>
              ))}
            </Select>
          </Flex>
          <Container
            h={{ base: type == SwapType.from ? 8 : 0, md: 0 }}
            w={{ base: 8, lg: 24 }}
          />
          {type == SwapType.from ? (
            <Flex flex="1">
              <Select
                bgGradient="linear(#000000, #160335)"
                borderColor="#000000"
                color="white"
                value={feeToken}
                onChange={(e) => setFeeToken && setFeeToken(e.target.value)}
              >
                {ROUTER_FEE_TOKENS[chain].map((item, index) => (
                  <option
                    value={item.address}
                    key={index}
                    style={{ color: "black" }}
                  >
                    {item.symbol}
                  </option>
                ))}
              </Select>
            </Flex>
          ) : (
            <Spacer />
          )}
        </Flex>
        <Container h="32px" />
        <Container
          pl="32px"
          pr="32px"
          pt="16px"
          pb="16px"
          bgGradient="linear(#000000, #160335)"
        >
          <Flex alignContent={"center"} direction="column">
            <HStack w="full">
              <Flex w="full">
                <NumberInput defaultValue="0.0" value={value} min={0}>
                  <NumberInputField
                    w="full"
                    color="#80869B"
                    fontFamily={"Montserrat"}
                    fontWeight="600"
                    fontSize="32px"
                    readOnly={type == SwapType.to}
                    border="none"
                    _focusVisible={{ border: "none" }}
                    onChange={(e) => {
                      if (setValue) {
                        const value = parseFloat(e.target.value);
                        setValue(value > 0 ? value : 0);
                      }
                    }}
                  />
                </NumberInput>
              </Flex>
              {type == SwapType.to && isLoading && <Spinner width="20px" />}
              <Flex w="150px" alignItems="flex-end" pb={2}>
                <Select
                  color="#69E4FF"
                  variant="unstyled"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                >
                  {tokenList?.map((token, index) => (
                    <option value={token.address} key={index}>
                      {token.symbol}
                    </option>
                  ))}
                </Select>
              </Flex>
            </HStack>
            <HStack w="full">
              <Flex w="full">
                <Text
                  w="full"
                  color="#80869B"
                  fontFamily={"Montserrat"}
                  fontWeight="600"
                  fontSize="14px"
                >
                  -$0.0
                </Text>
              </Flex>
              {type == SwapType.from && (
                <Flex w="full">
                  <Text
                    w="full"
                    color="#80869B"
                    fontFamily={"Montserrat"}
                    fontWeight="600"
                    fontSize="14px"
                    textAlign="end"
                  >
                    Balance: {balance}
                  </Text>
                </Flex>
              )}
            </HStack>
          </Flex>
        </Container>
        <Container h="64px" />
      </Flex>
    </Container>
  );
}
