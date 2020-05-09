// Necessary Imports
import React from 'react';

// Routing Imports
import { withRouter } from 'react-router-dom';

// Styling Imports
import { Navbar } from 'react-bootstrap';
import Logo from '../img/mq02.png';
import '../Styling.css'

// JSX Rendering
class LandingNavBar extends React.Component {



    render() {

        return (

                <div>

                    <a href="/"><img id="logoNav" src={Logo} alt="logo" /></a>

                </div>

        )
    }

}

export default withRouter(LandingNavBar);