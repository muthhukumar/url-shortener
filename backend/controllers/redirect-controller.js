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
  if (url.isExpired) {
    return next(new HttpError("Url expired"));
  }

  if (new Date(url.expiresOn) < new Date()) {
    try {
      url.isExpired = true;
      await url.save();
      return res.status(401).json({ message: "url expired" });
    } catch (err) {
      return next(new HttpError("Redirecting url failed, please try again"));
    }
  }

  res
    //.status(201)
    .json(`<meta http-equiv= "refresh" content="5;url=${url.url}"/>`);
  // .redirect(`https://${url.url}`);
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
