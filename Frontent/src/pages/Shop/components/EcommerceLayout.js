// src/components/EcommerceLayout.jsx
import React, { useState, useEffect } from "react";
import "../style/Shop.css";

// Import your components
import LeftSidebar from "./LeftSideBar";
import TopBar from "./TopBar";
import PromosSection from "./PromosSection";
import BestSellers from "./BestSellers";
import CategoryProducts from "./CategoryProducts";
import CartSidebar from "./CartSidebar";

// Import API calls
import { fetchProducts, fetchCategories } from "../API/index";

const EcommerceLayout = () => {
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0); // "All" by default

  const [priceRange, setPriceRange] = useState(7000);
  const [sortOption, setSortOption] = useState("az");

  const [cartItems, setCartItems] = useState([]);
  const [deliveryOption, setDeliveryOption] = useState("delivery");

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchProducts();
      const categoriesData = await fetchCategories(products);
      setAllProducts(products);
      setCategories(categoriesData);
    };
    fetchData();
  }, []);
  

  // Sorting logic
  useEffect(() => {
    if (!allProducts || allProducts.length === 0) return;

    const sortedProducts = [...allProducts];
    switch (sortOption) {
      case "az":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "lowToHigh":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "highToLow":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setAllProducts(sortedProducts);
  }, [sortOption]);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const onAddToCart = (product) => {
    setCartItems((prevItems) => {
      // Find an existing item with the same ID AND the same weight
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.selectedWeight === product.selectedWeight
      );
  
      if (existingItem) {
        // If the item with the same weight exists, just increase quantity
        return prevItems.map((item) =>
          item.id === existingItem.id && item.selectedWeight === existingItem.selectedWeight
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Otherwise, add a new item with the selected weight
        return [
          ...prevItems,
          {
            ...product,
            quantity: 1,
          },
        ];
      }
    });
  };
  

  const onIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const onDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="ecommerce-layout">
      {/* LEFT COLUMN */}
      <div className="left-column">
        <LeftSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
      </div>

      {/* MIDDLE COLUMN */}
      <div className="middle-column">
        <TopBar />
        <PromosSection />
        {/* Pass the onAddToCart to BestSellers so it can add items to cart */}
        <BestSellers onAddToCart={onAddToCart} />
        {/* Pass the filtered products & onAddToCart to CategoryProducts */}
        <CategoryProducts
          products={allProducts}
          selectedCategory={selectedCategory}
          onAddToCart={onAddToCart}
        />
      </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">
        <CartSidebar
          cartItems={cartItems}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          deliveryOption={deliveryOption}
          setDeliveryOption={setDeliveryOption}
        />
      </div>
    </div>
  );
};

export default EcommerceLayout;
