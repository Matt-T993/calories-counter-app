import express from "express"
import * as UserController from "../controllers/user"
import { authenticateJWT } from '../middleware/authMiddleware'; 

const userRouter = express.Router();

userRouter.get("/", authenticateJWT, UserController.getUsers);
userRouter.get("/:id", authenticateJWT, UserController.getUser);
userRouter.put("/:id", authenticateJWT, UserController.updateUser);
userRouter.delete("/:id", authenticateJWT, UserController.deleteUser);
userRouter.get("/meal/:mealId", authenticateJWT, UserController.getUserMeal)
userRouter.get("/meals/:mealType", authenticateJWT, UserController.getUserMealByMealType)
userRouter.get("/info/:date", authenticateJWT, UserController.getUserInfo)

export default userRouter;


