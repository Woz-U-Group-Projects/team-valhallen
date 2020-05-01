import React from "react";
import axios from "axios";

import Navbar from "./Navbar";
import TenantDetailEdit from "./TenantDetailEdit";
import TenantDetailRetrieve from "./TenantDetailRetrieve";
import CreateTicketModal from "./CreateTicketModal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import '../Styling.css'


class TenantDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],                    // used to store array of users 
      user: {},
      userId: 0,                    // used to pass user details
      viewConfirm: false,
      editConfirm: true,
      viewUserId: '',
      loggedIn: false                   // used to pass user details
    };
    this.viewUser = this.viewUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  componentDidMount() {
    this.viewUser(this.props.location.state.userId);
    console.log(this.state.userId);
    console.log(this.props.location.state.userId);
  }



  viewUser(id) {
    this.setState({ viewConfirm: true });
    this.setState({ loggedIn: true });
    let url = "http://localhost:3001/users/tenant/" + id;
    axios.get(url).then(response => {
      this.setState({ user: response.data })
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
    console.log(event.target.dataset);
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
          <CreateTicketModal />
        </div>
        <hr />
        {/* <Card>
          <Card.Title>Ticket Status</Card.Title>
          <Card.Body></Card.Body>
        </Card> */}
      </div>
    );
  }
}


export default TenantDetails;