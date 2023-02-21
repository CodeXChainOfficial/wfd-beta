import { toast } from "react-toastify";
import { TOKEN_LIST, SUCCESS_OPTION, NETWORK } from "../config/constants";

export function checkBscConnection(state: any) {
  const t_chainId = NETWORK == "mainnet" ? 0x38 : 0x61;
  if (state.walletType != "metamask" || state.wallet.chainId != t_chainId) {
    toast("Please connect to BSC Network");
    return false;
  }

  return true;
}
export function checkNetwork(state: any) {
  if (state.walletType == undefined || state.wallet == null) {
    toast("Please connect to wallet", SUCCESS_OPTION);
    return false;
  }

  return true;
}

export function Sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function ToText(node: string) {
  const tag = document.createElement("div");
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
}

export function ShortenAddress(address: string) {
  if (address) {
    const prefix = address.slice(0, 5);
    const suffix = address.slice(-5);
    return prefix + "..." + suffix;
  }
  return "";
}

export function LookForTokenInfo(chain: string, token: string) {
  const list = TOKEN_LIST.filter(
    (one) =>
      one.chain.toLowerCase() == chain.toLowerCase() &&
      one.name.toLowerCase() == token.toLowerCase()
  );
  if (list.length == 0) return null;
  return list[0];
}
