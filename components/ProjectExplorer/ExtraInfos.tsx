import React, { FunctionComponent } from "react";
import { HStack, chakra } from "@chakra-ui/react";

interface Props {
  data: any;
  activeTab: string;
}
const ExtraInfos: FunctionComponent<Props> = ({ data, activeTab }) => {
  return (
    <>
      {activeTab === "MileStoneDelivery" && (
        <HStack>
          <chakra.p
            py={2}
            w="600px"
            color={"gray.400"}
            paddingTop={"55px"}
            paddingRight={"20px"}
          >
            Project Milestone step - {parseInt(data.project_milestonestep) + 1}
          </chakra.p>
        </HStack>
      )}
    </>
  );
};

export default ExtraInfos;
