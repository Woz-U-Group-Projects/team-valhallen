// import React from "react";
// import "./App.css";
// import UserPage from "./screens/UserPage";
// //import ManagerHome from "./screens/ManagerHome";
// //import Login from "./components/Login";
// import TenantDetails from './components/TenantDetails';
// import TenantHome from './screens/TenantHome';
// import UserList from "./components/UserList";
// import TicketHistory from "./components/TicketHistory";
// import UserManagement from "./components/UserManagement";
// import CreateTicketModal from "./components/CreateTicketModal";
// import TechTicketManagement from "./components/TechTicketManagement";
// import CreateTicket from "./components/CreateTicket";

// //This is where we combine components for rendering

// function App() {
//   return (
//     <div className="App">
//       <CreateTicketModal />
      
//       <TenantHome />
//       <TechTicketManagement />

//     </div>
//   );
// }

// export default App;


 /// Joel's Front End ///

// Necessary Imports
import React from "react";
import Navbar from './components/NavBar';

// Component Imports
import Signup from './components/UserSignUp';
import Login from './screens/Login';

// Styling Imports
import "./App.css";

// Routing Imports
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";


// App.js Render Function and Routing
// -------------------------------------------------------- //

function App() {
  return ( 
    <BrowserRouter className = "App" >
    <center>

    {
      /* Imported Navigation Bar from Component*/ } 
      <Navbar / >

    {
      /* This Div is utilized to create the ViewPort Window from App.css */ } 
      <div className = "style" >

    {
      /* Route paths and a Switch for individual rendering of components or screens */ } 
      <Switch >

    <Route exact path = "/" component = {Login}/> 
    <Route path = "/signup" component = {Signup}/>

    </Switch>

    </div>

    </center> 
    </BrowserRouter>
  );
}

export default App;
