import React from "react";
import axios from "axios";
import '../Styling.css'

import TicketList from "./TicketList";
import TicketDetailEdit from "./TicketDetailEdit";
import TicketDetailRetrieve from "./TicketDetailRetrieve";
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import Logo from '../img/mq03.png';
import { Link } from 'react-router-dom';


class TechTicketManagement extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userId: this.props.location.state.userId,
      tickets: [],                    // used to store array of tickets 
      ticket: {},                     // used to pass ticket details
      viewConfirm: false,
      newTrigger: false,
      editConfirm: false,
      loggedIn: false,
      viewTechId: ''
    }
    this.getNewTickets = this.getNewTickets.bind(this)
    this.viewTicket = this.viewTicket.bind(this)
    this.editTicket = this.editTicket.bind(this);
  }

  componentDidMount() {
    this.getNewTickets(this.state.userId);
  }

  getNewTickets(id) {
    this.setState({ viewConfirm: false });
    this.setState({ loggedIn: true });
    let url = "http://localhost:3001/tickets/tech/" + id;
    axios.get(url).then(response => {
      this.setState({ tickets: response.data })
    });
    this.setState({ viewTechId: id });
  };

  viewTicket(id) {
    this.setState({ viewConfirm: true });
    let url = "http://localhost:3001/ticketHistory/" + id;
    axios.get(url, { ticketId: id }).then(response => {
      this.setState({ ticket: response.data })
    });
    this.setState({ viewTicketId: id });
  };

  updateTicket(evt) {
    let url = "http://localhost:3001/tickets/" + evt.target.dataset.id;
    axios.put(url, {
      newTicketStatus: evt.target.dataset.status,
      newTicketNote: evt.target.dataset.note
    }).then(alert("ticket Details Have Beed Saved"))
  };

  editTicket() {
    this.setState({ editConfirm: true });
  }

  render() {

    const viewSelected = this.state.viewConfirm;    //stores if view ticket is selected
    let viewComp, assignComp;

    if (viewSelected) {                          // renders ticketDetail if true
      assignComp = <TicketDetailRetrieve ticketDetail={this.state.ticket} />
      viewComp = <TicketDetailEdit
        ticketDetail={this.state.ticket}
        updateCall={this.updateTicket}
      />;
    }

    return (
      <div>
        <Navbar id="tecNav" expand="lg" bg="gray">
                <Row>
                <Col id="tecT2Col">
                <Navbar.Toggle id="tecNavToggle" aria-controls="1" />
                <Navbar.Collapse id="1">
                <Nav className="mr-auto">
                    <Link id="tecT2Links" to="/">Logout</Link>
                </Nav >
                </Navbar.Collapse>
                </Col>

                <Col id="tecT3Col">
                        <Navbar.Brand className="center" href="/"><img id="tecLogoNav" src={Logo} alt="logo" /></Navbar.Brand>
                </Col>


                <Col id="tecT4Col">
                </Col>
                </Row>

            </Navbar>
        <TicketList ticketsList={this.state.tickets}
          ticketCall={this.getNewTickets}
          viewCall={this.viewTicket} />

        <div>
          {assignComp}
          {viewComp}
        </div>

      </div>
    )
  };
}

export default TechTicketManagement;
