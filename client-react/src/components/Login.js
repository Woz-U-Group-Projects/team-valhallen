// Necessary Imports
import React from "react";
import axios from "axios";

// Routing Imports
import { BrowserRouter as Link, Redirect } from 'react-router-dom';

// Styling Imports
import { Form, Button, Container, Col } from 'react-bootstrap';
import '../Styling.css'

// import Dropdown from 'react-bootstrap/Dropdown';
// import TenantDetails from "./TenantDetails";
// import TenantHome from "../screens/TenantHome";
// import { useDispatch } from 'react-redux';
// import { CURRENT_USER } from '../actions/actions';

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

// JSX Rendering
class Login extends React.Component {
    constructor(props) {
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

    // Component Rendering
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
                state: { userId: userId }}}/>
        }
        if (approvedUser && userType === 'Manager') {
            redirect = <Redirect 
            to={{
                pathname: "/managerHome",
                state: { userId: userId }}}/>
        }
        if (approvedUser && userType === 'Technician') {
            redirect = <Redirect 
            to={{
                pathname: "/techHome",
                state: { userId: userId }}}/>
        }

        return (

            <div>
            <Container id="lCont1">
            <Form >

            <h1> Login Portal </h1>

            <Form.Group id = "eGroup1" controlId = "formBasicEmail" >
            <Form.Label id = "eLabel1" > Email address </Form.Label > 
            <Form.Control id = "eInput1" type = "email" placeholder = "Enter Email" ref = {this.email}/> 
            </Form.Group >

            <Form.Group id = "pGroup1" controlId = "formBasicPassword" >
            <Form.Label id = "pLabel1" > Password </Form.Label> 
            <Form.Control id = "pInput1" type = "password" placeholder = "Enter Password" ref = {this.password}/>
            </Form.Group >

            <Button type = "button" className = "btn-lg btn-warning mt-3" onClick = {this.login} > Submit </Button>

            <Col className = "mt-5" >
            <h5 > New to Main-Quest?
            <Link id="sLink1" to = "/signup" activeClassName = "active" >
            Signup </Link>!</h5 ></Col>

            </Form> 
            </Container >
            </div>

        );
    }
}

export default Login;

// Original Login Component from Dev

// \/ \/ \/ \/ \/

// import React from "react";
// import axios from "axios";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown';



// class Login extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             user: {}
//             // value: 'tenant'    
//         };
//         this.email = React.createRef();
//         this.password = React.createRef();
//         // this.userStatus = this.userStatus.bind(this);
//     }
//     componentDidMount() {
//         this.getData();
//     }

//     // userStatus(event) {
//     //     this.setState({value: event.target.value});
//     //   }

//     getData = () => {
//         let url = "http://localhost:3001/users/"; 
//         axios.get(url).then(response => this.setState({ user: response.data }));
//     };

//     login = () => {
//         let url = "http://localhost:3001/users/login";
//         axios.post(url, { email: this.email.current.value, password: this.password.current.value })
//             .then(response => this.setState({ user: response.data }));
//     };

//     signup = () => {
//         let url = "http://localhost:3001/login/";
//         axios.get(url).then(response => this.setState({ users: response.data }));
//     };


//     render() {
//         return (
//             <div>
//                 {/* <h3>Login</h3>
//                 <label>Email:</label><input ref={this.email} />
//                 <label>Password:</label><input ref={this.password} />
//                 <select value={this.state.value} onChange={this.userStatus}>
//                     <option  defaultValue="tenant">Tenant</option>
//                     <option value="manager">Manager</option>
//                     <option value="technician">Technician</option>
//                 </select>
//                 <button type="button" className="btn btn-primary" onClick={this.login}>Login</button>
//                 <div>
//                     <button type="button" className="btn btn-primary" onClick={this.signup}>Signup</button>
//                 </div> */}
//                 <div>
//                     <Form>
//                         <Form.Group controlId="formBasicEmail">
//                             <Form.Label>Email address</Form.Label>
//                             <Form.Control type="email" placeholder="Enter email" ref={this.email} />
//                         </Form.Group>

//                         <Form.Group controlId="formBasicPassword">
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type="password" placeholder="Password" ref={this.password} />
//                         </Form.Group>

//                         <Dropdown>
//                             <Dropdown.Toggle variant="success" id="dropdown-basic">
//                                 Choose User Status
//                             </Dropdown.Toggle>

//                             <Dropdown.Menu value={this.state.value} onChange={this.userStatus}>
//                                 <Dropdown.Item href="#/action-1">Tenant</Dropdown.Item>
//                                 <Dropdown.Item href="#/action-2">Manager</Dropdown.Item>
//                                 <Dropdown.Item href="#/action-3">Technician</Dropdown.Item>
//                             </Dropdown.Menu>
//                         </Dropdown>

//                         <Button type="button" className="btn btn-primary" onClick={this.login}>
//                             Submit
//             </Button>
//                     </Form>
//                 </div>
//             </div>

//         );
//     }
// }

// export default Login;