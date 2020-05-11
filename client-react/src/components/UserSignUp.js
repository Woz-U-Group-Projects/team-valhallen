import React from "react";
import axios from "axios";

import '../Styling.css';
import { Form, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import LandingNavbar from "./LandingNavbar";

class Signup extends React.Component {
  constructor (props) {
    super(props);
    this.state = { users: [] };
    this.fName = React.createRef();
    this.lName = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.phone = React.createRef();
  }

  componentDidMount() {}

  addUser = () => {
    let url = "http://localhost:3001/users/signup";
    axios.post(url, {
      fName: this.fName.current.value,
      lName: this.lName.current.value,
      email: this.email.current.value,
      password: this.password.current.value,
      phone: this.phone.current.value
    })
      .then(res => {
        if (res) {
          this.props.history.push('/')
        }
      });
  };

  render() {
    return (
      <div>
        <Container id="lCont1">
          <Form>
            <Form.Group >
              <Form.Label ><h1>Sign Up</h1></Form.Label>
            </Form.Group>

            <Form.Group >
              <Form.Label className="float-left">First Name:</Form.Label>
              <Form.Control type="text" name="fname" ref={this.fName} />
            </Form.Group>

            <Form.Group >
              <Form.Label className="float-left">Last Name:</Form.Label>
              <Form.Control type="text" name="lname" ref={this.lName} />
            </Form.Group>

            <Form.Group >
              <Form.Label className="float-left">Preferred Email:</Form.Label>
              <Form.Control type="text" name="email" ref={this.email} />
            </Form.Group>

            <Form.Group  >
              <Form.Label className="float-left" >Create a Password: </Form.Label>
              <Form.Control type="password" name="password" ref={this.password} />
            </Form.Group >

            <Form.Group >
              <Form.Label className="float-left">Contact Number:</Form.Label>
              <Form.Control type="text" name="phone" ref={this.phone} />
            </Form.Group>

            <Button type="button" className="btn btn-warning" onClick={this.addUser} >
              Submit
          </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Signup;

// Merge to Dev - Good to Go! //

