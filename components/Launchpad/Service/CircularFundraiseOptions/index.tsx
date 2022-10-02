import React, { useState, useEffect } from "react";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGlobeAsia } from "react-icons/fa";
import { GiSwordsPower } from "react-icons/gi";
import { MdMoneyOff } from "react-icons/md";
import CircleTitle from "./CircleTitle";

export default function CircularFundraiseOptions() {
  const [curIndex, setCurIndex] = useState(0);

  const w = 500;
  const r = 100;
  const angleStep = 360 / CONTENTS.length;

  const rotate = (index: number) => {
    setCurIndex(index);
  };

  useEffect(() => {
    const angle = curIndex == 0 ? 360 : angleStep * curIndex;
    const comp = document.getElementById("CircularComp");
    comp?.setAttribute("style", `transform:rotate(${angle}deg)`);

    for (let i = 0; i < CONTENTS.length; i++) {
      const title = document.getElementById(`title${i}`);
      title?.setAttribute("style", `transform:rotate(-${angle}deg)`);
    }

    for (let i = 0; i < CONTENTS.length; i++) {
      const content = document.getElementById(`content${i}`);
      if (i == curIndex)
        content?.setAttribute(
          "style",
          `visibility: visible; transform: scale(1,1)`
        );
      else
        content?.setAttribute(
          "style",
          `visibility: hidden; transform: scale(0,0)`
        );
    }
  }, [curIndex]);

  return (
    <Flex
      direction="column"
      w="100%"
      justify="center"
      align="center"
      mt="200px"
      display={{ base: "none", md: "flex" }}
    >
      <Box width={`${w}px`} height={`${w}px`} position="relative" zIndex="10">
        <Box
          position="absolute"
          width="100%"
          height="100%"
          border="solid 4px #0FB1F5"
          borderRadius="50%"
        />
        <Flex
          width="100%"
          height="100%"
          position="absolute"
          transition="all 1s ease 0s"
          id="CircularComp"
          zIndex="10"
        >
          {CONTENTS.map((value, index) => (
            <CircleTitle
              w={w}
              r={curIndex == index ? r * 1.5 : r}
              angle={angleStep * index}
              index={index}
              data={value}
              selectComp={rotate}
              key={index}
            />
          ))}
        </Flex>
        <Flex
          width="100%"
          height="100%"
          position="absolute"
          justify="center"
          align="center"
          zIndex="9"
        >
          {CONTENTS.map((value, index) => (
            <Flex
              w="70%"
              h="50%"
              position="absolute"
              justify="center"
              align="center"
              key={index}
              id={`content${index}`}
              transition="transform 1s ease 0s"
              direction="column"
            >
              <Text fontSize="28px" color="#00A3FF" fontWeight="900">
                {value.title.toUpperCase()}
              </Text>
              <Text
                textAlign="center"
                fontSize="20px"
                mt="20px"
                fontWeight="500"
              >
                {value.content}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
      <Box
        width="100%"
        height={{ base: "200px", md: "400px" }}
        position="relative"
        background="#000118"
      >
        <Center
          position="absolute"
          top={{ base: "-100px", md: "-300px" }}
          zIndex="9"
        >
          <Image src="/media/Home/Circular_BG.svg" />
        </Center>
      </Box>
    </Flex>
  );
}

const CONTENTS = [
  {
    title: "Token",
    content:
      "We do crowdfunding fundraising for Token projects for Private and Public launch",
    icon: FaGlobeAsia,
  },
  {
    title: "Equity",
    content: "We do equity fundraising following the company legal aspect",
    icon: MdMoneyOff,
  },
  {
    title: "Profit Sharing",
    content:
      "We crowdfunding fundraising sharing Profit Sharing in by smart contract",
    icon: FaExternalLinkAlt,
  },
  {
    title: "NFT",
    content: "We do crowdfunding ownership legalise by NFT and NFT launchpad ",
    icon: GiSwordsPower,
  },
];
