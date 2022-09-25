import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Flex, Text, Box, Textarea } from "@chakra-ui/react";

import { InputTransition } from "../ImageTransition";

interface Props {
  typeText: string;
  type: any;
  setType: Dispatch<SetStateAction<any>>;
}
const CustomTextarea: FunctionComponent<Props> = ({
  typeText,
  type,
  setType,
}) => {
  function onChangeType(e: any) {
    if (e.target.value.length < 3000) setType(e.target.value);
  }

  return (
    <Box mt="40px">
      <Flex justify="space-between">
        <Text mb="20px">{typeText}</Text>
        <Text fontSize="15px" opacity="0.5">
          {type?.length}/3000 words
        </Text>
      </Flex>
        <Textarea
          style={{ border: " 1.5px solid rgba(255, 255, 255, 0.2)", background: "rgba(0, 0, 0, 0.25)" }}
          value={type}
          onChange={(e) => {
            onChangeType(e);
          }}
          placeholder="Your Project Description"
          rounded="md"
          size="sm"
          h="175px"
        />
    </Box>
  );
};
export default CustomTextarea;
