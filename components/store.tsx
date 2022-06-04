import React, { createContext, useContext, useReducer } from "react";

interface Action {
  type: ActionKind;
  payload: any;
}

export interface AppContextInterface {
  net: string;
  activeProjectData: any[];
  projectData: any[];
  communityData: any[];
  address: any;
  referralCount: number;
  referralLink: string;
  presale: boolean;
}

const initialState: AppContextInterface = {
  net: "testnet",
  activeProjectData: [],
  projectData: [],
  presale: false,
  communityData: [],
  address: null,
  referralCount: 0,
  referralLink: "",
};

export enum ActionKind {
  setNet,
  setActiveProjectData,
  setProjectData,
  setCommunityData,
  setAddress,
  setReferralCount,
  setReferralLink,
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
    case ActionKind.setNet:
      return { ...state, net: action.payload };
    case ActionKind.setActiveProjectData:
      return { ...state, activeProjectData: action.payload };
    case ActionKind.setProjectData:
      return { ...state, projectData: action.payload };
    case ActionKind.setCommunityData:
      return { ...state, communityData: action.payload };
    case ActionKind.setAddress:
      return { ...state, address: action.payload };
    case ActionKind.setReferralCount:
      return { ...state, referralCount: action.payload };
    case ActionKind.setReferralLink:
      return { ...state, referralLink: action.payload };
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
  return state.activeProjectData;
};
