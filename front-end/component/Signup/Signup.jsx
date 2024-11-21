// Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Sign-Up/Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [isGoogleSignup, setIsGoogleSignup] = useState(false);

  const handleHomeRedirect = () => {
    navigate("/");
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password")?.value;
    const confirmPassword = document.getElementById("confirm-password")?.value;

    if (!isGoogleSignup && password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const userData = {
      name,
      email,
      password: isGoogleSignup ? null : password, // Set password to null if Google signup
    };

    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup.");
    }
  };

  // Redirect to Google OAuth route on the server
  const handleGoogleSignup = () => {
    setIsGoogleSignup(true);
    window.location.href = "http://localhost:3000/api/auth/google";
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

            {!isGoogleSignup && (
              <>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="" required />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder=""
                  required
                />
              </>
            )}

            <button type="submit" className="signup-button">
              Create Account
            </button>
          </form>

          <div className="or-divider">Or</div>
          <div className="social-logins">
            <button
              onClick={handleGoogleSignup}
              className="social-login google"
            >
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
