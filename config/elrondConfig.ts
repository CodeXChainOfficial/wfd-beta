export const configEndpoint = "dapp/config";
export const networkConfigEndpoint = "network/config";
export const addressEndpoint = "address";

export function getElrondConfig(env: any) {
  switch (env) {
    case "devnet":
      return {
        id: "devnet",
        chainId: "D",
        name: "Devnet",
        egldLabel: "xEGLD",
        egldDenomination: "18",
        decimals: "4",
        gasPerDataByte: "1500",
        walletConnectDeepLink:
          "https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://maiar.com/",
        walletConnectBridgeAddresses: ["https://bridge.walletconnect.org"],
        walletAddress: "https://devnet-wallet.elrond.com",
        apiAddress: "https://devnet-api.elrond.com",
        explorerAddress: "http://devnet-explorer.elrond.com",
        apiTimeout: "4000",
      };
    case "testnet":
      return {
        id: "testnet",
        chainId: "T",
        name: "Testnet",
        egldLabel: "xEGLD",
        egldDenomination: "18",
        decimals: "4",
        gasPerDataByte: "1500",
        walletConnectDeepLink:
          "https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://maiar.com/",
        walletConnectBridgeAddresses: ["https://bridge.walletconnect.org"],
        walletAddress: "https://testnet-wallet.elrond.com",
        apiAddress: "https://testnet-api.elrond.com",
        explorerAddress: "http://testnet-explorer.elrond.com",
        apiTimeout: "4000",
      };
    case "mainnet":
      return {
        id: "mainnet",
        chainId: "1",
        name: "Mainnet",
        egldLabel: "xEGLD",
        egldDenomination: "18",
        decimals: "4",
        gasPerDataByte: "1500",
        walletConnectDeepLink:
          "https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://maiar.com/",
        walletConnectBridgeAddresses: ["https://bridge.walletconnect.org"],
        walletAddress: "https://wallet.elrond.com",
        apiAddress: "https://api.elrond.com",
        explorerAddress: "https://explorer.elrond.com",
        apiTimeout: "4000",
      };
    default:
      throw Error(
        `Unconfigured environment '${env}'. Can be configured in src/config.js.`
      );
  }
}
