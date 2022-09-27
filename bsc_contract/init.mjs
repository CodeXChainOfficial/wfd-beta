import { ethers } from "ethers";
import fs from "fs";

const WEFUND_ABI = JSON.parse(fs.readFileSync("./build/WeFund.json"));
// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();

export const CHAINS_CONFIG = {
  rinkeby: {
    chainId: "0x4",
    chainName: "Rinkeby",
    rpc: "https://rpc.ankr.com/eth_rinkeby",
  },
  bsc: {
    chainId: "0x38",
    chainName: "Binance Smart Chain",
    rpc: "https://bsc-dataseed4.binance.org",
  },
  polygon: {
    chainId: "0x89",
    chainName: "Polygon",
    rpc: "https://matic-mainnet.chainstacklabs.com",
  },
  oneledger: {
    chainId: "0x1294f7c2",
    chainName: "OneLedger",
    rpc: "https://mainnet-rpc.oneledger.network",
  },
  fantom: {
    chainId: "0xFA",
    chainName: "Fantom",
    rpc: "https://rpc2.fantom.network",
  },
};

const pk = process.env.PK;

async function main() {
  const WEFUND_CONTRACT = "0x003F0Cae69d7a28Bf9157c8cC27D466e00cA965e";
  const provider = new ethers.providers.JsonRpcProvider(
    CHAINS_CONFIG.rinkeby.rpc
  );
  if (!pk) return;
  const signer = new ethers.Wallet(pk, provider);
  const contract = new ethers.Contract(WEFUND_CONTRACT, WEFUND_ABI.abi, signer);

  let res;
  // res = await contract.setTokenAddress(
  //   "0xd92e713d051c37ebb2561803a3b5fbabc4962431",
  //   "0x6ee856ae55b6e1a249f04cd3b947141bc146273c",
  //   "0x16c550a97ad2ae12c0c8cf1cc3f8db4e0c45238f"
  // );
  // console.log(res);
  // await res.wait();

  // res = await contract.getProjectInfo();
  // console.log(res);

  // res = await contract.initialize();
  // console.log(res);

  // res = await contract.addProject(600000, [
  //   [0, "1", "", "2022-03-1", "2022-03-31", "600000", "0", []],
  // ]);
  // console.log("1");

  // res = await contract.addProject(390000, [
  //   [0, "1", "", "2022-03-1", "2022-03-31", "390000", "0", []],
  // ]);
  // await res.wait();
  // console.log("2");

  // res = await contract.addProject(250000, [
  //   [0, "1", "", "2022-03-1", "2022-03-31", "250000", "0", []],
  // ]);
  // await res.wait();
  // console.log("3");

  // res = await contract.addProject(600000, [
  //   [0, "1", "", "2022-03-1", "2022-03-31", "600000", "0", []],
  // ]);
  // await res.wait();
  // console.log("4");

  // res = await contract.addProject(120000, [
  //   [0, "1", "", "2022-03-1", "2022-03-31", "120000", "0", []],
  // ]);
  // await res.wait();
  // console.log("5");

  // res = await contract.addProject(120000, [
  //   [0, "1", "", "2022-03-1", "2022-03-31", "120000", "0", []],
  // ]);
  // await res.wait();
  // console.log("6");

  res = await contract.addProject(4080000, [
    [0, "1", "", "2022-03-1", "2022-03-31", "4080000", "0", []],
  ]);
  await res.wait();
  console.log("7");

  res = await contract.addProject(120000, [
    [0, "1", "", "2022-03-1", "2022-03-31", "120000", "0", []],
  ]);
  await res.wait();
  console.log("8");
}
main();
