import { RequestHandler } from "express"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import User from "../model/User"
import env from "../util/validateEnv"

export const register: RequestHandler = async (req, res) => {
    try {
      // Extract user data from the request body
      const {
        email,
        password,
        role,
        profile_picture,
        first_name,
        last_name,
        age,
        weight,
        height,
        daily_calorie_goal,
        activity_level,
      } = req.body;

      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10); 
      const newUser = new User({
        email,
        password: hashedPassword, 
        role,
        profile_picture,
        first_name,
        last_name,
        age,
        weight,
        height,
        daily_calorie_goal,
        activity_level,
      });
  

      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  export const login : RequestHandler = async (req, res) => {
    try{
      const {email, password} = req.body;
    
      const user = await User.findOne({email});

      if(!user) {
        return res.status(401).json({message: 'Authentication failed'});

      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Authentication failed' });
      }

      const token = jwt.sign(
        { userId: user._id, email: user.email },
        env.JWT_SECRET, 
        { expiresIn: '1h' } // Token expiration time
      );
  
      // Return the token in the response
      res.status(200).json({ token, userId: user._id });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }

  }



  