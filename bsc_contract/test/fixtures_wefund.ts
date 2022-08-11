import chai from "chai";
import { deployContract, solidity } from "ethereum-waffle";
import { Contract, providers, Wallet } from "ethers";

import WeFund from "../build/WeFund.json";

chai.use(solidity);

interface WeFundFixture {
  wefund: Contract;
}

const overrides = {
  gasLimit: 9999999,
};

export async function wefundFixture(
  [wallet]: Wallet[],
  _: providers.Web3Provider
): Promise<WeFundFixture> {
  const wefund = await deployContract(wallet, WeFund, [], overrides);
  await wefund.initialize();
  return { wefund };
}
