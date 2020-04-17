const initialState = {
    details: [
        {
            email: "rescue183@yahoo.com",
            password: "renegade",
            phone: 8675309,
            userType: "tenant",
            unit: "69"
        }
    ],
    updateEmail:"",
    updatePassword:"",
    updatePhone:"",
    updateUserType:"",
    updateUnit:""
};

function editUserReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                details: [
                    ...state.details,
                    {
                        email: state.updateEmail,
                        password: state.updatePassword,
                        phone: state.updatePhone,
                        userType: state.updateUserType,
                        unit: state.updateUnit
                    }
                ],
                updateEmail:"",
                updatePassword:"",
                updatePhone:"",
                updateUserType:"",
                updateUnit:""
            };
        case 'UPDATE_EMAIL':
            return {
                ...state,
                updateEmail: action.text
            };
        case 'UPDATE_PASSWORD':
            return {
                ...state,
                updatePassword: action.text
            };
        case 'UPDATE_PHONE':
            return {
                ...state,
                updatePhone: action.text
            };
        case 'UPDATE_USER_TYPE':
            return {
                ...state,
                updateUserType: action.text
            };
        case 'UPDATE_UNIT':
            return {
                 ...state,
                updateUnit: action.text
            };
        default:
            return state;
    }
}

export default editUserReducer;