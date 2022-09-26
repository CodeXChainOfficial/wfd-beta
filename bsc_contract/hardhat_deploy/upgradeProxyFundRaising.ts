import { ethers,upgrades } from 'hardhat'

async function main() {
    const [deployer] = await ethers.getSigners()
    if (deployer === undefined) throw new Error('Deployer is undefined.')
    console.log('Deploying contracts with the account:', deployer.address)

    console.log('Account balance:', (await deployer.getBalance()).toString())

    const SkyLaunchFundRaisingV2 = await ethers.getContractFactory('SkyLaunchFundRaising')
    
    const SkyLaunchFundRaisingV2Test = await upgrades.forceImport("0x97af32a168ebfac154c9d090fa80faba55b52c72", SkyLaunchFundRaisingV2, {});

    // 0x9CAFc5E4b8b5e290d582aa62d63C8CD21325BC7C SkyLaunchFundRaising(origin) address
    const SkyLaunchFundRaisingV2Deployed = await upgrades.upgradeProxy("0x97af32a168ebfac154c9d090fa80faba55b52c72", SkyLaunchFundRaisingV2);
    await SkyLaunchFundRaisingV2Deployed.deployed();    
    const scores = [399, 299, 199, 99, 10]
    const multipliers = [300, 250, 200, 150, 100]
    const testNFTAddress = "0x293A828B47B3cEa3B9eF4773485289116dA18e75"
    await SkyLaunchFundRaisingV2Deployed.initialize(scores, multipliers, testNFTAddress)
    console.log('SkyLaunchFundRaising:', SkyLaunchFundRaisingV2Deployed.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
