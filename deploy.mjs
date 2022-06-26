import { readFileSync } from "fs";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Decimal } from "@cosmjs/math";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

const VESTING_PATH = "../vesting.wasm";
const WEFUND_PATH = "../wefund.wasm";
const STAKING_PATH = "../staking.wasm";

// Get the wallet seed phrase from the environment variable.
const JUNO_SEED = process.env.JUNO_SEED;
const WFD_TOKEN =
  "juno17tk7s9mg2a6uupfljrhf492e7hzhkd89cvzerglyj8xguvzukksq9d75ts";

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

let wefundAddress =
  "juno10p7f08tjglvghhdpedwhfaqurjevvdgcya5cga9kn9j4z6s4sp8sxxqf8m";
let vestingAddress =
  "juno1p85dqt555gnalnca7lppf2kukzmfatj7zvhgvlvu6vhk7l2f46gqyyj9aq";
let stakingAddress =
  "juno1xgkahp7cgt53394svy9zxhma82l4a6du6j6sp75rnvqr7t6cgsqss3ve43";

run();

async function run() {
  if (vestingAddress == "") {
    console.log("Deploying Vesting Contract");
    const vestingCodeId = await upload(VESTING_PATH);
    console.log("instantiating vesting contract");

    vestingAddress = await instantiate(vestingCodeId, {});
    console.log(vestingAddress);
  }
  if (wefundAddress == "") {
    console.log("Deploying WeFund contract");
    const wefundCodeId = await upload(WEFUND_PATH);
    console.log("instantiating wefund contract");

    wefundAddress = await instantiate(wefundCodeId, {});
  }
  if (stakingAddress == "") {
    console.log("Deploying Staking contract");
    const stakingCodeId = await upload(STAKING_PATH);
    console.log("instantiating Staking contract");

    stakingAddress = await instantiate(stakingCodeId, {
      reward_token: WFD_TOKEN,
    });
  }

  console.log("configuring");
  await config();

  console.log("reading contract");
  const { signer, client } = await getClient();
  let result = await client.queryContractSmart(vestingAddress, {
    get_owner: {},
  });
  console.log(result);

  result = await client.queryContractSmart(wefundAddress, { get_config: {} });
  console.log(result);

  result = await client.queryContractSmart(stakingAddress, {
    get_token_address: {},
  });
  console.log(result);
}

async function config() {
  console.log("vesting_contract:" + vestingAddress);
  console.log("wefund_contract:" + wefundAddress);
  console.log("staking_contract:" + wefundAddress);

  const { signer, client } = await getClient();
  const address = (await signer.getAccounts())[0].address;

  try {
    const result = await client.execute(
      address,
      vestingAddress,
      { set_config: { admin: wefundAddress } },
      "auto"
    );
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }

  try {
    const result = await client.execute(
      address,
      wefundAddress,
      {
        set_config: {
          vesting_contract: vestingAddress,
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
