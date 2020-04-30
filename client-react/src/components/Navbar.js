// Necessary Imports
import React from 'react';

// Routing Imports
import { Link, withRouter } from 'react-router-dom';

// Styling Imports
import { Container, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../img/mq02.png';
import '../Styling.css'

// JSX Rendering
class NavBar extends React.Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render() {
        const loginRegLink = (
          <React.Fragment>
          <Nav className="mr-auto">
          <Nav.Link className="mt-1" href="/">Login</Nav.Link>
          <Nav.Link className="mt-1" href="/signup">Signup</Nav.Link>
          </Nav>
          </React.Fragment>
        )

        const userLink = (
          <React.Fragment>
          <Nav className="mr-auto">
          <Nav.Link className="mt-1" href="/">Tenant</Nav.Link>
          <Nav.Link className="mt-1" onClick={this.logOut.bind(this)}>Logout</Nav.Link>
          </Nav>
          </React.Fragment>
        )

        return (
            
            <Container id="navCont1">
              <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
              <a href="/"><img class="navbar-brand" id="logoNav" src={Logo} /></a>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              
              <div>
              {localStorage.usertoken ? userLink : loginRegLink}
              </div>
    
              </Navbar.Collapse>
              </Navbar>
              </Container>
            
        )
    }

}

export default withRouter(NavBar);