// Necessary Imports
import React from 'react';
import UserManagement from '../components/UserManagement';
import { Container, Col, Row, Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from '../img/mq03.png';

// JSX Rendering
const UserPage = () => (

  <div className="UserPage">
    <Navbar id="mngNav" expand="lg" bg="gray">
                <Row>
                <Col id="mngT2Col">
                <Navbar.Toggle id="mngToggleMenu" aria-controls="1" />
                <Navbar.Collapse id="1">
                <Nav className="mr-auto">
                <Link id="mngT2Links" to="/manager">Manager Page</Link>
                    <Link id="mngT2Links" to="/manager/config">Config Page</Link>
                    
                    <Link id="mngT2Links" to="/">Logout</Link>
                </Nav >
                </Navbar.Collapse>
                </Col>

                <Col id="mngT3Col">
                    <Navbar.Brand className="center" href="/"><img id="mngLogoNav" src={Logo} alt="logo" /></Navbar.Brand>
                </Col>

                <Col id="mngT4Col">
                </Col>
                </Row>

            </Navbar>
    <h1>User Page</h1>
    <UserManagement />
      
  </div>
    
)

export default UserPage;