import { Splide, SplideSlide } from "@splidejs/react-splide";
import { homeCarouselList } from "../helpers/homeCarouselList";

const MainCarousel = () => {
  return (
    <Splide
      className="h-full w-full"
      options={{
        type: "loop",
        perPage: 2,
        gap: 30,
        autoplay: true,
        arrows: false,
        breakpoints: {
          640: {
            perPage: 1,
          },
          768: {
            perPage: 2,
          },
          1024: {
            perPage: 2,
          },
        },
      }}
    >
      {homeCarouselList.map((list, index) => {
        return (
          <SplideSlide key={index}>
            <img
              src={list.image}
              alt=""
              className="h-[200px] w-full object-cover rounded-[5px]"
            />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default MainCarousel;
