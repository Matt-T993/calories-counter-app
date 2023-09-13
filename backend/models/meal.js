const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  meal_name: String,
  date_and_time: Date,
  meal_type: String,
  total_calories: Number,
  total_carbohydrates: Number,
  total_proteins: Number,
  total_fats: Number,
  total_fiber: Number,
  total_sugar: Number,
  createdAt: Date,
  updatedAt: Date,
});

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;
