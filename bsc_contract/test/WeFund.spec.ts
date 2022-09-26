import chai from "chai";
import { createFixtureLoader, MockProvider, solidity } from "ethereum-waffle";
import { BigNumber, Contract } from "ethers";

import { wefundFixture } from "./fixtures_wefund";

chai.use(solidity);

describe("WeFund", () => {
  const provider = new MockProvider({
    ganacheOptions: {
      hardfork: "istanbul",
      mnemonic: "horn horn horn horn horn horn horn horn horn horn horn horn",
      gasLimit: 9999999,
    },
  });
  const [wallet, nonOwner, secondStaker] = provider.getWallets();
  const thirdStaker = provider.getWallets()[3];
  const loadFixture = createFixtureLoader([wallet, secondStaker], provider);
  const overrides = {
    gasLimit: 9999999,
  };

  let wefund: Contract;
  beforeEach(async () => {
    const fixture = await loadFixture(wefundFixture);
    wefund = fixture.wefund;
  });

  it("add project", async () => {
    await wefund.connect(wallet).addProject(600000, [[0,"1","","2022-03-1","2022-03-31", "600000","0",[]]], overrides);
    await wefund.connect(wallet).addProject(390000, [[0,"1","","2022-03-1","2022-03-31", "390000","0",[]]], overrides);
    await wefund.connect(wallet).addProject(250000, [[0,"1","","2022-03-1","2022-03-31", "250000","0",[]]], overrides);
    await wefund.connect(wallet).addProject(600000, [[0,"1","","2022-03-1","2022-03-31", "600000","0",[]]], overrides);
    await wefund.connect(wallet).addProject(120000, [[0,"1","","2022-03-1","2022-03-31", "120000","0",[]]], overrides);
    await wefund.connect(wallet).addProject(120000, [[0,"1","","2022-03-1","2022-03-31", "120000","0",[]]], overrides);

    // await wefund.connect(wallet).addProject(2000000, overrides);

    const number = await wefund.getNumberOfProjects();
    console.log(number);
    const projects = await wefund.getProjectInfo();
    console.log(projects[0].milestones);
    // let price = await wefund.getLatestPrice();
    // console.log(price)
  });
});
