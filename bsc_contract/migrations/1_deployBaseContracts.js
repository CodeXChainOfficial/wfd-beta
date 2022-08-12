
const WeFund = artifacts.require("WeFund");

module.exports = async function (deployer) {
  await deployer.deploy(WeFund);
  const wefund = await WeFund.deployed();
console.log(wefund.address);
  let res;
  res = await wefund.initialize();
console.log(res)
  await wefund.connect(wallet).addProject(600000, [[0, "1", "", "2022-03-1", "2022-03-31", "600000", "0", []]], overrides);
  await wefund.connect(wallet).addProject(390000, [[0, "1", "", "2022-03-1", "2022-03-31", "390000", "0", []]], overrides);
  await wefund.connect(wallet).addProject(250000, [[0, "1", "", "2022-03-1", "2022-03-31", "250000", "0", []]], overrides);
  await wefund.connect(wallet).addProject(600000, [[0, "1", "", "2022-03-1", "2022-03-31", "600000", "0", []]], overrides);
  await wefund.connect(wallet).addProject(120000, [[0, "1", "", "2022-03-1", "2022-03-31", "120000", "0", []]], overrides);
  await wefund.connect(wallet).addProject(120000, [[0, "1", "", "2022-03-1", "2022-03-31", "120000", "0", []]], overrides);
console.log(res);
};
