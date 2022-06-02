import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Flex, Text, InputGroup, Input, Box } from "@chakra-ui/react";

import { InputTransition } from "../ImageTransition";

interface Props {
  typeText: string;
  type: any;
  setType: Dispatch<SetStateAction<any>>;
  w: any;
  mt: any;
}
const CustomInput: FunctionComponent<Props> = ({
  typeText,
  type,
  setType,
  w,
  mt,
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
      <InputTransition
        unitid={"inputtransition" + typeText}
        selected={type == "" ? false : true}
        width="100%"
        height="55px"
        rounded="md"
      >
        <InputGroup
          style={{ background: "rgba(255, 255, 255, 0.05)" }}
          size="sm"
          border="0px"
        >
          <Input
            style={{ border: "0", background: "transparent" }}
            type="text"
            h="55px"
            rounded="md"
            value={type}
            onChange={(e) => onChangeType(e)}
            // readOnly=
          />
        </InputGroup>
      </InputTransition>
    </Box>
  );
};
export default CustomInput;
