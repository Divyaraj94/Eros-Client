import React from "react";
import Slider from "./Slider/Slider";
import Hygen from "./Hygen/Hygen";
import Card from "./cards/Card";
import Section from "./Section/Section";
import Our_Collection from "./Our_Collections/Our_Collections";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Hygen />
      <Card />
      <Section />
      <Our_Collection />
    </>
  );
};

export default HomePage;
