import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Center,
} from "@chakra-ui/react";

const CustomTab: React.FC = (props: any) => {
  return (
    <Tab
      color="#5C7AB0"
      _selected={{ color: "#00C1FF", borderBottom: "1px solid #00C1FF" }}
    >
      <Text
        fontFamily="PilatExtended-Bold"
        fontWeight="600"
        fontSize={{ base: "8px", md: "14px" }}
        lineHeight="150%"
        letterSpacing="-0.022em"
      >
        {props.children}
      </Text>
    </Tab>
  );
};
const ProjectPanel = () => {
  return (
    <Center>
      <Tabs
        isFitted
        variant="unstyled"
        mx={{ base: "5px", md: "110px" }}
        mt="110px"
        maxW={"1440px"}
      >
        <TabList>
          <CustomTab>Projects Approval</CustomTab>
          <CustomTab>Project Incubate</CustomTab>
          <CustomTab>Milestone Status</CustomTab>
        </TabList>
        <TabPanels>
          <TabPanel>a</TabPanel>
          <TabPanel>b</TabPanel>
          <TabPanel>c</TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  );
};

export default ProjectPanel;
