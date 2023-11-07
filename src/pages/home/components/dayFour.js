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
import Image10 from "../../../assets/images/view/i.jpeg";
import Image11 from "../../../assets/images/view/j.jpeg";

const DayFour = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              第四天自由行程
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <List spacing={3}>
            <MiniCard
              imageSrc={Image10}
              viewTitle="常寂光寺"
              content={[
                {
                  label: "地址",
                  value: "點我",
                  link: "https://www.google.com/maps?q=%E5%B8%B8%E5%AF%82%E5%85%89%E5%AF%BA&rlz=1C5CHFA_enTW1003TW1003&gs_lcrp=EgZjaHJvbWUqFQgBEC4YChiDARivARjHARixAxiABDIGCAAQRRg5MhUIARAuGAoYgwEYrwEYxwEYsQMYgAQyCQgCEAAYChiABDIJCAMQABgKGIAEMgkIBBAAGAoYgAQyCQgFEAAYChiABDIJCAYQABgKGIAEMgkIBxAAGAoYgAQyCQgIEAAYChiABNIBCDQyMDFqMWo3qAIAsAIA&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjxysj2hrKCAxVnZ_UHHdMgCxAQ_AUoAXoECAQQAw",
                },
              ]}
            />
            <MiniCard
              imageSrc={Image11}
              viewTitle="道頓堀"
              content={[
                {
                  label: "地址",
                  value: "點我",
                  link: "https://www.google.com/maps/place/%E9%81%93%E9%A0%93%E5%A0%80/@34.6687234,135.4987168,17z/data=!3m1!4b1!4m6!3m5!1s0x6000e713818af9fd:0xb8bb1326b48ba590!8m2!3d34.6687234!4d135.5012971!16zL20vMDN4eGgz?entry=ttu",
                },
              ]}
            />
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default DayFour;
