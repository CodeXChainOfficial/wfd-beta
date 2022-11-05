import React from "react";
import { Image, Box } from "@chakra-ui/react";
import { PROGRESS_STATUS } from "../types/ProgreessStatus";

interface FillProp {
  children?: React.ReactNode;
  progress: PROGRESS_STATUS;
}

export default function ProgressIcon({ children, progress }: FillProp) {
  if (progress == PROGRESS_STATUS.APPROVED) {
    return (
      <Box position="relative" mr="2" pt="1">
        <Image
          w="15px"
          minW="15px"
          alt="registration icon"
          src="/media/OwnerInfo/checkgreen.svg"
        />
        {children}
      </Box>
    );
  } else if (progress == PROGRESS_STATUS.REJECTED) {
    return (
      <Box position="relative" mr="2" pt="1">
        <Image
          w="15px"
          minW="15px"
          alt="registration icon"
          src="/media/OwnerInfo/checkred.svg"
        />
        {children}
      </Box>
    );
  } else if (progress == PROGRESS_STATUS.VOTING) {
    return (
      <Box position="relative" mr="2" pt="1">
        <Image
          w="15px"
          minW="15px"
          alt="registration icon"
          src="/media/OwnerInfo/voting.svg"
        />
        {children}
      </Box>
    );
  } else {
    return (
      <Box position="relative" mr="2" pt="1">
        <Image
          w="15px"
          minW="15px"
          alt="registration icon"
          src="/media/OwnerInfo/hourglass.svg"
        />
        {children}
      </Box>
    );
  }
}
