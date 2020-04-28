// Joel's Front End

// Necessary Imports
import React from "react";
import axios from "axios";

// Styling Imports
import styled from 'styled-components';
import {
    Col
} from 'react-bootstrap';
import {
    Link
} from 'react-router-dom';
import {
    Container
} from 'react-bootstrap';
import {
    Form
} from 'react-bootstrap';
import {
    Button
} from 'react-bootstrap';

// Styling for Individual Component from Styled-Components Import
const Style = styled.div `
padding: 80px;
margin-top: 75px;
font-family: 'Rajdhani', sans-serif;

#eGroup1 {
    width: 600px;
}

#pGroup1 {
    width: 600px;
}

#eLabel1 {
    float: left;
    font-size: 20px;
}

#pLabel1 {
    float: left;
    font-size: 20px;
}

#eGroup1:hover {
    box-shadow: 0px 0px 5px darkorange, 0px 0px 50px gold;
    border-radius: 5px;
}

#pGroup1:hover {
    box-shadow: 0px 0px 5px darkorange, 0px 0px 50px gold;
    border-radius: 5px;
}

.btn:hover {
    box-shadow: 0px 0px 5px darkorange, 0px 0px 50px gold;
    border-radius: 5px;
}`

// Component Extends
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
            // value: 'tenant'    
        };
        this.email = React.createRef();
        this.password = React.createRef();
        this.fname = React.createRef();
        this.lname = React.createRef();
        // this.userStatus = this.userStatus.bind(this);
    }
    componentDidMount() {
        this.getData();
    }

    // userStatus(event) {
    //     this.setState({value: event.target.value});
    //   }

    getData = () => {
        let url = "http://localhost:3001/users/login/";
        axios.get(url).then(response => this.setState({
            users: response.data
        }));
    };

    login = () => {
        let url = "http://localhost:3001/users/login/";
        axios.post(url, {
                email: this.email.current.value,
                password: this.password.current.value
            })
            .then(response => this.setState({
                users: response.data
            }));
    };

    signup = () => {
        let url = "http://localhost:3001/users/signup";
        axios.get(url).then(response => this.setState({
            users: response.data
        }));
    };

    // Component Rendering
    render() {
        return ( <Style>
            <h1> Login Portal < /h1>

            <Container >
            <Form >

            <Form.Group id = "eGroup1" controlId = "formBasicEmail" >
            <Form.Label id = "eLabel1" > Email address </Form.Label > 
            <Form.Control id = "eInput1" type = "email" placeholder = "Enter Email" ref = {this.email}/> 
            </Form.Group >

            <Form.Group id = "pGroup1" controlId = "formBasicPassword" >
            <Form.Label id = "pLabel1" > Password </Form.Label> 
            <Form.Control id = "pInput1" type = "password" placeholder = "Enter Password" ref = {this.password}/>
             </Form.Group >

            <Button type = "button" className = "btn-lg btn-warning mt-3" onClick = {this.login} > Submit </Button>

            <
            Col id = "signupCol1"
            className = "mt-5" >
            <
            h5 > New to Main - Quest ?
            <
            Link to = "/signup"
            activeClassName = "active" >
            Signup < /Link>!</h5 >
            <
            /Col>

            <
            /Form> < /
            Container >

            <
            /Style>
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