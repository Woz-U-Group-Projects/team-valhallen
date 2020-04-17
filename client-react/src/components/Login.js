<<<<<<< HEAD
import React from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';



class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            user: {}
            // value: 'tenant'    
        };
        this.email = React.createRef();
        this.password = React.createRef();
        // this.userStatus = this.userStatus.bind(this);
    }
    componentDidMount() {
        this.getData();
    }

    // userStatus(event) {
    //     this.setState({value: event.target.value});
    //   }

    getData = () => {
        let url = "http://localhost:3001/users/"; 
        axios.get(url).then(response => this.setState({ user: response.data }));
    };

    login = () => {
        let url = "http://localhost:3001/users/login";
        axios.post(url, { email: this.email.current.value, password: this.password.current.value })
            .then(response => this.setState({ user: response.data }));
    };

    signup = () => {
        let url = "http://localhost:3001/login/";
        axios.get(url).then(response => this.setState({ users: response.data }));
    };


    render() {
        return (
            <div>
                {/* <h3>Login</h3>
                <label>Email:</label><input ref={this.email} />
                <label>Password:</label><input ref={this.password} />
                <select value={this.state.value} onChange={this.userStatus}>
                    <option  defaultValue="tenant">Tenant</option>
                    <option value="manager">Manager</option>
                    <option value="technician">Technician</option>
                </select>
                <button type="button" className="btn btn-primary" onClick={this.login}>Login</button>
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.signup}>Signup</button>
                </div> */}
                <div>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" ref={this.email} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={this.password} />
                        </Form.Group>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Choose User Status
                            </Dropdown.Toggle>

                            <Dropdown.Menu value={this.state.value} onChange={this.userStatus}>
                                <Dropdown.Item href="#/action-1">Tenant</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Manager</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Technician</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Button type="button" className="btn btn-primary" onClick={this.login}>
                            Submit
            </Button>
                    </Form>
                </div>
            </div>

        );
    }
}

export default Login;
=======
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
>>>>>>> dev
