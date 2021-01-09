const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// creates the schema for the database
const WorkoutSchema = new Schema(
    {
      day: {
        type: Date,
        default: () => new Date()
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: true,
          },
          name: {
            type: String,
            trim: true,
            required: true,
          },
          duration: {
            type: Number,
            required: true,
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          },
          distance: {
            type: Number
          }
        }
      ]
    },
  );


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
