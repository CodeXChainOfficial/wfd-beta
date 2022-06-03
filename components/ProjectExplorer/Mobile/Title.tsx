import React, { FunctionComponent } from "react";
import { Flex, Text } from "@chakra-ui/react";

interface Props {
  data: any;
}

const MobileTitle: FunctionComponent<Props> = ({ data }) => {
  return (
    <>
      <Flex
        py={2}
        w="100%"
        fontSize="15px"
        alignItems={"center"}
        justify={"space-between"}
      >
        <Text color="white" fontWeight="bold">
          {data.project_title}
        </Text>
        <Text color={"gray.400"}>
          Date -{" "}
          <span style={{ color: "#FE8600" }}>{data.project_createddate}</span>
        </Text>
      </Flex>
      <Text color={"gray.400"} fontSize="15px">
        {data.project_description.substr(0, 300)}
        {data.project_description.length > 300 && "..."}
      </Text>
    </>
  );
};
export default MobileTitle;
