import React from "react";
import '../task.min.css';
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_FIRSTNAME, UPDATE_LASTNAME, UPDATE_EMAIL, UPDATE_PHONE} from '../actions/tenantActions'




const TenantDetailEdit = (props) => {


  const dispatch = useDispatch()


  const fName = useSelector(state => state.updateFirstName);
  const lName = useSelector(state => state.updateLastName);
  const email = useSelector(state => state.updateEmail);
  const phone = useSelector(state => state.updatePhone);


  return (
    <div>
      <h3>Tenant Details</h3>
      <div>
        <h4>{props.tenantDetail.fName} {props.tenantDetail.lName}</h4>
        <h5>{props.tenantDetail.email}</h5>
        <h5>{props.tenantDetail.phone}</h5>
      </div>
      <form>
      <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" value={fName} onChange={event => dispatch({ type: UPDATE_FIRSTNAME, payload: event.target.value })} />
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" value={lName} onChange={event => dispatch({ type: UPDATE_LASTNAME, payload: event.target.value })} />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={email} onChange={event => dispatch({ type: UPDATE_EMAIL, payload: event.target.value })} />
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" value={phone} onChange={event => dispatch({ type: UPDATE_PHONE, payload: event.target.value })} />
      </form>
      <div>
        <button type="button" className="btn btn-primary" data-id={props.tenantDetail.userId} data-fname={fName} data-lname={lName} data-email={email}  data-phone={phone} onClick={props.updateCall}>Save Info</button>

      </div>
    </div>
  );
}
export default TenantDetailEdit;