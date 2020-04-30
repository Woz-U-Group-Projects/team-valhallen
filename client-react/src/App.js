// Necessary Imports
import React from "react";
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

// Routing Imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Component Imports
import UserPage from "./screens/UserPage";
import TechHome from './screens/TechHome';
import ManagerHome from "./screens/ManagerHome";
import ConfigPage from "./screens/ConfigPage";
import TenantDetails from './components/TenantDetails';
import Login from "./components/Login";
import UserSignUp from './components/UserSignUp';

// import UserList from "./components/UserList";
// import TicketHistory from "./components/TicketHistory";
// import UserManagement from "./components/UserManagement";
// import CreateTicketModal from "./components/CreateTicketModal";
// import TechTicketManagement from "./components/TechTicketManagement";
// import CreateTicket from "./components/CreateTicket";
// import TenantHome from './screens/TenantHome';

// Styling Imports
import "./App.css";

// JSX Rendering
const App = ({ store }) => (
  <Provider store={store}>
    <Router className="App" >
      
      <center>
        
      <Navbar />
        {/* <Link to="/manager">New Mgr Home</Link>
        <Link to="/manager/users">New User Page</Link>
        <Link to="/manager/config">New Config Page</Link> */}
        
        {/* This Div is utilized to create the ViewPort Window from App.css */}
        <div className="style" >

          {
      /* Route paths and a Switch for individual rendering of components or screens */}
          <Switch >
            {/* //------------Landing/Login Routing ------------- */}
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={UserSignUp} />

            {/* //------------Management Routing ------------- */}
            <Route exact path="/manager" component={ManagerHome} />
            <Route exact path="/manager/users" component={UserPage} />
            <Route exact path="/manager/config" component={ConfigPage} />

          {/* //------------Management Routing ------------- */}
          <Route exact path="/managerHome" component={ManagerHome} />
          <Route exact path="/manager/users" component={UserPage} />
          <Route exact path="/manager/config" component={ConfigPage} />

          {/* //------------Tenant Routing ------------- */}
          <Route path="/tenantDetails" component={TenantDetails} />

          {/* //------------Technician Routing ------------- */}
          <Route path="/techHome" component={TechHome} />

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