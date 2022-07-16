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
  prjFundraise: string;
  setPrjFundraise: Dispatch<SetStateAction<string>>;
}
const ProjectFundraiseOption: FunctionComponent<Props> = ({
  prjFundraise,
  setPrjFundraise,
}) => {
  return (
    <Box mt="40px" w="30%">
      <Flex justify="space-between">
        <Text mb="20px">Fundraise Option</Text>
      </Flex>
      <InputTransition
        unitid="projectchain"
        selected={prjFundraise == "" ? false : true}
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
            setPrjFundraise(e.target.value);
          }}
        >
          <option selected style={{ backgroundColor: "#1B0645" }}>
            Token
          </option>
          <option style={{ backgroundColor: "#1B0645" }}>NFT</option>
          <option style={{ backgroundColor: "#1B0645" }}>Equity</option>
          <option style={{ backgroundColor: "#1B0645" }}>Token & Equity</option>
          <option style={{ backgroundColor: "#1B0645" }}>Others</option>
        </Select>
      </InputTransition>
    </Box>
  );
};
export default ProjectFundraiseOption;
