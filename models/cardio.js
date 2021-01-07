const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  duration: {
    type: Number,
  },
  distance: {
    type: Number,
  },
  day: {
    type: Date,
    default: Date.now,
  },
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;
