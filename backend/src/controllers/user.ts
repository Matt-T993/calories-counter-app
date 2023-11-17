import { RequestHandler } from "express";
import DailyLog from "../model/DailyLog";
import User from "../model/User";
import Meal from "../model/Meal"
import Exercise from "../model/Exercise";

export const getUsers: RequestHandler = async(req, res) => {
    try{
        const users = await User.find().exec();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error no users found", error);
    }
}

export const getUser: RequestHandler = async(req, res) => {
    try{
     
        const user = await User.findById(req.params.id);
        if(!user) {
            return res.status(404).json({message: 'User not found'});

        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error no user found", error)
    }
}

export const updateUser: RequestHandler = async(req, res) => {
    try{
        const userId = req.params.id;
        const updateDate = req.body;

        const updateUser = await User.findByIdAndUpdate(userId, updateDate, {new: true,});

        if(!updateUser) {
            return res.status(404).json({message: 'User not found'});

        }
        res.status(200).json(updateUser);

    } catch (error) {
        console.error('Error updating user', error);
        res.status(500).json({message: 'Internal server error'});
    }
   
}

export const deleteUser: RequestHandler = async(req, res) => {
    try{
        const userId = req.params.id;

        const deleteUser = await User.findByIdAndDelete(userId);

        if(!deleteUser) {
            return res.status(404).json({message: 'User not found'});

        }
        res.status(200).json({message : " User was deleted"})
    } catch (error) {
        console.error('Error updating user', error);
        res.status(500).json({message: 'Internal server error'});
    }
}

export const getUserMeal: RequestHandler = async (req, res) => {
    try {
        const userId = req.user.userId;
        
        const mealId = req.params.mealId;
        const meal = await Meal.findOne({user: userId, _id: mealId});

        if(!meal) {
            return res.status(404).json({message: 'Meal not found'});
        }

        res.status(200).json({meal});
   
    } catch (error) {
        console.error('Error fetching meal:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}


export const getUserMealByMealType: RequestHandler = async (req, res) => {
    try {
        const userId = req.user.userId;

      const mealType = req.params.mealType.toLowerCase();
  

      const meal = await Meal.findOne({ user: userId, meal_type: { $regex: new RegExp(mealType, 'i') } });
  
      if (!meal) {
        return res.status(404).json({ message: 'Meal not found' });
      }
  
      res.status(200).json({ meal });
  
    } catch (error) {
      console.error('Error fetching meal:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  export const getUserInfo: RequestHandler = async (req, res) => {
    try {
      const userId = req.user.userId;
      const date = req.params.date; 
  
      const [userInfo, dailyLog, exercises] = await Promise.all([
        User.findOne({ _id: userId }),
        DailyLog.findOne({ user: userId, date: date }),
        Exercise.find({ user: userId, date: date }),
      ]);
  
   
      if (!userInfo || !dailyLog) {
        const notFoundResource = !userInfo ? "User" : "DailyLog";
        return res.status(404).json({ message: `${notFoundResource} not found` });
      }
  
      const totalCaloriesBurned = exercises.reduce(
        (total, exercise) => total + (exercise.calories_burned || 0),
        0
      );
  

      const response = {
        user: {
          weight: userInfo.weight,
          goal: userInfo.daily_calorie_goal
        },
        dailyLog: {
          remaining_calories: dailyLog.remaining_calories,
        },
        exercises: {
          totalCaloriesBurned,
        },
      };
  
      res.status(200).json(response);
    } catch (error) {
      console.error("Error fetching user information", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };


  
  
  
  
  
  

