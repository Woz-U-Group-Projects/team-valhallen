import React from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';



class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            users: [],
            user: [],
            email: '',
            password: '',
            userType: ''
        };
        this.email = React.createRef();
        this.password = React.createRef();
        this.userType = React.createRef();
    }
    componentDidMount() {
        this.getData();
    }

    userType(event) {
        this.setState({ value: event.target.value });
    }

    getData = () => {
        let url = "http://localhost:3001/users/";
        axios.get(url).then(response => this.setState({ user: response.data }));
    };
    
    login = () => {
        let url = "http://localhost:3001/users/login/";
        axios.post(url, {
            email: this.email.current.value,
            password: this.password.current.value,
            userType: this.userType.current.value
        }).then(res => {
            if (res) {
                localStorage.setItem('usertoken', res.data);
                return res.data;  
            }
        }).then(res => {
            if (res) {
                this.props.history.push('/tenantProfile');  
            }
        }).catch(err => {
            console.log(err)
        })
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

                            <Dropdown.Menu value={this.state.value} ref={this.userType}>
                                <Dropdown.Item value="tenant">Tenant</Dropdown.Item>
                                <Dropdown.Item value="manager">Manager</Dropdown.Item>
                                <Dropdown.Item value="technician">Technician</Dropdown.Item>
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
