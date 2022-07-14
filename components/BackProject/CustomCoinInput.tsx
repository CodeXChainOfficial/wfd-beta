import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import {
  Flex,
  Text,
  Select,
  InputGroup,
  InputRightElement,
  Input,
  Box,
  Center,
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
        <Center>
            <Flex align={'center'}>
                <Text 
                mb="20px" 
                textAlign={'center'}
                fontSize={{ base: "14px", sm: "14px", md: "16px", lg: "16px" }}
                >
                    {typeText}
                </Text>
            </Flex>
      </Center>
      <InputTransition
        unitid={"projectamount" + typeText}
        selected={type == "" ? false : true}
        width="100%"
        height="55px"
        rounded="md"
      >
        <InputGroup
          size="sm"
        >
          <Input
            style={{ border: "0"}}
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
            style={{ border: "0"}}
            w="125px"
            h="55px"
            pointerEvents="none"
            color="blue.200"
          />
          <Select
            id={"peg" + typeText}
            style={{ border: "0"}}
            h="55px"
            w="140px"
            rounded="md"
            fontSize="12px"
            value="($)USD"
          >
            <option style={{ backgroundColor: "#1B0645" }}>($)USDT</option>
            <option style={{ backgroundColor: "#1B0645" }}>($)USDC</option>
            <option style={{ backgroundColor: "#1B0645" }}>($)ATOM</option>
            <option style={{ backgroundColor: "#1B0645" }}>($)JUNO</option>
          </Select>
        </InputGroup>
      </InputTransition>
    </Box>
  );
};
export default CustomCoinInput;
