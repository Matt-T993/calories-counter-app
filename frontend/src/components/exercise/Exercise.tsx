import React from 'react'
import "./exercise.scss";
import { Button, Col, Container, Row } from 'react-bootstrap';
const Exercise = () => {
  return (
    <Container className='exerciseContainer'>
        <Row className='exerciseWrapper'>
            <Col>
            <p>Exercise</p>
            <Button>Add Exercise</Button>
            </Col>

        </Row>
    </Container>
  )
}

export default Exercise