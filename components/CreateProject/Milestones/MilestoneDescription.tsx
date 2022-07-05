import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Box, Flex, Text, Textarea, Input } from "@chakra-ui/react";

import { InputTransition } from "../../ImageTransition";
import { isNull } from "../../../utils/utility";

interface Props {
  index: number;
  milestoneDescription: any;
  setMilestoneDescription: Dispatch<SetStateAction<any>>;
}
const MilestoneDescription: FunctionComponent<Props> = ({
  index,
  milestoneDescription,
  setMilestoneDescription,
}) => {
  function onChangeMilestoneDescription(e: any, index: number) {
    if (e.target.value.length < 5000) {
      const ar = [...milestoneDescription];
      ar[index] = e.target.value;
      setMilestoneDescription(ar);
    }
  }

  return (
    <Box mt="40px">
      <Flex justify="space-between">
        <Text mb="20px">Milestone Description</Text>
        <Text fontSize="15px" opacity="0.5">
          {milestoneDescription[index]?.length}/5000 words
        </Text>
      </Flex>
      <InputTransition
        unitid={`milestonedescription${index}`}
        selected={isNull(milestoneDescription[index]) ? false : true}
        width="100%"
        height="175px"
        rounded="md"
        style={{ background: "transparent", border: "0" }}
      >
        <Textarea
          style={{ background: "transparent", border: "0" }}
          value={milestoneDescription[index]}
          onChange={(e) => onChangeMilestoneDescription(e, index)}
          size="sm"
          rounded="md"
          h="175px"
        />
      </InputTransition>
    </Box>
  );
};
export default MilestoneDescription;
