import React from "react";
import "./BestSeller.css";
import img1 from "../assets/Exotica.png";
import separator from "../assets/lines.png"; // Add your decorative image

const BestSeller = () => {
  const products = [
    { id: 1, image: img1, title: "Exotica" },
    { id: 2, image: img1, title: "Exotica" },
    { id: 3, image: img1, title: "Exotica" },
    { id: 4, image: img1, title: "Exotica" },
    { id: 5, image: img1, title: "Exotica" },
    { id: 6, image: img1, title: "Exotica" },
    { id: 7, image: img1, title: "Exotica" },
    { id: 8, image: img1, title: "Exotica" },
    { id: 9, image: img1, title: "Exotica" },
    { id: 10, image: img1, title: "Exotica" },
  ];

  return (
    <div>
      <section className="featured-products-BestSeller">
        <h2>BEST SELLER</h2>
        <img src={separator} alt="Decoration" className="heading-separator" />
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
