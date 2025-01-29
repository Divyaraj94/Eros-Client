import React from "react";
import "./Footer.css"; // Import the styles
// import logo from "../assets/cake-logo.png"; // Replace with your logo path
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.jpg";
import twitterIcon from "../assets/Twit.png";
import mastercardIcon from "../assets/mastercard.png";
import upiIcon from "../assets/upi.png";
import visaIcon from "../assets/visa.png";
import gpayIcon from "../assets/gpay.png";
import paytmIcon from "../assets/paytm.png";
// import cakeIcon from "../assets/cake-second.png"

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-top">
        {/* <img src={logo} alt="Nicol's Cake Logo" className="footer-logo" />
        <img src={cakeIcon} alt="Cake Icon" className="footer-cake-icon" /> */}
      </div>
      <div className="footer-top">
        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>
            📍 One world, B-61, Nr. Sheetal Park, 150 ft. Ring Road, Rajkot-360001, Gujarat (India).
          </p>
          <p>📞 +123 4567 890</p>
          <p>📧 contact@sweetnamkeen.com</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Customize</li>
            <li>Blog</li>
            <li>About US</li>
            <li>Contact US</li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-section">
          <h3>Policies</h3>
          <ul>
            <li>FAQs</li>
            <li>Payment & Shipping</li>
            <li>Return & Refund</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="footer-section">
          <h3>Follow us</h3>
          <div className="social-icons">
            <img src={facebookIcon} alt="Facebook" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={twitterIcon} alt="Twitter" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© Copyright 2024, all rights reserved</p>
        <div className="payment-icons">
          <img src={mastercardIcon} alt="Mastercard" />
          <img src={upiIcon} alt="UPI" />
          <img src={visaIcon} alt="Visa" />
          <img src={gpayIcon} alt="Google Pay" />
          <img src={paytmIcon} alt="PayTM" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
