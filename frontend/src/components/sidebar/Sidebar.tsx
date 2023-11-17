// Import necessary dependencies
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import './sidebar.scss'; 

// Sidebar component
const Sidebar = () => {
  return (
    <Container className="sidebar-container">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Dashboard</Nav.Link>
        <Nav.Link href="/about">Meals</Nav.Link>
        <Nav.Link href="/contact">Exercise</Nav.Link>
        <Nav.Link href="/contact">Setting</Nav.Link>
        <Nav.Link href="/contact">Logout</Nav.Link>
      </Nav>
    </Container>
  );
}

export default Sidebar;
