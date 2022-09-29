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
  type: string;
  setType: any;
  coin: string;
  setCoin?: any;
  w?: any;
  readOnly?: boolean;
}
const CustomCoinInput: FunctionComponent<Props> = ({
  typeText,
  type,
  setType,
  coin,
  setCoin,
  w,
  readOnly,
}) => {
  return (
    <Box w={w}>
      <Center>
        <Flex align={"center"}>
          <Text
            mb="20px"
            textAlign={"center"}
            fontSize={{ base: "14px", sm: "14px", md: "16px", lg: "16px" }}
          >
            {typeText}
          </Text>
        </Flex>
      </Center>

        <InputGroup size="sm" alignItems="center" style={{
            border: "1.5px solid rgba(255, 255, 255, 0.2)",
            background: " rgba(0, 0, 0, 0.25)",
          }}
          
          rounded="md">
          <Input
           style={{ background: "transparent" }}
            border="0px"
            type="number"
            width="100%"
            height="55px"
            placeholder="Numbers only"
            // focusBorderColor="purple.800"
            _focusVisible={{ border: "0px" }}
            rounded="md"
            value={type}
            onChange={(e) => setType(e.target.value)}
            isReadOnly={readOnly}
          />
          {/* <InputRightElement
            style={{ border: "0" }}
            w="125px"
            h="55px"
            pointerEvents="none"
            color="blue.200"
          /> */}
          <Select
            id={"peg" + typeText}
            style={{ border: "0" }}
            h="55px"
            w="140px"
            rounded="md"
            _focusVisible={{ border: "0px" }}
            fontSize="12px"
            value={coin}
            onChange={(e) => setCoin(e.target.value)}
            isDisabled={readOnly}
          >
            <option style={{ backgroundColor: "#1B0645" }}>USDT</option>
            <option style={{ backgroundColor: "#1B0645" }}>USDC</option>
            <option style={{ backgroundColor: "#1B0645" }}>BUSD</option>
          </Select>
        </InputGroup>
    </Box>
  );
};
export default CustomCoinInput;
