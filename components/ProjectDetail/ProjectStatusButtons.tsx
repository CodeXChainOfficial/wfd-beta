import React from 'react'
import { Flex } from '@chakra-ui/react'

//import {isWefundWallet,isCommunityWallet,isBackerWallet, }  from '../../components/Util'

import { ButtonTransition } from '../../components/ImageTransition'
//import { useStore } from '../../store'

export default function ProjectStatusButtons({data,WefundApprove,onNext,MilestoneVote}:{data:any,WefundApprove:any,onNext:any,MilestoneVote:any}) 
{
  return (
    <>
      <Flex alignSelf={{ base: 'center', md: 'center', lg: 'flex-start'}} >
          <Flex justify={'center'}>
            <ButtonTransition
              unitid='Approve'
              selected={false}
              width="160px"
              height="50px"
              rounded="33px"
              // onClick={() => WefundApprove(data.project_id)}
            >
              Approve Project
            </ButtonTransition>
          </Flex>
          <ButtonTransition
            unitid='backproject'
            width="160px"
            height="50px"
            selected={false}
            rounded="33px"
            mt="15px"
            mb="10px"
            // onClick={onNext}
          >
            Back Project
          </ButtonTransition>
        
          <Flex justify={'center'}>
            <ButtonTransition
              unitid='milestonevoteyes'
              width="160px"
              height="50px"
              selected={false}
              rounded="33px"
              // onClick={() => MilestoneVote(data.project_id, true)}
            >
              Vote Yes
            </ButtonTransition>

            <ButtonTransition
              unitid='milestonevoteno'
              selected={false}
              width="160px"
              height="50px"
              rounded="33px"
              // onClick={() => MilestoneVote(data.project_id, false)}
            >
              Vote No
            </ButtonTransition>
          </Flex>
        )
      </Flex>
    </>
  )
};
