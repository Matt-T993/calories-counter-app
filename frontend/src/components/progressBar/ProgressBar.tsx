import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./progressBar.scss";
import { Container, Row, Col } from "react-bootstrap";

const ProgressBar = () => {
  const [progress, setProgress] = useState<number>(10);

  const containerStyles = {
    border: "1px solid ",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Container style={{ maxWidth: "600px", ...containerStyles }}>
      <Row>
        <Col>
          <h1></h1>
          <CircularProgressbar
            className="progressBarMain"
            value={progress}
            text={`${progress}% cal`}
            styles={buildStyles({
              textColor: "black",
              pathColor: "#00ff00",
              trailColor: "#333",
            })}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <CircularProgressbar
            className="progressBar"
            value={progress}
            text={`${progress}g`}
            styles={buildStyles({
              textColor: "black",
              pathColor: "#00ff00",
              trailColor: "#333",
            })}
          />
          <p>fat</p>
        </Col>
        <Col xs={3}>
          <CircularProgressbar
            className="progressBar"
            value={progress}
            text={`${progress}g`}
            styles={buildStyles({
              textColor: "black",
              pathColor: "#00ff00",
              trailColor: "#333",
            })}
          />
          <p>proteins</p>
        </Col>
        <Col xs={3}>
          <CircularProgressbar
            className="progressBar"
            value={progress}
            text={`${progress}g`}
            styles={buildStyles({
              textColor: "black",
              pathColor: "#00ff00",
              trailColor: "#333",
            })}
          />
          <p>carbs</p>
        </Col>
        <Col xs={3}>
          <CircularProgressbar
            className="progressBar"
            value={progress}
            text={`${progress}g`}
            styles={buildStyles({
              textColor: "black",
              pathColor: "#00ff00",
              trailColor: "#333",
            })}
          />
          <p>fibers</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProgressBar;
