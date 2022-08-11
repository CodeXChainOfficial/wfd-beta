import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { ethers } from "ethers";
import { getJunoConfig } from "../config";
import {
  WEFUND_CONTRACT,
  STAKING_CONTRACT,
  WFD_TOKEN,
  WEFUND,
  WEFUND_ID,
  NETWORK,
  CHAINS_CONFIG,
} from "../config/constants";
import { ActionKind } from "../contexts/store";
import WEFUND_ABI from "../bsc_contract/build/contracts/WeFund.json";

export function addExtraInfo(projectData: any) {
  if (typeof projectData === "undefined" || projectData == "") return "";

  projectData[WEFUND_ID - 1].backerbacked_amount = "160000000000";
  for (let i = 0; i < projectData.length; i++) {
    const backer_backedAmount = parseInt(projectData[i].backerbacked_amount);
    projectData[i].backer_backedPercent = Math.floor(
      (backer_backedAmount /
        10 ** 6 /
        parseInt(projectData[i].project_collected)) *
        100
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

  if (!force) return { projectData, communityData, configData };

  // const client = state.junoConnection.getClient();
  // if (!client) {
  //   console.log("Error");
  //   return;
  // }
  const provider = new ethers.providers.JsonRpcProvider(
    CHAINS_CONFIG["rinkeby"].rpc
  );
  const contract = new ethers.Contract(
    WEFUND_CONTRACT,
    WEFUND_ABI.abi,
    provider
  );

  try {
    projectData = await contract.getProjectInfo();
    projectData = addExtraInfo(projectData);
    // dispatch({ type: ActionKind.setProjectData, payload: projectData });
    console.log(projectData);
  } catch (e) {
    console.log(e);
  }

  //------------------------------------------------------------------

  return { projectData, communityData, configData };
}
