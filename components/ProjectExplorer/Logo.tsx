import React, { FunctionComponent } from "react";
import { Flex, Img } from "@chakra-ui/react";

import { REQUEST_ENDPOINT } from "../../config/constants1";

interface Props {
  data: any;
}
const Logo: FunctionComponent<Props> = ({ data }) => {
  return (
    <Flex
      m="6px"
      p="10px"
      width="40%"
      bg="#FFFFFF"
      height="270px"
      align="center"
      justify="center"
      maxWidth={"270px"}
      borderRadius={"2xl"}
      boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
    >
      <object data="/media/logo.png" type="image/png" style={{ width: "80%" }}>
        <Img
          w={"100%"}
          objectFit={"contain"}
          src={`${REQUEST_ENDPOINT}/download?filename=${data.project_logo}`}
        />
      </object>
    </Flex>
  );
};

export default Logo;
