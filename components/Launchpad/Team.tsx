import { Avatar, Box, chakra, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const team = [
  {
    name: "Andrea Bello",
    role: "CEO & Co-Founder",
    desc: "He is the person behind the development of the Fan$quad smart contract that was deployed on Col-4 during the Hackathon organized by Terraformlab.",
    link: "https://linkedin.com/in/bello-andrea-380572b4/",
    imgsrc: "/media/Team/wfd-andrea.jpg",
  },
  {
    name: "Ika Afifah",
    role: "CMO and Co-Founder",
    desc: "A dynamic individual who worked at Tencent as an Operation Specialist, in the partnership division. Before Tencent, she was Senior Partnership Manager at Bigo.",
    link: "https://linkedin.com/in/ika-nur-afifah/",
    imgsrc: "/media/Team/wfd-ika.jpg",
  },
  {
    name: "Austin Taylor",
    role: "CCO",
    desc: "Comes from a background in investment and corporate finance. After completing his education he worked as a Business Analyst for Harman International in Seattle.",
    link: "https://linkedin.com/in/austintaylor19/",
    imgsrc: "/media/Team/wfd-austin.jpg",
  },
  {
    name: "Achuth Chandran",
    role: "CFO",
    desc: "Experienced financial professional and consultant. HEC Paris alumnus. ACCA Affiliate. With experience at KPMG, Sancta Capital and Trilogy Enterprises.",
    link: "https://ae.linkedin.com/in/achuth-k-chandran-b17880102",
    imgsrc: "/media/Home/Achuth.png",
  },
  {
    name: "Andrea Bello",
    role: "CEO & Co-Founder",
    desc: "He is the person behind the development of the Fan$quad smart contract that was deployed on Col-4 during the Hackathon organized by Terraformlab.",
    link: "https://linkedin.com/in/bello-andrea-380572b4/",
    imgsrc: "/media/Team/wfd-andrea.jpg",
  },
  {
    name: "Ika Afifah",
    role: "CMO and Co-Founder",
    desc: "A dynamic individual who worked at Tencent as an Operation Specialist, in the partnership division. Before Tencent, she was Senior Partnership Manager at Bigo.",
    link: "https://linkedin.com/in/ika-nur-afifah/",
    imgsrc: "/media/Team/wfd-ika.jpg",
  },
  {
    name: "Austin Taylor",
    role: "CCO",
    desc: "Comes from a background in investment and corporate finance. After completing his education he worked as a Business Analyst for Harman International in Seattle.",
    link: "https://linkedin.com/in/austintaylor19/",
    imgsrc: "/media/Team/wfd-austin.jpg",
  },
  {
    name: "Achuth Chandran",
    role: "CFO",
    desc: "Experienced financial professional and consultant. HEC Paris alumnus. ACCA Affiliate. With experience at KPMG, Sancta Capital and Trilogy Enterprises.",
    link: "https://ae.linkedin.com/in/achuth-k-chandran-b17880102",
    imgsrc: "/media/Home/Achuth.png",
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
      background={"linear-gradient(93.16deg, #000000 2.65%, #000000 87.13%)"}

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
            justifyContent={"center"}
            backgroundColor="#120D3F"
            m={{ base: ".2em", md: ".5em", lg: ".5em" }}
            p={{ base: ".2em", md: ".5em 1em", lg: "1em" }}
            width={{ base: "100%", md: "18em", lg: "13em", xl: "16em" }}
            height={{ base: "24em", md: "30em", lg: "28em" }}
            borderRadius={{ base: "10px", md: "15px", lg: "15px" }}
            
          >
            <Avatar src={e.imgsrc} size="xl" />
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
              fontSize="16px"
              fontWeight="700"
            >
              {e.role}
            </Text>
            <Text
              mt={"1em"}
              width="95%"
              color="#FFFFFF"
              fontFamily="Arial"
              fontSize="16px"
              fontWeight="400"
              align="center"
            >
              {e.desc}
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
