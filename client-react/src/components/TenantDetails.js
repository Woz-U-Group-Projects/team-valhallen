import React from "react";
import axios from "axios";
import TenantDetailEdit from "./TenantDetailEdit";
import TenantDetailRetrieve from "./TenantDetailRetrieve";
import styled from "styled-components";
import CreateTicketModal from "./CreateTicketModal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Col, Row } from "react-bootstrap";

const Style = styled.div`
#card1 {
margin-top: 50px;
}

.btn {
width: 180px;
border-size: 50px;
border-color: gold;
border-width: 2px;
border-radius: 5px;

.btn:hover {
  box-shadow: 0px 0px 5px darkorange, 0px 0px 50px gold;
}

#div1 {
  background-color: blue;
  height: 400px;
}
`

class TenantDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [], // used to store array of users
      user: {}, // used to pass user details
      viewConfirm: false,
      editConfirm: false,
      viewUserId: "", // used to pass user details
    };
    this.viewUser = this.viewUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  componentDidMount() {
    this.viewUser();
  }

  viewUser(id) {
    this.setState({ viewConfirm: true });
    let url = "http://localhost:3001/users/" + 1;
    axios.get(url, { userid: id }).then((response) => {
      this.setState({ user: response.data });
    });
    this.setState({ viewUserId: id });
    console.log("View User #" + id);
  }

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

      viewComp = (
        <TenantDetailEdit
          tenantDetail={this.state.user}
          updateCall={this.updateUser}
        />
      );
    }

    const firstName = this.state.user.fName;
    const lastName = this.state.user.lName;
    const email = this.state.user.email;
    const phone = this.state.user.phone;


return (
          <Style>

            <Col id="div1">
              
            </Col>
                

                {/* <Button id="editUserButton" className="btn btn-warning" onClick={this.editUser}>Edit User Details</Button>
                <div className="bg-secondary">{viewComp}</div>
                
                
                <Card>

                <Card.Body> {assignComp} </Card.Body>

                </Card>
  

            
            <Card style={{width: "18rem"}}>

              <CreateTicketModal />

            </Card>

            
            <Card>
              
              <Card.Title> Ticket Status </Card.Title> <Card.Body> </Card.Body>
            
            </Card> */}


          </Style>
    );
}
}

export default TenantDetails;
