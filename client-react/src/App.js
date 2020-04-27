import React from "react";
import "./App.css";
import UserPage from "./screens/UserPage";
//import ManagerHome from "./screens/ManagerHome";
//import Login from "./components/Login";
import TenantDetails from './components/TenantDetails';
import TenantHome from './screens/TenantHome';
import UserList from "./components/UserList";
import TicketHistory from "./components/TicketHistory";
import UserManagement from "./components/UserManagement";
import CreateTicketModal from "./components/CreateTicketModal";
import TechTicketManagement from "./components/TechTicketManagement";
import CreateTicket from "./components/CreateTicket";
import Login from "./components/Login";

//This is where we combine components for rendering

function App() {
  return (
    <div className="App">
      
      <UserManagement />
      {/* <TenantHome />
      <TechTicketManagement /> */}

    </div>
  );
}

export default App;
