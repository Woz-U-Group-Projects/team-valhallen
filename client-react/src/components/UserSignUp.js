import React from "react";
import axios from "axios";

import '../Styling.css';
import { Form, Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Logo from '../img/mq03.png';
import Link from 'react-router-dom/Link';


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

        <Navbar id="sgnNav" expand="lg" bg="gray">

          <Row>

            <Col id="sgnT2Col">
              <Navbar.Toggle id="sgnNavToggle" aria-controls="basic-navbar-toggle" />
              <Navbar.Collapse id="basic-navbar-toggle">
              <Nav className="mr-auto">
                <Link id="sgnT2Links" to="/">Login</Link>
              </Nav >
              </Navbar.Collapse>
            </Col>

            <Col id="sgnT3Col">
                <Navbar.Brand className="center" href="/"><img id="sgnLogoNav" src={Logo} alt="logo" /></Navbar.Brand>
            </Col>

            <Col id="sgnT4Col">
            </Col>

          </Row>

        </Navbar>
  

        <Container id="sgnCont">
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

            <Button type="button" className="btn btn-warning mt-3" onClick={this.addUser} >
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

