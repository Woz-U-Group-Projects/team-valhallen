import React from "react";
import { connect } from 'react-redux';

const UserDetail = ({ details, onUpdateUserDetail, onUpdateEmail, onUpdatePassword, onUpdatePhone, onUpdateUserType, onUpdateUnit, updateEmail, updatePassword, updatePhone, updateUserType, updateUnit }) => {


function updateUser (event) {
  event.preventDefault()
  //const {updateCall} = this.props
  //updateCall()
};

function archiveUser (event) {
  event.preventDefault()
  //const {archiveCall} = this.props
  //archiveCall()
};

//<div>{props.userDetail.fName} {props.userDetail.lName}</div>
    return (
      <div>
        <h3>User Detail</h3>
          <div>
            //
          </div>
          <form>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={updateEmail} onChange={event => onUpdateEmail(event.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" value={updatePassword} onChange={event => onUpdatePassword(event.target.value)}/>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" value={updatePhone} onChange={event => onUpdatePhone(event.target.value)}/>
            <label htmlFor="type">User Type</label>
            <input type="text" name="type" value={updateUserType} onChange={event => onUpdateUserType(event.target.value)}/>
          </form>
          <div>
            <button type="button" className="btn btn-primary" onClick={updateUser.bind(this)}>Save User</button>
            <button type="button" className="btn btn-danger" onClick={archiveUser.bind(this)}>Archive User</button>
          </div>    
      </div>
    );
}

export default UserDetail;