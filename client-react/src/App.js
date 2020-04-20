import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import  Login from "./components/Login";
import  Landing from "./components/Landing";
import  TenantDetails from "./components/TenantDetails";
import  Navbar from "./components/Navbar";
import UserSignUp from "./components/UserSignUp";
// import User from "./components/User";
// import Task from "./components/Task";
// import TenantHome from "./components/TenantHome";




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/signup" component={UserSignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/tenantDetails" component={TenantDetails} />
        </div>
      </div>
    </Router>
  );
}

export default App;
