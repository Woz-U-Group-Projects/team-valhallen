

// Necessary React Import Statements   - JDA
import React from "react";
import axios from "axios";
import '../task.min.css';

import { Form, Col, Container } from 'react-bootstrap';
import '../App.js';


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.fName = React.createRef();
    this.lName = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.phone = React.createRef();
    this.userType = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {

    // Express uses port 3001 (react uses 3000)
    let url = "http://localhost:3001/users/signup";
    axios.get(url).then(response => this.setState({ users: response.data }));
  };

  addUser = () => {
    let url = "http://localhost:3001/users/signup";
    axios.post(url, {
      fName: this.fName.current.value,
      lName: this.lName.current.value,
      email: this.email.current.value,
      password: this.password.current.value,
      phone: parseInt(this.phone.current.value),
      userType: this.userType.current.value
    }).then(response => {
      // refresh the data
      // this.getData();
      // empty the input
      this.fName.current.value = "";
      this.lName.current.value = "";
      this.email.current.value = "";
      this.password.current.value = "";
      this.phone.current.value = "";
      this.userType.current.value ="";
    });
  };


  render() {
    return (
      <React.Fragment>

        <Container className="mt-5">
          <h3>Registration Portal</h3>

        <Form>

        <Form.Group id="fGroup1" controlId="formBasicEmail">
          <Col><Form.Label id="fLabel1">First Name</Form.Label></Col>
            <Col><Form.Control id="fInput1" type="name" placeholder="Enter First Name Here!" ref={this.fName} /></Col>
        </Form.Group>

        <Form.Group id="lGroup1" controlId="formBasicEmail">
          <Col><Form.Label id="lLabel1">Last Name</Form.Label></Col>
          <Col><Form.Control id="lInput1" type="name" placeholder="Enter Last Name Here!" ref={this.lName} /></Col>
        </Form.Group>

        <Form.Group id="eGroup1" controlId="formBasicEmail">
          <Col><Form.Label id="eLabel1">Email</Form.Label></Col>
          <Col><Form.Control id="eInput1" type="name" placeholder="Enter Email Here!" ref={this.email} /></Col>
        </Form.Group>

        <Form.Group id="pGroup1" controlId="formBasicEmail">
          <Col><Form.Label id="pLabel1">Password</Form.Label></Col>
          <Col><Form.Control id="pInput1" type="password" placeholder="Enter Password Here!" ref={this.password} /></Col>
        </Form.Group>

        <Form.Group id="phGroup1" controlId="formBasicEmail">
          <Col><Form.Label id="phLabel1">Phone Number</Form.Label></Col>
          <Col><Form.Control id="phInput1" type="name" placeholder="Enter Phone Number Here!" ref={this.phone} /></Col>
        </Form.Group>

        <Form.Group id="oGroup1" as={Col} controlId="formGridState">
        <Form.Label>Select User Type</Form.Label>
        <Form.Control as="select" multiple ref={this.userType}>
          <option value="Tenant">Tenant</option>
          <option value="Technician">Technician</option>
          <option value="Manager">Property Manager</option>
        </Form.Control>
        </Form.Group>

        <button id="uBtn1" type="button" className="btn btn-warning mt-3" onClick={this.addUser}>Add User</button>
        
        </Form>
        </Container>

      </React.Fragment>
    );
  }
}

export default Signup;

// Original UserSignUp from Dev

//    \/ \/ \/ \/ \/ \/

// import React from "react";
// import axios from "axios";
// import '../task.min.css';

// class User extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { users: [] };
//     this.fName = React.createRef();
//     this.lName = React.createRef();
//     this.email = React.createRef();
//     this.password = React.createRef();
//     this.phone = React.createRef();
//     this.userType = React.createRef();
//   }

//   componentDidMount() {
//     this.getData();
//   }

//   getData = () => {

//     // Express uses port 3001 (react uses 3000)
//     let url = "http://localhost:3001/users/";
//     axios.get(url).then(response => this.setState({ users: response.data }));
//   };

//   addUser = () => {
//     let url = "http://localhost:3001/users/signup";
//     axios.post(url, {
//       fName: this.fName.current.value,
//       lName: this.lName.current.value,
//       email: this.email.current.value,
//       password: this.password.current.value,
//       phone: this.phone.current.value,
//       userType: this.userType.current.value
//     }).then(response => {
//       // refresh the data
//       this.getData();
//       // empty the input
//       this.fName.current.value = "";
//       this.lName.current.value = "";
//       this.email.current.value = "";
//       this.password.current.value = "";
//       this.phone.current.value = "";
//       this.userType.current.value ="";
//     });
//   };


//   render() {
//     return (
//       <div>
//         <h3>First Name</h3>
//         <input ref={this.fName} />
//         <h3> Second Name</h3>
//         <input ref={this.lName} />
//         <h3>Email</h3>
//         <input ref={this.email} />
//         <h3>Password</h3>
//         <input ref={this.password} />
//         <h3>Phone</h3>
//         <input ref={this.phone} />
//         <h3>UserType</h3>
//         <select ref={this.userType}>
//           <option value="Property Manager" >Property Manager</option>
//           <option value="Technician">Technician</option>
//           <option value="Tenant">Tenant</option>
//         </select>
//         <button type="button" className="btn btn-primary" onClick={this.addUser}>add User</button>
//       </div>
//     );
//   }
// }

// export default User;

