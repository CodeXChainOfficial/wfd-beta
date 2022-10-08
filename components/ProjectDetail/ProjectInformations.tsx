import React, { FunctionComponent } from "react";
import {
  Box,
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
      height={{ lg: "400px" }}
      w="full"
      paddingLeft={{ lg: "15px" }
      }
    >
      <Text
        mb="32px"
        w="full"
        fontSize="28px"
        fontWeight={"900"}
        lineHeight={"36px"}
        fontFamily="PilatExtended-Heavy"
        textAlign="left"
        color="white"
      >
        Details
      </Text>
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
      <Box height="32px" />
      <Flex
        alignSelf={{
          base: "center",
          md: "center",
          lg: "flex-start",
        }}
        w="full"
      >
        <Flex
          backgroundColor="#002E87"
          pl="24px"
          pr="12px"
          pt="12px"
          pb="12px"
          mb="52px"
          rounded="10px"
          w="full"
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
              <CircularProgress
                value={totalBackedPercent}
                p="8px"
                size="100px"
                color="#002E87"
              >
                <CircularProgressLabel color="GRAY">
                  {totalBackedPercent}%
                </CircularProgressLabel>
              </CircularProgress>
            </Flex>
          </HStack>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default ProjectInformations;
