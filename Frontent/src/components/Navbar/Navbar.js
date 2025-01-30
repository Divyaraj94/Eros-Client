import "./Navbar.css";
import { NavLink } from "react-router-dom";
import img1 from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [menuName, setMenuName] = useState("fa-solid fa-bars");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Display = () =>   {
    if (menuName === "fa-solid fa-bars") {
      let menu = document.querySelector("#nav");
      menu.style.display = "flex";
      setMenuName("fa-solid fa-xmark");
    } else {
      let menu = document.querySelector("#nav");
      menu.style.display = "none";
      setMenuName("fa-solid fa-bars");
    }
  };

  const handleBulkInquiryClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className='offers'>
      <h4>FREE Shipping now available on all orders over 1 KG!</h4>
    </div>
      <header className="header">
        <div className="logo">
          <img src={img1} alt="logo" />
        </div>
        <div className="menu-bar">
          <i className={menuName} id="menu-btn" onClick={Display}></i>
        </div>
        <ul className="nav-link" id="nav">
  <NavLink to="/">Home</NavLink>
  <li className="dropdown">
    <NavLink to="/shop" className="drop-btn">
      Shop
    </NavLink>
    <div className="dropdown-menu">
      <div className="left">
        <NavLink to="/all">All</NavLink>
        <NavLink to="/sweets">Sweets</NavLink>
        <NavLink to="/namkeen">Namkeens</NavLink>
        <NavLink to="/dry-friuts">Dry Fruits</NavLink>
      </div>
      <div className="right">
        <NavLink to="/bakery">Bakery</NavLink>
        <NavLink to="/chocolate">Chocolate</NavLink>
        <NavLink to="/others">Others</NavLink>
      </div>
    </div>
  </li>
  <li className="dropdown">
    <NavLink to="/corporate" className="dropdown-btn">
      Corporate
    </NavLink>
  </li>
  <NavLink to="/about">About us</NavLink>
  <NavLink to="/contact">Contact us</NavLink>
  {/* Keep "Bulk Inquiry" styled like a NavLink but not route to a path */}
  <li>
    <a
      className="bulk-inquiry"
      onClick={handleBulkInquiryClick}
      style={{ cursor: "pointer" }}
    >
      Bulk Inquiry
    </a>
  </li>
</ul>

        <div className="icon">
          <NavLink to="/">
            <i className="fa-solid fa-magnifying-glass"></i>
          </NavLink>
          <NavLink to="/">
            <i className="fa-solid fa-bag-shopping"></i>
          </NavLink>
          <NavLink to="/">
            <i className="fa-regular fa-user" id="user"></i>
          </NavLink>
        </div>
      </header>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="bulk-overlay">
  <div className="bulk-modal">
    <i
      className="fa-solid fa-xmark close-icon"
      onClick={closeModal}
    ></i>
    <h3>Bulk Inquiry</h3>
    <p>Thank you for your interest! You can contact our agency using the information below:</p>
    <div className="agent-info">
      <i className="fa-solid fa-phone"></i> <span>123-456-7890</span>
    </div>
    <a
      href="https://wa.me/918511238725?text=Hello%20Tu%20Noob%20Hai%20TUje%20Nahi%20pata%20par%20Tu%20Hai"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      Contact on WhatsApp
    </a>
  </div>
</div>

      )}
    </>
  );
};

export default Navbar;
