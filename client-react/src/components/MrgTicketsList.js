import React from "react";
import '../task.min.css';
import Table from 'react-bootstrap/Table';
import { Card } from "react-bootstrap";

class MrgTicketsList extends React.Component {
    constructor (props) {
        super(props)
        this.state = { compCall: false }
        this.newTicketQuery = this.newTicketQuery.bind(this)
        this.pendTicketQuery = this.pendTicketQuery.bind(this)
        this.onHoldTicketQuery = this.onHoldTicketQuery.bind(this)
        this.inProgTicketQuery = this.inProgTicketQuery.bind(this)
        this.compTicketQuery = this.compTicketQuery.bind(this)
        this.archTicketQuery = this.archTicketQuery.bind(this)
        this.viewButton = this.viewButton.bind(this)
    }

    newTicketQuery(event) {
        event.preventDefault()
        const { newTktCall } = this.props
        newTktCall()
        this.setState({ compCall: false })
    };
    pendTicketQuery(event) {
        event.preventDefault()
        const { pendTktCall } = this.props
        pendTktCall()
        this.setState({ compCall: false })
    };
    inProgTicketQuery(event) {
        event.preventDefault()
        const { inProgTktCall } = this.props
        inProgTktCall()
        this.setState({ compCall: false })
    };
    onHoldTicketQuery(event) {
        event.preventDefault()
        const { onHoldTktCall } = this.props
        onHoldTktCall()
        this.setState({ compCall: false })
    };

    compTicketQuery(event) {
        event.preventDefault()
        const { compTktCall } = this.props
        compTktCall()
        this.setState({ compCall: true })
    };
    archTicketQuery(event) {
        event.preventDefault()
        const { archTktCall } = this.props
        archTktCall()
        this.setState({ compCall: true })
    };
    viewButton(event) {
        event.preventDefault()
        const { viewCall } = this.props
        viewCall(event.target.name)
    };

    render() {
        const compCall = this.state.compCall;

        return (
            <div>
                <button type="button" className="btn btn-secondary" onClick={this.newTicketQuery}>New Tickets ({this.props.newTicketsNumber})</button>
                <button type="button" className="btn btn-secondary" onClick={this.pendTicketQuery}>Pending Tickets ({this.props.pendingTicketsNumber})</button>
                <button type="button" className="btn btn-secondary" onClick={this.inProgTicketQuery}>In-Progress Tickets ({this.props.inProgressTicketsNumber})</button>
                <button type="button" className="btn btn-secondary" onClick={this.onHoldTicketQuery}>On-Hold Tickets ({this.props.onHoldTicketsNumber})</button>
                <button type="button" className="btn btn-secondary" onClick={this.compTicketQuery}>Completed Tickets ({this.props.completedTicketsNumber})</button>
                <button type="button" className="btn btn-secondary" onClick={this.archTicketQuery}>Archived Tickets ({this.props.archivedTicketsNumber})</button>

                
                <Card>
                    <Card.Title as="h3">Tickets</Card.Title>
                    <Card.Body>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Unit Id</th>
                                    <th>Request Date</th>
                                    <th>Issue Category</th>
                                    <th>Status</th>
                                    <th>Tech Assigned</th>
                                    <th>Due Date</th>
                                    {(function() {
                                        if (compCall) {
                                            return <th>Complete Date</th>
                                        } else {
                                            return
                                        }
                                    })()}
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>

                                {this.props.tickets.map(t => (
                                    <tr key={t.ticketId}>
                                        <td>{t.unitId}</td>
                                        <td>{t.creationDate}</td>
                                        <td><h6>{t.category}</h6></td>
                                        <td>{t.status}</td>
                                        <td>{t.techFName} {t.techLName}</td>
                                        <td>{t.dueDate}</td>
                                        {(function() {
                                        if (compCall) {
                                            return <td>{t.completeDate}</td>
                                        } else {
                                            return
                                        }
                                    })()}
                                        <td><button name={t.ticketId} onClick={this.viewButton} >View Ticket</button></td>
                                    </tr>
                                ))}

                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MrgTicketsList;