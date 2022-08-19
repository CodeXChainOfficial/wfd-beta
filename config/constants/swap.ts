export type CHAIN_TYPE =
  | "Polygon"
  | "Bsc"
  | "Avalanche"
  | "Fantom"
  | "Arbitrum"
  | "Optimism"
  | "Ethereum"
  | "Cronos";
//   | "Kava

export const ROUTER_CHAIN = [
  "Polygon",
  "Bsc",
  "Avalanche",
  "Fantom",
  "Arbitrum",
  "Optimism",
  "Ethereum",
  "Cronos",
  //   "Kava",
];
export const ROUTER_CHAIN_CONFIG = {
  Polygon: {
    chain_id: 137,
    rpc: "https://polygon-rpc.com",
    icon: "https://app.thevoyager.io/static/media/polygon-logo.97ff139c.svg",
    token_list:
      "https://unpkg.com/quickswap-default-token-list@1.2.20/build/quickswap-default.tokenlist.json",
  },
  Bsc: {
    chain_id: 56,
    rpc: "https://bsc-dataseed4.ninicoin.io",
    icon: "https://app.thevoyager.io/static/media/bsc-chain.18736889.png",
    token_list: "https://tokens.pancakeswap.finance/pancakeswap-top-100.json",
  },
  Avalanche: {
    chain_id: 43114,
    rpc: "https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc	",
    icon: "https://app.thevoyager.io/static/media/avax.234db155.svg",
    token_list:
      "https://raw.githubusercontent.com/pangolindex/tokenlists/main/pangolin.tokenlist.json",
  },
  Fantom: {
    chain_id: 250,
    rpc: "https://rpc.ftm.tools",
    icon: "https://app.thevoyager.io/static/media/ftm.3f8c71bb.svg",
    token_list:
      "https://raw.githubusercontent.com/SpookySwap/spooky-info/master/src/constants/token/spookyswap.json",
  },
  Arbitrum: {
    chain_id: 42161,
    rpc: "https://rpc.ankr.com/arbitrum",
    icon: "https://app.thevoyager.io/static/media/arbitrum.7797e058.svg",
    token_list: "https://bridge.arbitrum.io/token-list-42161.json",
  },
  Optimism: {
    chain_id: 10,
    rpc: "https://mainnet.optimism.io",
    icon: "https://app.thevoyager.io/static/media/optimism.09a6673f.png",
    token_list: "https://static.optimism.io/optimism.tokenlist.json",
  },
  Ethereum: {
    chain_id: 1,
    rpc: "https://mainnet.infura.io/v3/",
    icon: "https://app.thevoyager.io/static/media/ropsten-chain.91dd9993.png",
    token_list: "https://tokens.uniswap.org/",
  },
  Cronos: {
    chain_id: 25,
    rpc: "https://evm.cronos.org",
    icon: "https://app.thevoyager.io/static/media/cro-chain.ccf021cb.svg",
    token_list: "",
  },
  Kava: {
    chain_id: 2222,
    icon: "https://app.thevoyager.io/static/media/kava.600d3d4a.svg",
    token_list: "",
  },
};

export const ROUTER_FEE_TOKENS = {
  Polygon: [
    {
      symbol: "MATIC",
      address: "0x0000000000000000000000000000000000001010",
      image: "./tokens/matic.png",
    },
    {
      symbol: "WMATIC",
      address: "0x4c28f48448720e9000907BC2611F73022fdcE1fA",
      image: "./tokens/matic.png",
    },
    {
      symbol: "ROUTE",
      address: "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4",
      image: "https://app.thevoyager.io/static/media/route-coin.7036b1ba.svg",
    },
    {
      symbol: "USDC",
      address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      image: "https://app.thevoyager.io/static/media/usdc-token.f08e02b1.svg",
    },
    {
      symbol: "DFYN",
      address: "0xC168E40227E4ebD8C1caE80F7a55a4F0e6D66C97",
      image: "https://app.thevoyager.io/static/media/dfyn-token.228c88f4.png",
    },
  ],
  Bsc: [
    {
      symbol: "BNB",
      address: "0x0100000000000000000000000000000000000001",
      image: "",
    },
    {
      symbol: "WBNB",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      image: "",
    },
    {
      symbol: "ROUTE",
      address: "0xfD2700c51812753215754De9EC51Cdd42Bf725B9",
      image: "https://app.thevoyager.io/static/media/route-coin.7036b1ba.svg",
    },
    {
      symbol: "USDC",
      address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
      image: "https://app.thevoyager.io/static/media/usdc-token.f08e02b1.svg",
    },
    {
      symbol: "DFYN",
      address: "0x9c08941465EB16982Fa8385A7BbD74F7972C5a27",
      image: "https://app.thevoyager.io/static/media/dfyn-token.228c88f4.png",
    },
  ],
  Avalanche: [
    {
      symbol: "AVAX",
      address: "0x0100000000000000000000000000000000000001",
      image: "",
    },
    {
      symbol: "WAVAX",
      address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      image: "",
    },
    {
      symbol: "ROUTE",
      address: "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4",
      image: "https://app.thevoyager.io/static/media/route-coin.7036b1ba.svg",
    },
    {
      symbol: "USDC",
      address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
      image: "https://app.thevoyager.io/static/media/usdc-token.f08e02b1.svg",
    },
    {
      symbol: "DFYN",
      address: "0x2b6b20ceaC439042edC6eFD3d41b11af66013e58",
      image: "https://app.thevoyager.io/static/media/dfyn-token.228c88f4.png",
    },
  ],
  Fantom: [
    {
      symbol: "FTM",
      address: "0x0100000000000000000000000000000000000001",
      image: "",
    },
    {
      symbol: "WFTM",
      address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
      image: "",
    },
    {
      symbol: "ROUTE",
      address: "0x11BbF12363dC8375b78D2719395d505f52a02F68",
      image: "https://app.thevoyager.io/static/media/route-coin.7036b1ba.svg",
    },
    {
      symbol: "USDC",
      address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
      image: "https://app.thevoyager.io/static/media/usdc-token.f08e02b1.svg",
    },
    {
      symbol: "DFYN",
      address: "0x13538f1450Ca2E1882Df650F87Eb996fF4Ffec34",
      image: "https://app.thevoyager.io/static/media/dfyn-token.228c88f4.png",
    },
  ],
  Arbitrum: [
    {
      symbol: "ETH",
      address: "0x0000000000000000000000000000000000001010",
      image: "",
    },
    {
      symbol: "WETH",
      address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      image: "",
    },
    {
      symbol: "ROUTE",
      address: "0x11BbF12363dC8375b78D2719395d505f52a02F68",
      image: "https://app.thevoyager.io/static/media/route-coin.7036b1ba.svg",
    },
    {
      symbol: "USDC",
      address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
      image: "https://app.thevoyager.io/static/media/usdc-token.f08e02b1.svg",
    },
    {
      symbol: "DFYN",
      address: "0x13538f1450Ca2E1882Df650F87Eb996fF4Ffec34",
      image: "https://app.thevoyager.io/static/media/dfyn-token.228c88f4.png",
    },
  ],
  Optimism: [
    {
      symbol: "ETH",
      address: "0x0000000000000000000000000000000000001010",
      image: "",
    },
    {
      symbol: "WETH",
      address: "0x4200000000000000000000000000000000000006",
      image: "",
    },
    {
      symbol: "ROUTE",
      address: "0x8413041a7702603d9d991F2C4ADd29e4e8A241F8",
      image: "https://app.thevoyager.io/static/media/route-coin.7036b1ba.svg",
    },
    {
      symbol: "USDC",
      address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
      image: "https://app.thevoyager.io/static/media/usdc-token.f08e02b1.svg",
    },
    {
      symbol: "DFYN",
      address: "0xf44Ff799eA2bBFeC96f9A50498209AAc3C2b3b8b",
      image: "https://app.thevoyager.io/static/media/dfyn-token.228c88f4.png",
    },
  ],
  Ethereum: [
    {
      symbol: "ETH",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      image: "",
    },
    {
      symbol: "WETH",
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      image: "",
    },
    {
      symbol: "ROUTE",
      address: "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4",
      image: "https://app.thevoyager.io/static/media/route-coin.7036b1ba.svg",
    },
    {
      symbol: "USDC",
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      image: "https://app.thevoyager.io/static/media/usdc-token.f08e02b1.svg",
    },
    {
      symbol: "DFYN",
      address: "0x9695e0114e12C0d3A3636fAb5A18e6b737529023",
      image: "https://app.thevoyager.io/static/media/dfyn-token.228c88f4.png",
    },
  ],
  Cronos: [
    {
      symbol: "CRO",
      address: "0x0000000000000000000000000000000000000001",
      image: "",
    },
    {
      symbol: "WCRO",
      address: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
      image: "",
    },
    {
      symbol: "ROUTE",
      address: "0x13538f1450Ca2E1882Df650F87Eb996fF4Ffec34",
      image: "https://app.thevoyager.io/static/media/route-coin.7036b1ba.svg",
    },
    {
      symbol: "USDC",
      address: "0xc21223249CA28397B4B6541dfFaEcC539BfF0c59",
      image: "https://app.thevoyager.io/static/media/usdc-token.f08e02b1.svg",
    },
    {
      symbol: "DFYN",
      address: "0x11BbF12363dC8375b78D2719395d505f52a02F68",
      image: "https://app.thevoyager.io/static/media/dfyn-token.228c88f4.png",
    },
  ],
};
//   Kava: [
//     { symbol: "KAVA", address: "0x686c626E48bfC5DC98a30a9992897766fed4Abd3" },
//     { symbol: "WKAVA", address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
//     { symbol: "ROUTE", address: "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4" },
//     { symbol: "USDC", address: "" },
//     { symbol: "DFYN", address: "" }
