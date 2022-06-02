import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Flex, Text, Box, Textarea } from "@chakra-ui/react";

import { InputTransition } from "../ImageTransition";

interface Props {
  prjTeamDescription: string;
  setPrjTeamDescription: Dispatch<SetStateAction<string>>;
  prjTeamDescriptionLen: number;
  setPrjTeamDescriptionLen: Dispatch<SetStateAction<number>>;
}
const ProjectTeamDescription: FunctionComponent<Props> = ({
  prjTeamDescription,
  setPrjTeamDescription,
  prjTeamDescriptionLen,
  setPrjTeamDescriptionLen,
}) => {
  function onChangePrjTeamDescription(e: any) {
    setPrjTeamDescriptionLen(e.target.value.length);
    if (e.target.value.length < 5000) setPrjTeamDescription(e.target.value);
  }

  return (
    <Box mt="40px">
      <Flex justify="space-between">
        <Text mb="20px">Project Team Description</Text>
        <Text fontSize="15px" opacity="0.5">
          {prjTeamDescriptionLen}/5000 words
        </Text>
      </Flex>
      <InputTransition
        unitid="prjTeamdescription"
        selected={prjTeamDescription == "" ? false : true}
        width="100%"
        height="175px"
        rounded="md"
        style={{ background: "transparent", border: "0" }}
      >
        <Textarea
          style={{ background: "transparent", border: "0" }}
          value={prjTeamDescription}
          onChange={(e) => {
            onChangePrjTeamDescription(e);
          }}
          size="sm"
          rounded="md"
          h="175px"
        />
      </InputTransition>
    </Box>
  );
};
export default ProjectTeamDescription;
