import {
  Box,
  Button,
  Center,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  chakra,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import LaunchTabs from "./LaunchTabs";
import FundraiseType from "./FundraiseType";

function ProjectItem(props: {
  name?: string;
  status?: string;
  image?: string;
  registration_start?: string;
  platform_raise?: string;
  link?: string;
  index: number;
  selectedIndex?: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}) {
  const router = useRouter();
  const {
    name,
    status,
    image,
    registration_start,
    platform_raise,
    link,
    selectedIndex,
    index,
    setSelected,
  } = props;
  const selected = selectedIndex == index;

  return (
    <Box>
      <Box
        width={{ base: "145px", md: "300px" }}
        bg={
          selected
            ? "linear-gradient(180deg, rgba(0, 151, 199, 0.45) 0%, #2ABFFF 95.52%);"
            : "none"
        }
        borderRadius={"20px"}
        cursor="pointer"
        onClick={() => router.push(link)}
        onMouseMove={() => setSelected(index)}
      >
        <Stack textAlign={"center"} height={"480px"}>
          <Center
            background={
              selected
                ? "rgba(15, 177, 245, 1);"
                : "radial-gradient(50% 50% at 50% 50%, #AF63FA 0%, #19117A 100%);"
            }
            width={{ base: "100px", md: "160px" }}
            height={{ base: "100px", md: "160px" }}
            border={selected ? "5px solid #300FF5" : "5px solid #0FB1F5;"}
            borderRadius={"full"}
            margin={"48px auto"}
          >
            <Image
              borderRadius={"full"}
              boxSize={{ base: "90px", md: "150px" }}
              src={image}
              backgroundColor={"rgba(255, 255, 255, 0.5)"}
            />
          </Center>

          <Text
            minHeight={"50px"}
            color={selected ? "#170E82" : "white"}
            fontSize={{ base: "16px", md: "20px" }}
            fontFamily={"PilatExtended-Regular"}
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
          <Box paddingX={"48px"} paddingY={"0px"}>
            <Box
              borderBottom={"1px"}
              width={"100%"}
              color={selected ? "#430E82" : "white"}
            ></Box>
          </Box>

          <SimpleGrid
            templateColumns={"1fr 40px"}
            padding={"48px"}
            paddingTop={"12px"}
            textColor={selected ? "#170E82" : "white"}
          >
            <Text textAlign={"left"} fontSize={{ base: "12px", md: "16px" }}>
              Registration Start
            </Text>
            <Text fontWeight={"medium"} fontSize={{ base: "12px", md: "16px" }}>
              {registration_start}
            </Text>
            <Text textAlign={"left"} fontSize={{ base: "12px", md: "16px" }}>
              Platform Raise
            </Text>
            <Text fontWeight={"medium"} fontSize={{ base: "12px", md: "16px" }}>
              {platform_raise}
            </Text>
          </SimpleGrid>
        </Stack>
      </Box>
      <Center width={{ base: "145px", md: "300px" }}></Center>
    </Box>
  );
}

export default function ProjectAccelerated() {
  const [selected, setSelected] = useState(0);
  const [launchStage, setLaunchStage] = useState("prelaunch");
  
  return (
    <Box id="Upcoming">
      <Center marginTop={"48px"}>
        <Text
          color="#FFFF"
          fontFamily="PilatExtended-Regular"
          fontSize={{ base: "18px", md: "25px", lg: "30px" }}
          fontWeight={"600"}
        >
          PROJECT <chakra.span color={"#0FB1F5"}>ACCELERATED</chakra.span>
        </Text>
      </Center>
      <Container maxWidth={"container.xl"} marginY={"84px"}>
        <Flex>
          <LaunchTabs
            launchStage={launchStage}
            setLaunchStage={setLaunchStage}
          />
          <Spacer />
          <FundraiseType />
        </Flex>
        <Box
          borderRadius={"16px"}
          maxH={"480px"}
          marginY={"32px"}
          overflowY={"scroll"}
          background="rgba(123, 126, 136, 0.1)"
          css={{
            "&::-webkit-scrollbar": {
              width: "6px",
              backgroundColor: "rgba(2, 164, 255, 1)",
              borderRadius: "6px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "rgba(2, 164, 255, 1)",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#003E61",
              borderRadius: "6px",
            },
          }}
        >
          <SimpleGrid
            minChildWidth={{ base: "140px", md: "300px" }}
            justifyItems={"center"}
          >
            {projects.map((project, i) => (
              <ProjectItem
                {...project}
                index={i}
                selectedIndex={selected}
                setSelected={setSelected}
                key={i}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}

const projects = [
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
