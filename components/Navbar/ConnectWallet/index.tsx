import React, { FunctionComponent, useEffect } from "react";
import {
  Image,
  Button,
  Text,
  Flex,
  Link,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import { WALLET_LIST } from "../../../config/constants";
import { useKeplrWallet } from "../../../contexts/keplrWallet";
import { useMetamaskWallet } from "../../../contexts/metamask";
import { useTrustWallet } from "../../../contexts/trustWallet";
import { useTronLink } from "../../../contexts/tronLink";
import { useNearWallet } from "../../../contexts/nearWallet";
import { useElrondWeb } from "../../../contexts/elrond";

import { MdOutlineAccountBalanceWallet, MdCheck } from "react-icons/md";
import { BsCaretRight } from "react-icons/bs";

import { useStore, ActionKind, useWallet } from "../../../contexts/store";
import { ShortenAddress } from "../../../utils/utility";

export default function ConnectWallet() {
  const { state, dispatch } = useStore();
  const keplr = useKeplrWallet();
  const metamask = useMetamaskWallet();
  const trust = useTrustWallet();
  const tronLink = useTronLink();
  const near = useNearWallet();
  const elrond = useElrondWeb();

  const { onOpen, onClose, isOpen } = useDisclosure();

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

  let wallet: any;
  if (state.walletType == "metamask") wallet = metamask;
  else if (state.walletType == "keplr") wallet = keplr;
  else if (state.walletType == "trust") wallet = trust;
  else if (state.walletType == "tron") wallet = tronLink;
  else if (state.walletType == "near") wallet = near;
  else if (state.walletType == "elrond") wallet = elrond;

  useEffect(() => {
    dispatch({ type: ActionKind.setWallet, payload: wallet });
  }, [wallet?.initialized]);

  // const wallet = useWallet();
  const connected = wallet ? wallet.connected : false;
  const initialized = wallet ? wallet.initialized : false;

  function returnBank() {
    return (
      <Flex h="100%" align="center">
        <MdOutlineAccountBalanceWallet
          size={24}
          // color="#0F0038"
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

  const ConnectionItem = ({ label, link }: { label: string; link: string }) => {
    return (
      <Flex
        align="center"
        cursor="pointer"
        py="10px"
        rounded="10px"
        _hover={{ background: "black" }}
        onClick={() => {
          connectTo(link);
          onClose();
        }}
      >
        <BsCaretRight size={16} /> {label}
      </Flex>
    );
  };

  interface Props {
    display: any;
  }
  const NavButton: FunctionComponent<Props> = (props) => {
    return (
      <Button
        minW="180px"
        display={props.display}
        colorScheme="orange"
        rounded="30px"
        justifyContent={"center"}
        _hover={{ boxShadow: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        {props.children}
      </Button>
    );
  };
  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <PopoverTrigger>
        <Flex>
          {!connected && (
            <NavButton display={{ base: "none", md: "block" }}>
              Connect Wallet
            </NavButton>
          )}
          {connected && (
            <NavButton display={{ base: "none", md: "block" }}>
              {returnBank() ? returnBank() : "loading"}
            </NavButton>
          )}
          <Image
            src="/media/menuButton1.svg"
            h="20px"
            display={{ base: "block", md: "none" }}
          />
        </Flex>
      </PopoverTrigger>
      <PopoverContent
        background="linear-gradient(328.75deg, #493c85 -5.49%, #0f0038 104.44%)"
        width="300px"
        border="0px"
        _focus={{ boxShadow: "none" }}
      >
        <PopoverArrow />
        <PopoverBody p="20px">
          {connected && initialized && (
            <Flex justify={"space-between"} mb="20px">
              <Text>{ShortenAddress(wallet?.account)}</Text>
              <Link>
                <Text
                  onClick={() => {
                    wallet.disconnect();
                    onClose();
                  }}
                >
                  Disconnect
                </Text>
              </Link>
            </Flex>
          )}
          {WALLET_LIST.map((item, index) => (
            <ConnectionItem label={item.name} link={item.link} key={index} />
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
