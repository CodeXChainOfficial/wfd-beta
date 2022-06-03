
import { Box, Button, Checkbox, Flex, HStack, Image, Input, Stack, Text, useNumberInput, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { IoBan } from "react-icons/io5"
import PageLayout from "../components/PageLayout"
import { useStore } from "../components/store"

import { WasmAPI, LCDClient, MsgExecuteContract } from '@terra-money/terra.js'
import { useSmartContract, UserInfo } from "../components/wallet"
import { getEnabledCategories } from "trace_events"
import Footer from "../components/Footer"

function CardBox({data}: {data: UserInfo}) {
  let url = "/media/Card/Other.png";
  switch( data?.card_type?.toLowerCase() ){
    case "platium": url = "/media/Card/Platinum.png"; break;
    case "gold": url = "/media/Card/Gold.png"; break;
    case "silver": url = "/media/Card/Silver.png"; break;
    case "bronze": url = "/media/Card/Bronze.png"; break;
  }
  return (
    <VStack spacing="10px" justify='center'>
      <Image src={url} h='200px' />
      <Text fontSize="30px">
        {data.card_type}&nbsp;Card
      </Text>
      <Text fontSize='12px'>
        Validated staked amount
      </Text>
      <Text fontSize='24px'>
        {data.amount}&nbsp;WFD
      </Text>
    </VStack>
  )
}


export default function StackingPage() {
  const [walletAddress, setWalletAddress] = useState("")
  const [userInfo, setUserInfo] = useState({amount: 0, card_type: "bronze", card_number: ""})
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [pendingRewards, setPendingRewards] = useState("");
  const [decimals, setDecimals] = useState(1);

  const {ready, getBalance, getTokenInfo, getUserInfo, getPendingRewards} = useSmartContract()

  //-----------fetch project data=-------------------------
  async function fetchContractQuery() {
    if (!ready) return;

    try {
      getBalance(walletAddress).then((resultBalance) => {
        setBalance(resultBalance);
      })
      

      getUserInfo(walletAddress).then((resultUserInfo) => {
        setUserInfo(resultUserInfo)
      })
      
      getPendingRewards(walletAddress).then((resultRewards) => {
        setPendingRewards("")
      })
    }
    catch (e) {
      console.error(e)
    }
  }

  //---------initialize fetching---------------------
  useEffect(() => {
    fetchContractQuery();
  }, [])

  function selectCard(cardType: string) {
    switch (cardType.toLowerCase()) {
      case "platium": setAmount(100000); break;
      case "gold": setAmount(40000); break;
      case "silver": setAmount(10000); break;
      case "bronze": setAmount(1000); break;
    }
  }
  async function staking() {

    await fetchContractQuery();
  }
  async function claimRewards() {
    // call smart contract to claim reward
    await fetchContractQuery();
  }
  function setMax(){
    setAmount(balance);
  }

  function onChangeAmount(val: string) {
    setAmount(parseInt(val))
  }

  return (
    <PageLayout title="Staking" subTitle1="WFD" subTitle2="Staking">
      <VStack spacing={'30px'} fontFamily={'PilatExtended-Bold'}>
        <Stack spacing={'30px'} rounded={'15px'} p={'40px'}
          direction={{base: 'column', md: 'column', lg: 'row'}}>
            <Flex
              alignContent={'center'}
              direction={{base: 'column', md: 'column', lg: 'row'}}
              px={'35px'}>
                <Flex
                  maxW={{lg: '2xl'}}
                  mr={{lg: '25px'}}
                  height={'490px'}
                  px={'20px'}
                  boxShadow={"0px 2px 10px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)"}
                  border={"2px solid rgba(255, 255, 255, 0.05)"}
                  borderRadius={'2xl'}
                  justify={'center'}
                  backdropBlur={'54px'}
                  align={'center'}>
                    <CardBox data={userInfo} />
                </Flex>
                <VStack
              mt={{ base: '20px', sm: '20px', md: '20px', lg: '0px' }}
              width={{ lg: '3xl' }}
              height={{ lg: '484px' }}
              backdropBlur={'54px'}
              style={{
                paddingTop: '65px',
                paddingBottom: '65px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '2px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '25px'
              }}
            >
              <Flex 
                alignSelf={{ base: 'center', md: 'center', lg: 'center' }}
                paddingLeft={'10px'}
                paddingRight={'10px'}>
                <VStack spacing='20px' justify='center'>
                <Text 
                  fontSize='28px' 
                  fontWeight={'900'}
                >
                  Welcome
                </Text>
                <Text 
                  fontSize={{ base: '8px', sm: '12px', md: '16px', lg: '16px' }} 
                  fontWeight={'900'}
                  >
                  {walletAddress}
                </Text>
                  <Text 
                    fontSize='sm' 
                    textAlign={'center'}
                  >
                    TOTAL STAKED AMOUNT BY THE USER
                  </Text>
                  <Text fontSize='5x1'>
                    {userInfo?.amount} WFD
                  </Text>
                  
                  <HStack spacing='5px'>
                    <IoBan />
                    <Text fontSize='12px' textAlign='left'>
                      PendingRewards: {pendingRewards}&nbsp;WFD
                    </Text>
                  </HStack>
                  <Button 
                    w='200px' h='50px' 
                    fontSize='md' 
                    color='grey.300' 
                    onClick={claimRewards} 
                    colorScheme="whiteAlpha"
                  >
                    Get Rewards
                  </Button>
                </VStack>
              </Flex>

            </VStack>
          </Flex>
        </Stack>
        <Box w={{ base: '100%', md: '80%', lg: '80%', xl: '50%' }} pb='10px'>
          <Flex
            rounded="15px 15px 0 0"
            background='rgba(255, 255, 255, 0.09)'
            w='100%'
            h='60px'
            align='center'
          >
            <Text fontSize='14px' textAlign='left' pl='20px'>
              Stake Now
            </Text>
          </Flex>
          <VStack
            spacing='20px'
            background='rgba(255, 255, 255, 0.05)'
            rounded='0 0 15px 15px'
            pb='20px'
          >
            <Stack
              spacing='10px'
              mt='10px'
              direction={{ base: 'column', md: 'column', lg: 'row' }}>
              <HStack spacing='10px'>
                
                <Image
                  src="/media/Card/Platinum.png" h='100px'
                  _hover={{ border: '1px solid red' }}
                  onClick={() => { selectCard("platium") }}
                />
                <Image
                  src="/media/Card/Gold.png" h='100px'
                  _hover={{ border: '1px solid red' }}
                  onClick={() => { selectCard("Gold") }}
                />
              </HStack>
              <HStack spacing='10px'>
                <Image
                  src="/media/Card/Silver.png" h='100px'
                  _hover={{ border: '1px solid red' }}
                  onClick={() => { selectCard("Silver") }}
                />
                <Image
                  src="/media/Card/Bronze.png" h='100px'
                  _hover={{ border: '1px solid red' }}
                  onClick={() => { selectCard("bronze") }}
                />
              </HStack>
            </Stack>
            <Text fontSize='16px' py='20px'>
              HOW MUCH DO YOU WANT TO STAKE?
            </Text>
            <VStack
              background='rgba(255, 255, 255, 0.03)'
              mx='10px'
              spacing='20px'
              rounded='10px'
              w='70%'
              py='10px'
              px='10px'
            >
              <Flex direction='row' justify='space-between' w='100%'>
                <Text fontSize='10px'>
                  Stake
                </Text>
                <Text fontSize='10px'>
                  BALANCE: {balance}
                </Text>
              </Flex>
              <HStack justify='space-between' align='flex-end' w='100%'>
                
                <Input fontSize='12px' value={amount} onChange={(e) => { onChangeAmount(e.target.value) }} />
                <HStack>
                  <Text 
                    fontSize='10px' 
                    color='gray.300' 
                    cursor='pointer' 
                    textStyle='underline'
                    onClick={setMax}
                  >
                    MAX
                  </Text>
                  <Text fontSize='12px'>
                    WFD
                  </Text>
                </HStack>
              </HStack>
            </VStack>
            
            <Checkbox onChange={(e) => console.log(e) }>
              <Text fontSize='12px'>
                I agree to WeFund Staking Terms
              </Text>
            </Checkbox>
            <Button color='white' onClick={staking} colorScheme="whiteAlpha">
              Approve
            </Button>
          </VStack>
        </Box>
      </VStack>
      <Footer/>
    </PageLayout>
  )

}