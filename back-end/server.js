// server.js
const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const cors = require("cors"); // Import the cors package
const authRoutes = require("./auth");
require("./db");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
    credentials: true, // Allow cookies and headers like Authorization
  })
);

// Body Parser Middleware
app.use(express.json());

// Initialize Passport Middleware
app.use(passport.initialize());

// Logging Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request made to ${req.method} ${req.originalUrl}`);
  next();
});

// Authentication Routes
app.use("/api/auth", authRoutes);

// Root Route
app.get("/", (req, res) => {
  res.redirect("http://localhost:5173/fix-new");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
