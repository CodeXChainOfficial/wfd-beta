import React, { FunctionComponent } from "react";
import { chakra, Flex } from "@chakra-ui/react";

interface Props {
  data: any;
}

const Description: FunctionComponent<Props> = ({ data }) => {
  return (
    <Flex flexDirection={"column"} w="60%" textAlign="left">
      <chakra.p py={2} fontSize="15px" color={"gray.400"}>
        Date -{" "}
        <span style={{ color: "#FE8600" }}>{data.project_createddate}</span>
      </chakra.p>

      <chakra.p py={2} color={"gray.400"}>
        {data.project_description.substr(0, 250)}
        {data.project_description.length > 250 && "..."}
      </chakra.p>
    </Flex>
  );
};

export default Description;
