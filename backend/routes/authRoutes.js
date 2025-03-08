const express = require("express");
const {
  registerUser,
  loginUser,
  getDashboard,
} = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

//protected route here... (only for verified users)
router.get("/dashboard", verifyToken, getDashboard);

module.exports = router;
