import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export const ImageTransition = (props: any) => {
  function handleMouseEnter() {
    if (typeof document !== "undefined") {
      const medium = document.getElementById(props.unitid);
      medium?.classList.add("transited");
    }
  }
  function handleMouseLeave() {
    if (typeof document !== "undefined") {
      const medium = document.getElementById(props.unitid);
      medium?.classList.remove("transited");
    }
  }
  const medium_border = props.selected ? props.border3 : props.border2;
  const medium_back = props.selected ? props.background3 : props.background2;
  const trans_class = props.selected ? "" : "normal";

  return (
    <Box
      style={{ position: "relative", cursor: "pointer" }}
      w={props.width}
      h={props.height}
      mt={props.mt}
      ml={props.ml}
      mb={props.mb}
      onClick={props.onClick}
    >
      <Flex
        style={{ background: props.border1, position: "absolute" }}
        w="100%"
        h="100%"
        rounded={props.rounded}
      >
        <Flex
          style={{ background: props.background1 }}
          w="100%"
          m="2px"
          rounded={props.rounded}
        ></Flex>
      </Flex>
      <Flex
        id={props.unitid}
        className={trans_class}
        style={{ background: medium_border, position: "absolute" }}
        w="100%"
        h="100%"
        rounded={props.rounded}
      >
        <Flex
          style={{ background: medium_back }}
          w="100%"
          m="2px"
          rounded={props.rounded}
        ></Flex>
      </Flex>
      <Flex
        style={{ position: "absolute" }}
        w="100%"
        h="100%"
        rounded={props.rounded}
        onMouseEnter={() => {
          handleMouseEnter();
        }}
        onMouseLeave={() => {
          handleMouseLeave();
        }}
      >
        <Flex
          direction="column"
          justify="center"
          align="center"
          w="100%"
          h="100%"
        >
          {props.children}
        </Flex>
      </Flex>
    </Box>
  );
};
export const InputTransition = (props: any) => {
  return (
    <ImageTransition
      unitid={props.unitid}
      border1="linear-gradient(180deg, #00A3FF 0%, rgba(0, 71, 255, 0) 0%)"
      background1="linear-gradient(180deg, #2B226B 0%, #1B0131 100%)"
      border2="rgba(255, 255, 255, 5%)"
      background2="linear-gradient(180deg, #501992 0%, #300F71 1.4%, #09044B 95.22%)"
      border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 0%)"
      background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
      selected={props.selected}
      width={props.width}
      height={props.height}
      rounded={props.rounded}
      mt={props.mt}
      ml={props.ml}
      mb={props.mb}
      onClick={props.onClick}
    >
      {props.children}
    </ImageTransition>
  );
};
export const ButtonTransition = (props: any) => {
  return (
    <ImageTransition
      unitid={props.unitid}
      border1="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
      background1="linear-gradient(180deg, #1A133E 0%, #1A133E 100%)"
      border2="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
      background2="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
      border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
      background3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
      selected={props.selected}
      width={props.width}
      height={props.height}
      rounded={props.rounded}
      mt={props.mt}
      ml={props.ml}
      mb={props.mb}
      onClick={props.onClick}
    >
      {props.children}
    </ImageTransition>
  );
};

export const ButtonBackTransition = (props: any) => {
  return (
    <ImageTransition
      unitid={props.unitid}
      border1="1.5px solid #00A3FF"
      background1="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
      border2="1.5px solid #00A3FF"
      background2="#10144B"
      border3="1.5px solid #00A3FF"
      background3="linear-gradient(180deg, #1A133E 0%, #1A133E 100%)"
      selected={props.selected}
      width={props.width}
      height={props.height}
      rounded={props.rounded}
      mt={props.mt}
      ml={props.ml}
      mb={props.mb}
      onClick={props.onClick}
    >
      {props.children}
    </ImageTransition>
  );
};

export const ButtonOrangeBackTransition = (props: any) => {
  return (
    <ImageTransition
      unitid={props.unitid}
      border1="linear-gradient(180deg, #FE8600 0%, #F83E00 100%)"
      background1="linear-gradient(180deg, #FE8600 0%, #F83E00  100%)"
      border2="linear-gradient(180deg, #FE8600 0%, #F83E00 100%)"
      background2="linear-gradient(180deg, #1A133E 0%, #1A133E 100%)"
      border3="linear-gradient(180deg, #FE8600 0%, #F83E00 100%)"
      background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
      selected={props.selected}
      width={props.width}
      height={props.height}
      rounded={props.rounded}
      mt={props.mt}
      ml={props.ml}
      mb={props.mb}
      onClick={props.onClick}
    >
      {props.children}
    </ImageTransition>
  );
};

export const InputTransitiongrey = (props: any) => {
  return (
    <ImageTransition
      unitid={props.unitid}
      border1="rgba(255, 255, 255, 0.05)"
      background1="rgba(255, 255, 255, 0.05)"
      border2="#6E5A88"
      background2="#2D0F45"
      border3="rgba(255, 255, 255, 0.05)"
      background3="rgba(255, 255, 255, 0.05)"
      selected={props.selected}
      width={props.width}
      height={props.height}
      rounded={props.rounded}
      mt={props.mt}
      ml={props.ml}
      mb={props.mb}
      onClick={props.onClick}
    >
      {props.children}
    </ImageTransition>
  );
};
