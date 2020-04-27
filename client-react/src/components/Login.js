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
            user: {},
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
        this.setState({ value: event.target.value });
    }

    getData = () => {
        let url = "http://localhost:3001/users/login";
        axios.get(url).then(response => this.setState({ users: response.data }));
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
                                <Dropdown.Item href="#/tenant">Tenant</Dropdown.Item>
                                <Dropdown.Item href="#/manager">Manager</Dropdown.Item>
                                <Dropdown.Item href="#/technician">Technician</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Button type="button" className="btn btn-primary" onClick={this.login}>
                            Submit
                        </Button>
                    </Form>
                
            </div>

        );
    }
}

export default Login;
