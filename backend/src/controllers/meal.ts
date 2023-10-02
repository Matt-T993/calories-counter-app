import { RequestHandler } from "express";
import Meal from "../model/Meal"


export const getAllMeals: RequestHandler = async(req, res) => {
    try{
        const Meals = await Meal.find().exec();
        res.status(200).json(Meals)
    } catch (error) {
        console.error("Error no users found", error)
    }
}

export const addMeals: RequestHandler = async(req, res) => {
    try{
        const {
            user,
            meal_name,
            date_and_time,
            meal_type,
            total_calories, 
            total_carbohydrates,
            total_proteins,
            total_fats,
            total_fiber,
            total_sugar,
        
        } = req.body;
        const newMeal = new Meal({
            user,
            meal_name,
            date_and_time,
            meal_type,
            total_calories, 
            total_carbohydrates,
            total_proteins,
            total_fats,
            total_fiber,
            total_sugar,
        
        });
        await newMeal.save();
        res.status(201).json(newMeal);
    } catch (error) {
        console.error("Error adding meal:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
}

export const updateMeals: RequestHandler = async(req, res) => {
    try {
    const mealId = req.params.id;
    const updateMeals = req.body;

    const updateMeal  = await Meal.findByIdAndUpdate(mealId, updateMeals, {new: true});

    if(updateMeals){
        res.status(404).json({message: 'Meal not found'});

    }
    res.status(200).json(updateMeal);

}catch (error) {
    console.error('Error updating meal', error);
    res.status(500).json({message: 'Internal server error'});

}
}

export const deleteUser: RequestHandler = async(req, res) => {
    try {
        const mealId  = req.params.id;

        const deleteMeal = await Meal.findByIdAndDelete(mealId);
        
        if(!deleteMeal) {
            res.status(404).json({message: 'Meal not found'});
        }
        res.status(200).json({message: "User  was deleted"})
    } catch (error) {
        console.error('Error deleting meal', error);
        res.status(500).json({message: 'Internal server error'});
    }
}

export const getUserMeals: RequestHandler = async (req, res) => {
    try {
      const userId = req.user._id;
      
      const userMeals = await Meal.find({ user: userId });
  

      res.status(200).json({ meals: userMeals });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


