// Necessary Imports
import React from 'react';

// Component Imports
import LandingNavbar from "../components/LandingNavbar";
import ManagerHomeMgmt from '../components/ManagerHomeMgmt';
import UserPage from "../screens/UserPage";
import ConfigPage from "../screens/ConfigPage";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import '../Styling.css';
import Logo from '../img/mq03.png';

const ManagerHome = () => {



    return (
        <div>
            <div id="mngNav">
                    <a href="/"><img id="logoNav" src={Logo} alt="logo" /></a>
            </div>
            <Container>
            <Router>
                <div>
                    {/* <Link to="/manager">Manager Home</Link>
                    <Link to="/manager/users">User Page</Link>
                    <Link to="/manager/config">Config Page</Link> */}

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