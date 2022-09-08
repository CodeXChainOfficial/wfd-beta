import { ethers,upgrades } from 'hardhat'
import { BigNumber } from 'ethers'

function expandTo18Decimals(n:number) {
return BigNumber.from(n).mul(BigNumber.from(10).pow(18))
}

function expandTo17Decimals(n:number) {
return BigNumber.from(n).mul(BigNumber.from(10).pow(17))
}

async function main() {
    const rewardsDistribution = "0x1CE9a65c6b32aB58ad748AC3E3dbE9c15E112182"
    const nonWithdrawalBoost = expandTo17Decimals(5);
    const nonWithdrawalBoostPeriod = 356;
    const minimumLockDays = 7;

    const [deployer] = await ethers.getSigners()

    if (deployer === undefined) throw new Error('Deployer is undefined.')
    console.log('Deploying contracts with the account:', deployer.address)
    console.log('Account balance:', (await deployer.getBalance()).toString())

    const testNFT = await ethers.getContractFactory('TestNFT')
    const testNFTDeployed = await testNFT.deploy()
    console.log('TestNFT:', testNFTDeployed.address);
    
    const testERC20 = await ethers.getContractFactory('TestERC20')    
    const testERC20Deployed = await testERC20.deploy(expandTo18Decimals(1000000))
    console.log('TestERC20:', testERC20Deployed.address);

    const testStakingToken = await ethers.getContractFactory('TestStakingToken')
    const testStakingTokenDeployed = await testStakingToken.deploy(expandTo18Decimals(1000000))
    console.log('TestStakingToken:', testStakingTokenDeployed.address);
    
    const testStakingRewards = await ethers.getContractFactory('TestStakingRewards')
    const testStakingRewardsDeployed = await testStakingRewards.deploy(
        rewardsDistribution,
        testERC20Deployed.address,    
        testStakingTokenDeployed.address,
        nonWithdrawalBoost,
        nonWithdrawalBoostPeriod,
        minimumLockDays,
        true
    )
    console.log('TestStakingRewards:', testStakingRewardsDeployed.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
