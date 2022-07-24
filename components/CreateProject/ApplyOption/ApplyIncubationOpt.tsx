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
  return (
    <Box mt="10px">
      <Flex justify="space-between">
        <Text mb="20px">Incubation Assistance</Text>
      </Flex>
      <InputTransition
        unitid={"projectreq" + `${typeText}${index}`}
        selected={isNull(prjIncuNeeds[index]) ? false : true}
        width="100%"
        height="55px"
        rounded="md"
        style={{ background: "transparent", border: "0" }}
      >
        <Select
          id={"prjchain " + `${index}`}
          style={{ background: "parent", border: "0" }}
          h="55px"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e: { target: { value: string } }) => {
            console.log(e.target.value, index);
            onChangeNeeds(e.target.value, index);
          }}
        >
         {IncubationNeedsOpt.map((nds) => (
            <option
              key={nds.name}
              value={nds.name}
              style={{ backgroundColor: "#1B0645" }}
            >
              {nds.label}
            </option>
          ))}
        </Select>
      </InputTransition>
    </Box>
  );
};
export default NeedsInput;
