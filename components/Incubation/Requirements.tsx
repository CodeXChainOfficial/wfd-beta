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
              <IconButton
                variant="unstyled"
                width={{ lg: "14px", base: "12px" }}
                icon={<FaGlobeAsia size="32px" />}
              />
            </Box>
            <VStack align={"start"}>
              <Text fontWeight={400} fontFamily="Poppins">
                Project should have real world application that is inline with
                what current global needs is, or impactful to a local community.
                Project should also have an effect to influence more adoption of
                blockchain and drive familiarity of it.
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
                We do not support Ponzi schemes with no sustainable goal,
                pyramid schemes, or MLM (multi-level marketing scheme).
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
                Web2 who want to bridge to blockchain / Web3. Project should
                emphasize the utility of blockchain, and increase value of using
                blockchain for the community or usage it will serve in its value
                proposition.
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
                Teams with have good intentions and are dedicated to the
                long-term sustainability of their project.
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
                icon={<GiImpactPoint size="32px" />}
              />
            </Box>
            <VStack align={"start"}>
              <Text fontWeight={400} fontFamily="Poppins">
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
              <IconButton
                variant="unstyled"
                width={{ lg: "14px", base: "12px" }}
                icon={<MdOutlineChecklist size="32px" />}
              />
            </Box>
            <VStack align={"start"}>
              <Text fontWeight={400} fontFamily="Poppins">
                Teams with commitment to incubation journey that has been laid
                out and commitment to complete goals within it and milestones
                after a project ascend into fundraise phase within WeFund
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
                icon={<MdImageNotSupported size="32px" />}
              />
            </Box>
            <VStack align={"start"}>
              <Text fontWeight={400} fontFamily="Poppins">
                Can not be an NFT collection without utility. What does it mean?
                Only NFT with real-world applications can accept, such as NFT
                for tokenizing real-world assets.
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
                icon={<MdRealEstateAgent size="32px" />}
              />
            </Box>
            <VStack align={"start"}>
              <Text fontWeight={400} fontFamily="Poppins">
                We accept NFT projects, however, they must have a real-world
                utility. Real-world utilities include asset ownership,
                sustainable profit sharing, etc
              </Text>
            </VStack>
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
