const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { login, signup } = require("../controllers/user-controller");

router.post("/login", login);

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 8 }),
  ],
  signup
);

module.exports = router;
