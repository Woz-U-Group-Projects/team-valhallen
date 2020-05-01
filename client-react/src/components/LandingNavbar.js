// Necessary Imports
import React from 'react';

// Routing Imports
import { withRouter } from 'react-router-dom';

// Styling Imports
import { Container, Navbar } from 'react-bootstrap';
import Logo from '../img/mq02.png';
import '../Styling.css'

// JSX Rendering
class LandingNavBar extends React.Component {
    


    render() {
        

        return (
            
            <Container id="navCont1">
                <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
                <a href="/"><img className="navbar-brand" id="logoNav" src={Logo} alt="logo" /></a>
                </Navbar>
                </Container>
            
        )
    }

}

export default withRouter(LandingNavBar);