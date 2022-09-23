import React, { useState } from "react";
import { chakra, Box, Stack, Flex, Center, Text, Link } from "@chakra-ui/react";
import ProjectDropDown from "./CustomSelectCategory";

export default function PDrops() {
  const [fundraise, setFundraiseOption] = useState("Token");
  const [tokenName, setTokenName] = useState("");

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
              type={fundraise}
              setType={setFundraiseOption}
              options={["Token", "Equity", "Crowdfunding", "NFT", "Others"]}
              w={{ base: "100%", md: "50%", lg: "50%" }}
            />
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
