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

export default function RequirementList() {
  return (
    <Box p={5} mb={14}>
      
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"} fontFamily={"PilatExtended-Bold"} color={"#02A4FF"}>
          REQUIREMENTS
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
             
            </Box>
            <VStack align={"start"}>
            <Text fontWeight={500} fontSize="18px" lineHeight="24px" letterSpacing="-2.2%" fontFamily="Poppins-Bold" color="#ADB2DB" textAlign="justify">
            Project must have real-world application and utility in the area of healthcare, the environment, finance, supply chain, etc
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
             
            </Box>
            <VStack align={"start"}>
            <Text fontWeight={500} fontSize="18px" lineHeight="24px" letterSpacing="-2.2%" fontFamily="Poppins-Bold" color="#ADB2DB" textAlign="justify">
            Web2 project looking to adopt and bridge blockchain/Web3 technology
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
            
            </Box>
            <VStack align={"start"}>
            <Text fontWeight={500} fontSize="18px" lineHeight="24px" letterSpacing="-2.2%" fontFamily="Poppins-Bold" color="#ADB2DB" textAlign="justify">
            Web3 Startups
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
             
            </Box>
            <VStack align={"start"}>
            <Text fontWeight={500} fontSize="18px" lineHeight="24px" letterSpacing="-2.2%" fontFamily="Poppins-Bold" color="#ADB2DB" textAlign="justify">
            NFT projects must have a real-world application such as tokenizing real-world assets, profit sharing, etc
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
             
            </Box>
            <VStack align={"start"}>
            <Text fontWeight={500} fontSize="18px" lineHeight="24px" letterSpacing="-2.2%" fontFamily="Poppins-Bold" color="#ADB2DB" textAlign="justify">
                We accept metaverse projects, however, they must have a
                real-world application and a sustainable ecosystem that supports
                long-term community and user growth. Real-world applications
                include the gamification of mental health treatment, DeFi,
                employee training, education, etc
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
              
            </Box>
            <VStack align={"start"}>
            <Text fontWeight={500} fontSize="18px" lineHeight="24px" letterSpacing="-2.2%" fontFamily="Poppins-Bold" color="#ADB2DB" textAlign="justify">
            We DO NOT support Ponzi schemes, multi-level marketing, or pyramid schemes

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
              
            </Box>
            <VStack align={"start"}>
            <Text fontWeight={500} fontSize="18px" lineHeight="24px" letterSpacing="-2.2%" fontFamily="Poppins-Bold" color="#ADB2DB" textAlign="justify">
            Founders are dedicated to the long-term sustainability of their projects

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
              
            </Box>
            <VStack align={"start"}>
            <Text fontWeight={500} fontSize="18px" lineHeight="24px" letterSpacing="-2.2%" fontFamily="Poppins-Bold" color="#ADB2DB" textAlign="justify">
            Founders must follow and complete the full incubation program

              </Text>
            </VStack>
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
