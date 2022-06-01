import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import {
  Box,
  Flex,
  VStack,
  useDisclosure
} from '@chakra-ui/react'
import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react'
import { WasmAPI, LCDClient, MsgExecuteContract } from '@terra-money/terra.js'
import { toast } from 'react-toastify'

import { useNavigate } from '@reach/router'

import { useStore } from '../store'
import Footer from '../../components/Footer'
import PageLayout from '../../components/PageLayout'
import ProjectTitle from '../../components/ProjectDetail/ProjectTitle'
import ProjectStatusButtons from '../../components/ProjectDetail/ProjectStatusButtons'
import ProjectMainButtons from '../../components/ProjectDetail/ProjectMainButtons'
import ProjectInformations from '../../components/ProjectDetail/ProjectInformations'
import WeFundDescription from '../../components/ProjectDetail/WeFundDescription'
import ProjectTeamDescription from '../../components/ProjectDetail/ProjectTeamDescription'
import ProjectMileStones from '../../components/ProjectDetail/ProjectMilestones'
import VoteModal from '../../components/ProjectDetail/VoteModal'

import {
  EstimateSend, 
  CheckNetwork, 
  FetchData,
  GetOneProject,
  ParseParam,
  errorOption,
  successOption
  }  from '../../components/Util'

export default function ProjectDetail() {
  const { state, dispatch } = useStore()
  const [oneprojectData, setOneprojectData] = useState('');
  const [totalBackedMoney, setTotalBackedMoney] = useState(0)
  const [totalBackedPercent, setTotalBackedPercent] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const navigate = useNavigate()

  //------------parse URL for project id----------------------------
  let project_id = ParseParam();

  //------------init api, lcd ----------------------------------------------------
  const api = new WasmAPI(state.lcd_client.apiRequester)

  // //------------deadline timer-------------------------------
  // const postRef = useRef(oneprojectData);
  // postRef.current = oneprojectData;

  // const [, updateState] = useState();
  // const forceUpdate = useCallback(() => updateState({}), []);

  // const myTimer = () => {
  //   if(postRef.current != '')
  //   {
  //     postRef.current.leftTime = 
  //       parseInt((parseInt(postRef.current.community_vote_deadline) - Date.now())/1000/60); //for minutes
  //   }
  //   setOneprojectData(postRef.current);
  //   forceUpdate();
  // };

  // useEffect(
  //   () => {
  //       if(oneprojectData.project_status == '1'){ //CommuntyApproval
  //         myTimer();
  //         const id = setInterval(myTimer, 1000*60);
  //         return () => clearInterval(id);
  //       }
  //   },[]
  // );

  function onNext() {
    navigate('/invest_step1?project_id=' + oneprojectData.project_id)
  }
  //------------fectch project data------------------------------------
  async function fetchContractQuery() {
    let _project_id = 1
    if (project_id != null) _project_id = project_id

    try {
      let {projectData, communityData, configData} = await FetchData(api, state, dispatch);

      const oneprojectData = GetOneProject(projectData, _project_id);
      if(oneprojectData == ''){
        toast("Can't fetch Project Data", errorOption);
        return;
      }

      for(let i=0; i<oneprojectData.milestone_states.length; i++){
        if(i < oneprojectData.project_milestonestep){
          oneprojectData.milestone_states[i].milestone_statusmessage = "Released";
        }
        else if(i == oneprojectData.project_milestonestep){
          if(oneprojectData.project_status == '3')//releasing status
          {
            oneprojectData.milestone_states[i].milestone_statusmessage = "Voting";
            oneprojectData.milestone_states[i].milestone_votingavailable = true;
          }
          else
          oneprojectData.milestone_states[i].milestone_statusmessage = "Not yet";
        }
        else
          oneprojectData.milestone_states[i].milestone_statusmessage = "Not yet";
      }

      setOneprojectData(oneprojectData);

      let totalBacked = parseInt(oneprojectData.communitybacked_amount) + parseInt(oneprojectData.backerbacked_amount);
      totalBacked /= 10 ** 6

      let percent = parseInt(totalBacked/parseInt(oneprojectData.project_collected) * 100 );
      setTotalBackedPercent(percent);
      setTotalBackedMoney(totalBacked);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchContractQuery()
  }, [state.connectedWallet])

//------------Wefund Approve-----------------
  function WefundApprove(project_id){
    if(CheckNetwork(state.connectedWallet, state) == false)
      return false;

    let deadline = Date.now() + 1000*60*60*24*15; //for 15days
    let WefundApproveMsg = {
      wefund_approve: {
        project_id: project_id,
        deadline: deadline,
      },
    }

    let wefundContractAddress = state.WEFundContractAddress
    let msg = new MsgExecuteContract(
      state.connectedWallet.walletAddress,
      wefundContractAddress,
      WefundApproveMsg,
    )
    EstimateSend(state.connectedWallet, state.lcd_client, [msg], "WeFund Approve success");
  }

  function MilestoneVote(project_id, voted){
    if(CheckNetwork(state.connectedWallet, state) == false)
      return false;

    let MilestoneVoteMsg = {
      set_milestone_vote: {
        project_id: project_id,
        wallet: state.connectedWallet.walletAddress,
        voted: voted
      },
    }

    let wefundContractAddress = state.WEFundContractAddress
    let msg = new MsgExecuteContract(
      state.connectedWallet.walletAddress,
      wefundContractAddress,
      MilestoneVoteMsg,
    )
    EstimateSend(state.connectedWallet, state.lcd_client, [msg], "Milestone vote success");
  }
    //--Pop Ups for Projects

  return (
    <ChakraProvider resetCSS theme={theme}>
      <div
        style={{
          background: 'linear-gradient(90deg, #1F0021 0%, #120054 104.34%)',
          width: '100%',
          color: 'white',
        }}
      >
        <VStack
          w = '100%'
          justify="center"
          alignItems= 'center'
          zIndex= '1'
          mt= '100px'
          mb= '100px'
        >
          <VStack w={{base:'90%', md:'80%', lg:'80%'}} > 
            <Flex
              alignContent={'center'}
              direction={{ base: 'column', md: 'column', lg: 'row' }}
            >
              <VStack>
                <ProjectTitle data={oneprojectData} />
                <ProjectStatusButtons 
                  data={oneprojectData}
                  WefundApprove = {WefundApprove}
                  onNext = {onNext}
                  MilestoneVote = {MilestoneVote}
                />
                <ProjectMainButtons
                  data = {oneprojectData}
                  onNext = {onNext}
                />
              </VStack>
              <ProjectInformations
                data = {oneprojectData}
                totalBackedMoney = {totalBackedMoney}
                totalBackedPercent = {totalBackedPercent}
              />
            </Flex>
            <WeFundDescription data = {oneprojectData} />
            <ProjectTeamDescription data = {oneprojectData} />
            <ProjectMileStones data = {oneprojectData} onOpen = {onOpen} />
          </VStack>
        </VStack>

        <Footer />
      </div>
      <VoteModal 
        data = {oneprojectData}
        onClose = {onClose}
        isOpen = {isOpen}
        MilestoneVote = {MilestoneVote}
      />
    </ChakraProvider>
  )
}
