import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  Image,
} from "@chakra-ui/react";

const Item = ({ index }: { index: number }) => {
  return (
    <Flex key={index} gap="30px">
      <Flex
        minW="70px"
        maxW="70px"
        minH="70px"
        maxH="70px"
        bg="#00A3FF"
        justify="center"
        align="center"
        p="1"
        borderRadius="10px"
      >
        <Image src={Datas[index].icon} w="27px" />
      </Flex>
      <Text
        fontFamily="Calibri"
        fontSize={{ base: "14px", md: "21px" }}
        fontWeight="500"
        lineHeight="36px"
        letterSpacing="-0.022em"
        textAlign="justify"
        color="#ADB2DB"
      >
        {Datas[index].content}
      </Text>
    </Flex>
  );
};
export default function RequirementList() {
  return (
    <Box p={5} mb={14}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Text
          fontSize={{ base: "24px", md: "36px" }}
          lineHeight="150%"
          fontFamily={"PilatExtended-Bold"}
          color={"#02A4FF"}
          fontWeight="900"
        >
          REQUIREMENTS
        </Text>
      </Stack>

      <Flex
        w="100%"
        gap={{ base: "0px", md: "160px" }}
        mt="50px"
        px={{ base: "10px", md: "120px" }}
        direction={{ base: "column", md: "row" }}
        fontSize={{ base: "14px", md: "18px" }}
      >
        <Flex w="100%" direction="column" gap={{ base: "30px", md: "50px" }}>
          {[0, 1, 2, 3].map((value, index) => (
            <Item index={value} key={index} />
          ))}
        </Flex>
        <Flex w="100%" direction="column" gap={{ base: "30px", md: "50px" }}>
          {[4, 5, 6, 7].map((value, index) => (
            <Item index={value} key={index} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

const Datas = [
  {
    icon: "/media/Incubation/1.png",
    content:
      "Project must have real-world application and utility in the area of healthcare, the environment, finance, supply chain, etc",
  },
  {
    icon: "/media/Incubation/2.png",
    content:
      "Web2 project looking to adopt and bridge blockchain/Web3 technology    ",
  },
  {
    icon: "/media/Incubation/3.png",
    content: "Web3 startup ",
  },
  {
    icon: "/media/Incubation/4.png",
    content:
      "We accept metaverse projects, however, they must have a real-world application and a sustainable ecosystem that supports long-term community and user growth. Real-world applications include the gamification of mental health treatment, DeFi, employee training, education, etc",
  },
  {
    icon: "/media/Incubation/5.png",
    content:
      "NFT projects must have a real-world application such as tokenizing real-world assets, profit sharing, etc ",
  },
  {
    icon: "/media/Incubation/6.png",
    content:
      "We DO NOT support Ponzi schemes, multi-level marketing, or pyramid schemes",
  },
  {
    icon: "/media/Incubation/7.png",
    content:
      "Founders are dedicated to the long-term sustainability of their projects      ",
  },
  {
    icon: "/media/Incubation/8.png",
    content: "Founders must follow and complete the full incubation program ",
  },
];
