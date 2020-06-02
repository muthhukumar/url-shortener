const User = require("../model/schema/userSchema");
const { validationResult } = require("express-validator");
const HttpError = require("../model/http-error-model");
const bcrypt = require("bcryptjs");
const generateToken = require("../util/jwt-token");

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

  let token;
  try {
    token = generateToken(existingUser.id);
  } catch (err) {
    return next(new HttpError("Could not logining you in, please try again"));
  }
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

  try {
    await newUser.save();
  } catch (err) {
    return next(new HttpError("Signing up failed, please try again", 500));
  }
  let token;
  try {
    token = generateToken(newUser.id);
  } catch (err) {
    return next(new HttpError("Signing up failed, please try again", 5000));
  }
  res.status(201).json({ token, userId: newUser.id, newUser });
};

module.exports = {
  login,
  signup,
};
