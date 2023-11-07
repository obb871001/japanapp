import React from "react";
import PageHeader from "../../components/pageHeader";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { foodList } from "./food";
const SearchFood = () => {
  return (
    <section className="fixed top-0 left-0 w-full h-full bg-common-bg z-[9999] overflow-y-scroll">
      <PageHeader title="搜尋美食" />{" "}
      <section>
        <Accordion allowMultiple>
          {foodList.map((list) => {
            return (
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {list.label}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>commodo consequat.</AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>
    </section>
  );
};

export default SearchFood;
