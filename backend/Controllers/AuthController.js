const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // Ensure jwt is imported
const UserModel = require("../Models/User");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already exists", success: false });
    }

    // Hash password and create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Register success", success: true });
  } catch (err) {
    console.error(err); // Consider logging the error for debugging
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const errorMessage = "Auth failed: email or password is wrong";

    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(403).json({ message: errorMessage, success: false });
    }

    // Compare password
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res.status(403).json({ message: errorMessage, success: false });
    }

    // Generate JWT token
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Login successful",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (err) {
    console.error(err); // Consider logging the error for debugging
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = {
  register,
  login,
};
