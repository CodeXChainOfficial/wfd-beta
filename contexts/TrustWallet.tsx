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

import { BigNumber } from "ethers";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

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
        const connector = new WalletConnect({
          bridge: "https://bridge.walletconnect.org", // Required
          qrcodeModal: QRCodeModal,
        });
        // Check if connection is already established
        if (!connector.connected) {
          // create new session
          connector.createSession();
        }
        // Subscribe to connection events
        connector.on("connect", (error, payload) => {
          if (error) {
            throw error;
          }
          // Get provided accounts and chainId
          const { accounts, chainId } = payload.params[0];
        });
        connector.on("session_update", (error, payload) => {
          if (error) {
            throw error;
          }
          // Get updated accounts and chainId
          const { accounts, chainId } = payload.params[0];
        });
        connector.on("disconnect", (error, payload) => {
          if (error) {
            throw error;
          }
          // Delete connector
        });
        const request = connector._formatRequest({
          method: "get_accounts",
        });
        connector
          ._sendCallRequest(request)
          .then((result) => {
            // Returns the accounts
            console.log(result);
          })
          .catch((error) => {
            // Error returned when rejected
            console.error(error);
          });
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
