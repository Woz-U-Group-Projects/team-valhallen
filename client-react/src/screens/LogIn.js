// Necessary Imports
import React from 'react';

// Routing Imports
import {BrowserRouter, Route, Switch } from 'react-router-dom';

// Component Imports
import Login from '../components/Login';
import Signup from '../components/UserSignUp';

// Jsx Rendering
const LogIn = () => (

    <div>

    {/* Neccesary for Routing and Toggle between components */}
    <BrowserRouter>

    {/* BrowserRouter, Switch, and Route are Neccesary for Independent Component Routing within the Login Page */}
    <Switch>

    {/* BrowserRouter, Switch, and Route are Neccesary for Independent Component Routing within the Login Page*/}
    <Route exact path="/" component={Login} />
    <Route path = "/signup" component={Signup} />

    </Switch>

    </BrowserRouter>
    
    </div>

);

export default LogIn;
