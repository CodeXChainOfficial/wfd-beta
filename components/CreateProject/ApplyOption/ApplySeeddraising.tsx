import React, {
  FunctionComponent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { Flex, Text, Box, Stack } from "@chakra-ui/react";

import { ImageTransition, ButtonBackTransition } from "../../ImageTransition";

import SeedraisePhase from "./SeedraisePhase";
import SeedInput from "./SeedInput";

interface Props {
  seedPhase: string[];
  setSeedPhase: Dispatch<SetStateAction<string[]>>;
  seedPrice: string[];
  setSeedPrice: Dispatch<SetStateAction<string[]>>;
  seedVesting: string[];
  setSeedvesting: Dispatch<SetStateAction<string[]>>;
  seedAmount: string[];
  setSeedAmount: Dispatch<SetStateAction<string[]>>;
}
const ApplySeedraising: FunctionComponent<Props> = ({
  seedPhase,
  setSeedPhase,
  seedPrice,
  setSeedPrice,
  seedVesting,
  setSeedvesting,
  seedAmount,
  setSeedAmount,
}) => {
  function onNewSeedPhase() {
    const ar = [...seedPhase];
    ar.push("");
    setSeedPhase(ar);
  }
  function onCancelSeedPhase() {
    if (seedPhase.length <= 1) return;
    const ar = [...seedPhase];
    ar.pop();
    setSeedPhase(ar);
  }
  return (
    <>
      <Flex
        mt="50px"
        justify="center"
        style={{ fontFamily: "PilatExtended-Bold" }}
      ></Flex>
      {seedPhase.map((item: any, index: number) => {
        return (
          <Flex direction="column" key={index}>
            <Text
              fontSize={{ base: "22px", md: "25px" }}
              color="#4790f5"
              mb="10px"
              align={"center"}
            >
              Seed Phase {index + 1}
            </Text>
            {/* <CustomSelectApply
              typeText="Fundraise Option"
              type={fundraises}
              setType={setFundraises}
              options={["Token", "Equity", "Token and Equity", "NFT", "Others"]}
              w={{ base: "100%", md: "50%", lg: "50%" }}
            /> */}
            <SeedraisePhase
              index={index}
              typeText="Seed Phase Desc"
              type={seedPhase}
              setType={setSeedPhase}
            />
            <Stack
              mt="30px"
              direction={{ base: "column", md: "row", lg: "row" }}
              spacing="30px"
            >
              <SeedInput
                index={index}
                typeText="Seed Amount"
                type={seedAmount}
                setType={setSeedAmount}
                w={{ base: "100%", md: "50%", lg: "50%" }}
              />
              <SeedInput
                index={index}
                typeText="Seed Price"
                type={seedPrice}
                setType={setSeedPrice}
                w={{ base: "100%", md: "50%", lg: "50%" }}
              />
              <SeedInput
                index={index}
                typeText="Vesting Period in Months"
                type={seedVesting}
                setType={setSeedvesting}
                w={{ base: "100%", md: "50%", lg: "50%" }}
              />
            </Stack>
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
          onClick={onNewSeedPhase}
        >
          <Box color="white">Add Seed</Box>
        </ButtonBackTransition>
        <ButtonBackTransition
          unitid="CancelPhase"
          selected={false}
          width="300px"
          height="45px"
          rounded="33px"
          ml={{ base: "10px", md: "40px" }}
          onClick={onCancelSeedPhase}
        >
          <Box color="white">Cancel Seed {seedPhase.length}</Box>
        </ButtonBackTransition>
      </Flex>
    </>
  );
};
export default ApplySeedraising;
