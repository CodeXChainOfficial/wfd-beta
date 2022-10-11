import {
  Box,
  Center,
  Divider,
  Flex,
  Input,
  InputGroup,
  Progress,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ImageTransition, InputTransition } from "../ImageTransition";
import { FaRegHeart } from "react-icons/fa";

export default function MilestoneDetail() {
  return (
    <>
      <Box width="500px" bg="rgba(19, 10, 73, 1)" borderRadius="10px">
        <Flex
          p="26px"
          lineHeight="50px"
          direction="row"
          justifyContent={"space-between"}
        >
          <Text
            verticalAlign="middle"
            fontFamily="Montserrat"
            fontSize="24px"
            fontWeight={600}
          >
            Project Name
          </Text>
          <Text
            verticalAlign="middle"
            fontFamily="Montserrat"
            fontSize="14px"
            fontWeight={600}
          >
            On Going
          </Text>
        </Flex>
        <Flex pt="16px" lineHeight="24px" direction="row">
          <Text
            px="26px"
            verticalAlign="middle"
            fontFamily="Montserrat"
            fontSize="12px"
            fontWeight={400}
          >
            Start Date
          </Text>
          <Box w="8px" />
          <Text
            verticalAlign="middle"
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight={700}
          >
            20/11/22
          </Text>
          <Box w="36px" />
          <Text
            verticalAlign="middle"
            fontFamily="Montserrat"
            fontSize="12px"
            fontWeight={400}
          >
            End Date
          </Text>
          <Box w="8px" />
          <Text
            verticalAlign="middle"
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight={700}
          >
            20/11/22
          </Text>
          <Box w="36px" />
          <Text
            verticalAlign="middle"
            fontFamily="Montserrat"
            fontSize="12px"
            fontWeight={400}
          >
            Amount
          </Text>
          <Box w="8px" />
          <Text
            verticalAlign="middle"
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight={700}
          >
            $ 300,00
          </Text>
        </Flex>
        <Text
          px="26px"
          pt="16px"
          verticalAlign="middle"
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight={600}
        >
          Milestone Vote Tally
        </Text>
        <Flex px="26px" lineHeight="26px" direction="row">
          <Progress
            borderRadius="18px"
            colorScheme="purple"
            height="32px"
            my={"12px"}
            value={20}
            width={"100%"}
          />
          <Flex direction="column">
            <Text fontSize="12px" fontWeight={700} color="white" px="8px">
              20%
            </Text>
            <Text
              whiteSpace="nowrap"
              color="#9F9BC3"
              fontSize="12px"
              fontWeight={700}
              px="8px"
              w="full"
            >
              On Progress
            </Text>
          </Flex>
          <Box w="24px" />
          <ImageTransition
            border2="#23A4EC"
            background2="#06142D"
            border1="#06142D"
            background1="#23A4EC"
            border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
            selected={false}
            width="150px"
            height={{ base: "32px", md: "40px", lg: "40px" }}
            rounded={"33px"}
          >
            <Text
              w="100%"
              fontSize={{
                base: "14px",
                sm: "15px",
                md: "15px",
                lg: "15px",
              }}
              textAlign="center"
              fontFamily={"PilatExtended-Bold"}
              fontWeight={"800"}
              color="#FFFFFF"
              _hover={{ color: "#FFFFFF" }}
              transition={"all 1s"}
            >
              Yes
            </Text>
          </ImageTransition>
          <Box w="24px" />
          <ImageTransition
            border2="#23A4EC"
            background2="#06142D"
            border1="#06142D"
            background1="#23A4EC"
            border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
            selected={false}
            width="150px"
            height={{ base: "32px", md: "40px", lg: "40px" }}
            rounded={"33px"}
          >
            <Text
              w="100%"
              fontSize={{
                base: "14px",
                sm: "15px",
                md: "15px",
                lg: "15px",
              }}
              textAlign="center"
              fontFamily={"PilatExtended-Bold"}
              fontWeight={"800"}
              color="#FFFFFF"
              _hover={{ color: "#FFFFFF" }}
              transition={"all 1s"}
            >
              No
            </Text>
          </ImageTransition>
        </Flex>
        <Text
          px="26px"
          mt={"16px"}
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight={400}
          textAlign="justify"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text
          px="26px"
          pt="16px"
          pb="8px"
          fontFamily="Montserrat"
          fontSize="20px"
          fontWeight={800}
        >
          Comments (1)
        </Text>
        <Divider color="#FCFCFC33" />
        <Flex px="26px" pt="12px">
          <Flex pr="16px">
            <Box
              w="48px"
              h="48px"
              bg="rgba(217, 217, 217, 1)"
              borderRadius={9999}
            />
          </Flex>
          <Flex direction="column">
            <Text
              pt="2px"
              fontFamily="Montserrat"
              fontSize="15px"
              fontWeight={800}
            >
              Brigita
            </Text>
            <Text
              pt="4px"
              fontFamily="Montserrat"
              fontSize="14px"
              fontWeight={400}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Text>
            <Flex lineHeight="19px" pt="4px">
              <FaRegHeart />
              <Text
                pl="8px"
                verticalAlign="middle"
                color="#A4A4A4"
                fontFamily="Montserrat"
                fontSize="16px"
                fontWeight={500}
              >
                20
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box mt="16px" p="16px" bg="rgba(11, 7, 33, 1)" borderRadius="8px">
          <InputTransition
            unitid="comment"
            width="100%"
            height="40px"
            rounded="md"
          >
            <InputGroup
              size="sm"
              border="0px"
              style={{
                borderRadius: 8,
              }}
            >
              <Input
                style={{ border: "0", background: "transparent" }}
                type="text"
                h="40px"
                rounded="md"
                placeholder="Write your comment here..."
              />
            </InputGroup>
          </InputTransition>
        </Box>
      </Box>
    </>
  );
}
