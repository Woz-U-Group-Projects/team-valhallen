import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_TICKET_STATUS, UPDATE_TICKET_NOTE } from '../actions/actions';
import Card from "react-bootstrap/Card";

const TicketDetailEdit = (props) => {
  const dispatch = useDispatch()
  const status = useSelector(state => state.updateTicketStatus);
  const mainNote = useSelector(state => state.updateTicketNote);
  return (
    <div>
      <Card style={{ width: '24rem' }}>
          <Card.Title>Ticket Detail</Card.Title>
          <Card.Body><h4>Ticket Id: { props.ticketDetail.ticketId }</h4>
        <h4>Unit Id:{ props.ticketDetail.unitId }</h4>
        <h5>Category:{ props.ticketDetail.category }</h5>
        <h4>Priority Level:{ props.ticketDetail.priority }</h4>
        <h4>Current Ticket Status:{ props.ticketDetail.status }</h4>
        <h5>Tenant Problem Notes:{ props.ticketDetail.note }</h5></Card.Body>
        <Card.Footer><form>
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
      </div></Card.Footer>
        </Card>

    </div>
  );
}
export default TicketDetailEdit;