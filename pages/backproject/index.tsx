import { ChakraProvider, Stack } from "@chakra-ui/react";
import { MsgExecuteContract, WasmAPI } from '@terra-money/terra.js'
import {
  Box,
  Flex,
  Text, 
  Input, 
  InputGroup, 
  InputRightElement, 
  Image
} from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { toast } from 'react-toastify';

import { ButtonBackTransition, ButtonTransition, InputTransition } from "../../components/ImageTransition";
import theme from '../../theme';
import Footer from "../../components/Footer"
import CustomCoinInput from "../../components/BackProject/CustomCoinInput";
export default function BackProject() {
    //----------Declaring State used---
    const [condition, setCondition] = useState(false);
    const [backAmount, setBackAmount] = useState('');
    const [feeAmount, setFeeAmount] = useState('');
    const [oneprojectData, setOneprojectData] = useState('');

    
  return (
    <ChakraProvider resetCSS theme={theme}>
      <div style={{
        width: '100%', color: 'white', fontSize: '18px', fontFamily: 'Sk-Modernist', fontWeight: '700'
      }}>
        <Flex 
        pt={'120px'}
        pb={'25px'} 
        px={{ base: "40px", md: "80px", lg: "120px" }}
        direction='column'
        style={{ fontFamily: 'PilatExtended-Regular' }}
        >
          <Flex>
            <Text fontSize='16px' fontWeight='normal' color={'rgba(255, 255, 255, 0.54)'}>Home &gt;&nbsp;</Text>
            <Text fontSize='16px' fontWeight='normal' color={'rgba(255, 255, 255, 0.54)'}>Project Detail &gt;&nbsp;</Text>
            <Text fontSize='16px' color={'rgba(255, 255, 255, 0.84)'}>Back the project</Text>
          </Flex>
          <Flex>
            <Text fontSize='28px' color='#4790f5' fontWeight={'900'}>
              Back and Contribute to &nbsp;</Text>
            <Text as={"span"} fontSize='28px'  fontWeight={'900'}>
              Project Name
            </Text>
          </Flex>
              
        </Flex>
        <Flex width='100%' justify='center' pb={'8em'} 
        backgroundImage="url('/media/Home/2.png')">
          <Box w={{ base: "300px", md: "500px", lg: "800px" }} bgGradient={'linear(180deg, #501992 0%, #300F71 18.84%, #09044B 75.22%)'} px='0px' style={{ fontFamily: 'Sk-Modernist' }} rounded={'3xl'} >
            
            {/* --------amount to back----------- */}
            <Flex mt='83px' textAlign={'left'} justify="space-between" align='center' direction='column'>
              <Image src="/media/Launchpad/secret-partner.png">
              </Image>
              <Text my='20px' textAlign={'center'} justifyContent={'center'}>Select tokens and enter amount to back</Text>
              <Stack 
              align='center' 
              w={{ base: "100%", md: "100%", lg: "100%" }}
              spacing={12}
              
            >
              <CustomCoinInput
              typeText="Amount Required"
              type={backAmount}
              setType={setBackAmount}
              w={{ base: "50%", md: "50%", lg: "50%" }}
            />
             <CustomCoinInput
              typeText="Fees"
              type={feeAmount}
              setType={setFeeAmount}
              w={{ base: "50%", md: "50%", lg: "50%" }}
            />
              </Stack>
            
             
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
              <ButtonBackTransition
                unitid="Back Project"
                selected={false}
                width="250px"
                height="45px"
                rounded="33px"
                selected={false}
                width='250px' height='50px' rounded='33px'
                onClick={() => { BackProject() }} 
              >
                <Box  color="white" justifyContent='center' alignSelf='center'>
                  Back The Project
                </Box>
              </ButtonBackTransition>
             
            </Flex>

          </Box>
         
        </Flex>
        <Image
        mt={'-9em'}
        width="100%"
        objectFit="contain"
        src="/media/Home/1.svg"
      />
        <Footer />
      </div>
    </ChakraProvider>
  )
}