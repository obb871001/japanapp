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
import Image1 from "../../../assets/images/view/camping.jpeg";
import Image2 from "../../../assets/images/view/a.jpeg";
import Image3 from "../../../assets/images/view/b.jpeg";
import Image4 from "../../../assets/images/view/c.jpeg";
import Image5 from "../../../assets/images/view/d.webp";
import Image6 from "../../../assets/images/view/e.jpeg";

const DayOne = () => {
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                交通資訊
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>
                <Highlight
                  query="ORD0019629330"
                  styles={{ px: "1", py: "1", bg: "orange.100" }}
                >
                  機票訂單編號：ORD0019629330
                </Highlight>
              </ListItem>
              <ListItem>機票聯絡電話：02 412-8001 分機 91</ListItem>
            </UnorderedList>

            <Divider className="!py-[5px]" />
            <List spacing={3}>
              <ListItem className="!text-sm">
                <ListIcon as={MdCheckCircle} color="green.500" />
                桃園國際機場(JX822):
                <Text>出發：2023-11-10(五) 09:20 </Text>
                <Text>抵達：2023-11-10(五) 12:50 </Text>
              </ListItem>
              <ListItem className="!text-sm">
                <ListIcon as={MdCheckCircle} color="green.500" />
                JR關西機場特快“HARUKA” 往 / 返京都(約35分鐘)
              </ListItem>
              <ListItem className="!text-sm">
                <ListIcon as={MdCheckCircle} color="green.500" />
                京都車站 ->{" "}
                <Link
                  color={"teal.500"}
                  href="https://www.google.com/maps/place/%E6%B8%85%E6%B0%B4%E4%BA%94%E6%A2%9D/@34.9959035,135.767923,19z/data=!3m1!4b1!4m6!3m5!1s0x600108b903b39b35:0x71caf079a67bb018!8m2!3d34.9959035!4d135.7685681!16s%2Fm%2F043p0zb?entry=ttu"
                >
                  清水五條站
                </Link>
              </ListItem>
              <ListItem className="!text-sm">
                <ListIcon as={MdCheckCircle} color="green.500" />
                居住飯店：
                <Link
                  color="teal.500"
                  href="https://www.google.com/maps/place/%E4%BA%AC%E9%83%BD%E6%9D%B1%E5%B1%B1%E5%B8%8C%E7%88%BE%E9%A0%93%E9%80%B8%E6%9E%97%E9%85%92%E5%BA%97/@34.9947295,135.7685507,18z/data=!4m30!1m20!4m19!1m6!1m2!1s0x600108ae918b02ef:0xb61a446e74a21c08!2z5Lqs6YO96LuK56uZIEhpZ2FzaGlzaGlva29qaSBLYW1hZG9ub2NobywgU2hpbW9neW8gV2FyZCwgS3lvdG8sIOaXpeacrA!2m2!1d135.7587667!2d34.985849!1m6!1m2!1s0x600108b903b39b35:0x71caf079a67bb018!2z5riF5rC05LqU5qKdIDgtY2jFjW1lIE1peWFnYXdhc3VqaSwgSGlnYXNoaXlhbWEgV2FyZCwgS3lvdG8sIDYwNS0wODAx5pel5pys!2m2!1d135.7685681!2d34.9959035!2m3!5e1!5e2!5e3!3e3!3m8!1s0x600109ba395faed1:0xd0181aaa9468d594!5m2!4m1!1i2!8m2!3d34.9951623!4d135.7696168!16s%2Fg%2F11v08jy01r?entry=ttu"
                >
                  京都東山希爾頓逸林酒店
                </Link>
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                京やき燒肉 弘 祇園山名庵(預定19:00)
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List className="!text-sm" spacing={2}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                地址：
                <Link
                  color="teal.500"
                  href="https://www.google.com/maps/place/%E4%BA%AC%E3%82%84%E3%81%8D%E7%87%92%E8%82%89+%E5%BC%98+%E7%A5%87%E5%9C%92%E5%B1%B1%E5%90%8D%E5%BA%B5/@35.0059184,135.770044,17z/data=!3m1!4b1!4m6!3m5!1s0x600108eae5eeaaab:0x7ad0be5e2a93a5c3!8m2!3d35.0059184!4d135.7726189!16s%2Fg%2F1tx1t2m3?entry=ttu"
                >
                  16 Benzaitencho, Higashiyama Ward, Kyoto, 605-0086日本
                </Link>
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                聯絡電話：
                <Link color="teal.500" href="+81 75-561-1717">
                  +81 75-561-1717
                </Link>
              </ListItem>
              <ListItem>
                {" "}
                <ListIcon as={MdCheckCircle} color="green.500" />
                確認號碼： DC6E-4E91-7E8D-3111
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                飯店附近景點
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List className="!text-sm" spacing={2}>
              <MiniCard
                imageSrc={Image1}
                viewTitle="友都八喜相機多媒體 京都店"
                content={[
                  {
                    label: "地址",
                    value:
                      "590-2 Higashishiokojicho, Shimogyo Ward, Kyoto, 600-8216日本",
                    link: "https://www.google.com/maps?q=%E5%8F%8B%E9%83%BD%E5%85%AB%E5%96%9C%E7%9B%B8%E6%A9%9F%E5%A4%9A%E5%AA%92%E9%AB%94+%E4%BA%AC%E9%83%BD%E5%BA%97&sca_esv=579393205&rlz=1C5CHFA_enTW1003TW1003&sxsrf=AM9HkKnwp-KcmSMdvlHWGP-aq5jFzfrMhQ:1699082204788&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiJeWPi-mDveWFq-WWnOebuOapn-WkmuWqkumrlCDkuqzpg73lupcyCBAhGKABGMMEMggQIRigARjDBEjynQFQ8IgBWLmcAXAKeAGQAQGYAYMCoAGADqoBBTUuOC4xuAEDyAEA-AEC-AEBwgIKEAAYRxjWBBiwA8ICBRAAGIAEwgILEC4YgAQYxwEYrwHCAgQQABgewgIFEAAYogTiAwQYACBBiAYBkAYK&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj7zYHS5qmCAxVGIYgKHVsiBskQ_AUoAXoECAQQAw",
                  },
                  {
                    label: "營業時間",
                    value: "09:30–22:00",
                  },
                ]}
              />
              <MiniCard
                imageSrc={Image2}
                viewTitle="清水寺"
                content={[
                  {
                    label: "地址",
                    value:
                      "1 Chome-294 Kiyomizu, Higashiyama Ward, Kyoto, 605-0862日本",
                    link: "https://www.google.com/maps?q=%E4%BA%AC%E9%83%BD%E6%B8%85%E6%B0%B4%E5%AF%BA&sca_esv=579379779&rlz=1C5CHFA_enTW1003TW1003&sxsrf=AM9HkKmzoHAMnbx981Q3TdEiP7yx5RXIFg:1699075652842&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIg_kuqzpg73muIXmsLTlr7oyCxAuGIAEGMcBGK8BMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMhoQLhiABBjHARivARiXBRjcBBjeBBjgBNgBAUixGFDcA1jAFHADeAGQAQGYAakBoAGZEaoBBDEuMTa4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIIEAAYgAQYsQPCAg4QLhiABBjHARivARiOBcICDRAAGIoFGLEDGEMYiwPCAggQABiABBiLA8ICBxAAGIoFGEPCAgsQABiABBixAxiDAcICDhAuGIAEGLEDGMcBGK8BwgIEEAAYA8ICCxAuGIoFGLEDGIMBwgIREC4YgAQYsQMYgwEYxwEYrwHCAgUQABiiBMICBBAjGCfCAhMQLhiKBRhDGIsDGKgDGJ0DGKIFwgISEAAYigUYsQMYgwEYChhDGIsDwgITEC4YigUYsQMYgwEYxwEYrwEYQ8ICIhAuGIoFGLEDGIMBGMcBGK8BGEMYlwUY3AQY3gQY4ATYAQHCAgoQABiKBRhDGIsD4gMEGAAgQYgGAZAGCroGBggBEAEYFA&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiDlIGs6amCAxWfUfUHHaNpB9AQ_AUoAXoECAUQAw",
                  },
                ]}
              />
              <MiniCard
                imageSrc={Image3}
                viewTitle="錦市場"
                content={[
                  {
                    label: "地址",
                    value: "Nakagyo Ward, Kyoto, 604-8055日本",
                    link: "https://www.google.com/maps?q=%E9%8C%A6%E5%B8%82%E5%A0%B4&sca_esv=579393205&rlz=1C5CHFA_enTW1003TW1003&hotel_occupancy=2&sxsrf=AM9HkKmYsz11JGwjXvcOGlmBRiQB7XYpmg:1699083129866&gs_lp=Egxnd3Mtd2l6LXNlcnAiDeS6rOmDvSDluILloLQqAggAMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADSL8SUN8BWMcIcAN4AZABAJgBnAGgAaYEqgEDMC40uAEDyAEA-AEBwgIMECEYoAEYwwQYChgqwgIKECEYoAEYwwQYCsICCBAhGKABGMME4gMEGAAgQYgGAZAGCg&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjZ3tn46amCAxVTCIgKHQxHA3YQ_AUoAXoECAQQAw",
                  },
                  {
                    label: "美食地圖",
                    value: "點我",
                    link: "https://www.kyoto-nishiki.or.jp/map/",
                  },
                ]}
              />
              <MiniCard
                imageSrc={Image4}
                viewTitle="八坂神社"
                content={[
                  {
                    label: "地址",
                    value:
                      "625 Gionmachi Kitagawa, Higashiyama Ward, Kyoto, 605-0073日本",
                    link: "https://www.google.com/maps?q=%E5%85%AB%E5%9D%82%E7%A5%9E%E7%A4%BE+%E4%BA%AC%E9%83%BD&sca_esv=579393205&rlz=1C5CHFA_enTW1003TW1003&sxsrf=AM9HkKkwHiNNoYZdhV_rPSSULOcIR6dTxw:1699083388377&gs_lp=Egxnd3Mtd2l6LXNlcnAiDeWFq-WdguelnuekviAqAggAMgsQLhivARjHARiABDILEC4YgAQYxwEYrwEyBRAAGIAEMgUQABiABDIFEAAYgAQyCxAuGIAEGMcBGK8BMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIaEC4YrwEYxwEYgAQYlwUY3AQY3gQY4ATYAQFIhxBQJ1gncAF4AZABAJgBdaABdaoBAzAuMbgBAcgBAPgBAcICChAAGEcY1gQYsAPiAwQYACBBiAYBkAYKugYGCAEQARgU&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiR0fPx6qmCAxXNAd4KHVn2B8sQ_AUoAXoECAYQAw",
                  },
                ]}
              />

              <MiniCard
                imageSrc={Image5}
                viewTitle="花見小路通(晚)"
                content={[
                  {
                    label: "地址",
                    value: "京都府京都市東山區祇園町南側周邊",
                    link: "https://www.google.com/maps/place/Hanamikoji-dori,+Higashiyama+Ward,+Kyoto,+%E6%97%A5%E6%9C%AC/@35.0049918,135.7728052,17z/data=!4m6!3m5!1s0x600108ea09cdb6a5:0xec008ef212865dc0!8m2!3d35.0054928!4d135.7752402!16s%2Fg%2F11bc6r1qk3?entry=ttu",
                  },
                  {
                    label: "捷運",
                    value: "自京阪「祇園四条」站「6號」出口步行約3分鐘",
                  },
                ]}
              />
              <MiniCard
                imageSrc={Image6}
                viewTitle="koé donuts kyoto"
                content={[
                  {
                    label: "地址",
                    value:
                      "日本〒604-8042 Kyoto, Nakagyo Ward, Nakanocho, 557 京都松竹阪井座ビル 1F",
                    link: "https://www.google.com/maps?q=koe+donuts&rlz=1C5CHFA_enTW1003TW1003&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBggHEEUYPKgCALACAA&um=1&ie=UTF-8&sa=X&sqi=2&ved=2ahUKEwi4wKXI9qmCAxUMft4KHRyNBuwQ_AUoAXoECAQQAw",
                  },
                  {
                    label: "營業時間",
                    value: "~22:00",
                  },
                ]}
              />
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default DayOne;
