import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { chakra, Box, Flex, Text, VStack, Image, Img } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";

import { InputTransitiongrey } from "./ImageTransition";

export default function NewProject() {
  const [blog1, setBlog1] = useState(false);
  const [blog2, setBlog2] = useState(false);
  const [blog3, setBlog3] = useState(false);
  const [blog4, setBlog4] = useState(false);
  const [blog5, setBlog5] = useState(false);

  return (
    <ChakraProvider resetCSS theme={theme}>
      {/* -----------------------sroadmap-------------------------------- */}

      <Flex
        pb="75px"
        mb="20px"
        justify="center"
        style={{ fontFamily: "PilatExtended-Bold" }}
      >
        <VStack>
          <Flex direction={{ base: "column", lg: "row" }}>
            <Text fontSize="22px">Our Funding&nbsp;</Text>
            <Text fontSize="22px" color="#4790f5">
              Approach
            </Text>
          </Flex>
          <Flex>
            <Image
              alignSelf={"center"}
              alt={"WeFund"}
              src={"/saftroadmap.svg"}
            />
          </Flex>
        </VStack>
      </Flex>

      {/* -----------------------space line-------------------------------- */}
      <Img
        mt="102px"
        height="1px"
        objectFit="cover"
        src="/media/line.svg"
        alt="UST Avatar"
      />

      {/* ---------------------------blog------------------------------ */}

      <Flex
        fontSize="15px"
        w="100%"
        direction="column"
        fontWeight="500"
        justify="center"
      >
        <Flex
          mt="37px"
          fontFamily="PilatExtended-Bold"
          fontSize="22px"
          justify="center"
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
                  alt="UST Avatar"
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
                  WFD Tokens will be used to operate WeFund Platforms. Projects
                  convert 1% of their funding into WFD tokens. WFD Tokens are
                  also used as governance tokens for voting and governance of
                  projects.
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
                <Text>How does one back a project?</Text>
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
                  alt="UST Avatar"
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
                  WFD Tokens will be used to operate WeFund Platforms. Projects
                  for example converts 1% of their funding into WFD tokens. WFD
                  Tokens also used as governance tokens for voting and govern
                  the project trajectory.
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
                <Text>What do backers get?</Text>
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
                  alt="UST Avatar"
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
                  WFD Tokens will be used to operate WeFund Platforms. Projects
                  for example converts 1% of their funding into WFD tokens. WFD
                  Tokens also used as governance tokens for voting and govern
                  the project trajectory.
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
                <Text>What will my UST or other tokens be used for?</Text>
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
                  alt="UST Avatar"
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
                  WFD Tokens will be used to operate WeFund Platforms. Projects
                  for example converts 1% of their funding into WFD tokens. WFD
                  Tokens also used as governance tokens for voting and govern
                  the project trajectory.
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
                <Text>What are WFD fees?</Text>
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
                  alt="UST Avatar"
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
                  WFD Tokens will be used to operate WeFund Platforms. Projects
                  for example converts 1% of their funding into WFD tokens. WFD
                  Tokens are also used as governance tokens for voting and
                  governane of projects.
                </Text>
              </>
            )}
          </Flex>
        </InputTransitiongrey>
      </Flex>
    </ChakraProvider>
  );
}
