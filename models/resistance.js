const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  duration: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  day: {
    type: Date,
    default: Date.now,
  },
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;
