import React, { useEffect, ReactNode } from "react";
import { createTrackedSelector } from "react-tracked";
import { toast } from "react-toastify";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

import { BigNumber } from "bignumber.js";
import { WalletProvider } from "@elrondnetwork/erdjs-web-wallet-provider";

import { addressEndpoint, getElrondConfig } from "../config/elrondConfig";
import {
  ERROR_OPTION,
  NETWORK,
  WEFUND_ELROND_WALLET,
} from "../config/constants";
import axios from "axios";
import { ParseParam_ProjectId } from "../utils/utility";

export interface ElrondWebStore {
  connected: boolean;
  account: string;
  balance: BigNumber;
  initialized: boolean;
  initializing: boolean;

  setAccount: (account: string) => void;
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

export type WalletContextType = ElrondWebStore;

const defaultStates = {
  connected: false,
  account: "",
  balance: new BigNumber("0"),
  initialized: false,
  initializing: true,
  near: undefined,
};

export const useElrondWebStore = create(
  subscribeWithSelector<ElrondWebStore>((set, get) => ({
    ...defaultStates,
    setAccount: (account: string) => {
      try {
        set({
          connected: true,
          account: account,
        });
      } catch (e) {
        toast("Error", ERROR_OPTION);
      }
    },
    clear: () => set({ ...defaultStates }),
    connect: async () => {
      const config = getElrondConfig(NETWORK);
      try {
        const provider = new WalletProvider(config.walletAddress);
        window.localStorage.setItem("action", "elrond_connection");
        const project_id = ParseParam_ProjectId();
        window.localStorage.setItem("project_id", project_id.toString());

        await provider.login();
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
      const balance = get().balance.dividedBy(10 ** 18);
      return balance.toFixed() + " EGLD";
    },
    sendTokens: async (
      amount: string,
      denom: string,
      address: string,
      native: boolean
    ) => {
      const config = getElrondConfig(NETWORK);
      const account = get().account;
      const provider = new WalletProvider(config.walletAddress);
      const big_amount = new BigNumber(amount);

      const configUrl = `${config.apiAddress}/${addressEndpoint}/${account}`;
      const accountData = await axios.get(configUrl);
      const nonce = accountData.data.data.account.nonce;

      let transaction;
      if (native) {
        transaction = {
          toPlainObject: function () {
            return {
              nonce: nonce,
              value: big_amount.toFixed(),
              receiver: WEFUND_ELROND_WALLET,
              gasPrice: 1000000000,
              gasLimit: 700000,
              data: "",
              chainID: config.chainId,
              version: 1,
            };
          },
        };
      } else {
        const address_encoded = new Buffer(address).toString("hex");
        const value_encoded = amount.toString(16);
        let data = "ESDTTransfer@" + address_encoded;
        if (value_encoded.length % 2 == 0) data += "@" + value_encoded;
        else data += "@0" + value_encoded;

        transaction = {
          toPlainObject: function () {
            return {
              nonce: nonce,
              value: 0,
              sender: account,
              receiver: WEFUND_ELROND_WALLET,
              gasPrice: 1000000000,
              gasLimit: 500000,
              data: Buffer.from(data).toString("base64"),
              chainID: config.chainId,
              version: 1,
            };
          },
        };
      }
      window.localStorage.setItem("action", "elrond_investing");
      const project_id = ParseParam_ProjectId();
      window.localStorage.setItem("project_id", project_id.toString());
      await provider.signTransactions([transaction]);
    },
  }))
);

export const useElrondWeb =
  createTrackedSelector<ElrondWebStore>(useElrondWebStore);

export const ElrondWebProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <WalletSubscription />
    </>
  );
};

const WalletSubscription = () => {
  useEffect(() => {
    return useElrondWebStore.subscribe(
      (x) => x.connected,
      async (connected) => {
        if (!connected) return;

        const config = getElrondConfig(NETWORK);
        const { account } = useElrondWebStore.getState();
        const configUrl = `${config.apiAddress}/${addressEndpoint}/${account}`;
        try {
          const res = await axios.get(configUrl);
          const amountInElrond = new BigNumber(res.data.data.account.balance);
          useElrondWebStore.setState({ balance: amountInElrond });
          useElrondWebStore.setState({ initialized: true });
        } catch (e) {
          console.log(e);
        }
      }
    );
  }, []);

  return null;
};
