const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const counterSchema = new Schema({
  cid: {
    type: String,
    default: "counter",
  },
  count: {
    type: Number,
    default: 1000000,
  },
});

const Counter = mongoose.model("Counter", counterSchema);

module.exports = Counter;
