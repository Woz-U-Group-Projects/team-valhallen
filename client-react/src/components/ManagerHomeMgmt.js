import React from 'react';
import axios from 'axios';

import MrgTicketsList from './MrgTicketsList';
import TicketView from './TicketView';


class ManagerHomeMgmt extends React.Component {
    constructor(props) {
        super(props) 
        this.state = { 
            tickets: [],
            users: [],
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
    }

    componentDidMount() {
        this.getNewTickets();
    }

    //  shouldComponentUpdate(nextProps, nextState) {
    //      if (this.state.)
    //  };

    getNewTickets() {
        let urla = "http://localhost:3001/ticketHistory/new";
        axios.get(urla).then(response => this.setState({ tickets: response.data }));
        let urlb = "http://localhost:3001/users/tenants";
        axios.get(urlb).then(response => this.setState({ users: response.data }));
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
        let urla = "http://localhost:3001/ticketHistory/" + id;
        axios.get(urla).then(response => {
            this.setState({ ticket: response.data })
        });
        //this.getUserData(this.state.ticket.userId);
        setTimeout(this.getUserData(this.state.ticket.userId), 200);
        //let tktUserId = this.state.ticket.userId;
        //let urlb = "http://localhost:3001/users/" + tktUserId;
        //axios.get(urlb).then(response => {
        //    this.setState({ linkedUser: response.data })
        //});
    };

    getUserData(id) {
        //let tktUserId = this.state.ticket.userId;
        console.log("Linked User ID " + id);
        let url = "http://localhost:3001/users/" + id;
        axios.get(url).then(response => {
            this.setState({ linkedUser: response.data })
        });
        console.log(this.state.linkedUser);
    };

    assignTech(evt) {
        //let url = "http://localhost:3001/users/" + evt.target.dataset.id;     
        //axios.put(url, { 
            //newEmail: evt.target.dataset.email,
            //newPassword: evt.target.dataset.pass, 
            //newPhone: evt.target.dataset.phone
        //}).then(alert("User Details Have Beed Saved"))
    };

    archiveTicket(id) {

    };

    render() {

        const viewSelected = this.state.viewConfirm;
        let viewComp;

        if (viewSelected) {
            viewComp = <TicketView 
                userDetail={this.state.linkedUser}
                ticketDetail={this.state.ticket}
                updateCall={this.assignTech}
                archiveCall={this.archiveTicket}
            />
        }

        return(
            <div>
                
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
                </div>

            </div>
        )        
    };
}

export default ManagerHomeMgmt;