import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Text,
  chakra,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PROJECT_INFO, VOTE_INFO } from "../../types/Project";

export default function ProjectInfoPanel({ data }: { data: PROJECT_INFO }) {
  return (
    <Box
      w="100%"
      p={{ base: "10px", md: "40px" }}
      bg="#130A49"
      borderRadius="10px"
      mt="30px"
    >
      <Text>Apply Option</Text>
      <Grid
        templateColumns="1fr 1fr 1fr 1fr"
        fontSize={{ base: "10px", md: "16px" }}
        gap="10px"
      >
        <GridItem>{data.project_option}</GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem>
          <Text>Documentation</Text>
          <Text>Legal</Text>
          <Text>Tokenomics</Text>
        </GridItem>
        <GridItem>Email</GridItem>
        <GridItem>{data.email}</GridItem>
        <GridItem>Telegram</GridItem>
        <GridItem>{data.telegram}</GridItem>
        <GridItem>% for WeFund</GridItem>
        <GridItem>{data.service_wefund}</GridItem>
        <GridItem>% for Charity</GridItem>
        <GridItem>{data.service_charity}</GridItem>
        <GridItem>
          Fundraising
          <br />
          Option
        </GridItem>
        <GridItem>
          {data.fund_type.map((type) => (
            <Text key={type}>{type}</Text>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
}
