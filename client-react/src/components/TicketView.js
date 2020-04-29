import React from "react";
//import { useSelector, useDispatch } from 'react-redux'
//import { UPDATE_EMAIL, UPDATE_PASSWORD, UPDATE_PHONE } from '../actions/actions'

const TicketView = (props) => {

  //const dispatch = useDispatch()

  // const email = useSelector(state => state.updateEmail);
  // const password = useSelector(state => state.updatePassword);
  // const phone = useSelector(state => state.updatePhone);

  return (
    <div>
      <h3>Ticket Detail</h3>
      <div>
        <h4>Tenant: { props.userDetail.fName } { props.userDetail.lName }</h4>
      </div>
      <div>Issue Category: {props.ticketDetail.category}</div>
      <div>Note: {props.ticketDetail.note}</div>
      <div>Created On: {props.ticketDetail.creationDate}</div>
      <div>Priority Level: {props.ticketDetail.priority}</div>
    </div>
  );
}

export default TicketView;