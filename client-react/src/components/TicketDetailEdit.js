import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_TICKET_STATUS, UPDATE_TICKET_NOTE } from '../actions/actions';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const TicketDetailEdit = (props) => {
  const dispatch = useDispatch()
  const status = useSelector(state => state.updateTicketStatus);
  const mainNote = useSelector(state => state.updateTicketNote);
  let access = props.ticketDetail.access

  return (
    <div className="container">
      <Card style={{ width: '48rem' }}>
        <Card.Header>
        <Card.Title as="h3">Ticket Detail</Card.Title>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Ticket Id</th>
                <th>Unit Id</th>
                <th>Category</th>
                <th>Priority Level</th>
                <th>Current Ticket Status</th>
                <th>Tenant Problem Notes</th>
                {(function (){
                  if(access === false) {
                    return <th>Tenant Contact Info</th>
                  }
                })()}
                {(function (){
                  if(access === false) {
                    return <th>Tenant Phone Number</th>
                  }
                })()}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.ticketDetail.ticketId}</td>
                <td>{props.ticketDetail.unitId}</td>
                <td>{props.ticketDetail.category}</td>
                <td>{props.ticketDetail.priority}</td>
                <td>{props.ticketDetail.status}</td>
                <td>{props.ticketDetail.note}</td>
                {(function (){
                  if(access === false) {
                    return <td>{props.ticketDetail.tenantFName} {props.ticketDetail.tenantLName}</td>
                  }
                })()}
                {(function (){
                  if(access === false) {
                    return <td>{props.ticketDetail.phone}</td>
                  }
                })()}
              </tr>
            </tbody>
          </Table>
          
        <Form >

          <Form.Group>
            <Form.Label>Set Status</Form.Label>
            <Form.Control as="select" onChange={event => dispatch({ type: UPDATE_TICKET_STATUS, payload: event.target.value })}>Change Status
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
          <Form.Group>
            <Form.Label>Tech Notes</Form.Label>
            <Form.Control as="textarea" rows="3" value={mainNote} onChange={event => dispatch({ type: UPDATE_TICKET_NOTE, payload: event.target.value })} />
          </Form.Group>
          <Form.Group>
            <Button className="btn btn-primary" data-id={props.ticketDetail.ticketId} data-status={status} data-note={mainNote} onClick={props.updateCall}>Update Ticket</Button>
          </Form.Group>
        </Form>
        
        </Card.Body>
      </Card>

    </div>
  );
}
export default TicketDetailEdit;