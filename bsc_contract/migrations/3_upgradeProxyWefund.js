const { deployProxy, upgradeProxy } = require("@openzeppelin/truffle-upgrades");

const WeFund = artifacts.require("WeFund");

module.exports = async function (deployer) {
  // 0xe08D95c5F3c9f78767006d44Bec793aB34Aee50a SkyLaunchFundRaising(origin) address
  const upgraded = await upgradeProxy(
    "0x88364CCC20193abd9b25504a3B8cc514bfFa1385",
    WeFund,
    { deployer }
  );
  upgraded.initialize();
};
