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
  typeText: string;
  type: any;
  setType: Dispatch<SetStateAction<any>>;
  options: any;
  w: any;
}
const CustomSelect: FunctionComponent<Props> = ({
  typeText,
  type,
  setType,
  options,
  w,
}) => {
  return (
    <Box w={w}>
      <Flex justify="space-between">
        <Text mb="20px">{typeText}</Text>
      </Flex>

      <InputTransition
        unitid={"selectinputtransition" + typeText}
        selected={type == "" ? false : true}
        width="100%"
        height="55px"
        rounded="md"
      >
        <Select
          id={"options" + typeText}
          style={{ background: "transparent", border: "0" }}
          h="55px"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          {options.map((item: any, index: number) => (
            <option style={{ backgroundColor: "#1B0645" }} key={index}>
              {item}
            </option>
          ))}
        </Select>
      </InputTransition>
    </Box>
  );
};
export default CustomSelect;
