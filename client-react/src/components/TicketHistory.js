import React from "react";
import axios from "axios";
import '../Styling.css'
import Table from 'react-bootstrap/Table';

class TicketHistory extends React.Component {
    constructor (props) {
        super(props);
        this.state = { tickets: [] };
    }


    componentDidMount() {
        this.getTickets();
    }

    getTickets = () => {
        let url = "http://localhost:3001/tickets/";
        axios.get(url).then(response => this.setState({ tickets: response.data }));
    };

    render() {
        return (
            <div>
                <h1>Ticket History</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Request Date</th>
                            <th>Issue Category</th>
                            <th>Tech Assigned</th>
                            <th>Status</th>
                            <th>Entry Date</th>
                            <th>Entry Selection</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.tickets.map(t => ( 
                            <tr key={t.ticketId}>
                                <td>{t.createdAt}</td>
                                <td>{t.category}<hr />{t.note}</td>
                                <td>{t.techid}</td>
                                <td>{t.priority}</td>
                                <td>{t.updatedAt}</td>
                                <td>{t.access}</td>

                            </tr>
                         )) }

                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TicketHistory;