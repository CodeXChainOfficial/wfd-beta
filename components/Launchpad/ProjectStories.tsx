import { Box, Button, Center, Circle, Container, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const stories = [
  {
    image: '/media/Launchpad/secret-partner.png',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    image: '/media/Launchpad/secret-partner.png',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    image: '/media/Launchpad/secret-partner.png',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
]

export default function ProjectStories() {
  return (
    <Box paddingY={'32px'}>
      <Container maxW={'container.xl'}>
        <Heading>Project Stories</Heading>
        <Text>Stories from our Projects</Text>
        <Box>
          <HStack marginY={'32px'}>
            {stories.map((story, i) => 
            <Box padding={'16px'} maxW={'390px'} bg={'linear-gradient(90deg, #6E41D2 0%, #25054D 100%);'} borderRadius={'12px'}>
              <Stack>
                <Center>
                <Circle padding={'16px'} size={'213px'}>
                  <Image src={story.image} borderRadius={'full'} />
                </Circle>
                </Center>
                <Text fontFamily={'PilatExtended-Bold'} fontWeight={'bold'} fontSize={'20px'}>{story.title}</Text>
                <Text>{story.summary}</Text>
                <Button borderRadius={'full'} bg={'linear-gradient(90deg, #6ACEF5 0%, #4C9BE8 100%)'} color={'#122463'}>Read More</Button>
              </Stack>
            </Box>
            )}
            
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}