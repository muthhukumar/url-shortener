const Url = require("../model/schema/urlSchema");
const HttpError = require("../model/http-error-model");
const Counter = require("../model/schema/counterSchema");

const redirect = async (req, res, next) => {
  const shortenedUrl = req.params.shortenedUrl;
  let url;
  try {
    url = await Url.findOne({ shortenedUrl });
  } catch (err) {
    return next(new HttpError("Redirection failed, please try again"));
  }

  if (!url) {
    return next(new HttpError("Url not found, please check entered url"));
  }
  res.status(201).json({ url: url.url, expiresOn: url.expiresOn });
};

const setCounter = async (req, res, next) => {
  const { cid, count } = req.body;

  let existingCounter;
  try {
    existingCounter = await Counter.findOne(cid);
  } catch (err) {
    return next(new HttpError("Setting counter failed, please try again", 402));
  }
  if (existingCounter) {
    return next(new HttpError("Counter already exist", 422));
  }

  const newCounter = new Counter({
    cid,
    count,
  });

  try {
    await newCounter.save();
  } catch (err) {
    return next(new HttpError("Setting counter failed, please try again", 402));
  }
  res.status(201).json({ newCounter });
};

module.exports = { redirect, setCounter };
