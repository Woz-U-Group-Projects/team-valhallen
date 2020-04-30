import React from "react";
import '../Styling.css';
import styled from 'styled-components';
import { Form, Col, Button, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
// import { UPDATE_FIRSTNAME, UPDATE_LASTNAME, UPDATE_EMAIL, UPDATE_PHONE} from '../actions/actions'

const Style = styled.div`
width: 600px;
padding: 0px;
margin-top: 50px;
margin-bottom: 50px;

.btn:hover {
  box-shadow: 0px 0px 5px darkorange, 0px 0px 50px gold;
  border-radius: 5px;
}

#fGroup1:hover {
  box-shadow: 0px 0px 5px darkorange, 0px 0px 50px gold;
  border-radius: 5px;
}

#lGroup1:hover {
  box-shadow: 0px 0px 5px darkorange, 0px 0px 50px gold;
  border-radius: 5px;
}

#eGroup1:hover {
  box-shadow: 0px 0px 5px darkorange, 0px 0px 50px gold;
  border-radius: 5px;
}

#pGroup1:hover {
  box-shadow: 0px 0px 5px darkorange, 0px 0px 50px gold;
  border-radius: 5px;
}

#phGroup1:hover {
  box-shadow: 0px 0px 5px darkorange, 0px 0px 50px gold;
  border-radius: 5px;
}

#oGroup1:hover {
  box-shadow: 0px 0px 5px darkorange, 0px 0px 50px gold;
  border-radius: 5px;
}

#editButton1 {
background-color: rgb(255, 170, 0);
border-color: yellow;

#fNameTxt {
  width: 30px;
}
`

const TenantDetailEdit = (props) => {


const dispatch = useDispatch()


  const fName = useSelector(state => state.updateFirstName);
  const lName = useSelector(state => state.updateLastName);
  const email = useSelector(state => state.updateEmail);
  const phone = useSelector(state => state.updatePhone);


  return (
    <div>
      <Style>
  <Container>

  <Form>

<Form.Group id="fGroup1" controlId="formBasicEmail">
  <Col><Form.Label id="fLabel1">First Name</Form.Label></Col>
    <Col><Form.Control id="fInput1" type="name" placeholder="Enter First Name Here!" /></Col>
</Form.Group>

<Form.Group id="lGroup1" controlId="formBasicEmail">
  <Col><Form.Label id="lLabel1">Last Name</Form.Label></Col>
  <Col><Form.Control id="lInput1" type="name" placeholder="Enter Last Name Here!" /></Col>
</Form.Group>

<Form.Group id="eGroup1" controlId="formBasicEmail">
  <Col><Form.Label id="eLabel1">Email</Form.Label></Col>
  <Col><Form.Control id="eInput1" type="name" placeholder="Enter Email Here!" /></Col>
</Form.Group>

<Form.Group id="phGroup1" controlId="formBasicEmail">
  <Col><Form.Label id="phLabel1">Phone Number</Form.Label></Col>
  <Col><Form.Control id="phInput1" type="name" placeholder="Enter Phone Number Here!" /></Col>
</Form.Group>
</Form>

  </Container>

      {/* <form><Col></Col>
        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" value={fName} onChange={event => dispatch({ type: UPDATE_FIRSTNAME, payload: event.target.value })} />
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" value={lName}  onChange={event => dispatch({ type: UPDATE_LASTNAME, payload: event.target.value })} />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={email} onChange={event => dispatch({ type: UPDATE_EMAIL, payload: event.target.value })} />
        <label htmlFor="phone">Phone</label>
        <input id="" type="text" name="phone" value={phone} onChange={event => dispatch({ type: UPDATE_PHONE, payload: event.target.value })} />
      </form> */}
        <Button id="editButton1" type="button" data-id={props.tenantDetail.userId} data-fname={fName} data-lname={lName} data-email={email}  data-phone={phone} onClick={props.updateCall}>Save Info</Button>
      </Style>
    </div>
  );
}
export default TenantDetailEdit;