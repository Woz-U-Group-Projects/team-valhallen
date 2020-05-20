import React from "react";
import axios from "axios";

import TenantDetailEdit from "./TenantDetailEdit";
import TenantDetailRetrieve from "./TenantDetailRetrieve";
import CreateTicketModal from "./CreateTicketModal";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import CardGroup from 'react-bootstrap/CardGroup';
import '../Styling.css'
import Logo from '../img/mq03.png';

import Navbar from 'react-bootstrap/Navbar';
import { Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';



class TenantDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {},
      tickets: [],
      viewConfirm: false,
      editConfirm: true,
      viewUserId: '',
      loggedIn: false,
      userId: this.props.location.state.userId,
      unitId: this.props.location.state.unitId,                    // used to pass user details
    };
    this.viewUser = this.viewUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  componentDidMount() {
    this.viewUser(this.state.userId);
    this.getTickets(this.state.unitId);
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (this.state.user !== prevState.user) {
  //         this.viewUser(this.state.userId);
  //     }
  // }


  getTickets = (id) => {
    let url = "http://localhost:3001/ticketHistory/byUnit/" + id;
    axios.get(url).then(response => this.setState({ tickets: response.data }));
  };

  viewUser(id) {
    this.setState({ viewConfirm: true });
    this.setState({ loggedIn: true });
    let url = "http://localhost:3001/users/tenant/" + id;
    axios.get(url).then(response => {
      this.setState({ user: response.data, unitId: response.data.unitId })
    });
    this.setState({ viewUserId: id });
  };

  editUser() {
    this.setState({ editConfirm: true });
  }


  updateUser(event) {
    let url = "http://localhost:3001/users/tenant/" + event.target.dataset.id;
    axios
      .put(url, {
        newFirstName: event.target.dataset.fname,
        newLastName: event.target.dataset.lname,
        newEmail: event.target.dataset.email,
        newPhone: event.target.dataset.phone
      })
      .then(alert("User Details Have Beed Saved"))
    // .then(this.viewUser(this.state.userId));
  }



  render() {
    const editConfirm = this.state.editConfirm; // confirms tenant detail component render
    let viewComp, assignComp;

    if (editConfirm === true) {
      // renders tenantDetail if true
      assignComp = <TenantDetailRetrieve tenantDetail={this.state.user} />;

      viewComp =
        <TenantDetailEdit
          tenantDetail={this.state.user}
          updateCall={this.updateUser}
        />

    }

    const popover = (
      <Popover >
        <Popover.Content >
          <Button onClick={this.editUser} >Open/Close</Button>
          {assignComp}{viewComp}
        </Popover.Content>
      </Popover>
    );

    const EditDetailsButtonPopup = () => (
      <OverlayTrigger trigger='click' placement="bottom" overlay={popover} >
        <Button variant="success"  >Edit User Details</Button>
      </OverlayTrigger>
    );



    var firstName = this.state.user.fName;
    var lastName = this.state.user.lName;
    var email = this.state.user.email;
    var phone = this.state.user.phone;

    return (

      <div>
        <Navbar id="tnaNav" expand="lg" bg="gray">
          <Row>
            <Col id="tnaT2Col">
              <Navbar.Toggle id="tnaNavToggle" aria-controls="1" />
              <Navbar.Collapse id="1">
                <Nav className="mr-auto">
                  <Link id="tnaT2Links" to="/">Logout</Link>
                </Nav >
              </Navbar.Collapse>
            </Col>

            <Col id="tnaT3Col">
              <Navbar.Brand className="center" href="/"><img id="mngLogoNav" src={Logo} alt="logo" /></Navbar.Brand>
            </Col>


            <Col id="tnaT4Col">
            </Col>
          </Row>

        </Navbar>
        <CardGroup>
          <Card>
            <Card.Header as="h3">Tenant Details</Card.Header>
            <Card.Body >
              <ListGroup variant="flush">
                <ListGroup.Item as="h4"><span><strong>Name:</strong></span>    {firstName} {lastName} </ListGroup.Item>
                <ListGroup.Item as="h4"><span><strong>Email:</strong></span>    {email} </ListGroup.Item>
                <ListGroup.Item as="h4"><span><strong>Phone:</strong></span>    {phone} </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer><EditDetailsButtonPopup /></Card.Footer>
          </Card>


          <Card >
            <Card.Header as="h3">Maintenance Request</Card.Header>
            <Card.Body className="text-left">
              <Card.Title className="text-center" as="h4">Instructions:</Card.Title>
              <ol>
                <li>Click Create Ticket</li>
                <li>Choose Priority level.</li>
                <li>Choose Category.</li>
                <li>Add any problem notes for technician.</li>
                <li>Choose Technician Access.</li>
              </ol>
            </Card.Body>
            <Card.Footer>
              <CreateTicketModal assignUserId={this.state.userId}
                assignUnitId={this.state.unitId}/>
            </Card.Footer>
          </Card>
        </CardGroup>
        <hr />
        <Card>
          <Card.Header as="h3">Ticket Status</Card.Header>
          <Card.Body>
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Due Date</th>
                    <th>Issue Category</th>
                    <th>Tech Assigned</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>

                  {this.state.tickets.map(t => (
                    <tr key={t.ticketId}>
                      <td>{t.dueDate}</td>
                      <td><h6>{t.category}</h6></td>
                      {(function () {
                        if (t.assigned === false) {
                          return <td>Not Yet Assigned</td>
                        } else {
                          return <td>{t.techFName} {t.techLName}</td>
                        }
                      })()}
                      <td>{t.status}</td>
                    </tr>
                  ))}

                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}


export default TenantDetails;