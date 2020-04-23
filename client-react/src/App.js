import React from "react";
import "./App.css";
import CreateTicket from "./components/CreateTicket";
import TenantDetails from "./components/TenantDetails";
import UserPage from "./screens/UserPage";
import Login from "./components/Login";
import UserSignUp from"./components/UserSignUp";
//import UserPage from "./screens/UserPage";
//import ManagerHome from "./screens/ManagerHome";
//import Login from "./components/Login";

//This is where we combine components for rendering

function App() {
  return (
    <div className="App">
      
     <TenantDetails />
      
    </div>
  );
}

export default App;
