import {
  Box,
  Button,
  Center,
  Container,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import React, { FunctionComponent, Dispatch, SetStateAction } from "react";

export default function KYCBanner() {
  return (
    <Box backgroundImage="/media/Home/2.png">
      <Container maxW={"container.xl"} paddingY={"150px"}>
        <Center>
          <Stack>
            <Text
              marginY={"42px"}
              fontFamily={"PilatExtended-Bold"}
              fontWeight={700}
              fontSize={{ base: "24px", md: "36px" }}
              textAlign={"center"}
            >
              To get ahead of the game, <br />
              <chakra.span color={"#63CDFA"}>
                Complete your KYC
              </chakra.span>{" "}
              early and skip the queue!
            </Text>
            <Center>
              <Button
                borderRadius={"full"}
                background={
                  "linear-gradient(180deg, #21C9FF 0%, #1383D5 100%);"
                }
                color={"#002E87"}
                fontSize={"20px"}
                fontWeight={800}
                paddingX={"82px"}
              >
                GO TO KYC
              </Button>
            </Center>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
}
