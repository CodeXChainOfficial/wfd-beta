import React, {
  FunctionComponent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { Flex, Text, Box, Stack } from "@chakra-ui/react";

import { ImageTransition, ButtonBackTransition } from "../../ImageTransition";

import NeedsInput from "./ApplyIncubationOpt";

interface Props {
  needs: string[];
  setNeeds: Dispatch<SetStateAction<string[]>>;
}
const ApplySeedraising: FunctionComponent<Props> = ({ needs, setNeeds }) => {
  function onNewNeeds() {
    const ar = [...needs];
    ar.push("");
    setNeeds(ar);
  }
  function onCancelNeeds() {
    if (needs.length <= 1) return;
    const ar = [...needs];
    ar.pop();
    setNeeds(ar);
  }
  return (
    <>
      <Flex
        mt="50px"
        justify="center"
        style={{ fontFamily: "PilatExtended-Bold" }}
      ></Flex>
      {needs.map((item: any, index: number) => {
        return (
          <Flex
            direction="column"
            key={index}
            background={"rgba(12, 2, 24, 0.5)"}
            padding={12}
            rounded={4}
            mt={4}
          >
            <Text
              fontSize={{ base: "14px", md: "18px" }}
              fontFamily={"PilatExtended-Bold"}
              color="#ffff"
              mb="10px"
              align={"left"}
            >
              Incubation needs {index + 1}
            </Text>
            <NeedsInput
              index={index}
              typeText="Project Incubation needs"
              prjIncuNeeds={needs}
              setPrjIncuNeeds={setNeeds}
            />
          </Flex>
        );
      })}
      <Flex
        w="100%"
        mt="30px"
        pt="30px"
        pb="30px"
        mb="50px"
        justify="center"
        borderBottom={"1px solid rgba(255, 255, 255, 0.3)"}
        fontSize={{ base: "12px", md: "15px", lg: "16px" }}
      >
        <ButtonBackTransition
          unitid="AddNewPhase"
          selected={false}
          width="260px"
          height="45px"
          rounded="33px"
          onClick={onNewNeeds}
        >
          <Box color="white">Add Incubation needs</Box>
        </ButtonBackTransition>
        <ButtonBackTransition
          unitid="CancelPhase"
          selected={false}
          width="300px"
          height="45px"
          rounded="33px"
          ml={{ base: "10px", md: "40px" }}
          onClick={onCancelNeeds}
        >
          <Box color="white">Remove needs {needs.length}</Box>
        </ButtonBackTransition>
      </Flex>
    </>
  );
};
export default ApplySeedraising;
