import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";
import DayOne from "./dayOne";
import DayTwo from "./dayTwo";
import DayThree from "./dayThree";
import DayFour from "./dayFour";

const Content = () => {
  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Day1</Tab>
          <Tab>Day2</Tab>
          <Tab>Day3</Tab>
          <Tab>Day4</Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="!px-0">
            <DayOne />
          </TabPanel>
          <TabPanel className="!px-0">
            <DayTwo />
          </TabPanel>
          <TabPanel className="!px-0">
            <DayThree />
          </TabPanel>
          <TabPanel className="!px-0">
            <DayFour />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Content;
