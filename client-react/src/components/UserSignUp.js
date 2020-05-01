// Necessary Imports
import React from "react";
import axios from "axios";

// Styling Imports
import '../Styling.css';
import { Form, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

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

  componentDidMount() {
    // this.getData();
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
      phone: this.phone.current.value
    })
      .then(res => {
        if (res) {
          this.props.history.push('/')
        }
      });
  };

  // JSX Rendering
  render() {
    return (
      <div>
        <Container id="lCont1">
          <Form>
            <Form.Group >
              <Form.Label><h2>Sign Up!</h2></Form.Label>
            </Form.Group>

            <Form.Group >
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="fname" ref={this.fName} />
            </Form.Group>

            <Form.Group >
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lname" ref={this.lName} />
            </Form.Group>

            <Form.Group >
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" name="email" ref={this.email} />
            </Form.Group>

            <Form.Group  >
              <Form.Label  > Password </Form.Label>
              <Form.Control type="password" name="password" ref={this.password} />
            </Form.Group >

            <Form.Group >
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" name="phone" ref={this.phone} />
            </Form.Group>

            <Button variant="danger" type="button" className="btn btn-primary" onClick={this.addUser} >
              Submit
          </Button>
          </Form>
        </Container>
        {/* <h3>First Name</h3>
        <input ref={this.fName} />
        <h3> Last Name</h3>
        <input ref={this.lName} />
        <h3>Email</h3>
        <input ref={this.email} />
        <h3>Password</h3>
        <input ref={this.password} />
        <h3>Phone</h3>
        <input ref={this.phone} />

        <button type="button" className="btn btn-primary" onClick={this.addUser}>add User</button> */}
      </div>
    );
  }
}

export default Signup;

