import React, { FunctionComponent } from "react";
import {
  Flex,
  Text,
  VStack,
  HStack,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  Container,
  Spacer,
  chakra,
} from "@chakra-ui/react";

import { GetProjectStatusString } from "../../utils/utility";

interface Props {
  data: any;
  totalBackedMoney: number;
  totalBackedPercent: number;
}

const ProjectInformations: FunctionComponent<Props> = ({
  data,
  totalBackedMoney,
  totalBackedPercent,
}) => {
  return (
    <VStack
      height={{ lg: "484px" }}
      minW="400px"
      paddingLeft={{ lg: "15px" }}
      mt={"30px"}
    >
      <Text alignSelf={"flex-start"}>Details</Text>
      <Divider />
      <HStack width={"100%"}>
        <Flex width={"100%"} alignSelf={"flex-start"}>
          <Text
            color={"rgba(255, 255, 255, 0.84)"}
            fontFamily={"Pilat-Extended"}
            fontSize={"18px"}
          >
            Status
          </Text>
        </Flex>
        <Flex alignSelf={"flex-end"}>
          <Text
            color={" #00A3FF"}
            fontFamily={"Pilat-Extended"}
            fontWeight={"700"}
            fontSize={"18px"}
          >
            {GetProjectStatusString(data.project_status)}
          </Text>
        </Flex>
      </HStack>
      <HStack width={"100%"}>
        <Flex width={"100%"} alignSelf={"flex-start"}>
          <Text
            color={"rgba(255, 255, 255, 0.84)"}
            fontFamily={"Pilat-Extended"}
            fontSize={"18px"}
          >
            Backers
          </Text>
        </Flex>
        <Flex alignSelf={"flex-end"}>
          <Text
            color={" #69E4FF"}
            fontFamily={"Pilat-Extended"}
            fontWeight={"700"}
            fontSize={"18px"}
          >
            {data.backer_states?.length}
          </Text>
        </Flex>
      </HStack>
      <HStack width={"100%"}>
        <Flex width={"100%"} alignSelf={"flex-start"}>
          <Text
            color={"rgba(255, 255, 255, 0.84)"}
            fontFamily={"Pilat-Extended"}
            fontSize={"18px"}
          >
            Funding Pool
          </Text>
        </Flex>
        <Flex alignSelf={"flex-end"}>
          <Text
            color={" #69E4FF"}
            fontFamily={"Pilat-Extended"}
            fontWeight={"700"}
            fontSize={"18px"}
          >
            {data.project_collected}
          </Text>
        </Flex>
      </HStack>
      <HStack width={"100%"}>
        <Flex width={"100%"} alignSelf={"flex-start"}>
          <Text
            color={"rgba(255, 255, 255, 0.84)"}
            fontFamily={"Pilat-Extended"}
            fontSize={"18px"}
          >
            Category
          </Text>
        </Flex>
        <Flex alignSelf={"flex-end"}>
          <Text
            color={" #69E4FF"}
            fontFamily={"Pilat-Extended"}
            fontWeight={"700"}
            fontSize={"18px"}
          >
            {data.project_category}
          </Text>
        </Flex>
      </HStack>
      <HStack width={"100%"}>
        <Flex width={"100%"} alignSelf={"flex-start"}>
          <Text
            color={"rgba(255, 255, 255, 0.84)"}
            fontFamily={"Pilat-Extended"}
            fontSize={"18px"}
          >
            Platform
          </Text>
        </Flex>
        <Flex alignSelf={"flex-end"}>
          <Text
            color={" #69E4FF"}
            fontFamily={"Pilat-Extended"}
            fontWeight={"700"}
            fontSize={"18px"}
          >
            {data.project_ecosystem}
          </Text>
        </Flex>
      </HStack>
      <Divider />
      <Flex
        alignSelf={{
          base: "center",
          md: "center",
          lg: "flex-start",
        }}
        w="full"
      >
        <Container
          bgGradient="linear(#430E82, #1D0551)"
          pl="12px"
          pr="12px"
          mb="52px"
          rounded="10px"
        >
          <HStack w="full">
            <VStack alignItems="flex-start" w="full">
              <Text fontFamily={"Gilroy"} fontWeight="800" fontSize="20px">Progress</Text>
              <Text fontFamily={"Gilroy"} fontWeight="800" fontSize="30px">
                <chakra.span color="#69E4FF">{totalBackedMoney}</chakra.span> /{" "}
                <chakra.span opacity="0.38">
                  {data.project_collected}
                </chakra.span>
              </Text>
            </VStack>
            <Spacer />
            <Flex
              alignSelf={{
                base: "center",
                md: "center",
                lg: "flex-start",
              }}
            >
              <CircularProgress value={12} p="8px" size="100px" color="#1F71E2">
                <CircularProgressLabel color="white">
                  {totalBackedPercent}%
                </CircularProgressLabel>
              </CircularProgress>
            </Flex>
          </HStack>
        </Container>
      </Flex>
    </VStack>
  );
};

export default ProjectInformations;
