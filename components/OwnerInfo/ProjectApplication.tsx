import { Box, Center, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function ProjectApplication() {
  return (
    <Box p="40px" bg="#130A49" borderRadius="10px" 
    mt="30px">
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
          <Text
            fontFamily="Montserrat"
            fontSize="20px"
            fontWeight={700}
          >
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Box h="24px" />
          <Divider color="#FCFCFC33" />
          <Box h="24px" />
          <Text
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight={800}
          >
            Status
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
