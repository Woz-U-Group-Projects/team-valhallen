import React from "react";
import axios from "axios";
//import { connect } from 'react-redux';
import '../task.min.css'

const UserDetail = (props, { details, onUpdateEmail, onUpdatePassword, onUpdatePhone, onUpdateUserType, onUpdateUnit, updateEmail, updatePassword, updatePhone, updateUserType, updateUnit }) => {

//class UserDetail extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = { user: [], viewId: 2, email: ''};                 
//  }

  /***********Need to Recieve User Id from store********************/
  /***********Render below in the didMount**************************/

//  componentDidMount() {
//    this.getData(this.state.viewId);
//  }

//  getData = () => {
//    let url = "http://localhost:3001/users/" + this.props.userId;
//    axios.get(url, { userid: this.props.userId }).then(response => {
//      this.setState({ user: response.data })
//    });     
//  };

  function updateUser(id) {                                     
    let url = "http://localhost:3001/users/" + id;     
    axios.put(url, { 
      userid: id    
    }).then()
  };

  /*
  archiveUser = (id) => {                                     
    let url = "http://localhost:3001/users/" + id + "/complete";     
    axios.put(url, { userid: this.id, isComplete: this.isComplete }).then(response => {   
      this.getData();
    });
  };
  */

    return (
      <div>
        <h3>User Detail</h3>
          <div>
            <div>{props.userDetails.fName} {props.userDetails.lName}</div>
          </div>
          <form>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={props.userDetails.email} onChange={event => props.onUpdateEmail(event.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" value={props.userDetails.password} onChange={event => props.onUpdatePassword(event.target.value)}/>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" value={props.userDetails.phone} onChange={event => props.onUpdatePhone(event.target.value)}/>
            <label htmlFor="type">User Type</label>
            <input type="text" name="type" value={props.userDetails.userType} onChange={event => props.onUpdateUserType(event.target.value)}/>
          </form>
          <div>
            <button type="button" className="btn btn-secondary">Edit User</button>
            <button type="button" className="btn btn-primary" onClick={updateUser(props.userDetails.userId)}>Save User</button>
            <button type="button" className="btn btn-secondary">Archive User</button>
          </div>    
      </div>
    );
//  }
}

export default UserDetail;