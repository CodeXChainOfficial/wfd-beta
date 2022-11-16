import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import {
  CHAINS_CONFIG,
  ERROR_OPTION,
  NETWORK,
  WEFUND_CONTRACT,
  WEFUND_ID,
  WEFUND_WALLET,
} from "../config/constants";
import WEFUND_ABI from "../config/WeFund.json";
import { AppContextInterface, ActionKind, useStore } from "../contexts/store";
import { PROJECT_STATUS } from "../types/ProjectStatus";
import { PROJECT_INFO } from "../types/Project";
import { toast } from "react-toastify";
import * as sapphire from "@oasisprotocol/sapphire-paratime";

function addExtraInfo(projectData: PROJECT_INFO[]) {
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
  // await initContract();

  if (force == false) {
    return state.projectData;
  }

  let projectData = JSON.parse(JSON.stringify(state.projectData));

  const provider = new ethers.providers.JsonRpcProvider(
    CHAINS_CONFIG["sapphire"].rpc
  );
  const contract = new ethers.Contract(
    WEFUND_CONTRACT,
    WEFUND_ABI,
    sapphire.wrap(provider)
  );

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
  for(let i=0; i<state.projectData.length; i++)
    if(state.projectData[i].project_id == pid){
      return state.projectData[i];
    }
  return undefined;
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
    CHAINS_CONFIG["sapphire"].rpc
  );

  try {
    const contract = new ethers.Contract(
      WEFUND_CONTRACT,
      WEFUND_ABI,
      sapphire.wrap(provider)
    );
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

export const initContract = async () => {
  const contract = new ethers.Contract(
    WEFUND_CONTRACT,
    WEFUND_ABI,
    sapphire.wrap(
      new ethers.providers.Web3Provider(window.ethereum).getSigner()
    )
  );
  const USDC = "0x64544969ed7EBf5f083679233325356EbE738930";
  const USDT = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
  const BUSD = "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee";

  let res;
  // res = await contract.addCommunity("0xFFfCd0B404c3d8AE38Ea2966bAD5A75D5Ab6ce0F");
  // await res.wait();

  // res = await contract.addCommunity(
  //   "0x0961B8b67CdA06f145f634A5F7c453A15E072C40"
  // );
  // await res.wait();

  // // res = await contract.removeCommunity("0xFFfCd0B404c3d8AE38Ea2966bAD5A75D5Ab6ce0F");
  // // await res.wait();


  res = await contract.addCommunity("0x09Bb243F4b7BF5952BB4196c6968D3453DBEf71c");
  await res.wait();

  // res = await contract.setAddress(USDC, USDT, BUSD, WEFUND_WALLET);
  // await res.wait();

  // res = await contract.setWefundID(1);
  // await res.wait();

  // res = await contract.getProjectInfo();
  // console.log(res);

  // res = await contract.addProjectByOwner(600000, "3", [
  //   [0, "1", "", "2023-03-1", "2023-03-31", "600000"],
  // ]);
  // await res.wait();
  // console.log("1");

  // res = await contract.addProjectByOwner(390000, "3", [
  //   [0, "1", "", "2023-03-1", "2023-03-31", "390000"],
  // ]);
  // await res.wait();
  // console.log("2");

  // res = await contract.addProjectByOwner(250000, "3", [
  //   [0, "1", "", "2023-03-1", "2023-03-31", "250000"],
  // ]);
  // await res.wait();
  // console.log("3");

  // res = await contract.addProjectByOwner(600000, "3", [
  //   [0, "1", "", "2023-03-1", "2023-03-31", "600000"],
  // ]);
  // await res.wait();
  // console.log("4");

  // res = await contract.addProjectByOwner(120000, "3", [
  //   [0, "1", "", "2023-03-1", "2023-03-31", "120000"],
  // ]);
  // await res.wait();
  // console.log("5");

  // res = await contract.addProjectByOwner(120000, "3", [
  //   [0, "1", "", "2023-03-1", "2023-03-31", "120000"],
  // ]);
  // await res.wait();
  // console.log("6");

  // res = await contract.addProjectByOwner(4080000, "3", [
  //   [0, "1", "", "2023-03-1", "2023-03-31", "4080000"],
  // ]);
  // await res.wait();
  // console.log("7");

  // res = await contract.addProjectByOwner(120000, "3", [
  //   [0, "1", "", "2023-03-1", "2023-03-31", "120000"],
  // ]);
  // await res.wait();
  // console.log("8");

  // res = await contract.addIncubationGoal("1", [
  //   "goal 1",
  //   "goal 1 description",
  //   "2022-1-1",
  //   "2022-1-3",
  //   0,
  // ]);
  // await res.wait();

  // res = await contract.addIncubationGoal("1", [
  //   "goal 2",
  //   "goal 2 description",
  //   "2022-1-1",
  //   "2022-1-3",
  //   0,
  // ]);
  // await res.wait();

  // res = await contract.addIncubationGoal("2", [
  //   "goal 1",
  //   "goal 1 description",
  //   "2022-1-1",
  //   "2022-1-3",
  //   0,
  // ]);
  // await res.wait();

  // res = await contract.addIncubationGoal("2", [
  //   "goal 2",
  //   "goal 2 description",
  //   "2022-1-1",
  //   "2022-1-3",
  //   0,
  // ]);
  // await res.wait();

  // res = await contract.getProjectInfo();
  // console.log(res);
};
