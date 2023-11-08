import React from "react";
import PageHeader from "../../components/pageHeader";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link,
  Divider,
  Tab,
  TabList,
  Switch,
} from "@chakra-ui/react";
import { foodList } from "./food";
import GoogleMapReact from "google-map-react";
import { PiMapPinFill } from "react-icons/pi";
import { Image } from "@chakra-ui/react";

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 17,
};
const type = [
  { label: "全部", value: "all" },
  { label: "定食", value: "setMeal" },
  { label: "燒肉", value: "bbq" },
  { label: "拉麵", value: "raman" },
  { label: "壽司", value: "sushi" },
  { label: "咖啡廳/甜點", value: "coffee" },
  { label: "榻榻米系列", value: "tatami" },
  { label: "鰻魚", value: "manfish" },
  { label: "鍋物", value: "hotpot" },
  { label: "居酒屋/炸串", value: "fry" },
];
const SearchFood = () => {
  const [active, setActive] = React.useState(type[0].value);
  const [toggleImage, setToggleImage] = React.useState(false);
  return (
    <section className="fixed top-0 left-0 w-full h-full bg-common-bg z-[9999] overflow-y-scroll">
      <PageHeader title="搜尋美食" />{" "}
      <section className="flex flex-wrap items-center gap-[10px] my-[10px] px-common-padding-x">
        {type.map((item) => {
          return (
            <div
              onClick={() => {
                setActive(item.value);
              }}
              className={`px-[15px] py-[5px] rounded-full border ${
                active === item.value ? "text-white bg-green-300" : ""
              }`}
            >
              {item.label}
            </div>
          );
        })}
      </section>
      <section className="flex items-center justify-end my-[10px] px-common-padding-x">
        <div>
          <span>顯示圖片</span>
          <Switch
            checked={toggleImage}
            onChange={() => {
              setToggleImage(!toggleImage);
            }}
            size="md"
          />
        </div>
      </section>
      <section>
        <Accordion allowToggle>
          {foodList
            ?.filter((item) => {
              if (active === "all") {
                return item;
              } else {
                return item.type === active;
              }
            })
            .map((list) => {
              return (
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        {list.label}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    {toggleImage && (
                      <section>
                        <Image
                          loading="lazy"
                          className="rounded-[5px] mx-auto w-[300px] my-[10px] h-[200px]"
                          src={list.img}
                          alt={list.label}
                        />
                      </section>
                    )}
                  </h2>
                  <AccordionPanel pb={4}>
                    <div className="flex flex-col gap-[10px] items-center">
                      {!toggleImage && (
                        <Image
                          loading="lazy"
                          className="rounded-[5px] mx-auto w-[300px] h-[200px]"
                          src={list.img}
                          alt={list.label}
                        />
                      )}
                      <Link color="teal.500" href={list?.link}>
                        地址點我
                      </Link>
                    </div>
                    <Divider className="my-[10px]" />
                    <section className="h-[300px]">
                      <GoogleMapReact
                        bootstrapURLKeys={{
                          key: process.env.REACT_APP_GOOGLE_KEY,
                        }}
                        defaultCenter={{
                          lat: list?.lat,
                          lng: list?.lng,
                        }}
                        defaultZoom={defaultProps?.zoom}
                      >
                        <PiMapPinFill
                          lat={list?.lat}
                          lng={list?.lng}
                          className="text-3xl text-red-500"
                        />
                      </GoogleMapReact>
                    </section>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
        </Accordion>
      </section>
    </section>
  );
};

export default SearchFood;
