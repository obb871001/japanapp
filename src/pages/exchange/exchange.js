import React, { useEffect, useMemo, useState } from "react";
import {
  MdFastfood,
  MdOutlineKeyboardArrowLeft,
  MdRemoveShoppingCart,
  MdShoppingBag,
} from "react-icons/md";

import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/pageHeader";
import axios from "axios";
import dayjs from "dayjs";
import {
  Button,
  Divider,
  Input,
  NumberInput,
  NumberInputField,
  Text,
} from "@chakra-ui/react";
import { BiTransferAlt } from "react-icons/bi";
import { FaCarAlt, FaShoppingCart, FaTrain, FaTshirt } from "react-icons/fa";

const IconWrapper = ({ children, backgroundColor, setSaveData, name }) => {
  return (
    <div
      onClick={() => {
        setSaveData((prev) => {
          return {
            ...prev,
            icon: name,
          };
        });
      }}
      className={`${backgroundColor} bg-gray-200 w-[35px] h-[35px] text-lg shadow text-white rounded-full flex items-center justify-center`}
    >
      {children}
    </div>
  );
};

const Exchange = () => {
  const navigate = useNavigate();

  const [rate, setRate] = useState({});

  const [currencyValue, setCurrencyValue] = useState(0);
  const [direction, setDirection] = useState("toTWD");
  const [list, setList] = useState([]);
  const [saveData, setSaveData] = useState({
    icon: "",
  });

  useEffect(() => {
    axios
      .get("https://api.finmindtrade.com/api/v3/data", {
        params: {
          dataset: "TaiwanExchangeRate",
          data_id: "JPY",
          date: dayjs().format("YYYY-MM-DD"),
        },
      })
      .then((res) => {
        setRate(res?.data?.data?.[0]);
      });
  }, []);

  const resultCurrency = useMemo(() => {
    if (direction === "toTWD") {
      return currencyValue * rate?.cash_buy;
    }
    return currencyValue / rate?.cash_sell;
  }, [direction, currencyValue]);

  useEffect(() => {
    setSaveData({
      ...saveData,
      currency:
        direction === "toTWD"
          ? currencyValue * rate?.cash_buy
          : currencyValue || 0,
    });
  }, [resultCurrency]);

  const listTotal = useMemo(() => {
    return list?.reduce((acc, cur) => {
      return acc + cur.currency;
    }, 0);
  }, [list]);

  return (
    <section className="fixed top-0 left-0 w-full h-full bg-common-bg z-[9999] overflow-y-scroll">
      <PageHeader title="匯率轉換" />{" "}
      <section className="py-common-padding-y px-common-padding-x">
        <div className="bg-white rounded-[7px] py-common-padding-y px-common-padding-x flex flex-col gap-[5px]">
          <span>{dayjs().format("YYYY-MM-DD")}-匯率轉換</span>
          <Divider />
          <div className="flex flex-col gap-[5px]">
            <span>目前日幣匯率：</span>
            <span>買入：{rate?.cash_buy || 0.0}</span>
            <span>賣出：{rate?.cash_sell || 0.0}</span>
          </div>
          <Divider className="!mb-[10px]" />
          <div className="flex items-center gap-[10px] justify-between">
            <Text fontSize={`sm`}>
              請輸入{direction === "toTWD" ? "日圓" : "台幣"}(
              {direction === "toTWD" ? "¥" : "$"})
            </Text>
            <NumberInput
              value={currencyValue || 0}
              onChange={(_, v) => {
                if (direction === "toTWD") {
                  setCurrencyValue(v);
                } else {
                  setCurrencyValue(v);
                }
              }}
              size={`sm`}
              min={0}
            >
              <NumberInputField />
            </NumberInput>
          </div>
          <div className="flex items-center justify-center text-green-500 text-2xl cursor-pointer my-[5px]">
            <BiTransferAlt
              onClick={() => {
                setDirection(direction === "toTWD" ? "toJPY" : "toTWD");
              }}
              className={`${
                direction === "toTWD" ? "rotate-[270deg]" : "rotate-[90deg]"
              } transition duration-300`}
            />
          </div>
          <div className="flex items-center gap-[10px] justify-between">
            <Text fontSize={`sm`}>
              換算成{direction === "toTWD" ? "台幣" : "日圓"}為(
              {direction === "toTWD" ? "$" : "¥"})
            </Text>
            <NumberInput
              isReadOnly
              value={isNaN(resultCurrency) ? 0 : resultCurrency}
              size={`sm`}
              min={0}
            >
              <NumberInputField />
            </NumberInput>
          </div>
          <Divider />
          <div className="flex items-center gap-[10px] justify-between my-[10px]">
            <Text fontSize={`sm`}>消費種類：</Text>
            <section className="flex items-center gap-[8px]">
              <IconWrapper
                name="food"
                setSaveData={setSaveData}
                backgroundColor={saveData?.icon === "food" && "!bg-yellow-500"}
              >
                <MdFastfood />
              </IconWrapper>
              <IconWrapper
                name="shopping"
                setSaveData={setSaveData}
                backgroundColor={
                  saveData?.icon === "shopping" && "!bg-green-500"
                }
              >
                <FaShoppingCart />
              </IconWrapper>
              <IconWrapper
                name="train"
                setSaveData={setSaveData}
                backgroundColor={saveData?.icon === "train" && "!bg-purple-500"}
              >
                <FaTrain />
              </IconWrapper>
              <IconWrapper
                name="shirt"
                setSaveData={setSaveData}
                backgroundColor={saveData?.icon === "shirt" && "!bg-blue-500"}
              >
                <FaTshirt />
              </IconWrapper>
            </section>
          </div>
          <div className="my-[10px]">
            <Button
              type="button"
              className="w-full"
              colorScheme="teal"
              size="md"
              isDisabled={!saveData?.icon || !saveData?.currency}
              onClick={() => {
                setList((prev) => {
                  return [...prev, saveData];
                });
                setSaveData({
                  icon: "",
                  currency: 0,
                });
                setCurrencyValue(0);
              }}
            >
              +
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-[7px] py-common-padding-y px-common-padding-x flex flex-col gap-[5px] mt-[20px]">
          <div className="flex items-center justify-between">
            <Text fontSize="sm">購物清單(案上一頁清單就會不見)</Text>
            {list?.length > 0 && <Text fontSize="sm">總計：{listTotal}$</Text>}
          </div>
          <Divider />
          <section className="flex flex-col gap-[10px]">
            {list.length === 0 ? (
              <section className="h-[150px] flex items-center justify-center flex-col gap-[10px] text-xl text-gray-300">
                <MdRemoveShoppingCart className="text-3xl" />
                <span>清單是空的</span>
              </section>
            ) : (
              list?.map((item) => {
                const transferName = (name) => {
                  switch (name) {
                    case "food":
                      return "食物";
                    case "shopping":
                      return "購物";
                    case "train":
                      return "交通";
                    case "shirt":
                      return "衣服";
                    default:
                      return "未知";
                  }
                };
                return (
                  <div className="flex items-center justify-between">
                    <span>{transferName(item.icon)}</span>
                    <span>{item.currency} $</span>
                  </div>
                );
              })
            )}
          </section>
        </div>
      </section>
    </section>
  );
};

export default Exchange;
