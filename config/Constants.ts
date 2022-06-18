export const NETWORK = "mainnet";
export const WEFUND_ID = 1;
export const REQUEST_ENDPOINT =
  "https://wefund-nodejs-gwb6v.ondigitalocean.app";

export const WEFUND_JUNO_ADDRESS =
  "juno1gc3lpde7nx8khqfafw3st7j4ptd6qfccu6y04a";
export const WEFUND_BSC_ADDRESS = "0x0dc488021475739820271d595a624892264ca641";
export const WEFUND_TRON_WALLET = "TJ512gBWfie4ett3u8nmyYeuZHQXDamcuQ";
export const WEFUND_POLYGON_WALLET =
  "0x10411e941395301eecea63bc068383b801e01e0a";
export const WEFUND_TRUST_BNB_WALLET =
  "bnb1na0j6fvjwgxrd4g6stu32wquwgce54msly0tth";

export const successOption: any = {
  position: "bottom-right",
  type: "success",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const errorOption: any = {
  position: "bottom-right",
  type: "error",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const TOKEN_LIST = [
  {
    chain: "Juno",
    name: "JUNO",
    denom: NETWORK == "mainnet" ? "ujuno" : "ujunox",
    decimals: 6,
    native: true,
  },
  {
    chain: "Juno",
    name: "USDC",
    denom: "ibc/EAC38D55372F38F1AFD68DF7FE9EF762DCF69F26520643CF3F9D292A738D8034",
    decimals: 6,
    native: true,
  },
  {
    chain: "BSC",
    name: "BNB",
    denom: "BNB",
    decimals: 18,
    native: true,
  },
  {
    chain: "BSC",
    name: "USDC",
    decimals: 18,
    native: false,
    address:
      NETWORK == "mainnet"
        ? "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"
        : "0x64544969ed7EBf5f083679233325356EbE738930",
  },
  {
    chain: "BSC",
    name: "USDT",
    decimals: 18,
    native: false,
    address:
      NETWORK == "mainnet"
        ? "0x55d398326f99059ff775485246999027b3197955"
        : "0x49d5cC521F75e13fa8eb4E89E9D381352C897c96",
  },
  // {
  //   chain: "BSC",
  //   name: "USDT",
  //   decimals: 6,
  //   native: false,
  //   address: "0x49d5cC521F75e13fa8eb4E89E9D381352C897c96",
  // },
  {
    chain: "Tron",
    name: "TRX",
    decimals: 6,
    native: true,
  },
  {
    chain: "Tron",
    name: "USDD",
    decimals: 6,
    native: false,
    address: "TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn",
  },
  {
    chain: "Tron",
    name: "USDT",
    decimals: 6,
    native: false,
    address:
      NETWORK == "mainnet"
        ? "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
        : "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs",
  },
];
export const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount)",
  "event Transfer(address indexed from, address indexed to, uint amount)",
];

export const WEFUND: any = {
  project_status: "WefundVote",
  backerbacked_amount: "180000000000",

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
  project_id: "1",
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
