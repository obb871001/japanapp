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

import Image7 from "../../../assets/images/view/f.jpeg";
import Image8 from "../../../assets/images/view/g.jpeg";
import Image9 from "../../../assets/images/view/h.jpeg";

const DayTwo = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              嵐山交通資訊
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
                href="https://www.google.com/maps/dir/%E6%B8%85%E6%B0%B4%E4%BA%94%E6%A2%9D+8-ch%C5%8Dme+Miyagawasuji,+Higashiyama+Ward,+Kyoto,+605-0801%E6%97%A5%E6%9C%AC/JR%E5%B5%AF%E5%B3%A8%E5%B5%90%E5%B1%B1%E7%AB%9911-1+Sagatenryuji+Kurumamichicho,+Ukyo+Ward,+Kyoto,+616-8373%E6%97%A5%E6%9C%AC/@35.0002891,135.6450464,12z/am=t/data=!3m1!4b1!4m18!4m17!1m5!1m1!1s0x600108b903b39b35:0x71caf079a67bb018!2m2!1d135.7685681!2d34.9959035!1m5!1m1!1s0x6001a9fe9bfe5279:0x1259413423edf0d9!2m2!1d135.6811811!2d35.018781!2m3!5e1!5e2!5e3!3e3?entry=ttu"
              >
                嵯峨嵐山站(約55 分)(*需轉三站)
              </Link>
            </ListItem>

            <ListItem className="!text-sm">
              <ListIcon as={MdCheckCircle} color="green.500" />
              日本京都 嵐山・嵯峨野小火車車票 嵯峨ー龜岡區間：
              <Text>出發：2023-11-11(六) 10:03發車 (約30分鐘)</Text>
              <Text>訂單編號：23KK284386366</Text>
            </ListItem>
            <ListItem className="!text-sm">
              <ListIcon as={MdCheckCircle} color="green.500" />
              日本京都｜嵐山・保津川遊船體驗
              <Text>
                兌票地點：
                <Link
                  color="teal.500"
                  href="https://www.google.com/maps?ll=35.017202,135.586859&z=16&t=m&hl=zh-TW&gl=US&mapclient=embed&cid=3737094025798721879"
                >
                  京都府亀岡市保津町下中島2保津川下り
                </Link>
              </Text>
              <Text>出發：2023-11-11(六) 11:00(場次) </Text>
              <Text>行程時間：約二小時(抵達嵐山)</Text>
            </ListItem>
            <ListItem className="!text-sm">
              <ListIcon as={MdCheckCircle} color="green.500" />
              京都嵐山站 ->
              <Link
                color={"teal.500"}
                href="https://www.google.com/maps/dir/%E5%B5%90%E5%B1%B1+%E6%97%A5%E6%9C%AC%E3%80%92616-0007+Kyoto,+Ukyo+Ward/%E6%97%A5%E6%9C%AC%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8D%80+Shinsaibashisuji,+2+Chome%E2%88%922%E2%88%9222%E5%BF%83%E9%BD%8B%E6%A9%8B%E5%95%86%E5%BA%97%E8%A1%97/@34.8417617,135.4562086,11z/data=!3m2!4b1!5s0x6000e71157701a53:0x537058362fd10a11!4m14!4m13!1m5!1m1!1s0x6001075451efd3e3:0xabaad64f597b014c!2m2!1d135.666773!2d35.009449!1m5!1m1!1s0x6000e713fc37b373:0x625cc4399599c323!2m2!1d135.5012819!2d34.6709469!3e3?entry=ttu"
              >
                大阪心齋橋(約150 分)
              </Link>
            </ListItem>
            <ListItem className="!text-sm">
              <ListIcon as={MdCheckCircle} color="green.500" />
              大阪心齋橋 ->
              <Link
                color={"teal.500"}
                href="https://www.google.com/maps/dir/%E5%BF%83%E9%BD%8B%E6%A9%8B%E7%AD%8B%E5%95%86%E5%BA%97%E8%A1%97+%E6%97%A5%E6%9C%AC%E3%80%92542-0085+Osaka,+Chuo+Ward,+Shinsaibashisuji,+2+Chome%E2%88%922%E2%88%9222/%E6%B8%85%E6%B0%B4%E4%BA%94%E6%A2%9D+%E6%97%A5%E6%9C%AC%E3%80%92605-0801+Kyoto,+Higashiyama+Ward,+Miyagawasuji,+8-ch%C5%8Dme/@34.8246898,135.468745,11z/data=!3m2!4b1!5s0x6000e71157701a53:0x537058362fd10a11!4m14!4m13!1m5!1m1!1s0x6000e713fc37b373:0x625cc4399599c323!2m2!1d135.5012819!2d34.6709469!1m5!1m1!1s0x600108b903b39b35:0x71caf079a67bb018!2m2!1d135.7685681!2d34.9959035!3e3?entry=ttu"
              >
                清水五條站(約85 分)
              </Link>
            </ListItem>
          </List>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              嵐山美食資訊
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <List spacing={3}>
            <ListItem className="!text-sm">
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link
                color={"teal.500"}
                href="https://www.google.com/maps?q=%E6%B9%AF%E8%91%89%E3%83%81%E3%83%BC%E3%82%BA%E6%9C%AC%E8%88%97+%E3%82%86%E3%81%B0%E3%83%81%E3%83%BC%E3%82%BA&rlz=1C5CHFA_enTW1003TW1003&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiiBNIBBzIxNWowajmoAgCwAgA&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjF0_D786mCAxUM62EKHaA1D40Q_AUoAXoECAQQAw"
              >
                Yuba Cheese Honpo (京都嵐山 湯葉チーズ本舗 本店) 炸豆皮起司
              </Link>
            </ListItem>

            <ListItem className="!text-sm">
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link
                color={"teal.500"}
                href="https://www.google.com/maps/place/%E4%BA%AC%E8%B1%86%E5%BA%B5/@35.0176496,135.5239947,12z/data=!4m10!1m2!2m1!1z5Lqs6LGG5bq1!3m6!1s0x6001a9ff560f2679:0x12742910070473a6!8m2!3d35.0176496!4d135.67643!15sCgnkuqzosYblurUiA4gBAVoNIgvkuqwg6LGGIOW6tZIBDGRlc3NlcnRfc2hvcOABAA!16s%2Fg%2F119w6f8fz?entry=ttu"
              >
                京豆庵 (冰淇淋)
              </Link>
            </ListItem>

            <ListItem className="!text-sm">
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link
                color={"teal.500"}
                href="https://www.google.com/maps?q=%E5%B5%AF%E5%B3%A8%E3%81%A8%E3%81%86%E3%81%B5+%E7%A8%B2+%E6%9C%AC%E5%BA%97&rlz=1C5CHFA_enTW1003TW1003&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzEwMmowajSoAgCwAgA&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi3mbTf9KmCAxUTbvUHHa30C6YQ_AUoAXoECAQQAw"
              >
                嵯峨とうふ 稲 本店(烏龍麵)
              </Link>
            </ListItem>
            <ListItem className="!text-sm">
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link
                color={"teal.500"}
                href="https://www.google.com/maps?q=%E4%BA%94%E6%9C%A8%E8%8C%B6%E5%B1%8B%E9%A0%90%E7%B4%84&sca_esv=579397783&rlz=1C5CHFA_enTW1003TW1003&sxsrf=AM9HkKnSMgetJul-rVojvLU9ImiJLeOiaQ:1699086295654&gs_lp=Egxnd3Mtd2l6LXNlcnAiHOS6lOacqOiMtuWxiyDvvIjltZDlsbHlupfvvIkqAggBMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADSKoiUABYAHADeAGQAQCYAQCgAQCqAQC4AQHIAQDiAwQYACBBiAYBkAYK&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi3vsHd9amCAxXyQ_UHHRGJBO8Q_AUoAXoECAMQAw"
              >
                五木茶屋 （餐廳）要排隊
              </Link>
            </ListItem>
            <ListItem className="!text-sm">
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link
                color={"teal.500"}
                href="https://www.google.com/maps/place/%E9%9B%B2%E3%83%8E%E8%8C%B6KUMONOCHA+CAFE+%E5%B5%90%E5%B1%B1%E5%BA%97/@35.014377,135.6752806,17z/data=!3m1!4b1!4m6!3m5!1s0x6001a92d705240cb:0xb4439a0ef7410f1a!8m2!3d35.014377!4d135.6778555!16s%2Fg%2F11s99fjcss?entry=ttu"
              >
                雲ノ茶カフェ (咖啡廳)
              </Link>
            </ListItem>
            <ListItem className="!text-sm">
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link
                color={"teal.500"}
                href="https://www.google.com/maps?q=%E3%82%88%E3%83%BC%E3%81%98%E3%82%84%E3%82%AB%E3%83%95%E3%82%A7+%E5%B5%AF%E5%B3%A8%E9%87%8E%E5%B5%90%E5%B1%B1%E5%BA%97&rlz=1C5CHFA_enTW1003TW1003&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBggCEAAYHjIGCAMQABgeMgYIBBAAGB4yBggFEAAYHjIGCAYQABgeMggIBxAAGA8YHjIICAgQABgPGB4yCAgJEAAYDxgeqAIAsAIA&um=1&ie=UTF-8&sa=X&sqi=2&ved=2ahUKEwjy0rez9qmCAxUgbPUHHYwjDpIQ_AUoAXoECAQQAw"
              >
                よーじやカフェ 嵯峨野嵐山店 (咖啡廳)
              </Link>
            </ListItem>
            <ListItem className="!text-sm">
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link
                color={"teal.500"}
                href="https://www.google.com/maps?sca_esv=579403293&rlz=1C5CHFA_enTW1003TW1003&sxsrf=AM9HkKmWCaN1bXlSmzOg_eZE89sA_JKp0w:1699086665065&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiGWVYIGNhZmUgS3lvdG8gQXJhc2hpeWFtYQoyBxAjGLADGCcyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsANI1gNQ9AJY9AJwA3gBkAEAmAEAoAEAqgEAuAEDyAEA-AEC-AEB4gMEGAAgQYgGAZAGBg&q=eX+cafe+Kyoto+Arashiyama&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjh0uCS96mCAxWeavUHHSeVD74Q_AUoAXoECAQQAw"
              >
                eX cafe Kyoto Arashiyama (咖啡廳)
              </Link>
            </ListItem>
            <ListItem className="!text-sm">
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link
                color={"teal.500"}
                href="https://www.google.com/maps?q=%E3%81%BE%E3%82%81%E3%82%82%E3%81%AE%E3%81%A8%E3%81%9F%E3%81%84%E7%84%BC%E3%81%8D&rlz=1C5CHFA_enTW1003TW1003&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg90gEHMTA0ajBqNKgCALACAA&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiGgPCs96mCAxXZGogKHZwkBn0Q_AUoAnoECAQQBA"
              >
                (まめものとたい焼き 嵐山本店) (鯛魚燒)
              </Link>
            </ListItem>
            <ListItem className="!text-sm">
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link
                color={"teal.500"}
                href="https://www.google.com/maps?q=%25+ARABICA+%E4%BA%AC%E9%83%BD%E5%B5%90%E5%B1%B1&sca_esv=579403293&rlz=1C5CHFA_enTW1003TW1003&sxsrf=AM9HkKk0zUDezDvdbJZmGMIBrnlsbUeRgw:1699086785428&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiFiUgQVJBQklDQSDkuqzpg73ltZDlsbEyCxAuGIAEGMcBGK8BMgUQABiABDIFEAAYgAQyBhAAGAQYHjIGEAAYBBgeMgYQABgEGB4yCRAAGAQYHhjxBDIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQFI1BhQuwJYtRdwAXgBkAEAmAHMAaABmhKqAQYwLjE0LjG4AQPIAQD4AQHCAgoQABhHGNYEGLADwgINEAAYigUYsQMYgwEYQ8ICBRAAGKIEwgIFECEYoAHiAwQYACBBiAYBkAYKugYGCAEQARgU&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiG7_HG96mCAxXEBogKHQQBDRAQ_AUoAXoECAIQAw"
              >
                % ARABICA (咖啡廳)(有名)
              </Link>
            </ListItem>
            <ListItem className="!text-sm">
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link
                color={"teal.500"}
                href="https://www.google.com/maps?q=%E4%B8%AD%E6%9D%91%E5%B1%8B%E7%B7%8F%E6%9C%AC%E5%BA%97&rlz=1C5CHFA_enTW1003TW1003&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDINCAEQLhivARjHARiABDIGCAIQABgeMgYIAxAAGB4yBggEEAAYHjIGCAUQABgeMggIBhAAGA8YHjIGCAcQABgeMgYICBAAGB6oAgCwAgA&um=1&ie=UTF-8&sa=X&sqi=2&ved=2ahUKEwjj4eTu-KmCAxWW0GEKHelECggQ_AUoAXoECAQQAw"
              >
                中村屋 可樂餅
              </Link>
            </ListItem>
            <ListItem className="!text-sm">
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link
                color={"teal.500"}
                href="https://www.google.com/maps?q=%E5%AF%BA%E5%AD%90%E5%B1%8B%E6%9C%AC%E8%88%97+%E4%BA%AC%E9%83%BD%E5%B5%90%E5%B1%B1&sca_esv=579403293&rlz=1C5CHFA_enTW1003TW1003&sxsrf=AM9HkKk26AU7NA6stry3UYb3lpLQatQ6Tg:1699087198546&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiHOWvuuWtkOWxi-acrOiIlyDkuqzpg73ltZDlsbEyBhAAGAgYHkilFFCBAVjcEnABeAGQAQGYAdkBoAHuD6oBBjAuMTMuMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgUQABiABMICCxAuGIAEGMcBGK8BwgIFEAAYogTCAgUQIRigAcICBBAAGB7CAgYQABgeGA_CAggQABgIGB4YD-IDBBgAIEGIBgGQBgo&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjxks6J-amCAxXVO3AKHYv6AoEQ_AUoAXoECAUQAw"
              >
                Telacoya (團子)
              </Link>
            </ListItem>
          </List>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              嵐山景點資訊
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <List spacing={3}>
            <MiniCard
              imageSrc={Image7}
              viewTitle="天龍寺"
              content={[
                {
                  label: "地址",
                  value: "點我",
                  link: "https://www.google.com/maps?q=%E5%A4%A9%E9%BE%8D%E5%AF%BA+%E4%BA%AC%E9%83%BD&sca_esv=579403293&rlz=1C5CHFA_enTW1003TW1003&sxsrf=AM9HkKnvkFhi-8tBTSUXdsYDf7niYKMlcg:1699087308766&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgDIgrlpKnpvo3lr7ogKgIIADILEC4YrwEYxwEYgAQyBxAAGIoFGEMyBRAAGIAEMgUQABiABDIKEAAYigUYQxiLAzIKEAAYigUYQxiLAzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyGhAuGK8BGMcBGIAEGJcFGNwEGN4EGOAE2AEBSPYMUDdYN3ABeAGQAQCYAeYBoAHmAaoBAzItMbgBA8gBAPgBAcICChAAGEcY1gQYsAPiAwQYACBBiAYBkAYKugYGCAEQARgU&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi3gYq_-amCAxUO_WEKHRZNCOgQ_AUoAXoECAQQAw",
                },
                {
                  label: "營業時間",
                  value: "~1700",
                },
              ]}
            />
            <MiniCard
              imageSrc={Image8}
              viewTitle="竹林の小径"
              content={[
                {
                  label: "地址",
                  value: "點我",
                  link: "https://www.google.com/maps/place/%E5%B5%90%E5%B1%B1+%E7%AB%B9%E6%9E%97%E5%B0%8F%E5%BE%91/@35.0168187,135.6665377,17z/data=!4m10!1m2!2m1!1z56u55p6X44Gu5bCP5b6E!3m6!1s0x6001abebbf5c8bad:0xfb9ffc7bbdd67cdd!8m2!3d35.0168187!4d135.6713013!15sCg_nq7nmnpfjga7lsI_lvoSSAQRwYXJr4AEA!16s%2Fg%2F11bx1hnfm7?entry=ttu",
                },
              ]}
            />
          </List>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              嵐山和服資訊
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <List spacing={3}>
            <MiniCard
              imageSrc={Image9}
              viewTitle={`京都着物レンタル京嵐 嵐山渡月橋店`}
              content={[
                {
                  label: "地址",
                  value: "點我",
                  link: "https://maps.app.goo.gl/GVp8GEucjW1c2Vvc9",
                },
                {
                  label: "時間",
                  value: "2023年11月11日 16:00 JST",
                },
              ]}
            />
          </List>
        </AccordionPanel>
      </AccordionItem>
      {/* <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              京料理鍋料理老店 鳥久(預定20:00)
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
                href="https://www.google.com/maps?q=%E4%BA%AC%E6%96%99%E7%90%86%E9%8D%8B%E6%96%99%E7%90%86%E8%80%81%E5%BA%97+%E9%B3%A5%E4%B9%85&rlz=1C5CHFA_enTW1003TW1003&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBggFEEUYPdIBBzIxNWowajeoAgCwAgA&um=1&ie=UTF-8&sa=X&ved=2ahUKEwji8ary9rGCAxWAbvUHHaPjA0sQ_AUoAXoECAQQAw"
              >
                日本〒605-0071 Kyoto, Higashiyama Ward, 円山公園北林
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              聯絡電話：
              <Link color="teal.500" href="+81 75-561-1717">
                +81755610042
              </Link>
            </ListItem>
            <ListItem>
              {" "}
              <ListIcon as={MdCheckCircle} color="green.500" />
              確認號碼： E53B-8EE3-982C-3984
            </ListItem>
          </List>
        </AccordionPanel>
      </AccordionItem> */}
    </Accordion>
  );
};

export default DayTwo;
