import React from 'react'
import {
  Flex,
  Text,
  Box,
  Spacer
} from '@chakra-ui/react'


export default function ProjectTitle({data}:{data:any}) 
{
  return (
    <>
      <Flex
        alignSelf={{
          base: 'center',
          md: 'center',
          lg: 'flex-start',
        }}
      >
        <Text fontSize="40px" fontWeight={'900'}
          textAlign={{base:'center', lg:'left'}}
        >
          data.project_title
        </Text>
      </Flex>
      <Flex>
        <Text 
          textAlign= 'left' 
          fontWeight= '400' 
          fontSize={{base:'16px', md:'16px', lg:'18px'}}
        >
          data.project_description
        </Text>
      </Flex>
    </>
  )
};
