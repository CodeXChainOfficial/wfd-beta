import React, { useState } from "react";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

interface CircularServiceDescriptionProp {
  circularSize: number;
}

export default function CircularServiceDescription(
  prop: CircularServiceDescriptionProp
) {
  const symbolSize = 40;
  const [coord, setCoord] = useState({
    xA: calculateCoordX(270),
    yA: calculateCoordY(270),
    xB: calculateCoordX(330),
    yB: calculateCoordY(330),
    xC: calculateCoordX(30),
    yC: calculateCoordY(30),
    xD: calculateCoordX(90),
    yD: calculateCoordY(90),
    xE: calculateCoordX(210),
    yE: calculateCoordY(210),
    xF: calculateCoordX(150),
    yF: calculateCoordY(150),
  });
  const [showDesc, setDesc] = useState({
    showDescA: false,
    showDescB: false,
    showDescC: false,
    showDescD: false,
  });

  function calculateCoordX(deg: number) {
    const angleRad = degToRad(deg);
    return (
      (prop.circularSize / 2) * Math.cos(angleRad) +
      prop.circularSize / 2 -
      symbolSize / 2
    );
  }

  function calculateCoordY(deg: number) {
    const angleRad = degToRad(deg);
    return (
      (prop.circularSize / 2) * Math.sin(angleRad) +
      prop.circularSize / 2 -
      symbolSize / 2
    );
  }

  function degToRad(deg: number) {
    return (deg * Math.PI) / 180;
  }

  return (
    <>
      <Flex
        pt={`${symbolSize}px`}
        position="relative"
        justifyContent="center"
        alignItems="center"
      >
        <div
          style={{
            position: "relative",
            width: prop.circularSize,
            height: prop.circularSize,
            borderRadius: prop.circularSize / 2,
            borderWidth: 4,
            borderStyle: "solid",
            borderImageSlice: 1,
            borderColor: "#0FB1F5",
          }}
        >
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translateX(-50%) translateY(-50%)"
          >
            <Text fontSize="32px" fontWeight={500} textAlign="center">
              OUR
            </Text>
            <Text
              color="#63CDFA"
              fontSize="32px"
              fontWeight={600}
              textAlign="center"
            >
              SERVICES
            </Text>
          </Box>
          <div
            style={{
              cursor: "pointer",
              position: "absolute",
              left: coord.xB,
              top: coord.yB,
              width: symbolSize,
              height: symbolSize,
              backgroundImage:
                "linear-gradient(180deg, rgba(15.34, 176.87, 245.44, 1), rgba(0, 102, 153, 1))",
              borderRadius: 9999,
            }}
            onClick={() => {
              setDesc({ ...showDesc, showDescA: !showDesc.showDescA });
            }}
          />
          <Fade bottom when={showDesc.showDescA}>
            <div
              style={{
                position: "absolute",
                left: coord.xB + 60,
                top: coord.yB - 10,
                width: symbolSize + 200,
                height: symbolSize,
              }}
            >
              Launchpad <br /> WeFund through partners offer swap services
              accross multiple chain and tokens
            </div>
          </Fade>
          <div
            style={{
              cursor: "pointer",
              position: "absolute",
              left: coord.xC,
              top: coord.yC,
              width: symbolSize,
              height: symbolSize,
              backgroundImage:
                "linear-gradient(180deg, rgba(15.34, 176.87, 245.44, 1), rgba(0, 102, 153, 1))",
              borderRadius: 9999,
            }}
            onClick={() => {
              setDesc({ ...showDesc, showDescB: !showDesc.showDescB });
            }}
          />
          <Fade bottom when={showDesc.showDescB}>
            <div
              style={{
                position: "absolute",
                left: coord.xC + 60,
                top: coord.yC - 10,
                width: symbolSize + 200,
                height: symbolSize,
              }}
            >
              Acceleration
              <br /> Acceleration service for project on incubation that want
              their development accelerated and reserved for fast paced project
              ready to go to fundraise soon
            </div>
          </Fade>
          <div
            style={{
              cursor: "pointer",
              position: "absolute",
              left: coord.xE,
              top: coord.yE,
              width: symbolSize,
              height: symbolSize,
              backgroundImage:
                "linear-gradient(180deg, rgba(15.34, 176.87, 245.44, 1), rgba(0, 102, 153, 1))",
              borderRadius: 9999,
            }}
            onClick={() => {
              setDesc({ ...showDesc, showDescC: !showDesc.showDescC });
            }}
          />
          <Fade bottom when={showDesc.showDescC}>
            <div
              style={{
                position: "absolute",
                left: coord.xE - 250,
                top: coord.yE - 10,
                width: symbolSize + 200,
                height: symbolSize,
              }}
            >
              Swap Service <br /> WeFund through partners offer swap services
              accross multiple chain and tokens
            </div>
          </Fade>
          <div
            style={{
              cursor: "pointer",
              position: "absolute",
              left: coord.xF,
              top: coord.yF,
              width: symbolSize,
              height: symbolSize,
              backgroundImage:
                "linear-gradient(180deg, rgba(15.34, 176.87, 245.44, 1), rgba(0, 102, 153, 1))",
              borderRadius: 9999,
            }}
            onClick={() => {
              setDesc({ ...showDesc, showDescD: !showDesc.showDescD });
            }}
          />
          <Fade bottom when={showDesc.showDescD}>
            <div
              style={{
                position: "absolute",
                left: coord.xF - 240,
                top: coord.yF - 10,
                width: symbolSize + 200,
                height: symbolSize,
              }}
            >
              Incubation <br /> Incubation service of WeFund that offers well
              packaged program and partnership network to help project grow from
              idea to realisation
            </div>
          </Fade>
        </div>
      </Flex>
      <Center>
        <Image src="/media/Home/Circular_BG.svg" />
      </Center>
    </>
  );
}
