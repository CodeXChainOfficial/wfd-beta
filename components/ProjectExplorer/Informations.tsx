import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Flex, Icon, chakra } from "@chakra-ui/react";
import {
  MdOutlinePlace,
  MdOutlineCategory,
  MdOutlineAccountBalanceWallet,
} from "react-icons/md";

interface Props {
  data: any;
}
const Informations: FunctionComponent<Props> = ({ data }) => {
  return (
    <>
      <Flex alignItems="center" color={"gray.400"}>
        <Icon as={MdOutlineCategory} h={6} w={6} mr={1} />
        <chakra.h1 px={1} fontSize="sm">
          {data.project_ecosystem}
        </chakra.h1>
      </Flex>
      <Flex alignItems="center" color={"gray.400"}>
        <Icon as={MdOutlinePlace} h={6} w={6} mr={1} />
        <chakra.h1 px={1} fontSize="sm">
          {/* {data.project_category} */}
        </chakra.h1>
      </Flex>
      <Flex alignItems="center" color={"gray.400"}>
        <Icon as={MdOutlineAccountBalanceWallet} h={6} w={6} mr={1} />
        <chakra.h1 px={1} fontSize="sm">
          ${data.project_collected}
          <span style={{ color: "#00A3FF" }}> Fundraising Amount</span>
        </chakra.h1>
      </Flex>
    </>
  );
};

export default Informations;
