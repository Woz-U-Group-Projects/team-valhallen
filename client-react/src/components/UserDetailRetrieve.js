import React from "react";
import { useDispatch } from 'react-redux';
import { DEFINE_USER_DETAIL } from "../actions/actions";
import '../Styling.css'

const UserDetailRetrieve = (props) => {

    const dispatch = useDispatch()

    dispatch({
        type: DEFINE_USER_DETAIL,
        payload: {
            fName: props.userDetail.fName,
            lName: props.userDetail.lName,
            email: props.userDetail.email,
            password: props.userDetail.password,
            phone: props.userDetail.phone,
            userType: props.userDetail.userType
        }
    });

    return (
        <div></div>
    );
}

export default UserDetailRetrieve;
