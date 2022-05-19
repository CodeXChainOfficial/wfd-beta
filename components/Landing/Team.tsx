import React from "react";
import { Image, Flex, Text, Link, Spacer } from "@chakra-ui/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 2000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export default function Team() {
  return (
    <Flex
      width="100%"
      justify="center"
      alignItems="center"
      flexDirection="column"
      fontFamily="Sk-Modernist-Regular"
      mb={{ base: "3em", md: "5em", lg: "8em" }}
    >
      <Flex
        fontFamily="PilatExtended-Bold"
        fontSize={{ md: "25px", lg: "30px" }}
      >
        <Text color="#63CDFA">WeFund</Text>
        <Text color="white" ml={"10px"}>
          Team
        </Text>
      </Flex>

      <Flex
        mt={{ base: "1em", md: "2em" }}
        pb={{ base: "1em", md: "2em" }}
        position={"relative"}
        flexDirection="column"
        justifyContent={"flex-start"}
        pl={{ base: "0", md: "1em", lg: "1em" }}
        width={{ base: "100%", md: "80vw", lg: "88vw" }}
      >
        <Carousel
          infinite
          autoPlay={true}
          swipeable={true}
          draggable={true}
          // showThumbs={false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          responsive={responsive}
          transitionDuration={500}
        >
          {team.map((t, index) => (
            <Flex
              key={index}
              zIndex={"5"}
              height="100%"
              borderRadius="10px"
              position="relative"
              className="teamCard"
              data-aos="zoom-in-up"
              flexDirection={"column"}
              bgGradient={"linear(#360847, #18075b)"}
              mx={{ base: "2vw", md: "2vw", lg: "1vw" }}
              py={{ base: "2vw", md: "2vw", lg: "1vw" }}
              width={{ base: "48vw", md: "37vw", lg: "19vw" }}
            >
              <Image
                src={t.imgsrc}
                mx={{ base: "2vw", md: "2vw", lg: "1vw" }}
                mb={{ base: "1vw", md: "1vw", lg: ".5vw" }}
                width={{ base: "44vw", md: "33vw", lg: "17vw" }}
                height={{ base: "44vw", md: "33vw", lg: "17vw" }}
                // height={{ base: '12em', md: '20em', lg: '25em' }}
              />
              {t.logos && (
                <Flex
                  flexWrap={"wrap"}
                  mx={{ base: "1vw", md: "1vw", lg: ".5vw" }}
                >
                  {t.logos?.map((e, i) => (
                    <Image
                      src={e}
                      key={i}
                      height="40px"
                      background="white"
                      borderRadius="3px"
                      objectFit="contain"
                      m={{ base: ".5vw", md: ".5vw", lg: ".5vw" }}
                      width={{ base: "10vw", md: "7.5vw", lg: "3.5vw" }}
                    />
                  ))}
                </Flex>
              )}
              <Flex w="100%" px={{ base: "2vw", md: "2vw", lg: "1vw" }}>
                <div>
                  <Text
                    fontFamily={"PilatExtended-Bold"}
                    fontSize={{ base: "12px", md: "18px", lg: "18px" }}
                  >
                    {t.name}
                  </Text>
                  <Text
                    fontSize={{ base: "10px", md: "13px", lg: "13px" }}
                    fontFamily={"PilatExtended-Regular"}
                  >
                    {t.role}
                  </Text>
                </div>
                <Spacer />
                {t.link && (
                  <Link href={t.link} mt="5px" isExternal>
                    <Image
                      border="0"
                      cursor="pointer"
                      background="white"
                      borderRadius="6px"
                      src="/media/linkedin.png"
                      width={{ base: "25px", md: "40px", lg: "40px" }}
                      height={{ base: "25px", md: "40px", lg: "40px" }}
                    />
                  </Link>
                )}
              </Flex>
            </Flex>
          ))}
        </Carousel>
      </Flex>
    </Flex>
  );
}

const team = [
  {
    name: "Andrea Bello",
    role: "CEO CTO & Co-Founder",
    link: "https://linkedin.com/in/bello-andrea-380572b4/",
    logos: [
      "/media/Team_Companies/GE.png",
      "/media/Team_Companies/ABB.png",
      "/media/Team_Companies/AXA.png",
      "/media/Team_Companies/zurich.png",
    ],
    imgsrc: "/media/Team/wfd-andrea.jpg",
  },
  {
    name: "Ika Afifah",
    role: "CMO and Co-Founder",
    link: "https://linkedin.com/in/ika-nur-afifah/",
    imgsrc: "/media/Team/wfd-ika.jpg",
    logos: [
      "/media/Team_Companies/waves.png",
      "/media/Team_Companies/TME.png",
      "/media/Team_Companies/Tencent.jpeg",
      "/media/Team_Companies/Bigo.jpeg",
    ],
  },
  {
    name: "Austin Taylor",
    role: "CCO",
    link: "https://linkedin.com/in/austintaylor19/",
    imgsrc: "/media/Team/wfd-austin.jpg",
    logos: [
      "/media/Team_Companies/pegasus.png",
      "/media/Team_Companies/Harman.png",
      "/media/Team_Companies/Holland.jpeg",
    ],
  },
  {
    name: "Achuth Chandran",
    role: "CFO",
    link: "https://ae.linkedin.com/in/achuth-k-chandran-b17880102",
    imgsrc: "/media/Home/Achuth.png",
    logos: [
      "/media/Home/55.png",
      "/media/Home/52.png",
      "/media/Home/54.png",
      "/media/Home/53.png",
    ],
  },
  {
    name: "Melati Puspa Anisa",
    role: "Marketing & Data",
    imgsrc: "/media/Home/60.png",
  },
  {
    name: "Pirda Fajriati",
    role: "Graphic Design & Marketing",
    imgsrc: "/media/Home/61.png",
  },
  {
    name: "Marko Vitez",
    role: "Smart Contract Dev",
    imgsrc: "/media/Home/62.png",
  },
  {
    name: "Manuel Guerrero",
    role: "Community Manager",
    imgsrc: "/media/Home/63.png",
  },
  {
    name: "Hardin Santoso",
    role: "Web Development & Content Creation",
    imgsrc: "/media/Home/64.png",
  },
];
