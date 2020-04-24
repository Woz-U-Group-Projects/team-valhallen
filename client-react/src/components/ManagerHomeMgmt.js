import React from 'react';
import axios from 'axios';

import MrgTicketsList from './MrgTicketsList';


class ManagerHomeMgmt extends React.Component {
    constructor(props) {
        super(props) 
        this.state = { 
            tickets: [],
            ticket: [],
            linkedUser: [],
            viewConfirm: false,
            newTrigger: false 
        }
        this.getNewTickets = this.getNewTickets.bind(this)
        this.getPendingTickets = this.getPendingTickets.bind(this)
        this.getCompletedTickets = this.getCompletedTickets.bind(this)
        this.getArchivedTickets = this.getArchivedTickets.bind(this)
        this.viewTicket = this.viewTicket.bind(this)
    }

    componentDidMount() {
        this.getNewTickets();
    }

    getNewTickets() {
        let urla = "http://localhost:3001/ticketHistory/new";
        let urlb = "http://localhost:3001/ticketHistory/user";
        axios.get(urla).then(response => this.setState({ tickets: response.data }));
        axios.get(urlb).then(response => this.setState({ linkedUser: response.data }));
        this.setState({ viewConfirm: false });
    };

    getPendingTickets() {
        let url = "http://localhost:3001/ticketHistory/pending";
        axios.get(url).then(response => this.setState({ tickets: response.data }));
        this.setState({ viewConfirm: false });
    };

    getCompletedTickets() {
        let url = "http://localhost:3001/ticketHistory/complete";
        axios.get(url).then(response => this.setState({ tickets: response.data }));
        this.setState({ viewConfirm: false });
    };

    getArchivedTickets() {
        let url = "http://localhost:3001/ticketHistory/archived";
        axios.get(url).then(response => this.setState({ tickets: response.data }));
        this.setState({ viewConfirm: false });
    };

    viewTicket(id) {
        this.setState({ viewConfirm: true });
        let url = "http://localhost:3001/ticketHistory/" + id;
        axios.get(url, { ticketId: id }).then(response => {
            this.setState({ ticket: response.data })
        });
        //this.setState({ viewUserId: id });
        console.log("View Ticket #" + id);
    };

    archiveTicket(id) {

    };

    render() {

        return(
            <div>
                
                <MrgTicketsList 
                tickets={this.state.tickets}
                newTktCall={this.getNewTickets}
                pendTktCall={this.getPendingTickets}
                compTktCall={this.getCompletedTickets}
                archTktCall={this.getArchivedTickets}
                viewCall={this.viewTicket}
                />

            </div>
        )        
    };
}

export default ManagerHomeMgmt;