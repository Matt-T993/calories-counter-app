const mongoose = require("mongoose");

const dailyLogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: Date,
  total_calories_consumed: Number,
  total_carbohydrates_consumed: Number,
  total_proteins_consumed: Number,
  total_fats_consumed: Number,
  total_fiber_consumed: Number,
  total_sugar_consumed: Number,
  remaining_calories: Number,
});

const DailyLog = mongoose.model("DailyLog", dailyLogSchema);

module.exports = DailyLog;
