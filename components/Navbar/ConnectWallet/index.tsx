import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  FunctionComponent,
  ReactNode,
} from "react";
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

import { useKeplrWallet } from "../../../contexts/keplrWallet";
import { useMetamaskWallet } from "../../../contexts/Metamask";
// import { BigNumber, ethers } from "ethers";

import {
  MdOutlineAccountBalanceWallet,
  MdCheck,
  MdOutlinePowerSettingsNew,
} from "react-icons/md";
import { BsCaretRight } from "react-icons/bs";

import { useStore, ActionKind } from "../../../contexts/store";
import { ShortenAddress } from "../../../utils/Util";

export default function ConnectWallet() {
  const { state, dispatch } = useStore();
  const keplr = useKeplrWallet();
  const metamask = useMetamaskWallet();
  const { onOpen, onClose, isOpen } = useDisclosure();

  let wallet: any;
  if (state.walletType == "metamask") wallet = metamask;
  else if (state.walletType == "keplr") wallet = keplr;

  const connected = wallet ? wallet.connected : false;
  const initialized = wallet ? wallet.initialized : false;

  async function connectTo(to: string) {
    if (to == "metamask") {
      metamask.connect();
      dispatch({ type: ActionKind.setWalletType, payload: "metamask" });
      dispatch({ type: ActionKind.setWallet, payload: metamask });
    } else if (to == "trust") {
      console.log("trust");
    } else if (to == "keplr") {
      keplr.connect();
      dispatch({ type: ActionKind.setWalletType, payload: "keplr" });
      dispatch({ type: ActionKind.setWallet, payload: keplr });
    }
  }

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
            <Text>{ShortenAddress(wallet?.address)}</Text>
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
        py="5px"
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
            <NavButton display={{ base: "none", lg: "block" }}>
              Connect Wallet
            </NavButton>
          )}
          {connected && (
            <NavButton display={{ base: "none", lg: "block" }}>
              {returnBank() ? returnBank() : "loading"}
            </NavButton>
          )}
          <Image
            src="/media/menuButton1.svg"
            h="20px"
            display={{ base: "block", lg: "none" }}
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
              <Text>{ShortenAddress(wallet?.address)}</Text>
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
          {WalletList.map((item, index) => (
            <ConnectionItem label={item.name} link={item.link} key={index} />
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

const WalletList = [
  {
    name: "Metamask",
    link: "metamask",
  },
  {
    name: "TrustWallet",
    link: "trust",
  },
  {
    name: "Keplr",
    link: "keplr",
  },
];
