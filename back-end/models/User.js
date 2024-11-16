const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNumber: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, default: null },  // Optional for Google users
  googleId: String,  // New field for Google OAuth users
});

// Password hashing for non-Google users
userSchema.pre("save", async function (next) {
  if (this.isModified("password") && this.password !== null) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Compare password for traditional login
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
