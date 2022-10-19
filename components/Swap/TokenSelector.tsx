import { Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { CHAIN_TYPE } from "../../config/constants/swap";
import { useTokenList } from "../../hook/RouterTokenlist";

interface Props {
  chain: CHAIN_TYPE;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}
const TokenSelector = ({ chain, token, setToken }: Props) => {
  const [index, setIndex] = useState(0);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const tokenList = useTokenList(chain);

  useEffect(() => {
    setIndex(0);
    if (tokenList.length > 0) setToken(tokenList[0].address);
  }, [tokenList]);

  const selectToken = (index: number) => {
console.log(tokenList[index])
    setToken(tokenList[index].address);
    setIndex(index);
    onClose();
  };

  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <PopoverTrigger>
        <Flex
          width="100%"
          h="50px"
          border="1px solid"
          // bg="#3F147F"
          borderColor="#3F147F"
          borderRadius="10px"
          align="center"
          justify="space-between"
          px="15px"
        >
          <Flex width="100%" align="center">
            <Image src={tokenList[index]?.logoURI} width="20px" />
            <Text ml="10px">{tokenList[index]?.symbol}</Text>
          </Flex>
          <MdExpandMore />
        </Flex>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <Flex
            direction="column"
            width="100%"
            maxH="300px"
            overflowY="scroll"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
                background: "#aaa",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#000",
                borderRadius: "24px",
              },
            }}
          >
            {tokenList.map((item, index) => {
              return (
                <Flex
                  width="100%"
                  minH="50px"
                  align="center"
                  color="black"
                  _hover={{ bg: "#3F147F", color: "white" }}
                  onClick={() => selectToken(index)}
                  key={index}
                  px="15px"
                >
                  <Image src={item.logoURI} width="20px" />
                  <Text ml="10px">{item.symbol}</Text>
                </Flex>
              );
            })}
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default TokenSelector;
