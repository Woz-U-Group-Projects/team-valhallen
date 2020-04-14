import React from "react";
import  Task from "./components/Task";
import User from "./components/User";
import TechSignup from "./components/TechSignup";
import ManagerSignup from "./components/ManagerSignup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ManagerSignup />
      <Task />
      <User />
      <TechSignup />
    </div>
  );
}

export default App;
