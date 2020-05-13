import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_EMAIL, UPDATE_PASSWORD, UPDATE_PHONE } from '../actions/actions'
import '../Styling.css'
import { Card, Form, Button } from "react-bootstrap";

const UserDetailEdit = (props) => {

  const dispatch = useDispatch()

  const email = useSelector(state => state.updateEmail);
  const password = useSelector(state => state.updatePassword);
  const phone = useSelector(state => state.updatePhone);

  return (
    <div class="container">
      <Card style={{ width: '48rem' }}>
        <Card.Header>
          <Card.Title as="h2">{props.userDetail.fName} {props.userDetail.lName}</Card.Title>
          <Card.Subtitle as="h3">{props.userDetail.userType}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Title>Edit Details</Card.Title>
          <Form>
            <Form.Label >Email</Form.Label>
            <Form.Control as="input" value={email} onChange={event => dispatch({ type: UPDATE_EMAIL, payload: event.target.value })} />
            <Form.Label >Password</Form.Label>
            <Form.Control as="input" value={password} onChange={event => dispatch({ type: UPDATE_PASSWORD, payload: event.target.value })} />
            <Form.Label >Phone</Form.Label>
            <Form.Control as="input" value={phone} onChange={event => dispatch({ type: UPDATE_PHONE, payload: event.target.value })} />
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button type="Button" className="btn btn-primary" data-id={props.userDetail.userId} data-email={email} data-pass={password} data-phone={phone} onClick={props.updateCall}>Save User</Button>
          <Button type="Button" className="btn btn-danger" value={props.userDetail.userId} onClick={props.archiveCall}>Archive User</Button>
        </Card.Footer>


      </Card>
      
    </div>
  );
}

export default UserDetailEdit;