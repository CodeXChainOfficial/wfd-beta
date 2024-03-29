import React from "react";
import { toast } from "react-toastify";
import {
  WEFUND_ID,
  WEFUND_WALLET,
  TOKEN_LIST,
  SUCCESS_OPTION,
  NETWORK,
} from "../config/constants";

export function GetProjectStatusText(mode: number) {
  const projectStatus = [
    "DocumentValuation",
    "IntroCall",
    "IncubationGoalSetup",
    "IncubationGoal",
    "MilestoneSetup",
    "CrowdFundraising",
    "MilestoneRelease",
    "Completed",
  ];

  return projectStatus[mode];
}

export function checkBscConnection(state: any) {
  const t_chainId = NETWORK == "mainnet" ? 0x38 : 0x61;
  if (state.walletType != "metamask" || state.wallet.chainId != t_chainId) {
    toast("Please connect to BSC Network");
    return false;
  }

  return true;
}
export function checkNetwork(state: any) {
  if (state.walletType == undefined || state.wallet == null) {
    toast("Please connect to wallet", SUCCESS_OPTION);
    return false;
  }

  return true;
}

export function GetProjectIndex(projectData: any, project_id: number) {
  const isProject = (element: any) => element.project_id == project_id;
  const index = projectData.findIndex(isProject);
  return index;
}

export function GetOneProject(projectData: any, project_id: number) {
  if (projectData == null) return null;
  const isProject = (element: any) =>
    parseInt(element.project_id) == project_id;
  const index = projectData?.findIndex(isProject);
  if (index == -1) return null;
  return projectData[index];
}

export function isCardHolder(state: any, project_id: number) {
  if (state.cardInfo == undefined) return false;

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

export function isCommunityWallet(state: any) {
  if (state.communityData == "") return false;
  const address = state.junoConnection?.account;
  for (let j = 0; j < state.communityData.length; j++) {
    if (address == state.communityData[j]) {
      return true;
    }
  }

  return false;
}

export function isCreatorWallet(state: any, project_id: number) {
  const one = GetOneProject(state.projectData, project_id);
  if (one == "") return false;

  if (one.creator_wallet == state.junoConnection?.account) return true;

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
export function ParseParam(key: string) {
  let queryString,
    urlParams,
    result: string | null = null;
  if (typeof window != "undefined") {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    result = urlParams.get(key);
  }
  return result;
}
export function ParseParam_Address() {
  return ParseParam("address");
}
export function ParseParam_ProjectId() {
  const result = ParseParam("project_id");
  if (result == null) {
    if (typeof window != "undefined") {
      const res = window.localStorage.getItem("project_id");
      if (res == null) return 0;
      else return parseInt(res);
    } else return 0;
  } else {
    return parseInt(result);
  }
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
