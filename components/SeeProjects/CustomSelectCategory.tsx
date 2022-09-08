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
const ProjectDropDown: FunctionComponent<Props> = ({
  typeText,
  type,
  setType,
  options,
  w,
}) => {
  return (
    <Box w={"200px"}>
      <Select
        id={"options" + typeText}
        style={{ background: "rgba(255, 255, 255, 0.2)", border: "0" }}
        h="43px"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        {options.map((item: any, index: number) => (
          <option
            style={{ backgroundColor: "#070016" }}
            key={index}
          >
            {item}
          </option>
        ))}
      </Select>
    </Box>
  );
};
export default ProjectDropDown;
