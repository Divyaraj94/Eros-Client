// import React from "react";
// import "./cards.css";
// import img1 from "../assets/Kajju.png";
// import img2 from "../assets/Kajju.png";
// import img3 from "../assets/Kajju.png";
// import img4 from "../assets/Kajju.png";
// import img5 from "../assets/Kajju.png";
// import img6 from "../assets/Kajju.png";

// const Cards = () => {
//   const products = [
//     { id: 1, image: img1, title: "Sweets" },
//     { id: 2, image: img2, title: "Namkeens" },
//     { id: 3, image: img3, title: "Dry Fruits" },
//     { id: 4, image: img4, title: "Bakery" },
//     { id: 5, image: img5, title: "Chocolates" },
//     { id: 6, image: img6, title: "Others" },
//   ];

//   return (
//     <section className="cards-featured-products">
//       <h2 className="cards-title">Our Products</h2>
//       <div className="cards-products-container">
//         {products.map((product) => (
//           <div key={product.id} className="cards-product-card">
//             <img src={product.image} alt={product.title} />
//             <h3 className="cards-product-title">{product.title}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Cards;


import React, { useEffect, useState } from "react";
import "./cards.css";

const Cards = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the backend API
    fetch("http://localhost:4000/cat2") // Assuming your backend is running on localhost:5000
      .then((response) => response.json())
      .then((data) => {
        // Ensure only the first 6 categories are displayed
        setCategories(data); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="cards-featured-products">
      <h2 className="cards-title">Our Products</h2>
      <div className="cards-products-container">
        {categories.map((category) => (
          category.name === "Corporate_Collection"? null :
          <div key={category._id} className="cards-product-card">
            <img src={category.image} alt={category.name} />
            <h3 className="cards-product-title">{category.name}</h3>
          </div>
        
        ))}
      </div>
    </section>
  );
};

export default Cards;

