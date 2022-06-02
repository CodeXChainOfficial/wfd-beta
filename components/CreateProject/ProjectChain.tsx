import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import {
  Flex,
  Text,
  Select,
  InputLeftElement,
  Input,
  Box,
} from "@chakra-ui/react";

import { InputTransition } from "../ImageTransition";

interface Props {
  prjChain: string;
  setPrjChain: Dispatch<SetStateAction<string>>;
}
const ProjectChain: FunctionComponent<Props> = ({ prjChain, setPrjChain }) => {
  return (
    <Box mt="40px" w="30%">
      <Flex justify="space-between">
        <Text mb="20px">Blockchain</Text>
      </Flex>
      <InputTransition
        unitid="projectchain"
        selected={prjChain == "" ? false : true}
        width="100%"
        height="55px"
        rounded="md"
        background="rgba(255, 255, 255, 0.05)"
      >
        <Select
          id="prjchain"
          style={{ background: "parent", border: "0" }}
          h="55px"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e) => {
            setPrjChain(e.target.value);
          }}
        >
          <option selected style={{ backgroundColor: "#1B0645" }}>
            Terra
          </option>
          <option style={{ backgroundColor: "#1B0645" }}>Solana</option>
          <option style={{ backgroundColor: "#1B0645" }}>Ethereum</option>
          <option style={{ backgroundColor: "#1B0645" }}>Polygon</option>
          <option style={{ backgroundColor: "#1B0645" }}>Avalanche</option>
          <option style={{ backgroundColor: "#1B0645" }}>Others</option>
        </Select>
      </InputTransition>
    </Box>
  );
};
export default ProjectChain;
