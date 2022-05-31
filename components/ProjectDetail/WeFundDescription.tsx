import React from 'react'
import { chakra, Flex } from '@chakra-ui/react'

export default function WeFundDescription({ data }) 
{
  return (
    <Flex
      mt="40px"
      px={{base:'10px', md:'10px', lg:'20px'}}
      borderRadius="25px"
      flexDirection="column"
      background={'rgba(255, 255, 255, 0.05)'}
      border={'1.5px solid rgba(255, 255, 255, 0.15)'}
      fontSize={{base:'15px',md:'15px', lg:'18px'}}
      w='100%'
    >
      <chakra.h2
        fontSize={'22px'}
        fontWeight="bold"
        marginBottom={'20px'}
        color={'rgba(255, 255, 255, 1)'}
        mt='20px'
        style={{ fontFamily: 'PilatExtended-Bold' }}
      >
        Introduction
      </chakra.h2>
      {/* ------------Description of Project------------ */}
      {/* <chakra.p
        marginBottom={'20px'}
        color={'rgba(255, 255, 255, 0.5)'}
      >
        WeFund is a community crowdfunding incubator for blockchain and real-world projects.
      </chakra.p>
      <chakra.p
        marginBottom={'20px'}
        color={'rgba(255, 255, 255, 0.5)'}
      >
        WeFund's mission is to host high-quality projects that align with WeFund's investor community.
      </chakra.p>
      <chakra.p
        marginBottom={'20px'}
        color={'rgba(255, 255, 255, 0.5)'}
      >
        Community-driven decisions on the platform for 100% transparency.
      </chakra.p>
      <chakra.p
        marginBottom={'20px'}
        color={'rgba(255, 255, 255, 0.5)'}
      >
        Project funds managed exclusively on Terra's Anchor protocol using smart contracts and following project milestones.
      </chakra.p> */}
      <chakra.p
        marginBottom={'20px'}
        color={'rgba(255, 255, 255, 0.5)'}
      >
        {data.project_description}
      </chakra.p>
    </Flex>
  )
};
