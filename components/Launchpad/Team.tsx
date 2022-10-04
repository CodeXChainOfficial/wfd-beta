import { Avatar, Box, chakra, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const team = [
  {
    name: "Andrea Bello",
    role: "CEO & Co-Founder",
    desc: "He is the person behind the development of the Fan$quad smart contract that was deployed on Col-4 during the Hackathon organized by Terraformlab.",
    link: "https://linkedin.com/in/bello-andrea-380572b4/",
    imgsrc: "/media/Team/andrea.png",
  },
  {
    name: "Ika Afifah",
    role: "CMO and Co-Founder",
    desc: "A dynamic individual who worked at Tencent as an Operation Specialist, in the partnership division. Before Tencent, she was Senior Partnership Manager at Bigo.",
    link: "https://linkedin.com/in/ika-nur-afifah/",
    imgsrc: "/media/Team/ika.png",
  },
  {
    name: "John McLean",
    role: "CO-Founder and CLO",
    desc: "Seasoned lawyer, investor, and builder of worlds. He comes from a corporate M&A tax background via a prominent Middle East sovereign wealth fund, where he built and ran the tax function for a $20bn global investment platform comprising private and public equities, venture capital, credit investments, and special strategic situations. Now based in London and energised to be at the cutting edge of the new digital economy",
    link: "https://www.linkedin.com/in/john-mclean-2b669521",
    imgsrc: "/media/Team/john.jpg",
  },
  {
    name: "Austin Taylor",
    role: "CCO",
    desc: "Comes from a background in investment and corporate finance. After completing his education he worked as a Business Analyst for Harman International in Seattle.",
    link: "https://linkedin.com/in/austintaylor19/",
    imgsrc: "/media/Team/austin.png",
  },
  {
    name: "Achuth Chandran",
    role: "CFO",
    desc: "Experienced financial professional and consultant. HEC Paris alumnus. ACCA Affiliate. With experience at KPMG, Sancta Capital and Trilogy Enterprises.",
    link: "https://ae.linkedin.com/in/achuth-k-chandran-b17880102",
    imgsrc: "/media/Team/achuth.png",
  },

  {
    name: "Tram Vo",
    role: "CTO",
    desc: "8+ years in software development & leadership skills. 5 years of experience developing, implementing and supporting large scale streaming industry. 2 blockchain projects...",
    imgsrc: "/media/Team/tram.png",
  },
  {
    name: "Hardin",
    role: "Project Manager",
    desc: "4+ years experience of developing  finance, trading applications. 2+ years experience of research, develop on blockchain industry.",
    link: "https://www.linkedin.com/in/hardin-santoso/",
    imgsrc: "/media/Team/hardin.jpg",
  },
  {
    name: "Marko",
    role: "Smart Contract developer",
    desc: "7+ years of experience as a Senior DevOps Engineer at FPT, Galaxy, TikTikTrading. Specialized in streaming systems. Devops Lead Engineer at 2 project gamefi: Lunarush, Metaspets.",
    link: "https://www.linkedin.com/in/marko-vitez-6b9697224/",
    imgsrc: "/media/Team/marko.png",
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
        {team.map((e, i) => (
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
            <Avatar src={e.imgsrc} size="xl" mt="40px" />
            <Text
              mt={"1em"}
              width="95%"
              color={"white"}
              fontFamily="Arial.Bold"
              fontSize="18px"
              fontWeight="900"
            >
              {e.name}
            </Text>
            <Text
              mt={"1em"}
              width="95%"
              color={"white"}
              fontFamily="Arial.Bold"
              fontSize="14px"
              fontWeight="700"
            >
              {e.role}
            </Text>
            <Text
              mt={"1em"}
              width="95%"
              color="#FFFFFF"
              fontFamily="Arial"
              fontSize="12px"
              fontWeight="400"
              align="center"
            >
              {e.desc.slice(0, 200)}
              {e.desc.length > 200 && "..."}
            </Text>
            <Box
              cursor="pointer"
              borderColor="#0FB1F5"
              mt="16px"
              pt="8px"
              pb="8px"
              pl="16px"
              pr="16px"
              borderRadius="32px"
              borderStyle="solid"
              borderWidth="1px"
              alignItems="center"
              justifyContent="center"
              position="absolute"
              bottom="30px"
              onClick={() => window.open(e.link, "_blank")}
            >
              <Text>Linkedin</Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
