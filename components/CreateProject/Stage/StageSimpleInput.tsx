import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import {
  Flex,
  Text,
  Select,
  InputGroup,
  InputRightElement,
  Input,
  Box,
} from "@chakra-ui/react";

import { InputTransition } from "../../ImageTransition";
import { isNull } from "../../../utils/Util";

interface Props {
  index: number;
  typeText: string;
  type: any;
  setType: Dispatch<SetStateAction<any>>;
  w: any;
}
const StageSimpleInput: FunctionComponent<Props> = ({
  index,
  typeText,
  type,
  setType,
  w,
}) => {
  function onChangeAmount(e: any) {
    if (e.target.value.length < 5000) {
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
        unitid={"projectamount" + typeText}
        selected={isNull(type[index]) ? false : true}
        width="100%"
        height="55px"
        rounded="md"
      >
        <Input
          style={{ border: "0", background: "transparent" }}
          type="text"
          h="55px"
          placeholder="Numbers only"
          focusBorderColor="purple.800"
          rounded="md"
          value={type[index]}
          size="sm"
          onChange={(e) => {
            onChangeAmount(e);
          }}
        />
      </InputTransition>
    </Box>
  );
};
export default StageSimpleInput;
