// Signup.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Sign-Up/Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    navigate("/");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    // Perform validation for password and confirmPassword
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    const userData = {
      name,
      email,
      password,
    };
  
    try {
      // Send a POST request to the backend to create a new user
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
  
      if (data.success) {
        // Redirect to login or home page
        navigate("/login");
      } else {
        // Handle error (e.g., user already exists)
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup.");
    }
  };
  
  // Redirect to Google OAuth route on the server
  const handleGoogleSignup = () => {
    window.location.href = "http://localhost:3000/api/auth/google"; // Correct backend server URL
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>Join Hidden Heaven</h1>
        <p>
          Create an account to explore the best services we have to offer. Sign
          up now to start your journey with us!
        </p>
      </div>

      <div className="signup-right">
        <div className="signup-form-container">
          <h1>Sign Up</h1>
          <form onSubmit={handleSignup}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="John Doe" required />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@email.com"
              required
            />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="" required />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="" required />

            <button type="submit" className="signup-button">
              Create Account
            </button>
          </form>

          <div className="or-divider">Or</div>
          <div className="social-logins">
            <button onClick={handleGoogleSignup} className="social-login google">
              Sign up with Google
            </button>
          </div>

          <p className="login-link">
            Already have an account? <a href="/login">Log In Here</a>
          </p>

          <button onClick={handleHomeRedirect} className="home-button">
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
