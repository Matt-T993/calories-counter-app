import { RequestHandler } from "express";
import Meal from "../model/Meal";
import DailyLog from "../model/dailyLog";

export const getAllMeals: RequestHandler = async (req, res) => {
  try {
    const Meals = await Meal.find().exec();
    res.status(200).json(Meals);
  } catch (error) {
    console.error("Error no users found", error);
  }
};

export const addMeals: RequestHandler = async (req, res) => {
  try {
    const userId = req.user.userId;
    const {
      meal_name,
      date,
      meal_type,
      total_calories,
      total_carbohydrates,
      total_proteins,
      total_fats,
      total_fiber,
      total_sugar,
    } = req.body;

    // Log the request data for debugging
    console.log("Request Data:", req.body);

    // Create a new meal instance
    const newMeal = new Meal({
      user: userId,
      meal_name,
      date,
      meal_type,
      total_calories,
      total_carbohydrates,
      total_proteins,
      total_fats,
      total_fiber,
      total_sugar,
    });

    await newMeal.save();

    // Check if there is an existing daily log for the same date
    let dailyLog = await DailyLog.findOne({
      user: userId,
      date,
    });

    if (!dailyLog) {
      // If daily log doesn't exist, create a new one
      dailyLog = new DailyLog({
        user: userId,
        date,
        total_calories_consumed: 0,
        total_carbohydrates_consumed: 0,
        total_proteins_consumed: 0,
        total_fats_consumed: 0,
        total_fiber_consumed: 0,
        total_sugar_consumed: 0,
        remaining_calories: 2000,
      });
    }

    // ...

    // Update the daily log with the new meal data
    dailyLog.total_calories_consumed += total_calories;
    dailyLog.total_carbohydrates_consumed += total_carbohydrates;
    dailyLog.total_proteins_consumed += total_proteins;
    dailyLog.total_fats_consumed += total_fats;
    dailyLog.total_fiber_consumed += total_fiber;
    dailyLog.total_sugar_consumed += total_sugar;

    dailyLog.remaining_calories =
      (dailyLog.remaining_calories ?? 0) - total_calories;

    // Save the updated daily log
    await dailyLog.save();

    res.status(201).json(newMeal);
  } catch (error) {
    console.error("Error adding meal:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateMeals: RequestHandler = async (req, res) => {
  try {
    const mealId = req.params.id;
    const updateMealData = req.body;

    // Find the existing meal
    const existingMeal = await Meal.findById(mealId);

    if (!existingMeal) {
      return res.status(404).json({ message: "Meal not found" });
    }

    // Calculate the changes in nutritional values
    const calorieChange =
      (updateMealData.total_calories || 0) - (existingMeal.total_calories || 0);
    const carbChange =
      (updateMealData.total_carbohydrates || 0) -
      (existingMeal.total_carbohydrates || 0);
    const proteinChange =
      (updateMealData.total_proteins || 0) - (existingMeal.total_proteins || 0);
    const fatChange =
      (updateMealData.total_fats || 0) - (existingMeal.total_fats || 0);
    const fiberChange =
      (updateMealData.total_fiber || 0) - (existingMeal.total_fiber || 0);
    const sugarChange =
      (updateMealData.total_sugar || 0) - (existingMeal.total_sugar || 0);

    // Update the meal itself
    const updatedMeal = await Meal.findByIdAndUpdate(mealId, updateMealData, {
      new: true,
    });

    if (!updatedMeal) {
      return res.status(404).json({ message: "Meal not found" });
    }

    // Update the associated DailyLog for the meal's date
    const userId = req.user.userId;
    const mealDate = updatedMeal.date;

    let dailyLog = await DailyLog.findOne({ user: userId, date: mealDate });

    if (!dailyLog) {
      dailyLog = new DailyLog({
        user: userId,
        date: mealDate,
        total_calories_consumed: 0,
        total_carbohydrates_consumed: 0,
        total_proteins_consumed: 0,
        total_fats_consumed: 0,
        total_fiber_consumed: 0,
        total_sugar_consumed: 0,
        remaining_calories: 2000,
      });
    }

    // Update the DailyLog based on the changes in nutritional values
    if (dailyLog.total_calories_consumed !== undefined) {
      dailyLog.total_calories_consumed += calorieChange;
    } else {
      dailyLog.total_calories_consumed = calorieChange;
    }

    if (dailyLog.total_carbohydrates_consumed !== undefined) {
      dailyLog.total_carbohydrates_consumed += carbChange;
    } else {
      dailyLog.total_carbohydrates_consumed = carbChange;
    }

    if (dailyLog.total_proteins_consumed !== undefined) {
      dailyLog.total_proteins_consumed += proteinChange;
    } else {
      dailyLog.total_proteins_consumed = proteinChange;
    }

    if (dailyLog.total_fats_consumed !== undefined) {
      dailyLog.total_fats_consumed += fatChange;
    } else {
      dailyLog.total_fats_consumed = fatChange;
    }

    if (dailyLog.total_fiber_consumed !== undefined) {
      dailyLog.total_fiber_consumed += fiberChange;
    } else {
      dailyLog.total_fiber_consumed = fiberChange;
    }

    if (dailyLog.total_sugar_consumed !== undefined) {
      dailyLog.total_sugar_consumed += sugarChange;
    } else {
      dailyLog.total_sugar_consumed = sugarChange;
    }

    // Ensure `dailyLog.remaining_calories` is defined
    if (dailyLog.remaining_calories === undefined) {
      dailyLog.remaining_calories = 2000; // Assuming 2000 is the daily goal
    }

    // Update the remaining calories by subtracting the calorieChange
    dailyLog.remaining_calories -= calorieChange;

    // Save the updated DailyLog
    await dailyLog.save();

    res.status(200).json(updatedMeal);
  } catch (error) {
    console.error("Error updating meal", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserMeals: RequestHandler = async (req, res) => {
  try {
    const userId = req.params.id;

    const userMeals = await Meal.find({ user: userId });

    res.status(200).json({ meals: userMeals });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser: RequestHandler = async (req, res) => {
  try {
    const mealId = req.params.id;

    const deleteMeal = await Meal.findByIdAndDelete(mealId);

    if (!deleteMeal) {
      res.status(404).json({ message: "Meal not found" });
    }
    res.status(200).json({ message: "User  was deleted" });
  } catch (error) {
    console.error("Error deleting meal", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
