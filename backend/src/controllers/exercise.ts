import { RequestHandler } from "express";
import Exercise from "../model/Exercise";

export const getAllUserExercise: RequestHandler = async (req, res) => {
    try{
        const Exercises = await Exercise.find().exec();
        res.status(200).json(Exercises); 
    } catch (error) {
        console.error("Erro no exercises found")
    }
}

export const addExercise: RequestHandler = async (req, res) => {
    try {
        const userId = req.user.userId

        const {
            exercise_name,
            duration_in_minute,
            date,
            calories_burned,
            
        } = req.body;

        const newExercise = new Exercise({
            user: userId,
            exercise_name,
            duration_in_minute,
            date,
            calories_burned,
        });
        await newExercise.save();
    } catch (error) {
        console.error("Error adding exercise", error);
        res.status(500).json({ message: "Internal Server Error"})
    }
}

export const deleteExercise: RequestHandler = async (req, res) => {
    try{
        const exerciseId = req.params.id;
        const deleteExercise = await Exercise.findByIdAndDelete(exerciseId);
        
        if(!deleteExercise) {
            res.status(404).json({message: "exercise not found"})
        }
        res.status(200).json({message: "User was deleted"});
    } catch (error) {
        console.error("Error deleting exercise", error);
        res.status(500).json({message: "Internal server error"})
    }

}