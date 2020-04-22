import {
    DEFINE_USER_DETAIL,
    UPDATE_USER_DETAIL,
    UPDATE_EMAIL,
    UPDATE_PASSWORD,
    UPDATE_PHONE,
    UPDATE_USER_TYPE
} from '../actions/actions'

const initialState = {
    oldDetails: {
            fName: "old fname",
            lName: "old lname",
            email: "old email",
            password: "old password",
            phone: 5551212,
            userType: "old userType"
    },
    newDetails: {
            fName: "",
            lName: "",
            email: "",
            password: "",
            phone: "",
            userType: ""
    },
    updateEmail:"update email",
    updatePassword:"update password",
    updatePhone:"update phone",
    updateUserType:"update user type",
    defineEmail:"define email",
    definePassword:"define password",
    definePhone:"define phone",
    defineUserType:"define user type"
};

function defineUserReducer(state = initialState, {type, payload}) {
    switch (type) {
        case DEFINE_USER_DETAIL:
            return {
                ...state,
                //oldDetails:{
                //    fName: action.fName,
                //    lName: action.value,
                //    email: action.value,
                //   password: action.password,
                //    phone: action.text,
                //    userType: action.text
                //},
                updateEmail: payload.email, 
                updatePassword: payload.password, 
                updatePhone: payload.phone,
                updateUserType: payload.userType
            };
        default:
            return state;
    }
}

function editUserReducer(state = initialState, {type, payload}) {
    switch (type) {
        case UPDATE_USER_DETAIL:
            return {
                ...state,
                newDetails:{
                    fName: state.oldDetails.fName,
                    lName: state.oldDetails.lName,
                    email: state.updateEmail,
                    password: state.updatePassword,
                    phone: state.updatePhone,
                    userType: state.updateUserType
                },
                updateEmail:"",
                updatePassword:"",
                updatePhone:"",
                updateUserType:""
            };
        case UPDATE_EMAIL:
            return {
                ...state,
                updateEmail: payload.text
            };
        case UPDATE_PASSWORD:
            return {
                ...state,
                updatePassword: payload.text
            };
        case UPDATE_PHONE:
            return {
                ...state,
                updatePhone: payload.text
            };
        case UPDATE_USER_TYPE:
            return {
                ...state,
                updateUserType: payload.text
            };
        default:
            return state;
    }
}

export default (editUserReducer, defineUserReducer);