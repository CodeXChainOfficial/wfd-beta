import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import {
  Flex,
  Text,
  Select,
  InputLeftElement,
  Input,
  Box,
} from "@chakra-ui/react";

import { InputTransition } from "../ImageTransition";

interface Props {
  prjSubcategory: string;
  setPrjSubcategory: Dispatch<SetStateAction<string>>;
}
const ProjectSubCategory: FunctionComponent<Props> = ({
  prjSubcategory,
  setPrjSubcategory,
}) => {
  return (
    <Box mt="40px" w="30%">
      <Flex justify="space-between">
        <Text mb="20px">Project Sub Category</Text>
      </Flex>
      <InputTransition
        unitid="projectsubcategory"
        selected={prjSubcategory == "" ? false : true}
        width="100%"
        height="55px"
        rounded="md"
      >
        <Select
          id="sub_category"
          style={{ background: "transparent", border: "0" }}
          h="55px"
          name="sub_category"
          autoComplete="sub_category"
          focusBorderColor="purple.800"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e) => {
            setPrjSubcategory(e.target.value);
          }}
        >
          <option selected style={{ backgroundColor: "#1B0645" }}>
            Protocol
          </option>
          <option style={{ backgroundColor: "#1B0645" }}>Dao</option>
          <option style={{ backgroundColor: "#1B0645" }}>Community</option>
          <option style={{ backgroundColor: "#1B0645" }}>
            Launchped/Incubator
          </option>
          <option style={{ backgroundColor: "#1B0645" }}>Finance</option>
          <option style={{ backgroundColor: "#1B0645" }}>NFT</option>
          <option style={{ backgroundColor: "#1B0645" }}>Game/Metaverse</option>
        </Select>
      </InputTransition>
    </Box>
  );
};
export default ProjectSubCategory;
