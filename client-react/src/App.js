import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import  Login from "./components/Login";
import  Landing from "./components/Landing";
import  TenantProfile from "./components/TenantProfile";
import  Navbar from "./components/Navbar";
import Signup from "./components/Signup";
// import User from "./components/User";
// import Task from "./components/Task";
// import TenantHome from "./components/TenantHome";
// import TenantDetails from "./components/TenantDetails";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/tenantProfile/:id" component={TenantProfile} />
        </div>
      </div>
    </Router>
  );
}

export default App;
