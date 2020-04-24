import React from "react";
import "./App.css";
import UserPage from "./screens/UserPage";
//import ManagerHome from "./screens/ManagerHome";
//import Login from "./components/Login";
import TenantDetails from './components/TenantDetails';

//This is where we combine components for rendering

function App() {
  return (
    <div className="App">
      
      <TenantDetails />

    </div>
  );
}

export default App;
