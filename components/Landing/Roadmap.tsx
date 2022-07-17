import React, { useEffect, useRef, useState } from "react";
import {
  Flex,
  Stack,
  Text,
  UnorderedList,
  IconButton,
  Button,
  ListItem,
  Box,
  HStack,
  VStack,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Parallax } from "react-scroll-parallax";

const timelines = [
  {
    title: "Q1 2022",
    items: [
      { text: "Platform 1.0 launch", complete: true },
      { text: "Community registration system", complete: true },
      { text: "Investor project approval ", complete: true },
      { text: "Create a project milestone system", complete: true },
      { text: "Milestone money release", complete: true },
      { text: "Complete Seed/Private sale fundraise", complete: false },
      { text: "Marketing for Initial Offering", complete: true },
      { text: "10 project for incubation and fundraise", complete: true },
    ],
  },
  {
    title: "Q2 2022",
    items: [
      { text: "Platform update 2.0", complete: true },
      { text: "Have 10 project hosted on WeFund", complete: true },
      { text: "Fundraising for the project hosted on WeFund", complete: false },
      { text: "Real-world project implementation", complete: true },
    ],
  },
  {
    title: "Q3 2022",
    items: [
      {
        text: "Have successfull fundraising for the first 10 projects",
        complete: false,
      },
      { text: "Platform update 3.0", complete: false },
      { text: "Starting real-word project incubation", complete: true },
    ],
  },
  {
    title: "Q4 2022",
    items: [
      {
        text: "Have successful fundraising for real-world projects",
        complete: false,
      },
      {
        text: "Startup pitch competition for real-world projects",
        complete: false,
      },
      { text: "Platform update 4.0", complete: false },
    ],
  },
];

function getScrollPosition() {
  return typeof window !== "undefined"
    ? { x: window.pageXOffset, y: window.pageYOffset }
    : { x: 0, y: 0 };
}

const RoadmapItem = function (props: any) {
  const { title, items, isTop, isLast } = props;

  return (
    <Flex
      direction={"column"}
      minW={"360px"}
      maxW={"360px"}
      alignItems={"center"}
      scrollSnapAlign={"center"}
      data-aos="fade-up"
    >
      {!isTop && (
        <>
          <Box
            minH={"40vh"}
            mt={"1em"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
          >
            <Image
              width={"150px"}
              mb={"-1em"}
              src="/media/Home/timeline-item-point.png"
            />
          </Box>
          <Box
            backgroundColor={"brand"}
            rounded={"full"}
            width={"24px"}
            height={"24px"}
            position={"relative"}
            zIndex={5}
          >
            {!isLast && (
              <Box
                backgroundColor={"brand"}
                position={"absolute"}
                height={"10px"}
                width={"360px"}
                top={"calc(50% - 5px)"}
                left={"12px"}
                data-aos="fade-in"
                data-aos-delay="500"
              />
            )}
          </Box>
          <VStack
            minH={"40vh"}
            mt={"1em"}
            justifyContent={"start"}
            spacing={"0"}
          >
            <Text
              fontWeight="bold"
              fontFamily="PilatExtended-Bold"
              marginBottom={1}
            >
              {title}
            </Text>
            {items.map((item: any, i: any) => (
              <Text
                key={i}
                textAlign={"center"}
                marginTop={"0"}
                color={item.complete ? "#63F060" : "white"}
              >
                {item.text}
              </Text>
            ))}
          </VStack>
        </>
      )}
      {isTop && (
        <>
          <VStack minH={"40vh"} mb={"1em"} justifyContent={"end"} spacing={"0"}>
            {items.map((item: any, i: any) => (
              <Text
                key={i}
                textAlign={"center"}
                marginTop={"0"}
                color={item.complete ? "#63F060" : "white"}
              >
                {item.text}
              </Text>
            ))}
            <Text
              fontWeight="bold"
              fontFamily="PilatExtended-Bold"
              marginTop={1}
            >
              {title}
            </Text>
          </VStack>
          <Box
            backgroundColor={"brand"}
            rounded={"full"}
            width={"24px"}
            height={"24px"}
            position={"relative"}
            zIndex={5}
          >
            {!isLast && (
              <Box
                backgroundColor={"brand"}
                position={"absolute"}
                height={"10px"}
                width={"360px"}
                top={"calc(50% - 5px)"}
                left={"12px"}
                data-aos="fade-in"
                data-aos-delay="1000"
              />
            )}
          </Box>
          <Box
            minH={"40vh"}
            mb={"1em"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
            transform={"rotate(180deg)"}
          >
            <Image
              width={"150px"}
              mb={"-1em"}
              src="/media/Home/timeline-item-point.png"
            />
          </Box>
        </>
      )}
    </Flex>
  );
};

function getWindowDimensions() {
  if (typeof window != "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  return {
    width: 0,
    height: 0,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (typeof window != "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimensions;
}

const HorizontalRoadmap = function () {
  const carouselEl = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();
  const [scrollable, setScrollable] = useState(true);

  const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   console.log(`Progress : ${progress}`)
  // }, [progress])
  useEffect(() => {
    if (!carouselEl.current) {
      return;
    }

    console.log(carouselEl.current);
    setScrollable(carouselEl.current.scrollWidth > width);

    if (scrollable) {
      let scrollTo = progress * carouselEl.current.scrollWidth;
      carouselEl.current.scrollTo(scrollTo, 0);
    }
  }, [width, progress]);

  const maxScroll = 0.66;
  const minScroll = 0.36;
  const setScrollableNormalize = (newProgress: any) => {
    let _progress = (newProgress - minScroll) / (maxScroll - minScroll);
    if (_progress < 0) {
      _progress = 0;
    } else if (_progress > 1) {
      _progress = 1;
    }

    setProgress(_progress);
  };

  // const onClickNext = () => {
  //   carouselEl.current.scrollBy(340, 0)
  // }

  // const onClickPrev = () => {
  //   carouselEl.current.scrollBy(-340, 0)
  // }

  return (
    <Stack>
      <Text
        color="#63CDFA"
        fontFamily="PilatExtended-Bold"
        fontSize={{ md: "25px", lg: "30px" }}
        textTransform={"uppercase"}
        alignSelf={"center"}
        mb="1em"
      >
        Roadmap
      </Text>

      <Box position={"relative"} height={"90vh"}>
        <Parallax
          speed={-10}
          onProgressChange={(progress) => setScrollableNormalize(progress)}
        >
          <HStack
            alignItems={"center"}
            justifyContent={!scrollable ? "center" : "initial"}
            height={"calc(80vh + 24px)"}
            overflowY={"hidden"}
            overflowX={"hidden"}
            ref={carouselEl}
          >
            <Box ml={"12em"}></Box>
            {timelines.map((item, i) => (
              <RoadmapItem
                key={i}
                title={item.title}
                items={item.items}
                isTop={i % 2 == 0}
                isLast={timelines.length == i + 1}
              />
            ))}
            <Box mr={"12em"}></Box>
          </HStack>
        </Parallax>
      </Box>
    </Stack>
  );
};

const VerticalRoadmap = function () {
  return (
    <Flex
      w="100%"
      pt="47px"
      mb="200px"
      justify="center"
      direction="column"
      alignItems="center"
      flexDirection="column"
      mt={{ base: "2em", md: "5em", lg: "5em" }}
      pb={{ base: "2em", md: "10em", lg: "10em" }}
    >
      <Flex
        data-aos="fade-down"
        direction="column"
        textAlign="center"
        fontFamily="Sk-Modernist-Regular"
      >
        <Text id="aboutUsPageLable">ROADMAP</Text>
        <Flex id="headingIndustry">
          <Text color="#00A3FF">WeFund&nbsp;</Text>
          <Text>Roadmap</Text>
        </Flex>
      </Flex>

      {/* {/ Roadmap For Desktop /} */}
      <Flex id="RoadMapDesktop">
        <Image src="/media/RoadmapLine.svg" data-aos="zoom-in-up" />
        <Flex id="roadmapBox1">
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right">
            <Text className="RoadmapHeading">Q1 2022</Text>
            <Image src="/media/beautifulDash.svg" />
            <Text className="RoadmapTitle">Platform V2</Text>
            <UnorderedList className="RoadmapDesc">
              <ListItem color={"green.300"}>
                Backers project approval by voting power
              </ListItem>
              <ListItem color={"green.300"}>
                Project creation with milestone system
              </ListItem>
              <ListItem color={"green.300"}>Multi-stage fundraising</ListItem>
              <ListItem color={"green.300"}>
                Milestone funds released with backers approval through voting
                power
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex id="roadmapBox2">
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right">
            <Text className="RoadmapTitle">Team extend</Text>
            <UnorderedList className="RoadmapDesc">
              <ListItem color={"green.300"}>Advisors</ListItem>
              <ListItem color={"green.300"}>CFO</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex id="roadmapBox3">
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right">
            <Text className="RoadmapTitle">Project Incubation</Text>
            <UnorderedList className="RoadmapDesc">
              <ListItem>Incubate 3 projects</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex id="roadmapBox4">
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right">
            <Text className="RoadmapTitle">Documentation</Text>
            <UnorderedList className="RoadmapDesc">
              <ListItem color={"green.300"}>Release Whitepaper 2.0</ListItem>
              <ListItem color={"green.300"}>Update Litepaper</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex id="roadmapBox5">
          <Flex className="RoadmapContent2" data-aos="fade-left">
            <Text className="RoadmapHeading">Q2 2022</Text>
            <Image src="/media/beautifulDash.svg" />
            <Text className="RoadmapTitle">Platform V3</Text>
            <UnorderedList className="RoadmapDesc">
              <ListItem color={"green.300"}>
                Set up WeFund holder allocation
              </ListItem>
              <ListItem color={"green.300"}>Set up staking mechanism</ListItem>
            </UnorderedList>
          </Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent"></Flex>
        </Flex>
        <Flex id="roadmapBox6">
          <Flex className="RoadmapContent2" data-aos="fade-left">
            <Text className="RoadmapTitle">WeFund Launch</Text>
            <UnorderedList className="RoadmapDesc">
              <ListItem color={"green.300"}>
                Ido price discovery + Multi launchpad IDO
              </ListItem>
              <ListItem color={"green.300"}>TGE + Exchange listing</ListItem>
            </UnorderedList>
          </Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent"></Flex>
        </Flex>
        <Flex id="roadmapBox7">
          <Flex className="RoadmapContent2" data-aos="fade-left">
            <Text className="RoadmapTitle">Project Incubation</Text>
            <UnorderedList className="RoadmapDesc">
              <ListItem color={"green.300"}>Incubate 10 project</ListItem>
            </UnorderedList>
          </Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent"></Flex>
        </Flex>
        <Flex id="roadmapBox8">
          <Flex className="RoadmapContent2" data-aos="fade-left">
            <Text className="RoadmapTitle">Documentation</Text>
            <UnorderedList className="RoadmapDesc">
              <ListItem>Release Whitepaper 3.0</ListItem>
              <ListItem>Update Litepaper</ListItem>
            </UnorderedList>
          </Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent"></Flex>
        </Flex>
        <Flex id="roadmapBox9">
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right">
            <Text className="RoadmapHeading">Q3 2022</Text>
            <Image src="/media/beautifulDash.svg" />
            <Text className="RoadmapTitle">Hackahton</Text>
            <UnorderedList className="RoadmapDesc">
              <ListItem>Have the Hackathon with Partners</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex id="roadmapBox10">
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent">
            <Text className="RoadmapTitle">Project Incubation</Text>
            <UnorderedList className="RoadmapDesc">
              <ListItem>
                Complete the fundraising for the 10 projects incubate
              </ListItem>
              <ListItem>Incubate 10 new projects</ListItem>
              <ListItem>Real estate projects listed</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
      {/* {/ Roadmap For Desktop /} */}

      {/* {/ Roadmap For Mobile /} */}
      <Flex id="RoadMapMobile">
        <Image src="/media/RoadmapLine.svg" id="roadMapLineId" />
        <Flex id="roadmapBox1">
          <Image src="/media/circle.svg" id="circleD" data-aos="zoom-in-up" />
          <Flex className="RoadmapContent" data-aos="fade-right">
            <Text className="RoadmapHeading">Q1 2022</Text>
            <Image src="/media/beautifulDash.svg" />
            <Text className="RoadmapTitle">Platform V2</Text>
            <UnorderedList className="RoadmapDesc">
              <ListItem color={"green.300"}>
                Backers project approval by voting power
              </ListItem>
              <ListItem color={"green.300"}>
                Project creation with milestone system
              </ListItem>
              <ListItem color={"green.300"}>Multi-stage fundraising</ListItem>
              <ListItem color={"green.300"}>
                Milestone funds released with backers approval through voting
                power
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex width={"95%"} id="roadmapBox2" top={"16em"}>
          <Flex
            ml="-0.4em"
            width={"1.2em"}
            height={"1.2em"}
            borderRadius="100px"
            data-aos="zoom-in-up"
            backgroundColor="#69E4FF"
          />
          <Flex className="RoadmapContent" width={"95%"} data-aos="fade-right">
            <Flex fontFamily="PilatExtended-Bold" fontSize="12px">
              <Text color="#63CDFA">Q2</Text>
              <Text color="white" ml={"10px"}>
                2022
              </Text>
            </Flex>
            <UnorderedList
              className="RoadmapDesc"
              fontSize={"14px"}
              mt={"10px"}
              ml="0"
            >
              <ListItem color={"white"}>
                Fundraising for the project hosted on WeFund
              </ListItem>
              <ListItem color={"white"}>Platform update 2.0</ListItem>
              <ListItem color={"white"}>
                <b>Have 10 projects hosted on WeFund</b>
              </ListItem>
              <ListItem color={"white"}>
                Real-world project implementation
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex width={"95%"} id="roadmapBox3" top={"24em"}>
          <Flex
            ml="-0.4em"
            width={"1.2em"}
            height={"1.2em"}
            borderRadius="100px"
            data-aos="zoom-in-up"
            backgroundColor="#69E4FF"
          />
          <Flex className="RoadmapContent" width={"95%"} data-aos="fade-right">
            <Flex fontFamily="PilatExtended-Bold" fontSize="12px">
              <Text color="#63CDFA">Q3</Text>
              <Text color="white" ml={"10px"}>
                2022
              </Text>
            </Flex>
            <UnorderedList
              className="RoadmapDesc"
              fontSize={"14px"}
              mt={"10px"}
              ml="0"
            >
              <ListItem color={"white"}>
                <b>Have successful fundraising for the first 10 projects</b>
              </ListItem>
              <ListItem color={"white"}>Platform update 3.0</ListItem>
              <ListItem color={"white"}>
                <b>Starting real-world project incubation</b>
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex width={"95%"} id="roadmapBox4" top={"32em"}>
          <Flex
            mt="-0.5em"
            ml="-0.4em"
            width={"1.2em"}
            height={"1.2em"}
            borderRadius="100px"
            data-aos="zoom-in-up"
            backgroundColor="#69E4FF"
          />
          <Flex className="RoadmapContent" width={"95%"} data-aos="fade-right">
            <Flex fontFamily="PilatExtended-Bold" fontSize="12px">
              <Text color="#63CDFA">Q4</Text>
              <Text color="white" ml={"10px"}>
                2022
              </Text>
            </Flex>
            <UnorderedList
              className="RoadmapDesc"
              fontSize={"14px"}
              mt={"10px"}
              ml="0"
            >
              <ListItem color={"white"}>
                Have successful fundraising for real-world projects
              </ListItem>
              <ListItem color={"white"}>
                <b>Startup pitch competition for real-world projects</b>
              </ListItem>
              <ListItem color={"white"}>Platform update 4.0</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default function Roadmap() {
  const [direction, setDirection] = useState("horizontal");

  if (direction === "horizontal") {
    return <HorizontalRoadmap />;
  }
  if (direction === "vertical") {
    return <VerticalRoadmap />;
  }
  return <HorizontalRoadmap />;
}
