import React from "react";
import { useDispatch } from 'react-redux';
import { DEFINE_USER_DETAIL } from "../actions/actions";

const UserDetailRetrieve = (props) => {

    const dispatch = useDispatch()

    let initialPass = true;
    if (initialPass) {
    dispatch({ 
        type: DEFINE_USER_DETAIL, 
        payload: {
            email: props.userDetail.email,
            password: props.userDetail.password,
            phone: props.userDetail.phone,
            userType: props.userDetail.userType
        }
    });
    console.log(initialPass);
    initialPass = false;
    }

    console.log(initialPass);

    return ( 
        <div></div>
    );
}

export default UserDetailRetrieve;
