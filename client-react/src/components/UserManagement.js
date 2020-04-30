//Necessary Imports
import React from "react";
import axios from "axios";
import '../Styling.css'

// Component Imports
import UserList from "./UserList";
import UserDetailEdit from "./UserDetailEdit";
import UserDetailRetrieve from "./UserDetailRetrieve";
import AddUserDetail from "./AddUserDetail";

//import { connect } from 'react-redux';
//import { updateUserDetail, defineUserDetail, updateEmail, updatePassword, updatePhone, updateUserType, updateUnit } from '../actions/actions';

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
  }

  componentDidMount() {
    this.getNewUsers();
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
    console.log("View User #" + id);
  };

  updateUser(evt) {
    let url = "http://localhost:3001/users/" + evt.target.dataset.id;     
    axios.put(url, { 
      newEmail: evt.target.dataset.email,
      newPassword: evt.target.dataset.pass, 
      newPhone: evt.target.dataset.phone
    }).then(alert("User Details Have Beed Saved"))
    console.log(evt.target.dataset.email);
    console.log(evt.target.dataset.pass);
    console.log(evt.target.dataset.phone);
  };

  archiveUser = (id) => {
    //let url = "http://localhost:3001/users/" + id + "/complete";     
    //axios.put(url, { userid: this.id, isComplete: this.isComplete }).then(response => {   
    //   this.getData();
    //});
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
        updateCcall={this.updateUser}
        deleteCall={this.deleteUser} 
      />;
      console.log("Render New User Confirm")
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
/*
function mapDispatchToProps(dispatch) {
    return {
      onDefineUserDetail: () => dispatch(defineUserDetail()),
      onUpdateUserDetail: () => dispatch(updateUserDetail()),
      onUpdateEmail: text => dispatch(updateEmail(text)),
      onUpdatePassword: text => dispatch(updatePassword(text)),
      onUpdatePhone: text => dispatch(updatePhone(text)),
      onUpdateUserType: text => dispatch(updateUserType(text)),
      onUpdateUnit: text => dispatch(updateUnit(text))
    };
}



function mapStateToProps(state) {
    return{
      details: state.details,
      defineEmail: state.defineEmail,
      definePassword: state.definePassword,
      definePhone: state.definePhone,
      defineUserType: state.defineUserType,
      defineUnit: state.defineUnit,
      updateEmail: state.updateEmail,
      updatePassword: state.updatePassword,
      updatePhone: state.updatePhone,
      updateUserType: state.updateUserType,
      updateUnit: state.updateUnit
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);
*/