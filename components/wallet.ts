import { useState } from 'react';

interface lcdConfig {
  url: string
  chainID: string
  gasPrice: {uusd: number}
}

export interface UserInfo {
  amount: number
  card_type: string
  card_number: string
}

export const useSmartContract = () => {
  
  const [decimal, setDecimal] = useState()
  const [ready, setReady] = useState(false)
  
  const getTokenInfo = async (address: string) =>  {
    // return await api.contractQuery(
    //   address,
    //   { token_info: {} }
    // )
    return Promise.resolve({})
  }

  const getBalance = async (address: string) => {
    return Promise.resolve(0.0001)
    
  }

  const getUserInfo = async (walletAddress: string):Promise<UserInfo> => {
    return Promise.resolve({amount: 0, card_number: "0", card_type: "Others"})
  }

  const getPendingRewards = async (walletAddress: string) => {
    return Promise.resolve([])
  }

  return {
    getTokenInfo,
    getBalance,
    getUserInfo,
    getPendingRewards,
    ready
  }
};
