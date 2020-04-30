import React from "react";
import axios from "axios";
import '../Styling.css'

import TicketList from "./TicketList";
import TicketDetailEdit from "./TicketDetailEdit";
import TicketDetailRetrieve from "./TicketDetailRetrieve";


class TechTicketManagement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tickets: [],                    // used to store array of tickets 
      ticket: {},                     // used to pass ticket details
      viewConfirm: false,
      newTrigger: false,
      viewTicketId: ''
    }
    this.getNewTickets = this.getNewTickets.bind(this)
    this.getTenants = this.getTenants.bind(this)
    this.viewTicket = this.viewTicket.bind(this)
  }

  componentDidMount() {
    this.getNewTickets();
  }

  getNewTickets() {
    let url = "http://localhost:3001/tickets/";
    axios.get(url).then(response => this.setState({ tickets: response.data }));
    this.setState({ viewConfirm: false, newTrigger: true });
  };

  getTenants() {
    let url = "http://localhost:3001/users/tenants";
    axios.get(url).then(response => this.setState({ users: response.data }));
    this.setState({ viewConfirm: false, newTrigger: false });
  };
  

  viewTicket(id) {
    this.setState({ viewConfirm: true });
    let url = "http://localhost:3001/tickets/" + id;
    axios.get(url, { ticketId: id }).then(response => {
      this.setState({ ticket: response.data })
    });
    this.setState({ viewTicketId: id });
    console.log("View Ticket #" + id);
  };

  updateTicket(evt) {
    let url = "http://localhost:3001/tickets/" + evt.target.dataset.id;     
    axios.put(url, { 
      newTicketStatus: evt.target.dataset.status,
      newTicketNote: evt.target.dataset.note 
    }).then(alert("ticket Details Have Beed Saved"))
  };


  render() {

    const viewSelected = this.state.viewConfirm;    //stores if view ticket is selected
    let viewComp, assignComp;

    if (viewSelected) {                          // renders ticketDetail if true
      assignComp = <TicketDetailRetrieve ticketDetail={this.state.ticket} />
      viewComp = <TicketDetailEdit
        ticketDetail={this.state.ticket}
        updateCall={this.updateTicket}
      />;
    }

    return (
      <div>

        <TicketList ticketsList={this.state.tickets}
          ticketCall={this.getNewTickets}
          tenantCall={this.getTenants}
          viewCall={this.viewTicket} />

        <div>
          {assignComp}
          {viewComp}
        </div>

      </div>
    )
  };
}

export default TechTicketManagement;
