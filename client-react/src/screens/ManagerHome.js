// Necessary Imports
import React from 'react';

// Component Imports
import ManagerHomeMgmt from '../components/ManagerHomeMgmt';
import UserPage from "../screens/UserPage";
import ConfigPage from "../screens/ConfigPage";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import '../Styling.css';
import Logo from '../img/mq03.png';

const ManagerHome = () => {



    return (
        <div>
            <Navbar id="mngNav" expand="lg" bg="gray">
                <Row>
                <Col id="mngT2Col">
                <Navbar.Toggle id="mngToggleMenu" aria-controls="1" />
                <Navbar.Collapse id="1">
                <Nav className="mr-auto">
                    <Link id="mngT2Links" to="/manager/users">User Page</Link>
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

            <Container>
            <Router>
                <div>

                    <Switch>
                        <Route exact path="/manager" component={ManagerHomeMgmt} />
                        <Route exact path="/manager/users" component={UserPage} />
                        <Route exact path="/manager/config" component={ConfigPage} />
                    </Switch>
                </div>
            </Router>
            </Container>
            
            
        </div>
    );

};

export default ManagerHome;