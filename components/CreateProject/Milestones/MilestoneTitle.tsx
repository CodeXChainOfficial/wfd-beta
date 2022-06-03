import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Box, Flex, Text, InputGroup, Input } from "@chakra-ui/react";

import { InputTransition } from "../../ImageTransition";
import { isNull } from "../../Util";

interface Props {
  index: number;
  milestoneTitle: any;
  setMilestoneTitle: Dispatch<SetStateAction<any>>;
}
const MilestoneTitle: FunctionComponent<Props> = ({
  index,
  milestoneTitle,
  setMilestoneTitle,
}) => {
  function onChangeMilestoneTitle(e: any, index: number) {
    if (e.target.value.length < 100) {
      const ar = [...milestoneTitle];
      ar[index] = e.target.value;
      setMilestoneTitle(ar);
    }
  }

  return (
    <Box mt={{ base: "40px", md: "0px" }} w="100%">
      <Flex justify="space-between">
        <Text mb="20px">Milestone Title</Text>
        <Text fontSize="15px" opacity="0.5">
          {milestoneTitle[index]?.length}/100 words
        </Text>
      </Flex>
      <InputTransition
        unitid="projectname"
        selected={isNull(milestoneTitle[index]) ? false : true}
        width="100%"
        height="55px"
        rounded="md"
      >
        <InputGroup
          style={{ background: "rgba(255, 255, 255, 0.05)" }}
          size="sm"
          border="0px"
        >
          <Input
            style={{ border: "0", background: "transparent" }}
            type="text"
            h="55px"
            rounded="md"
            value={milestoneTitle[index]}
            onChange={(e) => onChangeMilestoneTitle(e, index)}
          />
        </InputGroup>
      </InputTransition>
    </Box>
  );
};
export default MilestoneTitle;
