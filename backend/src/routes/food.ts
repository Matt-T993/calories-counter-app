import express from "express";
import axios from 'axios';
import env from "../util/validateEnv"

const foodRouter = express.Router();

foodRouter.get('/', async (req, res) => {
    const query = req.query.query
    const apiUrl = `https://api.api-ninjas.com/v1/nutrition?query=${query}`;
  
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'X-Api-Key': env.API_KEY,
        },
      });
  
      res.json(response.data);
    } catch (error) {
      console.error('Request failed:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  export default foodRouter;
