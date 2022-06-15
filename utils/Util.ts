import React from "react";
import { toast } from "react-toastify";
import { WEFUND_ID, WEFUND, TOKEN_LIST } from "../config/Constants";
import { ActionKind } from "../contexts/store";

export function GetProjectStatusString(mode: string) {
  let projectstatus = "Error";

  switch (mode) {
    case "WefundVote":
      projectstatus = "WeFundApproval";
      break;
    case "Whitelist":
      projectstatus = "WhitelistOpen";
      break;
    case "Fundraising":
      projectstatus = "Fundraising";
      break;
    case "Releasing":
      projectstatus = "MileStoneDelivery";
      break;
    case "Done":
      projectstatus = "ProjectComplete";
      break;
  }
  return projectstatus;
}
export function GetProjectStatus(mode: string) {
  let projectstatus = "";
  switch (mode) {
    case "WeFundApproval":
      projectstatus = "WefundVote";
      break;
    case "WhitelistOpen":
      projectstatus = "Whitelist";
      break;
    case "Fundraising":
      projectstatus = "Fundraising";
      break;
    case "MileStoneDelivery":
      projectstatus = "Releasing";
      break;
    case "ProjectComplete":
      projectstatus = "Done";
      break;
  }
  return projectstatus;
}

export function AddExtraInfo(projectData: any) {
  if (typeof projectData === "undefined" || projectData == "") return "";

  for (let i = 0; i < projectData.length; i++) {
    const backer_backedAmount = parseInt(projectData[i].backerbacked_amount);
    projectData[i].backer_backedPercent = Math.floor(
      (backer_backedAmount /
        10 ** 6 /
        parseInt(projectData[i].project_collected)) *
      100
    );

    let released = 0;
    for (let j = 0; j < projectData[i].project_milestones.length; j++) {
      if (projectData[i].project_milestones[j].milestone_status == 2) {
        released++;
      }
    }
    projectData[i].releasedPercent = Math.floor(
      (released / projectData[i].project_milestones.length) * 100
    );
  }

  return projectData;
}
export function CheckNetwork(state: any) {
  if (state.walletType == undefined || state.wallet == null) {
    toast("Please connect to wallet");
    return false;
  }
  if (state.investChain.toLowerCase() == "juno" && state.walletType == "Keplr")
    return true;
  if (state.investChain.toLowerCase() == "bnb" && state.walletType != "Keplr")
    return true;
  if (state.investChain.toLowerCase() == "tron" && state.walletType != "Keplr")
    return true;

  return false;
}

export function GetProjectIndex(projectData: any, project_id: number) {
  const isProject = (element: any) => element.project_id == project_id;
  const index = projectData.findIndex(isProject);
  return index;
}

export async function FetchData(
  state: any,
  dispatch: React.Dispatch<any>,
  force = false
) {
  let projectData: any[] = [WEFUND];
  const communityData: any[] = [];
  const configData: any[] = [];

  projectData = AddExtraInfo(projectData);
  dispatch({ type: ActionKind.setProjectData, payload: projectData });
  dispatch({ type: ActionKind.setCommunityData, payload: communityData });
  dispatch({ type: ActionKind.setConfigData, payload: configData });
  return { projectData, communityData, configData };
}

export function GetOneProject(projectData: any, project_id: number) {
  if (projectData == null) return null;
  const isProject = (element: any) =>
    parseInt(element.project_id) == project_id;
  const index = projectData?.findIndex(isProject);
  if (index == -1) return null;
  return projectData[index];
}

export function isWefundWallet(state: any) {
  return false;
}

export function isCardHolder(state: any, project_id: number) {
  if (state.cardInfo == "") return false;

  const one = GetOneProject(state.projectData, project_id);
  if (one == "") return false;

  for (let i = 0; i < one.whitelist.length; i++) {
    const info = one.whitelist[i];
    if (info.wallet == state.address) return false;
  }
  return true;
}

export function isBackable(state: any, project_id: number) {
  if (project_id == WEFUND_ID)
    //WFD
    return true;

  const one = GetOneProject(state.projectData, project_id);
  if (one == "") return false;

  for (let i = 0; i < one.whitelist.length; i++) {
    const info = one.whitelist[i];
    if (info.wallet == state.address && info.backed < info.allocation) {
      return true;
    }
  }

  return false;
}

export function getAllocation(state: any, project_id: number) {
  const one = GetOneProject(state.projectData, project_id);
  if (one == null) return 0;

  if (project_id == WEFUND_ID)
    //WFD
    return parseInt(one.project_collected);

  console.log(state.address);
  for (let i = 0; i < one.whitelist.length; i++) {
    const info = one.whitelist[i];
    if (
      info.wallet == state.address &&
      parseInt(info.backed) < parseInt(info.allocation)
    ) {
      return (
        Math.floor(
          (parseInt(info.allocation) - parseInt(info.backed)) / 10 ** 6
        ) + 1
      );
    }
  }

  return 0;
}

export function isCommunityWallet(state: any) {
  if (state.communityData == "") return false;

  for (let j = 0; j < state.communityData.length; j++) {
    if (state.address == state.communityData[j]) {
      return true;
    }
  }

  return false;
}

export function isCreatorWallet(state: any, project_id: number) {
  const one = GetOneProject(state.projectData, project_id);
  if (one == "") return false;

  if (one.creator_wallet == state.address) return true;

  return false;
}

export function isBackerWallet(state: any, project_id: number) {
  const one = GetOneProject(state.projectData, project_id);
  if (one == "") return false;

  if (isCommunityWallet(state)) return false;

  for (let j = 0; j < one.backer_states.length; j++) {
    if (state.address == one.backer_states[j].backer_wallet) {
      return true;
    }
  }

  return false;
}

export function Sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function ToText(node: string) {
  const tag = document.createElement("div");
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
}

export function ShortenText(
  text: string,
  startingPoint: number,
  maxLength: number
) {
  return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
}
export function ShortenAddress(address: string) {
  if (address) {
    const prefix = address.slice(0, 5);
    const suffix = address.slice(-5);
    return prefix + "..." + suffix;
  }
  return "";
}
export function ParseParam() {
  let queryString,
    urlParams,
    project_id: string | null = null;
  if (typeof window != "undefined") {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    project_id = urlParams.get("project_id");
  }
  if (project_id == null) return 0;
  else return parseInt(project_id);
}
export function isNull(val: any) {
  if (typeof val == "undefined" || val == "") return true;
  return false;
}
export function getVal(val: any) {
  return isNull(val) ? "" : val;
}
export function getInteger(val: any) {
  return isNull(val) ? 0 : parseInt(val);
}
export function getMultiplyInteger(val: any) {
  return isNull(val) ? 0 : Math.floor(parseFloat(val) * 100);
}
export function getSeconds(val: any) {
  const month = 60 * 60 * 24 * 30;
  return getInteger(val) * month;
}
export function getMonth(val: any) {
  const month = 60 * 60 * 24 * 30;
  return getInteger(val) / month;
}
export function getStageTitle(data: any) {
  const index = parseInt(data.fundraising_stage);
  return data.vesting[index].stage_title;
}
export async function getTokenInfo(state: any, tokenAddress: string) {
  const tokenInfo = { symbol: "exmaple" };
  const balance = 0;
  // try {
  //   tokenInfo = await api.contractQuery(tokenAddress, {
  //     token_info: {},
  //   });
  //   console.log(tokenInfo);
  //   let res = await api.contractQuery(tokenAddress, {
  //     balance: { address: state.address },
  //   });
  //   console.log(res);
  //   balance = parseInt(res.balance) / 10 ** parseInt(tokenInfo.decimals);
  // } catch (e) {
  //   toast("Invalid Token Address", errorOption);
  //   return false;
  // }
  return { symbol: tokenInfo.symbol, balance: balance };
}
export function Set2Mainnet(dispatch: React.Dispatch<any>) {
  window.localStorage.setItem("net", "mainnet");
  console.log("set to mainnet");
  dispatch({
    type: "setNet",
    payload: "mainnet",
  });
}

export function Set2Testnet(dispatch: React.Dispatch<any>) {
  window.localStorage.setItem("net", "testnet");
  console.log("set to testnet");
  dispatch({
    type: "setNet",
    payload: "testnet",
  });
}

export function LookForTokenInfo(chain: string, token: string) {
  const list = TOKEN_LIST.filter(
    (one) =>
      one.chain.toLowerCase() == chain.toLowerCase() &&
      one.name.toLowerCase() == token.toLowerCase()
  );
  if (list.length == 0) return null;
  return list[0];
}
