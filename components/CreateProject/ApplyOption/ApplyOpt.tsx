import {
  Stack,
  StyleProps,
  Text,
  VStack,
  Container,
  Box,
  Flex,
  Select,
} from "@chakra-ui/react";
import {
  useState,
  useEffect,
  FunctionComponent,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";

import { InputTransition } from "../../ImageTransition";
import ApplyIncubation from "./ApplyIncubation";
import ApplyFundraising from "./ApplySeeddraising";
import ApplyIDO from "./ApplyIDO";

interface Props {
  fundPhase: string[];
  setFundPhase: Dispatch<SetStateAction<string[]>>;
  fundPrice: string[];
  setFundPrice: Dispatch<SetStateAction<string[]>>;
  fundAmount: string[];
  setFundAmount: Dispatch<SetStateAction<string[]>>;
  fundVesting: string[];
  setFundVesting: Dispatch<SetStateAction<string[]>>;
  prjNeed: string[];
  setPrjNeed: Dispatch<SetStateAction<string[]>>;
  IDOAmount: string;
  setIDOAmount: Dispatch<SetStateAction<string>>;
  IDOPrice: string;
  setIDOPrice: Dispatch<SetStateAction<string>>;
  IDOPercent: string;
  setIDOPercent: Dispatch<SetStateAction<string>>;
  IDOVesting: string;
  setIDOVesting: Dispatch<SetStateAction<string>>;
}

const ApplyOpt: FunctionComponent<Props> = ({
  fundPhase,
  setFundPhase,
  fundPrice,
  setFundPrice,
  fundAmount,
  setFundAmount,
  fundVesting,
  setFundVesting,
  prjNeed,
  setPrjNeed,
  IDOAmount,
  setIDOAmount,
  IDOPrice,
  setIDOPrice,
  IDOPercent,
  setIDOPercent,
  IDOVesting,
  setIDOVesting,
}) => {
  const [opt, setOpt] = useState("Incubation");

  return (
    <Box mt="40px" w="100%">
      <Flex justify="space-between">
        <Text mb="20px">Apply Options</Text>
      </Flex>
      <InputTransition
        unitid="projectapplyopt"
        width="50%"
        height="55px"
        rounded="md"
        background="rgba(255, 255, 255, 0.05)"
      >
        <Select
          id="prjchain"
          style={{ background: "parent", border: "0" }}
          h="55px"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e) => setOpt(e.target.value)}
        >
          <option style={{ backgroundColor: "#1B0645" }}>Incubation</option>
          <option style={{ backgroundColor: "#1B0645" }}>Fundraising</option>
          <option style={{ backgroundColor: "#1B0645" }}>IDO</option>
        </Select>
      </InputTransition>
      {opt == "Incubation" && (
        <ApplyIncubation needs={prjNeed} setNeeds={setPrjNeed} />
      )}
      {opt == "Fundraising" && (
        <ApplyFundraising
          seedPhase={fundPhase}
          setSeedPhase={setFundPhase}
          seedAmount={fundAmount}
          setSeedAmount={setFundAmount}
          seedVesting={fundVesting}
          setSeedvesting={setFundVesting}
          seedPrice={fundPrice}
          setSeedPrice={setFundPrice}
        />
      )}
      {opt == "IDO" && (
        <ApplyIDO
          IDOAmount={IDOAmount}
          setIDOAmount={setIDOAmount}
          IDOPrice={IDOPrice}
          setIDOPrice={setIDOPrice}
          IDOPercent={IDOPercent}
          setIDOPercent={setIDOPercent}
          IDOVesting={IDOVesting}
          setIDOVesting={setIDOVesting}
        />
      )}
    </Box>
  );
};

export default ApplyOpt;
