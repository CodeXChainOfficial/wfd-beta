import { Grid, GridItem, Image, Text, chakra, Flex } from "@chakra-ui/react";

const IncubationPanel = () => {
  return (
    <Grid
      templateColumns={{ base: "100%", md: "30% auto" }}
      gap="0px 50px"
      pt={{ base: "30px", md: "80px" }}
      px={{ base: "10px", md: "100px" }}
      fontFamily="Calibri"
    >
      <GridItem w="90%">
        <Flex w="100%" justify="center">
          <Image
            src="/media/Home/incubation1.png"
            width={{ base: "50%", md: "auto" }}
          />
        </Flex>
      </GridItem>
      <GridItem w="100%">
        <Text
          fontWeight="500"
          color="#00A3FF"
          textAlign="justify"
          fontSize={{ base: "10px", md: "18px" }}
        >
          We select from pool of project applicants
          <chakra.span fontSize={{ base: "10px", md: "18px" }} color="white">
            &nbsp;or project from our partners (1st selection, we judge based on
            the idea, business model, financial model and team), then if it is
            match with our criteria, we will set up intro call to understand the
            business better) if it is passed, we go to the last call (3rd
            selection) to understand how WeFund can help the project.
          </chakra.span>
        </Text>
      </GridItem>
      <GridItem />
      <GridItem w="100%" mt="50px">
 
      </GridItem>
      <GridItem w="90%" mt="50px">
        <Flex w="100%" justify="center">
          <Image
            src="/media/Home/incubation3.png"
            width={{ base: "50%", md: "auto" }}
          />
        </Flex>
      </GridItem>
      <GridItem w="100%" mt="50px" position="relative">
        <Text
          fontWeight="500"
          color="#00A3FF"
          textAlign="justify"
          fontSize={{ base: "10px", md: "18px" }}
        >
          We do due diligence and research by interviewing, discussing and going
          through papers
          <br />
          <li>
            <chakra.span fontSize={{ base: "10px", md: "18px" }} color="white">
              WeFund select project deemed credible and impactful and the
              project is published on WeFund{" "}
            </chakra.span>
          </li>
          <li>
            <chakra.span fontSize={{ base: "10px", md: "18px" }} color="white">
              We will onboard you and set up a set of incubations and network to
              connect with groups that have similar concepts and supplementary
              roles to yours.{" "}
            </chakra.span>
          </li>
          <li>
            <chakra.span fontSize={{ base: "10px", md: "18px" }} color="white">
              Regular checkups and evaluation once a week with a weekly sprint
              goal to reach a monthly goal.{" "}
            </chakra.span>
          </li>
          <li>
            <chakra.span fontSize={{ base: "10px", md: "18px" }} color="white">
              Providing support for development and finances with our support
              partner
            </chakra.span>
          </li>{" "}
          <li>
            <chakra.span fontSize={{ base: "10px", md: "18px" }} color="white">
              Reviewing readiness for a grant and MVP
            </chakra.span>
          </li>
          <li>
            {" "}
            <chakra.span fontSize={{ base: "10px", md: "18px" }} color="white">
              Preparing project for a WeFund fundraise
            </chakra.span>
          </li>
        </Text>
        {/* <Image
          src="/media/Home/box.png"
          width="47px"
          position="absolute"
          bottom="0px"
          right="50px"
          visibility={{base:"hidden", md:"visible"}}
        />
        <Image
          src="/media/Home/box.png"
          width="35px"
          position="absolute"
          bottom="50px"
          right="0px"
          visibility={{base:"hidden", md:"visible"}}
        /> */}
      </GridItem>
    </Grid>
  );
};

export default IncubationPanel;
