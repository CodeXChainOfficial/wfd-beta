import { ethers,upgrades } from 'hardhat'
import { BigNumber } from 'ethers'

function expandTo18Decimals(n:number) {
return BigNumber.from(n).mul(BigNumber.from(10).pow(18))
}

function expandTo17Decimals(n:number) {
return BigNumber.from(n).mul(BigNumber.from(10).pow(17))
}

async function main() {
    const scores = [399, 299, 199, 99, 10]
    const multipliers = [300, 250, 200, 150, 100]
    const testNFTAddress = "0x293A828B47B3cEa3B9eF4773485289116dA18e75"
    const [deployer] = await ethers.getSigners()

    if (deployer === undefined) throw new Error('Deployer is undefined.')
    console.log('Deploying contracts with the account:', deployer.address)
    console.log('Account balance:', (await deployer.getBalance()).toString())

    // const testNFT = await ethers.getContractFactory('TestNFT')
    // const testNFTDeployed = await testNFT.deploy()
    // console.log('TestNFT:', testNFTDeployed.address);

    const SkyLaunchFundRaising = await ethers.getContractFactory('SkyLaunchFundRaising')
    const SkyLaunchFundRaisingDeployed = await upgrades.deployProxy(SkyLaunchFundRaising,[scores, multipliers, testNFTAddress])
    await SkyLaunchFundRaisingDeployed.deployed()
    console.log('SkyLaunchFundRaising:', SkyLaunchFundRaisingDeployed.address);    
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
