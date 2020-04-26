import React from "react";
import { useDispatch } from 'react-redux';
import { DEFINE_TICKET_DETAIL } from "../actions/actions";

const TicketDetailRetrieve = (props) => {

    const dispatch = useDispatch()

    dispatch({
        type: DEFINE_TICKET_DETAIL,
        payload: {
            status: props.ticketDetail.status,
            mainNote: props.ticketDetail.mainNote
        }
    });

    return (
        <div></div>
    );
}

export default TicketDetailRetrieve;
