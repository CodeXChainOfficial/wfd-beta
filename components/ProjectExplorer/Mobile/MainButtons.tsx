import React, { FunctionComponent } from "react";
import { HStack, Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { ImageTransition } from "../../ImageTransition";

interface Props {
  index: number;
  data: any;
}

const MobileMainButtons: FunctionComponent<Props> = ({ index, data }) => {
  return (
    <Flex my={"25px"} direction={{ base: "column", lg: "row" }}>
      <HStack spacing="10">
        <Flex>
          <ImageTransition
            unitid={"visit" + index}
            border1="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background1="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            border2="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background2="linear-gradient(180deg, #1A133E 0%, #1A133E 100%)"
            border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
            selected={false}
            width="150px"
            height="40px"
            rounded="33px"
          >
            <a href={data.project_website}>
              <Flex justify="center" align="center">
                <Text fontSize={"15px"}>Visit Website</Text>
                <Icon as={BsArrowUpRight} h={3} w={3} ml={1} />
              </Flex>
            </a>
          </ImageTransition>
        </Flex>
        <Flex>
          <ImageTransition
            unitid={"view" + index}
            border1="linear-gradient(180deg, #FE8600 0%, #F83E00 100%)"
            background1="linear-gradient(180deg, #FE8600 0%, #F83E00  100%)"
            border2="linear-gradient(180deg, #FE8600 0%, #F83E00 100%)"
            background2="linear-gradient(180deg, #1A133E 0%, #1A133E 100%)"
            border3="linear-gradient(180deg, #FE8600 0%, #F83E00 100%)"
            background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
            selected={false}
            width="150px"
            height="40px"
            rounded="33px"
          >
            <Link href={`/detail?project_id=${data.project_id}`}>
              <Box fontSize={"15px"}>View Project</Box>
            </Link>
          </ImageTransition>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default MobileMainButtons;
