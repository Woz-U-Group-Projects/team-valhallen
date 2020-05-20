import React from "react";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table';
import CardGroup from 'react-bootstrap/CardGroup';

const TicketView = (props) => {

  return (
    <div className="container">
      
      <Card style={{ width: '48rem' }}>
        <Card.Header as="h2"><Card.Title>Ticket Detail</Card.Title></Card.Header>
        
        <Card.Body>
        <Card.Title>Tenant: {props.ticketDetail.tenantFName} {props.ticketDetail.tenantLName}</Card.Title>
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
          
        </Card.Body>
      </Card>
      
    </div>
  );
}

export default TicketView;