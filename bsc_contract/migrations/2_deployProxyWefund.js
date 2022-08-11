const { deployProxy, upgradeProxy } = require("@openzeppelin/truffle-upgrades");

const WeFund = artifacts.require("WeFund");

module.exports = async function (deployer) {
  console.log("migrating");
  await deployProxy(WeFund, [], { deployer });
  const wefund = await WeFund.deployed();
  console.log(wefund);
  let res;
  res = await wefund.initialize();
console.log(res)
  res = await wefund.addProject(10000);
console.log(res);
};
