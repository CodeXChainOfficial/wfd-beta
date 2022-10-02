import { Grid, GridItem, Image, Text, chakra, Flex } from "@chakra-ui/react";

const IncubationPanel = () => {
  return (
    <Grid
      templateColumns={{ base: "100%", md: "30% auto" }}
      gap="0px 50px"
      pt={{ base: "30px", md: "80px" }}
      px={{ base: "10px", md: "100px" }}
    >
      <GridItem w="100%">
        <Image src="/media/home/incubation1.png" />
      </GridItem>
      <GridItem w="100%">
        <Text
          fontFamily="Montserrat"
          fontSize="20px"
          fontWeight="600"
          lineHeight="150%"
          letterSpacing="-0.022em"
          color="#00A3FF"
          textAlign="justify"
          mt="10px"
        >
          We Select from pool of project applicants
          <chakra.span fontSize="14px" color="white">
            &nbsp;or project from our partners (1st selection, we judge based on
            the idea, business model, financial model and team), then if it is
            match with our criteria, we will set up intro call to understand the
            business better) if it is passed, we go to the last call (3rd
            selection) to understand how WeFund can help the project.
          </chakra.span>
        </Text>
      </GridItem>
      <GridItem />
      <GridItem w="100%">
        <Flex gap="70px" align="center">
          <Text
            fontFamily="Montserrat"
            fontSize="20px"
            fontWeight="600"
            lineHeight="150%"
            letterSpacing="-0.022em"
            color="#00A3FF"
            textAlign="justify"
          >
            We match it against our criteria
            <br />
            <chakra.span fontSize="14px" color="white">
              &nbsp; and see its impact to real world applications
            </chakra.span>
          </Text>
          <Image src="/media/home/incubation2.png" width="40%" />
        </Flex>
      </GridItem>
      <GridItem w="100%" mt="50px">
        <Image src="/media/home/incubation3.png" />
      </GridItem>
      <GridItem w="100%" mt="50px" position="relative">
        <Text
          fontFamily="Montserrat"
          fontSize="20px"
          fontWeight="600"
          lineHeight="150%"
          letterSpacing="-0.022em"
          color="#00A3FF"
          textAlign="justify"
          mt="10px"
        >
          We do due diligence and research by interviewing, discussing and going
          through papers
          <br />
          <chakra.span fontSize="14px" color="white">
            &nbsp;
          </chakra.span>
        </Text>
        <chakra.ul ml="20px">
          <li>
            <chakra.span fontSize="14px" color="white">
              WeFund select project deemed credible and impactful and the
              project is published on WeFund{" "}
            </chakra.span>
          </li>
          <li>
            <chakra.span fontSize="14px" color="white">
              We will onboard you and set up a set of incubations for you, set
              you up to network and connect with partners and groups that have
              similar concepts and supplementary roles to yours.{" "}
            </chakra.span>
          </li>
          <li>
            <chakra.span fontSize="14px" color="white">
              Regular checkups and evaluation once a week with a weekly sprint
              goal to reach a monthly goal.{" "}
            </chakra.span>
          </li>
          <li>
            <chakra.span fontSize="14px" color="white">
              Providing support for development and finances with our support
              partner
            </chakra.span>
          </li>{" "}
          <li>
            <chakra.span fontSize="14px" color="white">
              Reviewing readiness for a grant and MVP
            </chakra.span>
          </li>
          <li>
            {" "}
            <chakra.span fontSize="14px" color="white">
              Preparing project for a WeFund fundraise
            </chakra.span>
          </li>
        </chakra.ul>
        <Image
          src="/media/home/box.png"
          width="47px"
          position="absolute"
          bottom="0px"
          right="50px"
        />
        <Image
          src="/media/home/box.png"
          width="35px"
          position="absolute"
          bottom="50px"
          right="0px"
        />
      </GridItem>
    </Grid>
  );
};

export default IncubationPanel;
