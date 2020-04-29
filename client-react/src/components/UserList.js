import React from "react";
import '../Styling.css'

class UserList extends React.Component {
  constructor(props) {
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

        <h3>List of Users</h3>

        <table>
          <tbody>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th></th>
            </tr>

            {this.props.usersList.map(p => (
              <tr key={p.userId}>
                <td>{p.fName} {p.lName}</td>
                <td>{p.email}</td>
                <td>{p.phone}</td>
                <td><button name={p.userId} onClick={this.viewButton} >View User</button></td>

              </tr>
            ))}
          </tbody>
        </table>

      </div>
    );
  }
}

export default UserList;