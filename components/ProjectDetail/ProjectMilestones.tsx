import React from 'react'
import { Flex, Text, Button, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react'

export default function ProjectMileStones({ data, onOpen }:{data:any, onOpen:any}) 
{
  return (
    <Flex
      px={'45px'}
      py={'45px'}
      borderRadius="25px"
      justify='center' 
      align='center' 
      flexDirection="column"
      background={'rgba(255, 255, 255, 0.05)'}
      border={'1.5px solid rgba(255, 255, 255, 0.15)'}
      display={{base:'none',md:'block', lg:'block'}}
    >
      <Flex 
        mt='60px' 
        justify='center' 
        align='center' 
        direction='column' 
        display={{base:'none',md:'block', lg:'block'}}
      >

        <Text fontSize='16px' fontWeight={'300'} mb={'20px'}>
          Project Milestones
        </Text>
        <Table variant='simple' size={{base:'sm', sm:'sm', md:'sm', lg:'sm', xl:'md'}}>
          <TableCaption style={{color:'#00A3FF'}}>
            Project milestones. More details may be available on each project's website.
            Project milestones will be listed and up for voting by the community.
            Rejected milestone means project funds will not be released, or project has been suspended.
            Voted and Approved will result in project being awarded funds for corresponding milestone.
          </TableCaption>
          <Thead bgColor={'rgba(255, 255, 255, 0.12)'} borderRadius={'10px 10px 0px 0px'}>
            <Tr>
              <Th style={{color:'#00A3FF'}}>Milestone No.</Th>
              <Th style={{color:'#00A3FF'}}>Name</Th>
              <Th style={{color:'#00A3FF'}}>Proposed Start Date</Th>
              <Th style={{color:'#00A3FF'}}>Proposed End Date</Th>
              <Th style={{color:'#00A3FF'}}>Milestone Fund Amount</Th>
              <Th style={{color:'#00A3FF'}}>Milestone Voting</Th>
              <Th style={{color:'#00A3FF'}}>Milestone Status</Th>
            </Tr>
          </Thead>
          <Tbody bgColor={' rgba(196, 196, 196, 0.08)'} borderRadius={'10px 10px 0px 0px'}> 
            <Tr>
              <Td >milestone_step</Td>
              <Td >milestone.milestone_name </Td>
              <Td >milestone.milestone_startdate</Td>
              <Td >milestone.milestone_enddate</Td>
              <Td >milestone.milestone_amount</Td>
              <Td >
                milestone.milestone_votingavailable 
                <Button onClick={onOpen} colorScheme={'teal'}>Vote &amp; Details</Button>}
              </Td>
              <Td >Status</Td>
            </Tr>
          </Tbody>
        </Table>
      </Flex>
    </Flex>
  )
};
