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
  Needs: any;
  setNeeds: Dispatch<SetStateAction<any>>;
}
const ApplySeedraising: FunctionComponent<Props> = ({ Needs, setNeeds }) => {
  function onNewNeeds() {
    const ar = [...Needs];
    ar.push("");
    setNeeds(ar);
  }
  function onCancelNeeds() {
    if (Needs.length <= 1) return;
    const ar = [...Needs];
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
      {Needs.map((item: any, index: number) => {
        return (
          <Flex direction="column" key={index}>
            <Text
              fontSize={{ base: "22px", md: "25px" }}
              color="#4790f5"
              mb="10px"
              align={"center"}
            >
              Incubation Needs {index + 1}
            </Text>
            <NeedsInput
              index={index}
              typeText="Project Incubation Needs"
              prjIncuNeeds={Needs}
              setPrjIncuNeeds={setNeeds}
            />
            {/* -----------------submit----------------- */}
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
          <Box color="white">Add Incubation Needs</Box>
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
          <Box color="white">Remove Needs {Needs.length}</Box>
        </ButtonBackTransition>
      </Flex>
    </>
  );
};
export default ApplySeedraising;
