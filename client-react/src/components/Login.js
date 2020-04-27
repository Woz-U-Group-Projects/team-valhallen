import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import TenantDetails from "./TenantDetails";



class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            users: [],
            user: {},
            loggedIn: false,
            value: 'tenant'    
        };
        this.email = React.createRef();
        this.password = React.createRef();
        this.userStatus = this.userStatus.bind(this);
    }
    componentDidMount() {
        this.getData();
    }

    userStatus(event) {
        this.setState({value: event.target.value});
      }

    getData = () => {
        let url = "http://localhost:3001/users/";
        axios.get(url).then(response => this.setState({ users: response.data }));
    };

    login = () => {
        let url = "http://localhost:3001/users/login";
        axios.post(url, { email: this.email.current.value, password: this.password.current.value })
            .then(response => this.setState({ user: response.data }))
            .then(this.setState({ loggedIn: true }));
            
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
                                <Dropdown.Item value="Tenant">Tenant</Dropdown.Item>
                                <Dropdown.Item value="Manager">Manager</Dropdown.Item>
                                <Dropdown.Item value="Technician">Technician</Dropdown.Item>
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
