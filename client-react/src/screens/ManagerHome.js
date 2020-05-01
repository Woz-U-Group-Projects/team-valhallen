// Necessary Imports
import React from 'react';

// Component Imports
import Navbar from "../components/Navbar";
import ManagerHomeMgmt from '../components/ManagerHomeMgmt';
import UserPage from "../screens/UserPage";
import ConfigPage from "../screens/ConfigPage";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const ManagerHome = () => {



    return (
        <div>
            <Navbar />
            <Router>
                <div>
                    <Link to="/manager">Manager Home</Link>
                    <Link to="/manager/users">User Page</Link>
                    <Link to="/manager/config">Config Page</Link>

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