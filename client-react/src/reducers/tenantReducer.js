//import { combineReducers } from 'redux'


import {
    DEFINE_TENANT_DETAIL,
    UPDATE_FIRSTNAME,
    UPDATE_LASTNAME,
    UPDATE_EMAIL,
    UPDATE_PASSWORD,
    UPDATE_PHONE
} from '../actions/tenantActions'

const initialState = {
    updateFirstName: "update firstname",
    updateLastName: "update lastname",
    updateEmail: "update email",
    updatePassword: "update password",
    updatePhone: "update phone"
};

function tenantReducer(state = initialState, { type, payload }) {

    switch (type) {

        case DEFINE_TENANT_DETAIL:
            return {
                ...state,
                updateFirstName: payload.fName,
                updateLastName: payload.lName,
                updateEmail: payload.email,
                updatePassword: payload.password,
                updatePhone: payload.phone
            };

        case UPDATE_FIRSTNAME:
            return {
                ...state,
                updateFirstName: payload
            };

        case UPDATE_LASTNAME:
            return {
                ...state,
                updateLastName: payload
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

export default tenantReducer