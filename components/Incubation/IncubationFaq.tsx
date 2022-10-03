import { Center } from "@chakra-ui/react";
import { Flex, Text, Divider } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";

const Faq = ({ data }: { data: any }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <Flex
      w="100%"
      direction="column"
      border="1.5px solid #FFFFFF33"
      borderRadius="10px"
      py={{ base: "10px", md: "20px" }}
      onClick={() => setCollapse(!collapse)}
    >
      <Flex w="100%" justify="space-between" px="37px" align="center">
        <Text fontSize={{ base: "13px", md: "18px" }} color="white">
          {data.title}
        </Text>
        {collapse && <IoChevronUpOutline />}
        {!collapse && <IoChevronDownOutline />}
      </Flex>
      {collapse && (
        <Flex w="100%" direction="column">
          <Divider my="15px" />
          <Flex w="100%" px="37px">
            <Text fontSize={{ base: "11px", md: "15px" }} color="white">
              {data.content}
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
export default function IncubationFaq() {
  return (
    <Center>
      <Flex
        fontSize="15px"
        w={{ base: "90%", md: "70%" }}
        alignContent="center"
        direction="column"
        fontWeight="500"
        justify="center"
        mb="100px"
      >
        <Flex
          mt="37px"
          fontFamily="PilatExtended-Bold"
          fontSize="32px"
          justify="center"
          color="#0FB1F5"
        >
          FAQ
        </Flex>
        <Flex w="100%" direction="column" gap="10px" mt="30px">
          {blogs.map((blog, index) => (
            <Faq data={blog} key={index} />
          ))}
        </Flex>
      </Flex>
    </Center>
  );
}

const blogs = [
  {
    title: "Who should apply?",
    content:
      "Any builder at any stage is welcome to apply. WeFund is primarily interested in builders looking to leverage blockchain technology for a real-world application and utility",
  },
  {
    title: "When should I apply?",
    content:
      "Projects are welcome to apply at any time. The application process is always open.",
  },
  {
    title: "I don't understand how the program can be free. What's the catch?",
    content:
      "There's no catch. We are a team who wants to give back to the community. We believe if we want to help, we must not expect anything in return. Our goals are (1) to sprout innovation in blockchain and Web3 technologies and (2) to build the most founder-friendly network within the space.",
  },
  {
    title: "Is the program remote?",
    content:
      "Yes. The program is entirely remote. Sessions and mentorship are 100% online.",
  },
  {
    title: "How long is the program?",
    content:
      "The program lasts 12 weeks. Teams must dedicate at least 8 hours per week between sessions and mentorship.",
  },
  {
    title: "What are my chances of being selected?",
    content:
      "WeFund accepts less than  1% of projects that apply. To maximize your chances, we recommend to review our project requirements and preferences.Founders are sometimes selected on their 2nd or 3rd application. We encourage founders to communicate with us to make improvements to their model and applications.",
  },
  {
    title: "How is the program structured?",
    content:
      "We will conduct weekly meetings to discuss weekly progress towards goals and tasks for WeFund. Our expectations are for founders to meet the weekly goals of the incubation. Goals often include development of the MVP, tokenomics, business development, marketing, and more.",
  },
  {
    title:
      "If the project is selected, is there a possibility to drop out during the incubation period?",
    content:
      "Yes, if the project team is unable to meet its weekly tasks then the project will be dropped from the incubation program. We highly emphasize that teams take their projects seriously and are committed. The purpose of the strict incubation process is to minimize the risk for future investors who trust that the team is able to delivers its milestones.",
  },
  {
    title:
      "If the project is based on web3 but does not have a token, can WeFund accept it?",
    content:
      "Yes, we understand that not everything can be tokenized. We encourage projects to have a strong reason why they need a token. Projects are able to offer other incentives for future investors including equity.",
  },
  {
    title: "Is it required to do a token fundraise?",
    content: "WeFund supports fundraising via token, NFT, or equity.",
  },
  {
    title: "Do you accept NGO or Charity projects?",
    content: "Yes, we support all projects that will have a positive impact.",
  },
  {
    title: "Can WeFund team lead the investment in a private round?",
    content:
      "Yes we can, we have board VCs or angel investors network, however for leading the investment, we will charge 5% for the private round",
  },
  {
    title: "Is there any grant program?",
    content:
      "WeFund has a grant program with funds up to $50.000 but it will have a different selection program. This grant designs for the project who needed funds in advance. The selection process is different from the incubation selection process. The project who is already onboard does not mean will receive a grant. The WeFund team will do re-selection.",
  },
];
