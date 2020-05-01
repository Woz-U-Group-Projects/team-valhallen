// Necessary Imports
import React from "react";
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

// Routing Imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Component Imports
import User from "./components/User";
import ConfigComp from "./components/ConfigComp";
import TenantDetails from './components/TenantDetails';
import Login from "./components/Login";
import UserSignUp from './components/UserSignUp';
import ManagerHomeMgmt from "./components/ManagerHomeMgmt";
import TechTicketManagement from "./components/TechTicketManagement";
// import Navbar from './components/Navbar';


// Styling Imports
import "./App.css";


// JSX Rendering
const App = ({ store }) => (
  <Provider store={store}>
    <Router className="App" >
      
      <center>
        
      {/* <Navbar /> */}
        
        
        {/* This Div is utilized to create the ViewPort Window from App.css */}
        <div className="style" >

          {
      /* Route paths and a Switch for individual rendering of components or screens */}
          <Switch >
            {/* //------------Landing/Login Routing ------------- */}
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={UserSignUp} />

            {/* //------------Management Routing ------------- */}
            <Route exact path="/manager" component={ManagerHomeMgmt} />
            <Route exact path="/manager/users" component={User} />
            <Route exact path="/manager/config" component={ConfigComp} />


          {/* //------------Tenant Routing ------------- */}
          <Route exact path="/tenantDetails" component={TenantDetails} />

          {/* //------------Technician Routing ------------- */}
          <Route exact path="/techTicketManagement" component={TechTicketManagement} />

          </Switch>

        </div>

      </center>

    </Router>
  </Provider>
)


App.propTypes = {
  store: PropTypes.object.isRequired
  /* Imported Navigation Bar from Component*/
    }


export default App;