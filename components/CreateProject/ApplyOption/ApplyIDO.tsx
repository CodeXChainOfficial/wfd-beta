import React, { useEffect, useState } from "react";
import {
  Flex,
  Text,
  Select,
  Link,
  Image,
  Stack,
  Icon,
  Box,
} from "@chakra-ui/react";
import { ButtonBackTransition, ImageTransition } from "../../ImageTransition";
import { MdArrowDropDown } from "react-icons/md";
import CustomNumber from "./CustomNumber";

export default function ApplyIDO() {
  const [IDOamt, setIDOamt] = useState("");
  const [IDOprice, setIDOprice] = useState("");
  const [IDOpercent, setIDOpercent] = useState("");
  const [IDOvesting, setIDOvesting] = useState("");

  return (
    <Flex direction={"column"}>
      <Stack
        mt="30px"
        direction={{ base: "column", md: "row", lg: "row" }}
        spacing="30px"
      >
        <CustomNumber
          typeText="IDO Amount"
          type={IDOamt}
          setType={setIDOamt}
          w={{ base: "100%", md: "50%", lg: "50%" }}
        />
        <CustomNumber
          typeText="IDO Price"
          type={IDOprice}
          setType={setIDOprice}
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
          type={IDOpercent}
          setType={setIDOpercent}
          w={{ base: "100%", md: "50%", lg: "50%" }}
        />
        <CustomNumber
          typeText="Vesting Period in Months"
          type={IDOvesting}
          setType={setIDOvesting}
          w={{ base: "100%", md: "50%", lg: "50%" }}
        />
      </Stack>
    </Flex>
  );
}
