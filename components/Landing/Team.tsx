import { Avatar, Box, chakra, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { BsLinkedin } from "react-icons/bs";

const team = [
  {
    name: "Andrea Bello",
    role: "Co-Founder & CEO",
    desc: "Founder and director of three start-ups in the technology and innovation sector, software develop on company like ABB, General Electric and Fund manager at AXA and Zurich",
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
    role: "Co-Founder & CMO",
    desc: "A dynamic individual who worked at Tencent as an Operation Specialist, in the partnership division. Before Tencent, she was Senior Partnership Manager at Bigo.",
    link: "https://linkedin.com/in/ika-nur-afifah/",
    imgsrc: "/media/Team/ika.png",
    experiences: [
      "/media/Experiences/Tencent.jpeg",
      "/media/Experiences/waves.png",
      "/media/Experiences/saxion.jpg",
      "/media/Experiences/telkom.jpg",
      "/media/Experiences/bigo.jpg",
    ],
  },
  {
    name: "John McLean",
    role: "CO-Founder and CLO",
    desc: "Seasoned lawyer, investor, and builder of worlds. He comes from a corporate M&A tax background via a prominent Middle East sovereign wealth fund, where he built and ran the tax function for a $20bn global investment platform comprising private and public equities, venture capital, credit investments, and special strategic situations. Now based in London and energised to be at the cutting edge of the new digital economy",
    link: "https://www.linkedin.com/in/john-mclean-2b669521",
    imgsrc: "/media/Team/john.jpg",
    experiences: [
      "/media/Experiences/ignition.jpg",
      "/media/Experiences/mubadala.jpg",
      "/media/Experiences/akingump.jpg",
    ],
  },
  {
    name: "Austin Taylor",
    role: "CCO",
    desc: "Comes from a background in investment and corporate finance. After completing his education he worked as a Business Analyst for Harman International in Seattle.",
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
    name: "Achuth Chandran",
    role: "CFO",
    desc: "Experienced financial professional and consultant. HEC Paris alumnus. ACCA Affiliate. With experience at KPMG, Sancta Capital and Trilogy Enterprises.",
    link: "https://ae.linkedin.com/in/achuth-k-chandran-b17880102",
    imgsrc: "/media/Team/achuth.png",
    experiences: [
      "/media/Experiences/trilogy.jpg",
      "/media/Experiences/kpmg.jpg",
      "/media/Experiences/sancta.jpg",
    ],
  },

  {
    name: "Melati Puspa",
    role: "Business Development",
    desc: "",
    imgsrc: "/media/Team/x.png",
    experiences: [
      "",
    ],
  },
  {
    name: "Hardin",
    role: "Project Manager",
    desc: "4+ years experience of developing  finance, trading applications. 2+ years experience of research, develop on blockchain industry.",
    link: "https://www.linkedin.com/in/hardin-santoso/",
    imgsrc: "/media/Team/hardin.jpg",
    experiences: [
      "/media/Experiences/telkom.jpg",
      "/media/Experiences/saxion.jpg",
      "/media/Experiences/emurgo.png",
      "/media/Experiences/edsen.png",
    ],
  },
  {
    name: "Marko",
    role: "Smart Contract developer",
    desc: "7+ years of experience as a Senior DevOps Engineer at FPT, Galaxy, TikTikTrading. Specialized in streaming systems. Devops Lead Engineer at 2 project gamefi: Lunarush, Metaspets.",
    link: "https://www.linkedin.com/in/marko-vitez-6b9697224/",
    imgsrc: "/media/Team/marko.png",
    experiences: [
      "/media/Experiences/tiktiktrading.jfif",
      "/media/Experiences/FPT.png",
    ],
  },
  {
    name: "Pirda Fajriati",
    role: "Graphic Designer",
    desc: "8+ years in software development & leadership skills. 5 years of experience developing, implementing and supporting large scale streaming industry. 2 blockchain projects...",
    imgsrc: "/media/Team/x.png",
    experiences: [
      "",
    ],
  },
];
 
export default function Team() {
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
        KEY <chakra.span color={"#0FB1F5"}>TEAM</chakra.span>
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
        {team.map((teams, i) => (
          <Flex
            key={i}
            id="utilityToken"
            textAlign="center"
            overflow={"hidden"}
            alignItems={"center"}
            flexDirection="column"
            // justifyContent={"center"}
            backgroundColor="#120D3F"
            m={{ base: ".2em", md: ".5em", lg: ".5em" }}
            p={{ base: ".2em", md: ".5em 1em", lg: "1em" }}
            width={{ base: "100%", md: "18em", lg: "10em", xl: "17em" }}
            height={{ base: "24em", md: "30em", lg: "27em" }}
            borderRadius={{ base: "10px", md: "15px", lg: "15px" }}
            position="relative"
          >
            <Avatar src={teams.imgsrc} size="xl" mt="40px" />
            <Text
              mt={"1em"}
              width="95%"
              color={"white"}
              fontFamily="Arial.Bold"
              fontSize="18px"
              fontWeight="900"
            >
              {teams.name}
            </Text>
            <Flex w="100%" h="60px" mt={"1em"}>
            <Text
              mt={"1em"}
              width="95%"
              color={"white"}
              fontFamily="Arial.Bold"
              fontSize="14px"
              fontWeight="700"
            >
              {teams.role}
            </Text>
            <Link href={teams.link} pt={4}>
                <BsLinkedin size="24px" color="#0FB1F5" />
              </Link>
            </Flex>
            <Flex flexWrap="wrap" w="100%" gap="10px" justify="center">
              {teams.experiences.map((e, index) => (
                <Image src={e} height="40px" key={index} borderRadius="2px"/>
              ))}
            </Flex>
            
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
