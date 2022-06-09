import React, { FunctionComponent } from "react";
import { Box, chakra } from "@chakra-ui/react";
import { GetProjectStatus, GetProjectStatusString } from "../../utils/Util";

interface Props {
  data: any;
  activeTab: string;
}
const Title: FunctionComponent<Props> = ({ data, activeTab }) => {
  return (
    <Box>
      <chakra.h1 mb={"15px"} color="white" fontSize="lg" fontWeight="bold">
        Under&nbsp;
        {GetProjectStatusString(GetProjectStatus(activeTab))}
      </chakra.h1>
      <chakra.h1 color="white" fontSize="lg" fontWeight="bold" textAlign="left">
        {data.project_title}
      </chakra.h1>
    </Box>
  );
};

export default Title;
