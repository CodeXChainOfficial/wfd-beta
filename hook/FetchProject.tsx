import React, { useEffect } from "react";
import { ethers } from "ethers";
import { CHAINS_CONFIG, WEFUND_CONTRACT, WEFUND_ID } from "../config/constants";
import WEFUND_ABI from "../config/WeFund.json";
import { AppContextInterface, ActionKind, useStore } from "../contexts/store";

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
export const fetchProjectData = async (
  state: AppContextInterface,
  dispatch: React.Dispatch<any>,
  force = false
) => {
  let projectData = state.projectData;

  if (force == false) {
    return state.projectData;
  }

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
console.log(res)
    for (let i = 0; i < res.length; i++) {
      const id = res[i].id.toNumber();
      if (id != 0) {
        for (let j = 0; j < projectData.length; j++) {
          if (projectData[j].project_id == id) {
            projectData[j].project_collected = res[i].collected.toNumber();
            projectData[j].project_status = res[i].status;
            projectData[j].backerbacked_amount = res[i].backed.toNumber();
            projectData[j].backer_states = res[i].backers;
            projectData[j].milestone_states = res[i].milestones;
            projectData[j].teammember_states = JSON.parse(
              projectData[j].teammembers
            );
            projectData[j].fund_type = JSON.parse(
              projectData[j].project_fundtype
            );
            break;
          }
        }
      }
    }
    console.log(projectData);
    projectData = addExtraInfo(projectData);
    dispatch({ type: ActionKind.setProjectData, payload: projectData });
  } catch (e) {
    console.log(e);
  }
};

export const useProjectData = () => {
  const { state, dispatch } = useStore();

  useEffect(() => {
    fetchProjectData(state, dispatch, true);
  }, []);

  return state.projectData;
};

export const useOneProjectData = (pid: number) => {
  const projectData = useProjectData();
  return projectData[pid > 1 ? pid - 1 : 0];
};

export const fetchCommunity = async (
  state: AppContextInterface,
  dispatch: React.Dispatch<any>
) => {
  const provider = new ethers.providers.JsonRpcProvider(
    CHAINS_CONFIG["bsc_testnet"].rpc
  );

  try {
    const contract = new ethers.Contract(WEFUND_CONTRACT, WEFUND_ABI, provider);
    console.log("reading Community");
    const res = await contract.getCommunity();
    console.log(res);
    dispatch({ type: ActionKind.setCommunityData, payload: res });
  } catch (e) {
    console.log(e);
  }
};

export const useCommunityData = () => {
  const { state, dispatch } = useStore();

  useEffect(() => {
    fetchCommunity(state, dispatch);
  }, []);

  return state.communityData;
};
