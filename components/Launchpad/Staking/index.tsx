import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { HStack, Image, Flex, Text, VStack, Button, Box } from '@chakra-ui/react'
import { ImageTransition } from '../../ImageTransition'
import Card from './Card'

export default function Staking() {
  return (
    <Flex
      width="100%"
      textAlign="center"
      position="relative"
      alignItems="center"
      flexDirection="column"
      fontFamily='PilatExtended-Bold'
      justify={'center'}
    >
      <Text
        fontSize={{sm:'12px', md: '12px', lg:'24px'}}
        fontWeight='400'
      >
        Farm Your Tokens Now
      </Text>
      <Flex
        mt='26px'
        bg='linear-gradient(90deg, rgba(42, 246, 255, 0) 0%, #63CDFA 48.75%, rgba(42, 246, 255, 0) 100%)'
        w='100%'
        justify={'center'}
      >
        <Text
          fontSize={{sm:'20px', md:'20px', lg:'48px'}}
          fontWeight='700'
          color='#1F196B'
        >
            WFD STAKING
        </Text>
      </Flex>
      <Text
        fontFamily={'PilatExtended-Light'}
        fontSize={{sm:'12px', md: '18px', lg:'21px'}}
        mt='32px'
        w='60%'
      >
        Do you want to be best prepared for our platform launch? Choose your favorite faction and farm as many $WFD as you can!
      </Text>
      <HStack
        w='100%'
        justify={'center'}
        mt={{base:'30px', lg:'72px'}}
        spacing='21px'
      >
        <ImageTransition
          unitid={'lptokenstacking'}
          border1="linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 100%)"
          background1="linear-gradient(180deg, #000B47 0%, #350277 100%)"
          border2="linear-gradient(180deg, #EBF1FF 0%, #014063 100%)"
          background2="linear-gradient(180deg, #21C9FF 0%, #1383D5 100%)"
          border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
          background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
          selected={false}
          width={{ sm: '148px', md: '148px', lg: '274px' }}
          height={{ sm: '34px', md: '34px', lg: '52px' }}
          rounded={'33px'}
          onClick={() => { }}
        >
          <Text
            w='100%'
            fontSize={{ sm: '8px', md: '8px', lg: '15px' }}
            fontFamily={'Gilroy'}
            fontWeight={'800'}
            color='#002E87'
            _hover={{ color: '#FFFFFF' }}
            transition={'all 1s'}
          >
            LP TOKEN STAKING
          </Text>
        </ImageTransition>
        <ImageTransition
          unitid={'singleassetstaking'}
          border1="linear-gradient(180deg, #EBF1FF 0%, #014063 100%)"
          background1="linear-gradient(180deg, #21C9FF 0%, #1383D5 100%)"
          border2="linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 100%)"
          background2="linear-gradient(180deg, #000B47 0%, #350277 100%)"
          border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
          background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
          selected={false}
          width={{ sm: '148px', md: '148px', lg: '274px' }}
          height={{ sm: '34px', md: '34px', lg: '52px' }}
          rounded={'33px'}
          onClick={() => { }}
        >
          <Text
            w='100%'
            fontSize={{ sm: '8px', md: '8px', lg: '15px' }}
            fontFamily={'Gilroy'}
            fontWeight={'800'}
            color='#FFFFFF'
            _hover={{ color: '#002E87' }}
            transition={'all 1s'}
          >
            SINGLE ASSET STAKING
          </Text>
        </ImageTransition>
      </HStack>
      <Flex
        w='100%'
        mt={{base:'60px', lg:'110px'}}
        backgroundImage={'/media/Home/grid-2.svg'}
        flexWrap='wrap'
        justify='space-between'
        px={{sm:'36px', md:'36px', lg:'132px'}}
      >
        <Card img='/media/Card/Platinum.png' title='PLATINUM'/>
        <Card img='/media/Card/Gold.png' title='GOLD'/>
        <Card img='/media/Card/Silver.png' title='SILVER'/>
        <Card img='/media/Card/Bronze.png' title='BRONZE'/>
      </Flex>
    </Flex>
  )
}
