import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Flex, Text, Box, Stack, chakra } from "@chakra-ui/react";

import { ImageTransition, ButtonBackTransition } from "../../ImageTransition";

import TeamMemberDescription from "./TeamMemberDescription";
import TeamMemberInput from "./TeamMemberInput";

interface Props {
  description: any;
  setDescription: Dispatch<SetStateAction<any>>;
  name: any;
  setName: Dispatch<SetStateAction<any>>;
  role: any;
  setRole: Dispatch<SetStateAction<any>>;
  linkedin: any;
  setLinkedin: Dispatch<SetStateAction<any>>;
}
const TeamMembers: FunctionComponent<Props> = ({
  description,
  setDescription,
  name,
  setName,
  role,
  setRole,
  linkedin,
  setLinkedin,
}) => {
  function onNewTeamMember() {
    const ar = [...description];
    ar.push("");
    setDescription(ar);
  }
  function onCancelTeamMember() {
    if (description.length <= 1) return;
    const ar = [...description];
    ar.pop();
    setDescription(ar);
  }

  return (
    <>
      <Flex
        mt="50px"
        justify="center"
        style={{ fontFamily: "PilatExtended-Bold" }}
      >
        <Text fontSize={{ base: "25px", md: "25px" }}>
          <chakra.span color={"#69E4FF"}>Team</chakra.span> Members
        </Text>
      </Flex>
      {description.map((item: any, index: number) => {
        return (
          <Flex
            direction="column"
            key={index}
            background={"rgba(12, 2, 24, 0.5)"}
            padding={12}
            rounded={"2xl"}
            mt={4}
          >
            <Text
              fontSize={{ base: "14px", md: "18px" }}
              fontFamily={"PilatExtended-Bold"}
              color="#ffff"
              mb="10px"
              align="left"
            >
              Team Member {index + 1}
            </Text>
            <TeamMemberDescription
              index={index}
              typeText="Description"
              type={description}
              setType={setDescription}
            />
            <Stack
              direction={{ base: "column", md: "row", lg: "row" }}
              mb="30px"
              spacing="30px"
              mt="30px"
            >
              <TeamMemberInput
                index={index}
                typeText="Name"
                type={name}
                setType={setName}
                w={{ base: "100%", md: "50%", lg: "50%" }}
              />
              <TeamMemberInput
                index={index}
                typeText="Role"
                type={role}
                setType={setRole}
                w={{ base: "100%", md: "50%", lg: "50%" }}
              />
            </Stack>
            <TeamMemberInput
              index={index}
              typeText="LinkedIn or similar"
              type={linkedin}
              setType={setLinkedin}
              w={{ base: "100%", md: "100%", lg: "100%" }}
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
          unitid="AddNewMilestone"
          selected={false}
          width="260px"
          height="45px"
          rounded="33px"
          onClick={onNewTeamMember}
        >
          <Box color="white">Add Team Member</Box>
        </ButtonBackTransition>
        <ButtonBackTransition
          unitid="CancelMilestone"
          selected={false}
          width="300px"
          height="45px"
          rounded="33px"
          ml={{ base: "10px", md: "40px" }}
          onClick={onCancelTeamMember}
        >
          <Box color="white">Cancel Team Member {description.length}</Box>
        </ButtonBackTransition>
      </Flex>
    </>
  );
};
export default TeamMembers;
