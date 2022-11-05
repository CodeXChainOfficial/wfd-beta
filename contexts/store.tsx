import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { NETWORK } from "../config/constants";
import { PROJECT_INFO } from "../types/Project";

interface Action {
  type: ActionKind;
  payload: any;
}

export interface AppContextInterface {
  walletType:
    | "metamask"
    | "trust"
    | "keplr"
    | "tron"
    | "near"
    | "elrond"
    | undefined;
  junoConnection: any;
  wallet: any;
  openWalletModal: (() => void) | undefined;
  net: string;
  activeProjectData: PROJECT_INFO[];
  projectData: PROJECT_INFO[];
  communityData: string[];
  configData: any[];
  address: any;
  referralCount: number;
  referralLink: string;
  presale: boolean;
  cardInfo: any;
}

const initialState: AppContextInterface = {
  walletType: undefined,
  junoConnection: undefined,
  wallet: undefined,
  openWalletModal: undefined,
  net: NETWORK,
  activeProjectData: [],
  projectData: [],
  communityData: [],
  configData: [],
  address: undefined,
  referralCount: 0,
  referralLink: "",
  presale: false,
  cardInfo: undefined,
};

export enum ActionKind {
  setWalletType,
  setJunoConnection,
  setWallet,
  setWalletModal,
  setNet,
  setActiveProjectData,
  setProjectData,
  setCommunityData,
  setConfigData,
  setAddress,
  setReferralCount,
  setReferralLink,
  setPresale,
  setCardInfo,
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
    case ActionKind.setJunoConnection:
      return { ...state, junoConnection: action.payload };
    case ActionKind.setWallet:
      return { ...state, wallet: action.payload };
    case ActionKind.setWalletModal:
      return { ...state, openWalletModal: action.payload };
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
    case ActionKind.setCardInfo:
      return { ...state, cardInfo: action.payload };
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

export const useJunoConnection = () => {
  const { state } = useStore();
  return state.junoConnection;
};

export const useWallet = () => {
  const { state } = useStore();
  return state.wallet;
};

export const useConfigData = () => {
  const { state } = useStore();
  return state.configData;
};
