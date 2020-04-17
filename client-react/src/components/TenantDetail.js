import React from "react";
import axios from "axios";
//import { connect } from 'react-redux';
import '../task.min.css'

const TenantDetail = (props) => {

    return (
      <div>
        <h3>Tenant Details</h3>
          <div>
            <div>{props.tenantDetails.fName} </div>
            <div>{props.tenantDetails.lName}</div>
            <div>{props.tenantDetails.email}</div>
            <div>{props.tenantDetails.phone}</div>
          </div>   
      </div>
    );
//  }
}

export default TenantDetail;