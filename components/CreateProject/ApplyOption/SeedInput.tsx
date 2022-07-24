import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Box, Flex, Text, InputGroup, Input } from "@chakra-ui/react";

import { InputTransition } from "../../ImageTransition";
import { isNull } from "../../../utils/utility";

interface Props {
  index: number;
  typeText: string;
  type: any;
  setType: Dispatch<SetStateAction<any>>;
  w: any;
}
const SeedInput: FunctionComponent<Props> = ({
  index,
  typeText,
  type,
  setType,
  w,
}) => {
  function onChangeType(e: any, index: any) {
    if (e.target.value.length < 100) {
      const ar = [...type];
      ar[index] = e.target.value;
      setType(ar);
    }
  }

  return (
    <Box w={w}>
      <Flex justify="space-between">
        <Text mb="20px">{typeText}</Text>
      </Flex>
      <InputTransition
        unitid={"projectamount" + `${typeText}${index}`}
        selected={isNull(type[index]) ? false : true}
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
            type="number"
            h="55px"
            placeholder="0"
            rounded="md"
            value={type[index]}
            onChange={(e) => onChangeType(e, index)}
          />
        </InputGroup>
      </InputTransition>
    </Box>
  );
};
export default SeedInput;
