import React, { useEffect, ReactNode } from "react";
import { createTrackedSelector } from "react-tracked";
import { toast } from "react-toastify";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

import { BigNumber } from "ethers";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        56: "https://bsc-dataseed1.binance.org",
      },
      chainId: 56,
    },
  },
};

export interface TrustWalletStore {
  connected: boolean;
  address: string;
  balance: BigNumber;
  initialized: boolean;
  initializing: boolean;
  web3: Web3 | undefined;

  readonly clear: () => void;
  readonly connect: () => Promise<void>;
  readonly disconnect: () => void | Promise<void>;
  readonly getBalance: () => BigNumber;
  readonly getBalanceString: () => string;
}

export type WalletContextType = TrustWalletStore;

const defaultStates = {
  connected: false,
  address: "",
  balance: BigNumber.from("0"),
  initialized: false,
  initializing: true,
  web3: undefined,
};

export const useTrustWalletStore = create(
  subscribeWithSelector<TrustWalletStore>((set, get) => ({
    ...defaultStates,
    clear: () => set({ ...defaultStates }),
    connect: async () => {
      try {
        // set chain id and rpc mapping in provider options

        const web3Modal = new Web3Modal({
          network: "mainnet", // optional
          cacheProvider: true, // optional
          providerOptions, // required
        });

        const provider = await web3Modal.connect();
        await web3Modal.toggleModal();

        // regular web3 provider methods
        const newWeb3 = new Web3(provider);
        const accounts = await newWeb3.eth.getAccounts();

        set({
          connected: true,
          address: accounts[0],
          web3: newWeb3,
        });
      } catch (err: any) {
        toast.error(err?.message);
        set({ initializing: false });
      }
    },
    disconnect: async () => {
      const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions, // required
      });
      await web3Modal.clearCachedProvider();
      window.localStorage.clear();
      get().clear();
      set({ initializing: false });
      set({ connected: false });
    },
    getBalance: () => get().balance!,
    getBalanceString: () => {
      return get().balance.toString() + " metamask";
    },
  }))
);

export const useTrustWallet =
  createTrackedSelector<TrustWalletStore>(useTrustWalletStore);

export const TrustWalletProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <WalletSubscription />
    </>
  );
};

const WalletSubscription = () => {
  useEffect(() => {
    return useTrustWalletStore.subscribe(
      (x) => x.connected,
      async (connected) => {
        const { web3, address } = useTrustWalletStore.getState();
console.log(address)
        await web3?.eth.getBalance(address).then((res) => {
          console.log(web3.utils.fromWei(res));
        });

        useTrustWalletStore.setState({ initialized: true });
      }
    );
  }, []);

  return null;
};
