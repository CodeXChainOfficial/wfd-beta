import React, { createContext, useContext, useReducer } from "react";
import { NETWORK } from "../config/constants";

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
  address: any;
}

const initialState: AppContextInterface = {
  walletType: undefined,
  junoConnection: undefined,
  wallet: undefined,
  openWalletModal: undefined,
  net: NETWORK,
  address: undefined,
};

export enum ActionKind {
  setWalletType,
  setJunoConnection,
  setWallet,
  setWalletModal,
  setNet,
  setAddress,
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
    case ActionKind.setAddress:
      return { ...state, address: action.payload };
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
