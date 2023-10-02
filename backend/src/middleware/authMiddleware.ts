import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import env from "../util/validateEnv"

declare global {
    namespace Express {
      interface Request {
        user: any
      }
    }
  }
  



export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  jwt.verify(token, env.JWT_SECRET , (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Now TypeScript knows that 'user' is a valid property on 'Request'
    req.user = decoded;
    next();
  });
};
