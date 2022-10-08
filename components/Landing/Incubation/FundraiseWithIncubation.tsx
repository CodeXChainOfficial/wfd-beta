import { Flex, Image, Text, chakra } from "@chakra-ui/react";

const FundraiseWithIncubation = () => {
  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      py={{ base: "20px", md: "143px" }}
    >
      <Flex w="100%" gap="80px" direction={{ base: "column", md: "row" }}>
        {datas.map((data, index) => (
          <Flex w="100%" direction="column" key={index} gap="66px">
            <Flex w="100%" h="178px" justify="center">
              <Image
                src={data.image}
                width="auto"
                height="auto"
                maxW="100%"
                maxH="100%"
              />
            </Flex>
            <Text
              align="justify"
              fontSize="14px"
              fontWeight="800"
              color="#00A3FF"
              textAlign="justify"
            >
              {data.title}
              <chakra.span color="white">{data.description}</chakra.span>
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default FundraiseWithIncubation;

const datas = [
  {
    image: "/media/Home/fundraise_with_incubation1.png",
    title: "After the MVP done / Graduate",
    description: " from the incubation, we start fundraising ",
  },
  {
    image: "/media/Home/fundraise_with_incubation2.png",
    title: "Support to achieve Milestones",
    description:
      " when a fundraise phase has been completed. So that they can fulfill it and access all the funds and use it well. ",
  },
  {
    image: "/media/Home/fundraise_with_incubation3.png",
    title: "Backers of the project will vote",
    description:
      " whether a project will be given the next portion of funds raised when they completed a milestone. Each voted milestone opens up more portion of fundraisers and the next milestone step.",
  },
  {
    image: "/media/Home/fundraise_with_incubation4.png",
    title: "Additional fundraise can be conducted",
    description:
      " when the previous one have been completed, meaning all milestone are done, and in case the projects needs it or need a immediate funds",
  },
];
