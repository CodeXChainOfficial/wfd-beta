import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import FundraiseWithIncubation from "./FundraiseWithIncubation";
import FundraiseWithoutIncubation from "./FundraiseWithoutIncubation";
import IncubationPanel from "./IncubationPanel";

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
const Incubation = () => {
  return (
    <Tabs
      isFitted
      variant="unstyled"
      mx={{ base: "5px", md: "110px" }}
      mt="110px"
    >
      <TabList>
        <CustomTab>INCUBATION</CustomTab>
        <CustomTab>FUNDRAISE WITH INCUBATION</CustomTab>
        <CustomTab>FUNDRAISE WITHOUT INCUBATION</CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <IncubationPanel />
        </TabPanel>
        <TabPanel>
          <FundraiseWithIncubation />
        </TabPanel>
        <TabPanel>
          <FundraiseWithoutIncubation />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Incubation;
