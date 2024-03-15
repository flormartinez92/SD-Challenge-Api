const express = require("express");
const {
  register,
  login,
  profile,
  logout,
} = require("../controllers/user.controllers");
const { validateUser } = require("../middleware/auth");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", validateUser, profile);
router.post("/logout", logout);

module.exports = router;
