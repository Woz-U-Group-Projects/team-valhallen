import React from "react";
import '../task.min.css';
import Table from 'react-bootstrap/Table';

class MrgTicketsList extends React.Component {
    constructor (props) {
        super(props)
        this.state = { tickets: [] }
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
    };
    pendTicketQuery(event) {
        event.preventDefault()
        const { pendTktCall } = this.props
        pendTktCall()
    };
    inProgTicketQuery(event) {
        event.preventDefault()
        const { inProgTktCall } = this.props
        inProgTktCall()
    };
    onHoldTicketQuery(event) {
        event.preventDefault()
        const { onHoldTktCall } = this.props
        onHoldTktCall()
    };

    compTicketQuery(event) {
        event.preventDefault()
        const { compTktCall } = this.props
        compTktCall()
    };
    archTicketQuery(event) {
        event.preventDefault()
        const { archTktCall } = this.props
        archTktCall()
    };
    viewButton(event) {
        event.preventDefault()
        const { viewCall } = this.props
        viewCall(event.target.name)
    };

    render() {
        return (
            <div>
                <button type="button" className="btn btn-secondary" onClick={ this.newTicketQuery }>New Tickets</button>
                <button type="button" className="btn btn-secondary" onClick={ this.pendTicketQuery }>Pending Tickets</button>
                <button type="button" className="btn btn-secondary" onClick={ this.inProgTicketQuery }>In-Progress Tickets</button>
                <button type="button" className="btn btn-secondary" onClick={ this.onHoldTicketQuery }>On-Hold Tickets</button>
                <button type="button" className="btn btn-secondary" onClick={ this.compTicketQuery }>Completed Tickets</button>
                <button type="button" className="btn btn-secondary" onClick={ this.archTicketQuery }>Archived Tickets</button>

                <h1>Ticket History</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Unit Id</th>
                            <th>Request Date</th>
                            <th>Issue Category</th>
                            <th>Status</th>
                            <th>Tech Assigned</th>
                            <th>Ticket Due</th>
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
                                <td>{t.techid}</td>
                                <td>{t.dueDate}</td>
                                <td><button name={t.ticketId} onClick={this.viewButton} >View Ticket</button></td>
                            </tr>
                        ))} 

                    </tbody>
                </Table>
            </div>
        );
    }
}

export default MrgTicketsList;