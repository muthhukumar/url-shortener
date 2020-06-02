const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (userId) => {
  return (token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1hr",
  }));
};

const generateRefreshToken = (userId) => {
  return (token = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  }));
};

module.exports = { generateToken, generateRefreshToken };
