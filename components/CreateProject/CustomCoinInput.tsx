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
const CustomCoinInput: FunctionComponent<Props> = ({
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
      <InputTransition
        unitid={"projectamount" + typeText}
        selected={type == "" ? false : true}
        width="100%"
        height="55px"
        rounded="md"
      >
        <InputGroup
          size="sm"
          style={{ background: "rgba(255, 255, 255, 0.05" }}
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
            w="125px"
            h="55px"
            pointerEvents="none"
            color="blue.200"
          />
          <Select
            id={"peg" + typeText}
            style={{ border: "0", background: "transparent" }}
            h="55px"
            w="140px"
            rounded="md"
            fontSize="12px"
            value="($)USD"
          >
            <option style={{ backgroundColor: "#1B0645" }}>($)USD</option>
          </Select>
        </InputGroup>
      </InputTransition>
    </Box>
  );
};
export default CustomCoinInput;
