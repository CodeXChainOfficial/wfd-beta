import React, { FunctionComponent, useEffect } from "react";
import { Box, Flex, Input, Text, Select } from "@chakra-ui/react";

import { TOKEN_LIST } from "../../config/constants";
import { InputTransition } from "../ImageTransition";

interface Props {
  token: string;
  setToken: (value: string) => void;
  chain: string;
  setChain: (value: string) => void;
}
const OtherChainWallet: FunctionComponent<Props> = ({
  token,
  setToken,
  chain,
  setChain,
}) => {
  const list = TOKEN_LIST.filter((item) => item.chain == chain);
  useEffect(() => {
    setToken(list[0].name);
  }, [chain]);
  return (
    <Flex
      direction={{ base: "column", md: "column", lg: "row" }}
      mt="40px"
      justify="center"
      align="center"
    >
      <Box ml={{ base: "0px", md: "0px", lg: "0px" }}>
        <Flex>
          <Text mb="20px">Select Chain</Text>
        </Flex>
        <InputTransition
          unitid="chaintransition"
          selected={false}
          width="300px"
          height="45px"
          rounded="md"
        >
          <Select
            id="chainselect"
            style={{ background: "transparent", border: "0" }}
            h="45px"
            shadow="sm"
            size="sm"
            w="100%"
            value={chain}
            rounded="md"
            onChange={(e) => {
              setChain(e.target.value);
            }}
          >
            <option style={{ backgroundColor: "#1B0645" }}>Juno</option>
            <option style={{ backgroundColor: "#1B0645" }}>BSC</option>
            <option style={{ backgroundColor: "#1B0645" }}>Tron</option>
            <option style={{ backgroundColor: "#1B0645" }}>Near</option>
          </Select>
        </InputTransition>
      </Box>
      <Box ml={{ base: "0px", md: "0px", lg: "30px" }}>
        <Flex mt={{ base: "40px", md: "40px", lg: "0px" }}>
          <Text mb="20px">TOKENS</Text>
        </Flex>
        <Box>
          <InputTransition
            unitid="inputwallet"
            selected={false}
            width="300px"
            height="45px"
            rounded="md"
          >
            <Select
              id="tokenselect"
              style={{ background: "transparent", border: "0" }}
              h="45px"
              shadow="sm"
              size="sm"
              w="100%"
              value={token}
              rounded="md"
              onChange={(e) => {
                setToken(e.target.value);
              }}
            >
              {list.map((token, index) => (
                <option style={{ backgroundColor: "#1B0645" }} key={index}>
                  {token.name}
                </option>
              ))}
            </Select>
          </InputTransition>
        </Box>
      </Box>
    </Flex>
  );
};

export default OtherChainWallet;
