import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

export default function ProjectApplication() {
  return (
    <Box p="40px" bg="#130A49" borderRadius="10px" mt="30px" w="600px">
      <Flex>
        <Flex direction="column">
          <Image alt="star" src="/media/OwnerInfo/star.svg" h="130px" />
          <Center flexDirection="column" mt="24px" bg="rgba(0, 0, 0, 0.6)">
            <Image
              mt="30px"
              alt="selected"
              src="/media/OwnerInfo/rocket.svg"
              h="48px"
            />
            <Text
              pt="8px"
              pb="16px"
              as="span"
              fontFamily="Montserrat"
              fontSize="12px"
              fontWeight={400}
              textAlign="center"
              w="98px"
            >
              Congratulation! <br />
              You’ve been selected by Wefund <br /> <br />
              We will proceed you to Incubation
            </Text>
          </Center>
        </Flex>
        <Flex direction="column" pl="24px">
          <Text fontFamily="Montserrat" fontSize="20px" fontWeight={700}>
            Project Name
          </Text>
          <Text
            mt="8px"
            fontFamily="Montserrat"
            fontSize="14px"
            fontWeight={400}
            textAlign="justify"
            w="350px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Box h="24px" />
          <Divider color="#FCFCFC33" />
          <Box h="24px" />
          <Text fontFamily="Montserrat" fontSize="16px" fontWeight={800}>
            Progress
          </Text>
          <Flex direction={"column"} mt="2" gap="2">
            <Flex>
              <Image
                top="25%"
                left="25%"
                alt="registration icon"
                src="/media/OwnerInfo/document.svg"
                mr={4}
              />
              <Text w="145px">Document</Text>
              <ProgressIcon approved={true} />
              <Text>Approved</Text>
            </Flex>
            <Flex>
              <Image
                top="25%"
                left="25%"
                alt="registration icon"
                src="/media/OwnerInfo/introcall.svg"
                mr={4}
              />
              <Text w="145px">Introduction Calls</Text>
              <ProgressIcon voting={true} />
              <Text>Voting</Text>
            </Flex>
            <Flex>
              <Image
                top="25%"
                left="25%"
                alt="registration icon"
                src="/media/OwnerInfo/discussion.svg"
                mr={4}
              />
              <Text w="145px">Discussion Calls</Text>
              <ProgressIcon rejected={true} />
              <Text>Rejected</Text>
            </Flex>
            <Flex>
              <Image
                top="25%"
                left="25%"
                alt="registration icon"
                src="/media/OwnerInfo/incugoal.svg"
                mr={4}
              />
              <Text w="145px">Incubation Goal</Text>
              <ProgressIcon />
              <Text>Pending</Text>
            </Flex>
          </Flex>

        </Flex>
      </Flex>
    </Box>
  );
}

interface FillProp {
  children?: React.ReactNode;
  approved?: boolean;
  rejected?: boolean;
  voting?: boolean;
}

function ProgressIcon({
  children,
  approved = false,
  rejected = false,
  voting = false,
}: FillProp) {
  if (approved) {
    return (
      <Box position="relative" mr="2" ml="8" pt="1">
        <Image
          w="15px"
          alt="registration icon"
          src="/media/OwnerInfo/checkgreen.svg"
        />
        {children}
      </Box>
    );
  } else if (rejected) {
    return (
      <Box position="relative" mr="2" ml="8" pt="1">
        <Image
          w="15px"
          alt="registration icon"
          src="/media/OwnerInfo/checkred.svg"
        />
        {children}
      </Box>
    );
  } else if (voting) {
    return (
      <Box position="relative" mr="2" ml="8" pt="1">
        <Image
          w="15px"
          alt="registration icon"
          src="/media/OwnerInfo/voting.svg"
        />
        {children}
      </Box>
    );
  } else {
    return (
      <Box position="relative" mr="2" ml="8" pt="1">
        <Image
          w="15px"
          alt="registration icon"
          src="/media/OwnerInfo/hourglass.svg"
        />
        {children}
      </Box>
    );
  }
}
