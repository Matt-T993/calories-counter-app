const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  food_name: String,
  serving_size: String,
  calories: Number,
  carbohydrates: Number,
  proteins: Number,
  fats: Number,
  fiber: Number,
  sugar: Number,
  category: String,
  brand: String,
  createdAt: Date,
  updatedAt: Date,
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
