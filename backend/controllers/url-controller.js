const Url = require("../model/schema/urlSchema");
const Counter = require("../model/schema/counterSchema");
const User = require("../model/schema/userSchema");
const { validationResult } = require("express-validator");
const encode = require("../util/encode-url");
const HttpError = require("../model/http-error-model");
const mongoose = require("mongoose");

const myUrls = async (req, res, next) => {
  const userId = req.userData.userId;
  let user;
  try {
    user = await User.findOne({ _id: userId });
  } catch (err) {
    return next(new HttpError("Unable to fetch url"));
  }

  if (!user) {
    return next(new HttpError("User does not exist, could not fetch url"));
  }
  res.status(200).json({ urls: user.urls });
};

const shortUrl = async (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, check and try again", 422)
    );
  }
  const { url, customUrl, expiresOn } = req.body;

  const creator = req.userData.userId;
  let shortenedUrl;
  let counter;

  if (customUrl) {
    let url;
    try {
      url = await Url.findOne({ shortenedUrl: customUrl });
    } catch (err) {
      return next(new HttpError(err, 401));
    }
    if (url) {
      return next(
        new HttpError("Given shortened url already exits, enter new one")
      );
    }
    shortenedUrl = customUrl;
  } else {
    try {
      counter = await Counter.findOne({ cid: "counter" });
    } catch (err) {
      return next(new HttpError("Shortening url failed", 422));
    }
    if (!counter) {
      return next(new HttpError("Counter does not exist", 402));
    }
    shortenedUrl = encode(counter.count);
  }
  let user;
  try {
    user = await User.findOne({ _id: creator });
  } catch (err) {
    return next(new HttpError("Shortening url failed, please try again"));
  }
  if (!user) {
    return next(
      new HttpError("Shortening url failed, the user does not exist")
    );
  }
  console.log(user);
  const newUrl = new Url({
    url,
    creator,
    expiresOn,
    shortenedUrl,
  });

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await newUrl.save({ session: sess });
    if (counter) {
      counter.count += 1;
      await counter.save({ session: sess });
    }
    user.urls.push(newUrl);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    return next(new HttpError(err, 401));
  }
  res.json({ counter, newUrl });
};

const deleteUrl = async (req, res, next) => {
  const shortUrl = req.params.shortenedurl;
  let url;
  try {
    url = await Url.findOne({ shortenedUrl: shortUrl }).populate("creator");
  } catch (err) {
    return next(new HttpError("Could not delete url"));
  }

  if (!url) {
    return next(new HttpError("Unable to find shortenedurl"));
  }

  if (url.creator.id !== req.userData.userId) {
    return next(new HttpError("You cannot delete url created by other user"));
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await url.remove({ session: sess });
    url.creator.urls.pull(url);
    await url.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    return next(new HttpError("Deleting url failed, please try again"));
  }
  res
    .status(200)
    .json({ message: "url deleted successfully", urls: url.creator.urls });
};

const updateUrl = (req, res, next) => {};

module.exports = {
  myUrls,
  shortUrl,
  deleteUrl,
  updateUrl,
};
