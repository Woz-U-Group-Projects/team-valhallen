export const DEFINE_TENANT_DETAIL = 'DEFINE_TENANT_DETAIL'
export const UPDATE_TENANT_DETAIL = 'UPDATE_TENANT_DETAIL'
export const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME'
export const UPDATE_LASTNAME = 'UPDATE_LASTNAME'
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const UPDATE_PHONE = 'UPDATE_PHONE'
export const UPDATE_USER_TYPE = 'UPDATE_USER_TYPE'

export function defineTenantDetail(text) {
    return {
        type: DEFINE_TENANT_DETAIL
    }
}

export function updateFirstName(text) {
    return {
        type: UPDATE_FIRSTNAME,
        text
    }
}

export function updateLastName(text) {
    return {
        type: UPDATE_LASTNAME,
        text
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