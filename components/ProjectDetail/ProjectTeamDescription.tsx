import React from "react";
import { VStack, Stack, Flex, Text, Box, HStack } from "@chakra-ui/react";

export default function ProjectTeamDescription({ data }: { data: any }) {
  return (
    <Flex pt="40px" as={Stack} mb={"50px"} w="100%">
      <Text
        mb={"20px"}
        fontSize="28px"
        fontWeight={"900"}
        lineHeight={"36px"}
        fontFamily="PilatExtended-Heavy"
        textAlign={{ base: "center", lg: "left" }}
        color="white"
      >
        The Project <span style={{ color: "#00A3FF" }}>Team</span>
      </Text>
      <Box
        background="rgba(255, 255, 255, 0.05)"
        border="1.5px solid rgba(255, 255, 255, 0.15)"
        boxSizing="border-box"
        borderRadius="10px"
        mt={"30px"}
        fontSize={{ base: "16px", md: "16px", lg: "18px" }}
      >
        <VStack
          textAlign={"left"}
          px={{ base: "10px", md: "10px", lg: "20px" }}
          paddingTop={"35px"}
          paddingBottom={"35px"}
        >
          {data?.project_teammembers?.map((item: any, index: number) => {
            return (
              <VStack mt="10px" color="white" key={index}>
                <Text
                  fontWeight={"bold"}
                  textAlign={"left"}
                  alignSelf={"flex-start"}
                >
                  {item.teammember_role}
                </Text>
                <Text textAlign={"left"} fontWeight={"100"}>
                  {item.teammember_description}
                </Text>
                <Text textAlign={"left"} fontWeight={"100"}>
                  {item.teammember_linkedin}
                </Text>
              </VStack>
            );
          })}
        </VStack>
      </Box>
    </Flex>
  );
}
