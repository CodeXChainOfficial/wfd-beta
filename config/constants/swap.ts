export const CHAIN_NAME = ["polygon", "bsc", "avalanche", "fantom", "arbitrum",
    "optimism", "ethereum", "cronos", "kava"];
export const CHAIN_INFOS = {
    "polygon": {
        chain_id: 137,
        icon: "https://app.thevoyager.io/static/media/polygon-logo.97ff139c.svg",
        token_list: "https://unpkg.com/quickswap-default-token-list@1.2.20/build/quickswap-default.tokenlist.json",
    },
    "bsc": {
        chain_id: 56,
        icon: "https://app.thevoyager.io/static/media/bsc-chain.18736889.png",
        token_list: "https://tokens.pancakeswap.finance/pancakeswap-top-100.json",
    },
    "avalanche": {
        chain_id: 43114,
        icon: "https://app.thevoyager.io/static/media/avax.234db155.svg",
        token_list: "https://raw.githubusercontent.com/pangolindex/tokenlists/main/pangolin.tokenlist.json"
    },
    "fantom": {
        chain_id: 250,
        icon: "https://app.thevoyager.io/static/media/ftm.3f8c71bb.svg",
        token_list: "https://raw.githubusercontent.com/SpookySwap/spooky-info/master/src/constants/token/spookyswap.json"
    },
    "arbitrum": {
        chain_id: 42161,
        icon: "https://app.thevoyager.io/static/media/arbitrum.7797e058.svg",
        token_list: "https://bridge.arbitrum.io/token-list-42161.json"
    },
    "optimism": {
        chain_id: 10,
        icon: "https://app.thevoyager.io/static/media/optimism.09a6673f.png",
        token_list: "https://static.optimism.io/optimism.tokenlist.json"
    },
    "ethereum": {
        chain_id: 1,
        icon: "https://app.thevoyager.io/static/media/ropsten-chain.91dd9993.png",
        token_list: "https://tokens.uniswap.org/"
    },
    "cronos": {
        chain_id: 25,
        icon: "https://app.thevoyager.io/static/media/cro-chain.ccf021cb.svg",
        token_list: ""
    },
    "kava": {
        chain_id: 2222,
        icon: "https://app.thevoyager.io/static/media/kava.600d3d4a.svg",
        token_list: ""
    }
}