//import { combineReducers } from 'redux'
import {
    DEFINE_USER_DETAIL,
    UPDATE_EMAIL,
    UPDATE_PASSWORD,
    UPDATE_PHONE
} from '../actions/actions'

const initialState = {
    updateEmail: "update email",
    updatePassword: "update password",
    updatePhone: "update phone"
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
        default:
            return state;
    }
}

export default editUserReducer