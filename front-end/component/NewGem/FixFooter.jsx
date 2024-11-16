import React, { useState } from "react";
import "../../Styles/NewGem/FixFooter.css";

const FixFooter = () => {
  // Actual URLs of your images
  const aboutImage =
    "https://cdn.pixabay.com/photo/2023/03/31/14/39/ocean-7890172_1280.jpg";
  const safetyImage =
    "https://cdn.pixabay.com/photo/2023/10/27/23/10/mountain-8346389_960_720.jpg";

  // State to manage which card is expanded
  const [expandedCard, setExpandedCard] = useState(null);

  // Toggle the expanded card
  const handleCardClick = (card) => {
    setExpandedCard(expandedCard === card ? null : card);
  };

  return (
    <div className="fix-footer-container">
      <h2 className="section-title">Travel Essentials</h2>
      <div className="card-container">
        <div
          className="info-card"
          style={{ backgroundImage: `url(${aboutImage})` }}
          onClick={() => handleCardClick("about")}
        >
          <div className="card-overlay">
            <span className="card-text">About Place</span>
            <span className="arrow">&#8594;</span>
          </div>
          <div
            className={`description ${
              expandedCard === "about" ? "active" : ""
            }`}
          >
            This section contains information about the place, its history, and
            significance.
          </div>
        </div>
        <div
          className="info-card"
          style={{ backgroundImage: `url(${safetyImage})` }}
          onClick={() => handleCardClick("safety")}
        >
          <div className="card-overlay">
            <span className="card-text">Safety Travel Tips</span>
            <span className="arrow">&#8594;</span>
          </div>
          <div
            className={`description ${
              expandedCard === "safety" ? "active" : ""
            }`}
          >
            Here you can find essential safety tips to ensure a secure travel
            experience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixFooter;
