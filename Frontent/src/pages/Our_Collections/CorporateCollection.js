import React, { useEffect, useState } from "react";
import "./CorporateCollection.css";
import SweetBannerImage from "../assets/sweet.png";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";

const CorporateCollection = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [selectedSort, setSelectedSort] = useState(""); // Sorting filter

  const location = useLocation();

  useEffect(() => {
    fetchProducts(); // Fetch products on component mount
  }, []);

  useEffect(() => {
    applySorting(); // Apply sorting whenever the selectedSort changes
  }, [selectedSort, products]); // Dependencies: selectedSort and products

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/product");
      console.log("Fetched Products:", response.data); // Debugging
      setProducts(response.data);
      setSortedProducts(response.data); // Default to fetched products
    } catch (error) {
      console.error("Error fetching products:", error.response || error.message);
    }
  };

  const applySorting = () => {
    let sorted = [...products];

    // Alphabetical Sorting
    if (selectedSort === "alphabetical-asc") {
      sorted.sort((a, b) => (a.ProductName || "").localeCompare(b.ProductName || ""));
    } else if (selectedSort === "alphabetical-desc") {
      sorted.sort((a, b) => (b.ProductName || "").localeCompare(a.ProductName || ""));
    }

    // Price Sorting (Handle string prices with potential non-numeric values)
    if (selectedSort === "price-low-high") {
      sorted.sort((a, b) => {
        const priceA = parseFloat(a.Price) || 0; // Default invalid or missing prices to 0
        const priceB = parseFloat(b.Price) || 0;
        return priceA - priceB;
      });
    } else if (selectedSort === "price-high-low") {
      sorted.sort((a, b) => {
        const priceA = parseFloat(a.Price) || 0;
        const priceB = parseFloat(b.Price) || 0;
        return priceB - priceA;
      });
    }

    setSortedProducts(sorted);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value); // Update sorting selection
  };

  return (
    <div className="corporate-collection">
      {/* Dynamic Breadcrumb */}
      <div className="breadcrumb">
        <NavLink to="/">Home</NavLink>
        {location.pathname.split("/").map((path, index) => (
          <span key={index}>
            {" / "}
            <NavLink to={`/${path}`}>{path.replace("-", " ")}</NavLink>
          </span>
        ))}
      </div>

      {/* Banner Section */}
      <div className="SweetBanner">
        <img src={SweetBannerImage} alt="Corporate Collection Banner" />
      </div>

      {/* Total Product Count */}
      <div className="product-count">
        <h2>Products: {sortedProducts.length}</h2>
      </div>

      {/* Content Wrapper */}
      <div className="content-wrapper">
        {/* Filter Sidebar */}
        <div className="filter-sidebar">
          <h4 className="filter-title">Filter</h4>

          {/* Sort-by Section */}
          <div className="filter-section">
            <h5 className="filter-subtitle">Sort by</h5>
            <ul className="filter-list">
              <li>
                <input
                  type="radio"
                  name="sort"
                  value="alphabetical-asc"
                  checked={selectedSort === "alphabetical-asc"}
                  onChange={handleSortChange}
                />{" "}
                Alphabetically, A - Z
              </li>
              <li>
                <input
                  type="radio"
                  name="sort"
                  value="alphabetical-desc"
                  checked={selectedSort === "alphabetical-desc"}
                  onChange={handleSortChange}
                />{" "}
                Alphabetically, Z - A
              </li>
              <li>
                <input
                  type="radio"
                  name="sort"
                  value="price-low-high"
                  checked={selectedSort === "price-low-high"}
                  onChange={handleSortChange}
                />{" "}
                Price, Low to High
              </li>
              <li>
                <input
                  type="radio"
                  name="sort"
                  value="price-high-low"
                  checked={selectedSort === "price-high-low"}
                  onChange={handleSortChange}
                />{" "}
                Price, High to Low
              </li>
            </ul>
          </div>
        </div>

        {/* Product Grid */}
        <div className="main-content">
          <div className="product-grid">
            {sortedProducts && sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <div key={product._id} className="product-card">
                  <img
                    src={product.ProductImage}
                    alt={product.ProductName}
                    className="product-image"
                  />
                  <h5 className="product-name">{product.ProductName}</h5>
                  <p className="product-price">₹{product.Price}</p>
                  <button className="view-details-button">View Details</button>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateCollection;
