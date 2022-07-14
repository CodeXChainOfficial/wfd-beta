import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Text,
  Input,
  HStack,
  VStack,
  Stack,
  Button,
  Image,
  Checkbox,
  SimpleGrid,
} from "@chakra-ui/react";
import { IoBan } from "react-icons/io5";
import { useStore } from "../contexts/store";
import {
  InputTransition,
  ButtonTransition,
} from "../components/ImageTransition";
import CardBox from "../components/Staking/CardBox";
import PageLayout from "../components/PageLayout";
import Footer from "../components/Footer";
import { Set2Mainnet, Set2Testnet } from "../utils/utility";

export default function Cards() {
  const [cards, setCards] = useState(constants);

  //-----------fetch project data=-------------------------
  async function fetchContractQuery() {}

  //---------initialize fetching---------------------
  useEffect(() => {
    fetchContractQuery();
  }, []);

  function getCardTitle(cardType: string) {
    let title = "No Holder";
    switch (cardType.toLowerCase()) {
      case "platium":
        title = "Platium";
        break;
      case "gold":
        title = "Gold";
        break;
      case "silver":
        title = "Silver";
        break;
      case "bronze":
        title = "Bronze";
        break;
    }
    return title;
  }
  function getImagePath(card_type: string) {
    let url;
    switch (card_type?.toLowerCase()) {
      case "platium":
        url = "/media/Card/Platinum.png";
        break;
      case "gold":
        url = "/media/Card/Gold.png";
        break;
      case "silver":
        url = "/media/Card/Silver.png";
        break;
      case "bronze":
        url = "/media/Card/Bronze.png";
        break;
    }
    return url;
  }
  return (
    <PageLayout title="Cards" subTitle1="Card" subTitle2="Holders">
      <Flex
        direction="column"
        w={{ base: "90%", md: "98%", lg: "80%" }}
        justify="center"
        mt="50px"
      >
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 2,
            xl: 3,
          }}
          spacing={10}
        >
          {cards.map((item, index) => (
            <Box h="300px" key={index}>
              <Image
                src={getImagePath(item.card_type)}
                h={{
                  base: "150px",
                  sm: "200px",
                }}
              />
              <Text>{getCardTitle(item.card_type)}</Text>
              <Text>Card Holder: {item.wallet}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
      <Footer />
    </PageLayout>
  );
}

const constants = [
  {
    wallet: "terra1qvyj7tqs35hckd395rglc7lsyf2acuhgdcmj77",
    card_type: "platium",
    card_number: "3",
    metadata: "",
  },
  {
    wallet: "terra1jpk9c2xne8aj7myszy3cq0ehfrgjf4ndfkfmln",
    card_type: "gold",
    card_number: "3",
    metadata: "",
  },
  {
    wallet: "terra1c48dty5gaxvyx382tq70k5rqx5l7aflehvqf7g",
    card_type: "silver",
    card_number: "3",
    metadata: "",
  },
  {
    wallet: "terra15y7n2g49d6f6y8wk7rs347a07hxy8h9fddk2fh",
    card_type: "bronze",
    card_number: "3",
    metadata: "",
  },
];
