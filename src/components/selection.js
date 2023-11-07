import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { PiForkKnifeFill } from "react-icons/pi";
import { MdTravelExplore } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Selection = () => {
  const navigate = useNavigate();
  return (
    <Splide
      options={{
        pagination: false,
        arrows: false,
        drag: "free",
        perPage: 6,
        perMove: 1,
        gap: 10,
        lazyLoad: "nearby",
        dragMinThreshold: {
          mouse: 0,
          touch: 10,
        },
      }}
    >
      <SplideSlide>
        <div
          onClick={() => {
            navigate("search-food");
          }}
          className="rounded-[5px] bg-white flex flex-col p-[5px] items-center justify-center text-green-500 h-[50px]"
        >
          <PiForkKnifeFill className="text-2xl" />
          <span className="text-sm">Food</span>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="rounded-[5px] bg-white flex flex-col p-[5px] items-center justify-center text-green-500 h-[50px]">
          <MdTravelExplore className="text-2xl" />
          <span className="text-sm text-overflow w-full">Viewpoint</span>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div
          onClick={() => {
            navigate("exchange");
          }}
          className="rounded-[5px] bg-white flex flex-col p-[5px] items-center justify-center text-green-500 h-[50px]"
        >
          <BiTransferAlt className="text-2xl" />
          <span className="text-sm text-overflow w-full">Exchange Rate</span>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Selection;
