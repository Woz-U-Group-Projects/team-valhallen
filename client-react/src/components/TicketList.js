import React from "react";
import Table from 'react-bootstrap/Table';
import '../Styling.css'

class TicketList extends React.Component {
  constructor(props) {
    super(props)
    this.ticketQuery = this.ticketQuery.bind(this)
    this.tenantQuery = this.tenantQuery.bind(this)
    this.viewButton = this.viewButton.bind(this)
  }

  ticketQuery(event) {
    event.preventDefault()
    const { ticketCall } = this.props
    ticketCall();
  };
  tenantQuery(event) {
    event.preventDefault()
    const { tenantCall } = this.props
    tenantCall()
  };

  viewButton(event) {
    event.preventDefault()
    const { viewCall } = this.props
    viewCall(event.target.name)
  };

  render() {
    return (
      <div>
        <button type="button" className="btn btn-secondary" onClick={this.ticketQuery}>Tickets</button>
        <button type="button" className="btn btn-secondary" onClick={this.tenantQuery}>Tenants</button>

        <h3>List of Tickets</h3>

        <Table>
          <tbody>
            <tr>
              <th>Ticket Id</th>
              <th>Unit Id</th>
              <th> Priority </th>
              <th>Category</th>
              <th> Problem Note</th>
              <th>DueDate</th> 
              <th> Access</th>
              <th> Ticket Status</th>
              <th>Note</th>
              <th></th>
            </tr>

            {this.props.ticketsList.map(t => (
              <tr key={t.ticketId}>
                <td>{t.ticketId}</td>
                <td>{t.unitId}</td>
                <td>{t.priority}</td>
                <td>{t.category}</td>
                <td>{t.note}</td>
                <td>{t.dueDate}</td>
                <td>{t.access.toString()}</td>
                <td>{t.status}</td>
                <td>{t.mainNote}</td>
                <td><button name={t.ticketId} onClick={this.viewButton} >View Ticket</button></td>

              </tr>
            ))}
          </tbody>
        </Table>

      </div>
    );
  }
}

export default TicketList;