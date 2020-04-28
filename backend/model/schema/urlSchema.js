const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const urlSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  shortenedUrl: {
    type: String,
    required: true,
    unique: true,
  },
  expireOn: {
    type: Date,
  },
  creator: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

urlSchema.plugin(uniqueValidator);

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
