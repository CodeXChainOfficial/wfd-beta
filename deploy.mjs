import { readFileSync } from "fs";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Decimal } from "@cosmjs/math";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

const VESTING_PATH = "../vesting.wasm";
const WEFUND_PATH = "../wefund.wasm";
const STAKING_PATH = "../staking.wasm";

// Get the wallet seed phrase from the environment variable.
const JUNO_SEED = process.env.JUNO_SEED;

async function getClient() {
  const signer = await DirectSecp256k1HdWallet.fromMnemonic(JUNO_SEED, {
    prefix: "juno",
  });

  const rpc = "https://rpc.uni.juno.deuslabs.fi";
  const client = await SigningCosmWasmClient.connectWithSigner(rpc, signer, {
    gasPrice: {
      amount: Decimal.fromUserInput("0.025", 100), //Decimal.fromUserInput("0.0025", 100),
      denom: "ujunox",
    },
  });
  return { signer, client };
}

const WFD_TOKEN =
  "juno17tk7s9mg2a6uupfljrhf492e7hzhkd89cvzerglyj8xguvzukksq9d75ts";

let WEFUND_CONTRACT =
  "juno10p7f08tjglvghhdpedwhfaqurjevvdgcya5cga9kn9j4z6s4sp8sxxqf8m";
let VESTING_CONTRACT =
  "juno160kmu4rssf8fgl83zwvy5fxryedy3r8ke6arg402vk0qspa5fr7qdyleuv";
let STAKING_CONTRACT =
  "juno1xgkahp7cgt53394svy9zxhma82l4a6du6j6sp75rnvqr7t6cgsqss3ve43";

run();

async function run() {
  if (VESTING_CONTRACT == "") {
    console.log("Deploying Vesting Contract");
    const vestingCodeId = await upload(VESTING_PATH);
    console.log("instantiating vesting contract");

    VESTING_CONTRACT = await instantiate(vestingCodeId, {});
    console.log(VESTING_CONTRACT);
  }
  if (WEFUND_CONTRACT == "") {
    console.log("Deploying WeFund contract");
    const wefundCodeId = await upload(WEFUND_PATH);
    console.log("instantiating wefund contract");

    WEFUND_CONTRACT = await instantiate(wefundCodeId, {});
  }
  if (STAKING_CONTRACT == "") {
    console.log("Deploying Staking contract");
    const stakingCodeId = await upload(STAKING_PATH);
    console.log("instantiating Staking contract");

    STAKING_CONTRACT = await instantiate(stakingCodeId, {
      reward_token: WFD_TOKEN,
    });
  }

  console.log("configuring");
  await config();

  console.log("reading contract");
  const { signer, client } = await getClient();
  let result = await client.queryContractSmart(VESTING_CONTRACT, {
    get_owner: {},
  });
  console.log(result);

  result = await client.queryContractSmart(WEFUND_CONTRACT, { get_config: {} });
  console.log(result);

  result = await client.queryContractSmart(STAKING_CONTRACT, {
    get_token_address: {},
  });
  console.log(result);
}

async function config() {
  console.log("vesting_contract:" + VESTING_CONTRACT);
  console.log("wefund_contract:" + WEFUND_CONTRACT);
  console.log("staking_contract:" + WEFUND_CONTRACT);

  const { signer, client } = await getClient();
  const address = (await signer.getAccounts())[0].address;

  try {
    const result = await client.execute(
      address,
      VESTING_CONTRACT,
      { set_config: { admin: WEFUND_CONTRACT } },
      "auto"
    );
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }

  try {
    const result = await client.execute(
      address,
      WEFUND_CONTRACT,
      {
        set_config: {
          vesting_contract: VESTING_CONTRACT,
          denom: "ujunox-uni3",
          decimals: "6",
        },
      },
      "auto"
    );
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }

  try {
    const result = await client.execute(
      address,
      WEFUND_CONTRACT,
      initMsg,
      "auto"
    );
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
}

async function upload(contractPath) {
  try {
    const { signer, client } = await getClient();
    const address = (await signer.getAccounts())[0].address;
    const wasm = readFileSync(contractPath);

    const result = await client.upload(address, wasm, "auto");
    console.log(result);
    return result.codeId;
  } catch (error) {
    console.error("Error:" + error);
    process.exit(1);
  }
}

async function instantiate(codeId, instantiateMsg) {
  try {
    const { signer, client } = await getClient();
    const address = (await signer.getAccounts())[0].address;

    const result = await client.instantiate(
      address,
      codeId,
      instantiateMsg,
      "Instantiate",
      "auto"
      // {
      //   memo: "",
      //   admin,
      // }
    );
    console.log(result);
    return result.contractAddress;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default {};

export const initMsg = {
  add_project: {
    cofounder_name: "",
    country: "",
    creator_wallet: "juno12v06zrrhw0vs83t83svsddgl4ndfmk9c327gsu",
    project_collected: "600000",
    project_company: "A.I WeFund",
    project_createddate: "28/3/2022",
    project_description:
      "WeFund is a community crowdfunding incubator for blockchain and real-world projects. WeFund's mission is to host high-quality projects that align with WeFund's investor community. Community-driven decisions on the platform for 100% transparency. Project funds managed exclusively on Terra's Anchor protocol using smart contracts and following project milestones.\n\n",
    project_ecosystem: "Juno",
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
  },
};
