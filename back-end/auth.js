// auth.js
const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");
const User = require("./models/User");

dotenv.config();
const router = express.Router();

// Passport Google Strategy Setup
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
          });
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Route to initiate Google authentication
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Callback route for Google to redirect to
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.redirect(`http://localhost:3000?token=${token}`);
  }
);

module.exports = router;
