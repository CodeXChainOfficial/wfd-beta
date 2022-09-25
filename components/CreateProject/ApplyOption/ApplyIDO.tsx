import React, {
  useEffect,
  useState,
  FunctionComponent,
  Dispatch,
  SetStateAction,
} from "react";
import { Flex, Stack } from "@chakra-ui/react";

import CustomNumber from "./CustomNumber";

interface Props {
  IDOAmount: string;
  setIDOAmount: Dispatch<SetStateAction<string>>;
  IDOPrice: string;
  setIDOPrice: Dispatch<SetStateAction<string>>;
  IDOPercent: string;
  setIDOPercent: Dispatch<SetStateAction<string>>;
  IDOVesting: string;
  setIDOVesting: Dispatch<SetStateAction<string>>;
}
const ApplyIDO: FunctionComponent<Props> = ({
  IDOAmount,
  setIDOAmount,
  IDOPrice,
  setIDOPrice,
  IDOPercent,
  setIDOPercent,
  IDOVesting,
  setIDOVesting,
}) => {
  return (
    <Flex direction={"column"} 
    borderBottom={"1px solid rgba(255, 255, 255, 0.3)"}
    paddingBottom={12}>
      <Stack
        mt="30px"
        direction={{ base: "column", md: "row", lg: "row" }}
        spacing="30px"
      >
        
        <CustomNumber
          typeText="IDO Amount"
          type={IDOAmount}
          setType={setIDOAmount}
          w={{ base: "100%", md: "50%", lg: "50%" }}
        />
        <CustomNumber
          typeText="IDO Price"
          type={IDOPrice}
          setType={setIDOPrice}
          w={{ base: "100%", md: "50%", lg: "50%" }}
        />
      </Stack>
      <Stack
        mt="30px"
        direction={{ base: "column", md: "row", lg: "row" }}
        spacing="30px"
      >
        <CustomNumber
          typeText="% IDO Allocation"
          type={IDOPercent}
          setType={setIDOPercent}
          w={{ base: "100%", md: "50%", lg: "50%" }}
        />
        <CustomNumber
          typeText="Vesting Period in Months"
          type={IDOVesting}
          setType={setIDOVesting}
          w={{ base: "100%", md: "50%", lg: "50%" }}
        />
      </Stack>
    </Flex>
  );
};

export default ApplyIDO;
