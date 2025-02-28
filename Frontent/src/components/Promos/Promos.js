import React, { useState, useEffect } from "react";
import "./Promos.css";
import image1 from "../assets/delievery.png";
import image2 from "../assets/discount.png";
import image3 from "../assets/offers.png";
import separator from "../assets/lines.png"; // Add your decorative image

const Promos = () => {
  const promos = [
    {
      id: 1,
      title: "Free Delivery",
      description: "On orders above ₹250",
      image: image1,
    },
    {
      id: 2,
      title: "Festive Discounts",
      description: "Use Code: SIGNUP10",
      image: image2,
    },
    {
      id: 3,
      title: "Buy 1 Get 1 Free",
      description: "Use Code: COMBO11",
      image: image3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNextSlide = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promos.length);
      setIsSliding(false);
    }, 500); // Smooth transition time
  };

  return (
    <div className="promos-container-Home">
      <h2 className="slider-title-Home">Promos</h2>
      <img src={separator} alt="Decoration" className="cards-separator-promo" />

      <div className={`promo-card-Home ${isSliding ? "slide-animation-Home" : ""}`}>
  <img
    src={promos[currentIndex].image}
    alt={promos[currentIndex].title}
    className={`promo-sticker-Home promo-sticker-Home-${currentIndex + 1}`} // Dynamically add a class based on index
  />
  <h3 className={`promo-title-Home-${currentIndex + 1}`}>{promos[currentIndex].title}</h3>
  <p className="promo-description-Home">{promos[currentIndex].description}</p>
</div>
    </div>
  );
};

export default Promos;
