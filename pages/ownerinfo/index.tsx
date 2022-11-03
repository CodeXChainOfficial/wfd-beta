import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMetamaskWallet } from "../../contexts/metamask";
import { useOneProjectData } from "../../hook/FetchProject";
import { ParseParam_ProjectId } from "../../utils/utility";

const OwnerInfo = () => {
  const projectID = ParseParam_ProjectId();
  const data = useOneProjectData(projectID);
  const wallet = useMetamaskWallet();
  const address = wallet.account;
  const router = useRouter();

  useEffect(() => {
    router.push(`/ownerinfo/viewproject/approval?project_id=${projectID}`);
  }, []);
};

export default OwnerInfo;
