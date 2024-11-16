import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
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

  // Handle JWT token from URL after Google sign-in
  useEffect(() => {
    // Check if the token is present in the URL after Google login redirect
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      // Store the token (e.g., in localStorage or sessionStorage)
      localStorage.setItem("authToken", token);

      // Optionally, navigate to a protected page or homepage
      navigate("/");
    }
  }, [navigate]);

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
        {/* Add the Sign-Up route */}
        <Route path="/fix-new" element={<FixNew />} />
        {/* Add the Fix New route */}
        <Route path="/new-location" element={<NewLocation />} />
        {/* Add the New Location route */}
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