import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Flex, Text, InputGroup, Input, Box } from "@chakra-ui/react";

import { InputTransition } from "../ImageTransition";

interface Props {
  typeText: string;
  type: any;
  setType: Dispatch<SetStateAction<any>>;
  w?: any;
  mt?: any;
}
const CustomInput: FunctionComponent<Props> = ({
  typeText,
  type,
  setType,
  w = "100%",
  mt = 0,
}) => {
  function onChangeType(e: any) {
    if (e.target.value.length < 100) {
      setType(e.target.value);
    }
  }

  return (
    <Box w={w} mt={mt}>
      <Flex justify="space-between">
        <Text mb="20px">{typeText}</Text>
        <Text fontSize="15px" opacity="0.5">
          {type?.length}/100 words
        </Text>
      </Flex>
        <InputGroup
          style={{ background: "rgba(0, 0, 0, 0.25)" }}
          size="sm"
          border="0px"
        >
          <Input
            style={{ border: " 1.5px solid rgba(255, 255, 255, 0.2)", background: "transparent" }}
            type="text"
            h="55px"
            rounded="md"
            placeholder="Type here"
            value={type}
            onChange={(e) => onChangeType(e)}
            // readOnly=
          />
        </InputGroup>
    </Box>
  );
};
export default CustomInput;
