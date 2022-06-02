import React, { FunctionComponent } from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

import {
  ButtonBackTransition,
  ButtonOrangeBackTransition,
} from "../ImageTransition";

interface Props {
  index: number;
  data: any;
}
const MainButtons: FunctionComponent<Props> = ({ index, data }) => {
  return (
    <Flex w={"305px"} justify={"space-between"}>
      <ButtonBackTransition
        unitid={"visit" + index}
        width="150px"
        height="45px"
        selected={false}
        rounded="33px"
      >
        <Flex
          color="white"
          align="center"
          justify="center"
          fontSize={{ base: "14px", lg: "16px" }}
          onClick={() =>
            window.open(data.project_website, "_blank", "noopener,noreferrer")
          }
        >
          Visit Website
          <Icon
            ml={"5px"}
            as={BsArrowUpRight}
            h={{ base: 3, lg: 4 }}
            w={{ base: 3, lg: 4 }}
          />
        </Flex>
      </ButtonBackTransition>

      <ButtonOrangeBackTransition
        unitid={"view" + index}
        selected={false}
        width="150px"
        height="45px"
        rounded="33px"
      >
        <Link href={`/detail?project_id=${data.project_id}`} color="white">
          <Text fontSize={{ base: "14px", lg: "16px" }}>View Project</Text>
        </Link>
      </ButtonOrangeBackTransition>
    </Flex>
  );
};

export default MainButtons;
