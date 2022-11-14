import { BigNumber } from "ethers";
import numeral from "numeral";

export interface BACKER_INFO {
  addr: string;
  usdc_amount: BigNumber;
  usdt_amount: BigNumber;
  busd_amount: BigNumber;
  wfd_amount: BigNumber;
}
export interface INCUBATION_GOAL_INFO {
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  approved_date: BigNumber;
}

export interface MILESTONE_INFO {
  step: BigNumber;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  amount: BigNumber;
}

export interface TEAMMEMBER_INFO {
  teammember_name: string;
  teammember_role: string;
  teammember_linkedin: string;
  teammember_description: string;
}

export interface VOTE_INFO {
  addr: string;
  vote: boolean;
}

export interface PROJECT_INFO {
  creator_wallet: string;
  project_id: number;
  project_company: string;
  project_title: string;
  project_description: string;
  project_option: string;
  project_ecosystem: string;
  project_fundtype: string;
  project_launch: string;
  project_createddate: string;
  project_saft: string;
  project_logo: string;
  project_whitepaper: string;
  project_website: string;
  email: string;
  telegram: string;
  teammembers: string;
  token_addr: string;
  country: string;
  cofounder_name: string;

  project_collected: number;
  project_status: number;
  backerbacked_amount: number;
  backer_states: BACKER_INFO[];
  milestone_states: MILESTONE_INFO[];
  milestone_index: number;
  incubation_goals: INCUBATION_GOAL_INFO[];
  incubation_index: number;
  wefund_votes: VOTE_INFO[];
  backer_votes: VOTE_INFO[];
  teammember_states: TEAMMEMBER_INFO[];
  fund_type: string[];
  rejected: boolean;

  backer_backedPercent: number;
  releasedPercent: number;
}
