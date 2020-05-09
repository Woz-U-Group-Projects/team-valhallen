import React from "react";
import Card from "react-bootstrap/Card";

const TicketView = (props) => {

  return (
    <div>
      <Card>
        <Card.Title><h3>Ticket Detail</h3></Card.Title>
        <h3>{props.ticketDetail.tenantFName} {props.ticketDetail.tenantLName}</h3>
        <Card.Body>
          <div>
            <h3>Unit #: {props.ticketDetail.unitId}</h3>
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