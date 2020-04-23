import React from "react";
import { useDispatch } from 'react-redux';
import { DEFINE_TENANT_DETAIL } from "../actions/tenantActions";

const TenantDetailRetrieve = (props) => {

    const dispatch = useDispatch()

    dispatch({
        type: DEFINE_TENANT_DETAIL,
        payload: {
            fName: props.tenantDetail.fName,
            lName: props.tenantDetail.lName,
            email: props.tenantDetail.email,
            phone: props.tenantDetail.phone
        }
    });

    return (
        <div></div>
    );
}

export default TenantDetailRetrieve;