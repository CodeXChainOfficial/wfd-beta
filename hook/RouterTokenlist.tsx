import { useEffect, useState } from "react";
import {
  CHAIN_TYPE,
  ROUTER_CHAIN_CONFIG,
  ROUTER_TOKENS,
} from "../config/constants/swap";

export const useTokenList = (chain: CHAIN_TYPE) => {
  const [tokenList, setTokenList] = useState<any[]>([]);
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const fetchTokenList = async () => {
      let tmpList: any[] = [];
      for (let i = 0; i < ROUTER_TOKENS.length; i++) {
        try {
          const res = await fetch(ROUTER_TOKENS[i]);
          const list = await res.json();
          tmpList = tmpList.concat(list.tokens);
        } catch (e) {}
      }
      setTokenList(tmpList);
    };
    if (tokenList.length == 0) {
      fetchTokenList();
    }
  }, []);

  useEffect(() => {
    if (tokenList.length > 0) {
      const chainConfig = ROUTER_CHAIN_CONFIG[chain];
      let list = tokenList.filter(
        (token: any) => token.chainId == chainConfig.chain_id
      );
      const unique = [...new Map(list.map((m) => [m.address, m])).values()];
      list = unique.sort((a: any, b: any) => {
        if (a.symbol > b.symbol) return 1;
        if (a.symbol < b.symbol) return -1;
        return 0;
      });

      setList(list);
    }
  }, [tokenList, chain]);

  return list;
};
