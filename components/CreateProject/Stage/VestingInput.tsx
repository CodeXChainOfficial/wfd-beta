import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Flex, Text, Input, Box, Stack, HStack } from "@chakra-ui/react";

import { InputTransition } from "../../ImageTransition";
import { isNull } from "../../../utils/utility";

interface Props {
  typeText: string;
  index: number;
  soon: any;
  setSoon: Dispatch<SetStateAction<any>>;
  period: any;
  setPeriod: Dispatch<SetStateAction<any>>;
  after: any;
  setAfter: Dispatch<SetStateAction<any>>;
}
const VestingInput: FunctionComponent<Props> = ({
  typeText,
  index,
  soon,
  setSoon,
  period,
  setPeriod,
  after,
  setAfter,
}) => {
  function onChangeSoon(e: any) {
    if (e.target.value.length < 5000) {
      const ar = [...soon];
      ar[index] = e.target.value;
      setSoon(ar);
    }
  }
  function onChangePeriod(e: any) {
    if (e.target.value.length < 5000) {
      const ar = [...period];
      ar[index] = e.target.value;
      setPeriod(ar);
    }
  }
  function onChangeAfter(e: any) {
    if (e.target.value.length < 5000) {
      const ar = [...after];
      ar[index] = e.target.value;
      setAfter(ar);
    }
  }
  return (
    <Box mt="40px" fontSize={{ base: "12px", md: "13px", lg: "14px" }}>
      <Stack direction={{ base: "column", md: "column", lg: "row" }}>
        <HStack>
          <InputTransition
            unitid={"inputtransitionunlock" + typeText}
            selected={isNull(soon[index]) ? false : true}
            width="30px"
            height="30px"
            rounded="md"
          >
            <Input
              style={{ border: "0", background: "transparent" }}
              type="text"
              h="30px"
              rounded="md"
              value={soon[index]}
              padding="4px"
              onChange={(e) => onChangeSoon(e)}
            />
          </InputTransition>
          <Text style={{ margin: "0px" }}>
            % unlocked at TGE, then unlocked monthly over&nbsp;
          </Text>
        </HStack>
        <HStack>
          <InputTransition
            unitid={"inputtransitionmonth" + typeText}
            selected={isNull(period[index]) ? false : true}
            width="30px"
            height="30px"
            rounded="md"
          >
            <Input
              style={{ border: "0", background: "transparent" }}
              type="text"
              h="30px"
              rounded="md"
              value={period[index]}
              padding="4px"
              onChange={(e) => onChangePeriod(e)}
            />
          </InputTransition>
          <Text m="0px">months, starting from &nbsp;</Text>
        </HStack>
        <HStack>
          <InputTransition
            unitid={"inputtransitionafter" + typeText}
            selected={isNull(after[index]) ? false : true}
            width="30px"
            height="30px"
            rounded="md"
          >
            <Input
              style={{ border: "0", background: "transparent" }}
              type="text"
              h="30px"
              rounded="md"
              value={after[index]}
              padding="4px"
              onChange={(e) => onChangeAfter(e)}
            />
          </InputTransition>
          <Text m="0px">months after TGE</Text>
        </HStack>
      </Stack>
    </Box>
  );
};
export default VestingInput;
