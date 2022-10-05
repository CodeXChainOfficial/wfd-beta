import { Avatar, Box, chakra, Flex, Image, Text, Link } from "@chakra-ui/react";
import React from "react";
import { BsLinkedin } from "react-icons/bs";

const Mentors = [
  {
    name: "Andrea Bello",
    role: "Co-Founder & Chief Executive Officer of WeFund",
    link: "https://linkedin.com/in/bello-andrea-380572b4/",
    imgsrc: "/media/Team/andrea.png",
    experiences: [
      "/media/Experiences/axa.jpg",
      "/media/Experiences/ABB.png",
      "/media/Experiences/ge.jpg",
      "/media/Experiences/supsi.jpg",
      "/media/Experiences/zurich.jpg",
    ],
  },
  {
    name: "Ika Afifah",
    role: "Co-Founder & Chief Marketing Officer of WeFund",
    link: "https://linkedin.com/in/ika-nur-afifah/",
    imgsrc: "/media/Team/ika.png",
    experiences: [
      "/media/Experiences/tencent.jpeg",
      "/media/Experiences/waves.png",
      "/media/Experiences/saxion.jpg",
      "/media/Experiences/telkom.jpg",
      "/media/Experiences/bigo.jpg",
    ],
  },
  {
    name: "John McLean",
    role: "Tax Director of Binance",
    link: "https://www.linkedin.com/in/john-mclean-2b669521",
    imgsrc: "/media/Team/john.jpg",
    experiences: [
      "/media/Experiences/igniti.jpg",
      "/media/Experiences/mubadala.jpg",
      "/media/Experiences/akingump.jpg",
    ],
  },
  {
    name: "Achuth Chandran",
    role: "Founding Partner of Octave Advisory",
    link: "https://ae.linkedin.com/in/achuth-k-chandran-b17880102",
    imgsrc: "/media/Team/achuth.png",
    experiences: [
      "/media/Experiences/trilogy.jpg",
      "/media/Experiences/kpmg.jpg",
      "/media/Experiences/sancta.jpg",
    ],
  },
  {
    name: "Jason Galvin",
    role: "Web3 Investor",
    link: "https://ae.linkedin.com/in/achuth-k-chandran-b17880102",
    imgsrc: "/media/Team/Jason Galvin.png",
    experiences: [
      "/media/Experiences/GeneralThings.png",
      "/media/Experiences/GoPro.jpeg",
      "/media/Experiences/BearingPoint.jpg",
      "/media/Experiences/flcgroup.jpg",
      "/media/Experiences/adteractive.jpg",
    ],
  },
  {
    name: "Austin Taylor",
    role: "Chief Communication Officer of WeFund",
    link: "https://linkedin.com/in/austintaylor19/",
    imgsrc: "/media/Team/austin.png",
    experiences: [
      "/media/Experiences/Harman.png",
      "/media/Experiences/pegasus.png",
      "/media/Experiences/wwu.jpg",
      "/media/Experiences/Holland.jpeg",
      "/media/Experiences/universitas.jpg",
    ],
  },
  {
    name: "Hardin",
    role: "Project Coordinator of WeFund",
    link: "https://www.linkedin.com/in/hardin-santoso/",
    imgsrc: "/media/Team/hardin.jpg",
    experiences: [
      "/media/Experiences/telkom.jpg",
      "/media/Experiences/saxion.jpg",
      "/media/Experiences/emurgo.png",
      "/media/Experiences/edsen.png",
    ],
  },
];

export default function MentorParners() {
  return (
    <Flex
      width="100%"
      position="relative"
      alignItems="center"
      flexDirection="column"
      pb={{ base: "5em", md: "8em", lg: "10em" }}
      fontFamily="PilatExtended-Regular"
      background="#000118"
    >
      <Text
        textAlign="center"
        color="#FFFF"
        fontFamily="PilatExtended-Bold"
        fontSize={{ base: "18px", md: "25px", lg: "30px" }}
        fontWeight={"600"}
      >
        MENTOR AND INCUBATION{" "}
        <chakra.span color={"#0FB1F5"}>PARTNERS</chakra.span>
      </Text>
      <Flex
        flexWrap={"wrap"}
        flexDirection={{ base: "column", md: "row" }}
        backgroundSize={"contain"}
        mt={{ base: "1em", md: "1em", lg: "1em" }}
        mb={{ base: "4em", md: "8em", lg: "10em" }}
        width={{ base: "100%", md: "90%" }}
        maxW={"1200px"}
        alignItems={"center"}
        justifyContent={{ base: "center", md: "center", lg: "center" }}
      >
        {Mentors.map((mentor, i) => (
          <Flex
            key={i}
            id="utilityToken"
            textAlign="center"
            overflow={"hidden"}
            alignItems={"center"}
            flexDirection="column"
            // justifyContent={"center"}
            // backgroundColor="#120D3F"
            m={{ base: ".2em", md: ".5em", lg: ".5em" }}
            p={{ base: ".2em", md: ".5em 1em", lg: "1em" }}
            width={{ base: "100%", md: "18em", lg: "10em", xl: "17em" }}
            height={{ base: "24em", md: "30em", lg: "27em" }}
            borderRadius={{ base: "10px", md: "15px", lg: "15px" }}
            position="relative"
          >
            <Avatar src={mentor.imgsrc} size="xl" mt="40px" />
            <Text
              mt={"1em"}
              width="95%"
              color={"white"}
              fontFamily="Arial.Bold"
              fontSize="18px"
              fontWeight="900"
            >
              {mentor.name}
            </Text>
            <Flex w="100%" h="60px" mt={"1em"}>
              <Text
                width="95%"
                color="#BFBFBF"
                fontFamily="Poppins"
                fontSize="14px"
                lineHeight="150%"
                fontWeight="500"
              >
                {mentor.role}
              </Text>
              <Link href={mentor.link}>
                <BsLinkedin size="24px" color="#0FB1F5" />
              </Link>
            </Flex>
            <Flex flexWrap="wrap" w="100%" gap="10px" justify="center">
              {mentor.experiences.map((e, index) => (
                <Image src={e} height="30px" key={index} borderRadius="2px"/>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
