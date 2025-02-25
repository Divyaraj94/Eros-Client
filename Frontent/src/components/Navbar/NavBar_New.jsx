import React, { useState } from "react";
import "./buttons.css";
import "./Navbar_New.css";
import Logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { LuCircleArrowOutDownLeft } from "react-icons/lu";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
// import Location_icon from '../assets/address_location_icon.png'
// import Phone_icon from '../assets/phone_icon.png'
// import Mail_icon from '../assets/mail_icon.png'
// import Facebook_icon from '../assets/facebook_icon.png'
// import Instagram_icon from '../assets/instagram_icon.png'
// import Twitter_icon from '../assets/twitter_icon.png'
// import productImg from '../assets/cake_img.png'
import no_results_found_png from "../assets/logo.png";

const NavBar_Footer = () => {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [responsiveNavbarClasses, setResponsiveNavbarClasses] = useState(
    "hide responsive_navbar"
  );
  const closeNavbarOnRoute = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setResponsiveNavbarClasses("hide responsive_navbar");
    } else {
      setResponsiveNavbarClasses("responsive_navbar");
    }
  };

  // whatApp

  const [showModal, setShowModal] = useState(false);

  const [showProducts, setShowProducts] = useState(false);

  return (
    <>
      <div className="offer_section">
        FREE Shipping now available on all orders over 1 KG!
      </div>

      {/* Navbar  */}
      <div className="sticky_div">
        <div className="navbar">
          <div className="navbar_logo">
            <img
              src={Logo}
              alt=""
              onClick={() => {
                navigate("/");
                ScrollToTop();
              }}
            />
          </div>



          <div className="login_signup_button_navbar">
          <div className="navbar_links">
            <NavLink
              to="/"
              onClick={() => {
                ScrollToTop();
              }}
              className="link"
            >
              HOME
            </NavLink>
            <NavLink
              to="/shop"
              onClick={() => {
                ScrollToTop();
              }}
              className="link"
            >
              ABOUT US
            </NavLink>
{/* PRODUCTS Dropdown with Full Menu */}
<div 
        className="dropdown-wrapper"
        onMouseEnter={() => setShowProducts(true)}
        onMouseLeave={() => setShowProducts(false)}
      >
        <NavLink to="/corporate" className="link">PRODUCTS</NavLink>
        {showProducts && (
          <div className="dropdown-menu">
            <div className="dropdown-column">
              <NavLink to="/category/all" className="dropdown-item">All</NavLink>
              <NavLink to="/category/sweets" className="dropdown-item">Sweets</NavLink>
              <NavLink to="/category/namkeens" className="dropdown-item">Namkeens</NavLink>
              <NavLink to="/category/dryfruits" className="dropdown-item">Dry Fruits</NavLink>
              <NavLink to="/category/bakery" className="dropdown-item">Bakery</NavLink>
              <NavLink to="/category/others" className="dropdown-item">Others</NavLink>
            </div>
            <div className="dropdown-column">
              <NavLink to="/category/bakery" className="dropdown-item">Bakery</NavLink>
              <NavLink to="/category/chocolates" className="dropdown-item">Chocolates</NavLink>
              <NavLink to="/category/others" className="dropdown-item">Others</NavLink>
              <NavLink to="/category/others" className="dropdown-item">Others</NavLink>
            </div>
            <div className="dropdown-column">
              <NavLink to="/category/bakery" className="dropdown-item">Bakery</NavLink>
              <NavLink to="/category/chocolates" className="dropdown-item">Chocolates</NavLink>
              <NavLink to="/category/others" className="dropdown-item">Others</NavLink>
              <NavLink to="/category/others" className="dropdown-item">Others</NavLink>
            </div>
            <div className="dropdown-column">
              <NavLink to="/category/others" className="dropdown-item">Others</NavLink>
              <NavLink to="/category/others" className="dropdown-item">Others</NavLink>
            </div>
          </div>
        )}
      </div>
            <NavLink
              to="/about"
              onClick={() => {
                ScrollToTop();
              }}
              className="link"
            >
              CORPORATE GIFTING
            </NavLink>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowModal(true);
              }}
              className="link"
            >
              BULK INQUIRY
            </a>

            {/* <NavLink to='/blog' className={location.pathname==='/blog'?'link_active link':'link'}>Blog</NavLink> */}
            <NavLink
              to="/contact"
              onClick={() => {
                ScrollToTop();
              }}
              className="link"
            >
              CONTACT US
            </NavLink>
          </div>
            <button id="Search" onClick={() => navigate("/online")}>
              SEARCH <FaSearch style={{ marginLeft: "5px" }} />
            </button>
            <button id="login_button" onClick={() => navigate("/online")}>
              ORDER ONLINE
            </button>
            <LuCircleArrowOutDownLeft id="circle-arrow" />
          </div>

          {/* Bulk Inquiry Modal */}
          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>Bulk Inquiry</h2>
                <p className="contact-number">
                  📞 Call Us: <strong>+91 98765 43210</strong>
                </p>

                <a
                  href="https://wa.me/916354668920?text=Hello%2C%20I%20am%20interested%20in%20bulk%20inquiry."
                  className="whatsapp-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp Inquiry
                </a>

                <p className="divider">— OR —</p>

                <button
                  className="close-button"
                  onClick={() => setShowModal(false)}
                >
                  ❌ Close
                </button>
              </div>
            </div>
          )}
          <div className="navbar_menu_bars">
            {isMenuOpen ? (
              <svg
                onClick={() => {
                  closeNavbarOnRoute();
                }}
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.23652 0.368171L7.5 5.63165L12.7362 0.395443C12.8519 0.272334 12.9912 0.173851 13.1458 0.1059C13.3005 0.0379486 13.4673 0.00192859 13.6362 0C13.9978 0 14.3447 0.143664 14.6004 0.399388C14.8561 0.655112 14.9998 1.00195 14.9998 1.3636C15.003 1.53078 14.9719 1.69684 14.9086 1.8516C14.8453 2.00636 14.751 2.14655 14.6316 2.26357L9.32722 7.49978L14.6316 12.8042C14.8563 13.024 14.9881 13.3218 14.9998 13.636C14.9998 13.9976 14.8561 14.3444 14.6004 14.6002C14.3447 14.8559 13.9978 14.9996 13.6362 14.9996C13.4624 15.0068 13.289 14.9778 13.127 14.9144C12.9651 14.851 12.818 14.7546 12.6953 14.6314L7.5 9.3679L2.25016 14.6177C2.13494 14.7368 1.9973 14.8318 1.84517 14.8973C1.69304 14.9628 1.52945 14.9976 1.36382 14.9996C1.00217 14.9996 0.655334 14.8559 0.39961 14.6002C0.143886 14.3444 0.000221866 13.9976 0.000221866 13.636C-0.00295735 13.4688 0.0280602 13.3027 0.0913714 13.148C0.154682 12.9932 0.248951 12.853 0.368393 12.736L5.67278 7.49978L0.368393 2.19539C0.143652 1.97552 0.0118665 1.67779 0.000221866 1.3636C0.000221866 1.00195 0.143886 0.655112 0.39961 0.399388C0.655334 0.143664 1.00217 0 1.36382 0C1.69108 0.00409079 2.00471 0.13636 2.23652 0.368171Z"
                  fill="black"
                  fill-opacity="0.4"
                />
              </svg>
            ) : (
              <svg
                className="navbar_menu_bars"
                onClick={() => {
                  closeNavbarOnRoute();
                }}
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 14.5C18.3852 14.5002 18.7556 14.6486 19.0344 14.9144C19.3132 15.1802 19.479 15.5431 19.4975 15.9279C19.516 16.3127 19.3858 16.6898 19.1338 16.9812C18.8818 17.2726 18.5274 17.4558 18.144 17.493L18 17.5H2C1.61478 17.4998 1.24441 17.3514 0.965613 17.0856C0.686821 16.8198 0.520988 16.4569 0.502476 16.0721C0.483964 15.6873 0.614192 15.3102 0.866175 15.0188C1.11816 14.7274 1.47258 14.5442 1.856 14.507L2 14.5H18ZM18 7.5C18.3978 7.5 18.7794 7.65804 19.0607 7.93934C19.342 8.22064 19.5 8.60218 19.5 9C19.5 9.39782 19.342 9.77936 19.0607 10.0607C18.7794 10.342 18.3978 10.5 18 10.5H2C1.60218 10.5 1.22064 10.342 0.93934 10.0607C0.658035 9.77936 0.5 9.39782 0.5 9C0.5 8.60218 0.658035 8.22064 0.93934 7.93934C1.22064 7.65804 1.60218 7.5 2 7.5H18ZM18 0.5C18.3978 0.5 18.7794 0.658035 19.0607 0.93934C19.342 1.22064 19.5 1.60218 19.5 2C19.5 2.39782 19.342 2.77936 19.0607 3.06066C18.7794 3.34196 18.3978 3.5 18 3.5H2C1.60218 3.5 1.22064 3.34196 0.93934 3.06066C0.658035 2.77936 0.5 2.39782 0.5 2C0.5 1.60218 0.658035 1.22064 0.93934 0.93934C1.22064 0.658035 1.60218 0.5 2 0.5H18Z"
                  fill="black"
                />
              </svg>
            )}
          </div>
        </div>
        <div className={responsiveNavbarClasses}>
          <div className="responsive_navbar_links">
            <NavLink
              to="/"
              onClick={() => {
                ScrollToTop();
                closeNavbarOnRoute();
              }}
              className="link"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => {
                ScrollToTop();
                closeNavbarOnRoute();
              }}
              to="/shop"
              className="link"
            >
              About Us
            </NavLink>
            <NavLink
              onClick={() => {
                ScrollToTop();
                closeNavbarOnRoute();
              }}
              to="/corporate"
              className="link"
            >
              Products
            </NavLink>
            {/* <NavLink onClick={()=>{ScrollToTop(); closeNavbarOnRoute()}} to='/customize' className='link'>Customize</NavLink> */}
            {/* <NavLink onClick={()=>{closeNavbarOnRoute()}} to='/blog' className={location.pathname==='/blog'?'link_active link':'link'}>Blog</NavLink> */}
            <NavLink
              onClick={() => {
                ScrollToTop();
                closeNavbarOnRoute();
              }}
              to="/about"
              className="link"
            >
              Corporate Gifting
            </NavLink>
            <NavLink
              onClick={() => {
                ScrollToTop();
                closeNavbarOnRoute();
              }}
              to="/contact"
              className="link"
            >
              Contact Us
            </NavLink>
            <NavLink>Bulk Inquery</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar_Footer;
