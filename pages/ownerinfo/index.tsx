import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMetamaskWallet } from "../../contexts/metamask";
import { useOneProjectData } from "../../hook/FetchProject";
import { PROJECT_STATUS } from "../../types/ProjectStatus";
import { ParseParam_ProjectId } from "../../utils/utility";

const OwnerInfo = () => {
  const projectID = ParseParam_ProjectId();
  const data = useOneProjectData(projectID);
  const wallet = useMetamaskWallet();
  const address = wallet.account;
  const router = useRouter();

  useEffect(() => {
    if (data) {
      if (data.project_status >= PROJECT_STATUS.CrowdFundraising)
        router.push(`/ownerinfo/viewproject/milestone?project_id=${projectID}`);
      else if (data.project_status >= PROJECT_STATUS.IncubationGoal)
        router.push(
          `/ownerinfo/viewproject/incubation?project_id=${projectID}`
        );
      else
        router.push(`/ownerinfo/viewproject/approval?project_id=${projectID}`);
    }
  }, [data]);
};

export default OwnerInfo;
