import React, { useState } from "react";
import { Box, Center, chakra, Flex, Image, Link, Text } from "@chakra-ui/react";

//needs the images and links from media
const media = [
  {
    img: "/media/partners/jakpost.jpg",
    link: "https://www.thejakartapost.com/front-row/2022/02/14/wefund-to-bring-forth-open-democratized-crowdfunding.html",
  },
  {
    img: "/media/partners/coinwire.png",
    link: "https://coinwire.com/wefund-project-overview/",
  },
  {
    img: "/media/partners/bezinga.webp",
    link: "https://www.benzinga.com/pressreleases/22/03/g26179026/wefund-emerges-as-a-new-and-leading-community-with-a-crowdfunding-launchpad-built-on-terra-blockch",
  },
  {
    img: "/media/partners/yahoo.png",
    link: "https://finance.yahoo.com/news/wefund-emerges-leading-community-crowdfunding-103100309.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZWNvc2lhLm9yZy8&guce_referrer_sig=AQAAACGawWCuTwxkw8lLMP2gjyHmMwVarXxidl9bNFIPpkUrjahEtBnrRpM5fyibJbsIvjMOMTMNktzMzg1kPuIyv3ykwpYOtQ7ecK3ktd1XrWhRbZCbxZ2p7xx9nz5VYqGROZe12jKFJRbfbDHwUr5L6dgzfNls4iMjWCfXhfYZKMAb",
  },
  {
    img: "/media/partners/portal.jfif",
    link: "https://www.portalkripto.com/wefund-will-launch-open-democratic-crowdfunding/",
  },
  {
    img: "/media/partners/cnnindonesia.png",
    link: "https://www.cnnindonesia.com/teknologi/20220218213931-303-761215/wefund-manfaatkan-blockchain-terra-untuk-crowdfunding",
  },
  {
    img: "/media/partners/terraspaces.png",
    link: "https://terraspaces.org/2022/02/11/wefund-interview/",
  },
  {
    img: "/media/partners/digitaljournal.webp",
    link: "https://www.digitaljournal.com/pr/wefund-and-danxia-capital-collaborate-to-incubate-blockchain-project",
  },
];

export default function MediaAppear() {
  return (
    <Flex direction="column" width="100%" mt="120px">
      <Text
        textAlign="center"
        color="#FFFF"
        fontFamily="PilatExtended-Bold"
        fontSize={{ base: "18px", md: "25px", lg: "30px" }}
        fontWeight={"600"}
      >
        MEDIA <chakra.span color={"#0FB1F5"}>APPEARANCES</chakra.span>
      </Text>
      <Flex
        width="100%"
        align="center"
        flexWrap="wrap"
        direction="row"
        mt={{ base: "1em", md: "1em", lg: "1em" }}
        mb={{ base: "2em", md: "4em", lg: "6em" }}
        justify="center"
        px={{ base: "1em", md: "2em" }}
        gap="20px"
      >
        {media.map((item, index) => (
          <Link href={item.link} pt={4} key={index}>
            <Flex
              w={{ base: "80px", md: "80px" }}
              h={{ base: "80px", md: "80px" }}
              bg="white"
              // backgroundImage="linear-gradient(180deg, rgba(0, 56.10, 255, 0.29), rgba(87.39, 123.10, 249.69, 0))"
              borderRadius="50%"
              align="center"
              justify="center"
            >
              <Image
                width="80%"
                height="80%"
                src={item.img}
                borderRadius="50%"
                key={index}
              />
            </Flex>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
