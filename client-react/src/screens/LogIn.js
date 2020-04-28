// Necessary Imports
import React from 'react';

// Component Imports
import Login from '../components/Login';
import Signup from '../components/UserSignUp';

// Routing Imports
import {BrowserRouter, Route, Switch } from 'react-router-dom';

// Default Export and Rendering to the DOM w/ JSX
const LogIn = () => (
    <div>

    {/* Neccesary for Routing and Toggle between components */}
    <BrowserRouter>

    {/* BrowserRouter, Switch, and Route are Neccesary for Independent Component Routing within the Login Page*/}
    <Switch>
    <Route exact path="/" component={Login} />
    <Route path = "/signup" component={Signup} />
    </Switch>

    </BrowserRouter>
    
    </div>
);

export default LogIn;