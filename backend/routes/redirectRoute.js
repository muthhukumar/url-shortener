const express = require("express");
const router = express.Router();
const { redirect, setCounter } = require("../controllers/redirect-controller");

router.get("/:shortenedUrl", redirect);
router.post("/setCounter", setCounter);

module.exports = router;
