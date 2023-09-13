const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  profile_picture: {
    type: String,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  height: {
    type: Number,
  },
  daily_calorie_goal: {
    type: Number,
  },
  activity_level: {
    type: Number,
  },
  createdAt: Date,
  updatedAt: Date,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
