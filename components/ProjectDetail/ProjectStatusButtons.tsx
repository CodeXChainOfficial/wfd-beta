import React, { FunctionComponent } from "react";
import { Flex } from "@chakra-ui/react";

import {
  isWefundWallet,
  isCommunityWallet,
  isBackerWallet,
} from "../../utils/Util";

import { ButtonTransition } from "../../components/ImageTransition";
import { useStore } from "../../contexts/store";

interface Props {
  data: any;
  WefundApprove: any;
  onNext: any;
  MilestoneVote: any;
};
const ProjectStatusButtons: FunctionComponent<Props> = ({
  data,
  WefundApprove,
  onNext,
  MilestoneVote,
}) => {
  const { state, dispatch } = useStore();
  return (
    <>
      <Flex alignSelf={{ base: "center", md: "center", lg: "flex-start" }}>
        {data.project_status === "WefundVote" && isWefundWallet(state) && (
          <Flex justify={"center"}>
            <ButtonTransition
              unitid="Approve"
              selected={false}
              width="160px"
              height="50px"
              rounded="33px"
              onClick={() => WefundApprove(data.project_id)}
            >
              Approve Project
            </ButtonTransition>
          </Flex>
        )}
        {data.project_status === "Fundraising" && (
          <ButtonTransition
            unitid="backproject"
            width="160px"
            height="50px"
            selected={false}
            rounded="33px"
            mt="15px"
            mb="10px"
            onClick={onNext}
          >
            Back Project
          </ButtonTransition>
        )}
        {data.project_status === "Releasing" &&
          isBackerWallet(state, data.project_id) && (
            <Flex justify={"center"}>
              <ButtonTransition
                unitid="milestonevoteyes"
                width="160px"
                height="50px"
                selected={false}
                rounded="33px"
                onClick={() => MilestoneVote(data.project_id, true)}
              >
                Vote Yes
              </ButtonTransition>

              <ButtonTransition
                unitid="milestonevoteno"
                selected={false}
                width="160px"
                height="50px"
                rounded="33px"
                onClick={() => MilestoneVote(data.project_id, false)}
              >
                Vote No
              </ButtonTransition>
            </Flex>
          )}
      </Flex>
    </>
  );
};

export default ProjectStatusButtons;
