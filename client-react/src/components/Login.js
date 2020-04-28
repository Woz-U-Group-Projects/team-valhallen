import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import TenantDetails from "./TenantDetails";
import TenantHome from "../screens/TenantHome";
import { useDispatch } from 'react-redux';
import { CURRENT_USER } from '../actions/actions';

// function LoginButton(props) {
//     return (
//         <Button type="button" className="btn btn-primary" onClick={props.onClick}>Login</Button>
//     );
// }

// function LogoutButton(props) {
//     return (
//         <Button type="button" className="btn btn-primary" onClick={props.onClick}>Logout</Button>
//     );
// }

// const dispatch = useDispatch()

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            users: [],
            user: {},
            userId: 0,
            email: '',
            password: '',
            userType: '',
            loggedIn: false,
            value: 'tenant',
            currentUser: {},
            approvedUser: false
        };
        this.email = React.createRef();
        this.password = React.createRef();
        this.userStatus = this.userStatus.bind(this);
        // this.handleLoginClick = this.handleLoginClick.bind(this);
        // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    // handleLoginClick() {
    //     this.setState({ loggedIn: true });
    // }

    // handleLogoutClick() {
    //     this.setState({ loggedIn: false });
    // }

        

    componentDidMount() {
        this.getData();
    }

    userStatus(event) {
        this.setState({ value: event.target.value });
    }

    getData = () => {
        let url = "http://localhost:3001/users/";
        axios.get(url).then(response => this.setState({ users: response.data }));
    };

    login = () => {
        let url = "http://localhost:3001/users/login";
        axios.post(url, { email: this.email.current.value, password: this.password.current.value })
        .then(response => { this.setState({ currentUser: response.data, approvedUser: true })
            //this.props.history.push('/tenantDetails');
        }).catch(err => {
            console.log(err)
        });

        // dispatch({ type: CURRENT_USER, payload: this.state.user });
            
            
            
    };




    render() {

        // const loggedIn = this.state.loggedIn;
        // let button;
        // if (loggedIn) {
        //     button = <LogoutButton onClick={this.handleLogoutClick} />;
        // } else {
        //     button = <LoginButton onClick={this.handleLoginClick} />;
        // }

        const approvedUser = this.state.approvedUser
        const userType = this.state.currentUser.userType
        const userId = this.state.currentUser.userId
        let redirect;

        if (approvedUser && userType === 'Tenant') {
            redirect = <Redirect 
            to={{
                pathname: "/tenantDetails",
                state: { userId: userId }
              }}/>
        }
        if (approvedUser && userType === 'Manager') {
            redirect = <Redirect 
            to={{
                pathname: "/managerHome",
                state: { userId: userId }
              }}/>
        }
        if (approvedUser && userType === 'Technician') {
            redirect = <Redirect 
            to={{
                pathname: "/techHome",
                state: { userId: userId }
              }}/>
        }

        return (
            <div>
                
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

                        {/* <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Choose User Status
                            </Dropdown.Toggle>

                            <Dropdown.Menu value={this.state.value} onChange={this.userStatus}>
                                <Dropdown.Item value="Tenant">Tenant</Dropdown.Item>
                                <Dropdown.Item value="Manager">Manager</Dropdown.Item>
                                <Dropdown.Item value="Technician">Technician</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}

                        <Button type="button" className="btn btn-primary" onClick={this.login}>
                            Login
                            
                        </Button>
                        
                    </Form>

                    {redirect}


                </div>
            </div>

        );
    }
}

export default Login;
