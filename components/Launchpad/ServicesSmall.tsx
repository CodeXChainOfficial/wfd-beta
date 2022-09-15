import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
    IconButton,
  } from "@chakra-ui/react";
  import { CheckIcon } from "@chakra-ui/icons";
  import router from "next/router";
  import {
    FaArrowRight,
    FaExternalLinkAlt,
    FaFileWord,
    FaGlobeAsia,
    FaNetworkWired,
    FaPhone,
  } from "react-icons/fa";
  import { GiAchievement, GiImpactPoint, GiSwordsPower } from "react-icons/gi";
  import { ImageTransition } from "../ImageTransition";
  import { MdImageNotSupported, MdMoneyOff, MdOutlineChecklist, MdRealEstateAgent } from "react-icons/md";
  
  // Replace test data with your own
  const features = [
    {
      id: 1,
      title: "In categories of SDG 2030 with a real-world application",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
    },
  ];
  
  export default function ServiceList() {
    return (
      <Box p={5} mb={14}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"} fontFamily={"PilatExtended-Bold"} color={"#02A4FF"}>
            OUR SERVICES
          </Heading>
        </Stack>
  
        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
            <HStack align={"top"}>
              <Box
                color={" rgba(28, 2, 48, 0.76)"}
                px={2}
                pt={1}
                mr={10}
                w={"50px"}
                h={"50px"}
                background={" #00A3FF"}
                rounded={"10px"}
              >
                <IconButton
                  variant="unstyled"
                  width={{ lg: "14px", base: "12px" }}
                  icon={<FaGlobeAsia size="32px" />}
                />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={400} fontFamily="Poppins">
                  Launchpad Program with fully remote process accross the globe
                </Text>
              </VStack>
            </HStack>
            <HStack align={"top"}>
              <Box
                color={" rgba(28, 2, 48, 0.76)"}
                px={2}
                pt={1}
                mr={10}
                w={"50px"}
                h={"50px"}
                background={" #00A3FF"}
                rounded={"10px"}
              >
                <IconButton
                  variant="unstyled"
                  width={{ lg: "14px", base: "12px" }}
                  icon={<MdMoneyOff size="32px" />}
                />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={400} fontFamily="Poppins">
                  Swap Services that WeFund through partners offer accross multiple chain and tokens
                </Text>
              </VStack>
            </HStack>
            <HStack align={"top"}>
              <Box
                color={" rgba(28, 2, 48, 0.76)"}
                px={2}
                pt={1}
                mr={10}
                w={"50px"}
                h={"50px"}
                background={" #00A3FF"}
                rounded={"10px"}
              >
                <IconButton
                  variant="unstyled"
                  width={{ lg: "14px", base: "12px" }}
                  icon={<FaExternalLinkAlt size="32px" />}
                />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={400} fontFamily="Poppins">
                  Acceleration service for project on incubation that want their development accelerated and reserved for fast paced project ready to go to fundraise soon
                </Text>
              </VStack>
            </HStack>
            <HStack align={"top"}>
              <Box
                color={" rgba(28, 2, 48, 0.76)"}
                px={2}
                pt={1}
                mr={10}
                w={"50px"}
                h={"50px"}
                background={" #00A3FF"}
                rounded={"10px"}
              >
                <IconButton
                  variant="unstyled"
                  width={{ lg: "14px", base: "12px" }}
                  icon={<GiSwordsPower size="32px" />}
                />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={400} fontFamily="Poppins">
                  Incubation service of WeFund that offers well packaged program and partnership network to help project grow from idea to realisation
                </Text>
              </VStack>
            </HStack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
  