import React from "react"
import {shortenText, toText} from "../../utils/text"
import {
    chakra,
    Box,
    Image,
    Flex,
    Link,
    SimpleGrid,
    Icon
  } from "@chakra-ui/react";
  import {
    BsArrowUpRight,
  } from 'react-icons/bs'
  import {ImageTransition} from '../ImageTransition'
  

export default function BlogCard(props) {
  const monthShortname = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const splitDate = props.pubDate.split(" ");
  const date = splitDate[0];
  const splitMonth = date.split("-");
  const finalDate =
    monthShortname[Number(splitMonth[1] - 1)] +
    " " +
    splitMonth[2] +
    "," +
    " " +
    splitMonth[0];
  const d = new Date();

  return (
    <Box
    mx="auto"
    rounded="lg"
    shadow="md"
    bg={'rgba(20, 48, 124, 0.74)'}
    border={'2px solid rgba(255, 255, 255, 0.05)'}
    backdropFilter={'blur(150px)'}
    maxW={{base:'sm',sm:'md',md:'2xl',lg:'2xl'}} 
    maxH={{base:'5xl',sm:'5xl',md:'4xl',lg:'4xl'}}
    minH={{base:'4xl',sm:'4xl',md:'3xl',lg:'3xl'}}
  >
    <Image
      roundedTop="lg"
      w="full"
      h={64}
      fit="cover"
      src={props.thumbnail}
      alt="Article"
    />

    <Box p={6}>
      <Box>
        <Link
          href = {props.link}
          display="block"
          color={"white"}
          fontWeight="bold"
          fontSize="2xl"
          mt={2}
          _hover={{ color: "blue.600", textDecor: "underline" }}
          minH = {'125px'}
          
        >
           {shortenText(props.title, 0, 100)}
        </Link>
        <chakra.p
          mt={2}
          fontSize="sm"
          color={"gray.200"}
          minH = {'350px'}
          maxH= {{base:'500px',sm:'400px',md:'375px',lg:'350px'}}
          overflow= {'hidden'}
        >
          {`${toText(props.description.substring(0, 1000))}...`}
        </chakra.p>
      </Box>

      <Box mt={4}>
        <Flex alignItems="center">
          <Flex alignItems="center">
            <Link
              mx={2}
              fontWeight="bold"
              color={"gray.200"}
              fontSize={{base:'xs',sm:'sm',md:'sm',lg:'sm'}}
              
            >
              {props.author}
            </Link>
          </Flex>
          <chakra.span
            mx={1}
            fontSize={{base:'xs',sm:'sm',md:'sm',lg:'sm'}}
            color={"gray.200"}
          >
            {finalDate}
          </chakra.span>
          <a href={props.link}>
          <Flex
            ml={{ base: '20px',sm: '25px', md: '45px', lg: '75px', xl: '45px' }}
            alignSelf={{ base: 'center', md: 'center', lg: 'flex-end'}}
          >
            <ImageTransition
              unitid={shortenText(props.title, 0, 10)}
              border1="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
              background1="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
              border2="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
              background2="linear-gradient(180deg, #1A133E 0%, #1A133E 100%)"
              border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
              background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
              selected={false}
              width={{base:'120px',sm:'145px',md:'145px',lg:'145px'}}
              height={{base:'35px',sm:'45px',md:'45px',lg:'45px'}}
              rounded="33px"
            >
              <Box
                variant="solid"
                color="white"
                justify="center"
                align="center"
                pl={'10px'}
                fontSize={{base:'xs',sm:'sm',md:'sm',lg:'sm'}}
                
              
              >
                Read More{' '}
                <Icon as={BsArrowUpRight} h={4} w={4} mr={3} />
              </Box>
            </ImageTransition>
          </Flex>
          </a>
        </Flex>
      </Box>
    </Box>
    
  </Box>
  );
}
