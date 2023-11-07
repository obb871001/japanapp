import React from "react";
import MainCarousel from "../../components/mainCarousel";
import { Divider } from "@chakra-ui/react";
import Selection from "../../components/selection";
import Content from "./components/content";

const Home = () => {
  return (
    <section className="px-common-padding-x">
      <div className="py-common-padding-y">
        <MainCarousel />
      </div>
      <Divider />
      <div className="py-common-padding-y">
        <Selection />
      </div>
      <Divider />
      <div className="py-common-padding-y">
        <Content />
      </div>
    </section>
  );
};

export default Home;
