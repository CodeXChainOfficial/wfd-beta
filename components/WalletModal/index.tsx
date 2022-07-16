import React, { FunctionComponent } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

import { WALLET_LIST } from "../../config/constants";
import { useKeplrWallet } from "../../contexts/keplrWallet";
import { useMetamaskWallet } from "../../contexts/metamask";
import { useTrustWallet } from "../../contexts/trustWallet";
import { useTronLink } from "../../contexts/tronLink";
import { useNearWallet } from "../../contexts/nearWallet";
import { useElrondWeb } from "../../contexts/elrond";
import { useStore, ActionKind } from "../../contexts/store";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}
const WalletModal: FunctionComponent<Props> = ({ onClose, isOpen }) => {
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

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width="300px">
        {/* <ModalHeader>Modal Title</ModalHeader> */}
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <Flex width="100%" justify="center" py="50px" px="30px">
            <Flex width="100%" direction="column">
              {WALLET_LIST.map((wallet: any, index: number) => (
                <Flex
                  key={index}
                  align="center"
                  height="60px"
                  cursor="pointer"
                  _hover={{ background: "red.100" }}
                  onClick={() => connectTo(wallet.link)}
                >
                  <Image src={wallet.icon} width="50px" rounded="10px" />
                  <Text ml="10px">{wallet.name}</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default WalletModal;
