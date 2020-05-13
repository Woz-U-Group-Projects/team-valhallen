//Necessary Imports
import React from "react";
import axios from "axios";
import '../Styling.css'

import UserList from "./UserList";
import UserDetailEdit from "./UserDetailEdit";
import UserDetailRetrieve from "./UserDetailRetrieve";
import AddUserDetail from "./AddUserDetail";

class UserManagement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],                    // used to store array of users 
      user: [],                     // used to pass user details
      viewConfirm: false,
      newTrigger: false,
      viewUserId: ''
    }
    this.getNewUsers = this.getNewUsers.bind(this)
    this.getTenants = this.getTenants.bind(this)
    this.getTechs = this.getTechs.bind(this)
    this.getMgrs = this.getMgrs.bind(this)
    this.viewUser = this.viewUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getNewUsers();
    this.getTechs();
  }



  getNewUsers() {
    let url = "http://localhost:3001/users/new";
    axios.get(url).then(response => this.setState({ users: response.data }));
    this.setState({ viewConfirm: false, newTrigger: true });
  };

  getTenants() {
    let url = "http://localhost:3001/users/tenants";
    axios.get(url).then(response => this.setState({ users: response.data }));
    this.setState({ viewConfirm: false, newTrigger: false });
  };

  getTechs() {
    let url = "http://localhost:3001/users/techs";
    axios.get(url).then(response => this.setState({ users: response.data }));
    this.setState({ viewConfirm: false, newTrigger: false });
  };

  getMgrs() {
    let url = "http://localhost:3001/users/mgrs";
    axios.get(url).then(response => this.setState({ users: response.data }));
    this.setState({ viewConfirm: false, newTrigger: false });
  };

  viewUser(id) {
    this.setState({ viewConfirm: true });
    let url = "http://localhost:3001/users/" + id;
    axios.get(url).then(response => {
      this.setState({ user: response.data })
    });
    this.setState({ viewUserId: id });
  };

  updateUser(evt) {
    let url = "http://localhost:3001/users/" + evt.target.dataset.id;     
    axios.put(url, { 
      newEmail: evt.target.dataset.email,
      newPassword: evt.target.dataset.pass, 
      newPhone: evt.target.dataset.phone
    }).then(alert("User Details Have Beed Saved"));
    this.viewUser();
  };

  archiveUser = (evt) => {
    let url = "http://localhost:3001/users/archive/" + evt.target.value;     
    axios.put(url, {}).then(alert("User has be archived"));
  };

  // JSX Rendering
  render() {

    const viewSelected = this.state.viewConfirm;    //stores if view user is selected
    const newTrigger = this.state.newTrigger;       //confirms user detail component render
    let viewComp, assignComp;

    if (viewSelected & newTrigger === false) {                          // renders userDetail if true
      assignComp = <UserDetailRetrieve userDetail={this.state.user} />
      viewComp = <UserDetailEdit
        userDetail={this.state.user}
        updateCall={this.updateUser}
        archiveCall={this.archiveUser}
      />;
    }
    if (viewSelected & newTrigger) {
      viewComp = <AddUserDetail
        userDetail={this.state.user}
      />;
    }

    return (
      <div>

        <UserList usersList={this.state.users}
          newCall={this.getNewUsers}
          tenantCall={this.getTenants}
          techCall={this.getTechs}
          mgrCall={this.getMgrs}
          viewCall={this.viewUser} />

        <div>
          {assignComp}
          {viewComp}
        </div>

      </div>
    )
  };
}

export default UserManagement;
