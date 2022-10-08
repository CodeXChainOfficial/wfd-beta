import React, { useState, useMemo, useCallback, useEffect } from "react";
import {
  Box,
  Center,
  chakra,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGlobeAsia } from "react-icons/fa";
import { GiSwordsPower } from "react-icons/gi";
import { MdMoneyOff } from "react-icons/md";
import CircleTitle from "./CircleTitle";

export default function CircularServiceDescription() {
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
      background="url(/media/starrybackground.webm)"
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
        height={{ base: "200px", md: "900px" }}
        position="relative"
        mt={{ base: "-100px", md: "-300px", lg:"-400px" }}
      >
        <Center
          position="absolute"
          top={{ base: "-100px", md: "-300px" }}
          zIndex="1"
        >
          <video autoPlay muted loop>
            <source
              src="/media/starrybackground.webm"
              type="video/webm"
            ></source>
          </video>
        </Center>
      </Box>
    </Flex>
  );
}

const CONTENTS = [
  {
    title: "Launchpad",
    content:
      "WeFund is a crowdfunding Launchpad working with Token (Private and Public), Equity, Profit Sharing and NFT",
    icon: FaGlobeAsia,
  },
  {
    title: "Acceleration",
    content:
      "Acceleration service for project on incubation that want their development accelerated and reserved for fast paced project ready to go to fundraise soon",
    icon: MdMoneyOff,
  },
  {
    title: "Swap service",
    content:
      "WeFund through partners offer swap services accross multiple chain and tokens",
    icon: FaExternalLinkAlt,
  },
  {
    title: "Incubation",
    content:
      "Incubation service of WeFund that offers well packaged program and partnership network to help project grow from idea to realisation",
    icon: GiSwordsPower,
  },
];
