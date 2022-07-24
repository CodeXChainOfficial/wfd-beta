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
import { useState, useEffect } from "react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { ArrowRightIcon, CheckIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaUpload } from "react-icons/fa";
import { InputTransition } from "../../ImageTransition";
import ApplyIncubation from "./ApplyIncubation";
import ApplyFundraising from "./ApplySeeddraising";
import ApplyIDO from "./ApplyIDO";

export default function ApplyOpt() {
  const [FundPhase, setFundPhase] = useState([""]);
  const [Fundprice, setFundprice] = useState([""]);
  const [Fundamt, setFundamt] = useState([""]);
  const [Fundvesting, setFundvesting] = useState([""]);
  
  const [prjNeed, setPrjNeed] = useState([""]);

  const [opt, setOpt] = useState("Incubation");
  function DynamicOpt() {
    switch (opt) {
      case "Incubation":
        return <ApplyIncubation Needs={prjNeed} setNeeds={setPrjNeed} />;
      case "Fundraising":
        return (
          <ApplyFundraising
            SeedPhase={FundPhase}
            setSeedPhase={setFundPhase}
            SeedAmt={Fundamt}
            setSeedAmt={setFundamt}
            Seedvesting={Fundvesting}
            setSeedvesting={setFundvesting}
            Seedprice={Fundprice}
            setSeedprice={setFundprice}
          />
        );

      case "IDO":
        return <ApplyIDO />;
    }
    return (
      <Box>
        <Text>Not found</Text>
      </Box>
    );
  }

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
          onChange={(e: { target: { value: string } }) => {
            console.log(e.target.value);
            setOpt(e.target.value);
          }}
        >
          <option style={{ backgroundColor: "#1B0645" }}>Incubation</option>
          <option style={{ backgroundColor: "#1B0645" }}>Fundraising</option>
          <option style={{ backgroundColor: "#1B0645" }}>IDO</option>
        </Select>
      </InputTransition>
      <DynamicOpt />
    </Box>
  );
}
