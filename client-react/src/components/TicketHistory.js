import React from "react";
import axios from "axios";
import '../task.min.css'
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
        let url = "http://localhost:3001/ticketHistory/";
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

                        {/* {this.state.tickets.map(t => ( */}
                            <tr key={this.state.ticketId}>
                                <td>{this.state.createdAt}</td>
                                <td><h6>{this.state.category}</h6><hr /><h6>{this.state.subCategory}</h6><hr />{this.state.note}</td>
                                <td>{this.state.techid}</td>
                                <td>{this.state.priority}</td>
                                <td>{this.state.updatedAt}</td>
                                <td>{this.state.access}</td>

                            </tr>
                        {/* ))} */}

                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TicketHistory;