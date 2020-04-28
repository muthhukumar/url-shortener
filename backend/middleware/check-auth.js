const HttpError = require("../model/http-error-model");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  let payload;
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return next(new HttpError("Authentication failed", 401));
    }
    payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = { userId: payload.userId };
    next();
  } catch (err) {
    return next(new HttpError("Authentication failed", 401));
  }
};
