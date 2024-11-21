// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate, Navigate } from "react-router-dom";
import Header from "../component/Homepage/Header";
import Cards from "../component/Homepage/Cards";
import Header3 from "../component/Homepage/Header3";
import Footer from "../component/Homepage/Footer";
import Login from "../component/Login/Login";
import SignUp from "../component/Signup/Signup.jsx"; // Import the SignUp component
import FixNew from "../component/NewGem/FixNew.jsx"; // Import the FixNew component
import NewLocation from "../component/NewGem/NewLocation.jsx"; // Ensure this import is correct

const App = () => {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Initialize the navigate function
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handle JWT token from URL after Google sign-in
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      // Store the token in localStorage
      localStorage.setItem("authToken", token);

      // Set authentication state to true
      setIsAuthenticated(true);

      // Optionally, navigate to a protected page or homepage
      navigate("/fix-new"); // Redirect to the FixNew page
    } else {
      // Check if there's a valid token in localStorage
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        setIsAuthenticated(true);
      }
    }
  }, [navigate]);

  // Logout function to remove token and update auth state
  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <>
      {/* Conditionally render the Header based on the current path */}
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/fix-new" &&
        location.pathname !== "/new-location" && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Cards />
              <Header3 />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/fix-new" element={<FixNew />} />
        <Route path="/new-location" element={<NewLocation />} />
        
        {/* If not authenticated, redirect to /login */}
        <Route
          path="/fix-new"
          element={isAuthenticated ? <FixNew /> : <Navigate to="/login" />}
        />
      </Routes>
      {/* Conditionally render Footer only if not on the login, sign-up, fix-new, or new-location pages */}
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/fix-new" &&
        location.pathname !== "/new-location" && <Footer />}
    </>
  );
};

// Wrap the entire App component in the Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
