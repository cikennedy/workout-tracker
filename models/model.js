const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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