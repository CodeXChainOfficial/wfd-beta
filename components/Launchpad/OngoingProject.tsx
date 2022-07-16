import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
  chakra,
} from "@chakra-ui/react";
import React, { useState } from "react";

const projects = [
  {
    image: "/media/partners/lynx-dark.png",
    name: "Lynxverse",
    status: "Coming Soon",
    registration_start: "TBA",
    platform_raise: "TBA",
    link: "",
  },
  {
    image: "/media/partners/Kosu.png",
    name: "Kosu",
    status: "Coming Soon",
    registration_start: "TBA",
    platform_raise: "TBA",
    link: "",
  },
  {
    image: "/media/partners/Greenprotocol.png",
    name: "Green Protocol",
    status: "Coming Soon",
    registration_start: "TBA",
    platform_raise: "TBA",
    link: "",
  },
  {
    image: "/media/Launchpad/secret-partner.png",
    name: "Top Secret",
    status: "Coming Soon",
    registration_start: "TBA",
    platform_raise: "TBA",
    link: "",
  },
  {
    image: "/media/Launchpad/secret-partner.png",
    name: "Top Secret",
    status: "Coming Soon",
    registration_start: "TBA",
    platform_raise: "TBA",
    link: "",
  },
  {
    image: "/media/Launchpad/secret-partner.png",
    name: "Top Secret",
    status: "Coming Soon",
    registration_start: "TBA",
    platform_raise: "TBA",
    link: "",
  },
  {
    image: "/media/Launchpad/secret-partner.png",
    name: "Top Secret",
    status: "Coming Soon",
    registration_start: "TBA",
    platform_raise: "TBA",
    link: "",
  },
  {
    image: "/media/Launchpad/secret-partner.png",
    name: "Top Secret",
    status: "Coming Soon",
    registration_start: "TBA",
    platform_raise: "TBA",
    link: "",
  },
];

function ProjectItem(props: {
  name?: string;
  status?: string;
  image?: string;
  registration_start?: string;
  platform_raise?: string;
  link?: string;
  selected?: boolean;
}) {
  const { name, status, image, registration_start, platform_raise, link } =
    props;
  const { selected = false } = props;

  return (
    <Box>
      <Box
        width={{ base: "145px", md: "300px" }}
        background={
          selected
            ? "linear-gradient(180deg, rgba(38, 138, 255, 0.63) 0%, #2ABFFF 55.52%);"
            : "none"
        }
        borderRadius={"20px"}
      >
        <Stack textAlign={"center"} height={"400px"}>
          <Center
            background={
              selected
                ? "radial-gradient(50% 50% at 50% 50%, #AF63FA 0%, #19117A 100%);"
                : "radial-gradient(50% 50% at 50% 50%, #63CDFA 0%, #0DB7FF 100%);"
            }
            width={{ base: "100px", md: "160px" }}
            height={{ base: "100px", md: "160px" }}
            borderRadius={"full"}
            margin={"24px auto"}
          >
            <Image
              borderRadius={"full"}
              boxSize={{ base: "80px", md: "120px" }}
              src={image}
              backgroundColor={"white"}
            />
          </Center>

          <Text
            minHeight={"50px"}
            color={selected ? "#170E82" : "white"}
            fontSize={{ base: "16px", md: "20px" }}
            fontFamily={"PilatExtended-Bold"}
            fontWeight={500}
          >
            {name}
          </Text>
          <Text
            color={selected ? "#170E82" : "white"}
            fontSize={{ base: "14px", md: "16px" }}
            fontFamily={"PilatExtended-Regular"}
            fontWeight={500}
          >
            {status}
          </Text>
          <Box paddingX={"24px"} paddingY={"0px"}>
            <Box
              borderBottom={"2px"}
              width={"100%"}
              color={selected ? "#430E82" : "white"}
            ></Box>
          </Box>

          <SimpleGrid
            templateColumns={"1fr 40px"}
            padding={"24px"}
            paddingTop={"12px"}
            textColor={selected ? "#170E82" : "white"}
          >
            <Text textAlign={"left"} fontSize={{ base: "12px", md: "16px" }}>
              Registration Start
            </Text>
            <Text fontWeight={"bold"} fontSize={{ base: "12px", md: "16px" }}>
              {registration_start}
            </Text>
            <Text textAlign={"left"} fontSize={{ base: "12px", md: "16px" }}>
              Platform Raise
            </Text>
            <Text fontWeight={"bold"} fontSize={{ base: "12px", md: "16px" }}>
              {platform_raise}
            </Text>
          </SimpleGrid>
        </Stack>
      </Box>
      <Center width={{ base: "145px", md: "300px" }}>
        <Button
          width={"80%"}
          margin={"12px auto"}
          background={selected ? "#3BC5FF" : "#0084FF"}
          textColor={selected ? "#430E82" : "white"}
        >
          RESEARCH
        </Button>
      </Center>
    </Box>
  );
}

export default function OngoingProject() {
  const [selected, setSelected] = useState(0);
  return (
    <Box id="Ongoing">
      <Center marginTop={"48px"}>
        <Text
          color="#63CDFA"
          fontFamily="PilatExtended-Bold"
          fontSize={{ base: "18px", md: "25px", lg: "30px" }}
        >
          ONGOING <chakra.span color={"white"}>PROJECT</chakra.span>
        </Text>
      </Center>
      <Container maxWidth={"container.xl"} marginY={"84px"}>
        <Box
          borderRadius={"16px"}
          maxH={"480px"}
          marginY={"32px"}
          overflowY={"scroll"}
          css={{
            "&::-webkit-scrollbar": {
              width: "6px",
              backgroundColor: "#6ACEF5",
              borderRadius: "6px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#45108AA1",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#45108AA1",
              borderRadius: "6px",
            },
          }}
        >
          <SimpleGrid
            minChildWidth={{ base: "140px", md: "300px" }}
            justifyItems={"center"}
          >
            {projects.map((project, i) => (
              <ProjectItem {...project} selected={selected === i} key={i} />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
