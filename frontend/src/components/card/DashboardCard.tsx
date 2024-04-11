import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BreakfastImage from "../../assets/images/breakfast.png";
import { Box, Divider } from "@mui/material";
import { FiPlusCircle } from "react-icons/fi";
import { GiWheat } from "react-icons/gi";
import { CgDropOpacity } from "react-icons/cg";
import { FaFish } from "react-icons/fa";

const DashboardCard = () => {
  return (
    <>
      <div className="card__info">
        <Card className="card" sx={{ height: 400, backgroundColor: "#B2DFDB" }}>
          <CardContent className="card__content">
            <Box component="div" className="card__content--topSection">
              <CardMedia
                component="img"
                sx={{ width: 130 }}
                image={BreakfastImage}
                alt="breakfast"
              />
              <Box component="div" className="card__content--info">
                <Typography variant="h5" color="text.secondary" gutterBottom>
                  Breakfast
                </Typography>
                <Typography variant="body1" >
                  0 cals
                </Typography>
                <Typography variant="body1" >
                  6 items
                </Typography>
              </Box>
            </Box>
            <Divider>
              <FiPlusCircle className="card__content--icon" />
            </Divider>
            <Box component="div" className="card__content--bottomSection">
              <Box component="div" className="bottomSection__stats">
                <FaFish className="bottomSection__icon"  />
                <Box component="div" className="bottomSection__info">
                  <Typography variant="body1" >
                    Carbs
                  </Typography>
                  <Typography variant="body1" >
                    0g
                  </Typography>
                </Box>
              </Box>
              <Box component="div" className="bottomSection__stats">
                <GiWheat className="bottomSection__icon"/>
                <Box component="div" className="bottomSection__info">
                  <Typography variant="body1" >
                    Protein
                  </Typography>
                  <Typography variant="body1" >
                    0g
                  </Typography>
                </Box>
              </Box>
              <Box component="div" className="bottomSection__stats">
                <CgDropOpacity className="bottomSection__icon" />
                <Box component="div" className="bottomSection__info">
                  <Typography variant="body1" >
                    Fat
                  </Typography>
                  <Typography variant="body1" >
                    0g
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DashboardCard;
