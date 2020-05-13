import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_TICKET_STATUS, UPDATE_TICKET_NOTE } from '../actions/actions';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form"

const TicketDetailEdit = (props) => {
  const dispatch = useDispatch()
  const status = useSelector(state => state.updateTicketStatus);
  const mainNote = useSelector(state => state.updateTicketNote);
  let access = props.ticketDetail.access

  return (
    <div>
      <Card style={{ width: '35rem' }}>
        <Card.Title>Ticket Detail</Card.Title>
        <Card.Body>
          <h4>Ticket Id: {props.ticketDetail.ticketId} </h4>
          <h4>Unit Id: {props.ticketDetail.unitId}</h4>
          <h5>Category: {props.ticketDetail.category}</h5>
          <h5>Priority Level: {props.ticketDetail.priority}</h5>
          <h5>Current Ticket Status: {props.ticketDetail.status}</h5>
          <h5>Tenant Problem Notes: {props.ticketDetail.note}</h5>
          {(function() {
            if (access === false) {
              return <h4>Tenant Contact Info: {props.ticketDetail.tenantFName} {props.ticketDetail.tenantLName} </h4>
            } else {
              return 
            }
          })()}
          {(function() {
            if (access === false) {
              return <h4>Tenant Phone # {props.ticketDetail.phone}</h4>
            } else {
              return 
            }
          })()}
        </Card.Body>

        <Form>
          <Form.Group>
            <Form.Label>Set Status</Form.Label>
            <Form.Control as="select" multiple onChange={event => dispatch({ type: UPDATE_TICKET_STATUS, payload: event.target.value })}>Change Status
                <option value="inProgress">
                In progress
                </option>
              <option value="onHold">
                On hold
                </option>
              <option value="complete">
                Complete
                </option>
              <option value="inComplete">
                In complete
                </option>
            </Form.Control>
          </Form.Group>
          <label htmlFor="mainNote">mainNote</label>
          <input type="text" name="mainNote" value={mainNote} onChange={event => dispatch({ type: UPDATE_TICKET_NOTE, payload: event.target.value })} />
        </Form>
        <div>
          <button type="button" className="btn btn-primary" data-id={props.ticketDetail.ticketId} data-status={status} data-note={mainNote} onClick={props.updateCall}>Update Ticket</button>
        </div>
      </Card>

    </div>
  );
}
export default TicketDetailEdit;