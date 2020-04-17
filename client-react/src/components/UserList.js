import React from "react";
import axios from "axios";
import UserDetail from "./UserDetail";
import { connect } from 'react-redux';
import { updateUserDetail, defineUserDetail, updateEmail, updatePassword, updatePhone, updateUserType, updateUnit } from '../actions/actions';
import '../task.min.css'

class UserList extends React.Component {
  constructor(props, { defineEmail, definePassword, definePhone, defineUserType, defineUnit }) {
    super(props);
    this.state = { 
      users: [],                    // used to store array of users
      viewSelected: false,          // used to determine if user view is selected
      user: []                      // used to pass user details
    };   
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    let url = "http://localhost:3001/users/tenants";     
    axios.get(url).then(response => this.setState({ users: response.data })); 
    this.setState({ viewSelected: false });
  };

  getTechs = () => {
    let url = "http://localhost:3001/users/techs";     
    axios.get(url).then(response => this.setState({ users: response.data }));
    this.setState({ viewSelected: false });
  };

  getMgrs = () => {
    let url = "http://localhost:3001/users/mgrs";     
    axios.get(url).then(response => this.setState({ users: response.data }));
    this.setState({ viewSelected: false });
  };

  //NEED TO GET USER AND ASSIGN TO 'DEFINE' DETAIL OBJECTS IN STORE
  //CALL DEFINEUSERDETAIL REDUCER TO PROMPT
  viewUser = (id) => {
    this.setState({ viewSelected: true });      // viewSelected for rendering user detail component
    let url = "http://localhost:3001/users/" + id;
    axios.get(url, { userid: id }).then(response => {
      this.setState({ user: response.data })
    });
  };

  render() {
    const viewSelected = this.state.viewSelected;    //stores if view user is selected
    let viewComp;
    
    if (viewSelected){                          // renders userDetail if true
      viewComp = <UserDetail
        userDetails={this.state.user} 
        onUpdateUserDetail={this.props.onUpdateUserDetail}
        onDefineUserDetail={this.props.onDefineUserDetail}
        onUpdateEmail={this.props.onUpdateEmail}
        onUpdatePassword={this.props.onUpdatePassword}
        onUpdatePhone={this.props.onUpdatePhone}
        onUpdateUserType={this.props.onUpdateUserType}
        onUpdateUnit={this.props.onUpdateUnit}
        />;
    }

    return (
      <div>
        <button type="button" className="btn btn-secondary" onClick={this.getUsers}>Tenants</button>
        <button type="button" className="btn btn-secondary" onClick={this.getTechs}>Technicians</button>
        <button type="button" className="btn btn-secondary" onClick={this.getMgrs}>Managers</button>
        <h3>List of Users</h3>
        <table>
          <tbody>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th></th>
            </tr>

            {this.state.users.map(p => (
              <tr key={p.userId}>
                <td>{p.fName} {p.lName}</td> 
                <td>{p.email}</td> 
                <td>{p.phone}</td> 
                <td><button onClick={() => this.viewUser(p.userId)}>View User</button></td>
              </tr>
            ))}

          </tbody>
        </table>

        <div className="detail-container">
          { viewComp }
        </div>

      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
