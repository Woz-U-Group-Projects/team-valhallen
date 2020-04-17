export const updateUser = () => (
    {
        type: 'UPDATE_USER'
    }
)   

export const userEmailChanged = (text) => (
    {
        type: 'USER_EMAIL_CHANGED',
        text
    }
)

export const userPassChanged = (text) => (
    {
        type: 'USER_PASS_CHANGED',
        text
    }
)

export const userPhoneChanged = (text) => (
    {
        type: 'USER_PHONE_CHANGED',
        text
    }
)

export const userUnitChanged = (text) => (
    {
        type: 'USER_UNIT_CHANGED',
        text
    }
)

