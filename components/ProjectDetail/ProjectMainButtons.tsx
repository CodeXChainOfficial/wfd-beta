import React from 'react'
import { Flex, Box, Icon } from '@chakra-ui/react'
import { ImageTransition } from '../ImageTransition'
import { BsArrowUpRight } from 'react-icons/bs'
export default function ProjectMainButtons({ data, onNext }: {data:any, onNext:any}) 
{
  const { state, dispatch } = useStore()
  return (
    <>
      <Flex
        alignSelf={{
          base: 'center',
          md: 'center',
          lg: 'flex-start',
        }}
        spacing={5}
        direction={{ base: 'column', md: 'column', lg: 'row' }}
      >
        <Flex
          mt={{ base: '20px', md: '20px', lg: '30px' }}
          ml={{ base: '0px', md: '0px', lg: '0px' }}
          alignSelf={{ base: 'center', md: 'center', lg: 'flex-start'}}
        >
          <ImageTransition
            unitid="visit"
            border1="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background1="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            border2="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background2="linear-gradient(180deg, #1A133E 0%, #1A133E 100%)"
            border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
            selected={false}
            width="200px"
            height="50px"
            rounded="33px"
            onClick={() => {
              window.open(
                data.project_website,
                '_blank',
                'noopener,noreferrer',
              )
            }}
          >
            <Box
              color="white"
              justify="center"
              align="center"
            >
              Visit Website{' '}
              <Icon as={BsArrowUpRight} h={4} w={4} mr={3} />
            </Box>
          </ImageTransition>
        </Flex>
        <Flex
          mt={{ base: '20px', md: '20px', lg: '30px' }}
          ml={{ base: '0px', md: '0px', lg: '10px' }}
          alignSelf={{ base: 'center', md: 'center', lg: 'flex-start'}}
        >
          <ImageTransition
            unitid="view"
            border1="linear-gradient(180deg, #FE8600 0%, #F83E00 100%)"
            background1="linear-gradient(180deg, #FE8600 0%, #F83E00  100%)"
            border2="linear-gradient(180deg, #FE8600 0%, #F83E00 100%)"
            background2="linear-gradient(180deg, #1A133E 0%, #1A133E 100%)"
            border3="linear-gradient(180deg, #FE8600 0%, #F83E00 100%)"
            background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
            selected={false}
            width="200px"
            height="50px"
            rounded="33px"
            onClick={() => {}}
          >
            <a href={ state.request + '/download?filename=' + data.project_whitepaper}>
            <Box
              variant="solid"
              color="white"
              justify="center"
              align="center"
            >
              See Whitepaper
            </Box>
            </a>
          </ImageTransition>
        </Flex>
        <Flex
          mt={{ base: '20px', md: '20px', lg: '30px' }}
          mb={{ base: '40px', md: '40px', lg: '20px' }}
          ml={{ base: '0px', md: '0px', lg: '10px' }}
          alignSelf={{ base: 'center', md: 'center', lg: 'flex-start'}}
        >
          <ImageTransition
            unitid="back"
            border1="linear-gradient(180deg, #DEDBDB 0%, #DEDBDB 100%)"
            background1="linear-gradient(180deg, #DEDBDB 0%, #DEDBD/B  100%)"
            border2="linear-gradient(180deg, #DEDBDB 0%, #DEDBDB 100%)"
            background2="linear-gradient(180deg, #1A133E 0%, #1A133E 100%)"
            border3="linear-gradient(180deg, #DEDBDB 0%, #DEDBDB 100%)"
            background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
            selected={false}
            width="200px"
            height="50px"
            rounded="33px"
          >
            <Box
              variant="solid"
              color="white"
              justify="center"
              align="center"
              onClick={onNext}
            >
              Back {data.project_title}
            </Box>
          </ImageTransition>
        </Flex>
      </Flex>
    </>
  )
};
