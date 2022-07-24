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
import CustomSelectApply from "./CustomSelectApply";

interface Props {
  SeedPhase: any;
  setSeedPhase: Dispatch<SetStateAction<any>>;
  Seedprice: any;
  setSeedprice: Dispatch<SetStateAction<any>>;
  Seedvesting: any;
  setSeedvesting: Dispatch<SetStateAction<any>>;
  SeedAmt: any;
  setSeedAmt: Dispatch<SetStateAction<any>>;
  fundraises: any;
  setFundraises: Dispatch<SetStateAction<any>>;
}
const ApplySeedraising: FunctionComponent<Props> = ({
  SeedPhase,
  setSeedPhase,
  Seedprice,
  setSeedprice,
  Seedvesting,
  setSeedvesting,
  SeedAmt,
  setSeedAmt,
  fundraises,
  setFundraises,
}) => {
  function onNewSeedPhase() {
    const ar = [...SeedPhase];
    ar.push("");
    setSeedPhase(ar);
  }
  function onCancelSeedPhase() {
    if (SeedPhase.length <= 1) return;
    const ar = [...SeedPhase];
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
      {SeedPhase.map((item: any, index: number) => {
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
              type={SeedPhase}
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
                type={SeedAmt}
                setType={setSeedAmt}
                w={{ base: "100%", md: "50%", lg: "50%" }}
              />
              <SeedInput
                index={index}
                typeText="Seed Price"
                type={Seedprice}
                setType={setSeedprice}
                w={{ base: "100%", md: "50%", lg: "50%" }}
              />
              <SeedInput
                index={index}
                typeText="Vesting Period in Months"
                type={Seedvesting}
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
          <Box color="white">Cancel Seed {SeedPhase.length}</Box>
        </ButtonBackTransition>
      </Flex>
    </>
  );
};
export default ApplySeedraising;
