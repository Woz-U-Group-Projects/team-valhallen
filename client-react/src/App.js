<<<<<<< HEAD
import React from "react";
import "./App.css";
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
      
      <Login />
      <UserPage />
    </div>
  );
}

export default App;
=======
// React and Router Imports //
import React from "react";

// import  Task from "./components/Task";
import Login from './components/Login';

// CSS Imports //
import "./styles/App.css";

// Rendering and Routing to App.js //
function App() {
  return (
    <Login />
);
}

export default App;

>>>>>>> dev
