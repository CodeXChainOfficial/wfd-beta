import { WasmAPI, LCDClient, MsgExecuteContract } from '@terra-money/terra.js'
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
  const lcdClient = new LCDClient({ //testnet
    URL: 'https://bombay-lcd.terra.dev/',
    chainID: 'bombay-12',
    gasPrices: { uusd: 0.45 },
  })

  
  const api = new WasmAPI(lcdClient)
  
  const getTokenInfo = async (address: string) =>  {
    return await api.contractQuery(
      address,
      { token_info: {} }
    )
  }

  const getBalance = async (address: string) => {
    return Promise.resolve(0.0001)
    // return await api.contractQuery(
    //   connectedWallet?.terraAddress,
    //   { balance: { address: walletAddress} }
    // )
  }

  const getUserInfo = async (walletAddress: string):Promise<UserInfo> => {
    return Promise.resolve({amount: 0, card_number: "0", card_type: "Others"})
    // return await api.contractQuery(
    //   address,
    //   { get_user_info: { wallet: walletAddress} }
    // )
  }

  const getPendingRewards = async (walletAddress: string) => {
    // return await api.contractQuery(
    //   address,
    //   { get_pending_rewards: {wallet: walletAddress} }
    // )
  }

  return {
    getTokenInfo,
    getBalance,
    getUserInfo,
    getPendingRewards,
    ready
  }
};
