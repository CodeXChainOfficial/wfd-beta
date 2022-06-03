import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Flex, Text, Input, Box } from "@chakra-ui/react";

import { InputTransition } from "../ImageTransition";

interface Props {
  typeText: string;
  unlock: string;
  setUnlock: Dispatch<SetStateAction<string>>;
  month: string;
  setMonth: Dispatch<SetStateAction<string>>;
  after: string;
  setAfter: Dispatch<SetStateAction<string>>;
  style: any;
}
const VestingInput: FunctionComponent<Props> = ({
  typeText,
  unlock,
  setUnlock,
  month,
  setMonth,
  after,
  setAfter,
  style,
}) => {
  return (
    <Box mt="40px" style={style}>
      <Flex direction="row">
        <InputTransition
          unitid={"inputtransitionunlock" + typeText}
          selected={unlock == "" ? false : true}
          width="30px"
          height="30px"
          rounded="md"
        >
          <Input
            style={{ border: "0", background: "transparent" }}
            type="text"
            h="30px"
            rounded="md"
            value={unlock}
            padding="4px"
            onChange={(e) => setUnlock(e.target.value)}
          />
        </InputTransition>
        % unlock at TGE, then monthly unlock over&nbsp;&nbsp;
        <InputTransition
          unitid={"inputtransitionmonth" + typeText}
          selected={month == "" ? false : true}
          width="30px"
          height="30px"
          rounded="md"
        >
          <Input
            style={{ border: "0", background: "transparent" }}
            type="text"
            h="30px"
            rounded="md"
            value={month}
            padding="4px"
            onChange={(e) => setMonth(e.target.value)}
          />
        </InputTransition>
        month, starting from &nbsp;
        <InputTransition
          unitid={"inputtransitionafter" + typeText}
          selected={after == "" ? false : true}
          width="30px"
          height="30px"
          rounded="md"
        >
          <Input
            style={{ border: "0", background: "transparent" }}
            type="text"
            h="30px"
            rounded="md"
            value={after}
            padding="4px"
            onChange={(e) => setAfter(e.target.value)}
          />
        </InputTransition>
        month after TGE
      </Flex>
    </Box>
  );
};
export default VestingInput;
