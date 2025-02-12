  // src/components/BestSellers.jsx
  import React, { useState, useEffect } from "react";
  import "../style/Shop.css";
  import img from "../assets/Kajju.png"; // example image; replace if needed

  const BestSellerCard = ({ product, onAddToCart }) => {
    const [selectedWeight, setSelectedWeight] = useState("250g");
    const [currentPrice, setCurrentPrice] = useState(product.basePrice);

    useEffect(() => {
      if (selectedWeight === "250g") {
        setCurrentPrice(product.basePrice);
      } else if (selectedWeight === "500g") {
        setCurrentPrice(product.basePrice * 2);
      } else if (selectedWeight === "1kg") {
        setCurrentPrice(product.basePrice * 4);
      }
    }, [selectedWeight, product.basePrice]);

    const handleWeightChange = (weight) => {
      setSelectedWeight(weight);
    };

    return (
      <div className="best-seller-card">
        <div className="card-image">
          <img src={product.image} alt={product.name} />
          <button
            className="add-btn"
            onClick={() =>
              onAddToCart({
                ...product,
                // Optionally pass selectedWeight to the cart
                weightOptions: [selectedWeight],
                price: currentPrice,
              })
            }
          >
            Add
          </button>
        </div>
        <div className="product-name">{product.name}</div>
        <div className="product-price">₹{currentPrice}</div>
        <div className="weight-options">
          {["250g", "500g", "1kg"].map((weight) => (
            <button
              key={weight}
              onClick={() => handleWeightChange(weight)}
              className={selectedWeight === weight ? "selected" : ""}
            >
              {weight}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const BestSellers = ({ onAddToCart }) => {
    // Sample static best sellers data
    const products = [
      { id: 1, name: "Chocolate Cake", image: img, basePrice: 1000 },
      { id: 2, name: "Vanilla Cupcake", image: img, basePrice: 300 },
      { id: 3, name: "Strawberry Shortcake", image: img, basePrice: 1500 },
      { id: 4, name: "Lemon Drizzle Cake", image: img, basePrice: 1000 },
      { id: 5, name: "Red Velvet Cake", image: img, basePrice: 1200 },
      { id: 6, name: "Carrot Cake", image: img, basePrice: 1000 },
      { id: 7, name: "Banana Cake", image: img, basePrice: 800 },
      { id: 8, name: "Cheesecake", image: img, basePrice: 2000 },
    ];

    return (
      <div className="best-sellers">
        <h2>Best Sellers</h2>
        <div className="horizontal-scroll">
          {products.map((product) => (
            <BestSellerCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    );
  };

  export default BestSellers;
