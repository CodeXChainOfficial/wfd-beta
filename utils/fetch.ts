import {
  WEFUND_CONTRACT,
  STAKING_CONTRACT,
  WFD_TOKEN,
  WEFUND,
  WEFUND_ID,
} from "../config/constants";
import { ActionKind } from "../contexts/store";

export function addExtraInfo(projectData: any) {
  if (typeof projectData === "undefined" || projectData == "") return "";

  projectData[WEFUND_ID - 1].backerbacked_amount = "160000000000";
  for (let i = 0; i < projectData.length; i++) {
    const backer_backedAmount = parseInt(projectData[i].backerbacked_amount);
    projectData[i].backer_backedPercent = Math.floor(
      (backer_backedAmount /
        10 ** 6 /
        parseInt(projectData[i].project_collected)) * 100
    );

    let released = 0;
    for (let j = 0; j < projectData[i].milestone_states.length; j++) {
      if (projectData[i].milestone_states[j].milestone_status == 2) {
        released++;
      }
    }
    projectData[i].releasedPercent = Math.floor(
      (released / projectData[i].milestone_states.length) * 100
    );
  }

  return projectData;
}

export async function fetchData(
  state: any,
  dispatch: React.Dispatch<any>,
  force: boolean
) {
  let projectData = state.projectData;
  let communityData = state.communityData;
  let configData = state.configData;

  if (!state.junoConnection || !state.junoConnection.getClient() || !force)
    return { projectData, communityData, configData };

  const client = state.junoConnection.getClient();
  if (!client) {
    console.log("Error");
    return;
  }

  try {
    projectData = await client.queryContractSmart(WEFUND_CONTRACT, {
      get_all_project: {},
    });
    projectData = addExtraInfo(projectData);
    dispatch({ type: ActionKind.setProjectData, payload: projectData });
    console.log(projectData);
  } catch (e) {
    console.log(e);
  }

  try {
    communityData = await client.queryContractSmart(WEFUND_CONTRACT, {
      get_communitymembers: {},
    });
    dispatch({ type: ActionKind.setCommunityData, payload: communityData });
  } catch (e) {
    console.log(e);
  }

  try {
    configData = await client.queryContractSmart(WEFUND_CONTRACT, {
      get_config: {},
    });
    dispatch({ type: ActionKind.setConfigData, payload: configData });
  } catch (e) {
    console.log(e);
  }

  try {
    //---------CardInfo-----------------------------------------------
    const tokenInfo = await client.queryContractSmart(WFD_TOKEN, {
      token_info: {},
    });
    const cardInfo = await client.queryContractSmart(STAKING_CONTRACT, {
      get_user_info: { wallet: state.junoConnection.account },
    });

    cardInfo.amount =
      parseInt(cardInfo.amount) / 10 ** parseInt(tokenInfo.decimals);

    dispatch({ type: ActionKind.setCardInfo, payload: cardInfo });
  } catch (e) {
    console.log(e);
  }
  //------------------------------------------------------------------

  return { projectData, communityData, configData };
}
