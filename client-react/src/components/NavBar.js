// Necessary Imports
import React from "react";

// Component Imports

// Styling Imports
import styled from 'styled-components';
import mq02 from '../img/mq02.png';

// Routing Imports
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Styling for Individual Component from Styled-Components Import
const Nav1 = styled.div`
display: flexbox;
justify-content: center;
max-width: 500px;
height: 80px;
margin-top: 40px;
margin-right: 20px;
background-color: white;
border-style: solid;
border-radius: 30px;
border-color: orange;
box-shadow: 0px 0px 10px 2px gold;

:hover {
    
}

#logo1 {
    width: 320px;
    margin-top: 5px;
    margin-bottom: 5px;
}

#logo1:hover {
    cursor: pointer;
    width: 330px;
}
`
// Component Extends
class NavBar extends React.Component {
render() {
    return (

        <Container>
        <center>

        <Nav1>
        <Link exact to="/"><img id="logo1" src={mq02} alt="logo1"/></Link>
        </Nav1>

        </center>
        </Container>
        );
    }
}
    

export default NavBar;

