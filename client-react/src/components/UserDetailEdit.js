import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_EMAIL, UPDATE_PASSWORD, UPDATE_PHONE, UPDATE_USER_TYPE } from '../actions/actions'

const UserDetailEdit = (props) => {

  const dispatch = useDispatch()


  function updateUser(event) {
    event.preventDefault()
    //const {updateCall} = this.props
    //updateCall()
  };

  function archiveUser(event) {
    event.preventDefault()
    //const {archiveCall} = this.props
    //archiveCall()
  };


  const email = useSelector(state => state.updateEmail);
  const password = useSelector(state => state.updatePassword);
  const phone = useSelector(state => state.updatePhone);
  const userType = useSelector(state => state.updateUserType);

  function emailChange(event) {
    event.preventDefault()
    dispatch({ type: UPDATE_EMAIL, payload: event.target.value });
  };


  return (
    <div>
      <h3>User Detail</h3>
      <div>
        <h4>{props.userDetail.fName} {props.userDetail.lName}</h4>
      </div>
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={email} onChange={emailChange} />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" value={password} onChange={event => dispatch({ type: UPDATE_PASSWORD, payload: event.target.value })} />
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" value={phone} onChange={event => dispatch({ type: UPDATE_PHONE, payload: event.target.value })} />
        <label htmlFor="type">User Type</label>
        <input type="text" name="type" value={userType} onChange={event => dispatch({ type: UPDATE_USER_TYPE, payload: event.target.value })} />
      </form>
      <div>
        <button type="button" className="btn btn-primary" onClick={updateUser.bind(this)}>Save User</button>
        <button type="button" className="btn btn-danger" onClick={archiveUser.bind(this)}>Archive User</button>
      </div>
    </div>
  );
}

export default UserDetailEdit;