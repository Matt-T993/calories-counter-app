const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const cors = require("cors");

const userRouter = require("./controllers/user");
const authRouter = require("./controllers/auth");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("build"));

// Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// Database connection
async function connectToDatabase() {
  try {
    await mongoose.connect(mongoString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
