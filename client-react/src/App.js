/// Joel's Front End ///

// Necessary Imports
import React from "react";
import Navbar from './components/NavBar';

// Component Imports
import Login from './screens/Login';
import SignUp from './components/UserSignUp';
import TenantHome from './screens/TenantHome';

// Styling Imports
import "./App.css";

// Routing Imports
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

// import React from "react";

// App.js Render Function and Routing
// -------------------------------------------------------- //

function App() {
  return ( 
    <BrowserRouter className = "App" >
    <center>

    {
      /* Imported Navigation Bar from Component*/
    } <Navbar / >

    {
      /* This Div is utilized to create the ViewPort Window from App.css */
    } <div className = "style" >

    {
      /* Route paths and a Switch for individual rendering of components or screens */
    } <Switch >


    <Route exact path = "/" component = {Login}/> 
    <Route exact path = "/signup" component = {SignUp}/>  
    <Route exact path = "/tenantHome" component = {TenantHome}/>

    </Switch>

    </div>

    </center>  
    </BrowserRouter >
  );
}

export default App;