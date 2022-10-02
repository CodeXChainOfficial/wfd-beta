import { Flex, Image, Text, chakra } from "@chakra-ui/react";

const FundraiseWithoutIncubation = () => {
  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      h={{ base: "400px", md: "737px" }}
      // px={{ base: "10px", md: "143px" }}
      py={{ base: "10px", md: "59px" }}
      mb="100px"
    >
      <Flex
        w="100%"
        direction="column"
        align="center"
        justify="space-between"
        h="100%"
      >
        <Flex w="100%" direction="column" align="center">
          <Image src={datas[0].image} w={{ base: "58px", md: "78px" }} />
          <Text
            align="justify"
            fontFamily="Montserrat"
            fontSize={{ base: "8px", md: "14px" }}
            fontWeight="800"
            lineHeight="150%"
            letterSpacing="-0.022em"
            color="#00A3FF"
            textAlign="justify"
            mt={{ base: "40px", md: "53px" }}
          >
            {datas[0].title}
            <chakra.span color="white">{datas[0].description}</chakra.span>
          </Text>
        </Flex>
        <Flex w="100%">
          <Text
            align="justify"
            fontFamily="Montserrat"
            fontSize={{ base: "8px", md: "14px" }}
            fontWeight="800"
            lineHeight="150%"
            letterSpacing="-0.022em"
            color="#00A3FF"
            textAlign="justify"
          >
            {datas[1].title}
            <chakra.span color="white">{datas[1].description}</chakra.span>
          </Text>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="space-between"
      >
        <Text
          align="justify"
          fontFamily="Montserrat"
          fontSize={{ base: "8px", md: "14px" }}
          fontWeight="800"
          lineHeight="150%"
          letterSpacing="-0.022em"
          color="#00A3FF"
          textAlign="justify"
        >
          Fundraising start
        </Text>
        <Image src={"/media/home/fundraise_without_incubation5.png"} />
        <Image
          src={"/media/home/fundraise_without_incubation4.png"}
          w={{ base: "80px", md: "120px" }}
        />
      </Flex>
      <Flex
        w="100%"
        direction="column"
        align="center"
        justify="space-between"
        h="100%"
      >
        <Flex w="100%" direction="column" align="center">
          <Image src={datas[2].image} w={{ base: "58px", md: "78px" }} />
          <Text
            align="justify"
            fontFamily="Montserrat"
            fontSize={{ base: "8px", md: "14px" }}
            fontWeight="800"
            lineHeight="150%"
            letterSpacing="-0.022em"
            color="#00A3FF"
            textAlign="justify"
            mt={{ base: "30px", md: "53px" }}
          >
            {datas[2].title}
            <chakra.span color="white">{datas[2].description}</chakra.span>
          </Text>
        </Flex>
        <Flex w="100%" direction="column">
          <Flex w="100%" h={{ base: "90px", lg: "128px" }} justify="center">
            <Image
              src={datas[3].image}
              maxWidth="100%"
              maxHeight="100%"
              w="auto"
              h="auto"
            />
          </Flex>
          <Text
            align="justify"
            fontFamily="Montserrat"
            fontSize={{ base: "8px", md: "14px" }}
            fontWeight="800"
            lineHeight="150%"
            letterSpacing="-0.022em"
            color="#00A3FF"
            textAlign="justify"
            mt={{ base: "30px", md: "53px" }}
          >
            {datas[3].title}
            <chakra.span color="white">{datas[3].description}</chakra.span>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FundraiseWithoutIncubation;

const datas = [
  {
    image: "/media/home/fundraise_without_incubation1.png",
    title:
      "We Select from pool of project applicants or project from our partners",
    description:
      " (1st selection, we judge based on the idea, business model, financial model and team), then if it is match with our criteria, we will set up intro call to understand the business better) if it is passed, we go to the last call (3rd selection) to set up milestone and things necessary.",
  },
  {
    title: "Additional fundraise can be conducted ",
    description:
      "when the previous one have been completed, meaning all milestone are done, and in case the projects needs it or need a immediate funds",
  },
  {
    image: "/media/home/fundraise_without_incubation2.png",
    title: "Support to achieve Milestones",
    description:
      " when a fundraise phase has been completed. So that they can fulfill it and access all the funds and use it well. ",
  },
  {
    image: "/media/home/fundraise_without_incubation3.png",
    title: "Backers of the project will vote",
    description:
      " whether a project will be given the next portion of funds raised when they completed a milestone. Each voted milestone opens up more portion of fundraisers and the next milestone step.",
  },
];