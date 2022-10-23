import { ethers } from "ethers";
import { WEFUND_CONTRACT, WEFUND_ID, CHAINS_CONFIG } from "../config/constants";
import { ActionKind } from "../contexts/store";
import WEFUND_ABI from "../config/WeFund.json";

export function addExtraInfo(projectData: any) {
  if (typeof projectData === "undefined" || projectData == "") return "";

  projectData[WEFUND_ID - 1].backerbacked_amount = 160000;
  for (let i = 0; i < projectData.length; i++) {
    const backer_backedAmount = projectData[i].backerbacked_amount;
    projectData[i].backer_backedPercent = Math.floor(
      (backer_backedAmount / projectData[i].project_collected) * 100
    );

    let released = 0;
    for (let j = 0; j < projectData[i].milestone_states.length; j++) {
      if (projectData[i].milestone_states[j].status == 2) {
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
  const communityData = state.communityData;
  const configData = state.configData;

  if (!force) return { projectData, communityData, configData };

  const provider = new ethers.providers.JsonRpcProvider(
    CHAINS_CONFIG["bsc_testnet"].rpc
  );
  const contract = new ethers.Contract(WEFUND_CONTRACT, WEFUND_ABI, provider);

  try {
    console.log("fetching from mysql");

    await fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw "connection error";
        projectData = data;
      });

    const res = await contract.getProjectInfo();
    console.log("fetching from smart contract");

    let iProject = 0;
    for (let i = 0; i < res.length; i++) {
      const id = res[i].id.toNumber();
      if (id != 0) {
        while (iProject < projectData.length) {
          if (projectData[iProject].project_id == id) {
            projectData[iProject].project_collected =
              res[i].collected.toNumber();
            projectData[iProject].project_status = res[i].status;
            projectData[iProject].backerbacked_amount =
              res[i].backed.toNumber();
            projectData[iProject].backer_states = res[i].backers;
            projectData[iProject].milestone_states = res[i].milestones;
            projectData[iProject].teammember_states = JSON.parse(
              projectData[iProject].teammembers
            );
            projectData[iProject].fund_type = JSON.parse(
              projectData[iProject].project_fundtype
            );
            iProject++;
            break;
          }
          iProject++;
        }
      }
    }
    console.log(projectData);
    projectData = addExtraInfo(projectData);
    dispatch({ type: ActionKind.setProjectData, payload: projectData });
  } catch (e) {
    console.log(e);
  }

  return { projectData, communityData, configData };
}
