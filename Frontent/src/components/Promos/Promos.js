import React, { useState, useEffect } from "react";
import "./Promos.css";
import image1 from "../assets/discount.png";
import image2 from "../assets/delievery.png";
import image3 from "../assets/offers.png";

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
      description: "Up to 50% off this season",
      image: image2,
    },
    {
      id: 3,
      title: "Buy 1 Get 1 Free",
      description: "On select items",
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

  const handleDotClick = (index) => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsSliding(false);
    }, 500);
  };

  return (
    <div className="promos-container-Home">
      <h2 className="slider-title-Home">Promos</h2>

      <div className={`promo-card-Home ${isSliding ? "slide-animation-Home" : ""}`}>
  <img
    src={promos[currentIndex].image}
    alt={promos[currentIndex].title}
    className={`promo-sticker-Home promo-sticker-Home-${currentIndex + 1}`} // Dynamically add a class based on index
  />
  <h3 className="promo-title-Home">{promos[currentIndex].title}</h3>
  <p className="promo-description-Home">{promos[currentIndex].description}</p>
</div>


      {/* Dots below the card */}
      <div className="dots1">
        {promos.map((_, index) => (
          <span
            key={index}
            className={`dot1 ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Promos;
