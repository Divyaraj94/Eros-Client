import React from "react";
import Slider from "./Slider/Slider";
import Section from "./Section/Section";
import Our_Collection from "./Our_Collections/Our_Collections";
import Info from "./Info/Info";
import Cards from "./cards/Cards";
import Promos from "./Promos/Promos";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Info />
      <Cards />
      <Promos />
      <Section />
      <Our_Collection />
    </>
  );
};

export default HomePage;
