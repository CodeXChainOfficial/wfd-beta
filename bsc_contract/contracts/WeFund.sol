// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
// import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

//ropsten testnet
address constant USDC = 0xFE724a829fdF12F7012365dB98730EEe33742ea2;
address constant USDT = 0x6EE856Ae55B6E1A249f04cd3b947141bc146273c;
address constant BUSD = 0x16c550a97Ad2ae12C0C8CF1CC3f8DB4e0c45238f;
address constant WEFUND_WALLET = 0x0dC488021475739820271D595a624892264Ca641;

//bsc testnet
// address constant USDC = 0x64544969ed7EBf5f083679233325356EbE738930;
// address constant USDT = 0x337610d27c682E347C9cD60BD4b3b107C9d34dDd;
// address constant BUSD = 0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee;
// address constant WEFUND_WALLET = 0x0dC488021475739820271D595a624892264Ca641;

//bsc mainnet
// address constant USDC = 0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d;
// address constant USDT = 0x55d398326f99059ff775485246999027b3197955;
// address constant BUSD = 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56;

contract WeFund is Initializable {
    using SafeERC20Upgradeable for IERC20Upgradeable;
    // AggregatorV3Interface internal priceFeed;

    struct WhitelistInfo {
        address addr;
        uint256 tier;
    }
    struct BackerInfo {
        address addr;
        uint256 usdc_amount;
        uint256 usdt_amount;
        uint256 busd_amount;
    }
    struct ProjectInfo {
        uint256 id;
        uint256 collected;
        WhitelistInfo[] whitelist;
        uint256 backed;
        BackerInfo[] backers;
    }
    mapping(uint256 => ProjectInfo) public projects;
    uint256 public project_id;
    address[] community;

    event WhitelistAdded(address indexed addr);
    event WhitelistRemoved(address indexed addr);
    event ProjectAdded(uint256 indexed pid);

    function initialize() public initializer {
        project_id = 1;
        // priceFeed = AggregatorV3Interface( 0xECe365B379E1dD183B20fc5f022230C044d51404 //Ropsten
        //0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE //BSC
        // );
    }

    // function getLatestPrice() public view returns (int256) {
    //     (, int256 answer, , , ) = priceFeed.latestRoundData();
    //     return answer;
    // }
    function addCommunity(address) public {}

    function addProject(uint256 _collected) public {
        ProjectInfo storage project = projects[project_id];
        project.id = project_id;
        project.collected = _collected;

        project_id++;

        emit ProjectAdded(project_id);
    }

    function getNumberOfProjects() public view returns (uint256) {
        return project_id;
    }

    function getProjectInfo() public view returns (ProjectInfo[] memory) {
        ProjectInfo[] memory info = new ProjectInfo[](project_id - 1);
        for (uint256 i = 1; i < project_id; i++) {
            // ProjectInfo storage pInfo = projects[i];
            // info[i-1] = pInfo;
            info[i - 1] = projects[i];
        }
        return info;
    }

    function getWhitelistIndex(uint256 pid, address addr)
        internal
        view
        returns (uint256)
    {
        ProjectInfo memory project = projects[pid];
        for (uint256 i = 0; i < project.whitelist.length; i++) {
            if (project.whitelist[i].addr == addr) {
                return i;
            }
        }
        return type(uint256).max;
    }

    function addWhitelist(uint256 pid, uint256 tier) external {
        address sender = msg.sender;
        require(
            getWhitelistIndex(pid, sender) == type(uint256).max,
            "Whitelisted"
        );
        projects[pid].whitelist.push(WhitelistInfo({addr: sender, tier: tier}));
        emit WhitelistAdded(sender);
    }

    function removeWhitelist(uint256 pid) external {
        address sender = msg.sender;
        require(
            getWhitelistIndex(pid, sender) == type(uint256).max,
            "Not Whitelisted"
        );

        uint256 length = projects[pid].whitelist.length;
        for (uint256 i = 0; i < length; i++) {
            if (projects[pid].whitelist[i].addr == sender) {
                projects[pid].whitelist[i] = projects[pid].whitelist[
                    length - 1
                ];
                projects[pid].whitelist.pop();
            }
        }
    }

    function getTier(uint256 pid, address sender)
        internal
        view
        returns (bool, uint256)
    {
        ProjectInfo memory project = projects[pid];
        for (uint256 i = 0; i < project.whitelist.length; i++) {
            if (project.whitelist[i].addr == sender) {
                return (true, project.whitelist[i].tier);
            }
        }
        return (false, 0);
    }

    function back(
        uint256 pid,
        uint256 token_type,
        uint256 amount
    ) public {
        address sender = msg.sender;

        (bool b_whitelisted, uint256 tier) = getTier(pid, sender);
        require(b_whitelisted, "Not whitelisted");

        IERC20Upgradeable token;
        uint256 a_usdc = 0;
        uint256 a_usdt = 0;
        uint256 a_busd = 0;

        if (token_type == 0) {
            token = IERC20Upgradeable(USDC);
            a_usdc = amount;
        } else if (token_type == 1) {
            token = IERC20Upgradeable(USDT);
            a_usdt = amount;
        } else {
            token = IERC20Upgradeable(BUSD);
            a_busd = amount;
        }

        token.transferFrom(sender, WEFUND_WALLET, amount);

        ProjectInfo storage project = projects[pid];
        bool b_exist = false;
        for (uint256 i = 0; i < project.backers.length; i++) {
            if (project.backers[i].addr == sender) {
                project.backers[i].usdc_amount += a_usdc;
                project.backers[i].usdt_amount += a_usdt;
                project.backers[i].busd_amount += a_busd;
                b_exist = true;
                break;
            }
        }
        if (!b_exist) {
            project.backers.push(
                BackerInfo({
                    addr: sender,
                    usdc_amount: a_usdc,
                    usdt_amount: a_usdt,
                    busd_amount: a_busd
                })
            );
        }
    }
}
