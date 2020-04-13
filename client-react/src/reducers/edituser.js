const initialState = {
    user: [
        {
            email: 'amlippi@gmail.com',
            password: 'Password1',
            phone: '1234567890',
            unitId: '2'
        }
    ],
    updateEmailText:"",
    updatePassText:"",
    updatePhoneText:"",
    updateUnitText:""
};

function editUserReducer(state = initialState, action) {
    switch (action.type) {
        case 'USER_EMAIL_CHANGED':
            return {
                ...state,
                updateEmailText: action.text
            };
        case 'USER_PASS_CHANGED':
            return {
                ...state,
                updatePassText: action.text
            };
        case 'USER_PHONE_CHANGED':
            return {
                ...state,
                updatePhoneText: action.text
            };
        case 'USER_UNIT_CHANGED':
            return {
                ...state,
                updateUnitText: action.text
            };
        default:
            return state;
    }
}

export default editUserReducer;