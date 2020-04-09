import React from "react";
import axios from "axios";
import '../styles/Login.css';

// Image Imports

import logo from '../img/mq01.png';
import menu from '../img/mn01.png';
import test from '../img/tst01.png';
import headtext from '../img/ul01.png';
import login from '../img/ul01.png';
import login2 from '../img/lo01.png';



// Extends the prop

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login : [] };
    this.usrName = React.createRef();
  }

// Prop did mount

  componentDidMount() {
    this.getData();
  }

  // Connects the prop

  getData = () => {
    let url = "http://localhost:3001/login";
    axios.get(url).then(response => this.setState({ login: response.data }));
  };

  // Renderes the prop

  render() {
    return (

// Template JSX Window

      <body>
          <div id="win1">
              <nav className="nav01">
                <img src={logo} className="logo" alt="main-quest logo"/>
                <img src={login} className="login" alt="login text" />
                <img src={login2} className="login2" alt="login text 2" />
                <div className="mncnt1">
                <img src={menu} className="menu" alt="menu button" />
                </div>
              </nav>
          <div className="mncont1">
          <h3 className="tlttxt">Login</h3>
          <div className="credbox">
            <div className="uinput1">
            Username:
            <input name="uinputbx" type="text" />
            </div>
            <div className="pinput1">
            <p id="ptext1">Password:</p>
            <input name="pinputbx" type="password" />
            </div>
          </div>
          </div>
          </div>
      </body>

// Template JSX Window
    
    );
  }
}

// Routing Data Goes Here! //
// The lines above are the styling //

export default Login;
