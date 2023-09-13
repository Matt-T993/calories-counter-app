const authRouter = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

authRouter.post("/register", async (req, res) => {
  try {
    const emailExist = await User.findOne({ email: req.body.email });

    if (emailExist) {
      res.status(400).send("Email alredy exists");
      return;
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      age: req.body.age,
      weight: req.body.weight,
      height: req.body.height,
      daily_calorie_goal: req.body.daily_calorie_goal,
      activity_level: req.body.activity_level,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = authRouter;
