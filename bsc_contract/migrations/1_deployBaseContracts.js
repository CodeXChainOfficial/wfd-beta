
const WeFund = artifacts.require("WeFund");

module.exports = async function (deployer) {
  await deployer.deploy(WeFund);
  const wefund = await WeFund.deployed();
console.log(wefund.address);
  let res;
  res = await wefund.initialize();
console.log(res)
  res = await wefund.addProject(10000);
console.log(res);
};
