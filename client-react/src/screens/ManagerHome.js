// Necessary Imports
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../Styling.css'

// Component Imports
import Navbar from "../components/Navbar";
import ManagerHomeMgmt from '../components/ManagerHomeMgmt';
import UserPage from "./UserPage";
import ConfigPage from "../screens/ConfigPage";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const ManagerHome = () => {



    return (
        <div className="text-center">
            <Navbar />
            <Router>
                <div  >
                    <Nav variant="pills" defaultActiveKey="/manager" className="justify-content-center">
                        <Nav.Item >
                            <Nav.Link href="/manager" >Manager Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/manager/users"><Link to="/manager/users" >User Page</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/manager/config" ><Link to="/manager/config" >Config Page</Link></Nav.Link>
                        </Nav.Item>
                    </Nav>
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


        </div>
    );

};

export default ManagerHome;