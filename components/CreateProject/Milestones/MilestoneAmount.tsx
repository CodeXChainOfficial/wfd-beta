import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import {
  Box,
  Flex,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  Select,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import { InputTransition } from "../../ImageTransition";
import { errorOption } from "../../../config/Constants";
import { isNull } from "../../../utils/Util";

interface Props {
  index: number;
  milestoneAmount: any;
  setMilestoneAmount: Dispatch<SetStateAction<any>>;
}
const MilestoneAmount: FunctionComponent<Props> = ({
  index,
  milestoneAmount,
  setMilestoneAmount,
}) => {
  function onChangeMilestoneAmount(e: any, index: number) {
    if (
      e.target.value != "" &&
      e.target.value != parseInt(e.target.value).toString()
    ) {
      toast("Please input number only", errorOption);
      return;
    }

    const ar = [...milestoneAmount];
    ar[index] = e.target.value;
    setMilestoneAmount(ar);
  }

  return (
    <Box
      ml={{ base: "0px", md: "20px" }}
      mt={{ base: "40px", md: "0px" }}
      w="100%"
    >
      <Flex justify="space-between">
        <Text mb="20px">Amount Required</Text>
      </Flex>
      <InputTransition
        unitid={`milestoneamount${index}`}
        selected={isNull(milestoneAmount[index]) ? false : true}
        width="100%"
        height="55px"
        rounded="md"
      >
        <InputGroup
          size="sm"
          style={{ background: "rgba(255, 255, 255, 0.05" }}
        >
          <Input
            style={{ border: "0", background: "transparent" }}
            type="text"
            h="55px"
            focusBorderColor="purple.800"
            rounded="md"
            value={milestoneAmount[index]}
            onChange={(e) => {
              onChangeMilestoneAmount(e, index);
            }}
          />
          <InputRightElement
            style={{ border: "0", background: "transparent" }}
            w="125px"
            h="55px"
            pointerEvents="none"
            // align="center"
            color="blue.200"
          />
          <Select
            id="peg"
            style={{ border: "0", background: "transparent" }}
            h="55px"
            w="140px"
            name="peg"
            size="sm"
            rounded="md"
            fontSize="16px"
          >
            <option style={{ backgroundColor: "#1B0645" }}>($)UST</option>
          </Select>
        </InputGroup>
      </InputTransition>
    </Box>
  );
};
export default MilestoneAmount;
