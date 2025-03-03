import React from "react";
import img1 from "../assets/Exotica.png";
import googlePlay from "../assets/play store.png";
import appStore from "../assets/app store.png";
import qrCode from "../assets/QR.png"
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <section className="app-download-container">
      <div className="app-download-content">
        <h2 className="app-title">Get The EROS App</h2>
        <p className="app-subtitle">Download App from</p>
        <div className="store-buttons">
          <img src={googlePlay} alt="Google Play" className="store-icon" />
          <img src={appStore} alt="App Store" className="store-icon" />
        </div>
      </div>
      <div className="qr-container">
        <div className="phone-frame">
          <div className="qr-overlay">
            <img src={qrCode} alt="QR Code" className="qr-code" />
          </div>
        </div>
        <p className="qr-text">Scan QR Code to Download App</p>
      </div>
    </section>
  );
};

export default AppDownload;
