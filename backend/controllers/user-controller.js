const User = require("../model/schema/userSchema");
const { validationResult } = require("express-validator");
const HttpError = require("../model/http-error-model");
const bcrypt = require("bcryptjs");
const { generateToken, generateRefreshToken } = require("../util/jwt-token");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return next(new HttpError("Logining in failed, please try again"));
  }

  if (!existingUser) {
    return next(new HttpError("Invalid credentials, could not log in", 401));
  }

  let isPasswordValid = false;
  try {
    isPasswordValid = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    return next(
      new HttpError(
        "Logining in failed, check your credentials and try again",
        500
      )
    );
  }

  if (!isPasswordValid) {
    return next(
      new HttpError(
        "Invalid credentials, check your credentials and try again",
        403
      )
    );
  }

  let token, refresh_token;
  try {
    token = generateToken(existingUser.id);
    refresh_token = generateRefreshToken(existingUser.id);
    existingUser.refresh_token = refresh_token;
    existingUser.refresh_tokenExpiresIn = new Date(
      new Date().getTime() + 7 * 24 * 60 * 60 * 1000
    );
    existingUser.save();
  } catch (err) {
    return next(new HttpError("Could not logining you in, please try again"));
  }
  res.cookie("refreshtoken", refresh_token, {
    httpOnly: true,
    path: "/user/refresh_token",
  });
  res.status(201).json({ token, userId: existingUser.id });
};

const signup = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new HttpError("Invalid inputs passed, check your data", 422));
  }

  const { email, password, name } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
    return next(new HttpError("Signing up failed, please try again", 500));
  }

  if (existingUser) {
    return next(new HttpError("User already exists, Login instead", 409));
  }

  let hashedPassword;

  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return next(new HttpError("Could not create user, please try again", 500));
  }

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    urls: [],
  });

  // try {
  // } catch (err) {
  //   return next(new HttpError("Signing up failed, please try again", 500));
  // }
  let token, refreshtoken;
  try {
    token = generateToken(newUser.id);
    refreshtoken = generateRefreshToken(newUser.id);
    refresh_tokenExpiresIn = new Date(
      new Date().getTime() + 7 * 24 * 60 * 60 * 1000
    );
    newUser.refresh_token = refreshtoken;
    newUser.refresh_tokenExpiresIn = refresh_tokenExpiresIn;
    await newUser.save();
  } catch (err) {
    console.log(err);
    return next(new HttpError("Signing up failed, please try again", 500));
  }
  res.cookie("refreshtoken", refreshtoken, {
    httpOnly: true,
    path: "/user/refresh_token",
  });
  res.status(201).json({ token, userId: newUser.id, newUser });
};

const getRefreshToken = async (req, res, next) => {
  const token = req.cookies.refreshtoken;

  if (!token) return next(new HttpError("You need to login", 403));

  let payload;

  try {
    payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    return next(new HttpError("Invalid token", 403));
  }

  let user;
  try {
    user = await User.findById(payload.userId);
  } catch (err) {
    return next(new HttpError("Invalid paylaod", 403));
  }

  if (
    user.refresh_token !== token ||
    user.refresh_tokenExpiresIn < new Date()
  ) {
    return next(new HttpError("Token expired", 403));
  }
  let newToken, newRefreshToken;
  try {
    newToken = generateToken(user.id);
    newRefreshToken = generateRefreshToken(user.id);
    refresh_tokenExpiresIn = new Date(
      new Date().getTime() + 7 * 24 * 60 * 60 * 1000
    );
  } catch (err) {
    console.log(err);
    return next(new HttpError("Something went wrong", 403));
  }

  user.refresh_token = newRefreshToken;
  user.refresh_tokenExpiresIn = refresh_tokenExpiresIn;

  try {
    await user.save();
  } catch (err) {
    return next(new HttpError("Something went wrong", 403));
  }

  res.cookie("refreshtoken", newRefreshToken, {
    httpOnly: true,
    path: "/user/refresh_token",
  });

  res.status(200).json({ token: newToken });
};

const logout = (req, res, next) => {
  res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
  res.status(200).json({ message: "logged out" });
};

module.exports = {
  login,
  signup,
  getRefreshToken,
  logout,
};
