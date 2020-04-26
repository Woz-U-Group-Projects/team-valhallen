import React from "react";
import "./App.css";
import UserPage from "./screens/UserPage";
//import ManagerHome from "./screens/ManagerHome";
//import Login from "./components/Login";
import TenantDetails from './components/TenantDetails';
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
      <CreateTicketModal />
      
      <TechTicketManagement />

    </div>
  );
}

export default App;
