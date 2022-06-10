import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import { createTrackedSelector } from "react-tracked";
import { toast } from "react-toastify";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

import { BigNumber, ethers } from "ethers";

declare let window: any;

export interface MetamaskStore {
  connected: boolean;
  address: string;
  balance: BigNumber;
  initialized: boolean;
  initializing: boolean;

  readonly clear: () => void;
  readonly connect: () => Promise<void>;
  readonly disconnect: () => void | Promise<void>;
  readonly getBalance: () => BigNumber;
  readonly getBalanceString: () => string;
}

export type WalletContextType = MetamaskStore;

const defaultStates = {
  connected: false,
  address: "",
  balance: BigNumber.from("0"),
  initialized: false,
  initializing: true,
};

export const useMetamaskStore = create(
  subscribeWithSelector<MetamaskStore>((set, get) => ({
    ...defaultStates,
    clear: () => set({ ...defaultStates }),
    connect: async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const account = accounts[0];
        set({
          connected: true,
          address: account,
        });
        // const { chainId } = await provider.getNetwork();
      } catch (err: any) {
        toast.error(err?.message);
        set({ initializing: false });
      }
    },
    disconnect: () => {
      set({
        connected: false,
      });
    },
    getBalance: () => get().balance!,
    getBalanceString: () => {
      return get().balance.toString() + " metamask";
    },
  }))
);

export const useMetamaskWallet =
  createTrackedSelector<MetamaskStore>(useMetamaskStore);

export const MetamaskProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <WalletSubscription />
    </>
  );
};

const WalletSubscription = () => {
  useEffect(() => {
    return useMetamaskStore.subscribe(
      (x) => x.connected,
      async (connected) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(
          useMetamaskStore.getState().address
        );

        useMetamaskStore.setState({ balance: balance });
        useMetamaskStore.setState({ initialized: true });
      }
    );
  }, []);

  return null;
};
