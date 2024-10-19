

import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../../Styles/Login/Login.css"; // Adjust the path according to your project structure
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebase.jsx";

const Login = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignUpRedirect = () => {
    navigate("/signup"); // Navigate to the sign-up page
  };

  const handleGoogle = async (e) => {
    e.preventDefault(); // Prevent any default behavior

    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider); // Wait for the sign-in to complete

      // You can access the signed-in user's info using result.user if needed
      console.log("User signed in:", result.user);

      // Navigate to the homepage after successful sign-in
      navigate("/");
    } catch (error) {
      console.error("Google sign-in error:", error);
      // Handle the error (e.g., display an error message)
    }
  };

  return (
    <div className="login-container">
      {/* Left Section with Background and Text */}
      <div className="login-left">
        <h1>Hidden Heaven</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Right Section with Login Form */}
      <div className="login-right">
        <div className="login-form-container">
          <h1>Login</h1>
          <form>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@email.com"
              required
            />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="" required />

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

          {/* Sign Up Button */}
          <button onClick={handleSignUpRedirect} className="signup-button">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
