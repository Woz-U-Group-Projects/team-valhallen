import React from "react";
import axios from "axios";
import UserList from "./UserList";
import TenantDetailEdit from "./TenantDetailEdit";
import TenantDetailRetrieve from "./TenantDetailRetrieve";
import { connect } from 'react-redux';
import { defineTenantDetail, updateTenantDetail, updateFirstName, updateLastName, updateEmail, updatePhone } from '../actions/tenantActions';
import '../task.min.css'
import CreateTicketModal from "./CreateTicketModal";
import Card from 'react-bootstrap/Card';

class TenantDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],                    // used to store array of users 
      user: {},                     // used to pass user details
      viewConfirm: false,
      newTrigger: false,
      viewUserId: ''                   // used to pass user details
    };
    this.getTenants = this.getTenants.bind(this)
    this.viewUser = this.viewUser.bind(this)
  }

  componentDidMount() {
    this.getTenants();
    this.viewUser();
  }

  getTenants() {
    let url = "http://localhost:3001/users/tenants";
    axios.get(url).then(response => this.setState({ users: response.data }));
    this.setState({ viewConfirm: false, newTrigger: false });
  };


  viewUser(id) {
    this.setState({ viewConfirm: true });
    let url = "http://localhost:3001/users/" + 5;
    axios.get(url, { userid: id }).then(response => {
      this.setState({ user: response.data })
    });
    this.setState({ viewUserId: id });
    console.log("View User #" + id);
  };

  updateUser(evt) {
    let url = "http://localhost:3001/users/tenant/" + evt.target.dataset.id;
    axios.put(url, {
      newFirstName: evt.target.dataset.fname,
      newLastName: evt.target.dataset.lname,
      newEmail: evt.target.dataset.email,
      newPhone: evt.target.dataset.phone
    }).then(alert("User Details Have Beed Saved"))
  };

  render() {
    const viewSelected = this.state.viewConfirm;    //stores if view tenant is selected
    const newTrigger = this.state.newTrigger;       //confirms tenant detail component render
    let viewComp, assignComp;

    if (viewSelected & newTrigger === false) {                          // renders tenantDetail if true
      assignComp = <TenantDetailRetrieve
        tenantDetail={this.state.user}
        tenantCall={this.getTenants}
        viewCall={this.viewUser} />

      viewComp = <TenantDetailEdit
        tenantDetail={this.state.user}
        updateCall={this.updateUser}
      />;
    }
    if (viewSelected & newTrigger) {
      console.log("Render New User Confirm")
    }

    return (
      <div>
        <Card>
          <Card.Body>{assignComp}</Card.Body>
        </Card>
        <Card>
          <Card.Body>{viewComp}</Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <CreateTicketModal />
        </Card>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDefineTenantDetail: () => dispatch(defineTenantDetail()),
    onUpdateTenantDetail: () => dispatch(updateTenantDetail()),
    onUpdateFirstName: text => dispatch(updateFirstName(text)),
    onUpdateLastName: text => dispatch(updateLastName(text)),
    onUpdateEmail: text => dispatch(updateEmail(text)),
    onUpdatePhone: text => dispatch(updatePhone(text))
  };
}
function mapStateToProps(state) {
  return {
    details: state.details,
    defineFirstName: state.defineFirstName,
    defineLastName: state.defineLastName,
    defineEmail: state.defineEmail,
    definePassword: state.definePassword,
    definePhone: state.definePhone,
    updateFirstName: state.updateFirstName,
    updateLastName: state.updateLastName,
    updateEmail: state.updateEmail,
    updatePhone: state.updatePhone
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TenantDetails);

