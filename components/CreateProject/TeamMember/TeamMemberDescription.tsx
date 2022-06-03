import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Box, Flex, Text, Textarea, Input } from "@chakra-ui/react";

import { InputTransition } from "../../ImageTransition";
import { isNull } from "../../Util";

interface Props {
  typeText: string;
  index: number;
  type: any;
  setType: Dispatch<SetStateAction<any>>;
}
const TeamMemberDescription: FunctionComponent<Props> = ({
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
          {type[index]?.length}/5000 words
        </Text>
      </Flex>
      <InputTransition
        unitid={`typeText${index}`}
        selected={isNull(type[index]) ? false : true}
        width="100%"
        height="175px"
        rounded="md"
        style={{ background: "transparent", border: "0" }}
      >
        <Textarea
          style={{ background: "transparent", border: "0" }}
          value={type[index]}
          onChange={(e) => onChangeType(e, index)}
          size="sm"
          rounded="md"
          h="175px"
        />
      </InputTransition>
    </Box>
  );
};
export default TeamMemberDescription;
