// Necessary Imports
import React from "react";
import axios from "axios";

// Routing Imports
import { Redirect } from 'react-router-dom';

// Styling Imports
import { Form, Button, Container } from 'react-bootstrap';
import '../Styling.css'
import LandingNavbar from "./LandingNavbar";

// JSX Rendering
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }

    componentDidMount() {}

    userStatus(event) {
        this.setState({ value: event.target.value });
    }

    login = () => {
        let url = "http://localhost:3001/users/login";
        axios.post(url, { email: this.email.current.value, password: this.password.current.value })
            .then(response => {
                this.setState({ currentUser: response.data, approvedUser: true })
            }).catch(err => {
                console.log(err)
                alert("Login Information is Incorrect")
            });
    };

    // Component Rendering
    render() {

        const approvedUser = this.state.approvedUser
        const userType = this.state.currentUser.userType
        const userId = this.state.currentUser.userId
        const unitId = this.state.currentUser.unitId
        let redirect;

        if (approvedUser && userType === 'Tenant') {
            redirect = <Redirect
                to={{
                    pathname: "/tenantDetails",
                    state: { userId: userId, unitId: unitId }
                }} />
        }
        if (approvedUser && userType === 'Manager') {
            redirect = <Redirect
                to={{
                    pathname: "/manager",
                    state: { userId: userId }
                }} />
        }
        if (approvedUser && userType === 'Technician') {
            redirect = <Redirect
                to={{
                    pathname: "/techTicketManagement",
                    state: { userId: userId }
                }} />
        }

        return (

            <div>
                <LandingNavbar />
                <Container id="lCont1">
                    <Form >

                        <h1> Login Portal </h1>

                        <Form.Group  >
                            <Form.Label  > Email address </Form.Label >
                            <Form.Control type="email" placeholder="Enter Email" ref={this.email} />
                        </Form.Group >

                        <Form.Group   >
                            <Form.Label  > Password </Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" ref={this.password} />
                        </Form.Group >

                        <Button type="button" className="btn btn-primary" onClick={this.login}>
                            Login
                        </Button>
                        <div>
                            <a href="/signup">Sign-Up Here</a>
                        </div>

                    </Form>
                </Container >
                {redirect}
            </div>

        );
    }
}

export default Login;