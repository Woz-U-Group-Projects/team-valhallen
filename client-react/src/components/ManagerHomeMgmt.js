import React from 'react';
import axios from 'axios';

import MrgTicketsList from './MrgTicketsList';
import TicketView from './TicketView';
import AssignTech from './AssignTech';
import ArchiveTicket from './ArchiveTicket';
import Analytics from './Analytics';
import { Card } from 'react-bootstrap';


class ManagerHomeMgmt extends React.Component {
    constructor(props) {
        super(props) 
        this.state = { 
            users: [],
            tickets: [],
            ticket: {},
            newTickets: [],
            pendingTickets: [],
            completedTickets: [],
            archivedTickets: [],
            inProgressTickets: [],
            onHoldTickets: [],
            linkedUser: [],
            techs: [],
            viewConfirm: false,
            newTrigger: false,
            completeTrigger: false
        }
        this.getNewTickets = this.getNewTickets.bind(this)
        this.getPendingTickets = this.getPendingTickets.bind(this)
        this.getInProgressTickets = this.getInProgressTickets.bind(this)
        this.getOnHoldTickets = this.getOnHoldTickets.bind(this)
        this.getCompletedTickets = this.getCompletedTickets.bind(this)
        this.getArchivedTickets = this.getArchivedTickets.bind(this)
        this.viewTicket = this.viewTicket.bind(this)
        this.techAssigned = this.techAssigned.bind(this)
        this.ticketArchived = this.ticketArchived.bind(this)
        this.getTechsWL = this.getTechsWL.bind(this)
    }

    componentDidMount() {
        this.getPendingTickets();
        this.getCompletedTickets();
        this.getArchivedTickets();
        this.getInProgressTickets();
        this.getOnHoldTickets();
        this.getNewTickets();
        this.getTechsWL();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.ticket !== prevState.ticket) {
            this.getTechs(this.state.ticket);
        }
    }

    getNewTickets() {
        let url = "http://localhost:3001/ticketHistory/new";
        axios.get(url).then(response => this.setState({ tickets: response.data, newTickets: response.data }));
        this.setState({ viewConfirm: false, newTrigger: true, completeTrigger: false });
    };

    getPendingTickets() {
        let url = "http://localhost:3001/ticketHistory/pending";
        axios.get(url).then(response => this.setState({ tickets: response.data, pendingTickets: response.data}));
        this.setState({ viewConfirm: false, newTrigger: false, completeTrigger: false });
    };

    getInProgressTickets() {
        let url = "http://localhost:3001/ticketHistory/inProgress";
        axios.get(url).then(response => this.setState({ tickets: response.data, inProgressTickets: response.data }));
        this.setState({ viewConfirm: false, newTrigger: false, completeTrigger: false });
    };

    getOnHoldTickets() {
        let url = "http://localhost:3001/ticketHistory/onHold";
        axios.get(url).then(response => this.setState({ tickets: response.data, onHoldTickets: response.data }));
        this.setState({ viewConfirm: false, newTrigger: false, completeTrigger: false });
    };


    getCompletedTickets() {
        let url = "http://localhost:3001/ticketHistory/complete";
        axios.get(url).then(response => this.setState({ tickets: response.data, completedTickets: response.data }));
        this.setState({ viewConfirm: false, newTrigger: false, completeTrigger: true });
    };
 
    getArchivedTickets() {
        let url = "http://localhost:3001/ticketHistory/archived";
        axios.get(url).then(response => this.setState({ tickets: response.data, archivedTickets: response.data }));
        this.setState({ viewConfirm: false, newTrigger: false, completeTrigger: false });
    };

    viewTicket(id) {
        let urla = "http://localhost:3001/ticketHistory/" + id;
        axios.get(urla).then(response => {
            this.setState({ ticket: response.data })
        });
        this.setState({ viewConfirm: true });
        this.getTechs();
    };

    getTechs() {
        let category = this.state.ticket.category;
        console.log(this.state.ticket.category);
        let url = "http://localhost:3001/users/techSkills/" + category;
        axios.get(url)
        .then(response => this.setState({ techs: response.data }));
        
    };
    getTechsWL() {
        let url = "http://localhost:3001/users/techs";
        axios.get(url).then(response => this.setState({ users: response.data }));
        this.setState({ viewConfirm: false, newTrigger: false });
      };


    /********RESET TABLES AFTER MODIFICATION************/
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
                skilledTechs={this.state.techs}
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
                <Card>
                <Card.Header as="h1">Manager Profile</Card.Header>
                <Card.Body>
                {/* <Analytics
                usersList={this.state.users} 
                techCall={this.getTechs}/> */}
                <MrgTicketsList 
                newTicketsNumber = {this.state.newTickets.length} 
                pendingTicketsNumber = {this.state.pendingTickets.length}
                completedTicketsNumber = {this.state.completedTickets.length}
                archivedTicketsNumber = {this.state.archivedTickets.length}
                inProgressTicketsNumber = {this.state.inProgressTickets.length}
                onHoldTicketsNumber = {this.state.onHoldTickets.length}

                tickets={this.state.tickets}
                users={this.state.users}
                newTktCall={this.getNewTickets}
                pendTktCall={this.getPendingTickets}
                onHoldTktCall={this.getOnHoldTickets}
                inProgTktCall={this.getInProgressTickets}
                compTktCall={this.getCompletedTickets}
                archTktCall={this.getArchivedTickets}
                viewCall={this.viewTicket}
                />

                <div>
                    {viewComp}
                    {editComp}
                </div>
                </Card.Body>
                </Card>
            </div>
        )        
    };
}

export default ManagerHomeMgmt;