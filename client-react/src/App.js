import React from "react";
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
//import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import "./App.css";
import ManagerHome from "./screens/ManagerHome";
import UserPage from "./screens/UserPage";
import ConfigPage from "./screens/ConfigPage";

const App = ({ store }) => (

  <Provider store={store}>
    
    <ManagerHome />

    {/* <Router>
      <div>
        <Link to="/manager">Manager Home</Link>
        <Link to="/manager/users">User Page</Link>
        <Link to="/manager/config">Config Page</Link>

        <Switch>
          <Route exact path="/manager" component={ManagerHome} />
          <Route exact path="/manager/users" component={UserPage} />
          <Route exact path="/manager/config" component={ConfigPage} />
        </Switch>
      </div>
    </Router> */}
  
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
