import React from "react";
import '../Styling.css'
import Table from 'react-bootstrap/Table';
import { Card } from "react-bootstrap";

class UserList extends React.Component {
  constructor (props) {
    super(props)
    this.newQuery = this.newQuery.bind(this)
    this.tenantQuery = this.tenantQuery.bind(this)
    this.techQuery = this.techQuery.bind(this)
    this.mgrQuery = this.mgrQuery.bind(this)
    this.viewButton = this.viewButton.bind(this)
  }

  newQuery(event) {
    event.preventDefault()
    const { newCall } = this.props
    newCall();
  };
  tenantQuery(event) {
    event.preventDefault()
    const { tenantCall } = this.props
    tenantCall()
  };
  techQuery(event) {
    event.preventDefault()
    const { techCall } = this.props
    techCall()
  };
  mgrQuery(event) {
    event.preventDefault()
    const { mgrCall } = this.props
    mgrCall()
  };

  viewButton(event) {
    event.preventDefault()
    const { viewCall } = this.props
    viewCall(event.target.name)
  };

  render() {
    return (
      <div>
        <button type="button" className="btn btn-secondary" onClick={this.newQuery}>New Users</button>
        <button type="button" className="btn btn-secondary" onClick={this.tenantQuery}>Tenants</button>
        <button type="button" className="btn btn-secondary" onClick={this.techQuery}>Technicians</button>
        <button type="button" className="btn btn-secondary" onClick={this.mgrQuery}>Managers</button>


        <Card>
          <Card.Title as="h3">List of Users</Card.Title>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.props.usersList.map(p => (
                  <tr key={p.userId}>
                    <td>{p.fName} {p.lName}</td>
                    <td>{p.email}</td>
                    <td>{p.phone}</td>
                    <td><button name={p.userId} onClick={this.viewButton} >View User</button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>

      </div >
    );
  }
}

export default UserList;