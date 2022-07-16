import React, { FunctionComponent } from "react";
import { Flex, Img } from "@chakra-ui/react";
import { useStore } from "../../../contexts/store";
import { REQUEST_ENDPOINT } from "../../../config/constants";

interface Props {
  data: any;
}
const MobileLogo: FunctionComponent<Props> = ({ data }) => {
  return (
    <Flex
      mx="6px"
      p="10px"
      width="100%"
      height="200px"
      align="center"
      justify="center"
      borderRadius={"2xl"}
      boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
    >
      <Img w="100px" objectFit="contain" src={data.project_logo} />
    </Flex>
  );
};
export default MobileLogo;
