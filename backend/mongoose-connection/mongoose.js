const mongoose = require("mongoose");

require("dotenv").config();

const URI = process.env.ATLAS_URI;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("MongoDB successfully connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB connection disconnected");
});

mongoose.connection.on("error", (err) => {
  console.log("There is an error in MongoDB connection");
});
