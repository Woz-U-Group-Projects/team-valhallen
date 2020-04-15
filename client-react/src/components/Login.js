import React from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            users: []   
        };
        this.email = React.createRef();
        this.password = React.createRef();
    }
    componentDidMount() {
        //this.getData();
    }

    getData = () => {
        let url = "http://localhost:3001/users/login/";
        axios.get(url).then(response => this.setState({ users: response.data }));
    };

    login = () => {
        let url = "http://localhost:3001/users/login/";
        axios.post(url, { email: this.email.current.value, password: this.password.current.value })
            .then(response => this.setState({ users: response.data }));
    };


    render() {
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