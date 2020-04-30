import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_EMAIL, UPDATE_PASSWORD, UPDATE_PHONE } from '../actions/actions'
import '../Styling.css'

const UserDetailEdit = (props) => {

  const dispatch = useDispatch()

  const email = useSelector(state => state.updateEmail);
  const password = useSelector(state => state.updatePassword);
  const phone = useSelector(state => state.updatePhone);

  return (
    <div>
      <h3>User Detail</h3>
      <div>
        <h4>{ props.userDetail.fName } { props.userDetail.lName }</h4>
        <h5>{ props.userDetail.userType }</h5>
      </div>
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={email} onChange={event => dispatch({ type: UPDATE_EMAIL, payload: event.target.value })} />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" value={password} onChange={event => dispatch({ type: UPDATE_PASSWORD, payload: event.target.value })} />
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" value={phone} onChange={event => dispatch({ type: UPDATE_PHONE, payload: event.target.value })} />
      </form>
      <div>
        <button type="button" className="btn btn-primary" data-id={ props.userDetail.userId } data-email={ email } data-pass={ password } data-phone={ phone } onClick={ props.updateCall }>Save User</button>
        <button type="button" className="btn btn-danger" value={ props.userDetail.userId } onClick={ props.archiveCall }>Archive User</button>
      </div>
    </div>
  );
}

export default UserDetailEdit;