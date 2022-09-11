import React, { useState } from "react";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

interface CircularServiceDescriptionProp {
  circularSize: number;
}

export default function CircularOptions(prop: CircularServiceDescriptionProp) {
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
            fontFamily: "PilatExtended-Bold"
          }}
        >
          <Box
            position="absolute"
            top="50%"
            left="50%"
            
            color="#02A4FF"
            transform="translateX(-50%) translateY(-50%)"
          >
            <Text fontSize="32px" fontWeight={500} textAlign="center">
              FUNDRAISE
            </Text>
            <Text
            
            color="white"
              fontSize="32px"
              fontWeight={600}
              textAlign="center"
            >
              OPTION
            </Text>
          </Box>
          <div
            style={{
              position: "absolute",
              left: coord.xA,
              top: coord.yA,
              width: symbolSize,
              height: symbolSize,
              backgroundImage:
                "linear-gradient(180deg, rgba(15.34, 176.87, 245.44, 1), rgba(0, 102, 153, 1))",
              borderRadius: 9999,
            }}
          />
          
          <div
            style={{
              position: "absolute",
              left: coord.xC,
              top: coord.yC,
              width: symbolSize,
              height: symbolSize,
              backgroundImage:
                "linear-gradient(180deg, rgba(15.34, 176.87, 245.44, 1), rgba(0, 102, 153, 1))",
              borderRadius: 9999,
            }}
          />
         
         
          <div
            style={{
              position: "absolute",
              left: coord.xF,
              top: coord.yF,
              width: symbolSize,
              height: symbolSize,
              backgroundImage:
                "linear-gradient(180deg, rgba(15.34, 176.87, 245.44, 1), rgba(0, 102, 153, 1))",
              borderRadius: 9999,
            }}
          />
        </div>
      </Flex>
      <Center marginTop={"-50px"}>
        <Image src="/media/Home/Circular_BG.svg" />
      </Center>
    </>
  );
}
