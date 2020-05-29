const express = require("express");
const app = express();

const HttpError = require("./model/http-error-model");
require("dotenv").config();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

require("./mongoose-connection/mongoose");

const userRoute = require("./routes/userRoute");
const urlRoute = require("./routes/urlRoute");
const redirect = require("./routes/redirectRoute");

app.use("/user", userRoute);
app.use("/url", urlRoute);
app.use("/", redirect);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PATCH, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.next();
});

app.use((req, res, next) => {
  throw new HttpError("Could not find this route", 404);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error ocurred" });
});

app.listen(process.env.PORT, () => {
  console.log("Server is listening in the port " + process.env.PORT);
});
