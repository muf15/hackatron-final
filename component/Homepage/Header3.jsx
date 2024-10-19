import React from "react";
import "../../Styles/Homepage/Header3.CSS"; // Import the CSS file

const Header3 = () => {
  return (
    <div className="header3-container">
      <div className="background-overlay">
        <div className="header3-content">
          <h1 className="header3-title">
            <span className="ishq-e">Ishq-e</span>
            <span className="udaipur">Udaipur</span>
          </h1>
          <p className="header3-description">
            Udaipur, a realm of ethereal beauty, captivates the senses with its
            stunning landscapes. The tranquil lakes, surrounded by majestic
            palaces and lush gardens, create a mesmerizing backdrop that
            stretches as far as the eye can see. As the sun sets, the sky
            transforms into a canvas of vibrant hues, reflecting on the water
            and illuminating the enchanting charm of this romantic city.
          </p>
          <div className="traveler-info">
            <img
              className="traveler-avatar"
              src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Traveler"
            />
            <div className="traveler-details">
              <span className="traveler-name">Wazeem Al Mulk</span>
              <span className="traveler-role">Traveler</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header3;
