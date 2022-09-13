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

  const rpc = "https://rpc.juno-1.deuslabs.fi";
  const client = await SigningCosmWasmClient.connectWithSigner(rpc, signer, {
    gasPrice: {
      amount: Decimal.fromUserInput("0.0025", 100),
      denom: "ujuno",
    },
  });

  // const rpc = "https://rpc.uni.juno.deuslabs.fi";
  // const client = await SigningCosmWasmClient.connectWithSigner(rpc, signer, {
  //   gasPrice: {
  //     amount: Decimal.fromUserInput("0.025", 100), //Decimal.fromUserInput("0.0025", 100),
  //     denom: "ujunox",
  //   },
  // });
  return { signer, client };
}

const WFD_TOKEN =
  "juno1x329zfyakxz9sl6a46ef9snajjcgjrykq8sje4lpj06r24trgvxqj42edl";

let WEFUND_CONTRACT =
  "juno1l688mmqawz74thcvxy9zjxqk3pcsc333cjh8cnmt4yr2xh246tzs59jpgu";
let VESTING_CONTRACT =
  "juno1qwxuxeg5q7gedvdzxssf84hw3xm9ql08jqt9t7h97d030rajjqkst4femg";
let STAKING_CONTRACT =
  "juno1j7jzwxjnvuq25c0kr8xnxndxmvlzn3lft6q6utn33zykuq2xysds4w7g93";

// Test net
// const WFD_TOKEN =
//   "juno17tk7s9mg2a6uupfljrhf492e7hzhkd89cvzerglyj8xguvzukksq9d75ts";

// let WEFUND_CONTRACT =
//   "juno13kudszzwfejy3qej4kzqp26gt2ph3nx4h4r388qq7wjhjql0lljs0j58v7";
// let VESTING_CONTRACT =
//   "juno108njn5xsurvg7ce882m92m6yy2l80r8zmk9q62kkxjhk44ea7mxqreuc52";
// let STAKING_CONTRACT =
//   "juno1ru0euvqln9ax686aev4lut0tjxq6a9u4lp8t63sgy3rugprjejjsqc3dzf";

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
  console.log("staking_contract:" + STAKING_CONTRACT);

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
          denom: "ujunox",
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
    for (let i = 0; i < initMsgs.length; i++) {
      const result = await client.execute(
        address,
        WEFUND_CONTRACT,
        initMsgs[i],
        "auto"
      );
      console.log(result);
    }
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

export const initMsgs = [
  {
    add_project: {
      project_title: "WeFund",
      project_logo: "/media/logo.png",
      cofounder_name: "",
      country: "",
      creator_wallet: "juno12v06zrrhw0vs83t83svsddgl4ndfmk9c327gsu",
      project_collected: "600000",
      project_company: "A.I WeFund",
      project_createddate: "28/3/2022",
      project_description:
        "WeFund is a community crowdfunding incubator for blockchain and real-world projects. WeFund's mission is to host high-quality projects that align with WeFund's investor community. Community-driven decisions on the platform for 100% transparency. Project funds managed exclusively on Terra's Anchor protocol using smart contracts and following project milestones.\n\n",
      project_ecosystem: "Juno",
      project_fundtype: "Token",
      project_email: "",
      project_id: "0",
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
          teammember_name: "Andrea Bello",
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
  },
  {
    add_project: {
      project_title: "Lynxverse",
      project_logo: "/media/partners/lynx-dark.png",
      cofounder_name: "",
      country: "",
      creator_wallet: "juno12v06zrrhw0vs83t83svsddgl4ndfmk9c327gsu",
      project_collected: "3900000",
      project_company: "A.I WeFund",
      project_createddate: "28/3/2022",
      project_description:
        "Lynxverse is a cognitive behavioral therapy metaverse game with play-to-earn, share-to earn, and learn-to-earn components, where users can raise awareness and educate themselves about mental health and well-being while remaining anonymous and earning rewards.\n\n",
      project_ecosystem: "Juno",
      project_fundtype: "Token",
      project_email: "",
      project_id: "0",
      project_milestones: [
        {
          milestone_amount: "3900000",
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
          teammember_name: "Ika Afifah ",
          teammember_role: "Co-Founder & CEO & Co-CTO",
          teammember_linkedin: "",
          teammember_description:
            "A dynamic individual who worked at Tencent as an operation specialist, in the partnership division. Before Tencent, she was senior partnership manager at Bigo. She previously held a senior account executive position at one of the digital marketing agencies under Jet Group and was a manager at Waves, who successfully helped founders to raise $1.2M in pre-seed funding, before turning her attention to crypto. She is one of the founding partners and driving forces behind the concept of WeFund. She was on the core team behind the hackathon project of Fan$quad together with the other ex co-founder.\n\n",
        },
        {
          teammember_name: "Andrea Bello ",
          teammember_role: "Co-Founder & CMO",
          teammember_linkedin: "",
          teammember_description:
            "He is the person behind the development of the Fan$quad smart contract that was deployed on Col-4 during the hackathon organized by Terraform Labs. He has a wealth of experience in coding, with a deep understanding of C, C++, Javascript, VBA, Java, Python, Rust language (to name a few). In 2018 he moved his focus into Solidity, PHP, & HTML 5, to follow his vision of creating advanced Web 3.0 applications integrated with the blockchain. His role is to ensure delivery of smart contracts, web app, and technical infrastructure, as well as managing the business side of the project. From the business side, he had several businesses before such as a Natural Mosquito Solution based on Bali, hotel & restaurant (Ristorante-Bar Lanca) in Switzerland, and a smart-home startup to reduce electricity consumption. Most of the businesses he founded had an ROI within less than 1 year.\n\n",
        },
        {
          teammember_name: "Achuth Chandran",
          teammember_role: "CFO",
          teammember_linkedin: "",
          teammember_description:
            "World explorer, entrepreneur, and blockchain technology enthusiast. Came from a career in Silicon Valley building web applications during the dot-com boom. Wanting to do it all over again, this time helping to build Web 3.0.\n\n",
        },
      ],
      project_website: "https://www.lynxverse.io/",
      project_whitepaper: "https://drive.google.com/drive/folders/14jpNLvk2HrzbvN2Wf9krzOuMUxIe0lAq",
      service_charity: "0",
      service_wefund: "5",
      professional_link: "",
      token_addr: "",
      vesting: [
        {
          stage_after: "5",
          stage_amount: "1900000",
          stage_period: "0",
          stage_price: "0",
          stage_soon: "0",
          stage_title: "Pre Seed",
        },
        {
          stage_after: "5",
          stage_amount: "2000000",
          stage_period: "0",
          stage_price: "0",
          stage_soon: "0",
          stage_title: "Seed",
        },
      ],
    },
  },
  {
    add_project: {
      project_title: "Kosu",
      project_logo: "/media/partners/Kosu.png",
      cofounder_name: "",
      country: "",
      creator_wallet: "juno12v06zrrhw0vs83t83svsddgl4ndfmk9c327gsu",
      project_collected: "250000",
      project_company: "A.I WeFund",
      project_createddate: "28/3/2022",
      project_description:
        "Kosu is a blockchain-based education platform with user-created content focused on blockchain education. Creators and users can both generate income with a create-to-earn and learn-to-earn model.",
      project_ecosystem: "Kadena",
      project_fundtype: "Token",
      project_email: "",
      project_id: "0",
      project_milestones: [
        {
          milestone_amount: "250000",
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
          teammember_name: "Langston Hues",
          teammember_role: "Co-Founder & CEO",
          teammember_linkedin: "",
          teammember_description: "\n",
        },
        {
          teammember_name: "Idris Dave",
          teammember_role: "Co-Founder & CTO",
          teammember_linkedin: "",
          teammember_description: "\n",
        },
        {
          teammember_name: "Utari Try Siswi",
          teammember_role: "CMO",
          teammember_linkedin: "",
          teammember_description: "\n",
        },
        {
          teammember_name: "Mohammed Yacoob",
          teammember_role: "COO",
          teammember_linkedin: "",
          teammember_description: "\n",
        },
        {
          teammember_name: "Stephen Onoja",
          teammember_role: "Blockchain Development",
          teammember_linkedin: "",
          teammember_description: "",
        },
        {
          teammember_name: "Iris Strovanoga",
          teammember_role: "Public Relations",
          teammember_linkedin: "",
          teammember_description: "",
        },
      ],
      project_website: "https://kosu.space/",
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
  },
  {
    add_project: {
      project_title: "Green Protocol",
      project_logo: "/media/partners/Greenprotocol.png",
      cofounder_name: "",
      country: "",
      creator_wallet: "juno12v06zrrhw0vs83t83svsddgl4ndfmk9c327gsu",
      project_collected: "600000",
      project_company: "A.I WeFund",
      project_createddate: "28/3/2022",
      project_description:
        "The sale of GreenProtocol NFTs will be used to fund green and sustainable projects. The revenue generated from these projects will be distributed to the NFT holders as passive income via smart contract.",
      project_ecosystem: "Juno",
      project_fundtype: "Token",
      project_email: "",
      project_id: "0",
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
          teammember_name: "Andrea Bello ",
          teammember_role: "Co-Founder & CEO & Co-CTO",
          teammember_linkedin: "",
          teammember_description:
            "He is the person behind the development of the Fan$quad smart contract that was deployed on Col-4 during the hackathon organized by Terraform Labs. He has a wealth of experience in coding, with a deep understanding of C, C++, Javascript, VBA, Java, Python, Rust language (to name a few). In 2018 he moved his focus into Solidity, PHP, & HTML 5, to follow his vision of creating advanced Web 3.0 applications integrated with the blockchain. His role is to ensure delivery of smart contracts, web app, and technical infrastructure, as well as managing the business side of the project. From the business side, he had several businesses before such as a Natural Mosquito Solution based on Bali, hotel & restaurant (Ristorante-Bar Lanca) in Switzerland, and a smart-home startup to reduce electricity consumption. Most of the businesses he founded had an ROI within less than 1 year.\n\n",
        },
        {
          teammember_name: "Ika Afifah ",
          teammember_role: "Co-Founder & CMO",
          teammember_linkedin: "",
          teammember_description:
            "A dynamic individual who worked at Tencent as an operation specialist, in the partnership division. Before Tencent, she was senior partnership manager at Bigo. She previously held a senior account executive position at one of the digital marketing agencies under Jet Group and was a manager at Waves, who successfully helped founders to raise $1.2M in pre-seed funding, before turning her attention to crypto. She is one of the founding partners and driving forces behind the concept of WeFund. She was on the core team behind the hackathon project of Fan$quad together with the other ex co-founder.\n\n",
        },
        {
          teammember_name: "Jason Galvin ",
          teammember_role: "Co-CTO",
          teammember_linkedin: "",
          teammember_description:
            "World explorer, entrepreneur, and blockchain technology enthusiast. Came from a career in Silicon Valley building web applications during the dot-com boom. Wanting to do it all over again, this time helping to build Web 3.0.\n\n",
        },
        {
          teammember_name: "Austin Taylor ",
          teammember_role: "COO",
          teammember_linkedin: "",
          teammember_description:
            "Comes from a background in investment and corporate finance. After completing his education, he worked as a Business Analyst for a large tech company in Seattle, Washington USA building AI applications to identify high-risk sale transactions. He now is an Investment Manager for a prestigious silicon valley venture capital firm located in Jakarta, Indonesia managing investment deals in the Southeast Asia region.\n\n",
        },
      ],
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
  },
  {
    add_project: {
      project_title: "Data Lake",
      project_logo: "/media/partners/Datalake.png",
      cofounder_name: "",
      country: "",
      creator_wallet: "juno12v06zrrhw0vs83t83svsddgl4ndfmk9c327gsu",
      project_collected: "1200000",
      project_company: "A.I WeFund",
      project_createddate: "28/3/2022",
      project_description:
        "DataLake is a medical record database where individuals can sell their medical data privately and anonymously to research institutions on the blockchain via DataLake’s platform.",
      project_ecosystem: "Juno",
      project_fundtype: "Token",
      project_email: "",
      project_id: "0",
      project_milestones: [
        {
          milestone_amount: "1200000",
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
          teammember_name: "Wojtek Sierocki",
          teammember_role: "CEO",
          teammember_linkedin: "",
          teammember_description: "\n",
        },
        {
          teammember_name: "Ligia Kornowska",
          teammember_role: "Board President",
          teammember_linkedin: "",
          teammember_description: "\n",
        },
        {
          teammember_name: "Adrian Łojek",
          teammember_role: "Head of Tokenization",
          teammember_linkedin: "",
          teammember_description: "\n\n",
        },
        {
          teammember_name: "Dinidh O'Brien",
          teammember_role: "Head of Marketing",
          teammember_linkedin: "",
          teammember_description: "\n",
        },
        {
          teammember_name: "Damian Pawlowski",
          teammember_role: "Influecner and Investor manager",
          teammember_linkedin: "",
          teammember_description: "",
        },
        {
          teammember_name: "Paweł Wojtaszczyk",
          teammember_role: "Business Development Manager",
          teammember_linkedin: "",
          teammember_description: "",
        },
        {
          teammember_name: "Mariusz Jarząbek",
          teammember_role: "Senior Front-End Developer",
          teammember_linkedin: "",
          teammember_description: "",
        },
      ],
      project_website: "https://data-lake.co/",
      project_whitepaper: "",
      service_charity: "0",
      service_wefund: "5",
      professional_link: "",
      token_addr: "",
      vesting: [
        {
          stage_after: "0",
          stage_amount: "120000",
          stage_period: "0",
          stage_price: "0",
          stage_soon: "0",
          stage_title: "Private",
        },
      ],
    },
  },
  {
    add_project: {
      project_title: "Scam Scanner",
      project_logo: "/media/partners/Scamscanner.png",
      cofounder_name: "",
      country: "",
      creator_wallet: "juno12v06zrrhw0vs83t83svsddgl4ndfmk9c327gsu",
      project_collected: "1200000",
      project_company: "A.I WeFund",
      project_createddate: "28/3/2022",
      project_description:
        "ScamScanner is a tool designed to identify scam activity in various blockchain networks by examining projects and teams via a validator system and reward whistleblowers.",
      project_ecosystem: "Juno",
      project_fundtype: "Token",
      project_email: "",
      project_id: "0",
      project_milestones: [
        {
          milestone_amount: "1200000",
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
          teammember_name: "Andrea Bello ",
          teammember_role: "Co-Founder & CEO & Co-CTO",
          teammember_linkedin: "",
          teammember_description:
            "He is the person behind the development of the Fan$quad smart contract that was deployed on Col-4 during the hackathon organized by Terraform Labs. He has a wealth of experience in coding, with a deep understanding of C, C++, Javascript, VBA, Java, Python, Rust language (to name a few). In 2018 he moved his focus into Solidity, PHP, & HTML 5, to follow his vision of creating advanced Web 3.0 applications integrated with the blockchain. His role is to ensure delivery of smart contracts, web app, and technical infrastructure, as well as managing the business side of the project. From the business side, he had several businesses before such as a Natural Mosquito Solution based on Bali, hotel & restaurant (Ristorante-Bar Lanca) in Switzerland, and a smart-home startup to reduce electricity consumption. Most of the businesses he founded had an ROI within less than 1 year.\n\n",
        },
        {
          teammember_name: "Ika Afifah ",
          teammember_role: "Co-Founder & CMO",
          teammember_linkedin: "",
          teammember_description:
            "A dynamic individual who worked at Tencent as an operation specialist, in the partnership division. Before Tencent, she was senior partnership manager at Bigo. She previously held a senior account executive position at one of the digital marketing agencies under Jet Group and was a manager at Waves, who successfully helped founders to raise $1.2M in pre-seed funding, before turning her attention to crypto. She is one of the founding partners and driving forces behind the concept of WeFund. She was on the core team behind the hackathon project of Fan$quad together with the other ex co-founder.\n\n",
        },
        {
          teammember_name: "Jason Galvin ",
          teammember_role: "Co-CTO",
          teammember_linkedin: "",
          teammember_description:
            "World explorer, entrepreneur, and blockchain technology enthusiast. Came from a career in Silicon Valley building web applications during the dot-com boom. Wanting to do it all over again, this time helping to build Web 3.0.\n\n",
        },
        {
          teammember_name: "Austin Taylor ",
          teammember_role: "COO",
          teammember_linkedin: "",
          teammember_description:
            "Comes from a background in investment and corporate finance. After completing his education, he worked as a Business Analyst for a large tech company in Seattle, Washington USA building AI applications to identify high-risk sale transactions. He now is an Investment Manager for a prestigious silicon valley venture capital firm located in Jakarta, Indonesia managing investment deals in the Southeast Asia region.\n\n",
        },
      ],
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
          stage_title: "Private",
        },
      ],
    },
  },
];
