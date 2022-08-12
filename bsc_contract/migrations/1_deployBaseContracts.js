const WeFund = artifacts.require("WeFund");

module.exports = async function (deployer) {
  await deployer.deploy(WeFund);
  const wefund = await WeFund.deployed();
  await wefund.initialize();
};
