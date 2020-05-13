import React from "react";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table';

const TicketView = (props) => {

  return (
    <div className="container">
      <Card style={{ width: '48rem' }}>
        <Card.Title><h3>Ticket Detail</h3></Card.Title>
        <h3>Tenant: {props.ticketDetail.tenantFName} {props.ticketDetail.tenantLName}</h3>
        <Card.Body>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Unit #</th>
                <th>Ticket Id</th>
                <th>Priority Level</th>
                <th>Issue Category</th>
                <th>Note</th>
                <th>Created On</th>
                <th>Tech Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.ticketDetail.unitId}</td>
                <td>{props.ticketDetail.ticketId}</td>
                <td>{props.ticketDetail.priority}</td>
                <td>{props.ticketDetail.category}</td>
                <td>{props.ticketDetail.note}</td>
                <td>{props.ticketDetail.creationDate}</td>
                <td>{props.ticketDetail.mainNote}</td>
              </tr>
            </tbody>
          </Table>
          {/* <div>
            <h3>Unit #: {props.ticketDetail.unitId}</h3>
            <h4>Ticket Id: {props.ticketDetail.ticketId}</h4>
          </div>
          <div>Priority Level: {props.ticketDetail.priority}</div>
          <div>Issue Category: {props.ticketDetail.category}</div>
          <div>Note: {props.ticketDetail.note}</div>
          <div>Created On: {props.ticketDetail.creationDate}</div>
          <div>Tech Note: {props.ticketDetail.mainNote}</div> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default TicketView;