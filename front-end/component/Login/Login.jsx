// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Login/Login.css";

const Login = () => {
  const navigate = useNavigate();
  
  // State for form values and errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUpRedirect = () => {
    navigate("/signup"); // Navigate to the sign-up page
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    window.location.href = "http://localhost:3000/api/auth/google"; // Redirect to Google login
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    const userData = { email, password };

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data.success) {
        // Store token (you can store it in localStorage or use it in a global state)
        localStorage.setItem("token", data.token);
        navigate("/fix-new"); // Redirect to the fix-new page
      } else {
        setError(data.message || "Login failed"); // Display specific error message
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Hidden Heaven</h1>
        <p>Explore the best services we have to offer!</p>
      </div>

      <div className="login-right">
        <div className="login-form-container">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="error">{error}</p>} {/* Error message here */}

            <button type="submit" className="login-button">
              Continue
            </button>
          </form>

          <div className="or-divider">Or</div>
          <div className="social-logins">
            <button onClick={handleGoogle} className="social-login google">
              Log in with Google
            </button>
          </div>
          <p className="signup-link">
            New User? <a href="/">Sign Up Here</a>
          </p>

          <button onClick={handleSignUpRedirect} className="signup-button">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
