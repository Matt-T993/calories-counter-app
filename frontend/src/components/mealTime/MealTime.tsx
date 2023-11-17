// MealTime.js

import React from "react";
import { MdFreeBreakfast, MdLunchDining, MdDinnerDining, MdFastfood } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";
import "./MealTimeStyle.scss";

const MealTime = () => {
  const mealData = [
    { name: "Breakfast", calories: 1664, icon: <MdFreeBreakfast size={35} /> },
    { name: "Lunch", calories: 800, icon: <MdLunchDining size={35} /> },
    { name: "Dinner", calories: 1200, icon: <MdDinnerDining size={35} /> },
    { name: "Snacks", calories: 300, icon: <MdFastfood size={35} /> },
  ];

  return (
    <Container className="mealTimeContainer">
      <div className="mealTimeWrapper">
        <h2>Meal Overview</h2>
        {mealData.map((meal, index) => (
          <Row key={index} className="mealTimeInfo">
            <Col xs={5} className="iconCol">
              {meal.icon}
            </Col>
            <Col xs={7} className="textCol">
              <div className="mealTimeText">
                <p className="mealName">{meal.name}</p>
                <p className="calories">{meal.calories} Cal</p>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </Container>
  );
};

export default MealTime;
