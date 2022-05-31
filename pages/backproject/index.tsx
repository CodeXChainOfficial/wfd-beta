import { ChakraProvider } from "@chakra-ui/react";
import { MsgExecuteContract, WasmAPI } from '@terra-money/terra.js'
import {
  Box,
  Flex,
  Text, 
  Input, 
  InputGroup, 
  InputRightElement, 
  Img
} from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { toast } from 'react-toastify';

import { ButtonTransition, InputTransition } from "../../components/ImageTransition";
import theme from '../../theme';
import Footer from "../../components/Footer"

export default function BackProject() {
    //----------Declaring State used---
    const [condition, setCondition] = useState(false);
    const [backAmount, setBackAmount] = useState('');
    const [wfdAmount, setWfdamount] = useState('');
    const [oneprojectData, setOneprojectData] = useState('');

    
  return (
    <ChakraProvider resetCSS theme={theme}>
      <div style={{
        background: "linear-gradient(90deg, #1F0021 0%, #120054 104.34%)",
        width: '100%', color: 'white', fontSize: '18px', fontFamily: 'Sk-Modernist', fontWeight: '700'
      }}>
        <div style={{ backgroundImage: "url('/media/createproject_banner_emphasis.svg')", width: '100%', zIndex: '10' }}>
          <div style={{
            backgroundImage: "url('/media/createproject_banner.svg')", position: 'absolute', top: '80px',
            width: '100%', zIndex: '11', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
          }}>
            <Flex pt='95px' justify="center">
              <Text fontSize='16px' fontWeight='normal' color={'rgba(255, 255, 255, 0.54)'}>Home &gt;&nbsp;</Text>
              <Text fontSize='16px' color={'rgba(255, 255, 255, 0.84)'}>Back the project</Text>
            </Flex>
            <Flex mt='11px' pb='55px' mb="75px" justify='center'
              style={{ fontFamily: 'PilatExtended-Bold' }}>
              <Text fontSize={{ base: '25px', md: '25px', lg: '40px' }}>Contribute to &nbsp;</Text>
              <Text fontSize={{ base: '25px', md: '25px', lg: '40px' }} color='#4790f5'>Project</Text>
            </Flex>
          </div>
        </div>
        <Flex width='100%' justify='center' mt='80px' px='175px'>
          <Box width='900px' marginTop='200px' bg='#FFFFFF0D' px='50px' style={{ fontFamily: 'Sk-Modernist' }} >
            <Flex mt='65px' justify='center' align='center' direction='column'
              style={{ fontFamily: 'PilatExtended-Regular' }}>
              <Text fontSize='22px' fontWeight={'300'}>
                Back the Project</Text>
              <Text fontSize='28px' color='#4790f5' fontWeight={'bold'}>
                PROJECT NAME
              </Text>
            </Flex>
            {/* --------amount to back----------- */}
            <Flex mt='83px' textAlign={'left'} justify="space-between" align='center' direction='column'>
              <Text mb='20px' textAlign={'center'} justifyContent={'center'}>Select tokens and enter amount to back</Text>
              <InputTransition
                unitid='backamount'
                selected={backAmount == '' ? false : true}
                width='300px' height='55px' rounded='md' mb='42px'
              >
                <InputGroup size="sm" style={{ border: '0', background: 'rgba(255, 255, 255, 0.05)' }}>
                  <Input type="text" h='55px' style={{ border: '0', background: 'transparent', paddingLeft: '25px' }} focusBorderColor="purple.800" rounded="md" value={backAmount} />
                  <InputRightElement w='60px' h='55px' pointerEvents='none' children={<Text>UST</Text>}
                  />
                </InputGroup>
              </InputTransition>
              <Text mb='20px' textAlign={'left'}>WFD Fees</Text>
              <InputTransition
                unitid='WFDamount'
                selected={backAmount == '' ? false : true}
                width='300px' height='55px' rounded='md'
              >
                <InputGroup size="sm" style={{ border: '0', background: 'rgba(255, 255, 255, 0.05)' }}>
                  <Input type="text" h='55px' style={{ border: '0', background: 'transparent', paddingLeft: '25px' }} focusBorderColor="purple.800" rounded="md" value={wfdAmount}
                    onChange={(e) => { }} />
                  <InputRightElement w='60px' h='55px' pointerEvents='none' children={<Text>WFD</Text>}
                  />
                </InputGroup>
              </InputTransition>
              <Flex mt='25px' direction="row">
                <InputTransition
                  unitid='conditioncheck'
                  selected={false}
                  width='24px' height='24px' rounded='md'
                  onClick={() => { setCondition(!condition) }}
                >
                  {condition &&
                    <IoCheckmark width='24px' height='24px' color='#FE8600'></IoCheckmark>
                  }
                </InputTransition>
                <Text ml='10px' fontSize='14px' fontWeight='400'>I agree with all conditions of this project and WeFund</Text>
              </Flex>
            </Flex>
            {/* -----------------Back Project----------------- */}
            <Flex w='100%' mt='60px' justify='center' mb='170px'>
              <ButtonTransition
                unitid='backproject'
                border1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
                background1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
                border2='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
                background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
                border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
                background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
                selected={false}
                width='200px' height='50px' rounded='33px'
                onClick={() => { BackProject() }} 
              >
                <Box  color="white" justifyContent='center' alignSelf='center'>
                  Back Project
                </Box>
              </ButtonTransition>
            </Flex>
            {/* -----------------------space line-------------------------------- */}
            <Img mt='102px' height='1px' objectFit='cover' src='/media/line.svg' alt='UST Avatar' />

            {/* ---------------------------blog------------------------------ */}

          </Box>
        </Flex>
        <Footer />
      </div>
    </ChakraProvider>
  )
}