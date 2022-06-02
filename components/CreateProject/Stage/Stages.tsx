import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Flex, Text, Box, Stack } from "@chakra-ui/react";

import { ImageTransition, ButtonBackTransition } from "../../ImageTransition";

import VestingInput from "./VestingInput";
import StageSimpleInput from "./StageSimpleInput";

interface Props {
  stageTitle: any;
  setStageTitle: Dispatch<SetStateAction<any>>;
  stagePrice: any;
  setStagePrice: Dispatch<SetStateAction<any>>;
  stageAmount: any;
  setStageAmount: Dispatch<SetStateAction<any>>;
  stageVestingSoon: any;
  setStageVestingSoon: Dispatch<SetStateAction<any>>;
  stageVestingAfter: any;
  setStageVestingAfter: Dispatch<SetStateAction<any>>;
  stageVestingPeriod: any;
  setStageVestingPeriod: Dispatch<SetStateAction<any>>;
}
const Stages: FunctionComponent<Props> = ({
  stageTitle,
  setStageTitle,
  stagePrice,
  setStagePrice,
  stageAmount,
  setStageAmount,
  stageVestingSoon,
  setStageVestingSoon,
  stageVestingAfter,
  setStageVestingAfter,
  stageVestingPeriod,
  setStageVestingPeriod,
}) => {
  function onNewStage() {
    const ar = [...stageTitle];
    ar.push("");
    setStageTitle(ar);
  }
  function onCancelStage() {
    if (stageTitle.length <= 1) return;
    const ar = [...stageTitle];
    ar.pop();
    setStageTitle(ar);
  }

  return (
    <>
      <Flex
        mt="100px"
        justify="center"
        style={{ fontFamily: "PilatExtended-Bold" }}
      >
        <Text fontSize={{ base: "12px", md: "21px", lg: "25px" }}>
          Create&nbsp;
        </Text>
        <Text
          fontSize={{ base: "12px", md: "21px", lg: "25px" }}
          color="#4790f5"
        >
          Stages
        </Text>
      </Flex>
      {stageTitle.map((item: any, index: number) => {
        return (
          <Flex direction="column" key={index}>
            <Text
              fontSize={{ base: "14px", md: "21px", lg: "25px" }}
              color="#4790f5"
              mb="10px"
              mt="10px"
            >
              Stage - {index + 1}
            </Text>
            <Stack
              mt="30px"
              direction={{ base: "column", md: "row", lg: "row" }}
              spacing="30px"
            >
              <StageSimpleInput
                index={index}
                typeText={`Stage Title`}
                type={stageTitle}
                setType={setStageTitle}
                w={{ base: "100%", md: "30%", lg: "30%" }}
              />
              <StageSimpleInput
                index={index}
                typeText={`Price set at ${item}`}
                type={stagePrice}
                setType={setStagePrice}
                w={{ base: "100%", md: "30%", lg: "30%" }}
              />
              <StageSimpleInput
                index={index}
                typeText={`Token amount at ${item}`}
                type={stageAmount}
                setType={setStageAmount}
                w={{ base: "100%", md: "30%", lg: "30%" }}
              />
            </Stack>
            <VestingInput
              index={index}
              typeText={`${index}`}
              soon={stageVestingSoon}
              setSoon={setStageVestingSoon}
              after={stageVestingAfter}
              setAfter={setStageVestingAfter}
              period={stageVestingPeriod}
              setPeriod={setStageVestingPeriod}
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
      >
        <ButtonBackTransition
          unitid="AddStage"
          selected={false}
          width="250px"
          height="45px"
          rounded="33px"
          onClick={onNewStage}
        >
          <Box color="white">Add Stage</Box>
        </ButtonBackTransition>

        <ButtonBackTransition
          unitid="CancelStage"
          selected={false}
          width="250px"
          height="45px"
          rounded="33px"
          ml="30px"
          onClick={onCancelStage}
        >
          <Box color="white">Cancel Stage {stageTitle.length}</Box>
        </ButtonBackTransition>
      </Flex>
    </>
  );
};
export default Stages;
