import React from "react";
import axios from "axios";

import Navbar from "./Navbar";
import TenantDetailEdit from "./TenantDetailEdit";
import TenantDetailRetrieve from "./TenantDetailRetrieve";
import CreateTicketModal from "./CreateTicketModal";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import '../Styling.css'


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

  
  updateUser(event) {
    let url = "http://localhost:3001/users/tenant/" + event.target.dataset.id;
    axios
      .put(url, {
        newFirstName: event.target.dataset.fname,
        newLastName: event.target.dataset.lname,
        newEmail: event.target.dataset.email,
        newPhone: event.target.dataset.phone
      })
      .then(alert("User Details Have Beed Saved"));
  }

  editUser() {
    this.setState({ editConfirm: true });
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
        <Navbar />
        <Card>
          <Card.Title>{firstName} {lastName}</Card.Title>
          <Card.Body>{email} | {phone}</Card.Body>
          <Card.Footer><EditDetailsButtonPopup /></Card.Footer>
        </Card>
        <hr />
        <div>
          <CreateTicketModal assignUserId={this.state.userId}
            assignUnitId={this.state.unitId}/>
        </div>
        <hr />
        <Card>
          <Card.Title>Ticket Status</Card.Title>
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
                                <td>{t.techid}</td>
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