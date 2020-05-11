// Necessary Imports
import React from 'react';

// Routing Imports
import { withRouter } from 'react-router-dom';

// Styling Imports
import { Container, Col, Row } from 'react-bootstrap';
import Logo from '../img/mq03.png';
import '../Styling.css'

// JSX Rendering
class LandingNavBar extends React.Component {



    render() {

        return (

                <div id="test01">
                    <Container>
                    <Row>
                    {/* <Col id="test02">T2 Links</Col> */}
                    <Col id="test03"><a href="/"><img id="logoNav" src={Logo} alt="logo" /></a></Col>
                    {/* <Col id="test04">T4 Links</Col> */}
                    </Row>
                    </Container>
                </div>
        )
    }

}

export default withRouter(LandingNavBar);

// Merge to Dev - Good to Go! //