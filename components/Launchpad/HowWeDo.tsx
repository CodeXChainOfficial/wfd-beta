import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const howWeDo = [
  {
    img: "/media/Home/how_pick.png",
    label: "How We Pick and Select",
    desc: "◦ Lorem ipsum dolor sit amet",
    showDesc: false,
  },
  {
    img: "/media/Home/how_incubation.png",
    label: "How We Do Incubation",
    desc: "◦ Lorem ipsum dolor sit amet",
    showDesc: false,
  },
  {
    img: "/media/Home/how_fundraise.png",
    label: "How We Do Fundraise",
    desc:
      "◦ Once project have MVP and grants proposal ready, WeFund will take you to the next step, to start fundraising.<br/>" +
      "◦ Support to achieve Milestones when a fundraised phase has been completed. So that they can fulfill it and access all the funds and use it well.<br/>" +
      "◦ Backers of the project will vote whether a project will be given the next portion of funds raised when they completed a milestone. Each voted milestone opens up more portion of fundraisers and the next milestone step.<br/>" +
      "◦ Additional fundraise can be conducted when the previous one have been completed, meaning all milestone are done, and in case the projects needs it or need an immediate funds",
    showDesc: false,
  },
];

export default function HowWeDo() {
  const [getModel, setModel] = useState(howWeDo);

  return (
    <Flex
      width="100%"
      flexWrap={"wrap"}
      flexDirection="row"
      backgroundSize={"contain"}
      mt={{ base: "1em", md: "1em", lg: "1em" }}
      mb={{ base: "4em", md: "8em", lg: "10em" }}
      justifyContent={{ base: "center", md: "center", lg: "center" }}
    >
      {getModel.map((e, i) => (
        <Flex
          key={i + "_root"}
          textAlign="center"
          overflow={"hidden"}
          alignItems={"center"}
          flexDirection="column"
          m="1.8em"
          p={{ base: ".2em", md: ".5em 1em", lg: "1em" }}
          width={{ base: "40%", md: "18em", lg: "19em" }}
          borderRadius={{ base: "10px", md: "15px", lg: "15px" }}
        >
          <Flex
            key={i + "_content"}
            id="howWeDo"
            textAlign="center"
            overflow={"hidden"}
            alignItems={"center"}
            flexDirection="column"
            justifyContent={"center"}
            m="1.8em"
            p={{ base: ".2em", md: ".5em 1em", lg: "1em" }}
            width={{ base: "40%", md: "18em", lg: "19em" }}
            height={{ base: "14em", md: "20em", lg: "18em" }}
            borderRadius={{ base: "10px", md: "15px", lg: "15px" }}
            onClick={() => {
              const howArray = [...howWeDo];
              howArray[i].showDesc = !howArray[i].showDesc;
              setModel(howArray);
            }}
          >
            <Image
              src={e.img}
              objectFit="contain"
              width={{ base: "50%", md: "70%", lg: "70%" }}
              height={{ base: "6em", md: "7em", lg: "60%" }}
            />
            <Text
              mt={"1em"}
              width="95%"
              color={"white"}
              fontFamily={{
                base: "PilatExtended-Regular",
                md: "PilatExtended-Bold",
                lg: "PilatExtended-Bold",
              }}
              fontSize={{ base: "12px", md: "16px", lg: "16px" }}
              fontWeight={{ base: "500", md: "bold", lg: "bold" }}
            >
              {e.label}
            </Text>
          </Flex>
          {e.showDesc ? (
            <Text
              textAlign="justify"
              dangerouslySetInnerHTML={{ __html: e.desc }}
              pt="32px"
              mt={"1em"}
              width="95%"
              color={"white"}
              fontFamily={"Montserrat"}
              fontWeight="400"
              fontSize="20px"
              lineHeight="28px"
            ></Text>
          ) : null}
        </Flex>
      ))}
    </Flex>
  );
}
