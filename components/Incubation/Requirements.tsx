import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Image,
} from "@chakra-ui/react";

const Item = ({ index }: { index: number }) => {
  return (
    <Flex key={index} mb="50px" gap="30px">
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
        fontFamily="Poppins"
        fontSize={{ base: "12px", md: "24px" }}
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
        <Heading
          fontSize={"3xl"}
          fontFamily={"PilatExtended-Bold"}
          color={"#02A4FF"}
        >
          REQUIREMENTS
        </Heading>
      </Stack>

      <Flex
        w="100%"
        gap={{ base: "0px", md: "160px" }}
        mt="50px"
        px={{ base: "10px", md: "120px" }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex w="100%" direction="column" justify="space-between">
          {[0, 1, 2, 3].map((_, index) => (
            <Item index={index} key={index} />
          ))}
        </Flex>
        <Flex w="100%" direction="column" justify="space-between">
          {[4, 5, 6, 7, 8].map((_, index) => (
            <Item index={index} key={index} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

const Datas = [
  {
    icon: "/media/Incubation/1.png",
    content: "In categories of SDG 2030 with a real-world application",
  },
  {
    icon: "/media/Incubation/2.png",
    content: "Web2 who want to bridge to blockchain / Web3",
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
      "We accept NFT projects, however, they must have a real-world utility. Real-world utilities include asset ownership, sustainable profit sharing, etc ",
  },
  {
    icon: "/media/Incubation/6.png",
    content:
      "Can not be an NFT collection without utility. What does it mean? Only NFT with real-world applications can accept, such as NFT for tokenizing real-world assets.",
  },
  {
    icon: "/media/Incubation/7.png",
    content:
      "We do not support Ponzi schemes with no sustainable goal, pyramid schemes, or MLM (multi-level marketing scheme)",
  },
  {
    icon: "/media/Incubation/8.png",
    content:
      "Founders who are eligible have good intentions and are dedicated to the long-term sustainability of their project.",
  },
  {
    icon: "/media/Incubation/9.png",
    content:
      "The founders must follow and complete the entire incubation process.",
  },
];
