import React, { useEffect, ReactNode } from "react";
import { createTrackedSelector } from "react-tracked";
import { toast } from "react-toastify";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

import { BigNumber } from "ethers";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { AbiItem, Parse } from "web3-utils";
import { WEFUND_BSC_ADDRESS } from "../config/constants1";
import ERC20_ABI from "../config/ERC20.json";
import { sendError } from "next/dist/server/api-utils";

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
  account: string;
  balance: BigNumber;
  initialized: boolean;
  initializing: boolean;
  web3: Web3 | undefined;

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

export type WalletContextType = TrustWalletStore;

const defaultStates = {
  connected: false,
  account: "",
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
          account: accounts[0],
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
    sendTokens: async (
      amount: number,
      denom: string,
      address: string,
      native: boolean
    ) => {
      const web3 = get().web3;
      if (!web3) return false;
      const sender = get().account;
      const nonce = await web3.eth.getTransactionCount(sender);

      if (native) {
        const tx = {
          from: sender,
          to: WEFUND_BSC_ADDRESS,
          value: amount.toString(),
          nonce: nonce,
          // gasLimit: ethers.utils.hexlify(gas_limit), // 100000
          // gasPrice: gas_price,
        };
        await web3.eth
          .sendTransaction(tx)
          .on("transactionHash", function (hash) {})
          .on("receipt", function (receipt) {})
          .on("confirmation", function (confirmationNumber, receipt) {})
          .on("error", console.error); // If a out of gas error, the second parameter is the receipt.
      } else {
        const contract = new web3.eth.Contract(
          ERC20_ABI.abi as AbiItem[],
          address
        );
        await contract.methods
          .transfer(WEFUND_BSC_ADDRESS, amount)
          .send({ from: get().account });
      }
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
        const { web3, account: address } = useTrustWalletStore.getState();
        await web3?.eth.getBalance(address).then((res) => {
          console.log(web3.utils.fromWei(res));
        });

        useTrustWalletStore.setState({ initialized: true });
      }
    );
  }, []);

  return null;
};
