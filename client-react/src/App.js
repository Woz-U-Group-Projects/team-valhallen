// Necessary Imports
import React from "react";
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

// Routing Imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Component Imports
import UserPage from "./screens/UserPage";
import ConfigPage from "./screens/ConfigPage";
import TenantDetails from './components/TenantDetails';
import Login from "./components/Login";
import UserSignUp from './components/UserSignUp';
import ManagerHome from './screens/ManagerHome';
import TechTicketManagement from "./components/TechTicketManagement";
import UserManagement from './components/UserManagement';
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

          {/* Route paths and a Switch for individual rendering of components or screens */}
          <Switch >
            {/* //------------Landing/Login Routing ------------- */}
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={UserSignUp} />

            {/* //------------Management Routing ------------- */}
            <Route exact path="/manager" component={ManagerHome} />
            <Route exact path="/manager/users" component={UserManagement} />
            <Route exact path="/manager/config" component={ConfigPage} />


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