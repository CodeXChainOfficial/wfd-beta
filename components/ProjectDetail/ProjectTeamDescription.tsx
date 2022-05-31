import React from 'react'
import { VStack, Stack, Flex, Text, Box, HStack } from '@chakra-ui/react'

export default function ProjectTeamDescription({ data }) 
{
  return (
    <Flex
      pt="40px"
      as={Stack}
      mb={'50px'}
      w='100%'
    >
      <Text
        mb={'20px'}
        fontSize="28px"
        fontWeight={'900'}
        lineHeight={'36px'}
        fontFamily="PilatExtended-Heavy"
        textAlign={{base:'center', lg:'left'}}
      >
        The Project{' '}
        <span style={{ color: '#00A3FF' }} mb="25px">
          Team
        </span>
      </Text>
      <Box
        background="rgba(255, 255, 255, 0.05)"
        border="1.5px solid rgba(255, 255, 255, 0.15)"
        boxSizing="border-box"
        borderRadius="10px"
        mt={'30px'}
        fontSize={{base:'16px', md:'16px', lg:'18px'}}
      >
        {/* <Box
          px={'45px'}
          paddingTop={'10px'}
          paddingBottom={'10px'}
        >
          <Text fontSize={'18px'} fontWeight={'bold'}>
            WeFund Core Team
          </Text>
        </Box> */}
        {/* ------------About the Founder/Who wrote this/Short desc------------ */}
        <VStack 
          textAlign={'left'}
          px={{base:'10px', md:'10px', lg:'20px'}}
          paddingTop={'35px'}
          paddingBottom={'35px'}
        >
          {data?.teammember_states?.map((item, index) => {
            return (
              <VStack mt='10px'>
                <Text
                  fontWeight={'bold'}
                  textAlign={'left'}
                  alignSelf={'flex-start'}
                >
                  {item.teammember_role}
                </Text>
                <Text textAlign={'left'} fontWeight={'100'}>
                  {item.teammember_description}
                </Text>
                <Text textAlign={'left'} fontWeight={'100'}>
                  {item.teammember_linkedin}
                </Text>
              </VStack>
            )}
          )}
{/* 
          <Text
            fontWeight={'bold'}
            textAlign={'left'}
            alignSelf={'flex-start'}
          >
            Andrea Bello Co-Founder &amp; CEO &amp; Co-CTO
          </Text>
          <Text textAlign={'left'} fontWeight={'100'}>
            He is the person behind the development of the Fan$quad smart contract
            that was deployed on Col-4 during the hackathon organized by Terraform Labs.
            He has a wealth of experience in coding, with a deep understanding of
            C, C++, Javascript, VBA, Java, Python, Rust language (to name a few).
            In 2018 he moved his focus into Solidity, PHP, &amp; HTML 5, to follow his
            vision of creating advanced Web 3.0 applications integrated with the blockchain.
            His role is to ensure delivery of smart contracts, web app, and technical
            infrastructure, as well as managing the business side of the project.
            From the business side, he had several businesses before such as a Natural Mosquito Solution
            based on Bali, hotel &amp; restaurant (Ristorante-Bar Lanca) in Switzerland,
            and a smart-home startup to reduce electricity consumption.
            Most of the businesses he founded had an ROI within less than 1 year.
          </Text>
          <Text
            fontWeight={'bold'}
            textAlign={'left'}
            alignSelf={'flex-start'}
          >
            Ika Afifah Co-Founder &amp; CMO
          </Text> 
          <Text textAlign={'left'} fontWeight={'100'}>
            A dynamic individual who worked at Tencent as an operation specialist, in the partnership division.
            Before Tencent, she was senior partnership manager at Bigo.
            She previously held a senior account executive position at one of
            the digital marketing agencies under Jet Group and was a manager
            at Waves, who successfully helped founders to raise $1.2M in pre-seed funding,
            before turning her attention to crypto.
            She is one of the founding partners and driving forces behind the concept of WeFund.
            She was on the core team behind the hackathon project of Fan$quad together with the other ex co-founder.
          </Text>
          <Text
            fontWeight={'bold'}
            textAlign={'left'}
            alignSelf={'flex-start'}
          >
            Jason Galvin Co-CTO
          </Text>
          <Text textAlign={'left'} fontWeight={'100'}>
            World explorer, entrepreneur, and blockchain
            technology enthusiast. Came from a career in
            Silicon Valley building web applications during
            the dot-com boom. Wanting to do it all over again,
            this time helping to build Web 3.0.
          </Text>
          <Text
            fontWeight={'bold'}
            textAlign={'left'}
            alignSelf={'flex-start'}
          >
            Austin Taylor COO
          </Text>
          <Text textAlign={'left'} fontWeight={'100'}>
            Comes from a background in investment and
            corporate finance. After completing his education,
            he worked as a Business Analyst for a large tech
            company in Seattle, Washington USA building AI
            applications to identify high-risk sale
            transactions. He now is an Investment Manager for
            a prestigious silicon valley venture capital firm
            located in Jakarta, Indonesia managing investment
            deals in the Southeast Asia region.
          </Text> */}
        </VStack>
      </Box>
    </Flex>
  )
};
