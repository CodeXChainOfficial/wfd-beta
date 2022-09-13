import { Center, ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { chakra, Box, Flex, Text, VStack, Image, Img } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";

import { InputTransitiongrey } from "../ImageTransition";

export default function IncubationFaq() {
  const [blog1, setBlog1] = useState(false);
  const [blog2, setBlog2] = useState(false);
  const [blog3, setBlog3] = useState(false);
  const [blog4, setBlog4] = useState(false);
  const [blog5, setBlog5] = useState(false);

  return (
      <Center>
          
      <Flex
        fontSize="15px"
        w="70%"
        alignContent="center"
        direction="column"
        fontWeight="500"
        justify="center"
      >
        <Flex
          mt="37px"
          fontFamily="PilatExtended-Bold"
          fontSize="32px"
          justify="center"
          color="#0FB1F5"
        >
          FAQ
        </Flex>
        <InputTransitiongrey
          unitid="wefundabout"
          selected={blog1}
          onClick={() => {
            setBlog1(!blog1);
          }}
          width="100%"
          height={blog1 ? "250px" : "55px"}
          rounded="md"
          mt="25px"
        >
          <Flex direction="column" w="100%">
            <Flex justify="space-between" align="center" w="100%" h="55px">
              <Box ml="25px">
                <Text>What is WeFund about?</Text>
              </Box>
              <Box mr="25px">
                {blog1 && <IoChevronUpOutline />}
                {!blog1 && <IoChevronDownOutline />}
              </Box>
            </Flex>
            {blog1 && (
              <>
                <Img
                  mt="17px"
                  mx="35px"
                  height="1px"
                  objectFit="cover"
                  src="/media/line.svg"
                  
                />
                <Text
                  fontSize="15px"
                  mt="17px"
                  mb="22px"
                  px="25px"
                  fontWeight="400"
                  w="100%"
                  h="auto"
                >
                  WeFund is a multichain incubation and crowdfunding platform that uses blockchain and smart contracts to make the process more transparent, hold project creators accountable, and minimize risk for project backers. The Incubation process is a 12-week program led by WeFund’s Web2 and Web3 experts.

                </Text>
              </>
            )}
          </Flex>
        </InputTransitiongrey>
        <InputTransitiongrey
          unitid="howback"
          selected={blog2}
          onClick={() => {
            setBlog2(!blog2);
          }}
          width="100%"
          height={blog2 ? "250px" : "55px"}
          rounded="md"
          mt="25px"
        >
          <Flex direction="column" w="100%">
            <Flex justify="space-between" align="center" w="100%" h="55px">
              <Box ml="25px">
                <Text>When I should apply?</Text>
              </Box>
              <Box mr="25px">
                {blog2 && <IoChevronUpOutline />}
                {!blog2 && <IoChevronDownOutline />}
              </Box>
            </Flex>
            {blog2 && (
              <>
                <Img
                  mt="17px"
                  mx="35px"
                  height="1px"
                  objectFit="cover"
                  src="/media/line.svg"
                />
                <Text
                  fontSize="15px"
                  mt="17px"
                  mb="22px"
                  px="25px"
                  fontWeight="400"
                  w="100%"
                  h="auto"
                >
                  Anytime!
                </Text>
              </>
            )}
          </Flex>
        </InputTransitiongrey>
        <InputTransitiongrey
          unitid="backerget"
          selected={blog3}
          onClick={() => {
            setBlog3(!blog3);
          }}
          width="100%"
          height={blog3 ? "250px" : "55px"}
          rounded="md"
          mt="25px"
        >
          <Flex direction="column" w="100%">
            <Flex justify="space-between" align="center" w="100%" h="55px">
              <Box ml="25px">
                <Text>I don't understand how the program can be free. What's the catch?</Text>
              </Box>
              <Box mr="25px">
                {blog3 && <IoChevronUpOutline />}
                {!blog3 && <IoChevronDownOutline />}
              </Box>
            </Flex>
            {blog3 && (
              <>
                <Img
                  mt="17px"
                  mx="35px"
                  height="1px"
                  objectFit="cover"
                  src="/media/line.svg"
                />
                <Text
                  fontSize="15px"
                  mt="17px"
                  mb="22px"
                  px="25px"
                  fontWeight="400"
                  w="100%"
                  h="auto"
                >
                  The catch is you need to be impactful, adhere to our incubation guidelines, and provide net benefit to our network of projects and partners
                </Text>
              </>
            )}
          </Flex>
        </InputTransitiongrey>
        <InputTransitiongrey
          unitid="ustothertoken"
          selected={blog4}
          onClick={() => {
            setBlog4(!blog4);
          }}
          width="100%"
          height={blog4 ? "250px" : "55px"}
          rounded="md"
          mt="25px"
        >
          <Flex direction="column" w="100%">
            <Flex justify="space-between" align="center" w="100%" h="55px">
              <Box ml="25px">
                <Text>Is the program remote?</Text>
              </Box>
              <Box mr="25px">
                {blog4 && <IoChevronUpOutline />}
                {!blog4 && <IoChevronDownOutline />}
              </Box>
            </Flex>
            {blog4 && (
              <>
                <Img
                  mt="17px"
                  mx="35px"
                  height="1px"
                  objectFit="cover"
                  src="/media/line.svg"
                  
                />
                <Text
                  fontSize="15px"
                  mt="17px"
                  mb="22px"
                  px="25px"
                  fontWeight="400"
                  w="100%"
                  h="auto"
                >
                  Yes. The program is fully remote
                </Text>
              </>
            )}
          </Flex>
        </InputTransitiongrey>
        <InputTransitiongrey
          unitid="whatwfdfee"
          selected={blog5}
          onClick={() => {
            setBlog5(!blog5);
          }}
          width="100%"
          height={blog5 ? "250px" : "55px"}
          rounded="md"
          mt="25px"
          mb="210px"
        >
          <Flex direction="column" w="100%">
            <Flex justify="space-between" align="center" w="100%" h="55px">
              <Box ml="25px">
                <Text>How long is the program?</Text>
              </Box>
              <Box mr="25px">
                {blog5 && <IoChevronUpOutline />}
                {!blog5 && <IoChevronDownOutline />}
              </Box>
            </Flex>
            {blog5 && (
              <>
                <Img
                  mt="17px"
                  mx="35px"
                  height="1px"
                  objectFit="cover"
                  src="/media/line.svg"
                  
                />
                <Text
                  fontSize="15px"
                  mt="17px"
                  mb="22px"
                  px="25px"
                  fontWeight="400"
                  w="100%"
                  h="auto"
                >
                  12 Weeks. With extension and end-of-term analysis and assestment every 12 weeks as follow.
                </Text>
              </>
            )}
          </Flex>
        </InputTransitiongrey>
      </Flex>
      </Center>
  );
}
