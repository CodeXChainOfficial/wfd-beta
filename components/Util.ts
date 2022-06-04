import React from "react";
import { toast } from "react-toastify";
import { wefundId } from "./Constants";

export const successOption: any = {
  position: "top-right",
  type: "success",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const errorOption: any = {
  position: "top-right",
  type: "error",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export async function EstimateSend(msgs: any, message: string, memo = "") {}

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
  return true;
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
  return { projectData, communityData, configData };
}
export function GetOneProject(projectData: any, project_id: any) {
  if (projectData == "") return "";
  const isProject = (element: any) => element.project_id == project_id;
  const index = projectData?.findIndex(isProject);
  if (index == -1) return "";
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
  if (project_id == wefundId)
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
  if (project_id == wefundId)
    //WFD
    return parseInt(one.project_collected);

  if (one == "") return 0;

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
    message: "mainnet",
  });
}

export function Set2Testnet(dispatch: React.Dispatch<any>) {
  window.localStorage.setItem("net", "testnet");
  console.log("set to testnet");
  dispatch({
    type: "setNet",
    message: "testnet",
  });
}

const WEFUND = {
  project_status: "WefundVote",
  backerbacked_amount: 0,

  cofounder_name: "",
  country: "",
  creator_wallet: "terra1qvyj7tqs35hckd395rglc7lsyf2acuhgdcmj77",
  project_collected: "600000",
  project_company: "A.I WeFund",
  project_createddate: "28/3/2022",
  project_description:
    "WeFund is a community crowdfunding incubator for blockchain and real-world projects. WeFund's mission is to host high-quality projects that align with WeFund's investor community. Community-driven decisions on the platform for 100% transparency. Project funds managed exclusively on Terra's Anchor protocol using smart contracts and following project milestones.\n\n",
  project_ecosystem: "Terra",
  project_email: "",
  project_id: "0",
  project_logo: "",
  project_milestones: [
    {
      milestone_amount: "600000",
      milestone_description: "",
      milestone_enddate: "2022-03-31",
      milestone_name: "1",
      milestone_startdate: "2022-03-01",
      milestone_status: "0",
      milestone_step: "0",
      milestone_type: "1",
      milestone_votes: [],
    },
  ],
  project_saft: "WeFund_SAFT.docx",
  project_teammembers: [
    {
      teammember_description:
        "He is the person behind the development of the Fan$quad smart contract that was deployed on Col-4 during the hackathon organized by Terraform Labs. He has a wealth of experience in coding, with a deep understanding of C, C++, Javascript, VBA, Java, Python, Rust language (to name a few). In 2018 he moved his focus into Solidity, PHP, & HTML 5, to follow his vision of creating advanced Web 3.0 applications integrated with the blockchain. His role is to ensure delivery of smart contracts, web app, and technical infrastructure, as well as managing the business side of the project. From the business side, he had several businesses before such as a Natural Mosquito Solution based on Bali, hotel & restaurant (Ristorante-Bar Lanca) in Switzerland, and a smart-home startup to reduce electricity consumption. Most of the businesses he founded had an ROI within less than 1 year.\n\n",
      teammember_linkedin: "",
      teammember_name: "Andrea Bello ",
      teammember_role: "Co-Founder & CEO & Co-CTO",
    },
    {
      teammember_description:
        "A dynamic individual who worked at Tencent as an operation specialist, in the partnership division. Before Tencent, she was senior partnership manager at Bigo. She previously held a senior account executive position at one of the digital marketing agencies under Jet Group and was a manager at Waves, who successfully helped founders to raise $1.2M in pre-seed funding, before turning her attention to crypto. She is one of the founding partners and driving forces behind the concept of WeFund. She was on the core team behind the hackathon project of Fan$quad together with the other ex co-founder.\n\n",
      teammember_linkedin: "",
      teammember_name: "Ika Afifah ",
      teammember_role: "Co-Founder & CMO",
    },
    {
      teammember_description:
        "World explorer, entrepreneur, and blockchain technology enthusiast. Came from a career in Silicon Valley building web applications during the dot-com boom. Wanting to do it all over again, this time helping to build Web 3.0.\n\n",
      teammember_linkedin: "",
      teammember_name: "Jason Galvin ",
      teammember_role: "Co-CTO",
    },
    {
      teammember_description:
        "Comes from a background in investment and corporate finance. After completing his education, he worked as a Business Analyst for a large tech company in Seattle, Washington USA building AI applications to identify high-risk sale transactions. He now is an Investment Manager for a prestigious silicon valley venture capital firm located in Jakarta, Indonesia managing investment deals in the Southeast Asia region.\n\n",
      teammember_linkedin: "",
      teammember_name: "Austin Taylor ",
      teammember_role: "COO",
    },
  ],
  project_title: "WeFund",
  project_website: "",
  project_whitepaper: "",
  service_charity: "0",
  service_wefund: "5",
  professional_link: "",
  token_addr: "",
  vesting: [
    {
      stage_after: "0",
      stage_amount: "0",
      stage_period: "0",
      stage_price: "0",
      stage_soon: "0",
      stage_title: "Seed",
    },
  ],
};
