import { ethers } from "ethers";
import { WEFUND_CONTRACT, WEFUND_ID, CHAINS_CONFIG } from "../config/constants";
import { ActionKind } from "../contexts/store";
import WEFUND_ABI from "../bsc_contract/build/contracts/WeFund.json";
import { ROUTER_TOKENS } from "../config/constants/swap";

export function addExtraInfo(projectData: any) {
  if (typeof projectData === "undefined" || projectData == "") return "";

  projectData[WEFUND_ID - 1].backerbacked_amount = "160000000000";
  for (let i = 0; i < projectData.length; i++) {
    projectData[i].teammember_states = JSON.parse(projectData[i].teammembers);
    const backer_backedAmount = parseInt(projectData[i].backerbacked_amount);
    projectData[i].backer_backedPercent = Math.floor(
      (backer_backedAmount /
        10 ** 6 /
        parseInt(projectData[i].project_collected)) *
        100
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
  let communityData = state.communityData;
  let configData = state.configData;

  if (!force) return { projectData, communityData, configData };

  const provider = new ethers.providers.JsonRpcProvider(
    CHAINS_CONFIG["rinkeby"].rpc
  );
  const contract = new ethers.Contract(
    WEFUND_CONTRACT,
    WEFUND_ABI.abi,
    provider
  );

  await fetch("/api/fetchProjects")
    .then((res) => res.json())
    .then((data) => {
      projectData = data.data;
    })
    .catch((e) => {
      console.log("Error:" + e);
    });

  try {
    const res = await contract.getProjectInfo();
    for (let i = 0; i < res.length; i++) {
      const id = res[i].id.toNumber() - 1;

      projectData[id].project_collected = res[i].collected.toNumber();
      projectData[id].backerbacked_amount = res[i].backed.toNumber();
      projectData[id].backer_states = res[i].backers;
      projectData[id].whitelist = res[i].whitelist;
      projectData[id].milestone_states = [];
      for (let j = 0; j < res[i].milestones.length; j++) {
        var obj: any = {};
        obj.milestone_amount = res[i].milestones[j].amount.toNumber();
        obj.milestone_description = res[i].milestones[j].description;
        obj.milestone_enddate = res[i].milestones[j].end_date;
        obj.milestone_name = res[i].milestones[j].name;
        obj.milestone_startdate = res[i].milestones[j].start_date;
        obj.milestone_status = res[i].milestones[j].status;
        obj.milestone_step = res[i].milestones[j].step.toNumber();
        obj.votes = res[i].milestones[j].votes;
        projectData[id].milestone_states.push(obj);
      }
    }
    console.log(projectData);
    projectData = addExtraInfo(projectData);
    dispatch({ type: ActionKind.setProjectData, payload: projectData });
    console.log(projectData);
  } catch (e) {
    console.log(e);
  }

  //------------------------------------------------------------------

  return { projectData, communityData, configData };
}
