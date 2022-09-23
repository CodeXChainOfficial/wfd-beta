import { Box, Center, chakra, Flex, Image, Text } from "@chakra-ui/react";
interface Props {
  w: number;
  r: number;
  angle: number;
  index: number;
  selectComp: (index: number) => void;
  data: any;
}

const degToRad = (deg: number) => {
  return (deg / 180) * Math.PI;
};

const CircleTitle = ({ w, r, angle, index, selectComp, data }: Props) => {
  return (
    <Flex
      width={`${r}px`}
      height={`${r}px`}
      position="absolute"
      left={w / 2 - (w / 2) * Math.sin(degToRad(angle)) - r / 2}
      top={w / 2 - (w / 2) * Math.cos(degToRad(angle)) - r / 2}
      key={index}
      id={`title${index}`}
      background="linear-gradient(180deg, #0FB1F5 0%, #006699 100%)"
      borderRadius="50%"
      justify="center"
      align="center"
      cursor="pointer"
      transition="all 1s ease 0s"
      onClick={() => selectComp(index)}
    >
      <Text>{data.title}</Text>
    </Flex>
  );
};

export default CircleTitle;
