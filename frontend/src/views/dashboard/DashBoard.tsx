import React, { useState } from "react";
import ProgressBar from "../../components/progressBar/ProgressBar";
import { Col, Container, Row } from "react-bootstrap";
import MealTime from "../../components/mealTime/MealTime";
import Exercise from "../../components/exercise/Exercise";
import LineChart from "../../components/lineChart/LineChart";
import UserStat from "../../components/UserStats/UserStat";
import "./dashboard.scss"




const DashBoard = () => {
  return (
    <Container className="dashboardContainer" >
      <Row>
        <Col xs={3}>
          <UserStat/>
      </Col>
      <Col xs={6}>
      <ProgressBar />
      </Col>
      <Col xs={3}>
      <MealTime />
 
      </Col>

      </Row>
      <Row>
        <Col xs={3}>
        <Exercise/>
        </Col>
        <Col xs={6}>
        <LineChart/>
        </Col>
        <Col xs={3}>
          <UserStat/>
       

      </Col>
      </Row>
    </Container>
  );
};

export default DashBoard;
