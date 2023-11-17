// UserStat.js

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './userStat.scss';

const UserStat = () => {
  return (
    <Container className='userStatContainer'>
      <div className="userStatWrapper">
      <h2>User Information</h2>
      <Row className='userStatInfo'>
        <Col>
       
          <div className='userStatText'>
            <span className='statValue'>2000</span>
            <span className='statLabel'>goal</span>
          </div>
          <div className='userStatText'>
            <span className='statValue'>1115</span>
            <span className='statLabel'>eaten</span>
          </div>
          <div className='userStatText'>
            <span className='statValue'>345</span>
            <span className='statLabel'>exercise</span>
          </div>
          <div className='userStatText'>
            <span className='statValue'>70</span>
            <span className='statLabel'>weight</span>
          </div>
 
        </Col>
      </Row>
      </div>
    </Container>
  );
};

export default UserStat;
