# yarn install

# fixing compile error
    replace node_modules/@uniswap/lib/contracts/libraries/FullMath.sol with contracts/FullMath.sol

    note: uint256(-1) is not allowed in over 0.8.0 solc-version ( should be converted to uint256(type(uint256).max)) )
          in a nutshell, something like -number in code should be converted to type(uint256).max - number + 1
# deploy

> npx hardhat run ./hardhat_deploy/deployContracts.ts

copy testNFT deployed address to deployProxyFundRaising file

> npx hardhat run ./hardhat_deploy/deployProxyFundRaising.ts

copy SkyLaunchFundRaising deployed address to upgradeProxyFundRaising file

>npx hardhat run ./hardhat_deploy/upgradeProxyFundRaising.ts

# verify

if contract constructor has several arguments, 
npx hardhat verify --constructor-args ./hardhat_deploy/arguments.js 0x4c441470662b28feaad5eed83327551a6f3ef0f6

in this proxy contract, there's no constructor but initialize
Initialize would be called manually

so this command will work

npx hardhat verify 0x4c441470662b28feaad5eed83327551a6f3ef0f6
