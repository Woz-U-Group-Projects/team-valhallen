import React from "react";
import Card from "react-bootstrap/Card";
//import { useSelector, useDispatch } from 'react-redux'
//import { UPDATE_EMAIL, UPDATE_PASSWORD, UPDATE_PHONE } from '../actions/actions'

const TicketView = (props) => {

  //const dispatch = useDispatch()

  // const email = useSelector(state => state.updateEmail);
  // const password = useSelector(state => state.updatePassword);
  // const phone = useSelector(state => state.updatePhone);

  return (
    <div>
      <Card>
        <Card.Title><h3>Ticket Detail</h3></Card.Title>
        <Card.Body>
          <div>
            <h4>Ticket Id: {props.ticketDetail.ticketId}</h4>
          </div>
          <div>Issue Category: {props.ticketDetail.category}</div>
          <div>Note: {props.ticketDetail.note}</div>
          <div>Created On: {props.ticketDetail.creationDate}</div>
          <div>Priority Level: {props.ticketDetail.priority}</div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TicketView;