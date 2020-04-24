import React from "react";
import "./App.css";
import CreateTicket from "./components/CreateTicket";
import TenantDetails from "./components/TenantDetails";
import UserPage from "./screens/UserPage";
import Login from "./components/Login";
import UserSignUp from "./components/UserSignUp";
import CreateTicketModal from "./components/CreateTicketModal";
import TicketTable from "./components/TicketTable";
//import UserPage from "./screens/UserPage";
//import ManagerHome from "./screens/ManagerHome";
//import Login from "./components/Login";

//This is where we combine components for rendering

function App() {
  return (
    <div className="App">

      <CreateTicketModal />
      <TicketTable
        headerTitle="Universal Table"
        tableHeader1="Header 1"
        tableHeader2="Header 2"
        tableHeader3="Header 3"
        tableHeader4="Header 4"
        tableHeader5="Header 5"
        tableBody1="Body 1"
        tableBody2="Body 2"
        tableBody3="Body 3"
        tableBody4="Body 4"
        tableBody5="Body 5"
      />
    </div>
  );
}

export default App;
