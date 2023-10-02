import express from "express"
import * as AuthController from "../controllers/auth"
import { authenticateJWT } from '../middleware/authMiddleware'; 

const authRouter = express.Router();

authRouter.post("/register", AuthController.register);

authRouter.post("/login", AuthController.login);
authRouter.get('/protected', authenticateJWT, (req, res) => {
  
    res.status(200).json({ message: 'Access granted' });
  });

export default authRouter;
