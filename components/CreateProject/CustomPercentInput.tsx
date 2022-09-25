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

import { InputTransition } from "../ImageTransition";

interface Props {
  typeText: string;
  type: any;
  setType: Dispatch<SetStateAction<any>>;
  w: any;
}
const CustomPercentInput: FunctionComponent<Props> = ({
  typeText,
  type,
  setType,
  w,
}) => {
  function onChangeAmount(e: any) {
    // if (
    //   e.target.value != '' &&
    //   e.target.value != parseInt(e.target.value).toString()
    // ) {
    //   notificationRef?.current.showNotification('Please input number only', 'error', 4000)
    //   return
    // }
    setType(e.target.value);
  }

  return (
    <Box w={w}>
      <Flex justify="space-between">
        <Text mb="20px">{typeText}</Text>
      </Flex>
      <InputGroup
        size="sm"
        style={{
          border: "1.5px solid rgba(255, 255, 255, 0.2)",
          background: "rgba(255, 255, 255, 0.05)",
        }}
      >
        <Input
          style={{ border: "0", background: "transparent" }}
          type="text"
          h="55px"
          placeholder="Numbers only"
          focusBorderColor="purple.800"
          rounded="md"
          value={type}
          onChange={(e) => {
            onChangeAmount(e);
          }}
        />
        <InputRightElement
          style={{ border: "0", background: "transparent" }}
          w="50px"
          h="55px"
          pointerEvents="none"
          // align="center"
          color="blue.200"
          // children="%"
        />
      </InputGroup>
    </Box>
  );
};
export default CustomPercentInput;
