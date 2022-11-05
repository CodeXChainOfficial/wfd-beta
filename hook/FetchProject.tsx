import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import {
  CHAINS_CONFIG,
  ERROR_OPTION,
  NETWORK,
  WEFUND_CONTRACT,
  WEFUND_ID,
} from "../config/constants";
import WEFUND_ABI from "../config/WeFund.json";
import { AppContextInterface, ActionKind, useStore } from "../contexts/store";
import { PROJECT_STATUS } from "../types/ProjectStatus";
import { PROJECT_INFO } from "../types/Project";
import { toast } from "react-toastify";

export function addExtraInfo(projectData: PROJECT_INFO[]) {
  if (typeof projectData === "undefined" || projectData.length == 0) return [];

  projectData[WEFUND_ID - 1].backerbacked_amount = 160000;
  for (let i = 0; i < projectData.length; i++) {
    //not registred on Smart Contract
    if (projectData[i].milestone_states == undefined) {
      projectData[i].project_status = PROJECT_STATUS.DocumentValuation;
      projectData[i].backer_states = [];
      projectData[i].milestone_states = [];
      projectData[i].incubation_goals = [];
      projectData[i].wefund_votes = [];
      projectData[i].backer_votes = [];
    }

    const backer_backedAmount = projectData[i].backerbacked_amount;
    projectData[i].backer_backedPercent = Math.floor(
      (backer_backedAmount / projectData[i].project_collected) * 100
    );

    const length = projectData[i].milestone_states.length;
    const released = projectData[i].milestone_index;

    projectData[i].releasedPercent =
      length == 0 ? 0 : Math.floor((released / length) * 100);
  }

  return projectData;
}
export const fetchProjectData = async (
  state: AppContextInterface,
  dispatch: React.Dispatch<any>,
  force = false,
  total = false
) => {
  let projectData = JSON.parse(JSON.stringify(state.projectData));

  if (force == false) {
    return state.projectData;
  }

  const provider = new ethers.providers.JsonRpcProvider(
    CHAINS_CONFIG[NETWORK == "mainnet" ? "bsc" : "bsc_testnet"].rpc
  );
  const contract = new ethers.Contract(WEFUND_CONTRACT, WEFUND_ABI, provider);

  try {
    if (total == true) {
      console.log("fetching from mysql");
      await fetch("/api/projects")
        .then((res) => res.json())
        .then((data) => {
          if (data.error) throw "connection error";
          projectData = data;
        });
    }

    console.log("fetching from smart contract");
    const res = await contract.getProjectInfo();
    console.log(res);
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
            projectData[j].milestone_index =
              res[i].milestoneVotesIndex.toNumber();
            projectData[j].incubation_goals = res[i].incubationGoals;
            projectData[j].incubation_index =
              res[i].incubationGoalVoteIndex.toNumber();
            projectData[j].wefund_votes = res[i].wefundVotes;
            projectData[j].backer_votes = res[i].backerVotes;
            projectData[j].rejected = res[i].rejected;

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
    toast("Fetch Error", ERROR_OPTION);
    console.log(e);
  }
};

export const useProjectData = () => {
  const { state, dispatch } = useStore();
  return state.projectData;
};

export const useOneProjectData = (pid: number) => {
  const { state, dispatch } = useStore();
  return state.projectData[pid > 1 ? pid - 1 : 0];
};

export const fetchCommunity = async (
  state: AppContextInterface,
  dispatch: React.Dispatch<any>,
  force: boolean
) => {
  if (force == false) {
    return state.communityData;
  }

  const provider = new ethers.providers.JsonRpcProvider(
    CHAINS_CONFIG[NETWORK == "mainnet" ? "bsc" : "bsc_testnet"].rpc
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
    fetchCommunity(state, dispatch, false);
  }, []);

  return state.communityData;
};
