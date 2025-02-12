// src/components/TopBar.jsx
import React from "react";
import "../style/Shop.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="info-box">
        <p>Location: Bandra Kurla Complex, Mumbai</p>
        <p>Rating: ★★★★☆</p>
        <p>Status: Open</p>
        <div className="icons">
          <i className="icon">Icon1</i>
          <i className="icon">Icon2</i>
          <i className="icon">Icon3</i>
        </div>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search products..." />
      </div>
    </div>
  );
};

export default TopBar;