import React, { FunctionComponent } from "react";
import { Flex, Img } from "@chakra-ui/react";
import { useStore } from "../../../contexts/store";
import { REQUEST_ENDPOINT } from "../../../config/Constants";

interface Props {
  data: any;
}
const MobileLogo: FunctionComponent<Props> = ({ data }) => {
  return (
    <Flex
      mx="6px"
      p="10px"
      width="100%"
      bg="#FFFFFF"
      height="200px"
      align="center"
      justify="center"
      borderRadius={"2xl"}
      boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
    >
      <object data="/media/logo.png" type="image/png" style={{ width: "40%" }}>
        <Img
          w="100%"
          objectFit="contain"
          src={`${REQUEST_ENDPOINT}/download?filename=${data.project_logo}`}
        />
      </object>
    </Flex>
  );
};
export default MobileLogo;
