import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import {
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Box,
} from "@chakra-ui/react";

import { InputTransition } from "../ImageTransition";

interface Props {
  typeText: string;
  type: any;
  setType: Dispatch<SetStateAction<any>>;
  w: any;
}
const CustomEmailInput: FunctionComponent<Props> = ({
  typeText,
  type,
  setType,
  w,
}) => {
  return (
    <Box w={w}>
      <Flex justify="space-between">
        <Text mb="20px">{typeText}</Text>
      </Flex>
      <InputTransition
        unitid={"transitionemail" + typeText}
        selected={type == "" ? false : true}
        width="100%"
        height="55px"
        rounded="md"
      >
        <InputGroup
          size="sm"
          style={{ background: "rgba(255, 255, 255, 0.05)" }}
        >
          <InputLeftElement
            style={{ background: "transparent", border: "0" }}
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            // children=" "
          />
          <Input
            style={{ background: "transparent", border: "0" }}
            type="email"
            h="55px"
            placeholder="example@email.com"
            rounded="md"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </InputGroup>
      </InputTransition>
    </Box>
  );
};

export default CustomEmailInput;
