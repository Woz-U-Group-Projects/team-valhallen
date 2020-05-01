import React from 'react';
import axios from 'axios';

import MrgTicketsList from './MrgTicketsList';
import TicketView from './TicketView';
import Analytics from './Analytics';
import AssignTech from './AssignTech';
import ArchiveTicket from './ArchiveTicket';


class ManagerHomeMgmt extends React.Component {
    constructor(props) {
        super(props) 
        this.state = { 
            tickets: [],
            ticket: [],
            linkedUser: [],
            viewConfirm: false,
            newTrigger: false,
            completeTrigger: false
        }
        this.getNewTickets = this.getNewTickets.bind(this)
        this.getPendingTickets = this.getPendingTickets.bind(this)
        this.getCompletedTickets = this.getCompletedTickets.bind(this)
        this.getArchivedTickets = this.getArchivedTickets.bind(this)
        this.viewTicket = this.viewTicket.bind(this)
        this.techAssigned = this.techAssigned.bind(this)
        this.ticketArchived = this.ticketArchived.bind(this)
    }

    componentDidMount() {
        this.getNewTickets();
    }

    getNewTickets() {
        let url = "http://localhost:3001/ticketHistory/new";
        axios.get(url).then(response => this.setState({ tickets: response.data }));
        this.setState({ viewConfirm: false, newTrigger: true, completeTrigger: false });
    };

    getPendingTickets() {
        let url = "http://localhost:3001/ticketHistory/pending";
        axios.get(url).then(response => this.setState({ tickets: response.data }));
        this.setState({ viewConfirm: false, newTrigger: false, completeTrigger: false });
    };

    getCompletedTickets() {
        let url = "http://localhost:3001/ticketHistory/complete";
        axios.get(url).then(response => this.setState({ tickets: response.data }));
        this.setState({ viewConfirm: false, newTrigger: false, completeTrigger: true });
    };
 
    getArchivedTickets() {
        let url = "http://localhost:3001/ticketHistory/archived";
        axios.get(url).then(response => this.setState({ tickets: response.data }));
        this.setState({ viewConfirm: false, newTrigger: false, completeTrigger: false });
    };

    viewTicket(id) {
        
        let urla = "http://localhost:3001/ticketHistory/" + id;
        axios.get(urla).then(response => {
            this.setState({ ticket: response.data })
        });

        // let tktUserId = this.state.ticket.userId;

        // let urlb = "http://localhost:3001/users/" + tktUserId;
        // axios.get(urlb).then(response => {
        //     this.setState({ linkedUser: response.data })
        // });
        this.setState({ viewConfirm: true });
    };

    techAssigned(evt) {
        this.getNewTickets();
    };

    ticketArchived(evt) {
        this.getCompletedTickets();
    };

    render() {

        const viewSelected = this.state.viewConfirm;
        const newTrigger = this.state.newTrigger;
        const completeTrigger = this.state.completeTrigger;
        let viewComp, editComp;

        if (viewSelected) {
            viewComp = <TicketView 
                userDetail={this.state.linkedUser}
                ticketDetail={this.state.ticket}
            />
        }
        if (viewSelected && newTrigger) {
            editComp = <AssignTech 
                ticketDetail={this.state.ticket}
                techAssigned={this.techAssigned}
            />
        }
        if (viewSelected && completeTrigger) {
            editComp = <ArchiveTicket
                ticketDetail={this.state.ticket}
                ticketArchived={this.ticketArchived}
            />
        }
    

        return(
            <div>
                <h1>Manager Profile</h1>
                <Analytics />
                <MrgTicketsList 
                tickets={this.state.tickets}
                users={this.state.users}
                newTktCall={this.getNewTickets}
                pendTktCall={this.getPendingTickets}
                compTktCall={this.getCompletedTickets}
                archTktCall={this.getArchivedTickets}
                viewCall={this.viewTicket}
                />

                <div>
                    {viewComp}
                    {editComp}
                </div>

            </div>
        )        
    };
}

export default ManagerHomeMgmt;