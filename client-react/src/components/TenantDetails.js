import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route, Switch, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import TenantDetailEdit from "./TenantDetailEdit";
import TenantDetailRetrieve from "./TenantDetailRetrieve";
import CreateTicketModal from "./CreateTicketModal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Col, Row } from "react-bootstrap";
import '../Styling.css'

class TenantDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],                    // used to store array of users 
      user: {}, 
      userId: 0,                    // used to pass user details
      viewConfirm: false,
      editConfirm: false,
      viewUserId: '',
      loggedIn: false                   // used to pass user details
    };
    this.viewUser = this.viewUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  componentDidMount() {
    // this.setState({userId: this.props.location.state.userId})
    this.viewUser(this.props.location.state.userId);
    console.log(this.state.userId);
    console.log(this.props.location.state.userId);
  }

  

  viewUser(id) {
    this.setState({ viewConfirm: true });
    this.setState({ loggedIn: true });
    //console.log(this..userId);
    let url = "http://localhost:3001/users/tenant/" + id;
    axios.get(url).then(response => {
      this.setState({ user: response.data})
    });
    this.setState({ viewUserId: id });
   // console.log("View User #" + id);
  };

  updateUser(event) {
    let url = "http://localhost:3001/users/tenant/" + event.target.dataset.id;
    axios
      .put(url, {
        newFirstName: event.target.dataset.fname,
        newLastName: event.target.dataset.lname,
        newEmail: event.target.dataset.email,
        newPhone: event.target.dataset.phone,
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

    if (editConfirm) {
      // renders tenantDetail if true
      assignComp = <TenantDetailRetrieve tenantDetail={this.state.user} />;

      viewComp = 
        <TenantDetailEdit
          tenantDetail={this.state.user}
          updateCall={this.updateUser}
        />
      
    }



    var firstName = this.state.user.fName;
    var lastName = this.state.user.lName;
    var email = this.state.user.email;
    var phone = this.state.user.phone;

    return (
      <div>
        <Card>
          <Card.Title>{firstName} {lastName}</Card.Title>
          <Card.Body>{email} | {phone}</Card.Body>
          <Card.Footer><Button onClick={this.editUser}>Edit User Details</Button>{assignComp}{viewComp}</Card.Footer>
        </Card>
        {/* <Card>
          <Card.Body>{assignComp}</Card.Body>
        </Card>
        <Card>
          <Card.Body></Card.Body>
        </Card> */}
        <Card style={{ width: '18rem' }}>
          <CreateTicketModal />
        </Card>
        <Card>
          <Card.Title>Ticket Status</Card.Title>
          <Card.Body></Card.Body>
        </Card>
      </div>
    );
}
}

// const loggedUser = useSelector(state => state.currentUser)
// console.log('logged in user' + loggedUser)



export default withRouter(TenantDetails);