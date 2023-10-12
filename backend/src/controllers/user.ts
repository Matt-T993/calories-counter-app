import { RequestHandler } from "express";
import User from "../model/User";
import Meal from "../model/Meal"

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
        const userId = req.user.userId; // Access the user's ID from req.user
        
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
        const userId = req.params.userId; // Access the user's ID from req.user
     
      // Get the mealType from the route parameter and convert it to lowercase
      const mealType = req.params.mealType.toLowerCase();
  
      // Use a case-insensitive query for meal_type
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


  
  
  
  
  
  

