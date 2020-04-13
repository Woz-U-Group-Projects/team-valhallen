import React from "react";
import axios from "axios";
//import { connect } from 'react-redux';
import UserDetail from "./UserDetail";
import { connect } from 'react-redux';
import { updateUser, userEmailChanged, userPassChanged, userPhoneChanged, userUnitChanged } from '../actions/index';
import '../task.min.css'

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: [],                    // used to store array of users
      multiId: 'userId',            // used to pass selected user type to render
      viewSelected: false           // used to determine if user view is selected
    };   
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    let url = "http://localhost:3001/users";     
    axios.get(url).then(response => this.setState({ users: response.data, multiId: 'userId' })); 
    this.setState({ viewSelected: false });
  };

  getTechs = () => {
    let url = "http://localhost:3001/users/techs";     
    axios.get(url).then(response => this.setState({ users: response.data, multiId: 'techId' }));
    this.setState({ viewSelected: false });
  };

  getMgrs = () => {
    let url = "http://localhost:3001/users/mgrs";     
    axios.get(url).then(response => this.setState({ users: response.data, multiId: 'mgrId' }));
    this.setState({ viewSelected: false });
  };

  viewUser = (id) => {
    console.log("View User #" + id);            // for verification of id passed from render JSX
    this.setState({ viewSelected: true });      // viewSelected for rendering user detail component
    //this.props.dispatch({ type: 'SENDUSERID' });//     
    //return { id: state.id };  call in userDetail Comp  // action to connect to redux store
  };

  render() {
    const idType = this.state.multiId;          // stores id type based off of selection of list type
    const viewSelected = this.state.viewSelected;    //stores if view user is selected
    let viewComp; 

    if (viewSelected){                          // renders userDetail if true
      viewComp = <UserDetail 
        user={this.props.user}
        onUpdateUser={this.props.onUpdateUser}
        onUserEmailChanged={this.props.onUserEmailChanged}
        onUserPassChanged={this.props.onUserPassChanged}
        onUserPhoneChanged={this.props.onUserPhoneChanged}
        onUserUnitChanged={this.props.onUserUnitChanged}
        updateEmailText={this.props.updateEmailText}
        updatePassText={this.props.updatePassText}
        updatePhoneText={this.props.updatePhoneText}
        updateUnitText={this.props.updateUnitText}
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
              <th>Unit Number</th>
              <th></th>
            </tr>

            {this.state.users.map(p => (
              <tr key={p.idType}>
                <td>{p.fName} {p.lName}</td> 
                <td>{p.email}</td> 
                <td>{p.phone}</td> 
                <td>{p.unitId}</td>
                <td><button onClick={() => this.viewUser(p.userId)}>View User</button></td>
              </tr>
            ))}

          </tbody>
        </table>

        <div>{idType}</div>

        <div className="detail-container">
          { viewComp }
        </div>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateUser: () => dispatch(updateUser()),
    onUserEmailChanged: text => dispatch(userEmailChanged(text)),
    onUserPassChanged: text => dispatch(userPassChanged(text)),
    onUserPhoneChanged: text => dispatch(userPhoneChanged(text)),
    onUserUnitChanged: text => dispatch(userUnitChanged(text)),
  };
}
function mapStateToProps(state) {
  return{
    items: state.items,
    updateEmailText: state.updateEmailText,
    updatePassText: state.updatePassText,
    updatePhoneText: state.updatePhoneText,
    updateUnitText: state.updateUnitText
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
