import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import UserPage from "./screens/UserPage";
import Login from "./components/Login";
import TenantDetails from './components/TenantDetails';
import TenantHome from './screens/TenantHome';
import ManagerHome from './screens/ManagerHome';
import TechHome from './screens/TechHome';
import UserList from "./components/UserList";
import TicketHistory from "./components/TicketHistory";
import UserManagement from "./components/UserManagement";
import CreateTicketModal from "./components/CreateTicketModal";
import TechTicketManagement from "./components/TechTicketManagement";
import CreateTicket from "./components/CreateTicket";

//This is where we combine components for rendering

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/tenantHome" component={TenantHome} />
          <Route path="/managerHome" component={ManagerHome} />
          <Route path="/techHome" component={TechHome} />
        </div>
      </Router>

      


    </div>
  );
}

export default App;
