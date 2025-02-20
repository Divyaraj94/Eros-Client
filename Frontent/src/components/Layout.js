import React from 'react';
// import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Layout.css'
import NavBar_New from './Navbar/NavBar_New';

const Layout = () => {
  return (
    <>
      <NavBar_New />
      <Outlet />
      <Footer />
      
      {/* WhatsApp button */}
      <a
        href="https://wa.me/1234567890?text=Hello%20I%20want%20to%20inquire%20about%20bulk%20orders"
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-btn2"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Layout;
