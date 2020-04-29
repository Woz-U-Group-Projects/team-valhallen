import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_TICKET_STATUS, UPDATE_TICKET_NOTE } from '../actions/actions'

const TicketDetailEdit = (props) => {

  const dispatch = useDispatch()

  const status = useSelector(state => state.updateTicketStatus);
  const mainNote = useSelector(state => state.updateTicketNote);

  return (
    <div>
      <h3>Ticket Detail</h3>
      <div>
        <h4>{ props.ticketDetail.ticketId }</h4> 
        <h4>{ props.ticketDetail.unitId }</h4>
        <h5>{ props.ticketDetail.category }</h5>
        <h4>{ props.ticketDetail.priority }</h4>
        <h4>{ props.ticketDetail.status }</h4>
        <h5>{ props.ticketDetail.note }</h5>

      </div>
      <form>
        <label htmlFor="status">Status</label>
        <select type="text" name="status" value={status} onChange={event => dispatch({ type: UPDATE_TICKET_STATUS, payload: event.target.value })}>Change Status
                <option value="inProgress">
                  In progress
                </option>
                <option value="onHold">
                  On hold
                </option>
                <option value="complete">
                  Complete
                </option>
                <option value="inComplete">
                  In complete
                </option>
        </select>
        <label htmlFor="mainNote">mainNote</label>
        <input type="text" name="mainNote" value={mainNote} onChange={event => dispatch({ type: UPDATE_TICKET_NOTE, payload: event.target.value })} />
      </form>
      <div>
        <button type="button" className="btn btn-primary" data-id={ props.ticketDetail.ticketId } data-status={ status } data-note={ mainNote } onClick={ props.updateCall }>Update Ticket</button>
      </div>
    </div>
  );
}

export default TicketDetailEdit;