import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RecipeImage from "../../assets/images/recipe.png";
import MealsImage from "../../assets/images/meals.png";
import { Box, CardMedia } from "@mui/material";
import { MdArrowForwardIos } from "react-icons/md";

const MealCard = () => {
  return (
    <>
      <div className="meal-card__info">
        <Card className="card" sx={{ height: 100, backgroundColor: "#B2DFDB" }}>
          <CardContent className="mealCard__content">
            <Box className="mealCard__content--leftSection">
              <CardMedia
                component="img"
                sx={{ width: 70 }}
                image={RecipeImage}
                alt="breakfast"
                className="mealCard__content--img"
              />
              <Box className="leftSection__info">
                <Typography variant="h5">My Recipes</Typography>
                <Typography variant="body1">0 recipes</Typography>
              </Box>
            </Box>
            <MdArrowForwardIos className="mealTime__content--icon" />
          </CardContent>
        </Card>
      </div>
      <div className="meal-card__info">
        <Card className="card" sx={{ height: 100, backgroundColor: "#B2DFDB" }}>
          <CardContent className="mealCard__content">
            <Box className="mealCard__content--leftSection">
              <CardMedia
                component="img"
                sx={{ width: 70 }}
                image={MealsImage}
                alt="breakfast"
                className="mealCard__content--img"
              />
              <Box className="leftSection__info">
                <Typography variant="h5">My Meals</Typography>
                <Typography variant="body1">0 recipes</Typography>
              </Box>
            </Box>
            <MdArrowForwardIos className="mealTime__content--icon" />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MealCard;
