import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Box, Flex, Text, InputGroup, Input } from "@chakra-ui/react";

import { InputTransition } from "../../ImageTransition";
import { isNull } from "../../../utils/utility";

interface Props {
  index: number;
  typeText: string;
  type: any;
  setType: Dispatch<SetStateAction<any>>;
  w: any;
}
const TeamMemberInput: FunctionComponent<Props> = ({
  index,
  typeText,
  type,
  setType,
  w,
}) => {
  function onChangeType(e: any, index: any) {
    if (e.target.value.length < 100) {
      const ar = [...type];
      ar[index] = e.target.value;
      setType(ar);
    }
  }

  return (
    <Box w={w}>
      <Flex justify="space-between">
        <Text mb="20px">{typeText}</Text>
        <Text fontSize="15px" opacity="0.5">
          {type[index]?.length}/100 words
        </Text>
      </Flex>
        <InputGroup
          style={{ background: "rgba(255, 255, 255, 0.05)" }}
          size="sm"
          border="0px"
        >
          <Input
            style={{ border: "1.5px solid rgba(255, 255, 255, 0.2)", background: "transparent" }}
            type="text"
            h="55px"
            placeholder="Type here"
            rounded="md"
            value={type[index]}
            onChange={(e) => onChangeType(e, index)}
          />
        </InputGroup>
    </Box>
  );
};
export default TeamMemberInput;
