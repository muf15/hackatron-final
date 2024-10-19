import React from "react";
import "../../Styles/Homepage/Footer.css"; // Ensure the correct CSS import
import defaultBackgroundImage from "../../Assets/hawa-mahal-6156123_1280.jpg"; // Default fallback image

const Footer = ({ imageUrl }) => {
  return (
    <div className="footer-container">
      <div
        className="footer-image"
        style={{
          backgroundImage: `url(${imageUrl || defaultBackgroundImage})`,
        }} // Use the passed imageUrl if available, otherwise fallback to the default
      ></div>
      <div className="footer-text">
        <h1>Explore Hawa Mahal</h1>
      </div>
    </div>
  );
};

export default Footer;
