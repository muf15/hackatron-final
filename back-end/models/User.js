// User.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNumber: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{10}/.test(v); // Validates a 10-digit number
      },
      message: "Contact number must be 10 digits long",
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
  },
  password: {
    type: String,
    required: function () {
      return !this.googleId; // Password required only if googleId is not provided
    },
    default: null,
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true, // Allows it to be null for non-Google users
  },
});

// Password hashing for non-Google users
userSchema.pre("save", async function (next) {
  if (this.isModified("password") && this.password !== null) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Compare password for traditional login
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
