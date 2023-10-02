import express from 'express'
import * as MealController from "../controllers/meal"
import { authenticateJWT } from '../middleware/authMiddleware';

const mealRouter = express.Router();

mealRouter.post("/", authenticateJWT, MealController.addMeals);
mealRouter.post("/all", authenticateJWT, MealController.getAllMeals);
mealRouter.post("/:id", authenticateJWT, MealController.updateMeals);
mealRouter.post("/:id", authenticateJWT, MealController.deleteUser);
mealRouter.get("/all/:id", authenticateJWT, MealController.getUserMeals);



export default mealRouter;

