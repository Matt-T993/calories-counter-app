import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/user"
import foodRoutes from "./routes/food"
import mealRouter from "./routes/meal";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/nutrition", foodRoutes)
app.use("/api/meal", mealRouter);

export default app;