import React, { FunctionComponent, ReactNode, useEffect } from "react";
import { Button, Text, Flex } from "@chakra-ui/react";
import { useKeplrWallet } from "../../../contexts/keplrWallet";
import { useMetamaskWallet } from "../../../contexts/metamask";
import { useTrustWallet } from "../../../contexts/trustWallet";
import { useTronLink } from "../../../contexts/tronLink";
import { useNearWallet } from "../../../contexts/nearWallet";
import { useElrondWeb } from "../../../contexts/elrond";

import { MdOutlineAccountBalanceWallet, MdCheck } from "react-icons/md";

import { useStore, ActionKind } from "../../../contexts/store";
import { ShortenAddress } from "../../../utils/utility";

export default function ConnectWallet() {
  const { state, dispatch } = useStore();
  const keplr = useKeplrWallet();
  const metamask = useMetamaskWallet();
  const trust = useTrustWallet();
  const tronLink = useTronLink();
  const near = useNearWallet();
  const elrond = useElrondWeb();

  const getWallet = (type: string | undefined) => {
    let wallet;
    if (type == "metamask") wallet = metamask;
    else if (type == "keplr") wallet = keplr;
    else if (type == "trust") wallet = trust;
    else if (type == "tron") wallet = tronLink;
    else if (type == "near") wallet = near;
    else if (type == "elrond") wallet = elrond;
    else wallet = metamask;
    return wallet;
  };

  const wallet = getWallet(state.walletType);

  useEffect(() => {
    dispatch({ type: ActionKind.setWallet, payload: wallet });
  }, [wallet?.initialized]);

  const connected = wallet ? wallet.connected : false;
  const initialized = wallet ? wallet.initialized : false;

  const openModal = () => {
    state.openWalletModal && state.openWalletModal();
  };

  function returnBank() {
    return (
      <Flex h="100%" align="center">
        <MdOutlineAccountBalanceWallet
          size={24}
          color="white"
          style={{ display: "inline-block", marginTop: "-3px" }}
        />
        {initialized ? (
          <Flex h="100%" align="center">
            <MdCheck size={16} />
            <Text>{ShortenAddress(wallet?.account)}</Text>
          </Flex>
        ) : (
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </Flex>
    );
  }

  const NavButton: FunctionComponent<{ children: ReactNode }> = (props) => {
    return (
      <Button
        minW="180px"
        border={" 2px solid #6100FF"}
        backgroundColor="rgba(36, 0, 254, 0.2)"
        rounded="30px"
        height={"35px"}
        justifyContent={"center"}
        _hover={{ boxShadow: "none" }}
        _focus={{ boxShadow: "none" }}
        onClick={openModal}
      >
        {props.children}
      </Button>
    );
  };

  return (
    <Flex>
      {!connected && <NavButton>Connect Wallet</NavButton>}
      {connected && (
        <NavButton>{returnBank() ? returnBank() : "loading"}</NavButton>
      )}
    </Flex>
  );
}
