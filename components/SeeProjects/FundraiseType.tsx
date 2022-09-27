import React, { Dispatch, SetStateAction, useState } from "react";
import { chakra, Box, Stack, Flex, Center, Text, Link } from "@chakra-ui/react";
import ProjectDropDown from "./CustomSelectCategory";

interface Props {
  fundraiseToken: string;
  setFundraiseToken: Dispatch<SetStateAction<string>>;
}
export default function FundraiseType({
  fundraiseToken,
  setFundraiseToken,
}: Props) {
  const setOption = (type: string) => {
    setFundraiseToken && setFundraiseToken(type);
  };
  return (
    <Flex>
      <Flex justify="right" w="full">
        <Box>
          <Stack
            justifyContent={{ base: "right", md: "right" }}
            direction={{ base: "row", sm: "row" }}
            spacing={6}
            mt={2}
          >
            <ProjectDropDown
              typeText="Fundraise Option"
              type={fundraiseToken}
              setType={setFundraiseToken}
              options={["Token", "Equity", "Crowdfunding", "NFT", "Others"]}
              w={{ base: "100%", md: "50%", lg: "50%" }}
            />
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
