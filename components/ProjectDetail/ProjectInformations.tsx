import React, { FunctionComponent } from "react";
import {
  Flex,
  Text,
  VStack,
  HStack,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

import { GetProjectStatusString } from "../Util";

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
    <VStack height={{ lg: "484px" }} paddingLeft={{ lg: "15px" }} mt={"10px"}>
      <Text alignSelf={"flex-start"}>Details</Text>
      <HStack width={"100%"}>
        <Flex width={"40%"} alignSelf={"flex-start"}>
          <Text
            color={"rgba(255, 255, 255, 0.84)"}
            fontFamily={"Pilat-Extended"}
            fontSize={"18px"}
          >
            Status
          </Text>
        </Flex>
        <Flex width={"40%"} alignSelf={"flex-end"}>
          <Text
            color={" #FE8600"}
            fontFamily={"Pilat-Extended"}
            fontWeight={"700"}
            fontSize={"18px"}
          >
            {GetProjectStatusString(data.project_status)}
            PROJECT STATUS
          </Text>
        </Flex>
      </HStack>
      <HStack width={"100%"}>
        <Flex width={"40%"} alignSelf={"flex-start"}>
          <Text
            color={"rgba(255, 255, 255, 0.84)"}
            fontFamily={"Pilat-Extended"}
            fontSize={"18px"}
          >
            Platform
          </Text>
        </Flex>
        <Flex width={"40%"} alignSelf={"flex-end"}>
          <Text
            color={" #FE8600"}
            fontFamily={"Pilat-Extended"}
            fontWeight={"700"}
            fontSize={"18px"}
          >
            {data.project_ecosystem}
          </Text>
        </Flex>
      </HStack>
      <HStack width={"100%"}>
        <Flex width={"40%"} alignSelf={"flex-start"}>
          <Text
            color={"rgba(255, 255, 255, 0.84)"}
            fontFamily={"Pilat-Extended"}
            fontSize={"18px"}
          >
            Backers
          </Text>
        </Flex>
        <Flex width={"40%"} alignSelf={"flex-end"}>
          <Text
            color={" #FE8600"}
            fontFamily={"Pilat-Extended"}
            fontWeight={"700"}
            fontSize={"18px"}
          >
            {data.backer_states?.length}
          </Text>
        </Flex>
      </HStack>
      <HStack width={"100%"}>
        <Flex width={"40%"} alignSelf={"flex-start"}>
          <Text
            color={"rgba(255, 255, 255, 0.84)"}
            fontFamily={"Pilat-Extended"}
            fontSize={"18px"}
          >
            Funding Pool
          </Text>
        </Flex>
        <Flex width={"40%"} alignSelf={"flex-end"}>
          <Text
            color={" #FE8600"}
            fontFamily={"Pilat-Extended"}
            fontWeight={"700"}
            fontSize={"18px"}
          >
            {data.project_collected}
          </Text>
        </Flex>
      </HStack>
      <HStack width={"100%"}>
        <Flex width={"40%"} alignSelf={"flex-start"}>
          <Text
            color={"rgba(255, 255, 255, 0.84)"}
            fontFamily={"Pilat-Extended"}
            fontSize={"18px"}
          >
            Category
          </Text>
        </Flex>
        <Flex width={"40%"} alignSelf={"flex-end"}>
          <Text
            color={" #FE8600"}
            fontFamily={"Pilat-Extended"}
            fontWeight={"700"}
            fontSize={"18px"}
          >
            {data.project_category}
          </Text>
        </Flex>
      </HStack>
      <Flex
        alignSelf={{
          base: "center",
          md: "center",
          lg: "flex-start",
        }}
      >
        <VStack alignSelf={"flex-start"}>
          <Flex>
            <Text>
              Progress: {totalBackedMoney} out of {data.project_collected} USD
            </Text>
          </Flex>
          <Flex
            alignSelf={{
              base: "center",
              md: "center",
              lg: "flex-start",
            }}
          >
            <CircularProgress value={12} size="120px" color="#00A3FF">
              <CircularProgressLabel color="white">
                {totalBackedPercent}%
              </CircularProgressLabel>
            </CircularProgress>
          </Flex>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default ProjectInformations;
