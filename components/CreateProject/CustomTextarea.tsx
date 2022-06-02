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
      <InputTransition
        unitid={"projectdescription" + typeText}
        selected={type == "" ? false : true}
        width="100%"
        height="175px"
        rounded="md"
        style={{ background: "transparent", border: "0" }}
      >
        <Textarea
          style={{ background: "transparent", border: "0" }}
          value={type}
          onChange={(e) => {
            onChangeType(e);
          }}
          rounded="md"
          size="sm"
          h="175px"
        />
      </InputTransition>
    </Box>
  );
};
export default CustomTextarea;
