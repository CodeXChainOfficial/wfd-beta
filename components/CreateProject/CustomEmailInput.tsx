import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import {
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Box,
} from "@chakra-ui/react";

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

      <InputGroup
        size="sm"
        style={{
          border: "1.5px solid rgba(255, 255, 255, 0.2)",
          background: "rgba(255, 255, 255, 0.05)",
        }}
        rounded="md"
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
    </Box>
  );
};

export default CustomEmailInput;
