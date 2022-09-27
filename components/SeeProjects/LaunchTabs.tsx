import React, { Dispatch, SetStateAction, useState } from "react";
import { Box, Stack, Flex } from "@chakra-ui/react";

interface LaunchButtonProps {
  title: string;
  selected: boolean;
  action: Dispatch<SetStateAction<string>>;
}

const LaunchButton = ({ title, selected, action }: LaunchButtonProps) => {
  return (
    <Box
      display="inline-flex"
      rounded="full"
      shadow="md"
      w={{ base: "100px", md: "200px" }}
      minW={{ base: "100px", md: "200px" }}
      h={{ base: "30px", md: "40px" }}
      alignItems="center"
      justifyContent="center"
      px={2}
      py={2}
      border="solid transparent"
      fontWeight="regular"
      color="rgba(255, 255, 255, 0.84)"
      fontSize={{ base: "12px", md: "18px" }}
      bg={selected ? "rgba(0, 151, 199, 0.85)" : "rgba(255, 255, 255, 0.2)"}
      cursor="pointer"
      _hover={{
        bg: "rgba(0, 151, 199, 0.85)",
      }}
      _selected={{
        bg: "rgba(0, 151, 199, 0.85)",
      }}
      onClick={() => action(title)}
    >
      {title}
    </Box>
  );
};

interface Props {
  launchStage: string;
  setLaunchStage: Dispatch<SetStateAction<string>>;
}

export default function LaunchTabs({ launchStage, setLaunchStage }: Props) {
  return (
    <Flex>
      <Flex justify="left" w="full">
        <Box
          w={{ base: "full", md: "75%", lg: "50%" }}
          textAlign={{ base: "left", md: "center" }}
        >
          <Stack
            justifyContent={{ base: "left", md: "left" }}
            direction={{ base: "column", sm: "row" }}
            spacing={6}
            mt={2}
          >
            <LaunchButton
              title="PRELAUNCH"
              selected={launchStage.toLowerCase() == "prelaunch"}
              action={setLaunchStage}
            />
            <LaunchButton
              title="LAUNCH"
              selected={launchStage.toLowerCase() == "launch"}
              action={setLaunchStage}
            />
            <LaunchButton
              title="COMPLETED"
              selected={launchStage.toLowerCase() == "completed"}
              action={setLaunchStage}
            />
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
