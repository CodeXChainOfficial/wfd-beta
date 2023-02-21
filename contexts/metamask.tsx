import React, { useEffect, ReactNode } from "react";

import { createTrackedSelector } from "react-tracked";
import { toast } from "react-toastify";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { BigNumber, ethers } from "ethers";

import {
  WEFUND_BSC_ADDRESS,
  ERC20_ABI,
  ERROR_OPTION,
} from "../config/constants";

declare let window: any;

export interface MetamaskStore {
  connected: boolean;
  account: string;
  balance: BigNumber;
  initialized: boolean;
  initializing: boolean;
  signer: any;
  chainId: number;

  readonly clear: () => void;
  readonly connect: () => Promise<void>;
  readonly disconnect: () => void | Promise<void>;
  readonly getBalance: () => BigNumber;
  readonly getBalanceString: () => string;
  readonly sendTokens: (
    amount: string,
    denom: string,
    account: string,
    native: boolean
  ) => void;
}

export type WalletContextType = MetamaskStore;

const defaultStates = {
  connected: false,
  account: "",
  balance: BigNumber.from("0"),
  initialized: false,
  initializing: true,
  signer: undefined,
  chainId: 0,
};

export const useMetamaskStore = create(
  subscribeWithSelector<MetamaskStore>((set, get) => ({
    ...defaultStates,
    clear: () => set({ ...defaultStates }),
    connect: async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const accounts = await provider.send("eth_requestAccounts", []);
        const account = accounts[0];
        const res = await provider.getNetwork();
        set({
          connected: true,
          account: account,
          signer: signer,
          chainId: res.chainId,
        });
        // const { chainId } = await provider.getNetwork();
      } catch (err: any) {
        // toast.error(err?.message);
        toast.error("Metamask not available", ERROR_OPTION);
        set({ initializing: false });
      }
    },
    disconnect: async () => {
      await window.ethereum.request({
        method: "eth_requestAccounts",
        params: [{ eth_accounts: {} }],
      });
      window.localStorage.clear();
      get().clear();
      set({ initializing: false });
      set({ connected: false });
    },
    getBalance: () => get().balance!,
    getBalanceString: () => {
      const balance = get()
        .balance.div(10 ** 9)
        .div(10 ** 9);

      const chainId = get().chainId;
      let chain = "";
      switch (chainId) {
        case 0x38:
          chain = "BNB";
          break;
        case 0x89:
          chain = "Matic";
          break;
        case 0x1294f7c2:
          chain = "ONE";
          break;
        case 0xfa:
          chain = "FTM";
          break;
      }
      return balance.toString() + " " + chain;
    },
    sendTokens: async (
      amount: string,
      denom: string,
      address: string,
      native: boolean
    ) => {
      const signer = get().signer;
      if (!signer) return false;

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const sender = get().account;
      const nonce = provider.getTransactionCount(sender, "latest");

      if (native) {
        const tx = {
          from: sender,
          to: WEFUND_BSC_ADDRESS,
          value: amount,
          nonce: nonce,
          // gasLimit: ethers.utils.hexlify(gas_limit), // 100000
          // gasPrice: gas_price,
        };

        await signer.sendTransaction(tx);
      } else {
        const contract = new ethers.Contract(address, ERC20_ABI, signer);
        // const res = await contract.balanceOf(get().account);
        // const val = BigNumber.from(res);
        const gasPrice = await provider.getGasPrice();
        const res = await contract.transfer(WEFUND_BSC_ADDRESS, amount, {
          gasPrice,
        });
        await res.wait();
      }
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
          useMetamaskStore.getState().account
        );

        useMetamaskStore.setState({ balance: balance });
        useMetamaskStore.setState({ initialized: true });
      }
    );
  }, []);

  return null;
};
