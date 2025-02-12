import React from "react";
import Slider from "./Slider/Slider";
import Section from "./Section/Section";
import Our_Collection from "./Our_Collections/Our_Collections";
import Info from "./Info/Info";
import Cards from "./cards/Cards";
import Promos from "./Promos/Promos";
import Testimonials from "./Testimonials/Testimonials";
import BestSeller from "./BestSellers/BestSeller";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Info />
      <Cards />
      <Promos />
      <Section />
      <Testimonials />
      <BestSeller />
      {/* <Our_Collection /> */}
    </>
  );
};

export default HomePage;
