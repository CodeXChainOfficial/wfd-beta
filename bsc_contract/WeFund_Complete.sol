// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WeFund is Initializable, OwnableUpgradeable {
    struct Config {
        address owner;
        address wefund;
        address vesting_contract;
    }
    struct BackerInfo {
        address addr;
        uint256 usdc_amount;
        uint256 usdt_amount;
        uint256 busd_amount;
    }
    struct Vote {
        address wallet;
        bool voted;
    }
    struct Milestone {
        uint8 milestone_step;
        string milestone_name;
        string milestone_type;
        string milestone_description;
        string milestone_startdate;
        string milestone_enddate;
        uint256 milestone_amount;
        uint8 milestone_status; //0:voting, 1:releasing 2:released
        Vote[] milestone_votes;
    }
    struct TeamMember {
        string teammember_description;
        string teammember_linkedin;
        string teammember_role;
        string teammember_name;
    }
    struct VestingParameter {
        string stage_title;
        uint256 stage_price;
        uint256 stage_amount;
        uint256 stage_soon;
        uint256 stage_after;
        uint256 stage_period;
    }
    struct WhitelistState {
        address wallet;
        string card_type;
        uint256 allocation;
        uint256 backed;
    }
    struct ProjectInfo {
        string project_company;
        string project_title;
        string project_description;
        string project_ecosystem;
        string project_fundtype;
        string project_createddate;
        string project_saft;
        string project_logo;
        string project_whitepaper;
        string project_website;
        string project_email;
        string country;
        string cofounder_name;
        string service_wefund;
        string service_charity;
        string professional_link;

        uint8 project_id;
        address creator_wallet;
        uint256 project_collected;
        //0:wefund voting 1:fundrasing 2:releasing 3:done 4:fail
        uint8 project_status;
        uint256 fundraising_stage;
        uint256 backerbacked_amount;

        BackerInfo[] backer_states;

        Milestone[] milestone_states;
        uint256 project_milestonestep;

        TeamMember[] teammember_states;

        VestingParameter[] vesting;
        address token_addr;

        WhitelistState[] whitelist;
        uint256 holder_alloc;
        uint256 holder_ticket;
        uint256 community_ticket;
    }
    mapping(uint256 => ProjectInfo) private projects;
    uint256 private project_id;
    address[] private community;

    function SetConfig(
        address admin,
        address wefund,
        address vesting_contract
    ) public onlyOwner {}

    function AddProject(
        uint8 project_id,
        string project_company,
        string project_title,
        string project_description,
        string project_ecosystem,
        string project_fundtype,
        string project_createddate,
        string project_saft,
        string project_logo,
        string project_whitepaper,
        string project_website,
        string project_email,
        string creator_wallet,
        uint256 project_collected,
        Milestone[] project_milestones,
        TeamMember[] project_teammembers,
        VestingParameter[] vesting,
        string token_addr,
        string country,
        string cofounder_name,
        string service_wefund,
        string service_charity,
        string professional_link
    ) public ;

    function RemoveProject(uint8 project_id) public onlyOwner {}

    function Back2Project(
        uint8 project_id,
        address backer_wallet,
        uint8 fundraising_stage,
        uint256 token_amount,
        string otherchain,
        address otherchain_wallet
    ) public;

    function CompleteProject(uint8 project_id) public onlyOwner {}

    function FailProject(uint8 project_id) public onlyOwner {}

    function AddCommunitymember(address wallet) public onlyOwner {} 

    function RemoveCommunitymember(address wallet) public onlyOwner {}

    function WefundApprove(uint8 project_id) public onlyOnwer {}

    function SetFundraisingStage(uint8 project_id, uint8 stage) public;

    function SetMilestoneVote(
        uint8 project_id,
        address wallet,
        bool voted
    ) public;

    function ReleaseMilestone(uint8 project_id) public;

    function SetProjectStatus(uint8 project_id, uint8 status) public;

    function OpenWhitelist(uint8 project_id, uint8 holder_alloc) public;

    function RegisterWhitelist(uint8 project_id, string card_type) public;

    function CloseWhitelist(uint8 project_id) public;

    function GetConfig() public view returns(Config);

    function GetAllProject() public view returns(ProjectInfo[]);

    function GetProject(uint8 project_id) public view returns(ProjectInfo);

    function GetBacker(uint8 project_id) public view returns(BackerInfo[]);

    function GetCommunitymembers() public view returns (address[]);

}
