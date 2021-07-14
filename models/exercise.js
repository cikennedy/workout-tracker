const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// I should also be able to track the name, type, weight, sets, reps, and duration of exercise. 
// If the exercise is a cardio exercise, I should be able to track my distance traveled.

const exerciseSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: ""
      },
      type: {
        type: String,
        trim: true
      },
      weight: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      duration: {
        type: Number,
        default: 0
      },
      distance: {
        type: Number,
        default: 0
      },
    },
  ],
  totalDuration: {
    type: Number,
    default: 0
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;