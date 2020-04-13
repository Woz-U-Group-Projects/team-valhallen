import React from "react";
import "./App.css";
import  Login from "./components/Login";
// import User from "./components/User";
// import Task from "./components/Task";
import TenantHome from "./components/TenantHome";


function App() {
  return (
    <div className="App">
      <h1>MainQuest</h1>
      <Login />
      <TenantHome />
    </div>
  );
}

export default App;
