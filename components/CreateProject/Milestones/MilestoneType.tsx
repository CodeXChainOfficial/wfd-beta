import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import {
  Box,
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";

import { InputTransition } from "../../ImageTransition";
import { isNull } from "../../Util";

interface Props {
  index: number;
  milestoneType: any;
  setMilestoneType: Dispatch<SetStateAction<any>>;
}
const MilestoneType: FunctionComponent<Props> = ({
  index,
  milestoneType,
  setMilestoneType,
}) => {
  function onChangeMilestoneType(e: any, index: number) {
    const ar = [...milestoneType];
    ar[index] = e.target.value;
    setMilestoneType(ar);
  }

  return (
    <Box w="100%">
      <Flex justify="space-between">
        <Text mb="20px">Milestone Type</Text>
      </Flex>
      <InputTransition
        unitid={`milestonetype${index}`}
        width="100%"
        height="55px"
        rounded="md"
        selected={isNull(milestoneType[index]) ? false : true}
      >
        <InputGroup
          size="sm"
          style={{ background: "rgba(255, 255, 255, 0.05)" }}
        >
          <InputLeftElement
            style={{ background: "transparent", border: "0" }}
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          />
          <Input
            style={{ background: "transparent", border: "0" }}
            type="email"
            h="55px"
            focusBorderColor="purple.800"
            rounded="md"
            value={milestoneType[index]}
            onChange={(e) => onChangeMilestoneType(e, index)}
          />
        </InputGroup>
      </InputTransition>
    </Box>
  );
};
export default MilestoneType;
