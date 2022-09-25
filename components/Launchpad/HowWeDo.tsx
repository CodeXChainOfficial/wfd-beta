import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";

const howWeDo = [
  {
    img: "/media/Home/how_pick.png",
    label: "How We Pick and Select",
    desc:
      "◦ Project Apply to WeFund for a fundraise/incubation.<br/>" +
      "◦ We conduct assestment, viability study and team interview<br/>" +
      "◦ project that met our requirement, provided net value to the community and have comitted team will be selected.<br/>" +
      "◦ Almost ready project with MVP will go to acceleration phase, the other will go to regular 12 weeks incubation period",
    showDesc: false,
  },
  {
    img: "/media/Home/how_incubation.png",
    label: "How We Do Incubation",
    desc:
      "◦ When project selected they enter incubation period.<br/>" +
      "◦ Depending on project, they can enter acceleration phase. Normal phase runs for 12 weeks<br/>" +
      "◦ We do monitoring, resource assistance, and networking with partnership opportunities to boost project.<br/>" +
      "◦ When 12 weeks period ends, we do assestment, to extend, suspend or continue to fundraise phase",
    showDesc: false,
  },
  {
    img: "/media/Home/how_fundraise.png",
    label: "How We Do Fundraise",
    desc:
      "◦ Once project have MVP and proposal ready, WeFund will take you to the next step, to start fundraising.<br/>" +
      "◦ Support to achieve Milestones when a fundraised phase has been completed to ensure fulfilment<br/>" +
      "◦ Backers of the project will vote whether a project will be given the next portion of funds raised when they completed a milestone. Each voted milestone opens up more portion of fundraisers and the next milestone step.<br/>" +
      "◦ Additional fundraise can be conducted when the previous one have been completed",
    showDesc: false,
  },
];

export default function HowWeDo() {
  const [getModel, setModel] = useState(howWeDo);

  return (
    <Flex
      width="100%"
      flexWrap="wrap"
      direction="row"
      backgroundSize={"contain"}
      background="#000000"

      mt={{ base: "1em", md: "421px" }}
      mb={{ base: "4em", md: "8em" }}
      justify="center"
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
          width={{ base: "65%", md: "18em", lg: "19em" }}
          borderRadius={{ base: "10px", md: "15px", lg: "15px" }}
        >
          <Flex
            cursor="pointer"
            key={i + "_content"}
            id="howWeDo"
            textAlign="center"
            overflow={"hidden"}
            alignItems={"center"}
            flexDirection="column"
            justifyContent={"center"}
            m={{ base: "0.5", md: "1.8em" }}
            p={{ base: ".2em", md: ".5em 1em", lg: "1em" }}
            width={{ base: "100%", md: "18em", lg: "19em" }}
            height={{ base: "10em", md: "20em", lg: "18em" }}
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
          <Fade duration={500} bottom when={e.showDesc} collapse>
            <Text
              textAlign="justify"
              dangerouslySetInnerHTML={{ __html: e.desc }}
              pt="32px"
              mt={"1em"}
              width="95%"
              color={"white"}
              fontWeight="400"
              fontSize="20px"
              lineHeight="28px"
            />
          </Fade>
        </Flex>
      ))}
    </Flex>
  );
}
