import React, { useCallback, useEffect, useState } from 'react';
import { ChakraProvider, Flex, Box, Text } from "@chakra-ui/react";
import theme from '../theme';

export default function PageLayout(props: { title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; subTitle1: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; subTitle2: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Flex
        color={'white'}
        width={'100%'}
        fontSize={{ base: '14px', md: '15px', lg: '16px' }}
        justify={'center'}
        fontWeight={'500'}
        alignItems={'center'}
        flexDirection={'column'}
        fontFamily={'Sk-Modernist-Regular'}
        background={'linear-gradient(90deg, #1F0021 0%, #120054 104.34%)'}
      >
        <Flex
          mb={'30px'}
          width={'100%'}
          height={'250px'}
          justify={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          backgroundSize={'cover'}
          backgroundRepeat={'no-repeat'}
          boxShadow={'0px 5px 15px #000000A6'}
          backgroundImage={"url('/media/createproject_banner.svg')"}
        >
          <Flex
            pt='95px'
            justify="center"
          >
            <Text
              fontSize='16px'
              fontWeight='normal'
              color={'rgba(255, 255, 255, 0.54)'}
            >
              Home &gt;&nbsp;
            </Text>
            <Text
              fontSize='16px'
              color={'rgba(255, 255, 255, 0.84)'}
            >
              {props.title}
            </Text>
          </Flex>
          <Flex
            mt='11px'
            pb='55px'
            mb="20px"
            justify='center'
            style={{ fontFamily: 'PilatExtended-Bold' }}
          >
            <Text
              fontSize={{ base: '20px', md: '25px', lg: '40px' }}
              color='#4790f5'
            >
              {props.subTitle1}
            </Text>
            <Text
              fontSize={{ base: '20px', md: '25px', lg: '40px' }}
            >
              &nbsp;{props.subTitle2}
            </Text>
          </Flex>
        </Flex>
        <Box
          w='100%'
          justifyContent='center'
          alignContent='center'
        >
          {props.children}
        </Box>
      </Flex>
    </ChakraProvider>
  )
}