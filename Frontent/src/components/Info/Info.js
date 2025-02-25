import React, { useState } from "react";
import "./info.css";
import img1 from "../assets/home.png";

const Info = () => {
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [isDelivery, setIsDelivery] = useState(true);

  const handleUseCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log("User's Coordinates:", latitude, longitude);

          const isValid = await validateLocation(latitude, longitude);
          if (isValid) {
            setLocation(isValid);
            setError("");
          } else {
            setError("Sorry, we do not deliver to your location.");
          }
        },
        (error) => {
          console.error("Geolocation Error:", error);
          setError("Unable to fetch location. Please enter manually.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  const validateLocation = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://your-api.com/validate-location?lat=${lat}&lng=${lng}`
      );
      const data = await response.json();

      if (data.success) {
        return data.pincode;
      }
      return false;
    } catch (error) {
      console.error("Error validating location:", error);
      return false;
    }
  };

  return (
    <div className="next-section-wrapper">
      {/* Top Section with Delivery & Pickup */}
      <div className="next-section-top">
        <div className="delivery-section">
          <h4 className="section-title">Delivery</h4>
          <p className="section-subtitle">
            Set your delivery location to get started
          </p>
          <div className="line">
              <button
                className="location-button"
                onClick={handleUseCurrentLocation}
              >
                📍 Use my current location
              </button>
              <span className="or-separator">or</span>
            <input
              type="text"
              placeholder="Enter the pickup location"
              className="pickup-input-box"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>

        {/* Divider */}
        <div className="next-section-divider">
          <div className="vertical-line-with-dot"></div>
        </div>

        <div className="next-section-divider-horizontal">
          <div className="horizontal-line-with-dot"></div>
        </div>

        <div className="pickup-section">
          <h4 className="section-title">Pick Up</h4>
          <p className="section-subtitle">
            You have to collect the order from the outlet
          </p>
          <div className="line2">
            <div>Get Delivery</div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="toggle"
                checked={!isDelivery}
                onChange={() => setIsDelivery(!isDelivery)}
              />
              <label className="toggle-slider" htmlFor="toggle"></label>
            </div>
            <div className="pickup">Pick Up</div>
          </div>
        </div>
      </div>

      {/* Heading Section */}
      <div className="next-section-heading">
        <h2>Savor the Taste of Tradition and Excellence!</h2>
        <p>
          Since 1990, we’ve been crafting the finest sweet and savory delights,
          made with<br /> love and authentic recipes passed down through generations.
        </p>
      </div>

      {/* Features Section */}
      <div className="next-section-features">
        <div className="feature-column">
          <div className="feature-card">
            <h3>Authentic Recipes</h3>
            <p>
              Our recipes are rooted in rich culinary traditions, made using the
              finest ingredients to bring you a taste of heritage.
            </p>
          </div>
          <div className="feature-card">
            <h3>Unmatched Quality</h3>
            <p>
              We believe in delivering only the finest, from premium ingredients
              to hygienic preparation.
            </p>
          </div>
        </div>

        <div className="feature-image-container">
          <img src={img1} alt="Storefront" className="feature-image" />
        </div>

        <div className="feature-column">
          <div className="feature-card">
            <h3>Made with Love</h3>
            <p>
              Every sweet and namkeen is a labor of love, ensuring freshness and
              authenticity in every bite.
            </p>
          </div>
          <div className="feature-card">
            <h3>Joy for Every Budget</h3>
            <p>
              From festive boxes to everyday snacks, our treats are thoughtfully
              priced for everyone to enjoy.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="know-more">
        <button className="knowMore-button">Know More</button>
      </div>
    </div>
  );
};

export default Info;
