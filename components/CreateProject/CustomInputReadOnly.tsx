import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Flex, Text, InputGroup, Input, Box } from "@chakra-ui/react";

import { InputTransition } from "../ImageTransition";

interface Props {
  typeText: string;
  type: any;
  w: any;
  mt: any;
}
const CustomInputReadOnly: FunctionComponent<Props> = ({
  typeText,
  type,
  w,
  mt,
}) => {
  return (
    <Box w={w} mt={mt}>
      <Flex justify="space-between">
        <Text mb="20px">{typeText}</Text>
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
            readOnly
          />
        </InputGroup>
      </InputTransition>
    </Box>
  );
};
export default CustomInputReadOnly;
