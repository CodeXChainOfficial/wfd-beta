import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { HStack, Image, Flex, Text, VStack, Button, Box } from '@chakra-ui/react'



export default function Card({img, title}: {img: string; title: string}) {
  return (
    <Flex 
      direction='column'
      minW={{base:'118px', lg:'261px'}}
      w={{base:'118px', lg:'261px'}}
      py={{base:'20px', lg:'39px'}}
    >
      <Image src={img} width='100%' />
      <Text
        mt='32px'
        fontSize={{base:'12px', lg:'20px'}}
        fontWeight='900'
      >
        {title}
      </Text>
      <VStack
        border='5px solid transparent'
        background='linear-gradient(1deg, #3F1780 0%, #0E0D5A 55.52%) padding-box,linear-gradient(91deg, rgba(105, 228, 255, 0.82) 0%, rgba(108, 15, 227, 0.82) 125.58%) border-box'
        p = '10px'
        rounded={'20px'}
        py={{base:'13px', lg:'31px'}}
        spacing={'10px'}
        align='center'
        mt={{base:'10px', lg:'27px'}}
      >
        <Text
          w='100%'
          fontSize={{base:'8px', lg:'20px'}}
          fontWeight='900'
        >
          WFD-USDT LP
        </Text>
        <Text
          fontSize={{base:'8px', lg:'16px'}}
          fontWeight='700'
        >
          Total APR
        </Text>
        <Text
          color='#69E4FF'
          fontSize={{base:'8px', lg:'16px'}}
          fontWeight='700'
        >
          XX.XX %
        </Text>
        <Text
          fontSize={{base:'8px', lg:'16px'}}
          fontWeight='700'
        >
          Astro APR
        </Text>
        <Text
          color='#69E4FF'
          fontSize={{base:'8px', lg:'16px'}}
          fontWeight='700'
        >
          XX.XX %
        </Text>
      </VStack>
      <Button
        mt='27px'
        bg='#0084FF'
        h={{base:'21px', lg:'48px'}}
        fontSize={{base:'10px', lg:'24px'}}
      >
        STAKE NOW
      </Button>
    </Flex>
  )
}
