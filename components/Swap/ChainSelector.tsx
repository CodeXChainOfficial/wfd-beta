import { Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import {
  CHAIN_TYPE,
  ROUTER_CHAIN,
  ROUTER_CHAIN_CONFIG,
} from "../../config/constants/swap";

interface Props {
  chain: CHAIN_TYPE;
  setChain: Dispatch<SetStateAction<CHAIN_TYPE>>;
  w?: string;
}
const ChainSelector = ({ chain, setChain, w = "100%" }: Props) => {
  const chainInfo = ROUTER_CHAIN_CONFIG[chain];
  const { onOpen, onClose, isOpen } = useDisclosure();

  const selectChain = (chain: CHAIN_TYPE) => {
    setChain(chain);
    onClose();
  };

  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <PopoverTrigger>
        <Flex
          w={w}
          h="50px"
          border="1px solid"
          bg="#3F147F"
          borderColor="#3F147F"
          borderRadius="10px"
          align="center"
          px="15px"
        >
          <Image src={chainInfo.icon} width="20px" />
          <Text ml="10px">{chain}</Text>
        </Flex>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <Flex direction="column" width="100%" maxH="300px">
            {ROUTER_CHAIN.map((item, index) => {
              const c = item as CHAIN_TYPE;
              const info = ROUTER_CHAIN_CONFIG[c];
              return (
                <Flex
                  width="100%"
                  h="50px"
                  align="center"
                  color="black"
                  _hover={{ bg: "#3F147F", color: "white" }}
                  onClick={() => selectChain(c)}
                  px="15px"
                  key={index}
                >
                  <Image src={info.icon} width="20px" />
                  <Text ml="10px">{c}</Text>
                </Flex>
              );
            })}
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ChainSelector;
