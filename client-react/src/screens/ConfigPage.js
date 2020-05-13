// Necessary Imports
import React from 'react';
import ConfigComp from '../components/ConfigComp';

import { Navbar, Col, Row, Nav, FormLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../img/mq03.png';

const ConfigPage = () => {

return (
    <div>
                <Navbar id="mngNav" expand="lg" bg="gray">
                <Row>
                <Col id="mngT2Col">
                <Navbar.Toggle id="mngToggleMenu" aria-controls="1" />
                <Navbar.Collapse id="1">
                <Nav className="mr-auto">
                <Link id="mngT2Links" to="/manager">Manager Page</Link>
                    <Link id="mngT2Links" to="/manager/users">User Page</Link>
                    
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
                <h1 id="cnfH1" >Configuration Page</h1>
                <ConfigComp />
    </div>
);

};

export default ConfigPage;