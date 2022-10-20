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

// export async function fetchData(
//   state: any,
//   dispatch: React.Dispatch<any>,
//   force: boolean
// ) {
//   let projectData = state.projectData;
//   const communityData = state.communityData;
//   const configData = state.configData;

//   if (!force) return { projectData, communityData, configData };

//   const provider = new ethers.providers.JsonRpcProvider(
//     CHAINS_CONFIG["bsc_testnet"].rpc
//   );
//   const contract = new ethers.Contract(WEFUND_CONTRACT, WEFUND_ABI, provider);

//   try {
//     console.log("reading");

//     await fetch("/api/projects")
//       .then((res) => res.json())
//       .then((data) => {
//         projectData = data.data;
//       })
//       .catch((e) => {
//         console.log("Error:" + e);
//       });

//     const res = await contract.getProjectInfo();

//     for (let i = 0; i < res.length; i++) {
//       const id = res[i].id.toNumber() - 1;

//       projectData[id].project_collected = res[i].collected.toNumber();
//       projectData[id].project_status = res[i].status;
//       projectData[id].rejected = res[i].rejected;
//       projectData[id].backerbacked_amount = res[i].backed.toNumber();
//       projectData[id].backer_states = res[i].backers;
//       projectData[id].milestone_states = [];
//       projectData[id].teammember_states = JSON.parse(
//         projectData[id].teammembers
//       );
//       projectData[id].fund_type = JSON.parse(projectData[id].project_fundtype);

//       for (let j = 0; j < res[i].milestones.length; j++) {
//         const obj: any = {};
//         obj.milestone_amount = res[i].milestones[j].amount.toNumber();
//         obj.milestone_description = res[i].milestones[j].description;
//         obj.milestone_enddate = res[i].milestones[j].end_date;
//         obj.milestone_name = res[i].milestones[j].name;
//         obj.milestone_startdate = res[i].milestones[j].start_date;
//         obj.milestone_status = res[i].milestones[j].status;
//         obj.milestone_step = res[i].milestones[j].step.toNumber();
//         obj.votes = res[i].milestones[j].votes;
//         projectData[id].milestone_states.push(obj);
//       }
//     }
//     console.log(projectData);
//     projectData = addExtraInfo(projectData);
//     dispatch({ type: ActionKind.setProjectData, payload: projectData });
//   } catch (e) {
//     console.log(e);
//   }

//   //------------------------------------------------------------------

//   return { projectData, communityData, configData };
// }

// export const fetchCommunity = async (
//   state: any,
//   dispatch: React.Dispatch<any>
// ) => {
//   const provider = new ethers.providers.JsonRpcProvider(
//     CHAINS_CONFIG["bsc_testnet"].rpc
//   );

//   try {
//     const contract = new ethers.Contract(WEFUND_CONTRACT, WEFUND_ABI, provider);
//     console.log("reading Community");
//     const res = await contract.getCommunity();
//     console.log(res);
//     dispatch({ type: ActionKind.setCommunityData, payload: res });
//   } catch (e) {
//     console.log(e);
//   }
// };
