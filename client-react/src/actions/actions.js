export const DEFINE_USER_DETAIL = 'DEFINE_USER_DETAIL'
export const UPDATE_USER_DETAIL = 'UPDATE_USER_DETAIL'
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const UPDATE_PHONE = 'UPDATE_PHONE'
export const UPDATE_USER_TYPE = 'UPDATE_USER_TYPE'

export function defineUserDetail(text) {
    return {
        type: DEFINE_USER_DETAIL
    }
}

export function updateUserDetail(text) {
    return {
        type: UPDATE_USER_DETAIL
    }
}

export function updateEmail(text) {
    return {
        type: UPDATE_EMAIL,
        text
    }
}   

export function updatePassword(text) {
    return {
        type: UPDATE_PASSWORD,
        text
    }
}

export function updatePhone(text) {
    return {
        type: UPDATE_PHONE,
        text
    }
} 

export function updateUserType(text) {
    return {
        type: UPDATE_USER_TYPE,
        text
    }
} 



