import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Text,
  Highlight,
  Divider,
  Link,
} from "@chakra-ui/react";
import { MdCheckCircle, MdLink } from "react-icons/md";
import MiniCard from "./miniCard";

const DayThree = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              環球影城交通資訊
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <List spacing={3}>
            <ListItem className="!text-sm">
              <ListIcon as={MdCheckCircle} color="green.500" />
              清水五條站 ->{" "}
              <Link
                color={"teal.500"}
                href="https://www.google.com/maps/dir/%E6%B8%85%E6%B0%B4%E4%BA%94%E6%A2%9D/%E6%97%A5%E6%9C%AC%E7%92%B0%E7%90%83%E5%BD%B1%E5%9F%8E+2+Chome-1-33+Sakurajima,+Konohana+Ward,+Osaka,+554-0031%E6%97%A5%E6%9C%AC/@34.8345706,135.4362367,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x600108b903b39b35:0x71caf079a67bb018!2m2!1d135.7685681!2d34.9959035!1m5!1m1!1s0x6000e0d083d5e25d:0x3605fe25303252aa!2m2!1d135.4323185!2d34.6656768!3e3?entry=ttu"
              >
                日本環球影城(約1:30)
              </Link>
            </ListItem>
            <ListItem className="!text-sm">
              <ListIcon as={MdCheckCircle} color="green.500" />
              日本環球影城 ->{" "}
              <Link
                color={"teal.500"}
                href="https://www.google.com/maps/dir/%E6%97%A5%E6%9C%AC%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E6%AD%A4%E8%8A%B1%E5%8D%80+Sakurajima,+2+Chome%E2%88%921%E2%88%9233%E6%97%A5%E6%9C%AC%E7%92%B0%E7%90%83%E5%BD%B1%E5%9F%8E/%E6%B8%85%E6%B0%B4%E4%BA%94%E6%A2%9D+%E6%97%A5%E6%9C%AC%E3%80%92605-0801+Kyoto,+Higashiyama+Ward,+Miyagawasuji,+8-ch%C5%8Dme/@34.8346051,135.4367949,11z/data=!3m2!4b1!5s0x6000e71157701a53:0x537058362fd10a11!4m14!4m13!1m5!1m1!1s0x6000e0d083d5e25d:0x3605fe25303252aa!2m2!1d135.4323185!2d34.6656768!1m5!1m1!1s0x600108b903b39b35:0x71caf079a67bb018!2m2!1d135.7685681!2d34.9959035!3e3?entry=ttu"
              >
                清水五條站(約1:20)
              </Link>
            </ListItem>
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default DayThree;
