import { Box, Divider, Flex, Progress, Text } from "@chakra-ui/react";
import React from "react";
import { ImageTransition } from "../ImageTransition";

export default function MilestoneDetail() {
  return (
    <>
      <Box p="26px" width="500px" bg="rgba(19, 10, 73, 1)" borderRadius="10px">
        <Flex
          lineHeight="50px"
          direction="row"
          justifyContent={"space-between"}
        >
          <Text
            verticalAlign="middle"
            fontFamily="Montserrat"
            fontSize="24px"
            fontWeight={600}
          >
            Project Name
          </Text>
          <Text
            verticalAlign="middle"
            fontFamily="Montserrat"
            fontSize="14px"
            fontWeight={600}
          >
            On Going
          </Text>
        </Flex>
        <Flex pt="16px" lineHeight="24px" direction="row">
          <Text
            verticalAlign="middle"
            fontFamily="Montserrat"
            fontSize="12px"
            fontWeight={400}
          >
            Start Date
          </Text>
          <Box w="8px" />
          <Text
            verticalAlign="middle"
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight={700}
          >
            20/11/22
          </Text>
          <Box w="36px" />
          <Text
            verticalAlign="middle"
            fontFamily="Montserrat"
            fontSize="12px"
            fontWeight={400}
          >
            End Date
          </Text>
          <Box w="8px" />
          <Text
            verticalAlign="middle"
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight={700}
          >
            20/11/22
          </Text>
          <Box w="36px" />
          <Text
            verticalAlign="middle"
            fontFamily="Montserrat"
            fontSize="12px"
            fontWeight={400}
          >
            Amount
          </Text>
          <Box w="8px" />
          <Text
            verticalAlign="middle"
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight={700}
          >
            $ 300,00
          </Text>
        </Flex>
        <Text
          pt="16px"
          verticalAlign="middle"
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight={600}
        >
          Milestone Vote Tally
        </Text>
        <Flex lineHeight="26px" direction="row">
          <Progress
            borderRadius="18px"
            colorScheme="purple"
            height="32px"
            my={"12px"}
            value={20}
            width={"100%"}
          />
          <Flex direction="column">
            <Text fontSize="12px" fontWeight={700} color="white" px="8px">
              20%
            </Text>
            <Text
              whiteSpace="nowrap"
              color="#9F9BC3"
              fontSize="12px"
              fontWeight={700}
              px="8px"
              w="full"
            >
              On Progress
            </Text>
          </Flex>
          <Box w="24px" />
          <ImageTransition
            border2="#23A4EC"
            background2="#06142D"
            border1="#06142D"
            background1="#23A4EC"
            border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
            selected={false}
            width="150px"
            height={{ base: "32px", md: "40px", lg: "40px" }}
            rounded={"33px"}
          >
            <Text
              w="100%"
              fontSize={{
                base: "14px",
                sm: "15px",
                md: "15px",
                lg: "15px",
              }}
              textAlign="center"
              fontFamily={"PilatExtended-Bold"}
              fontWeight={"800"}
              color="#FFFFFF"
              _hover={{ color: "#FFFFFF" }}
              transition={"all 1s"}
            >
              Yes
            </Text>
          </ImageTransition>
          <Box w="24px" />
          <ImageTransition
            border2="#23A4EC"
            background2="#06142D"
            border1="#06142D"
            background1="#23A4EC"
            border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
            selected={false}
            width="150px"
            height={{ base: "32px", md: "40px", lg: "40px" }}
            rounded={"33px"}
          >
            <Text
              w="100%"
              fontSize={{
                base: "14px",
                sm: "15px",
                md: "15px",
                lg: "15px",
              }}
              textAlign="center"
              fontFamily={"PilatExtended-Bold"}
              fontWeight={"800"}
              color="#FFFFFF"
              _hover={{ color: "#FFFFFF" }}
              transition={"all 1s"}
            >
              No
            </Text>
          </ImageTransition>
        </Flex>
        <Text
          mt={"16px"}
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight={400}
          textAlign="justify"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text
          pt="16px"
          pb="8px"
          fontFamily="Montserrat"
          fontSize="20px"
          fontWeight={800}
        >
          Comments (1)
        </Text>
        <Divider color="#FCFCFC33" />
      </Box>
    </>
  );
}
