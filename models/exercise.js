const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// I should also be able to track the name, type, weight, sets, reps, and duration of exercise. 
// If the exercise is a cardio exercise, I should be able to track my distance traveled.

const exerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: ""
  },
  value: {
    type: Number,
    required: ""
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;