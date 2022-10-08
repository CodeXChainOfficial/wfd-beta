import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import {
  Flex,
  Text,
  Select,
  InputLeftElement,
  Input,
  Box,
} from "@chakra-ui/react";

import { InputTransition } from "../../ImageTransition";

interface Props {
  typeText: string;
  type: any;
  setType: Dispatch<SetStateAction<any>>;
  options: any;
  w: any;
}
const CustomSelectApply: FunctionComponent<Props> = ({
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
        <Select
          id={"options" + typeText}
          style={{ border: " 1.5px solid rgba(255, 255, 255, 0.2)", background: "rgba(255, 255, 255, 0.05)" }}
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
    </Box>
  );
};
export default CustomSelectApply;