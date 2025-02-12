// src/components/PromosSection.jsx
import React from "react";
import "../style/Shop.css";

const PromosSection = () => {
  return (
    <div className="promos-section">
      <div className="promo-card">
        <div className="sticker">15% OFF</div>
        <p>On all combos</p>
        <small>Use Code: COMBO</small>
      </div>
      <div className="promo-card">
        <div className="sticker">10% OFF</div>
        <p>On First Order</p>
        <small>Use Code: SWEET10</small>
      </div>
      <div className="promo-card">
        <div className="sticker">Free Delivery</div>
        <p>On orders above ₹250</p>
      </div>
    </div>
  );
};

export default PromosSection;
