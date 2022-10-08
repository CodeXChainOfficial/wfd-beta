import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Box, Flex, Text, Textarea, Input } from "@chakra-ui/react";

import { InputTransition } from "../../ImageTransition";
import { isNull } from "../../../utils/utility";

interface Props {
  typeText: string;
  index: number;
  type: string[];
  setType: Dispatch<SetStateAction<string[]>>;
}
const SeedraisePhase: FunctionComponent<Props> = ({
  typeText,
  index,
  type,
  setType,
}) => {
  function onChangeType(e: any, index: number) {
    if (e.target.value.length < 5000) {
      const ar = [...type];
      ar[index] = e.target.value;
      setType(ar);
    }
  }

  return (
    <Box mt="10px">
      <Flex justify="space-between">
        <Text mb="20px">{typeText}</Text>
        <Text fontSize="15px" opacity="0.5">
          {type[index]?.length}/200 words
        </Text>
      </Flex>
        <Textarea
           style={{ border: " 1.5px solid rgba(255, 255, 255, 0.2)", background: "rgba(255, 255, 255, 0.05)" }}
          value={type[index]}
          placeholder={"Fundraise Description"}
          _focusVisible={{ border: "0" }}
          onChange={(e) => onChangeType(e, index)}
          size="sm"
          rounded="md"
          h="75px"
        />
    </Box>
  );
};
export default SeedraisePhase;
