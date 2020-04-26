export const DEFINE_USER_DETAIL = 'DEFINE_USER_DETAIL'
export const UPDATE_USER_DETAIL = 'UPDATE_USER_DETAIL'
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const UPDATE_PHONE = 'UPDATE_PHONE'
export const UPDATE_USER_TYPE = 'UPDATE_USER_TYPE'

//-----------Ticket Constants------------------------------*

export const DEFINE_TICKET_DETAIL = 'DEFINE_TICKET_DETAIL'
export const UPDATE_TICKET_STATUS = 'UPDATE_TICKET_STATUS'
export const UPDATE_TICKET_NOTE = 'UPDATE_TICKET_NOTE'

//----------------------------------------------------------*


//---------User Actions ------------------------------------*

export function defineUserDetail(text) {
    return {
        type: DEFINE_USER_DETAIL
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
//-------End User Actions -------------------------------------*

//-------Ticket Actions ---------------------------------------*


export function defineTicketDetail(text) {
    return {
        type: DEFINE_TICKET_DETAIL
    }
}
export function updateTicketStatus(text) {
    return {
        type: UPDATE_TICKET_STATUS,
        text
    }
}   
export function updateTicketNote(text) {
    return {
        type: UPDATE_TICKET_NOTE,
        text
    }
}   

//----End Ticket Actions ---------------------------------------*


