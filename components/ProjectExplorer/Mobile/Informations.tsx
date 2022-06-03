import React, { FunctionComponent } from "react";
import { Flex, Icon, chakra } from "@chakra-ui/react";
import {
  MdOutlinePlace,
  MdOutlineCategory,
  MdOutlineAccountBalanceWallet,
} from "react-icons/md";

interface Props {
  data: any;
}

const MobileInformations: FunctionComponent<Props> = ({ data }) => {
  return (
    <>
      <Flex
        justify={"space-between"}
        alignItems="center"
        color={"gray.400"}
        w="100%"
      >
        <Flex alignItems={"center"}>
          <Icon as={MdOutlineCategory} h={6} w={6} />
          <chakra.h1 fontSize="sm" ml={1}>
            {data.project_ecosystem}
          </chakra.h1>
        </Flex>
        <Flex alignItems={"center"}>
          <Icon as={MdOutlinePlace} h={6} w={6} />
          <chakra.h1 fontSize="sm" ml={1}>
            {/* {data.project_category} */}
          </chakra.h1>
        </Flex>
      </Flex>

      <Flex py={2} w="100%" justify="flex-start">
        <Icon as={MdOutlineAccountBalanceWallet} h={6} w={6} />
        <chakra.h1 fontSize="sm" ml={1}>
          ${data.project_collected}
          <span style={{ color: "#00A3FF" }}> Fundraising Amount</span>
        </chakra.h1>
      </Flex>
    </>
  );
};
export default MobileInformations;
