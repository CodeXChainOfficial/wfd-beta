import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Box, Flex, Text, Select, Input } from "@chakra-ui/react";

import { InputTransition } from "../../ImageTransition";
import { isNull } from "../../../utils/utility";

interface Props {
  typeText: string;
  index: number;
  prjIncuNeeds: any;
  setPrjIncuNeeds: Dispatch<SetStateAction<any>>;
}
const NeedsInput: FunctionComponent<Props> = ({
  typeText,
  index,
  prjIncuNeeds,
  setPrjIncuNeeds,
}) => {
  function onChangeNeeds(e: any, index: any) {
    const ar = [...prjIncuNeeds];
    ar[index] = e.target.value;
    setPrjIncuNeeds(ar);
  }

  return (
    <Box mt="10px">
      <Flex justify="space-between">
        <Text mb="20px">Incubation Assistance</Text>
      </Flex>
        <Select
          id={"prjchain " + `${index}`}
          style={{ border: " 1.5px solid rgba(255, 255, 255, 0.2)", background: "rgba(255, 255, 255, 0.05)" }}
          h="55px"
          size="sm"
          w="full"
          rounded="md"
          value={prjIncuNeeds[index]}
          onChange={(e) => onChangeNeeds(e, index)}
        >
          {IncubationNeedsOpt.map((nds) => (
            <option
              key={nds.name}
              value={nds.label}
              style={{ backgroundColor: "#1B0645" }}
            >
              {nds.label}
            </option>
          ))}
        </Select>
    </Box>
  );
};
export default NeedsInput;

const IncubationNeedsOpt = [
  {
    name: "doc",
    label: "Documentations",
  },
  {
    name: "sc",
    label: "Smart Contract",
  },
  {
    name: "fe",
    label: "Front End Dev",
  },
  {
    name: "be",
    label: "Back End Dev",
  },
  {
    name: "fi",
    label: "Financial",
  },
  {
    name: "lg",
    label: "Legal",
  },
  {
    name: "mk",
    label: "Marketing",
  },
  {
    name: "mc",
    label: "Multi Chain",
  },
];
