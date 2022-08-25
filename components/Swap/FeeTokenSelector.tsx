import { Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  CHAIN_TYPE,
  ROUTER_CHAIN,
  ROUTER_CHAIN_CONFIG,
  ROUTER_FEE_TOKENS,
} from "../../config/constants/swap";

interface Props {
  chain: CHAIN_TYPE;
  feeToken: string;
  setFeeToken: Dispatch<SetStateAction<string>>;
}
const FeeTokenSelector = ({ chain, feeToken, setFeeToken }: Props) => {
  const [index, setIndex] = useState(0);
  const feeInfo = ROUTER_FEE_TOKENS[chain];
  const { onOpen, onClose, isOpen } = useDisclosure();

  useEffect(() => {
    setIndex(0);
    setFeeToken(feeInfo[0].address);
  }, [chain]);

  const selectFeeToken = (index: number) => {
    setFeeToken(feeInfo[index].address);
    setIndex(index);
    onClose();
  };

  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <PopoverTrigger>
        <Flex
          width={{ base: "100%", lg: "150px" }}
          h="50px"
          border="1px solid"
          bg="#3F147F"
          borderColor="#3F147F"
          borderRadius="10px"
          align="center"
          px="15px"
        >
          <Image src={feeInfo[index].image} width="20px" />
          <Text ml="10px">{feeInfo[index].symbol}</Text>
        </Flex>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <Flex direction="column" width="100%" maxH="300px">
            {feeInfo.map((item, index) => {
              return (
                <Flex
                  width="100%"
                  h="50px"
                  align="center"
                  color="black"
                  _hover={{ bg: "#3F147F", color: "white" }}
                  onClick={() => selectFeeToken(index)}
                  px="15px"
                  key={index}
                >
                  <Image src={item.image} width="20px" />
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

export default FeeTokenSelector;
