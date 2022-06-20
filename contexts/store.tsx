import React, { createContext, useContext, useReducer } from "react";

interface Action {
  type: ActionKind;
  payload: any;
}

export interface AppContextInterface {
  walletType: "metamask" | "trust" | "keplr" | "tron" | "near" | undefined;
  wallet: any;
  net: string;
  activeProjectData: any[];
  projectData: any[];
  communityData: any[];
  configData: any[];
  address: any;
  referralCount: number;
  referralLink: string;
  presale: boolean;
}

const initialState: AppContextInterface = {
  walletType: undefined,
  wallet: undefined,
  net: "testnet",
  activeProjectData: [],
  projectData: [],
  communityData: [],
  configData: [],
  address: null,
  referralCount: 0,
  referralLink: "",
  presale: true,
};

export enum ActionKind {
  setWalletType,
  setWallet,
  setNet,
  setActiveProjectData,
  setProjectData,
  setCommunityData,
  setConfigData,
  setAddress,
  setReferralCount,
  setReferralLink,
  setPresale,

  setInvestChain,
  setInvestToken,
  setInvestAmount,
  setInvestWFDAmount,
  setInvestName,
  setInvestEmail,
  setInvestTitle,
  setInvestDate,
  setPdfFile,
  setDocxFile,
}

const StoreContext = createContext<{
  state: AppContextInterface;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const reducer = (state: AppContextInterface, action: Action) => {
  switch (action.type) {
    case ActionKind.setWalletType:
      return { ...state, walletType: action.payload };
    case ActionKind.setWallet:
      return { ...state, wallet: action.payload };
    case ActionKind.setNet:
      return { ...state, net: action.payload };
    case ActionKind.setActiveProjectData:
      return { ...state, activeProjectData: action.payload };
    case ActionKind.setProjectData:
      return { ...state, projectData: action.payload };
    case ActionKind.setCommunityData:
      return { ...state, communityData: action.payload };
    case ActionKind.setConfigData:
      return { ...state, configData: action.payload };
    case ActionKind.setAddress:
      return { ...state, address: action.payload };
    case ActionKind.setReferralCount:
      return { ...state, referralCount: action.payload };
    case ActionKind.setReferralLink:
      return { ...state, referralLink: action.payload };
    case ActionKind.setPresale:
      return { ...state, presale: action.payload };

    default:
      return state;
  }
};

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

export const useWallet = () => {
  const { state, dispatch } = useStore();
  return state.wallet;
};

export const useProjectData = () => {
  const { state, dispatch } = useStore();
  return state.projectData;
};

export const useCommunityData = () => {
  const { state, dispatch } = useStore();
  return state.communityData;
};

export const useConfigData = () => {
  const { state, dispatch } = useStore();
  return state.configData;
};
