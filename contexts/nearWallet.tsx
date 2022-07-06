import React, { useEffect, ReactNode } from "react";
import { createTrackedSelector } from "react-tracked";
import { toast } from "react-toastify";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

import { BigNumber } from "ethers";
import { BigNumber as NBigNumber } from "bignumber.js"
import * as nearAPI from "near-api-js";

import { getNearConfig, CONTRACT_NAME } from "../config/nearConfig";
import { WEFUND_NEAR_WALLET, NETWORK } from "../config/constants";

export interface NearWalletStore {
  connected: boolean;
  account: string;
  balance: BigNumber;
  initialized: boolean;
  initializing: boolean;
  near: nearAPI.Near | undefined;

  readonly clear: () => void;
  readonly connect: () => Promise<void>;
  readonly disconnect: () => void | Promise<void>;
  readonly getBalance: () => BigNumber;
  readonly getBalanceString: () => string;
  readonly sendTokens: (
    amount: number,
    denom: string,
    account: string,
    native: boolean
  ) => void;
}

export type WalletContextType = NearWalletStore;

const defaultStates = {
  connected: false,
  account: "",
  balance: BigNumber.from("0"),
  initialized: false,
  initializing: true,
  near: undefined,
};

export const useNearWalletStore = create(
  subscribeWithSelector<NearWalletStore>((set, get) => ({
    ...defaultStates,
    clear: () => set({ ...defaultStates }),
    connect: async () => {
      try {
        const nearConfig: any = getNearConfig(NETWORK);
        const near = await nearAPI.connect(
          Object.assign(
            {
              deps: {
                keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
              },
            },
            nearConfig
          )
        );

        const wallet = new nearAPI.WalletAccount(near, null);
        const signed = wallet.isSignedIn();

        if (!signed) {
          wallet.requestSignIn(
            CONTRACT_NAME,
            'Who was the last person to say "Hi!"?'
          );
        } else {
          set({
            connected: true,
            account: wallet.getAccountId(),
            near: near,
          });
        }
      } catch (err: any) {
        toast.error(err?.message);
        set({ initializing: false });
      }
    },
    disconnect: async () => {
      window.localStorage.clear();
      get().clear();
      set({ initializing: false });
      set({ connected: false });
    },
    getBalance: () => get().balance!,
    getBalanceString: () => {
      return get().balance.toString() + " metamask";
    },
    sendTokens: async (
      amount: number,
      denom: string,
      address: string,
      native: boolean
    ) => {
      const near = get().near;
      if (near) {
        const wallet = new nearAPI.WalletAccount(near, null);
        const account = wallet.account();
        const big_amount = new NBigNumber(amount);

        await account.sendMoney(
          WEFUND_NEAR_WALLET, // receiver account
          big_amount.toFixed() // amount in yoctoNEAR
        );
      }
    },
  }))
);

export const useNearWallet =
  createTrackedSelector<NearWalletStore>(useNearWalletStore);

export const NearWalletProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <WalletSubscription />
    </>
  );
};

const WalletSubscription = () => {
  useEffect(() => {
    return useNearWalletStore.subscribe(
      (x) => x.connected,
      async (connected) => {
        const { near } = useNearWalletStore.getState();
        if (near) {
          const wallet = new nearAPI.WalletAccount(near, null);
          const account = wallet.account();
          const balance = await account.getAccountBalance();
          const { utils } = nearAPI;
          const amountInNEAR = BigNumber.from(balance.available);

          useNearWalletStore.setState({ balance: amountInNEAR });
          useNearWalletStore.setState({ initialized: true });
        }
      }
    );
  }, []);

  return null;
};
