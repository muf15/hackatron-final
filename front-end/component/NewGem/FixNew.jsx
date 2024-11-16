import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../../Styles/NewGem/FindNew.CSS";
import Cards from "../Homepage/Cards";
import FixFooter from "./FixFooter";

const FindNew = () => {
  return (
    <div className="find-new-container">
      <div className="background-image">
        <div className="text-overlay">
          <div className="action-buttons">
            <span className="action-text">Find Location</span>
            <Link to="/new-location" className="action-text">
              Mark Location
            </Link>{" "}
            {/* Updated Link */}
          </div>
          <h1 className="title">Destinations</h1>
          <p className="description">
            Saudi Arabia is rich in heritage and history. The country is home to
            hundreds of historically important sites.
          </p>
        </div>
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <FixFooter />
      </div>
    </div>
  );
};

export default FindNew;
