const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//registeration logic here

exports.registerUser = async (req, res) => {
  try {
    const { fullName, dob, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // creating user with the required details
    const newUser = new User({ fullName, dob, email, password });
    await newUser.save();

    // generating a token here...
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//also login user logic

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // comparing the passwords using compare
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Login successful",
      token, //pass token for user sessiom
      user: { fullName: user.fullName, email: user.email, dob: user.dob },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//dashboard logic here...

exports.getDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "Welcome to your dashboard!",
      user: {
        userId: user._id,
        fullName: user.fullName,
        email: user.email,
        dob: user.dob,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
