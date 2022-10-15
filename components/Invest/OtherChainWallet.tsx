import React, { FunctionComponent, useEffect } from "react";
import { Box, Flex, Input, Text, Select } from "@chakra-ui/react";
import { toast } from "react-toastify";
import {
  CHAINS_CONFIG,
  ERROR_OPTION,
  TOKEN_LIST,
} from "../../config/constants";

import { useStore, ActionKind } from "../../contexts/store";
import { useKeplrWallet } from "../../contexts/keplrWallet";
import { useMetamaskWallet } from "../../contexts/metamask";
import { useTrustWallet } from "../../contexts/trustWallet";
import { useTronLink } from "../../contexts/tronLink";
import { useNearWallet } from "../../contexts/nearWallet";
import { useElrondWeb } from "../../contexts/elrond";

interface Props {
  token: string;
  setToken: (value: string) => void;
  chain: string;
  setChain: (value: string) => void;
}
const OtherChainWallet: FunctionComponent<Props> = ({
  token,
  setToken,
  chain,
  setChain,
}) => {
  const list = TOKEN_LIST.filter((item) => item.chain == chain);
  useEffect(() => {
    setToken(list[0].name);
  }, [chain]);

  const { state, dispatch } = useStore();
  const keplr = useKeplrWallet();
  const metamask = useMetamaskWallet();
  const trust = useTrustWallet();
  const tronLink = useTronLink();
  const near = useNearWallet();
  const elrond = useElrondWeb();

  async function connectTo(to: string) {
    let wallet: any;
    if (to == "metamask") wallet = metamask;
    else if (to == "keplr") wallet = keplr;
    else if (to == "trust") wallet = trust;
    else if (to == "tron") wallet = tronLink;
    else if (to == "near") wallet = near;
    else if (to == "elrond") wallet = elrond;

    await wallet.connect();
    dispatch({ type: ActionKind.setWalletType, payload: to });
  }
  const chains = CHAINS_CONFIG;
  const onChangeChain = async (e: any) => {
    setChain(e.target.value);
    const chain: string = e.target.value.toLowerCase();

    switch (chain) {
      case "juno":
        connectTo("keplr");
        break;
      case "bsc":
      case "polygon":
      case "oneledger":
      case "fantom":
        const ethereum = window.ethereum;
        try {
          await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: chains[chain].chainId }],
          });
        } catch (switchError: any) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            try {
              await ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: chains[chain].chainId,
                    chainName: chains[chain].chainName,
                    rpcUrls: [chains[chain].rpc] /* ... */,
                  },
                ],
              });
            } catch (addError) {
              // handle "add" error
              toast("Can't switch to " + chain.toUpperCase(), ERROR_OPTION);
            }
          }
          // handle other "switch" errors
        }
        connectTo("metamask");
        break;
      case "tron":
        connectTo("tron");
        break;
      case "near":
        connectTo("near");
        break;
      case "elrond":
        connectTo("elrond");
        break;
    }
  };

  return (
    <Flex
      direction={{ base: "column", md: "column", lg: "row" }}
      mt="40px"
      justify="center"
      align="center"
    >
      <Box ml={{ base: "0px", md: "0px", lg: "0px" }}>
        <Flex>
          <Text mb="20px">Select Chain</Text>
        </Flex>
        <Select
          id="chainselect"
          style={{
            border: "1.5px solid rgba(255, 255, 255, 0.2)",
            background: "rgba(0, 0, 0, 0.25)",
          }}
          h="45px"
          shadow="sm"
          size="sm"
          w="300px"
          value={chain}
          rounded="md"
          onChange={onChangeChain}
        >
          <option style={{ backgroundColor: "#1B0645" }}>Juno</option>
          <option style={{ backgroundColor: "#1B0645" }}>BSC</option>
          <option style={{ backgroundColor: "#1B0645" }}>Tron</option>
          <option style={{ backgroundColor: "#1B0645" }}>Near</option>
          <option style={{ backgroundColor: "#1B0645" }}>Elrond</option>
          <option style={{ backgroundColor: "#1B0645" }}>Polygon</option>
          <option style={{ backgroundColor: "#1B0645" }}>OneLedger</option>
          <option style={{ backgroundColor: "#1B0645" }}>Fantom</option>
        </Select>
      </Box>
      <Box ml={{ base: "0px", md: "0px", lg: "30px" }}>
        <Flex mt={{ base: "40px", md: "40px", lg: "0px" }}>
          <Text mb="20px">TOKENS</Text>
        </Flex>
        <Box>
          <Select
            id="tokenselect"
            style={{
              border: "1.5px solid rgba(255, 255, 255, 0.2)",
              background: "rgba(0, 0, 0, 0.25)",
            }}
            h="45px"
            shadow="sm"
            size="sm"
            // selected={false}
            width="300px"
            rounded="md"
            value={token}
            onChange={(e) => {
              setToken(e.target.value);
            }}
          >
            {list.map((token, index) => (
              <option style={{ backgroundColor: "#1B0645" }} key={index}>
                {token.name}
              </option>
            ))}
          </Select>
        </Box>
      </Box>
    </Flex>
  );
};

export default OtherChainWallet;
