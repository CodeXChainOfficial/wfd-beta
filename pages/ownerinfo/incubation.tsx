import PageLayout from "../../components/PageLayout";
import Footer from "../../components/Footer";
import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Center,
  chakra,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { IoWalletOutline } from "react-icons/io5";
import { InputTransition } from "../../components/ImageTransition";
import { CheckIcon } from "@chakra-ui/icons";

export default function index() {
  return (
    <PageLayout
      title=""
      subTitle1="Welcome Back to Incubation"
      subTitle2=""
      subTitle3="&nbsp;Project Owner"
    >
      <Box width={"100%"}>
        <Box color={"white"} pb={"5%"} pt="64px">
          <Stack
            color="white"
            alignContent={"start"}
            justifyContent="center"
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
            }}
          >
            <Center w={{ base: "100%", sm: "100%", md: "100%", lg: "450px" }}>
              <VStack
                h="full"
                spacing={4}
                marginBottom={6}
                align={{
                  base: "center",
                  sm: "center",
                  md: "center",
                  lg: "unset",
                }}
                mx={[0, 0, 0]}
                w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
              >
                <Box
                  p="24px"
                  _hover={{ shadow: "lg" }}
                  position="relative"
                  rounded="md"
                >
                  <Flex>
                    <Box
                      bg="#120D30"
                      w={"50px"}
                      h={"50px"}
                      justifyContent={"center"}
                      rounded={"md"}
                    >
                      <Center w={"50px"} h={"50px"}>
                        <IoWalletOutline size={40} />
                      </Center>
                    </Box>
                    <Flex
                      direction="column"
                      alignContent="start"
                      justifyContent="start"
                      pl={3}
                    >
                      <Text
                        fontFamily="Montserrat"
                        fontSize="24px"
                        color="white"
                        w="full"
                      >
                        WFD Wallet
                      </Text>
                      <Text
                        fontSize="sm"
                        color={"rgba(15, 177, 245, 1)"}
                        w={"full"}
                      >
                        wfdvs1r.....5jzx
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex mt="16px">
                    <Text
                      lineHeight="72px"
                      fontFamily="Pilat Extended"
                      fontSize="45px"
                      fontWeight="950"
                      w={"full"}
                    >
                      890.09778
                    </Text>
                    <Text
                      pl="8px"
                      mt="24px"
                      fontFamily="Pilat Extended"
                      fontSize="20px"
                      fontWeight="950"
                      w={"full"}
                    >
                      $
                    </Text>
                  </Flex>
                  <Flex justify="space-between">
                    <Flex>
                      <Image
                        alt="wefund"
                        src="/media/wf.svg"
                        mt="2px"
                        h="12px"
                      />
                      <Text
                        color={"rgba(15, 177, 245, 1)"}
                        ml="8px"
                        fontFamily="Montserrat"
                        fontSize="14px"
                        fontWeight="600"
                        w={"full"}
                      >
                        0.2498488
                      </Text>
                    </Flex>
                    <Flex>
                      <Text
                        color={"rgba(15, 177, 245, 1)"}
                        ml="8px"
                        fontFamily="Montserrat"
                        fontSize="14px"
                        fontWeight="600"
                        w={"full"}
                      >
                        24H : +5.74
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
                <SimpleGrid columns={2} spacing={6} p="24px" w="450px">
                  <Box bg="#120D30" borderRadius="20px">
                    <Flex p="24px">
                      <Image
                        alt="project pool"
                        src="/media/OwnerInfo/pool.svg"
                        h="64px"
                      />
                      <Flex direction="column" ml="16px">
                        <Text
                          color={"rgba(15, 177, 245, 1)"}
                          fontFamily="Montserrat"
                          fontSize="14px"
                          fontWeight="600"
                          w={"full"}
                        >
                          Project Pool
                        </Text>
                        <Text
                          mt="14px"
                          fontFamily="Pilat Extended"
                          fontSize="20px"
                          fontWeight="950"
                          w={"full"}
                        >
                          XXX
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                  <Box bg="#120D30" borderRadius="20px">
                    <Flex p="24px">
                      <Image
                        alt="voting power"
                        src="/media/OwnerInfo/voting_power.svg"
                        h="64px"
                      />
                      <Flex direction="column" ml="16px">
                        <Text
                          color={"rgba(15, 177, 245, 1)"}
                          fontFamily="Montserrat"
                          fontSize="14px"
                          fontWeight="600"
                          w={"full"}
                        >
                          Voting Power
                        </Text>
                        <Text
                          mt="14px"
                          fontFamily="Pilat Extended"
                          fontSize="20px"
                          fontWeight="950"
                          w={"full"}
                        >
                          XXX
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                  <Box bg="#120D30" borderRadius="20px">
                    <Flex p="24px">
                      <Image
                        alt="backer"
                        src="/media/OwnerInfo/backer.svg"
                        h="64px"
                      />
                      <Flex direction="column" ml="16px">
                        <Text
                          color={"rgba(15, 177, 245, 1)"}
                          fontFamily="Montserrat"
                          fontSize="14px"
                          fontWeight="600"
                          w={"full"}
                        >
                          Backer
                        </Text>
                        <Text
                          mt="14px"
                          fontFamily="Pilat Extended"
                          fontSize="20px"
                          fontWeight="950"
                          w={"full"}
                        >
                          XXX
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                  <Box bg="#120D30" borderRadius="20px">
                    <Flex p="24px">
                      <Box
                        height="64px"
                        width="46px"
                        bg="rgba(22.31, 115.39, 255, 0.42)"
                        borderRadius="10"
                        borderWidth="2"
                        borderStyle="solid"
                        borderColor="rgba(105.19, 120.17, 255, 0.51)"
                      />
                      <Flex direction="column" ml="16px">
                        <Text
                          color={"rgba(15, 177, 245, 1)"}
                          fontFamily="Montserrat"
                          fontSize="14px"
                          fontWeight="600"
                          w={"full"}
                        >
                          Crypto Address
                        </Text>
                        <Text
                          mt="14px"
                          fontFamily="Pilat Extended"
                          fontSize="20px"
                          fontWeight="950"
                          w={"full"}
                        >
                          XXX
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                </SimpleGrid>
                <Link href="/" target="_blank">
                  <Box px="24px">
                    <Button
                      mt="24px"
                      mb={{ base: "20px", md: "5px" }}
                      w="full"
                      h="76px"
                      bg={
                        "linear-gradient(180deg, rgba(0, 193, 255, 0.1) 0%, rgba(0, 193, 255, 0.1) 100%)"
                      }
                      border="1.5px solid #00A3FF"
                      rounded="33px"
                    >
                      <Text
                        fontFamily={"Gilroy"}
                        fontWeight="800"
                        fontSize="20px"
                      >
                        Project Detail
                      </Text>
                      <Image ml="8px" src="/media/ArrowRight.png" />
                    </Button>
                  </Box>
                </Link>
              </VStack>
            </Center>
            <Flex
              align={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "flex-start",
              }}
              direction="column"
              p="24px"
            >
              <Text fontFamily={"Montserrat"} fontWeight="800" fontSize="20px">
                Project Registration Status
              </Text>
              <Flex mt="36px">
                <Flex direction="column">
                  <BoxContainer filled={true}>
                    <Image
                      position="absolute"
                      top="25%"
                      left="25%"
                      alt="registration icon"
                      src="/media/OwnerInfo/registration_filled.svg"
                    />
                  </BoxContainer>
                  <Center mt="20px">
                    <Text
                      color={"rgba(15, 177, 245, 1)"}
                      fontFamily={"Montserrat"}
                      fontWeight="600"
                      fontSize="16px"
                    >
                      Registration
                    </Text>
                  </Center>
                </Flex>
                <Center h="82px">
                  <Dash filled={true} />
                </Center>
                <Flex direction="column">
                  <BoxContainer>
                    <Image
                      position="absolute"
                      top="25%"
                      left="25%"
                      alt="selection icon"
                      src="/media/OwnerInfo/selection.svg"
                    />
                  </BoxContainer>
                  <Center mt="20px">
                    <Text
                      color={"rgba(15, 177, 245, 1)"}
                      fontFamily={"Montserrat"}
                      fontWeight="600"
                      fontSize="16px"
                    >
                      Selection
                    </Text>
                  </Center>
                </Flex>
                <Center h="82px">
                  <Dash />
                </Center>
                <Flex direction="column">
                  <BoxContainer>
                    <Image
                      position="absolute"
                      top="25%"
                      left="25%"
                      alt="goal icon"
                      src="/media/OwnerInfo/goal.svg"
                    />
                  </BoxContainer>
                  <Center mt="20px">
                    <Text
                      color={"rgba(15, 177, 245, 1)"}
                      fontFamily={"Montserrat"}
                      fontWeight="600"
                      fontSize="16px"
                    >
                      Set Goal
                    </Text>
                  </Center>
                </Flex>
                <Center h="82px">
                  <Dash />
                </Center>
                <Flex direction="column">
                  <BoxContainer>
                    <Image
                      position="absolute"
                      top="25%"
                      left="25%"
                      alt="publish icon"
                      src="/media/OwnerInfo/publish.svg"
                    />
                  </BoxContainer>
                  <Center mt="20px">
                    <Text
                      color={"rgba(15, 177, 245, 1)"}
                      fontFamily={"Montserrat"}
                      fontWeight="600"
                      fontSize="16px"
                    >
                      Approved
                    </Text>
                  </Center>
                  <Center>
                    <Text
                      color={"rgba(15, 177, 245, 1)"}
                      fontFamily={"Montserrat"}
                      fontWeight="600"
                      fontSize="16px"
                    >
                      Publish
                    </Text>
                  </Center>
                </Flex>
              </Flex>
              <Text
                mt="16px"
                fontFamily={"Montserrat"}
                fontWeight="800"
                fontSize="20px"
              >
                Project Owner Incubation Goal
              </Text>
              <Flex mt="26px">
                <Box bg="rgba(18, 13, 48, 1)" borderRadius="10px" w="650px">
                  <Flex direction="column" px="64px" py="16px">
                    <Box flex="1" textAlign="left">
                      <Box p={6}>
                        <Stack
                          direction={{
                            base: "column",
                            md: "row",
                            lg: "row",
                          }}
                          justify={"center"}
                          w={"100%"}
                        >
                          <Flex justify={"center"}></Flex>
                          <Stack
                            direction={"row"}
                            justify={"center"}
                            spacing={{
                              base: 2,
                              sm: 2,
                              md: 8,
                              lg: 8,
                            }}
                          >
                            <Stack spacing={0} align={"left"} w="280px" pl="12">
                              <Text
                                fontSize={"16px"}
                                fontWeight={600}
                                color={"gray.500"}
                              >
                                Goal
                              </Text>
                            </Stack>
                            <Stack spacing={0} align={"left"} w="145px" pl="4">
                              <Text
                                fontSize={"16px"}
                                fontWeight={600}
                                color={"gray.500"}
                              >
                                Progress
                              </Text>
                            </Stack>
                            <Stack spacing={0} align={"left"} w="145px" pl="4">
                              <Text
                                fontSize={"16px"}
                                fontWeight={600}
                                color={"gray.500"}
                              >
                                Status
                              </Text>
                            </Stack>
                          </Stack>
                        </Stack>
                      </Box>
                    </Box>
                    {[...Array(2)].map((_, i) => (
                      <VStack key={i} color="white" pt={"3em"} w={"100%"}>
                        <Accordion allowToggle>
                          <AccordionItem
                            bg="#120D30"
                            rounded={"lg"}
                            border="0px"
                            borderColor="gray.200"
                            w={"100%"}
                          >
                            <h2>
                              <AccordionButton>
                                <Box flex="1" textAlign="left">
                                  <Box p={6}>
                                    <Stack
                                      direction={{
                                        base: "column",
                                        md: "row",
                                        lg: "row",
                                      }}
                                      justify={"center"}
                                      w={"100%"}
                                    >
                                      <Flex justify={"center"}></Flex>
                                      <Stack
                                        direction={"row"}
                                        justify={"center"}
                                      >
                                        <Stack
                                          spacing={0}
                                          align={"left"}
                                          w="240px"
                                          pl="4"
                                        >
                                          <Text
                                            fontSize={"16px"}
                                            fontWeight={600}
                                            color={"gray.500"}
                                          >
                                            Goal
                                          </Text>
                                        </Stack>
                                        <Stack
                                          spacing={0}
                                          align={"left"}
                                          w="130px"
                                          pl="4"
                                        >
                                          <Text
                                            fontSize={"16px"}
                                            fontWeight={600}
                                            color={"gray.500"}
                                          >
                                            Done
                                          </Text>
                                        </Stack>
                                        <Stack
                                          spacing={0}
                                          align={"left"}
                                          direction="row"
                                          w="130px"
                                          pl="4"
                                        >
                                          <Box
                                            width={{ base: "18px", md: "20px" }}
                                            height={{
                                              base: "18px",
                                              md: "20px",
                                            }}
                                            style={{
                                              marginRight: "5px",
                                              paddingTop: "1px",
                                              paddingLeft: "2px",
                                              border: "3px solid #3BE489",
                                              backgroundColor: "#3BE489",
                                              borderRadius: "50%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <CheckIcon
                                              color="#250E3F"
                                              w={{ base: 2, md: 3 }}
                                              h={{ base: 2, md: 3 }}
                                              marginBottom={{
                                                base: "30px",
                                                md: "20px",
                                              }}
                                            />
                                          </Box>
                                          <Text
                                            fontSize={"16px"}
                                            fontWeight={600}
                                            color={"gray.500"}
                                          >
                                            Passed
                                          </Text>
                                        </Stack>
                                      </Stack>
                                    </Stack>
                                  </Box>
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                              <Flex
                                gap={{
                                  base: 2,
                                  sm: 2,
                                  md: 8,
                                  lg: 8,
                                }}
                                background="rgba(0, 0, 0, 0.5)"
                              >
                                <Stack
                                  direction={"row"}
                                  align={"left"}
                                  w="240px"
                                  pl="4"
                                  bg="rgba(0, 0, 0, 0.33)"
                                  rounded="md"
                                >
                                  <Text
                                    fontSize={"14px"}
                                    fontWeight={200}
                                    color="white"
                                  >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                  </Text>
                                </Stack>
                                <Stack>
                                  <Flex
                                    direction={{
                                      base: "column",
                                      sm: "row",
                                      lg: "row",
                                    }}
                                    justify={"center"}
                                    background="rgba(0, 0, 0, 0.25)"
                                    height={"25px"}
                                    rounded="md"
                                    pt="2"
                                    align={"center"}
                                    w="130px"
                                  >
                                    <Text
                                      fontSize={{
                                        base: "12px",
                                        sm: "14px",
                                        lg: "16px",
                                      }}
                                      fontWeight={200}
                                      color="white"
                                      alignContent={"center"}
                                    >
                                      Started
                                    </Text>
                                  </Flex>
                                  <Flex
                                    direction={{
                                      base: "column",
                                      sm: "row",
                                      lg: "row",
                                    }}
                                    justify={"center"}
                                    background="rgba(0, 0, 0, 0.25)"
                                    height={"25px"}
                                    rounded="md"
                                    pt="2"
                                    align={"center"}
                                    w="130px"
                                  >
                                    <Text
                                      fontSize={{
                                        base: "12px",
                                        sm: "14px",
                                        lg: "16px",
                                      }}
                                      fontWeight={200}
                                      color="white"
                                      alignContent={"center"}
                                    >
                                      On Progress
                                    </Text>
                                  </Flex>
                                  <Flex
                                    direction={{
                                      base: "column",
                                      sm: "row",
                                      lg: "row",
                                    }}
                                    background="#4E0588"
                                    justify={"left"}
                                    height={"25px"}
                                    rounded="md"
                                    py="2"
                                    pl="2"
                                    align={"center"}
                                    w="130px"
                                  >
                                    <Text
                                      fontSize={{
                                        base: "12px",
                                        sm: "14px",
                                        lg: "16px",
                                      }}
                                      fontWeight={200}
                                      color="white"
                                      alignContent={"center"}
                                    >
                                      Done
                                    </Text>
                                  </Flex>
                                  <Flex
                                    direction={{
                                      base: "column",
                                      sm: "row",
                                      lg: "row",
                                    }}
                                    justify={"center"}
                                    background="rgba(0, 0, 0, 0.25)"
                                    height={"25px"}
                                    rounded="md"
                                    pt="2"
                                    align={"left"}
                                    w="130px"
                                  >
                                    <Text
                                      fontSize={{
                                        base: "12px",
                                        sm: "14px",
                                        lg: "16px",
                                      }}
                                      fontWeight={200}
                                      color="white"
                                      alignContent={"center"}
                                    >
                                      Newly Added
                                    </Text>
                                  </Flex>
                                </Stack>

                                <Stack>
                                  <Flex
                                    direction={{
                                      base: "column",
                                      sm: "column",
                                      lg: "column",
                                    }}
                                    rounded="md"
                                    justify={"center"}
                                    background="rgba(0, 0, 0, 0.25)"
                                    pt="16px"
                                    spacing={0}
                                    align={"left"}
                                    w="130px"
                                    pl="4"
                                  >
                                    <Text
                                      fontSize={{
                                        base: "12px",
                                        sm: "14px",
                                        lg: "16px",
                                      }}
                                      fontWeight={600}
                                      color="white"
                                      width={{
                                        base: "8px",
                                        sm: "100px",
                                        lg: "300px",
                                      }}
                                    >
                                      4{" "}
                                      <chakra.span fontWeight={200}>
                                        {" "}
                                        Yes
                                      </chakra.span>
                                    </Text>
                                    <Text
                                      fontSize={{
                                        base: "12px",
                                        sm: "14px",
                                        lg: "16px",
                                      }}
                                      fontWeight={600}
                                      color="white"
                                      width={{
                                        base: "8px",
                                        sm: "100px",
                                        lg: "300px",
                                      }}
                                    >
                                      4{" "}
                                      <chakra.span fontWeight={200}>
                                        {" "}
                                        Yes
                                      </chakra.span>
                                    </Text>
                                  </Flex>
                                </Stack>
                              </Flex>
                            </AccordionPanel>
                          </AccordionItem>
                        </Accordion>
                      </VStack>
                    ))}
                  </Flex>
                </Box>
              </Flex>
              <Text
                mt="16px"
                fontFamily={"Montserrat"}
                fontWeight="800"
                fontSize="20px"
              >
                Set Fundraising Milestones
              </Text>
              <Flex mt="26px">
                <Box bg="rgba(18, 13, 48, 1)" borderRadius="10px" w="650px">
                  <Flex direction="column" px="64px" py="16px">
                    <Flex>
                      <Center>
                        <Text
                          fontFamily={"Montserrat"}
                          fontWeight="600"
                          fontSize="16px"
                          whiteSpace="nowrap"
                        >
                          Milestone Name
                        </Text>
                      </Center>
                      <InputGroup
                        ml="32px"
                        style={{ background: "rgba(0, 0, 0, 0.25)" }}
                        size="sm"
                        border="0px"
                      >
                        <Input
                          style={{
                            border: " 1.5px solid rgba(255, 255, 255, 0.2)",
                            background: "transparent",
                          }}
                          type="text"
                          h="42px"
                          rounded="md"
                          placeholder="Type Name"
                        />
                      </InputGroup>
                    </Flex>
                    <Flex justifyContent="space-between" w="full" mt="24px">
                      <Flex direction="column" w="50%">
                        <Text
                          fontFamily={"Montserrat"}
                          fontWeight="600"
                          fontSize="16px"
                          whiteSpace="nowrap"
                        >
                          Start Date
                        </Text>
                        <Box mt="16px" w="full">
                          <InputTransition height="55px" rounded="md">
                            <InputGroup
                              size="xs"
                              style={{ background: "rgba(0, 0, 0, 0.25)" }}
                            >
                              <InputLeftElement
                                pointerEvents="none"
                                fontSize="1.2em"
                              />
                              <Input
                                style={{
                                  background: "rgba(0, 0, 0, 0.25)",
                                  border:
                                    " 1.5px solid rgba(255, 255, 255, 0.2)",
                                }}
                                type="date"
                                h="55px"
                                focusBorderColor="purple.800"
                                rounded="md"
                              />
                            </InputGroup>
                          </InputTransition>
                        </Box>
                      </Flex>
                      <Flex direction="column" ml="48px" w="50%">
                        <Text
                          fontFamily={"Montserrat"}
                          fontWeight="600"
                          fontSize="16px"
                          whiteSpace="nowrap"
                        >
                          End Date
                        </Text>
                        <Box mt="16px" w="full">
                          <InputTransition height="55px" rounded="md">
                            <InputGroup
                              size="xs"
                              style={{ background: "rgba(0, 0, 0, 0.25)" }}
                            >
                              <InputLeftElement
                                pointerEvents="none"
                                fontSize="1.2em"
                              />
                              <Input
                                style={{
                                  background: "rgba(0, 0, 0, 0.25)",
                                  border:
                                    " 1.5px solid rgba(255, 255, 255, 0.2)",
                                }}
                                type="date"
                                h="55px"
                                focusBorderColor="purple.800"
                                rounded="md"
                              />
                            </InputGroup>
                          </InputTransition>
                        </Box>
                      </Flex>
                    </Flex>
                    <Flex mt="24px">
                      <Center>
                        <Text
                          fontFamily={"Montserrat"}
                          fontWeight="600"
                          fontSize="16px"
                          whiteSpace="nowrap"
                        >
                          Milestone Details
                        </Text>
                      </Center>
                      <InputGroup
                        ml="32px"
                        style={{ background: "rgba(0, 0, 0, 0.25)" }}
                        size="sm"
                        border="0px"
                      >
                        <Textarea
                          style={{
                            border: " 1.5px solid rgba(255, 255, 255, 0.2)",
                            background: "transparent",
                          }}
                          h="42px"
                          height="110px"
                          rounded="md"
                          placeholder="Details of Goal"
                        />
                      </InputGroup>
                    </Flex>
                    <Flex mt="24px">
                      <Center>
                        <Text
                          fontFamily={"Montserrat"}
                          fontWeight="600"
                          fontSize="16px"
                          whiteSpace="nowrap"
                        >
                          Milestone Amount
                        </Text>
                      </Center>
                      <InputGroup
                        ml="32px"
                        style={{ background: "rgba(0, 0, 0, 0.25)" }}
                        size="sm"
                        border="0px"
                      >
                        <Input
                          style={{
                            border: " 1.5px solid rgba(255, 255, 255, 0.2)",
                            background: "transparent",
                          }}
                          type="number"
                          h="42px"
                          rounded="md"
                          placeholder="0"
                        />
                      </InputGroup>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
              <Flex
                w="full"
                justifyContent={{
                  base: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-end",
                }}
              >
                <Box px="24px">
                  <Button
                    mt="24px"
                    mb={{ base: "20px", md: "5px" }}
                    w="120px"
                    h="50px"
                    bg={
                      "linear-gradient(180deg, rgba(0, 193, 255, 0.1) 0%, rgba(0, 193, 255, 0.1) 100%)"
                    }
                    border="1.5px solid #00A3FF"
                    rounded="33px"
                  >
                    <Text
                      fontFamily={"Gilroy"}
                      fontWeight="800"
                      fontSize="20px"
                    >
                      Add +
                    </Text>
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Stack>
        </Box>
      </Box>
      <Footer />
    </PageLayout>
  );
}

interface FillProp {
  children?: React.ReactNode;
  filled?: boolean;
}

function BoxContainer({ children, filled = false }: FillProp) {
  if (filled) {
    return (
      <Box
        position="relative"
        width="82px"
        height="82px"
        bg="rgba(66, 232, 224, 1)"
        borderRadius="20px"
        borderStyle="solid"
        borderWidth="2px"
        borderColor="rgba(66, 232, 224, 1)"
      >
        {children}
      </Box>
    );
  } else {
    return (
      <Box
        position="relative"
        width="82px"
        height="82px"
        bg="rgba(0, 163, 255, 0.09)"
        borderRadius="20px"
        borderStyle="solid"
        borderWidth="2px"
        borderColor="rgba(66, 232, 224, 1)"
      >
        {children}
      </Box>
    );
  }
}

function Dash({ children, filled = false }: FillProp) {
  if (filled) {
    return <Box width="72px" height="5px" bg="rgba(66, 232, 224, 1)" />;
  } else {
    return (
      <Flex>
        <Box
          ml="6px"
          mr="6px"
          width="17px"
          height="4px"
          bg="rgba(66, 232, 224, 1)"
        />
        <Box mr="6px" width="17px" height="4px" bg="rgba(66, 232, 224, 1)" />
        <Box mr="6px" width="17px" height="4px" bg="rgba(66, 232, 224, 1)" />
        {children}
      </Flex>
    );
  }
}
