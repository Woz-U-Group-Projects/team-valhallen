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
        
        this.props.history.push('/')
    }


    render() {
        const loginRegLink = (
        <React.Fragment>
            <Nav className="mr-auto">
            <Nav.Link className="mt-1" href="/">Logout</Nav.Link>
            
            </Nav>
            </React.Fragment>
        )


        return (
            
            <Container id="navCont1">
                <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
                <a href="/"><img className="navbar-brand" id="logoNav" src={Logo} /></a>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
            
                <div>
                {loginRegLink}
                </div>
    
                </Navbar.Collapse>
                </Navbar>
                </Container>
            
        )
    }

}

export default withRouter(NavBar);