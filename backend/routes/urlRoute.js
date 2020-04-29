const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const checkAuth = require("../middleware/check-auth");

const {
  myUrls,
  shortUrl,
  deleteUrl,
  updateUrl,
} = require("../controllers/url-controller");

router.use(checkAuth);

router.get("/myurls", myUrls);

router.post(
  "/shorturl",
  [
    check("url").not().isEmpty().isURL(),
    //check("customUrl").isLength({ min: 4 }),
  ],
  shortUrl
);

router.delete("/:shortenedurl", deleteUrl);

router.patch("/:shortenedurl", [check("expiresOn").not().isEmpty()], updateUrl);

module.exports = router;
