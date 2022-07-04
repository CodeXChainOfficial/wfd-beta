import React, { useEffect } from "react";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Decimal } from "@cosmjs/math";
import type { OfflineSigner } from "@cosmjs/proto-signing";
import type { Coin } from "@cosmjs/stargate";
import type { AppConfig } from "../config";
import { getConfig, keplrConfig } from "../config";
import type { ReactNode } from "react";
import { createTrackedSelector } from "react-tracked";
import type { State } from "zustand";
import { toast } from "react-toastify";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { BigNumber } from "ethers";
import { NETWORK } from "../config/Constants";
import { WEFUND_JUNO_ADDRESS } from "../config/Constants";

declare let window: any;

export interface KeplrWalletStore {
  connected: boolean;
  accountNumber: number;
  account: string;
  balance: Coin[];
  client: SigningCosmWasmClient | undefined;
  config: AppConfig;
  initialized: boolean;
  initializing: boolean;
  name: string;
  network: string;
  signer: OfflineSigner | undefined;

  readonly clear: () => void;
  readonly connect: (walletChange?: boolean | "focus") => Promise<void>;
  readonly disconnect: () => void | Promise<void>;

  readonly getClient: () => SigningCosmWasmClient;
  readonly getSigner: () => OfflineSigner;
  readonly init: (signer?: OfflineSigner) => void;
  readonly refreshBalance: (
    address?: string,
    balance?: Coin[]
  ) => Promise<void>;
  readonly setNetwork: (network: string) => void;
  readonly updateSigner: (singer: OfflineSigner) => void;
  readonly getBalance: () => BigNumber;
  readonly getBalanceString: () => string;
  readonly sendTokens: (
    amount: number,
    denom: string,
    account: string,
    native: boolean
  ) => void;
}

export type WalletContextType = KeplrWalletStore;

const defaultStates = {
  connected: false,
  ready: false,
  accountNumber: 0,
  account: "",
  balance: [],
  client: undefined,
  config: getConfig(NETWORK),
  initialized: false,
  initializing: true,
  name: "",
  network: NETWORK,
  signer: undefined,
};

export const useKeplrWalletStore = create(
  subscribeWithSelector<KeplrWalletStore>((set, get) => ({
    ...defaultStates,
    clear: () => set({ ...defaultStates }),
    connect: async (walletChange = false) => {
      try {
        if (walletChange !== "focus") set({ initializing: true });
        const { config, init } = get();
        const signer = await loadKeplrWallet(config);
        set({ connected: true });
        init(signer);
        if (walletChange) set({ initializing: false });
      } catch (err: any) {
        toast.error(err?.message);
        set({ initializing: false });
      }
    },
    disconnect: () => {
      window.localStorage.clear();
      get().clear();
      set({ initializing: false });
      set({ connected: false });
    },
    getClient: () => get().client!,
    getSigner: () => get().signer!,
    init: (signer) => set({ signer }),
    refreshBalance: async (
      address = get().account,
      balance = get().balance
    ) => {
      const { client, config } = get();
      if (!client) return;
      balance.length = 0;
      for (const denom in config.coinMap) {
        // eslint-disable-next-line no-await-in-loop
        const coin = await client.getBalance(address, denom);
        if (coin) balance.push(coin);
      }

      set({ balance });
    },
    setNetwork: (network) => set({ network }),
    updateSigner: (signer) => set({ signer }),
    getBalance: () => {
      return BigNumber.from(get().balance[0].amount);
    },
    getBalanceString: () => {
      if (get().balance.length > 0)
        return get().balance[0].amount.toString() + " keplr";
      return "0 keplr";
    },
    sendTokens: async (
      amount: number,
      denom: string,
      address: string,
      native: boolean
    ) => {
      const client = get().client;
      const account = get().account;
      if (!client) return;

      await client?.sendTokens(
        account,
        WEFUND_JUNO_ADDRESS,
        [{ amount: amount.toString(), denom: denom }],
        "auto"
      );
    },
  }))
);

export const useKeplrWallet =
  createTrackedSelector<KeplrWalletStore>(useKeplrWalletStore);

export const KeplrWalletProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <WalletSubscription />
    </>
  );
};

const WalletSubscription = () => {
  useEffect(() => {
    // const walletAddress = window.localStorage.getItem("wallet_address");
    // if (walletAddress) {
    //   void useKeplrWalletStore.getState().connect();
    // } else {
    //   useKeplrWalletStore.setState({ initializing: false });
    // }

    const listenChange = () => {
      void useKeplrWalletStore.getState().connect(true);
    };
    const listenFocus = () => {
      // if (walletAddress) void useKeplrWalletStore.getState().connect("focus");
    };

    window.addEventListener("keplr_keystorechange", listenChange);
    window.addEventListener("focus", listenFocus);

    return () => {
      window.removeEventListener("keplr_keystorechange", listenChange);
      window.removeEventListener("focus", listenFocus);
    };
  }, []);

  useEffect(() => {
    return useKeplrWalletStore.subscribe(
      (x) => x.signer,
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      async (signer) => {
        if (!signer) return;
        try {
          useKeplrWalletStore.setState({
            client: await createClient({ signer }),
          });
        } catch (error) {
          console.log(error);
        }
      }
    );
  }, []);

  useEffect(() => {
    return useKeplrWalletStore.subscribe(
      (x) => x.client,
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      async (client) => {
        const { config, refreshBalance, signer } =
          useKeplrWalletStore.getState();
        if (!signer || !client) return;
        if (!window.keplr) {
          throw new Error("window.keplr not found");
        }
        const balance: Coin[] = [];
        const address = (await signer.getAccounts())[0].address;
        const account = await client.getAccount(address);
        const key = await window.keplr.getKey(config.chainId);
        await refreshBalance(address, balance);
        window.localStorage.setItem("wallet_address", address);

        useKeplrWalletStore.setState({
          accountNumber: account?.accountNumber || 0,
          account: address,
          balance,
          initialized: true,
          initializing: false,
          name: key.name || "",
        });
      }
    );
  }, []);

  return null;
};

const createClient = ({ signer }: { signer: OfflineSigner }) => {
  const { config } = useKeplrWalletStore.getState();
  return SigningCosmWasmClient.connectWithSigner(config.rpcUrl, signer, {
    gasPrice: {
      amount: Decimal.fromUserInput("0.0025", 100),
      denom: config.feeToken,
    },
  });
};

const loadKeplrWallet = async (config: AppConfig) => {
  if (
    !window.getOfflineSigner ||
    !window.keplr ||
    !window.getOfflineSignerAuto
  ) {
    throw new Error("Keplr extension is not available");
  }

  await window.keplr.experimentalSuggestChain(keplrConfig(config));
  await window.keplr.enable(config.chainId);

  const signer = await window.getOfflineSignerAuto(config.chainId);
  Object.assign(signer, {
    signAmino: (signer as any).signAmino ?? (signer as any).sign,
  });

  return signer;
};
