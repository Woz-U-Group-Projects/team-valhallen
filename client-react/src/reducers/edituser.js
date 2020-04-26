//import { combineReducers } from 'redux'
import {
    DEFINE_USER_DETAIL,
    UPDATE_EMAIL,
    UPDATE_PASSWORD,
    UPDATE_PHONE,

    //-----ticket Imports----------------*
    DEFINE_TICKET_DETAIL,
    UPDATE_TICKET_STATUS,
    UPDATE_TICKET_NOTE


} from '../actions/actions'

const initialState = {
    updateEmail: "update email",
    updatePassword: "update password",
    updatePhone: "update phone",
    updaetTicketStatus: "Pending",
    updateTicketNote: "working on..."
};

function editUserReducer(state = initialState, { type, payload }) {
    switch (type) {
        case DEFINE_USER_DETAIL:
            return {
                ...state,
                updateEmail: payload.email,
                updatePassword: payload.password,
                updatePhone: payload.phone
            };
        case UPDATE_EMAIL:
            return {
                ...state,
                updateEmail: payload
            };
        case UPDATE_PASSWORD:
            return {
                ...state,
                updatePassword: payload
            };
        case UPDATE_PHONE:
            return {
                ...state,
                updatePhone: payload
            };
            //----------Ticket Reducer------------------------*

        case DEFINE_TICKET_DETAIL:
            return {
                ...state,
                updateTicketStatus: payload.status,
                updateTicketNote: payload.mainNote
            };
        case UPDATE_TICKET_STATUS:
            return {
                ...state,
                updateTicketStatus: payload
            };
        case UPDATE_TICKET_NOTE:
            return {
                ...state,
                updateTicketNote: payload
            };
            //---------End Ticket Reducer ---------------------*
        default:
            return state;
    }
}

export default editUserReducer