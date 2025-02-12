import React from "react";
import "./BestSeller.css";
import img1 from "../assets/Kajju.png";
import img2 from "../assets/Kajju.png";
import img3 from "../assets/Kajju.png";
import img4 from "../assets/Kajju.png";
import img5 from "../assets/Kajju.png";
import img6 from "../assets/Kajju.png";
import img7 from "../assets/Kajju.png";
import img8 from "../assets/Kajju.png";

const BestSeller = () => {
  const products = [
    { id: 1, image: img1, title: "Biscoff Cheese Cake" },
    { id: 2, image: img2, title: "Forrero rocher Cake" },
    { id: 3, image: img3, title: "BlueBerry Cake" },
    { id: 4, image: img4, title: "Fruit Cake" },
    { id: 4, image: img5, title: "Pinata Cake" },
    { id: 4, image: img6, title: "Chocolate drip Cake" },
    { id: 4, image: img7, title: "Rasmalai Cake" },
    { id: 4, image: img8, title: "Theme cake" },
  ];

  return (
    <div>
      <section className="featured-products-BestSeller">
        <h2>Best Seller</h2>
        <div className="products-container">
          {products.map((product) => (
            <div key={product.id} className="product-card-BestSeller">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
            </div>
          ))}
        </div>
      </section>
      <div className="like">
        <div className="heading">
          <h2>Like Our Products ?</h2>
          <p>Treat yourself to your favourite Eros products or surprise your loved ones with an edible gift.</p>
          <button>Know more </button>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
