import React from "react";
import '../task.min.css';
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_FIRSTNAME, UPDATE_LASTNAME, UPDATE_EMAIL, UPDATE_PHONE } from '../actions/actions'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const TenantDetailEdit = (props) => {
  const dispatch = useDispatch()
  const fName = useSelector(state => state.updateFirstName);
  const lName = useSelector(state => state.updateLastName);
  const email = useSelector(state => state.updateEmail);
  const phone = useSelector(state => state.updatePhone);

  return (

    <div>
    <Form>

    <Form.Group >
        <Form.Label><h2>Edit Details</h2></Form.Label>
      </Form.Group>

      <Form.Group >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="fname" value={fName}  onChange={event => dispatch({ type: UPDATE_FIRSTNAME, payload: event.target.value })} />
      </Form.Group>

      <Form.Group >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="lname" value={lName} onChange={event => dispatch({ type: UPDATE_LASTNAME, payload: event.target.value })} />
      </Form.Group>

      <Form.Group >
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" name="email" value={email} onChange={event => dispatch({ type: UPDATE_EMAIL, payload: event.target.value })} />
      </Form.Group>

      <Form.Group >
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" name="phone" value={phone} onChange={event => dispatch({ type: UPDATE_PHONE, payload: event.target.value })} />
      </Form.Group>

      <Button variant="danger" type="button" className="btn btn-primary" data-id={props.tenantDetail.userId} data-fname={fName} data-lname={lName} data-email={email} data-phone={phone} onClick={props.updateCall}>
        Submit
      </Button>

    </Form>

    </div>
  );
}
export default TenantDetailEdit;