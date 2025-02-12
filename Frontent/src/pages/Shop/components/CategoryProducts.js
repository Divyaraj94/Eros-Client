// src/components/CategoryProducts.jsx
import React, { useState, useEffect } from "react";
import "../style/Shop.css";

const CategoryProducts = ({ products, selectedCategory, onAddToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (selectedCategory === 0) {
      setFilteredProducts(products || []);
    } else {
      const filtered = (products || []).filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [products, selectedCategory]);

  if (!filteredProducts || filteredProducts.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className="category-1">
      {filteredProducts.slice(0, 2).map((product) => (
        <div key={product.id} className="product-card-rect">
          <div className="product-image-rect">
            <img src={product.image} alt={product.name} />
            <button className="addToCart" onClick={() => onAddToCart(product)}>
              Add
            </button>
          </div>
          <div className="product-details-rect">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            {product.weightOptions && (
              <div className="weight-options">
                {product.weightOptions.map((weight) => (
                  <button key={weight}>{weight}</button>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryProducts;
