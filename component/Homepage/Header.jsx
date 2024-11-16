import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../../Styles/Homepage/Header.CSS"; // Import the CSS file

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-overlay">
        <nav className="header-nav">
          <ul className="nav-links">
            <li><Link to="/login">Login</Link></li> {/* Link to Login */}
            <li><Link to="/signup">Signup</Link></li> {/* Link to Login */}
          </ul>
        </nav>

        <div className="header-content">
          <h1 className="header-title">Explore Hidden Gems</h1>
          <p className="header-subtitle">Your Local Secret Map – Pinned by People Like You!</p>
        </div>

        <div className="header-info">
          <div className="info-box left-info">
            <h2>"Unleash Your Inner Explorer!"</h2>
            <p>Every city has hidden gems, and the best ones are found by real people. Share your unique finds, whether it's a cozy bookstore, a secluded hiking trail, or a street artist's work. Create your personal map of secret spots and inspire others to explore the world through your lens. Your hidden gem could be someone else's next adventure!</p>
          </div>
          <div className="info-box right-info">
            <h2>"Explore Beyond the Usual"</h2>
            <p>Forget tourist traps! With our app, you can dive into a community-driven map of undiscovered locations. See what locals recommend, pin your own discoveries, and connect with fellow explorers. Whether you're new in town or just looking for something off the beaten path, our platform helps you find places that are truly special.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
